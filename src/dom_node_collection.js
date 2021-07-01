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

  attr(name, value) {
    if(name instanceof Object){
      let valuePairs = Object.entries(name);
      valuePairs.forEach(pair => {
        this.attr(pair[0], pair[1]);
      })
    } else if (name && value) {
      this.elements.forEach(element => {
        element.setAttribute(name, value);
      })
    } else {
      return this.elements[0].attributes[name].value;
    }
  }
}

module.exports = DOMNodeCollection;