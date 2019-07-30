
class Validator {
  constructor(regexp, root, messageElement) {
    this.regexp = regexp;
    this.root = root;
    this.messageElement = messageElement;
  }
  
  verifyData(data) {
    return this.regexp.test(data.trim());
  }
  
  applyValidationStyle(event) {             // applies styles depending of value is valid or not
    const inputValue = event.target.value;
    
    if(this.verifyData(inputValue)) {
      this.root.style.setProperty('--color-active', '#b7ff9f');
      this.hideErrorMessage();
    }
    else if (inputValue === '') {
      this.root.style.setProperty('--color-active', '#fff');
      this.hideErrorMessage();
    }
    else {
      this.root.style.setProperty('--color-active', '#ff979c');
      this.showErrorMessage();
    }
  }
  
  applyDefaultStyle(event) {              // Return the default input style when the field is empty
    if(event.target.value === '') {
      this.root.style.setProperty('--color-active', '#fff');
      this.hideErrorMessage();
    }
  }
  
  showErrorMessage() {
    this.messageElement.innerText = 'Pair should be at format name = value\n' +
      'Max length cannot be more then 10 characters';
  }
  hideErrorMessage() {
    this.messageElement.innerText = '';
  }
}
