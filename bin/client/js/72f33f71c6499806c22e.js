(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{71:function(e,a,t){"use strict";var n=t(0),r=t(5),s=t(13),i=t(8);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,a){return!a||"object"!==l(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,a){return(u=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var p=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),c(this,m(a).apply(this,arguments))}var t,l,p;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&u(e,a)}(a,n["Component"]),t=a,(l=[{key:"render",value:function(){var e=!!this.props.isAvailable;return n.createElement("button",{className:"bookpane-btn"},n.createElement("div",{className:this.props.className},n.createElement("div",{className:"stars-wrap"},n.createElement(r.a,{icon:i.a,className:"stars"}),n.createElement(r.a,{icon:i.a,className:"stars"}),n.createElement(r.a,{icon:i.a,className:"stars"}),n.createElement(r.a,{icon:s.a,className:"stars"}),n.createElement(r.a,{icon:s.a,className:"stars"})),n.createElement("figure",null,n.createElement("img",{className:"bookcover",src:this.props.img,alt:this.props.title})),n.createElement("div",{className:"booktext"},n.createElement("h3",{className:"block-ellipsis"},this.props.title),n.createElement("div",{className:e?"okay":"warning"},n.createElement("p",null,e?"Available":"Borrowed by John Doe"),e?"":n.createElement("p",{className:"warning until"},"until 02/21/19")),n.createElement("div",null,n.createElement("p",null,"python programmation")))))}}])&&o(t.prototype,l),p&&o(t,p),a}(),b=t(22),v=t.n(b),f=t(54),d=t.n(f),E=t(24),g=t.n(E),h=t(25),y=t.n(h),N=t(26),w=t.n(N),k=t(55),A=t.n(k),S=t(20),L=t.n(S);function j(){return n.createElement("div",{className:"container"},n.createElement(p,{title:"Design Patterns - Apprendre la conception de logiciels en réalisant un jeu vidéo (avec exercices et corrigés)",className:"bookpane",isAvailable:!0,img:v.a}),n.createElement(p,{title:"Apprendre à programmer avec Python 3",className:"bookpane",isAvailable:!0,img:d.a}),n.createElement(p,{title:"Beginning HTML5 and CSS3 For Dummies",className:"bookpane",isAvailable:!0,img:g.a}),n.createElement(p,{title:"Réalisez votre site web avec HTML 5 et CSS 3",className:"bookpane",isAvailable:!0,img:y.a}),n.createElement(p,{title:"CSS 3 Flexbox: Plongez dans les CSS modernes.",className:"bookpane",isAvailable:!0,img:w.a}),n.createElement(p,{title:"Des applications modernes avec React: Maîtrisez un framework JavaScript parmi les plus utilisés dans l’industrie",className:"bookpane disabled",isAvailable:!1,img:A.a}),n.createElement(p,{title:"Concevez des applications mobiles avec React Native: Développement, publication sur les stones et stratégie marketing",className:"bookpane disabled",isAvailable:!1,img:L.a}),n.createElement(p,{title:"React: QuickStart manuel d'apprentissage de la bibliothèque REACT JavaScript",className:"bookpane",isAvailable:!0,img:L.a}))}var C=t(14),O=t(15);function P(e){return n.createElement("div",{className:"main"},n.createElement(C.a,{switchLateralMenu:e.switchLateralMenu,isCoach:e.isCoach}),n.createElement(j,null),n.createElement(O.a,{slide:e.slide}))}t.d(a,"a",function(){return P})},72:function(e,a,t){"use strict";var n=t(0),r=t(14),s=t(61);t(104);function i(){return n.createElement("div",{className:"table"},n.createElement(s.a,{data:[{Firstname:"Raphaël",Lastname:"Colson",Avatar:"../assets/avatar.jpg"},{Firstname:"John",Lastname:"Doe",Avatar:"../assets/avatar.jpg"},{Firstname:"Ada",Lastname:"Lovelace",Avatar:"../assets/avatar.jpg"},{Firstname:"Louis",Lastname:"Labrocante",Avatar:"../assets/avatar.jpg"}],columns:[{Header:"Firstname",accessor:"firstname"},{Header:"Lastname",accessor:"lastname"},{Header:"Avatar",accessor:"avatar"}],defaultPageSize:3,pageSizeOptions:[3,6]}))}var l=t(15),o=t(70);a.a=Object(o.a)({componentWillMount:function(e){return e}})(function(e){return n.createElement("div",null,n.createElement(r.a,{isCoach:e.isCoach,switchLateralMenu:e.switchLateralMenu}),n.createElement(i,null),n.createElement(l.a,{slide:e.slide}))})}}]);