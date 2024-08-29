// .wrangler/tmp/bundle-PjhHr5/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// .wrangler/tmp/pages-HIri2R/bundledWorker-0.930653002347547.mjs
import("node:buffer").then(({ Buffer: Buffer2 }) => {
  globalThis.Buffer = Buffer2;
}).catch(() => null);
var __ALSes_PROMISE__ = import("node:async_hooks").then(({ AsyncLocalStorage }) => {
  globalThis.AsyncLocalStorage = AsyncLocalStorage;
  const envAsyncLocalStorage = new AsyncLocalStorage();
  const requestContextAsyncLocalStorage = new AsyncLocalStorage();
  globalThis.process = {
    env: new Proxy(
      {},
      {
        ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
        getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
        get: (_2, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
        set: (_2, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value)
      }
    )
  };
  globalThis[Symbol.for("__cloudflare-request-context__")] = new Proxy(
    {},
    {
      ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
      getOwnPropertyDescriptor: (_2, ...args) => Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
      get: (_2, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
      set: (_2, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value)
    }
  );
  return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
}).catch(() => null);
var at = Object.create;
var O = Object.defineProperty;
var st = Object.getOwnPropertyDescriptor;
var nt = Object.getOwnPropertyNames;
var ot = Object.getPrototypeOf;
var rt = Object.prototype.hasOwnProperty;
var j = (t, e) => () => (t && (e = t(t = 0)), e);
var U = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
var ct = (t, e, s, a) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o of nt(e))
      !rt.call(t, o) && o !== s && O(t, o, { get: () => e[o], enumerable: !(a = st(e, o)) || a.enumerable });
  return t;
};
var V = (t, e, s) => (s = t != null ? at(ot(t)) : {}, ct(e || !t || !t.__esModule ? O(s, "default", { value: t, enumerable: true }) : s, t));
var y;
var l = j(() => {
  y = { collectedLocales: [] };
});
var d;
var u = j(() => {
  d = { version: 3, routes: { none: [{ src: "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$", headers: { Location: "/$1" }, status: 308, continue: true }, { src: "^/_next/__private/trace$", dest: "/404", status: 404, continue: true }, { src: "^/404/?$", status: 404, continue: true, missing: [{ type: "header", key: "x-prerender-revalidate" }] }, { src: "^/500$", status: 500, continue: true }, { src: "^(?!/_next)/blog/posts(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))?(?:/)?$", headers: { Location: "/blog/$1" }, status: 308 }, { src: "^(?!/_next)/feed\\.xml(?:/)?$", headers: { Location: "/atom.xml" }, status: 308 }, { src: "^(?!/_next)/blog/tags/d5f3af56/meta(?:/)?$", headers: { Location: "/categories/meta" }, status: 308 }, { src: "^(?!/_next)/blog/tags/c6857539/full-stack(?:/)?$", headers: { Location: "/tags/full-stack" }, status: 308 }, { src: "^(?!/_next)/projects/credits/bot-clicker(?:/)?$", headers: { Location: "/credits/bot-clicker" }, status: 308 }, { src: "^/?$", has: [{ type: "header", key: "rsc" }], dest: "/index.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" }, continue: true, override: true }, { src: "^/((?!.+\\.rsc).+?)(?:/)?$", has: [{ type: "header", key: "rsc" }], dest: "/$1.rsc", headers: { vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" }, continue: true, override: true }], filesystem: [{ src: "^/index(\\.action|\\.rsc)$", dest: "/", continue: true }, { src: "^/_next/data/(.*)$", dest: "/_next/data/$1", check: true }, { src: "^/\\.prefetch\\.rsc$", dest: "/__index.prefetch.rsc", check: true }, { src: "^/(.+)/\\.prefetch\\.rsc$", dest: "/$1.prefetch.rsc", check: true }, { src: "^/\\.rsc$", dest: "/index.rsc", check: true }, { src: "^/(.+)/\\.rsc$", dest: "/$1.rsc", check: true }], miss: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$", status: 404, check: true, dest: "$0" }], rewrite: [{ src: "^/_next/data/(.*)$", dest: "/404", status: 404 }, { src: "^/opengraph/(?<nxtPpath>.+?)(?:\\.rsc)(?:/)?$", dest: "/opengraph/[...path].rsc?nxtPpath=$nxtPpath" }, { src: "^/opengraph/(?<nxtPpath>.+?)(?:/)?$", dest: "/opengraph/[...path]?nxtPpath=$nxtPpath" }], resource: [{ src: "^/.*$", status: 404 }], hit: [{ src: "^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|\\-HioJo43\\-ek5fLLgdXBtM)/.+$", headers: { "cache-control": "public,max-age=31536000,immutable" }, continue: true, important: true }, { src: "^/index(?:/)?$", headers: { "x-matched-path": "/" }, continue: true, important: true }, { src: "^/((?!index$).*?)(?:/)?$", headers: { "x-matched-path": "/$1" }, continue: true, important: true }], error: [{ src: "^/.*$", dest: "/404", status: 404 }, { src: "^/.*$", dest: "/500", status: 500 }] }, overrides: { "404.html": { path: "404", contentType: "text/html; charset=utf-8" }, "500.html": { path: "500", contentType: "text/html; charset=utf-8" }, "_app.rsc.json": { path: "_app.rsc", contentType: "application/json" }, "_error.rsc.json": { path: "_error.rsc", contentType: "application/json" }, "_document.rsc.json": { path: "_document.rsc", contentType: "application/json" }, "404.rsc.json": { path: "404.rsc", contentType: "application/json" } }, framework: { version: "14.2.2" }, crons: [] };
});
var g;
var _ = j(() => {
  g = { "/404.html": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/404.rsc.json": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/500.html": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc.json": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc.json": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc.json": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_next/static/-HioJo43-ek5fLLgdXBtM/_buildManifest.js": { type: "static" }, "/_next/static/-HioJo43-ek5fLLgdXBtM/_ssgManifest.js": { type: "static" }, "/_next/static/chunks/1dd3208c-786b48c75398855e.js": { type: "static" }, "/_next/static/chunks/217.8d076554458598c4.js": { type: "static" }, "/_next/static/chunks/247.fd647f7c44394802.js": { type: "static" }, "/_next/static/chunks/263-15d95d18b4cacbcf.js": { type: "static" }, "/_next/static/chunks/327-993f749cbc8dec2d.js": { type: "static" }, "/_next/static/chunks/361-c8b0939983883674.js": { type: "static" }, "/_next/static/chunks/366-818b989ae708cc6b.js": { type: "static" }, "/_next/static/chunks/434-36ce51c11ed9a562.js": { type: "static" }, "/_next/static/chunks/469-fb0faf38e42ee19e.js": { type: "static" }, "/_next/static/chunks/495-b3f898f45ce4e7e9.js": { type: "static" }, "/_next/static/chunks/685-15de61cdbe4069a6.js": { type: "static" }, "/_next/static/chunks/788-82d601fc68dd4846.js": { type: "static" }, "/_next/static/chunks/829-838083e33f09972b.js": { type: "static" }, "/_next/static/chunks/837.e2bbeeef1ec4983c.js": { type: "static" }, "/_next/static/chunks/85.3b2742c5dcf7cbfb.js": { type: "static" }, "/_next/static/chunks/886.06c4502db0d28cb7.js": { type: "static" }, "/_next/static/chunks/893-f459a22375b3c4fd.js": { type: "static" }, "/_next/static/chunks/9d78c252-24815f5df8eae4b7.js": { type: "static" }, "/_next/static/chunks/app/(content)/(info)/about/page-cb68f38d001c3b75.js": { type: "static" }, "/_next/static/chunks/app/(content)/(info)/contact/page-82da5b2dfa4c6b35.js": { type: "static" }, "/_next/static/chunks/app/(content)/(info)/credits/[slug]/page-d0789a7dcb83c3f3.js": { type: "static" }, "/_next/static/chunks/app/(content)/(info)/credits/page-99825351c485b425.js": { type: "static" }, "/_next/static/chunks/app/(content)/blog/[id]/[slug]/page-e6c71f117f92549b.js": { type: "static" }, "/_next/static/chunks/app/(content)/blog/page-1e9a225c43d31223.js": { type: "static" }, "/_next/static/chunks/app/(content)/categories/[slug]/page-d4aaa771e6186b1d.js": { type: "static" }, "/_next/static/chunks/app/(content)/layout-4cf2f83b071a824b.js": { type: "static" }, "/_next/static/chunks/app/(content)/page-0c21c366d4f3a99b.js": { type: "static" }, "/_next/static/chunks/app/(content)/tags/[slug]/page-73ef9cabe626d6da.js": { type: "static" }, "/_next/static/chunks/app/_not-found/page-7233073ae6d93f5b.js": { type: "static" }, "/_next/static/chunks/app/layout-f966834834fbbf16.js": { type: "static" }, "/_next/static/chunks/app/not-found-ae0fe120763d7658.js": { type: "static" }, "/_next/static/chunks/app/projects/(content)/layout-ee1a14f859bd5057.js": { type: "static" }, "/_next/static/chunks/app/projects/(content)/page-5adbac512a5db74e.js": { type: "static" }, "/_next/static/chunks/app/projects/(three)/[...path]/page-31029f426fa359d2.js": { type: "static" }, "/_next/static/chunks/app/projects/(three)/layout-55791caa08f4dde2.js": { type: "static" }, "/_next/static/chunks/c5cefda5-d1571e49ef143bfe.js": { type: "static" }, "/_next/static/chunks/framework-3dceb7350aaf8a44.js": { type: "static" }, "/_next/static/chunks/main-143a8ccaa84797d2.js": { type: "static" }, "/_next/static/chunks/main-app-a418fbefc448a669.js": { type: "static" }, "/_next/static/chunks/pages/_app-dea0b6b1c42677ea.js": { type: "static" }, "/_next/static/chunks/pages/_error-2c438043a491ccbd.js": { type: "static" }, "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js": { type: "static" }, "/_next/static/chunks/webpack-9a481c36c8e54cb5.js": { type: "static" }, "/_next/static/css/5b8c1183a205c9e7.css": { type: "static" }, "/_next/static/media/0a0ce249959137f3-s.woff2": { type: "static" }, "/_next/static/media/2084b837b601951d-s.woff2": { type: "static" }, "/_next/static/media/398b4bb64e745c45-s.woff2": { type: "static" }, "/_next/static/media/3a634e28c4bd54fb-s.woff2": { type: "static" }, "/_next/static/media/9366901f2e0806d1-s.woff2": { type: "static" }, "/_next/static/media/ac68e0db0724a5d5-s.p.woff2": { type: "static" }, "/_next/static/media/c4c7b0ec92b72e30-s.p.woff2": { type: "static" }, "/_next/static/media/d9f1473a63f76975-s.woff2": { type: "static" }, "/_next/static/media/laniakita-logo-transparent-darkmode.7940641b.png": { type: "static" }, "/_next/static/media/laniakita-logo-transparent-darkmode.8c2a1458.svg": { type: "static" }, "/_next/static/media/laniakita-logo-transparent-lightmode.ffe9d474.svg": { type: "static" }, "/_next/static/media/noise_shader_01.fc14c657.png": { type: "static" }, "/assets/audio/Pixel_54.wav": { type: "static" }, "/assets/audio/Pixel_57.wav": { type: "static" }, "/assets/audio/Pixel_64.wav": { type: "static" }, "/assets/audio/voice_-_bleh_bleh_bleh_blah.wav": { type: "static" }, "/assets/audio/voice_-_hmm_3.wav": { type: "static" }, "/assets/audio/voice_-_oh_no_4.wav": { type: "static" }, "/assets/audio/voice_-_thank_you_2.wav": { type: "static" }, "/assets/audio/voice_-_wow_4.wav": { type: "static" }, "/assets/images/blog/bear-P5Z6SLL6.jpg": { type: "static" }, "/assets/images/oc/2024/05/bot-clicker-pre-release-v05082024.png": { type: "static" }, "/assets/images/oc/2024/05/yadb.png": { type: "static" }, "/assets/images/oc/2024/07/noise_shader_01.png": { type: "static" }, "/assets/images/oc/2024/08/sunset-no-14.2-by-lani-akita.png": { type: "static" }, "/assets/models/bot-neil/bn-x128.glb": { type: "static" }, "/assets/models/bot-neil/bn-x256.glb": { type: "static" }, "/assets/models/bot-neil/bn-x512.glb": { type: "static" }, "/sw.js": { type: "static" }, "/about/opengraph-image-13hzdh": { type: "function", entrypoint: "__next-on-pages-dist__/functions/about/opengraph-image-13hzdh.func.js" }, "/about/opengraph-image-13hzdh.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/about/opengraph-image-13hzdh.func.js" }, "/about/twitter-image-13hzdh": { type: "function", entrypoint: "__next-on-pages-dist__/functions/about/twitter-image-13hzdh.func.js" }, "/about/twitter-image-13hzdh.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/about/twitter-image-13hzdh.func.js" }, "/blog/opengraph-image-18plo9": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/opengraph-image-18plo9.func.js" }, "/blog/opengraph-image-18plo9.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/opengraph-image-18plo9.func.js" }, "/blog/twitter-image-18plo9": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/twitter-image-18plo9.func.js" }, "/blog/twitter-image-18plo9.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/blog/twitter-image-18plo9.func.js" }, "/contact/opengraph-image-lcsjon": { type: "function", entrypoint: "__next-on-pages-dist__/functions/contact/opengraph-image-lcsjon.func.js" }, "/contact/opengraph-image-lcsjon.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/contact/opengraph-image-lcsjon.func.js" }, "/contact/twitter-image-lcsjon": { type: "function", entrypoint: "__next-on-pages-dist__/functions/contact/twitter-image-lcsjon.func.js" }, "/contact/twitter-image-lcsjon.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/contact/twitter-image-lcsjon.func.js" }, "/credits/opengraph-image-n402sp": { type: "function", entrypoint: "__next-on-pages-dist__/functions/credits/opengraph-image-n402sp.func.js" }, "/credits/opengraph-image-n402sp.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/credits/opengraph-image-n402sp.func.js" }, "/credits/twitter-image-n402sp": { type: "function", entrypoint: "__next-on-pages-dist__/functions/credits/twitter-image-n402sp.func.js" }, "/credits/twitter-image-n402sp.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/credits/twitter-image-n402sp.func.js" }, "/opengraph/[...path]": { type: "function", entrypoint: "__next-on-pages-dist__/functions/opengraph/[...path].func.js" }, "/opengraph/[...path].rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/opengraph/[...path].func.js" }, "/opengraph-image": { type: "function", entrypoint: "__next-on-pages-dist__/functions/opengraph-image.func.js" }, "/opengraph-image.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/opengraph-image.func.js" }, "/twitter-image": { type: "function", entrypoint: "__next-on-pages-dist__/functions/twitter-image.func.js" }, "/twitter-image.rsc": { type: "function", entrypoint: "__next-on-pages-dist__/functions/twitter-image.func.js" }, "/404": { type: "override", path: "/404.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/500": { type: "override", path: "/500.html", headers: { "content-type": "text/html; charset=utf-8" } }, "/_app.rsc": { type: "override", path: "/_app.rsc.json", headers: { "content-type": "application/json" } }, "/_error.rsc": { type: "override", path: "/_error.rsc.json", headers: { "content-type": "application/json" } }, "/_document.rsc": { type: "override", path: "/_document.rsc.json", headers: { "content-type": "application/json" } }, "/404.rsc": { type: "override", path: "/404.rsc.json", headers: { "content-type": "application/json" } }, "/about.html": { type: "override", path: "/about.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/about/layout,_N_T_/(content)/(info)/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/about": { type: "override", path: "/about.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/about/layout,_N_T_/(content)/(info)/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/about.rsc": { type: "override", path: "/about.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/about/layout,_N_T_/(content)/(info)/about/page,_N_T_/about", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/apple-icon1.png": { type: "override", path: "/apple-icon1.png", headers: { "cache-control": "public, immutable, no-transform, max-age=31536000", "content-type": "image/png", "x-next-cache-tags": "_N_T_/layout,_N_T_/apple-icon1.png/layout,_N_T_/apple-icon1.png/route,_N_T_/apple-icon1.png", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/apple-icon2.png": { type: "override", path: "/apple-icon2.png", headers: { "cache-control": "public, immutable, no-transform, max-age=31536000", "content-type": "image/png", "x-next-cache-tags": "_N_T_/layout,_N_T_/apple-icon2.png/layout,_N_T_/apple-icon2.png/route,_N_T_/apple-icon2.png", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/apple-icon3.png": { type: "override", path: "/apple-icon3.png", headers: { "cache-control": "public, immutable, no-transform, max-age=31536000", "content-type": "image/png", "x-next-cache-tags": "_N_T_/layout,_N_T_/apple-icon3.png/layout,_N_T_/apple-icon3.png/route,_N_T_/apple-icon3.png", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/atom.xml": { type: "override", path: "/atom.xml", headers: { "content-type": "text/xml", "x-next-cache-tags": "_N_T_/layout,_N_T_/atom.xml/layout,_N_T_/atom.xml/route,_N_T_/atom.xml", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog/819cb286/welcome-to-yet-another-dev-blog.html": { type: "override", path: "/blog/819cb286/welcome-to-yet-another-dev-blog.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/819cb286/welcome-to-yet-another-dev-blog", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog/819cb286/welcome-to-yet-another-dev-blog": { type: "override", path: "/blog/819cb286/welcome-to-yet-another-dev-blog.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/819cb286/welcome-to-yet-another-dev-blog", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog/819cb286/welcome-to-yet-another-dev-blog.rsc": { type: "override", path: "/blog/819cb286/welcome-to-yet-another-dev-blog.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/819cb286/welcome-to-yet-another-dev-blog", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website.html": { type: "override", path: "/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website": { type: "override", path: "/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website.rsc": { type: "override", path: "/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/843fc0c8/thoughts-on-rebuilding-my-personal-website", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/blog/e045a681/bot-clicker.html": { type: "override", path: "/blog/e045a681/bot-clicker.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/e045a681/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog/e045a681/bot-clicker": { type: "override", path: "/blog/e045a681/bot-clicker.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/e045a681/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog/e045a681/bot-clicker.rsc": { type: "override", path: "/blog/e045a681/bot-clicker.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/[id]/layout,_N_T_/(content)/blog/[id]/[slug]/layout,_N_T_/(content)/blog/[id]/[slug]/page,_N_T_/blog/e045a681/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/blog.html": { type: "override", path: "/blog.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/page,_N_T_/blog", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog": { type: "override", path: "/blog.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/page,_N_T_/blog", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/blog.rsc": { type: "override", path: "/blog.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/blog/layout,_N_T_/(content)/blog/page,_N_T_/blog", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/categories/meta.html": { type: "override", path: "/categories/meta.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/categories/layout,_N_T_/(content)/categories/[slug]/layout,_N_T_/(content)/categories/[slug]/page,_N_T_/categories/meta", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/categories/meta": { type: "override", path: "/categories/meta.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/categories/layout,_N_T_/(content)/categories/[slug]/layout,_N_T_/(content)/categories/[slug]/page,_N_T_/categories/meta", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/categories/meta.rsc": { type: "override", path: "/categories/meta.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/categories/layout,_N_T_/(content)/categories/[slug]/layout,_N_T_/(content)/categories/[slug]/page,_N_T_/categories/meta", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/categories/technical-summary.html": { type: "override", path: "/categories/technical-summary.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/categories/layout,_N_T_/(content)/categories/[slug]/layout,_N_T_/(content)/categories/[slug]/page,_N_T_/categories/technical-summary", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/categories/technical-summary": { type: "override", path: "/categories/technical-summary.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/categories/layout,_N_T_/(content)/categories/[slug]/layout,_N_T_/(content)/categories/[slug]/page,_N_T_/categories/technical-summary", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/categories/technical-summary.rsc": { type: "override", path: "/categories/technical-summary.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/categories/layout,_N_T_/(content)/categories/[slug]/layout,_N_T_/(content)/categories/[slug]/page,_N_T_/categories/technical-summary", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/contact.html": { type: "override", path: "/contact.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/contact/layout,_N_T_/(content)/(info)/contact/page,_N_T_/contact", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/contact": { type: "override", path: "/contact.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/contact/layout,_N_T_/(content)/(info)/contact/page,_N_T_/contact", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/contact.rsc": { type: "override", path: "/contact.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/contact/layout,_N_T_/(content)/(info)/contact/page,_N_T_/contact", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/credits/bot-clicker.html": { type: "override", path: "/credits/bot-clicker.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/credits/layout,_N_T_/(content)/(info)/credits/[slug]/layout,_N_T_/(content)/(info)/credits/[slug]/page,_N_T_/credits/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/credits/bot-clicker": { type: "override", path: "/credits/bot-clicker.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/credits/layout,_N_T_/(content)/(info)/credits/[slug]/layout,_N_T_/(content)/(info)/credits/[slug]/page,_N_T_/credits/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/credits/bot-clicker.rsc": { type: "override", path: "/credits/bot-clicker.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/credits/layout,_N_T_/(content)/(info)/credits/[slug]/layout,_N_T_/(content)/(info)/credits/[slug]/page,_N_T_/credits/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/credits.html": { type: "override", path: "/credits.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/credits/layout,_N_T_/(content)/(info)/credits/page,_N_T_/credits", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/credits": { type: "override", path: "/credits.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/credits/layout,_N_T_/(content)/(info)/credits/page,_N_T_/credits", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/credits.rsc": { type: "override", path: "/credits.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/(info)/layout,_N_T_/(content)/(info)/credits/layout,_N_T_/(content)/(info)/credits/page,_N_T_/credits", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/favicon.ico": { type: "override", path: "/favicon.ico", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "image/x-icon", "x-next-cache-tags": "_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/icon1.svg": { type: "override", path: "/icon1.svg", headers: { "cache-control": "public, immutable, no-transform, max-age=31536000", "content-type": "image/svg+xml", "x-next-cache-tags": "_N_T_/layout,_N_T_/icon1.svg/layout,_N_T_/icon1.svg/route,_N_T_/icon1.svg", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/icon2.png": { type: "override", path: "/icon2.png", headers: { "cache-control": "public, immutable, no-transform, max-age=31536000", "content-type": "image/png", "x-next-cache-tags": "_N_T_/layout,_N_T_/icon2.png/layout,_N_T_/icon2.png/route,_N_T_/icon2.png", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/icon3.png": { type: "override", path: "/icon3.png", headers: { "cache-control": "public, immutable, no-transform, max-age=31536000", "content-type": "image/png", "x-next-cache-tags": "_N_T_/layout,_N_T_/icon3.png/layout,_N_T_/icon3.png/route,_N_T_/icon3.png", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/index.html": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/index": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/": { type: "override", path: "/index.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/index.rsc": { type: "override", path: "/index.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/page,_N_T_/", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/manifest.json": { type: "override", path: "/manifest.json", headers: { "cache-control": "public, immutable, no-transform, max-age=31536000", "content-type": "application/manifest+json", "x-next-cache-tags": "_N_T_/layout,_N_T_/manifest.json/layout,_N_T_/manifest.json/route,_N_T_/manifest.json", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/projects/bot-clicker.html": { type: "override", path: "/projects/bot-clicker.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(three)/layout,_N_T_/projects/(three)/[...path]/layout,_N_T_/projects/(three)/[...path]/page,_N_T_/projects/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/projects/bot-clicker": { type: "override", path: "/projects/bot-clicker.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(three)/layout,_N_T_/projects/(three)/[...path]/layout,_N_T_/projects/(three)/[...path]/page,_N_T_/projects/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/projects/bot-clicker.rsc": { type: "override", path: "/projects/bot-clicker.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(three)/layout,_N_T_/projects/(three)/[...path]/layout,_N_T_/projects/(three)/[...path]/page,_N_T_/projects/bot-clicker", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/projects/shaders/noise/01.html": { type: "override", path: "/projects/shaders/noise/01.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(three)/layout,_N_T_/projects/(three)/[...path]/layout,_N_T_/projects/(three)/[...path]/page,_N_T_/projects/shaders/noise/01", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/projects/shaders/noise/01": { type: "override", path: "/projects/shaders/noise/01.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(three)/layout,_N_T_/projects/(three)/[...path]/layout,_N_T_/projects/(three)/[...path]/page,_N_T_/projects/shaders/noise/01", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/projects/shaders/noise/01.rsc": { type: "override", path: "/projects/shaders/noise/01.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(three)/layout,_N_T_/projects/(three)/[...path]/layout,_N_T_/projects/(three)/[...path]/page,_N_T_/projects/shaders/noise/01", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/projects.html": { type: "override", path: "/projects.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(content)/layout,_N_T_/projects/(content)/page,_N_T_/projects", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/projects": { type: "override", path: "/projects.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(content)/layout,_N_T_/projects/(content)/page,_N_T_/projects", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/projects.rsc": { type: "override", path: "/projects.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/projects/layout,_N_T_/projects/(content)/layout,_N_T_/projects/(content)/page,_N_T_/projects", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/robots.txt": { type: "override", path: "/robots.txt", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "text/plain", "x-next-cache-tags": "_N_T_/layout,_N_T_/robots.txt/layout,_N_T_/robots.txt/route,_N_T_/robots.txt", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/sitemap.xml": { type: "override", path: "/sitemap.xml", headers: { "cache-control": "public, max-age=0, must-revalidate", "content-type": "application/xml", "x-next-cache-tags": "_N_T_/layout,_N_T_/sitemap.xml/layout,_N_T_/sitemap.xml/route,_N_T_/sitemap.xml", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/tags/full-stack.html": { type: "override", path: "/tags/full-stack.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/tags/layout,_N_T_/(content)/tags/[slug]/layout,_N_T_/(content)/tags/[slug]/page,_N_T_/tags/full-stack", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/tags/full-stack": { type: "override", path: "/tags/full-stack.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/tags/layout,_N_T_/(content)/tags/[slug]/layout,_N_T_/(content)/tags/[slug]/page,_N_T_/tags/full-stack", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/tags/full-stack.rsc": { type: "override", path: "/tags/full-stack.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/tags/layout,_N_T_/(content)/tags/[slug]/layout,_N_T_/(content)/tags/[slug]/page,_N_T_/tags/full-stack", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } }, "/tags/rss.html": { type: "override", path: "/tags/rss.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/tags/layout,_N_T_/(content)/tags/[slug]/layout,_N_T_/(content)/tags/[slug]/page,_N_T_/tags/rss", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/tags/rss": { type: "override", path: "/tags/rss.html", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/tags/layout,_N_T_/(content)/tags/[slug]/layout,_N_T_/(content)/tags/[slug]/page,_N_T_/tags/rss", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch" } }, "/tags/rss.rsc": { type: "override", path: "/tags/rss.rsc", headers: { "x-next-cache-tags": "_N_T_/layout,_N_T_/(content)/layout,_N_T_/(content)/tags/layout,_N_T_/(content)/tags/[slug]/layout,_N_T_/(content)/tags/[slug]/page,_N_T_/tags/rss", vary: "RSC, Next-Router-State-Tree, Next-Router-Prefetch", "content-type": "text/x-component" } } };
});
var F = U((zt, $) => {
  "use strict";
  l();
  u();
  _();
  function N(t, e) {
    t = String(t || "").trim();
    let s = t, a, o = "";
    if (/^[^a-zA-Z\\\s]/.test(t)) {
      a = t[0];
      let c = t.lastIndexOf(a);
      o += t.substring(c + 1), t = t.substring(1, c);
    }
    let n = 0;
    return t = ut(t, (c) => {
      if (/^\(\?[P<']/.test(c)) {
        let i = /^\(\?P?[<']([^>']+)[>']/.exec(c);
        if (!i)
          throw new Error(`Failed to extract named captures from ${JSON.stringify(c)}`);
        let p = c.substring(i[0].length, c.length - 1);
        return e && (e[n] = i[1]), n++, `(${p})`;
      }
      return c.substring(0, 3) === "(?:" || n++, c;
    }), t = t.replace(/\[:([^:]+):\]/g, (c, i) => N.characterClasses[i] || c), new N.PCRE(t, o, s, o, a);
  }
  function ut(t, e) {
    let s = 0, a = 0, o = false;
    for (let r = 0; r < t.length; r++) {
      let n = t[r];
      if (o) {
        o = false;
        continue;
      }
      switch (n) {
        case "(":
          a === 0 && (s = r), a++;
          break;
        case ")":
          if (a > 0 && (a--, a === 0)) {
            let c = r + 1, i = s === 0 ? "" : t.substring(0, s), p = t.substring(c), h = String(e(t.substring(s, c)));
            t = i + h + p, r = s;
          }
          break;
        case "\\":
          o = true;
          break;
        default:
          break;
      }
    }
    return t;
  }
  (function(t) {
    class e extends RegExp {
      constructor(a, o, r, n, c) {
        super(a, o), this.pcrePattern = r, this.pcreFlags = n, this.delimiter = c;
      }
    }
    t.PCRE = e, t.characterClasses = { alnum: "[A-Za-z0-9]", word: "[A-Za-z0-9_]", alpha: "[A-Za-z]", blank: "[ \\t]", cntrl: "[\\x00-\\x1F\\x7F]", digit: "\\d", graph: "[\\x21-\\x7E]", lower: "[a-z]", print: "[\\x20-\\x7E]", punct: "[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]", space: "\\s", upper: "[A-Z]", xdigit: "[A-Fa-f0-9]" };
  })(N || (N = {}));
  N.prototype = N.PCRE.prototype;
  $.exports = N;
});
var X = U((H) => {
  "use strict";
  l();
  u();
  _();
  H.parse = bt;
  H.serialize = Rt;
  var Tt = Object.prototype.toString, C = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
  function bt(t, e) {
    if (typeof t != "string")
      throw new TypeError("argument str must be a string");
    for (var s = {}, a = e || {}, o = a.decode || vt, r = 0; r < t.length; ) {
      var n = t.indexOf("=", r);
      if (n === -1)
        break;
      var c = t.indexOf(";", r);
      if (c === -1)
        c = t.length;
      else if (c < n) {
        r = t.lastIndexOf(";", n - 1) + 1;
        continue;
      }
      var i = t.slice(r, n).trim();
      if (s[i] === void 0) {
        var p = t.slice(n + 1, c).trim();
        p.charCodeAt(0) === 34 && (p = p.slice(1, -1)), s[i] = Pt(p, o);
      }
      r = c + 1;
    }
    return s;
  }
  function Rt(t, e, s) {
    var a = s || {}, o = a.encode || wt;
    if (typeof o != "function")
      throw new TypeError("option encode is invalid");
    if (!C.test(t))
      throw new TypeError("argument name is invalid");
    var r = o(e);
    if (r && !C.test(r))
      throw new TypeError("argument val is invalid");
    var n = t + "=" + r;
    if (a.maxAge != null) {
      var c = a.maxAge - 0;
      if (isNaN(c) || !isFinite(c))
        throw new TypeError("option maxAge is invalid");
      n += "; Max-Age=" + Math.floor(c);
    }
    if (a.domain) {
      if (!C.test(a.domain))
        throw new TypeError("option domain is invalid");
      n += "; Domain=" + a.domain;
    }
    if (a.path) {
      if (!C.test(a.path))
        throw new TypeError("option path is invalid");
      n += "; Path=" + a.path;
    }
    if (a.expires) {
      var i = a.expires;
      if (!St(i) || isNaN(i.valueOf()))
        throw new TypeError("option expires is invalid");
      n += "; Expires=" + i.toUTCString();
    }
    if (a.httpOnly && (n += "; HttpOnly"), a.secure && (n += "; Secure"), a.priority) {
      var p = typeof a.priority == "string" ? a.priority.toLowerCase() : a.priority;
      switch (p) {
        case "low":
          n += "; Priority=Low";
          break;
        case "medium":
          n += "; Priority=Medium";
          break;
        case "high":
          n += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (a.sameSite) {
      var h = typeof a.sameSite == "string" ? a.sameSite.toLowerCase() : a.sameSite;
      switch (h) {
        case true:
          n += "; SameSite=Strict";
          break;
        case "lax":
          n += "; SameSite=Lax";
          break;
        case "strict":
          n += "; SameSite=Strict";
          break;
        case "none":
          n += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return n;
  }
  function vt(t) {
    return t.indexOf("%") !== -1 ? decodeURIComponent(t) : t;
  }
  function wt(t) {
    return encodeURIComponent(t);
  }
  function St(t) {
    return Tt.call(t) === "[object Date]" || t instanceof Date;
  }
  function Pt(t, e) {
    try {
      return e(t);
    } catch {
      return t;
    }
  }
});
l();
u();
_();
l();
u();
_();
l();
u();
_();
var b = "INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";
l();
u();
_();
l();
u();
_();
l();
u();
_();
l();
u();
_();
var q = V(F());
function S(t, e, s) {
  if (e == null)
    return { match: null, captureGroupKeys: [] };
  let a = s ? "" : "i", o = [];
  return { match: (0, q.default)(`%${t}%${a}`, o).exec(e), captureGroupKeys: o };
}
function R(t, e, s, { namedOnly: a } = {}) {
  return t.replace(/\$([a-zA-Z0-9_]+)/g, (o, r) => {
    let n = s.indexOf(r);
    return a && n === -1 ? o : (n === -1 ? e[parseInt(r, 10)] : e[n + 1]) || "";
  });
}
function M(t, { url: e, cookies: s, headers: a, routeDest: o }) {
  switch (t.type) {
    case "host":
      return { valid: e.hostname === t.value };
    case "header":
      return t.value !== void 0 ? E(t.value, a.get(t.key), o) : { valid: a.has(t.key) };
    case "cookie": {
      let r = s[t.key];
      return r && t.value !== void 0 ? E(t.value, r, o) : { valid: r !== void 0 };
    }
    case "query":
      return t.value !== void 0 ? E(t.value, e.searchParams.get(t.key), o) : { valid: e.searchParams.has(t.key) };
  }
}
function E(t, e, s) {
  let { match: a, captureGroupKeys: o } = S(t, e);
  return s && a && o.length ? { valid: !!a, newRouteDest: R(s, a, o, { namedOnly: true }) } : { valid: !!a };
}
l();
u();
_();
function D(t) {
  let e = new Headers(t.headers);
  return t.cf && (e.set("x-vercel-ip-city", encodeURIComponent(t.cf.city)), e.set("x-vercel-ip-country", t.cf.country), e.set("x-vercel-ip-country-region", t.cf.regionCode), e.set("x-vercel-ip-latitude", t.cf.latitude), e.set("x-vercel-ip-longitude", t.cf.longitude)), e.set("x-vercel-sc-host", b), new Request(t, { headers: e });
}
l();
u();
_();
function m(t, e, s) {
  let a = e instanceof Headers ? e.entries() : Object.entries(e);
  for (let [o, r] of a) {
    let n = o.toLowerCase(), c = s?.match ? R(r, s.match, s.captureGroupKeys) : r;
    n === "set-cookie" ? t.append(n, c) : t.set(n, c);
  }
}
function v(t) {
  return /^https?:\/\//.test(t);
}
function x(t, e) {
  for (let [s, a] of e.entries()) {
    let o = /^nxtP(.+)$/.exec(s), r = /^nxtI(.+)$/.exec(s);
    o?.[1] ? (t.set(s, a), t.set(o[1], a)) : r?.[1] ? t.set(r[1], a.replace(/(\(\.+\))+/, "")) : (!t.has(s) || !!a && !t.getAll(s).includes(a)) && t.append(s, a);
  }
}
function L(t, e) {
  let s = new URL(e, t.url);
  return x(s.searchParams, new URL(t.url).searchParams), s.pathname = s.pathname.replace(/\/index.html$/, "/").replace(/\.html$/, ""), new Request(s, t);
}
function w(t) {
  return new Response(t.body, t);
}
function I(t) {
  return t.split(",").map((e) => {
    let [s, a] = e.split(";"), o = parseFloat((a ?? "q=1").replace(/q *= */gi, ""));
    return [s.trim(), isNaN(o) ? 1 : o];
  }).sort((e, s) => s[1] - e[1]).map(([e]) => e === "*" || e === "" ? [] : e).flat();
}
l();
u();
_();
function A(t) {
  switch (t) {
    case "none":
      return "filesystem";
    case "filesystem":
      return "rewrite";
    case "rewrite":
      return "resource";
    case "resource":
      return "miss";
    default:
      return "miss";
  }
}
async function P(t, { request: e, assetsFetcher: s, ctx: a }, { path: o, searchParams: r }) {
  let n, c = new URL(e.url);
  x(c.searchParams, r);
  let i = new Request(c, e);
  try {
    switch (t?.type) {
      case "function":
      case "middleware": {
        let p = await import(t.entrypoint);
        try {
          n = await p.default(i, a);
        } catch (h) {
          let f = h;
          throw f.name === "TypeError" && f.message.endsWith("default is not a function") ? new Error(`An error occurred while evaluating the target edge function (${t.entrypoint})`) : h;
        }
        break;
      }
      case "override": {
        n = w(await s.fetch(L(i, t.path ?? o))), t.headers && m(n.headers, t.headers);
        break;
      }
      case "static": {
        n = await s.fetch(L(i, o));
        break;
      }
      default:
        n = new Response("Not Found", { status: 404 });
    }
  } catch (p) {
    return console.error(p), new Response("Internal Server Error", { status: 500 });
  }
  return w(n);
}
function B(t, e) {
  let s = "^//?(?:", a = ")/(.*)$";
  return !t.startsWith(s) || !t.endsWith(a) ? false : t.slice(s.length, -a.length).split("|").every((r) => e.has(r));
}
l();
u();
_();
function _t(t, { protocol: e, hostname: s, port: a, pathname: o }) {
  return !(e && t.protocol.replace(/:$/, "") !== e || !new RegExp(s).test(t.hostname) || a && !new RegExp(a).test(t.port) || o && !new RegExp(o).test(t.pathname));
}
function pt(t, e) {
  if (t.method !== "GET")
    return;
  let { origin: s, searchParams: a } = new URL(t.url), o = a.get("url"), r = Number.parseInt(a.get("w") ?? "", 10), n = Number.parseInt(a.get("q") ?? "75", 10);
  if (!o || Number.isNaN(r) || Number.isNaN(n) || !e?.sizes?.includes(r) || n < 0 || n > 100)
    return;
  let c = new URL(o, s);
  if (c.pathname.endsWith(".svg") && !e?.dangerouslyAllowSVG)
    return;
  let i = o.startsWith("//"), p = o.startsWith("/") && !i;
  if (!p && !e?.domains?.includes(c.hostname) && !e?.remotePatterns?.find((T) => _t(c, T)))
    return;
  let h = t.headers.get("Accept") ?? "", f = e?.formats?.find((T) => h.includes(T))?.replace("image/", "");
  return { isRelative: p, imageUrl: c, options: { width: r, quality: n, format: f } };
}
function ht(t, e, s) {
  let a = new Headers();
  if (s?.contentSecurityPolicy && a.set("Content-Security-Policy", s.contentSecurityPolicy), s?.contentDispositionType) {
    let r = e.pathname.split("/").pop(), n = r ? `${s.contentDispositionType}; filename="${r}"` : s.contentDispositionType;
    a.set("Content-Disposition", n);
  }
  t.headers.has("Cache-Control") || a.set("Cache-Control", `public, max-age=${s?.minimumCacheTTL ?? 60}`);
  let o = w(t);
  return m(o.headers, a), o;
}
async function z(t, { buildOutput: e, assetsFetcher: s, imagesConfig: a }) {
  let o = pt(t, a);
  if (!o)
    return new Response("Invalid image resizing request", { status: 400 });
  let { isRelative: r, imageUrl: n } = o, i = await (r && n.pathname in e ? s.fetch.bind(s) : fetch)(n);
  return ht(i, n, a);
}
l();
u();
_();
l();
u();
_();
var dt = "x-vercel-cache-tags";
var gt = "x-next-cache-soft-tags";
var yt = Symbol.for("__cloudflare-request-context__");
async function K(t) {
  let e = `https://${b}/v1/suspense-cache/`;
  if (!t.url.startsWith(e))
    return null;
  try {
    let s = new URL(t.url), a = await ft();
    if (s.pathname === "/v1/suspense-cache/revalidate") {
      let r = s.searchParams.get("tags")?.split(",") ?? [];
      for (let n of r)
        await a.revalidateTag(n);
      return new Response(null, { status: 200 });
    }
    let o = s.pathname.replace("/v1/suspense-cache/", "");
    if (!o.length)
      return new Response("Invalid cache key", { status: 400 });
    switch (t.method) {
      case "GET": {
        let r = W(t, gt), n = await a.get(o, { softTags: r });
        return n ? new Response(JSON.stringify(n.value), { status: 200, headers: { "Content-Type": "application/json", "x-vercel-cache-state": "fresh", age: `${(Date.now() - (n.lastModified ?? Date.now())) / 1e3}` } }) : new Response(null, { status: 404 });
      }
      case "POST": {
        let r = globalThis[yt], n = async () => {
          let c = await t.json();
          c.data.tags === void 0 && (c.tags ??= W(t, dt) ?? []), await a.set(o, c);
        };
        return r ? r.ctx.waitUntil(n()) : await n(), new Response(null, { status: 200 });
      }
      default:
        return new Response(null, { status: 405 });
    }
  } catch (s) {
    return console.error(s), new Response("Error handling cache request", { status: 500 });
  }
}
async function ft() {
  return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE ? G("kv") : G("cache-api");
}
async function G(t) {
  let e = await import(`./__next-on-pages-dist__/cache/${t}.js`);
  return new e.default();
}
function W(t, e) {
  return t.headers.get(e)?.split(",")?.filter(Boolean);
}
function Z() {
  globalThis[J] || (mt(), globalThis[J] = true);
}
function mt() {
  let t = globalThis.fetch;
  globalThis.fetch = async (...e) => {
    let s = new Request(...e), a = await xt(s);
    return a || (a = await K(s), a) ? a : (Nt(s), t(s));
  };
}
async function xt(t) {
  if (t.url.startsWith("blob:"))
    try {
      let s = (await import(`./__next-on-pages-dist__/assets/${new URL(t.url).pathname}.bin`)).default, a = { async arrayBuffer() {
        return s;
      }, get body() {
        return new ReadableStream({ start(o) {
          let r = Buffer.from(s);
          o.enqueue(r), o.close();
        } });
      }, async text() {
        return Buffer.from(s).toString();
      }, async json() {
        let o = Buffer.from(s);
        return JSON.stringify(o.toString());
      }, async blob() {
        return new Blob(s);
      } };
      return a.clone = () => ({ ...a }), a;
    } catch {
    }
  return null;
}
function Nt(t) {
  t.headers.has("user-agent") || t.headers.set("user-agent", "Next.js Middleware");
}
var J = Symbol.for("next-on-pages fetch patch");
l();
u();
_();
var Q = V(X());
var k = class {
  constructor(e, s, a, o, r) {
    this.routes = e;
    this.output = s;
    this.reqCtx = a;
    this.url = new URL(a.request.url), this.cookies = (0, Q.parse)(a.request.headers.get("cookie") || ""), this.path = this.url.pathname || "/", this.headers = { normal: new Headers(), important: new Headers() }, this.searchParams = new URLSearchParams(), x(this.searchParams, this.url.searchParams), this.checkPhaseCounter = 0, this.middlewareInvoked = [], this.wildcardMatch = r?.find((n) => n.domain === this.url.hostname), this.locales = new Set(o.collectedLocales);
  }
  url;
  cookies;
  wildcardMatch;
  path;
  status;
  headers;
  searchParams;
  body;
  checkPhaseCounter;
  middlewareInvoked;
  locales;
  checkRouteMatch(e, { checkStatus: s, checkIntercept: a }) {
    let o = S(e.src, this.path, e.caseSensitive);
    if (!o.match || e.methods && !e.methods.map((n) => n.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))
      return;
    let r = { url: this.url, cookies: this.cookies, headers: this.reqCtx.request.headers, routeDest: e.dest };
    if (!e.has?.find((n) => {
      let c = M(n, r);
      return c.newRouteDest && (r.routeDest = c.newRouteDest), !c.valid;
    }) && !e.missing?.find((n) => M(n, r).valid) && !(s && e.status !== this.status)) {
      if (a && e.dest) {
        let n = /\/(\(\.+\))+/, c = n.test(e.dest), i = n.test(this.path);
        if (c && !i)
          return;
      }
      return { routeMatch: o, routeDest: r.routeDest };
    }
  }
  processMiddlewareResp(e) {
    let s = "x-middleware-override-headers", a = e.headers.get(s);
    if (a) {
      let i = new Set(a.split(",").map((p) => p.trim()));
      for (let p of i.keys()) {
        let h = `x-middleware-request-${p}`, f = e.headers.get(h);
        this.reqCtx.request.headers.get(p) !== f && (f ? this.reqCtx.request.headers.set(p, f) : this.reqCtx.request.headers.delete(p)), e.headers.delete(h);
      }
      e.headers.delete(s);
    }
    let o = "x-middleware-rewrite", r = e.headers.get(o);
    if (r) {
      let i = new URL(r, this.url), p = this.url.hostname !== i.hostname;
      this.path = p ? `${i}` : i.pathname, x(this.searchParams, i.searchParams), e.headers.delete(o);
    }
    let n = "x-middleware-next";
    e.headers.get(n) ? e.headers.delete(n) : !r && !e.headers.has("location") ? (this.body = e.body, this.status = e.status) : e.headers.has("location") && e.status >= 300 && e.status < 400 && (this.status = e.status), m(this.reqCtx.request.headers, e.headers), m(this.headers.normal, e.headers), this.headers.middlewareLocation = e.headers.get("location");
  }
  async runRouteMiddleware(e) {
    if (!e)
      return true;
    let s = e && this.output[e];
    if (!s || s.type !== "middleware")
      return this.status = 500, false;
    let a = await P(s, this.reqCtx, { path: this.path, searchParams: this.searchParams, headers: this.headers, status: this.status });
    return this.middlewareInvoked.push(e), a.status === 500 ? (this.status = a.status, false) : (this.processMiddlewareResp(a), true);
  }
  applyRouteOverrides(e) {
    !e.override || (this.status = void 0, this.headers.normal = new Headers(), this.headers.important = new Headers());
  }
  applyRouteHeaders(e, s, a) {
    !e.headers || (m(this.headers.normal, e.headers, { match: s, captureGroupKeys: a }), e.important && m(this.headers.important, e.headers, { match: s, captureGroupKeys: a }));
  }
  applyRouteStatus(e) {
    !e.status || (this.status = e.status);
  }
  applyRouteDest(e, s, a) {
    if (!e.dest)
      return this.path;
    let o = this.path, r = e.dest;
    this.wildcardMatch && /\$wildcard/.test(r) && (r = r.replace(/\$wildcard/g, this.wildcardMatch.value)), this.path = R(r, s, a);
    let n = /\/index\.rsc$/i.test(this.path), c = /^\/(?:index)?$/i.test(o), i = /^\/__index\.prefetch\.rsc$/i.test(o);
    n && !c && !i && (this.path = o);
    let p = /\.rsc$/i.test(this.path), h = /\.prefetch\.rsc$/i.test(this.path), f = this.path in this.output;
    p && !h && !f && (this.path = this.path.replace(/\.rsc/i, ""));
    let T = new URL(this.path, this.url);
    return x(this.searchParams, T.searchParams), v(this.path) || (this.path = T.pathname), o;
  }
  applyLocaleRedirects(e) {
    if (!e.locale?.redirect || !/^\^(.)*$/.test(e.src) && e.src !== this.path || this.headers.normal.has("location"))
      return;
    let { locale: { redirect: a, cookie: o } } = e, r = o && this.cookies[o], n = I(r ?? ""), c = I(this.reqCtx.request.headers.get("accept-language") ?? ""), h = [...n, ...c].map((f) => a[f]).filter(Boolean)[0];
    if (h) {
      !this.path.startsWith(h) && (this.headers.normal.set("location", h), this.status = 307);
      return;
    }
  }
  getLocaleFriendlyRoute(e, s) {
    return !this.locales || s !== "miss" ? e : B(e.src, this.locales) ? { ...e, src: e.src.replace(/\/\(\.\*\)\$$/, "(?:/(.*))?$") } : e;
  }
  async checkRoute(e, s) {
    let a = this.getLocaleFriendlyRoute(s, e), { routeMatch: o, routeDest: r } = this.checkRouteMatch(a, { checkStatus: e === "error", checkIntercept: e === "rewrite" }) ?? {}, n = { ...a, dest: r };
    if (!o?.match || n.middlewarePath && this.middlewareInvoked.includes(n.middlewarePath))
      return "skip";
    let { match: c, captureGroupKeys: i } = o;
    if (this.applyRouteOverrides(n), this.applyLocaleRedirects(n), !await this.runRouteMiddleware(n.middlewarePath))
      return "error";
    if (this.body !== void 0 || this.headers.middlewareLocation)
      return "done";
    this.applyRouteHeaders(n, c, i), this.applyRouteStatus(n);
    let h = this.applyRouteDest(n, c, i);
    if (n.check && !v(this.path))
      if (h === this.path) {
        if (e !== "miss")
          return this.checkPhase(A(e));
        this.status = 404;
      } else if (e === "miss") {
        if (!(this.path in this.output) && !(this.path.replace(/\/$/, "") in this.output))
          return this.checkPhase("filesystem");
        this.status === 404 && (this.status = void 0);
      } else
        return this.checkPhase("none");
    return !n.continue || n.status && n.status >= 300 && n.status <= 399 ? "done" : "next";
  }
  async checkPhase(e) {
    if (this.checkPhaseCounter++ >= 50)
      return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`), this.status = 500, "error";
    this.middlewareInvoked = [];
    let s = true;
    for (let r of this.routes[e]) {
      let n = await this.checkRoute(e, r);
      if (n === "error")
        return "error";
      if (n === "done") {
        s = false;
        break;
      }
    }
    if (e === "hit" || v(this.path) || this.headers.normal.has("location") || !!this.body)
      return "done";
    if (e === "none")
      for (let r of this.locales) {
        let n = new RegExp(`/${r}(/.*)`), i = this.path.match(n)?.[1];
        if (i && i in this.output) {
          this.path = i;
          break;
        }
      }
    let a = this.path in this.output;
    if (!a && this.path.endsWith("/")) {
      let r = this.path.replace(/\/$/, "");
      a = r in this.output, a && (this.path = r);
    }
    if (e === "miss" && !a) {
      let r = !this.status || this.status < 400;
      this.status = r ? 404 : this.status;
    }
    let o = "miss";
    return a || e === "miss" || e === "error" ? o = "hit" : s && (o = A(e)), this.checkPhase(o);
  }
  async run(e = "none") {
    this.checkPhaseCounter = 0;
    let s = await this.checkPhase(e);
    return this.headers.normal.has("location") && (!this.status || this.status < 300 || this.status >= 400) && (this.status = 307), s;
  }
};
async function Y(t, e, s, a) {
  let o = new k(e.routes, s, t, a, e.wildcard), r = await tt(o);
  return Ct(t, r, s);
}
async function tt(t, e = "none", s = false) {
  return await t.run(e) === "error" || !s && t.status && t.status >= 400 ? tt(t, "error", true) : { path: t.path, status: t.status, headers: t.headers, searchParams: t.searchParams, body: t.body };
}
async function Ct(t, { path: e = "/404", status: s, headers: a, searchParams: o, body: r }, n) {
  let c = a.normal.get("location");
  if (c) {
    if (c !== a.middlewareLocation) {
      let h = [...o.keys()].length ? `?${o.toString()}` : "";
      a.normal.set("location", `${c ?? "/"}${h}`);
    }
    return new Response(null, { status: s, headers: a.normal });
  }
  let i;
  if (r !== void 0)
    i = new Response(r, { status: s });
  else if (v(e)) {
    let h = new URL(e);
    x(h.searchParams, o), i = await fetch(h, t.request);
  } else
    i = await P(n[e], t, { path: e, status: s, headers: a, searchParams: o });
  let p = a.normal;
  return m(p, i.headers), m(p, a.important), i = new Response(i.body, { ...i, status: s || i.status, headers: p }), i;
}
l();
u();
_();
function et() {
  globalThis.__nextOnPagesRoutesIsolation ??= { _map: /* @__PURE__ */ new Map(), getProxyFor: kt };
}
function kt(t) {
  let e = globalThis.__nextOnPagesRoutesIsolation._map.get(t);
  if (e)
    return e;
  let s = jt();
  return globalThis.__nextOnPagesRoutesIsolation._map.set(t, s), s;
}
function jt() {
  let t = /* @__PURE__ */ new Map();
  return new Proxy(globalThis, { get: (e, s) => t.has(s) ? t.get(s) : Reflect.get(globalThis, s), set: (e, s, a) => Et.has(s) ? Reflect.set(globalThis, s, a) : (t.set(s, a), true) });
}
var Et = /* @__PURE__ */ new Set(["_nextOriginalFetch", "fetch", "__incrementalCache"]);
var ga = { async fetch(t, e, s) {
  et(), Z();
  let a = await __ALSes_PROMISE__;
  if (!a) {
    let n = new URL(t.url), c = await e.ASSETS.fetch(`${n.protocol}//${n.host}/cdn-cgi/errors/no-nodejs_compat.html`), i = c.ok ? c.body : "Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";
    return new Response(i, { status: 503 });
  }
  let { envAsyncLocalStorage: o, requestContextAsyncLocalStorage: r } = a;
  return o.run({ ...e, NODE_ENV: "production", SUSPENSE_CACHE_URL: b }, async () => r.run({ env: e, ctx: s, cf: t.cf }, async () => {
    if (new URL(t.url).pathname.startsWith("/_next/image"))
      return z(t, { buildOutput: g, assetsFetcher: e.ASSETS, imagesConfig: d.images });
    let c = D(t);
    return Y({ request: c, ctx: s, assetsFetcher: e.ASSETS }, d, g, y);
  }));
} };

// ../../node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}

// .wrangler/tmp/pages-HIri2R/acmdg8mjxsm.js
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.13.2.", include: ["/*"], exclude: ["/_next/static/*"] };
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (ga.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return ga.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// ../../node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
};
var middleware_ensure_req_body_drained_default = drainBody;

// ../../node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-PjhHr5/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_dev_pipeline_default;

// ../../node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// .wrangler/tmp/bundle-PjhHr5/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  };
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = (request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    };
    #dispatcher = (type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    };
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=acmdg8mjxsm.js.map
