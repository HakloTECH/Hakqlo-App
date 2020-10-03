var serviceWorkerOption = {
  "assets": [
    "./7d9900f92548b333e12c1a86962381b6.svg",
    "./2169919dec52ee59e0066c7042d4e7cf.png",
    "./78492f0a1915464b90c8acc9c91b67cb.scss",
    "./0e3295e4662107e65d1f8f13f4ba967c.svg",
    "./2bfa27340655858f8ebb60b791e8debb.svg",
    "./43753b6d70284ce6a52997185c34c02a.svg",
    "./runtime.a7da40e8c5ea8fe1f2db.js",
    "./vendors.css",
    "./vendors.a7da40e8c5ea8fe1f2db.js",
    "./app.css",
    "./app.a7da40e8c5ea8fe1f2db.js",
    "./install.css",
    "./install.a7da40e8c5ea8fe1f2db.js",
    "./index.html"
  ]
};
        
        !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n.h="57ddbfa7251a5b8a01ea",n.cn=void 0,n(n.s=0)}([function(e,t,n){var o="hakqlo-app-"+n.h,r=serviceWorkerOption.assets;self.portSW,self.addEventListener("message",(function(e){var t=e.data.type;switch(console.log(t),t){case"init":self.portSW=e.ports[0],console.log("initialized sw")}self.portSW&&portSW.start()})),console.log=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];self.portSW&&portSW.postMessage({type:"consoleLog",content:t})},self.addEventListener("install",(function(e){e.waitUntil(caches.open(o).then((function(e){return console.log("[ServiceWorker] Pre-caching offline page"),e.addAll(r.map((function(e){return new Request(e,{credentials:"same-origin"})})))})))})),self.addEventListener("activate",(function(e){e.waitUntil(caches.keys().then((function(e){return Promise.all(e.map((function(e){if(console.log("key: "+e),0===e.indexOf("hakqlo-app")&&e!==o)return console.log("[ServiceWorker] Removing old cache",e),caches.delete(e)})))})))})),self.addEventListener("fetch",(function(e){var t="request file:"+e.request.url;e.respondWith(caches.match(e.request).then((function(n){return null!=n?(console.log(t+"\n ...cache exists"),n):(console.warn(t+"\n ...cache didn't exit"),fetch(e.request))})))}))}]);