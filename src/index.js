let DOMNodeCollection = require('./dom_node_collection');

let $1 = (argument) => {
  let nodelist = document.querySelectorAll(argument);
  let nodeArray = Array.from(nodelist);
  return nodeArray;
}

window.$1 = $1;