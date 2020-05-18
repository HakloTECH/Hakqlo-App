const APP_NAME = "test", APP_VERSION = "0.0.1";
const CACHE_NAME = APP_NAME+'-'+APP_VERSION;
const root_dir = "./"+APP_NAME+"/";
const FILES_TO_CACHE = [
  /*
  how to write file names to cache:

  ./file_name.txt
  ./dir_name/unko.js

  */
]

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache)=> {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', function(event) {  
  event.waitUntil(
      caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
            console.log("key: "+key);
            //if the cache name includes APP_NAME at 1st character
            //and the version is not same,
            // code below delets the cache (i.e. delets old cache)
            if (key.indexOf(APP_NAME)===0 &&key !== CACHE_NAME) {
              console.log('[ServiceWorker] Removing old cache', key);
              return caches.delete(key);
            }
          }));
        })
    
  );
});
self.addEventListener('fetch', function(evt) {
  const reqLogText = "request file:"+evt.request.url;
  const ignore = (url=>{
    if(url.match(/chrome-extension:\/\//)==null)return false;
    return true;
  })(evt.request.url);
  evt.respondWith(
    caches.match(evt.request).then(res=>{
      if(ignore)return null;
      if(res!=null){
        console.log(reqLogText+"\n ...cache exists");
        return res;
      }else{
        console.error(reqLogText+"\n ...cache didn't exit");
        return fetch(evt.request);
      }
      
    })
  );
  
});

/*

s = ["72x72","96x96", "128x128", "144x144", "152x152", "192x192", "384x384", "512x512"]
for(x=0;x<s.length;x++){
  console.log(`{
    "src": "./icon-${s[x]}.png",
    "sizes": "${s[x]}",
    "type": "image/png"
  },`);
}
*/