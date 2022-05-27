// whenever we register the service worker, whichever file we pointed as a service worker
// there the service worker will be installed and activated. we have access to those
// events.
// when we say self. it is specific to the curren file

const cache_name = "v1"

const caching_assets = [
    'index.html',
    'style.css',
    'index.js'
]


self.addEventListener("install", (event) => {
    console.log("Service Worker : Installed!")

    event.waitUntil(
        
        (async() => {
            try {
                const cache_obj = await caches.open(cache_name);
                cache_obj.addAll(caching_assets);

                const skip = self.skipWaiting();
            }
            catch{
                console.log("error occured while caching...")
            }
        })()
    )
} )
    


// activated event
// before activating the service worker, we can get rid of the old cache.
self.addEventListener("activate", (event) => {
    console.log("Service Worker : Activated!")

    // removing the old cache.
    event.waitUntil(

        (async () => {

            const cache_keys = await caches.keys()
            console.log(cache_keys)

            cache_keys.forEach(
                key => {
                    if (key !== cache_name) {
                        console.log("Service Worker deleted old cache!")
                        return caches.delete(key)
                        
                    }
                }
            )
            return Promise.all(cache_keys)


        })()

    )
})

// In the fetch event, we need to configure that, whenever the browser
// try to get the file from the server, we need to check whether the broswer
// is online or offline. and give the files according to it.

self.addEventListener("fetch", (event) => {
    console.log("Service Worker : fetch!")
})
