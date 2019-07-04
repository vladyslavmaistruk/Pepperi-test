
class List {
  constructor (table) {
    this.table = table;
    this.collection = [];
  }
  
  add(data, separator) {
    const [name, value] = [...data.split(separator)];
    this.collection.push({name: name, value: value});
    this.display();
  }
  
  sortByName() {
   this.arrangeData('name');
    this.display();
  }
  
  sortByValue() {
    this.arrangeData('value');
    this.display();
  }
  
  deleteList() {
    this.collection = [];
    this.removeAllChildren();
  }
  
  showAsXML() {
    
  }
  
  display() {
    this.removeAllChildren();
    for (let entry of this.collection) {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${entry.name}</td><td>${entry.value}</td>`;
      this.table.appendChild(tr);
    }
  }
  
  removeAllChildren() {
    while(this.table.firstChild) {
      this.table.removeChild(this.table.firstChild);
    }
  }
  
  arrangeData(property) {
    this.collection.sort((a, b) => {
      const nameA = a[property].toUpperCase();
      const nameB = b[property].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
  }
}

// export default List;
