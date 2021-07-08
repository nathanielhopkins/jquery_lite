let DOMNodeCollection = require('./dom_node_collection');

let queue = [];
let loaded = false;

document.addEventListener('DOMContentLoaded', () => {
  loaded = true;
  queue.forEach(funct => funct());
}, false);

$1 = (argument) => {
  switch (typeof argument) {
    case "string":
      let nodelist = document.querySelectorAll(argument);
      let nodeArray = Array.from(nodelist);
      return new DOMNodeCollection(nodeArray);
    case "object":
      if (argument instanceof HTMLElement) {
        return new DOMNodeCollection([argument]);
      };
    case "function":
      return handleFunction(argument);
  }
}

$1.extend = (base, ...addObjects) => {
  addObjects.forEach(object => {
    base = Object.assign(base, object)
  })

  return base;    
}

$1.ajax = (options) => {
  let defaults = ajaxDefaults();
  options = $1.extend(defaults, options);
  let params = generateParamsString(options)
  // let data = options[data];

  return options;

}

// helpers
let handleFunction = (funct) => {
  if(loaded == false) {
    queue.push(funct);
  } else {
    funct();
  }
}

let ajaxDefaults = () => {
  let defaults = {
    url: window.location.href,
    method: 'GET',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    // success: ,
    // error: 
  };

  return defaults;
}

let generateParamsString = (data) => {
  let query = '?' + Object.keys(data).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  }).join('&');
  return query;
}

window.$1 = $1;