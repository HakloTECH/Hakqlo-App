var serviceWorkerOption = {
  "assets": [
    "./9c0ed517f8f6c38321546d47e353d3c8.svg",
    "./2169919dec52ee59e0066c7042d4e7cf.png",
    "./c15a083c3953560c96fb6123833f8712.png",
    "./78492f0a1915464b90c8acc9c91b67cb.scss",
    "./0e3295e4662107e65d1f8f13f4ba967c.svg",
    "./2bfa27340655858f8ebb60b791e8debb.svg",
    "./78492f0a1915464b90c8acc9c91b67cb.css",
    "./43753b6d70284ce6a52997185c34c02a.svg",
    "./runtime.90ca6d888a79ed43add3.js",
    "./vendors.css",
    "./vendors.90ca6d888a79ed43add3.js",
    "./app.css",
    "./app.90ca6d888a79ed43add3.js",
    "./install.css",
    "./install.90ca6d888a79ed43add3.js",
    "./index.html"
  ]
};
        
        !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n.h="c6f069ab886cb63a1a1c",n.cn=void 0,n(n.s=0)}([function(e,t,n){const o="hakqlo-app-"+n.h,r=serviceWorkerOption.assets;self.portSW,self.addEventListener("message",e=>{const{type:t}=e.data;switch(console.log(t),t){case"init":self.portSW=e.ports[0],console.log("initialized sw")}self.portSW&&portSW.start()}),console.log=(...e)=>{self.portSW&&portSW.postMessage({type:"consoleLog",content:e})},self.addEventListener("install",(function(e){e.waitUntil(caches.open(o).then(e=>(console.log("[ServiceWorker] Pre-caching offline page"),e.addAll(r.map(e=>new Request(e,{credentials:"same-origin"}))))))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then(e=>Promise.all(e.map(e=>{if(console.log("key: "+e),0===e.indexOf("hakqlo-app")&&e!==o)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)}))))})),self.addEventListener("fetch",(function(e){const t="request file:"+e.request.url;e.respondWith(caches.match(e.request).then(n=>null!=n?(console.log(t+"\n ...cache exists"),n):(console.warn(t+"\n ...cache didn't exit"),fetch(e.request))))}))}]);