const utils = require('utils')
var x = {};
x.property = utils.escapeHtml('http://www.github.com/?foo=шеллы');
x.another_property = 'oren';
decodeURI(x.another_property);
