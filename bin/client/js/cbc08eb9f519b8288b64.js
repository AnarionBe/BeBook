(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(e,t,n){"use strict";var a=n(0);function r(e){return e.isCoach?a.createElement("ul",{className:"headerMenu"},a.createElement("li",{className:"submenu"},"STUDENTS"),a.createElement("li",null,"BOOKS"),a.createElement("li",null,"BORROWINGS"),a.createElement("li",null,"HISTORY")):a.createElement("ul",{className:"headerMenu"},a.createElement("li",{className:"submenu"},"TAGS"," ",a.createElement("p",{className:"fa fa-angle-right"}),a.createElement("ul",{className:"tagsMenu"},a.createElement("div",{className:"bloc"},["Python","Programming","Javascript","Frontend","Backend","Design"].map(function(e,t){return a.createElement("li",null,e)})))),a.createElement("li",null,"BEST NOTED"),a.createElement("li",null,"MOST BORROWED"),a.createElement("li",null,"HISTORY"))}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,i(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){return a.createElement("div",{className:"searchBar"},a.createElement("input",{type:"text",className:"input",placeholder:""}),a.createElement("i",{className:"fas fa-search"}))}}])&&o(n.prototype,r),l&&o(n,l),t}(),m=n(23),f=n.n(m);function d(e){return a.createElement("img",{onClick:e.onClick,className:"avatar",src:f.a})}var p=n(51),y=n.n(p);function E(e){return a.createElement("header",null,a.createElement("div",{className:"logo"},a.createElement("img",{src:y.a})),a.createElement(r,{isCoach:e.isCoach}),a.createElement(u,null),a.createElement(d,{onClick:e.switchLateralMenu}))}n.d(t,"a",function(){return E})},15:function(e,t,n){"use strict";var a=n(0),r=function(e){var t=!!e.isBorrowed,n=!!e.isLate;return a.createElement("button",{className:n?"bookpane-btn scale warning-border":"bookpane-btn scale"},a.createElement("div",{className:e.className},a.createElement("figure",null,a.createElement("img",{className:"bookcover",src:e.img,alt:e.title})),a.createElement("div",{className:"booktext"},a.createElement("h4",{className:"block-ellipsis"},e.title))),t?a.createElement("div",{className:n?"status warning return":"status okay return"},a.createElement("p",null,"return date : 02/21/19")):a.createElement("p",{className:"status"},"previously borrowed"))},l=n(20),o=n.n(l),c=n(24),i=n.n(c),s=n(25),u=n.n(s),m=n(26),f=n.n(m);function d(e){return a.createElement("div",{className:e.slide?"lateral-menu":"lateral-menu out"},a.createElement("a",{href:"/profile"},a.createElement("p",{className:"my-profile"},"My Profile")),a.createElement(r,{title:"React: QuickStart manuel d'apprentissage de la bibliothèque REACT JavaScript",className:"lateral-bookpane",isBorrowed:!0,isLate:!1,img:o.a}),a.createElement(r,{title:"Design Patterns - Apprendre la conception de logiciels en réalisant un jeu vidéo (avec exercices et corrigés)",className:"lateral-bookpane",isBorrowed:!1,isLate:!1,img:u.a}),a.createElement(r,{title:"Concevez des applications mobiles avec React Native: Développement, publication sur les stones et stratégie marketing",className:"lateral-bookpane",isBorrowed:!0,isLate:!0,img:i.a}),a.createElement(r,{title:"React: QuickStart manuel d'apprentissage de la bibliothèque REACT JavaScript",className:"lateral-bookpane",isBorrowed:!1,isLate:!1,img:f.a}))}n.d(t,"a",function(){return d})},18:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(56),r=n.n(a),l=n(57),o=n.n(l),c=function(){var e=window.localStorage.getItem("userToken");return e||!1},i=function(e,t){o.a.post("http://localhost/api/login",e).then(function(e){var n;n=e.data.token,window.localStorage.setItem("userToken",n),t()})},s=function(){return r()(c()).role},u=function(){var e=c();return!!e&&(!!e&&!function(e){return e<Date.now()/1e3}(e))}},49:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var a=n(0),r=n(69),l=n(52),o=n(53),c=n(71),i=n(32),s=n(72),u=n(18),m=(n(107),n(73)),f=n(113),d=n(21);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(){var e=p(a.useState(!1),2),t=e[0],n=e[1],y=function(){n(!t)},E=function(){document.getElementsByClassName("reviewModale")[0].style.display="block",document.getElementsByTagName("body")[0].style.overflow="hidden"},b=function(){document.getElementsByClassName("reviewModale")[0].style.display="none",document.getElementsByTagName("body")[0].style.overflow="auto"},g=function(){document.getElementsByClassName("modifyProfile")[0].style.display="block",document.getElementsByClassName("profileToggleBack")[0].style.display="block",document.getElementsByClassName("email")[0].style.display="none",document.getElementsByClassName("modifyButton")[0].style.display="none"},v=function(){document.getElementsByClassName("modifyProfile")[0].style.display="none",document.getElementsByClassName("email")[0].style.display="block",document.getElementsByClassName("modifyButton")[0].style.display="block",document.getElementsByClassName("profileToggleBack")[0].style.display="none"};return Object(u.b)()?a.createElement(m.a,null,a.createElement(f.a,null,a.createElement(d.a,{exact:!0,path:"/login",render:function(){return a.createElement("div",null,a.createElement(i.a,null))}}),a.createElement(d.a,{exact:!0,path:"/coachpage",render:function(){return a.createElement("div",null,a.createElement(s.a,{switchLateralMenu:y,slide:t,isCoach:!1}))}}),a.createElement(d.a,{exact:!0,path:"/bookpage",render:function(){return a.createElement("div",null,a.createElement(r.a,{reviewModaleOn:E,switchLateralMenu:y,slide:t,isCoach:!1}),a.createElement(l.a,{reviewModaleOff:b}))}}),a.createElement(d.a,{exact:!0,path:"/juniorpage",render:function(){return a.createElement("div",null,a.createElement(c.a,{switchLateralMenu:y,slide:t,isCoach:!1}))}}),a.createElement(d.a,{exact:!0,path:"/profile",render:function(){return a.createElement("div",null,a.createElement(o.a,{modifyProfile:g,ProfileToggleBack:v,switchLateralMenu:y,slide:t,isCoach:!1}))}}))):a.createElement("div",null,a.createElement(i.a,null))}}}]);