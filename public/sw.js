if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const c=e=>i(e,o),d={module:{uri:o},exports:r,require:c};a[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(s(...e),r)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/TAy69PljzCBnoPoFYMpXQ/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/TAy69PljzCBnoPoFYMpXQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/804-accc891f7a0cc4d3.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/997-bbb9be50dc964b54.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/app/_not-found/page-209eba753e80d94e.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/app/layout-320b8b99d305af1f.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/app/page-5660c34ef5cb25b2.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/fd9d1056-a6ea0b22fbc3ba2c.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/main-25e784a18fadb456.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/main-app-7274cb8045e3f038.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-a3c37fcbf859f6f9.js",revision:"TAy69PljzCBnoPoFYMpXQ"},{url:"/_next/static/css/c0620a992f5c5290.css",revision:"c0620a992f5c5290"},{url:"/android/android-launchericon-144-144.png",revision:"42fa96c042f363e00af44262f7302b6f"},{url:"/android/android-launchericon-192-192.png",revision:"dc43b33e90d684f66316d9f490d07c47"},{url:"/android/android-launchericon-48-48.png",revision:"633b103e7797c00b1268f2cc3fbfd92f"},{url:"/android/android-launchericon-512-512.png",revision:"d4b1d9c98d2b4854f6c683715e881bed"},{url:"/android/android-launchericon-72-72.png",revision:"30959ad00aa06a18a0c6ff79966b0c4b"},{url:"/android/android-launchericon-96-96.png",revision:"19c5b1c8e3c58911cc210023cdf64cda"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/ios/100.png",revision:"e7f0997b1dccd8a814abd2ea13f7cbc5"},{url:"/ios/1024.png",revision:"28819ee464fb38183501a75e6ba30e3e"},{url:"/ios/114.png",revision:"e712bf330cd469c93670e95147d21ccb"},{url:"/ios/120.png",revision:"c2d8239f8e7b2003a1ab95670af8a9f6"},{url:"/ios/128.png",revision:"2636352b37dad4f3ebfb9a9b0e1c7091"},{url:"/ios/144.png",revision:"42fa96c042f363e00af44262f7302b6f"},{url:"/ios/152.png",revision:"95e148cedda68e0d16630951a20180c0"},{url:"/ios/16.png",revision:"1c91e7ba4697a4c456adf45af27cec3e"},{url:"/ios/167.png",revision:"3b75a62a78d4b26b5a811f1bdd62eea5"},{url:"/ios/180.png",revision:"60d6abce7f8bd1bda9afd76906c3bce2"},{url:"/ios/192.png",revision:"dc43b33e90d684f66316d9f490d07c47"},{url:"/ios/20.png",revision:"2f6f6157ac3f3ceb3617645af782703d"},{url:"/ios/256.png",revision:"101b1251178ad73b5c360d911f83c181"},{url:"/ios/29.png",revision:"83d94fe19ae03bfd830d0fefc929490d"},{url:"/ios/32.png",revision:"0b1a060b0d122c1502d900aa28b43c82"},{url:"/ios/40.png",revision:"f8d91a5eb697057e929233dec93d473f"},{url:"/ios/50.png",revision:"d5346d489acf2dbd6b947e7d5dcf2222"},{url:"/ios/512.png",revision:"d4b1d9c98d2b4854f6c683715e881bed"},{url:"/ios/57.png",revision:"2234a791ddd69d58cbf73fd9d2c794a6"},{url:"/ios/58.png",revision:"9190c13db19a992d054002add1f21413"},{url:"/ios/60.png",revision:"ca5af58d78578a2b8b5c9699e3ee0ef6"},{url:"/ios/64.png",revision:"35e25223198686407a94f6ad919f1967"},{url:"/ios/72.png",revision:"30959ad00aa06a18a0c6ff79966b0c4b"},{url:"/ios/76.png",revision:"5a601baa8ff215923b8310bf17c6aeb4"},{url:"/ios/80.png",revision:"dcdc63ceb8e3a8e68f564b036e22997b"},{url:"/ios/87.png",revision:"13985ece45f8f051df306aefee612b46"},{url:"/manifest.json",revision:"7666136e04d029d56702a88fbb65599c"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"},{url:"/windows11/LargeTile.scale-100.png",revision:"669150d001ce7602c8fa123f88e008ec"},{url:"/windows11/LargeTile.scale-125.png",revision:"8663ac217f912e57f4ad72c4aec5ac0c"},{url:"/windows11/LargeTile.scale-150.png",revision:"d4b9984ee96539338b596bc55a0ee066"},{url:"/windows11/LargeTile.scale-200.png",revision:"7fe7be5793750f3a585cbd5bd87fe5e2"},{url:"/windows11/LargeTile.scale-400.png",revision:"b4ed575bba7a0c8131770f554cca6edb"},{url:"/windows11/SmallTile.scale-100.png",revision:"c1c3cca85541eb1897cd8f5c12659b9b"},{url:"/windows11/SmallTile.scale-125.png",revision:"353712d4c7e1f375c9e7718ad44cdf89"},{url:"/windows11/SmallTile.scale-150.png",revision:"77230cc62c1ff07571e8e513dc5e44a4"},{url:"/windows11/SmallTile.scale-200.png",revision:"5f1b5ecc24f96229c44f92c28fd79967"},{url:"/windows11/SmallTile.scale-400.png",revision:"af55cdd68e237c03e9179d5b9132eb0c"},{url:"/windows11/SplashScreen.scale-100.png",revision:"192a47b8f1082888ce2f3be5edd602d8"},{url:"/windows11/SplashScreen.scale-125.png",revision:"76c6019ed4cc5499c9b85b8dfa2a3b48"},{url:"/windows11/SplashScreen.scale-150.png",revision:"cb43080d46e6157b3a1f4128be1db77b"},{url:"/windows11/SplashScreen.scale-200.png",revision:"b01b9af09565ff31ae91374d7600d438"},{url:"/windows11/SplashScreen.scale-400.png",revision:"95b1099a3965afbd15eb67bff663bfb6"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"18d304ab5d88e97d68175cca52969f48"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"40272dc0ee3d03ae609dea92fce9346c"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"df0c9f7e656287a165c82e6c1c5fe32e"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"05a2ae29cda5ea6138b59fa5b6c5ddc9"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"1ae021c144ef79c03afcda32c722c4ed"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"3b8597cf23e9a417cc75cd6de5f9a5f4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"d6bded5792b93a554730b7afd2908de4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"3bc66aecfed580d30ddb26571c6919dc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"9d22ceb4760c0fd34ae185a50ccfde8e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"5220c40035a23c49c567b54b3b6a7f35"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"67b910e94609a1810fdbb0c0266f2d8a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"399659758a72fe5b93517c06666401af"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"f25a3d750e9e77fffc8130baf081cdca"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"08a72fdb7b926a61c508eaf2af1533ba"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"f63401c9a9e8d4393789d352ae68e6a0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"bb78d32e43423f83d4a55af3873e917c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"1931fb23996beb98ea2a3f12e517c189"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"658ceecf67524d4e371a99d46e6c4d66"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"69ada952c54f1f02b3e8345cae81e473"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"3da2cf264852ac2b6ad4c079a4212a5b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"3b8597cf23e9a417cc75cd6de5f9a5f4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"d6bded5792b93a554730b7afd2908de4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"3bc66aecfed580d30ddb26571c6919dc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"9d22ceb4760c0fd34ae185a50ccfde8e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"5220c40035a23c49c567b54b3b6a7f35"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"67b910e94609a1810fdbb0c0266f2d8a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"399659758a72fe5b93517c06666401af"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"f25a3d750e9e77fffc8130baf081cdca"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"08a72fdb7b926a61c508eaf2af1533ba"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"f63401c9a9e8d4393789d352ae68e6a0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"bb78d32e43423f83d4a55af3873e917c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"1931fb23996beb98ea2a3f12e517c189"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"658ceecf67524d4e371a99d46e6c4d66"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"69ada952c54f1f02b3e8345cae81e473"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"3da2cf264852ac2b6ad4c079a4212a5b"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"08a72fdb7b926a61c508eaf2af1533ba"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"3b0bf3e721ab1e7355a6c7b49b07f2fa"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"71ecaa09a49230dd73fef537a619119a"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"b11245de2fcc6e626d35a48188ef3cbd"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"8c5ba1ee7911e49c5bf4b5b93dc714eb"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"3b8597cf23e9a417cc75cd6de5f9a5f4"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"d6bded5792b93a554730b7afd2908de4"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"3bc66aecfed580d30ddb26571c6919dc"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"9d22ceb4760c0fd34ae185a50ccfde8e"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"5220c40035a23c49c567b54b3b6a7f35"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"67b910e94609a1810fdbb0c0266f2d8a"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"399659758a72fe5b93517c06666401af"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"f25a3d750e9e77fffc8130baf081cdca"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"08a72fdb7b926a61c508eaf2af1533ba"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"f63401c9a9e8d4393789d352ae68e6a0"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"bb78d32e43423f83d4a55af3873e917c"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"1931fb23996beb98ea2a3f12e517c189"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"658ceecf67524d4e371a99d46e6c4d66"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"69ada952c54f1f02b3e8345cae81e473"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"3da2cf264852ac2b6ad4c079a4212a5b"},{url:"/windows11/StoreLogo.scale-100.png",revision:"d5346d489acf2dbd6b947e7d5dcf2222"},{url:"/windows11/StoreLogo.scale-125.png",revision:"aabc41527008f801917db1cead860deb"},{url:"/windows11/StoreLogo.scale-150.png",revision:"2816107555155fd915aaea191d06b05f"},{url:"/windows11/StoreLogo.scale-200.png",revision:"e7f0997b1dccd8a814abd2ea13f7cbc5"},{url:"/windows11/StoreLogo.scale-400.png",revision:"a4d8f84fe8ccb31b1e89c8db8df266db"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"0d86a762ce5d84286b002cd99d917392"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"aeed0747ed93aedeb4f6aa6d37c7bb3a"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"548846b0f2d70037060291764f74f058"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"192a47b8f1082888ce2f3be5edd602d8"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"b01b9af09565ff31ae91374d7600d438"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));