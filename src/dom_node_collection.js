class DOMNodeCollection {
  constructor(array) {
    this.elements = array;
  }

  html(string = null) {
    if(string) {
      this.elements.forEach(element => {
        element.innerHTML = string;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }
}

module.exports = DOMNodeCollection;