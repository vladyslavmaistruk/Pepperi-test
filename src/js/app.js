// import List from './list';


class App {
  constructor() {
    this.startApp();
  }
  
  startApp() {
    const textField = document.querySelector('input');
    const table = document.querySelector('table');
    const container = document.querySelector('.container');
  
    const list = new List(table);
    
    container.addEventListener('click', event => {
      const buttonName = event.target.id;
      
      switch (buttonName) {
        case 'add':
          list.add(textField.value, '=');
          textField.value = '';
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
          list.showAsXML();
          break;
      }
    });
  }
}

// export default App;


