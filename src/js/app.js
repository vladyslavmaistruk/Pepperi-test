
class App {
  constructor() {
    this.startApp();
  }
  
  static root = document.documentElement;             // root is element to access to CCS variables
  static container = document.querySelector('.container');  // container is a wrapper of entire markup
  static textField = document.querySelector('input');
  static messageElement = document.querySelector('.error-message');
  static table = document.querySelector('table');
  static xmlList = document.querySelector('.xml-container');
  static xmlContent = document.querySelector('.content');
  
  // static regexp = /^[A-Za-z0-9]+\s*=\s*[A-Za-z0-9]+$/;
  static regexp = /^[A-Za-z0-9]{1,10}\s*=\s*[A-Za-z0-9]{1,10}$/;
  
  startApp() {
  
    const validator = new Validator(App.regexp, App.root, App.messageElement);
    const list = new List(App.table);
    
    App.textField.addEventListener('input', validator.applyValidationStyle.bind(validator));
    App.textField.addEventListener('focus', validator.applyDefaultStyle.bind(validator));
  
    App.container.addEventListener('click', event => {
      const buttonName = event.target.id;
      
      switch (buttonName) {
        case 'add':
          if(validator.verifyData(App.textField.value)) {
            list.add(App.textField.value, '=');             // '=' is a separator for <name> = <value> pair
            App.textField.value = '';
          }
          break;
        case 'sort-by-name':
          list.sortByName();
          break;
        case 'sort-by-value':
          list.sortByValue();
          break;
        case 'delete':
          list.deleteList();
          break;
        case 'xml':
          App.xmlList.style.visibility = 'visible';
          App.xmlContent.innerText = list.showAsXML();
          break;
        case 'close-popup':
          App.xmlList.style.visibility = 'hidden';
          break;
      }
    });
  }
}
