const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            // eslint-disable-next-line array-callback-return
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    window.addEventListener('load', function() {
                        window.history.pushState({ noBackExitsApp: true }, '')
                      })
                      
                      window.addEventListener('popstate', function(event) {
                        if (event.state && event.state.noBackExitsApp) {
                          window.history.pushState({ noBackExitsApp: true }, '')
                        }
                      })
                    return caches.delete(cacheName);
                }
            })
        ))    
    )
});