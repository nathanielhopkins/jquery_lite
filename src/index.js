let DOMNodeCollection = require('./dom_node_collection');

let queue = [];
let loaded = false;

document.addEventListener('DOMContentLoaded', () => {
  loaded = true;
  queue.forEach(funct => funct());
}, false);

let $1 = (argument) => {
  switch (typeof argument) {
    case "string":
      let nodelist = document.querySelectorAll(argument);
      let nodeArray = Array.from(nodelist);
      return new DOMNodeCollection(nodeArray);
    case "obect":
      if (argument instanceof HTMLElement) {
        return new DOMNodeCollection([argument]);
      }
    case "function":
      return handleFunction(argument);
  }
}

let handleFunction = (funct) => {
  if(loaded == false) {
    queue.push(funct);
  } else {
    funct();
  }
}

window.$1 = $1;