var base=location.protocol+"//"+location.host+"/worker-runner-webpack-example/";window=self;function h(r){return r.text()};function e(m){Function(m)()};fetch(base+"commons.js").then(h).then(e);fetch(base+"worker.js").then(h).then(e);