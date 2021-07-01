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

  append(target) {
    if(typeof target == 'string') {
      this.elements.forEach(element => {
        element.innerHTML += target;
      })
    } else if (target instanceof DOMNodeCollection) {
      target.elements.forEach(element => {
        let outer = element.outerHTML;
        this.elements.forEach(element => {
          element.innerHTML += outer;
        })
      })
    } else {
      let outer = target.outerHTML;
      this.elements.forEach(element => {
        element.innerHTML += outer;
      })
    }
  }
}

module.exports = DOMNodeCollection;