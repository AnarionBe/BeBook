(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{19:function(n,t,o){"use strict";var i=o(7),r=o.n(i);t.a=function(){var n=null,t=[];return{setPrompt:function(t){return r()(null==n,"A history supports only one prompt at a time"),n=t,function(){n===t&&(n=null)}},confirmTransitionTo:function(t,o,i,e){if(null!=n){var u="function"==typeof n?n(t,o):n;"string"==typeof u?"function"==typeof i?i(u,e):(r()(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),e(!0)):e(!1!==u)}else e(!0)},appendListener:function(n){var o=!0,i=function(){o&&n.apply(void 0,arguments)};return t.push(i),function(){o=!1,t=t.filter(function(n){return n!==i})}},notifyListeners:function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];t.forEach(function(n){return n.apply(void 0,o)})}}}},46:function(n,t,o){"use strict";o(7),o(3),o(8),o(19),"function"==typeof Symbol&&Symbol.iterator,Object.assign}}]);