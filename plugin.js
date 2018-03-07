/*\
title: $:/plugins/loopmode/babel-polyfill/plugin.js
type: application/javascript
module-type: startup

Load the babel-polyfill library on startup

\*/

exports.startup = function() {
  $tw.modules.execute('$:/plugins/loopmode/babel-polyfill/polyfill.min.js');
}