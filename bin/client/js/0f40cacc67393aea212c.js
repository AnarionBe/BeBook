(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{13:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});var a=n(52),r=n.n(a),l=n(15),o=n.n(l),c=function(){var e=window.localStorage.getItem("userToken");return e||!1},i=function(e,t){o.a.post("http://localhost/api/login",e).then(function(e){var n;n=e.data.token,window.localStorage.setItem("userToken",n),t()})},u=function(){return r()(c()).role},s=function(){var e=c();return!!e&&(!!e&&!function(e){return e<Date.now()/1e3}(e))}},69:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(51),o=n(13),c=(n(47),n(112)),i=n(113),u=n(114),s=n(70),m=n(58),p=n(36),f=n(35),E=n(63),b=n(64),d=n.n(b),v=(n(105),n(111));function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(){var e=y(r.a.useState(!1),2),t=e[0],n=e[1];return r.a.createElement("div",{className:"container404"},t&&r.a.createElement(v.a,{to:"/"}),r.a.createElement("div",{className:"contentContainer"},r.a.createElement("img",{src:d.a}),r.a.createElement("button",{onClick:function(){n(!0)}},"Go back home")))};function g(){return a.createElement("div",null,a.createElement(i.a,null,a.createElement(u.a,{exact:!0,path:"/",component:"junior"===Object(o.a)()?p.a:f.a}),a.createElement(u.a,{exact:!0,path:"/coachpage",component:f.a}),a.createElement(u.a,{exact:!0,path:"/books",component:E.a}),a.createElement(u.a,{exact:!0,path:"/bookpage",component:s.a}),a.createElement(u.a,{exact:!0,path:"/juniorpage",component:p.a}),a.createElement(u.a,{exact:!0,path:"/profile",component:m.a}),a.createElement(u.a,{component:h})," "))}var w=n(115);function N(e){return"junior"===Object(o.a)()?a.createElement("ul",{className:"headerMenu"},a.createElement("li",{className:"submenu"},"TAGS"," ",a.createElement("p",{className:"fa fa-angle-right"}),a.createElement("ul",{className:"tagsMenu"},a.createElement("div",{className:"bloc"},["Python","Programming","Javascript","Frontend","Backend","Design"].map(function(e,t){return a.createElement("li",{key:t},e)})))),a.createElement("li",null,"BEST NOTED"),a.createElement("li",null,"MOST BORROWED"),a.createElement("li",null,"HISTORY")):a.createElement("ul",{className:"headerMenu"},a.createElement("li",null,a.createElement(w.a,{to:"/coachpage"},"JUNIORS")),a.createElement("li",null,a.createElement(w.a,{to:"/coachpage/books"},"BOOKS")),a.createElement("li",null,"BORROWINGS"),a.createElement("li",null,"HISTORY"))}function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,j(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){return a.createElement("div",{className:"searchBar"},a.createElement("input",{type:"text",className:"input",placeholder:""}),a.createElement("i",{className:"fas fa-search"}))}}])&&O(n.prototype,r),l&&O(n,l),t}(),x=n(21),B=n.n(x);function C(e){return a.createElement("img",{onClick:e.onClick,className:"avatar",src:B.a})}var P=n(67),A=n.n(P),I=function(e){var t=!!e.isBorrowed,n=!!e.isLate;return a.createElement("button",{className:n?"bookpane-btn scale warning-border":"bookpane-btn scale"},a.createElement("div",{className:e.className},a.createElement("figure",null,a.createElement("img",{className:"bookcover",src:e.img,alt:e.title})),a.createElement("div",{className:"booktext"},a.createElement("h4",{className:"block-ellipsis"},e.title))),t?a.createElement("div",{className:n?"status warning return":"status okay return"},a.createElement("p",null,"return date : 02/21/19")):a.createElement("p",{className:"status"},"previously borrowed"))},_=n(32),D=n.n(_),J=n(30),L=n.n(J),M=n(31),G=n.n(M),q=n(22),H=n.n(q);function Q(e){return a.createElement("div",{className:e.slide?"lateral-menu":"lateral-menu out"},a.createElement(w.a,{to:"/profile"},a.createElement("p",{className:"my-profile"},"My Profile")),a.createElement(I,{title:"React: QuickStart manuel d'apprentissage de la bibliothèque REACT JavaScript",className:"lateral-bookpane",isBorrowed:!0,isLate:!1,img:D.a}),a.createElement(I,{title:"Design Patterns - Apprendre la conception de logiciels en réalisant un jeu vidéo (avec exercices et corrigés)",className:"lateral-bookpane",isBorrowed:!1,isLate:!1,img:G.a}),a.createElement(I,{title:"Concevez des applications mobiles avec React Native: Développement, publication sur les stones et stratégie marketing",className:"lateral-bookpane",isBorrowed:!0,isLate:!0,img:L.a}),a.createElement(I,{title:"React: QuickStart manuel d'apprentissage de la bibliothèque REACT JavaScript",className:"lateral-bookpane",isBorrowed:!1,isLate:!1,img:H.a}))}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Y(e){var t=W(a.useState(!1),2),n=t[0],r=t[1];return a.createElement("header",null,a.createElement("div",{className:"logo"},a.createElement("img",{src:A.a})),a.createElement(N,null),a.createElement(R,null),a.createElement(C,{onClick:function(){r(!n)}}),a.createElement(Q,{slide:n}))}function z(){return Object(o.b)()?a.createElement("div",null,a.createElement(Y,null),a.createElement(c.a,null,a.createElement(g,null))):a.createElement("div",null,a.createElement(l.a,null))}n.d(t,"a",function(){return z})}}]);