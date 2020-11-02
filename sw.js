/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.0fcebb82.png",
    "revision": "71c32dc8b4da4840d61a1796a2bc230b"
  },
  {
    "url": "android-chrome-512x512.ae40f73d.png",
    "revision": "8bf8012c4f4ae251d660b4739171b7ed"
  },
  {
    "url": "apple-touch-icon-120x120-precomposed.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-120x120.044c6f3f.png",
    "revision": "a6e447e90b691da286286ab18849adac"
  },
  {
    "url": "apple-touch-icon-precomposed.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "apple-touch-icon.fdeabd24.png",
    "revision": "de5e22b15cf20cb0d586a036d714ee3f"
  },
  {
    "url": "certificate.d1673940.pdf",
    "revision": "624e7a3f5560db68d93eda0129cc2922"
  },
  {
    "url": "confidentialite.73e56510.css",
    "revision": "497722a58d1452ec31242d43eb028a94"
  },
  {
    "url": "confidentialite.ffd0728f.js",
    "revision": "b479406061c79c2afce05699f016c1c6"
  },
  {
    "url": "confidentialite.html",
    "revision": "b6bf68a59d4da7d8c4017ecd017302a0"
  },
  {
    "url": "favicon-16x16.a4687270.png",
    "revision": "652605ae0182d51781ab0be639ad2bda"
  },
  {
    "url": "favicon-32x32.623384d0.png",
    "revision": "674c9c4ef1e4c7ea9de1218ee0bfd0cf"
  },
  {
    "url": "index.html",
    "revision": "02b2daf15dfc796222808032a4804423"
  },
  {
    "url": "logo_dnum_dark.0fe33c5b.svg",
    "revision": "da8bdc57d4f231585216c53da752d00a"
  },
  {
    "url": "logo_dnum.19ebc682.svg",
    "revision": "3a41bfa41e4671414da29db168c37d66"
  },
  {
    "url": "main.73e56510.css",
    "revision": "2300cac314925f78e33cc019ca751b8d"
  },
  {
    "url": "main.a4bb3ca7.js",
    "revision": "fe6374cdf277547205f1036b9e50d967"
  },
  {
    "url": "marianne-bold-webfont.1505950c.woff2",
    "revision": "e67f6cefe32cc39f909e605c8d6337a9"
  },
  {
    "url": "marianne-bold-webfont.7424dbde.woff",
    "revision": "0bcc99dd4adfb78e11098fedfe531cbb"
  },
  {
    "url": "marianne-regular-webfont.0a959359.woff",
    "revision": "89f4f2326c77429e98693cf83703face"
  },
  {
    "url": "marianne-regular-webfont.daa94941.woff2",
    "revision": "d2c09e5f58d8360f541e2a8726c33587"
  },
  {
    "url": "MIN_Interieur_RVB_dark.0e5ee525.svg",
    "revision": "345794cee228a40837ab654184cd2c96"
  },
  {
    "url": "MIN_Interieur_RVB.124e26ea.svg",
    "revision": "6823b6d87f43d208b17ff81e178f9ae9"
  },
  {
    "url": "safari-pinned-tab.1551797e.svg",
    "revision": "f53452e6ac8760f12bab91672e91d39b"
  },
  {
    "url": "./",
    "revision": "ebec315cd09ddfc0b4250c74fa8ecf45"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("https://deplacement.alimodaresi.ir//index.html"));
