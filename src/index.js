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
  let params;
  if(options['data']) {
    params = generateParamsString(options['data']);
  }

  console.log(options);
  
  let http = new XMLHttpRequest();
  http.open(options.method, options.url);

  http.onload = function (e) {
    if(http.status === 200) {
      options.success(JSON.parse(http.response));
    } else {
      options.error(JSON.parse(http.response));
    }
  }
  
  http.send(params);
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
    url: '',
    method: 'GET',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: () => {},
    error: () => {},
    data: {}
  };

  return defaults;
}

let generateParamsString = (data) => {
  let query = Object.keys(data).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
  }).join('&');
  return query;
}

window.$1 = $1;