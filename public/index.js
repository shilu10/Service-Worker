// whenever the load event happens we need to register the service worker.

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('service_worker.js');
    console.log("Service Worker : Registered")
    });
}

