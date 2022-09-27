const CACHE_NAME = "Version-1"
const urlsToCache = [
  "index.html",
  "gcalls-16.png",
  "gcalls-32.png",
  "gcalls-64.png",
  "gcalls-129.png",
  "gcalls-360.png",
  "gcalls-512.png",
  "logo.png",
  "server.js",
  "service-worker.js",
  "./src/index.js",
  "./src/App.js",
  "./src/index.css",
  "./src/pages/Details.jsx",
  "./src/pages/Home.jsx",
  "./src/contants/addData.js",
  "./src/contants/url.js",
  "./src/components/Alerts.jsx",
  "./src/components/Audio.jsx",
  "./src/components/ContactDetails.jsx",
  "./src/components/contants.jsx",
  "./src/components/Conversation.jsx",
  "./src/components/Metadata.jsx",
  "./src/components/Phrases.jsx",
  "./src/components/Scores.jsx",
]
const self = this
const url = "https://r2-call-analytics.devops-cloudflare.workers.dev/"
// install WS
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opend cache")
      return cache.addAll(urlsToCache)
    })
  )
})
// listen for request
self.addEventListener("fetch", (event) => {
  // Let the browser do its default thing
  // for non-GET requests.
  if (event.request.method !== "GET") return

  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cache = await caches.open("dynamic-v1")
      const cachedResponse = await cache.match(event.request)

      if (cachedResponse) {
        // If we found a match in the cache, return it, but also
        // update the entry in the cache in the background.
        console.log("found in cache")
        console.log(event.request)
        event.waitUntil(cache.add(event.request))
        return cachedResponse
      }
      console.log("not found")
      console.log(event.request)
      // If we didn't find a match in the cache, use the network.
      return fetch(event.request)
    })()
  )
})
// activate the WS
self.addEventListener("activate", (event) => {
  console.log("Activated!")

  const cacheWhitelist = []
  cacheWhitelist.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})

const backgroundSync = () => {
  navigator.serviceWorker.ready.then((swRegistration) =>
    swRegistration.sync.register("post-data").catch((err) => console.log(err))
  )
}
///////////////////////////////////////////////////////

const getData = (data) => {
  const indexedDB = self.indexedDB
  const request = indexedDB.open("cars", 1)
  request.onerror = function (e) {
    console.error("error")
    console.error(e)
  }
  request.onupgradeneeded = function () {
    const db = request.result
    const store = db.createObjectStore("cars", { keyPath: "id" })
    store.createIndex("cars_colour", ["colour"], { unique: false })
    store.createIndex("cars_colour_make", ["colour", "make"], { unique: false })
  }
  request.onsuccess = function () {
    const db = request.result
    const transaction = db.transaction("cars", "readwrite")
    const store = transaction.objectStore("cars")
    // const colourIndex = store.index("cars_colour")
    // const makeModeIndex = store.index("cars_colour_make")

    // store.put({id: 1, colour: "red", make: 'toyota'})
    // store.put({id: 2, colour: "red", make: 'kia'})

    const idQuery = store.getAll()
    // const colourQuery = colourIndex.getAll(["red"])
    // const colourMakeQuery = makeModeIndex.get(["blue", "honda"])
    // const colourQueryAll = colourIndex.getAll()
    idQuery.onsuccess = function () {
      console.log("idQuery", idQuery.result)
      for (const value of idQuery.result) {
        console.log("value", value)
        if (value.delete === true) {
          store.delete(value.id)
        }
        if (value.post === true) {
          value.post = false
          sendData(value.data)
          store.put(value)
        }
      }
      // colourQuery.onsuccess = function () {
      //   console.log("colourQuery", colourQuery.result)
      // }
      // colourMakeQuery.onsuccess = function () {
      //   console.log("colourMakeQuery", colourMakeQuery.result)
      // }
      // colourQueryAll.onsuccess = function () {
      //   console.log("colourQueryAll", colourQueryAll.result)
      //   for (const value of colourQueryAll.result) {
      //     console.log("value", value)
      //     if (value.delete === true) {
      //       store.delete(value.id)
      //     } else {
      //       sendData({
      //         name: value.colour,
      //         email: value.make,
      //       })
      //       store.delete(value.id)
      //     }
      //   }
    }
    transaction.oncomplete = function () {
      db.close()
    }
  }
}

const getDataDelete = () => {
  const indexedDB = self.indexedDB
  const request = indexedDB.open("deletecars", 1)
  request.onerror = function (e) {
    console.error("error")
    console.error(e)
  }
  request.onupgradeneeded = function () {
    const db = request.result
    const store = db.createObjectStore("cars", { keyPath: "id" })
    store.createIndex("cars_colour", ["colour"], { unique: false })
    store.createIndex("cars_colour_make", ["colour", "make"], { unique: false })
  }
  request.onsuccess = function () {
    const db = request.result
    const transaction = db.transaction("cars", "readwrite")
    const store = transaction.objectStore("cars")
    // const colourIndex = store.index("cars_colour")
    // const makeModeIndex = store.index("cars_colour_make")

    // store.put({id: 1, colour: "red", make: 'toyota'})
    // store.put({id: 2, colour: "red", make: 'kia'})

    const idQuery = store.getAll()
    // const colourQuery = colourIndex.getAll(["red"])
    // const colourMakeQuery = makeModeIndex.get(["blue", "honda"])
    // const colourQueryAll = colourIndex.getAll()
    // idQuery.onsuccess = function () {
    //   console.log("idQuery", idQuery.result)
    // }
    // colourQuery.onsuccess = function () {
    //   console.log("colourQuery", colourQuery.result)
    // }
    // colourMakeQuery.onsuccess = function () {
    //   console.log("colourMakeQuery", colourMakeQuery.result)
    // }
    idQuery.onsuccess = function () {
      console.log("idQuery", idQuery.result)
      // console.log("colourQueryAll", {
      //   name: colourQueryAll.result[0].colour,
      //   email: colourQueryAll.result[0].make,
      // })
      for (const value of idQuery.result) {
        console.log("value", value)
        sendDeleteData(value.id)
        store.delete(value.id)
      }
    }
    transaction.oncomplete = function () {
      db.close()
    }
  }
}
//////////////////////////////////////////////////////

self.addEventListener("sync", (event) => {
  if (event.tag === "post-data") {
    //call method
    getData()
  } else if (event.tag === "delete-data") {
    //call method
    getDataDelete()
  }
})

////////////////////////////////////////////////////

const sendData = (data) => {
  fetch(url + data.audioID, {
    method: "POST",
    body: JSON.stringify(data),
    mode: "no-cors",
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => {
      console.log(err)
      backgroundSync()
    })
}

const sendDeleteData = (data) => {
  fetch(url + "de-audioID_" + data, {
    method: "POST",
    mode: "no-cors",
  })
    .then((response) => {
      response.json()
    })
    .then((json) => console.log(json))
    .catch((err) => {
      console.log(err)
      backgroundSyncDelete()
    })
}
//////////////////
const backgroundSyncDelete = () => {
  navigator.serviceWorker.ready.then((swRegistration) =>
    swRegistration.sync.register("delete-data").catch((err) => console.log(err))
  )
}
