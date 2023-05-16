/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-148cb7e5'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "about.html",
    "revision": "6ec60c12eda29dd072ed0dbedb02182d"
  }, {
    "url": "assets/_...all_-4d9c9463.js",
    "revision": null
  }, {
    "url": "assets/_name_-c0182b73.js",
    "revision": null
  }, {
    "url": "assets/404-a9c7e929.js",
    "revision": null
  }, {
    "url": "assets/about-12c69d5c.js",
    "revision": null
  }, {
    "url": "assets/app-9315bbf0.js",
    "revision": null
  }, {
    "url": "assets/dynamic-e72876bd.js",
    "revision": null
  }, {
    "url": "assets/home-555d2000.js",
    "revision": null
  }, {
    "url": "assets/index-0422ba1d.css",
    "revision": null
  }, {
    "url": "assets/normal-e053c022.js",
    "revision": null
  }, {
    "url": "assets/README-9a7885dc.js",
    "revision": null
  }, {
    "url": "assets/smart-layout-98383b43.js",
    "revision": null
  }, {
    "url": "assets/virtual_pwa-register-ae67ebd0.js",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-dc90f814.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "bbf24c29bcd8eb8c5ba45eedfb399412"
  }, {
    "url": "readme.html",
    "revision": "c4964761c79f6fb4a345453410bbc1d8"
  }, {
    "url": "favicon.svg",
    "revision": "a795ab195c26601ea433babed25a7d0d"
  }, {
    "url": "safari-pinned-tab.svg",
    "revision": "5eaf74d1c43d30e0af743b68a3f48504"
  }, {
    "url": "pwa-192x192.png",
    "revision": "65f6c00ff3d88d8371df0480c1ba0272"
  }, {
    "url": "pwa-512x512.png",
    "revision": "20a2db7d5040eb315e6acf49c6983de9"
  }, {
    "url": "manifest.webmanifest",
    "revision": "37e8d18026b05432f623fc5efac2b4b1"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));

}));
