const CACHE_NAME="ampulheta-miria-v1";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null))));self.clients.claim();});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{try{const url=new URL(e.request.url);if(e.request.method==="GET"&&url.origin===self.location.origin){const clone=resp.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,clone));}}catch(_){}return resp;}).catch(()=>cached)));});
