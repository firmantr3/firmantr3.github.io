importScripts("/precache-manifest.688ccb01136feef8c640595da1677167.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if(workbox) {
    const precacheManifest = self.__precacheManifest.concat([
        {
            "revision": "688ccb01136feef8c640595da1677167",
            "url": "https://gravatar.com/avatar/85c9a1594c2d324183364fd303ba0ae4?s=300",
        },
        {
            "revision": "688ccb01136feef8c640595da1677167",
            "url": "/img/icons/favicon-32x32.png",
        },
        {
            "revision": "688ccb01136feef8c640595da1677167",
            "url": "/img/icons/favicon-16x16.png",
        },
    ]);

    workbox.precaching.precacheAndRoute(precacheManifest, {});

    self.addEventListener("message", (e) => {
        console.log('updated, skip waiting!')
        if (e.data.action == 'skipWaiting') self.skipWaiting()
    })
}
else {
    console.log('Workbox failed!');
}

