class DOMNodeCollection {
  constructor(array) {
    this.elements = array;
  }

  html(string = null) {
    if(string != null) {
      this.elements.forEach(element => {
        element.innerHTML = string;
      });
    } else {
      return this.elements[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }
}

module.exports = DOMNodeCollection;