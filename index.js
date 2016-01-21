var fs = require('fs');
var insertCss = require('insert-css');
module.exports = (function() {
  var css = [
    fs.readFileSync(__dirname + '/ariutta-loading.css')
  ];

  css.map(insertCss);
})();
