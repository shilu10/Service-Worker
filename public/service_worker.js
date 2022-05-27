// whenever we register the service worker, whichever file we pointed as a service worker
// there the service worker will be installed and activated. we have access to those
// events.
// when we say self. it is specific to the curren file

const cache = "v1"

const caching_files = [
    'index.html',
    'style.css',
    'index.js'
]


self.addEventListener("install", (event) => {
    console.log("Service Worker : Installed!")

    event.waitUntil(
        
        (async() => {
            try {
                cache_obj = await caches.open(cache)
                cache_obj.addAll(caching_files)
            }
            catch{
                console.log("error occured while caching...")
            }
        })()
    )
} )
    


// activated event
self.addEventListener("activate", (event) => {
    console.log("Service Worker : Activated!")
})

// In the fetch event, we need to configure that, whenever the browser
// try to get the file from the server, we need to check whether the broswer
// is online or offline. and give the files according to it.

