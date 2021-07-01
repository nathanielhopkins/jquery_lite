let DOMNodeCollection = require('./dom_node_collection');

let $1 = (argument) => {
  if(argument instanceof HTMLElement) {
    let element = new DOMNodeCollection([argument]);
    return element;
  } else {
    let nodelist = document.querySelectorAll(argument);
    let nodeArray = Array.from(nodelist);
    return new DOMNodeCollection(nodeArray);
  }
}

window.$1 = $1;