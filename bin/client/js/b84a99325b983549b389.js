(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{55:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a(31),l=a(112);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(){var e=i(n.useState(!1),2),t=e[0],a=e[1];return n.createElement("div",{className:"loginPage"},t&&n.createElement(l.a,{to:"junior"===Object(r.a)()?"/juniorpage":"/coachpage"}),n.createElement("div",{className:"login"},n.createElement("h2",null," LOGIN "),n.createElement("form",{onSubmit:function(e){e.preventDefault();var t={email:e.target.email.value,password:e.target.password.value};Object(r.b)(t,function(){return console.log("caca"),a(!0)})}},n.createElement("div",{className:"input"},n.createElement("h3",null,"e-mail"),n.createElement("input",{type:"text",className:"email",placeholder:"email",name:"email"}),n.createElement("h3",null,"password"),n.createElement("input",{type:"password",className:"password",placeholder:"password",name:"password"})),n.createElement("input",{className:"submit",type:"submit",value:"submit"}))))}}}]);