(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),c=n(3),i=n.n(c),a=(n.p,n(1));n.p;function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(i,t);var e,n,o,c=p(i);function i(){return u(this,i),c.apply(this,arguments)}return e=i,(n=[{key:"componentDidMount",value:function(){var t=document.querySelector("#splash"),e=document.querySelector("svg#logo_anime #logo_grad");e.setAttribute("x1","-20px"),e.setAttribute("x2","20px"),e.setAttribute("y1","-57.73502691896257px"),e.setAttribute("y2","57.73502691896257px");var n,o,r,c=document.querySelector("svg#logo_anime g"),i=function(){n=document.body.clientWidth,o=document.body.clientHeight,r=Math.max(n,o),c.setAttribute("transform","translate(".concat(n/2," ").concat(o/2,")"))};i(),window.addEventListener("resize",i),Object(a.a)({targets:"svg#logo_anime path#centri",d:[{value:["M 0 0 l 0 0 l 0 0 z","M 0 0 l 0 0 l 0 0 z"],duration:5200/6},{value:"M 0 -23.094010767585026 l 20 34.64101615137754 l -40 0 z",duration:0}],duration:1300}),Object(a.a)({targets:"svg#logo_anime path#around",d:[{value:[" M ".concat(.34641016151377546*r-20,"  ").concat(.6*r-57.73502691896257," l -10 17.32050807568877 l 10 17.32050807568877 l 20 0 z m ").concat(40-.6928203230275509*r,"  ").concat(34.64101615137754-1.2*r," l 20 0 l -20 -34.64101615137754 l -20 0 z M ").concat(59.999999999999986+.34641016151377546*r*-.4999999999999998-.6*r*.8660254037844387,"  ").concat(11.547005383792495+.34641016151377546*r*.8660254037844387+.6*r*-.4999999999999998," l -10.000000000000002 -17.32050807568877 l -20 5.329070518200751e-15 l -9.999999999999996 17.320508075688775 z m ").concat(-49.99999999999999-.6928203230275509*r*-.4999999999999998+1.2*r*.8660254037844387,"  ").concat(17.320508075688785-.6928203230275509*r*.8660254037844387-1.2*r*-.4999999999999998," l -9.999999999999996 17.320508075688775 l 40 -1.0658141036401503e-14 l 9.999999999999996 -17.320508075688775 z M ").concat(.34641016151377546*r*-.5000000000000004-39.99999999999998-.6*r*-.8660254037844385,"  ").concat(46.18802153517008+.34641016151377546*r*-.8660254037844385+.6*r*-.5000000000000004," l 20 -7.105427357601002e-15 l 9.999999999999993 -17.320508075688778 l -10.000000000000009 -17.32050807568877 z m ").concat(9.999999999999975-.6928203230275509*r*-.5000000000000004+1.2*r*-.8660254037844385,"  ").concat(-51.96152422706633-.6928203230275509*r*-.8660254037844385-1.2*r*-.5000000000000004," l -10.000000000000009 -17.32050807568877 l -19.999999999999986 34.641016151377556 l 10.000000000000009 17.32050807568877 z")," M ".concat(.34641016151377546*r-20,"  ").concat(.6*r-57.73502691896257," l -10 17.32050807568877 l 10 17.32050807568877 l 20 0 z m ").concat(40-.6928203230275509*r,"  ").concat(34.64101615137754-1.2*r," l 20 0 l -20 -34.64101615137754 l -20 0 z M ").concat(59.999999999999986+.34641016151377546*r*-.4999999999999998-.6*r*.8660254037844387,"  ").concat(11.547005383792495+.34641016151377546*r*.8660254037844387+.6*r*-.4999999999999998," l -10.000000000000002 -17.32050807568877 l -20 5.329070518200751e-15 l -9.999999999999996 17.320508075688775 z m ").concat(-49.99999999999999-.6928203230275509*r*-.4999999999999998+1.2*r*.8660254037844387,"  ").concat(17.320508075688785-.6928203230275509*r*.8660254037844387-1.2*r*-.4999999999999998," l -9.999999999999996 17.320508075688775 l 40 -1.0658141036401503e-14 l 9.999999999999996 -17.320508075688775 z M ").concat(.34641016151377546*r*-.5000000000000004-39.99999999999998-.6*r*-.8660254037844385,"  ").concat(46.18802153517008+.34641016151377546*r*-.8660254037844385+.6*r*-.5000000000000004," l 20 -7.105427357601002e-15 l 9.999999999999993 -17.320508075688778 l -10.000000000000009 -17.32050807568877 z m ").concat(9.999999999999975-.6928203230275509*r*-.5000000000000004+1.2*r*-.8660254037844385,"  ").concat(-51.96152422706633-.6928203230275509*r*-.8660254037844385-1.2*r*-.5000000000000004," l -10.000000000000009 -17.32050807568877 l -19.999999999999986 34.641016151377556 l 10.000000000000009 17.32050807568877 z")]},{value:" M ".concat(r/6.928203230275509-20,"  ").concat(r/4-57.73502691896257," l -10 17.32050807568877 l 70 121.2435565298214 l 20 0 z m ").concat(40-r/3.4641016151377544,"  ").concat(34.64101615137754-r/2," l 20 0 l -140 -242.4871130596428 l -20 0 z M ").concat(59.999999999999986+r/6.928203230275509*-.4999999999999998-r/4*.8660254037844387,"  ").concat(11.547005383792495+r/6.928203230275509*.8660254037844387+r/4*-.4999999999999998," l -10.000000000000002 -17.32050807568877 l -140 3.552713678800501e-14 l -9.999999999999996 17.320508075688775 z m ").concat(-49.99999999999999-r/3.4641016151377544*-.4999999999999998+r/2*.8660254037844387,"  ").concat(17.320508075688785-r/3.4641016151377544*.8660254037844387-r/2*-.4999999999999998," l -9.999999999999996 17.320508075688775 l 280 -7.105427357601002e-14 l 9.999999999999996 -17.320508075688775 z M ").concat(r/6.928203230275509*-.5000000000000004-39.99999999999998-r/4*-.8660254037844385,"  ").concat(46.18802153517008+r/6.928203230275509*-.8660254037844385+r/4*-.5000000000000004," l 20 -7.105427357601002e-15 l 69.99999999999994 -121.24355652982146 l -10.000000000000009 -17.32050807568877 z m ").concat(9.999999999999975-r/3.4641016151377544*-.5000000000000004+r/2*-.8660254037844385,"  ").concat(-51.96152422706633-r/3.4641016151377544*-.8660254037844385-r/2*-.5000000000000004," l -10.000000000000009 -17.32050807568877 l -139.9999999999999 242.48711305964292 l 10.000000000000009 17.32050807568877 z"),duration:325,easing:"easeInCubic"},{value:" M 0 -23.094010767585026 l -10 17.32050807568877 l 15 25.980762113533157 l 20 0 z m 0 -34.64101615137754 l 20 0 l -30 -51.96152422706631 l -20 0 z M 19.999999999999996 11.547005383792508 l -10.000000000000002 -17.32050807568877 l -29.999999999999996 7.105427357601002e-15 l -9.999999999999996 17.320508075688775 z m 30 17.320508075688764 l -9.999999999999996 17.320508075688775 l 59.99999999999999 -1.4210854715202004e-14 l 9.999999999999996 -17.320508075688775 z M -19.999999999999993 11.547005383792524 l 20 -7.105427357601002e-15 l 14.999999999999986 -25.980762113533167 l -10.000000000000009 -17.32050807568877 z m -29.999999999999993 17.320508075688785 l -10.000000000000009 -17.32050807568877 l -29.99999999999997 51.961524227066334 l 10.000000000000009 17.32050807568877 z",duration:1300/6,easing:"linear"},{value:" M -20 -57.73502691896257 l -10 17.32050807568877 l 10 17.32050807568877 l 20 0 z m 40 34.64101615137754 l 20 0 l -20 -34.64101615137754 l -20 0 z M 59.999999999999986 11.547005383792495 l -10.000000000000002 -17.32050807568877 l -20 5.329070518200751e-15 l -9.999999999999996 17.320508075688775 z m -49.99999999999999 17.320508075688785 l -9.999999999999996 17.320508075688775 l 40 -1.0658141036401503e-14 l 9.999999999999996 -17.320508075688775 z M -39.99999999999998 46.18802153517008 l 20 -7.105427357601002e-15 l 9.999999999999993 -17.320508075688778 l -10.000000000000009 -17.32050807568877 z m 9.999999999999975 -51.96152422706633 l -10.000000000000009 -17.32050807568877 l -19.999999999999986 34.641016151377556 l 10.000000000000009 17.32050807568877 z",easing:"easeOutCubic"}],duration:1300}),Object(a.a)({targets:'svg#logo_anime stop[offset="1"]',"stop-color":[{value:"#01fdff"},{value:"#dc00ff"}],easing:"easeInCubic",delay:400,duration:1500}),Object(a.a)({targets:"svg#logo_anime",filter:[{value:"drop-shadow(0px 0px 0px #8fd0ff)"},{value:"drop-shadow(0px 0px 15px #8fd0ff)"},{value:"drop-shadow(0px 0px 5px #8fd0ff)"},{value:"drop-shadow(0px 0px 0px #8fd0ff)"}],easing:"easeInOutCubic",delay:1300,duration:800}),setTimeout((function(){t.style.transition="0.7s",t.style.opacity=0,setTimeout((function(){t.remove()}),700)}),3e3)}},{key:"render",value:function(){return r.a.createElement("div",{id:"splash"},r.a.createElement("svg",{id:"logo_anime"},r.a.createElement("linearGradient",{xmlns:"http://www.w3.org/2000/svg",id:"logo_grad",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:"#01fdff",offset:"0"}),r.a.createElement("stop",{stopColor:"#01fdff",offset:"1"})),r.a.createElement("g",{stroke:"transparent"},r.a.createElement("path",{id:"around",d:"M 0 0 l 0 0 l 0 0 l 0 0 z m 0 0 l 0 0 l 0 0 l 0 0 z M 0 0 l 0 0 l 0 0 l 0 0 z m 0 0 l 0 0 l 0 0 l 0 0 z M 0 0 l 0 0 l 0 0 l 0 0 z m 0 0 l 0 0 l 0 0 l 0 0 z M 0 0 l 0 0 l 0 0"}),r.a.createElement("path",{id:"centri",d:" M 0 0 l 0 0 l 0 0 z"}))))}}])&&s(e.prototype,n),o&&s(e,o),i}(r.a.Component);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=E(t);if(e){var r=E(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(i,t);var e,n,o,c=g(i);function i(){var t;b(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return _(S(t=c.call.apply(c,[this].concat(n))),"listCover",r.a.createRef()),_(S(t),"state",{scrollXStart:0,WLScrollXStart:0}),t}return e=i,(n=[{key:"componentDidMount",value:function(){var t=this,e=this.props.winList,n=this.listCover.current;n.addEventListener("touchstart",(function(n){t.setState({scrollXStart:3.3333*n.changedTouches[0].screenX/window.screen.width,WLScrollXStart:e.state.scrollLength}),e.setState({scrolling:!0})}),{passive:!1}),n.addEventListener("touchmove",(function(n){n.preventDefault();var o=t.state.scrollXStart-3.3333*n.changedTouches[0].screenX/window.screen.width+t.state.WLScrollXStart;if(1===e.appWindows.length&&(o>.4||o<-.4))return 0;e.scrollTo(o)}),{passive:!1}),n.addEventListener("touchend",(function(t){e.setState({scrolling:!1}),e.bringToCenter()}),{passive:!1}),n.addEventListener("click",(function(n){e.setState({currentWin:t.props.index,listView:!1})}),{passive:!1})}},{key:"getDistanceFromCenter",value:function(t,e,n){var o=t-e;return Math.abs(o)>Math.abs(o+n)?o+n:Math.abs(o)>Math.abs(o-n)?o-n:o}},{key:"render",value:function(){var t=this.props.winList,e=t.state.listView,n=t.state.currentWin===this.props.index,o=this.getDistanceFromCenter(this.props.index,t.state.scrollLength,t.appWindows.length)*Math.PI/4;Math.abs(o)>Math.PI&&(o=Math.PI);var c=Math.cos(o);return r.a.createElement("div",{className:"app-window "+(e?"":n?"focus":"away"),style:e?{transform:"scale(0.6, 0.6) translateZ(".concat(70*c,"px) translateX(").concat(50*Math.sin(o),"%)"),opacity:Math.pow(c,1.5)||0}:null},r.a.createElement("div",{className:"list-cover",ref:this.listCover}),r.a.createElement(this.props.component,{winList:t}))}}])&&v(e.prototype,n),o&&v(e,o),i}(r.a.Component),M=function(t){return r.a.createElement("div",{className:"center-content"},r.a.createElement("p",null,"Window 1"),r.a.createElement("button",{onClick:function(){t.winList.setState({listView:!0})}},"Open List"))},P=function(t){return r.a.createElement("div",{className:"center-content"},r.a.createElement("p",null,"Window 2"),r.a.createElement("button",{onClick:function(){t.winList.setState({listView:!0})}},"Open List"))},z=function(t){return r.a.createElement("div",{className:"center-content"},r.a.createElement("p",null,"Window 3"),r.a.createElement("button",{onClick:function(){t.winList.setState({listView:!0})}},"Open List"))},L=function(t){return r.a.createElement("div",{className:"center-content"},r.a.createElement("p",null,"Window 4"),r.a.createElement("button",{onClick:function(){t.winList.setState({listView:!0})}},"Open List"))},k=function(t){return r.a.createElement("div",{className:"center-content"},r.a.createElement("p",null,"Window 5"),r.a.createElement("button",{onClick:function(){t.winList.setState({listView:!0})}},"Open List"))},R=function(t){return r.a.createElement("div",{className:"center-content"},r.a.createElement("p",null,"Window 6"),r.a.createElement("button",{onClick:function(){t.winList.setState({listView:!0})}},"Open List"))};n.p;function x(t){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=I(t);if(e){var r=I(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return A(this,n)}}function A(t,e){return!e||"object"!==x(e)&&"function"!=typeof e?N(t):e}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(i,t);var e,n,o,c=D(i);function i(){var t;C(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return U(N(t=c.call.apply(c,[this].concat(n))),"appWindows",[M,P,z,L,k,R]),U(N(t),"state",{currentWin:0,scrollLength:0,listView:!1,scrolling:!1}),t}return e=i,(n=[{key:"componentDidMount",value:function(){var t={};window.location.search.slice(1).split("&").forEach((function(e){var n=e.split("=");t[n[0]]=n[1]})),t.appWindow&&this.setState({currentWin:Number(t.appWindow),scrollLength:Number(t.appWindow)})}},{key:"scrollTo",value:function(t){var e=t%this.appWindows.length;e<0&&(e+=this.appWindows.length),this.setState({scrollLength:e})}},{key:"bringToCenter",value:function(){this.setState({scrollLength:Math.round(this.state.scrollLength)})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"window-list "+(this.state.scrolling?"scrolling":"")},this.appWindows.map((function(e,n){return r.a.createElement(j,{winList:t,component:e,index:n,key:n})})))}}])&&W(e.prototype,n),o&&W(e,o),i}(r.a.Component);n.p;function X(t){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Z(t);if(e){var r=Z(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return G(this,n)}}function G(t,e){return!e||"object"!==X(e)&&"function"!=typeof e?H(t):e}function H(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.a.Component;function K(t){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function tt(t,e){return(tt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=rt(t);if(e){var r=rt(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return nt(this,n)}}function nt(t,e){return!e||"object"!==K(e)&&"function"!=typeof e?ot(t):e}function ot(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rt(t){return(rt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var it=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&tt(t,e)}(i,t);var e,n,o,c=et(i);function i(){var t;Q(this,i);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return ct(ot(t=c.call.apply(c,[this].concat(n))),"state",{isPWA:window.matchMedia("(display-mode: standalone)").matches}),t}return e=i,(n=[{key:"componentDidMount",value:function(){var t=this;window.matchMedia("(display-mode: standalone)").addEventListener("change",(function(e){t.setState({isPWA:e.matches})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(V,null))}}])&&Y(e.prototype,n),o&&Y(e,o),i}(r.a.Component),at=n(4);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(it,null)),document.getElementById("root")),at.a()},4:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));var o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function r(e){if(console.log("production"),"serviceWorker"in navigator){if(new URL(t.env.PUBLIC_URL,window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat(t.env.PUBLIC_URL||"","/service-worker.js");o?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?(navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})),console.log("sw not found")):(console.log("sw found"),c(t,e))})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):c(n,e)}))}}function c(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}}).call(this,n(9))}},[[10,1,2]]]);