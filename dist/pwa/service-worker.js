if(!self.define){let n,e={};const s=(s,i)=>(s=new URL(s+".js",i).href,e[s]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=s,n.onload=e,document.head.appendChild(n)}else n=s,importScripts(s),e()})).then((()=>{let n=e[s];if(!n)throw new Error(`Module ${s} didn’t register its module`);return n})));self.define=(i,l)=>{const r=n||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const c=n=>s(n,r),a={module:{uri:r},exports:o,require:c};e[r]=Promise.all(i.map((n=>a[n]||c(n)))).then((n=>(l(...n),o)))}}define(["./workbox-936d835b"],(function(n){"use strict";n.setCacheNameDetails({prefix:"rolf-wallet"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"asset_icons/1.png",revision:"c13fa69380316b7929ee7e0d6f9a793e"},{url:"asset_icons/1048580.png",revision:"73268458c5f650a1b6572c509a3b9ea4"},{url:"asset_icons/12.gif",revision:"8babace110affe12629a5efab6fd44b8"},{url:"asset_icons/14.png",revision:"38f7049e454748ed9e3947096b746e81"},{url:"asset_icons/1643.png",revision:"b95d4bd10df45d75db368bc6511e6452"},{url:"asset_icons/1840.png",revision:"e92157ef24780142293e74ac1724a1bd"},{url:"asset_icons/2.png",revision:"8e74554c74227a72690ec41ed0b69ffe"},{url:"bg.jpg",revision:"4518abd95de4f0d356ce027fe254cab9"},{url:"css/165.a66b428d.css",revision:null},{url:"css/319.2aaf6d0e.css",revision:null},{url:"css/391.2aaf6d0e.css",revision:null},{url:"css/429.c82af1c0.css",revision:null},{url:"css/56.86504cf0.css",revision:null},{url:"css/708.6323c301.css",revision:null},{url:"css/969.16db6202.css",revision:null},{url:"css/app.32178371.css",revision:null},{url:"css/vendor.4c1ba8fe.css",revision:null},{url:"favicon.ico",revision:"08b9626b182986076124ae496ecd65e7"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.f7d18af2.woff",revision:null},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.8c59cf21.woff2",revision:null},{url:"fonts/la-brands-400.3a8109c4.woff2",revision:null},{url:"fonts/la-brands-400.925b340f.woff",revision:null},{url:"fonts/la-regular-400.8dc1cedf.woff2",revision:null},{url:"fonts/la-regular-400.aa859c0d.woff",revision:null},{url:"fonts/la-solid-900.3efd5ba1.woff2",revision:null},{url:"fonts/la-solid-900.89363487.woff",revision:null},{url:"icons/apple-icon-120x120.png",revision:"890ad076f9da19ce205504d9ece89475"},{url:"icons/apple-icon-152x152.png",revision:"9b18cddcb81fba9b13a1d8f553654e1f"},{url:"icons/apple-icon-167x167.png",revision:"72bdcdde4a66784d2561d8ac480a4747"},{url:"icons/apple-icon-180x180.png",revision:"e9f68f3454e748ba3b07d550eba81fe4"},{url:"icons/apple-launch-1125x2436.png",revision:"876b6df372fc2769675f338d63277977"},{url:"icons/apple-launch-1170x2532.png",revision:"00c229b07662dd5e77e9c09a756d7dcd"},{url:"icons/apple-launch-1242x2208.png",revision:"7abb1057ae221e250517b114624c2b25"},{url:"icons/apple-launch-1242x2688.png",revision:"96df4ed33a090e19598990a2f48bbfa4"},{url:"icons/apple-launch-1284x2778.png",revision:"bde94a19c9036cff98ab1267ac67a6fc"},{url:"icons/apple-launch-1536x2048.png",revision:"7ee529af0e144785565e97f97be07b8b"},{url:"icons/apple-launch-1620x2160.png",revision:"262dfa48de43ab62ca3ed22af9b301f5"},{url:"icons/apple-launch-1668x2224.png",revision:"eb0a9c82b0630e7c4ca9222837c9a12d"},{url:"icons/apple-launch-1668x2388.png",revision:"717fd9a633ee0f2384db4e5b9536d5e3"},{url:"icons/apple-launch-2048x2732.png",revision:"d2c12568d8c745abe00ea07f921a111f"},{url:"icons/apple-launch-750x1334.png",revision:"e48d839358849b90b1921a069dae16df"},{url:"icons/apple-launch-828x1792.png",revision:"24542391b77a0ff84e49f30c21efee5d"},{url:"icons/favicon-128x128.png",revision:"9d8cfaac3a76973f81c13f340bb31bbb"},{url:"icons/favicon-16x16.png",revision:"844a591e17e5a955a13d99b73964c5ae"},{url:"icons/favicon-32x32.png",revision:"4db20dbda5436f21fe24320880b8ecbc"},{url:"icons/favicon-96x96.png",revision:"44b40a2e7711290bf853c269b5538e16"},{url:"icons/icon-128x128.png",revision:"9d8cfaac3a76973f81c13f340bb31bbb"},{url:"icons/icon-192x192.png",revision:"a02d56984259078080b02b684dcf3114"},{url:"icons/icon-256x256.png",revision:"be70a3e3dc05bc4af8f8a480c3afa6de"},{url:"icons/icon-384x384.png",revision:"bfbfa510bad201b66409c13c75a998eb"},{url:"icons/icon-512x512.png",revision:"dfb0faee66b4117bacdfae7674ee8bb2"},{url:"icons/ms-icon-144x144.png",revision:"f03e27fccf7b68a54618d165833d57f0"},{url:"icons/safari-pinned-tab.svg",revision:"2054bfde004181fa8507d98179f62dbc"},{url:"img/logo.1c141a22.png",revision:null},{url:"img/qr.28e572d7.jpg",revision:null},{url:"index.html",revision:"604ea71d53c110f09a7d490ef2400caa"},{url:"js/165.b5b28241.js",revision:null},{url:"js/201.3660ea4f.js",revision:null},{url:"js/319.291ade07.js",revision:null},{url:"js/34.75147771.js",revision:null},{url:"js/391.e19f9d82.js",revision:null},{url:"js/429.dffd913e.js",revision:null},{url:"js/495.d8f7fdb1.js",revision:null},{url:"js/56.e0adf5bb.js",revision:null},{url:"js/708.8deb3783.js",revision:null},{url:"js/862.50f51a87.js",revision:null},{url:"js/969.71ab7bcb.js",revision:null},{url:"js/970.1c71c218.js",revision:null},{url:"js/app.4050dd09.js",revision:null},{url:"js/vendor.be91eaa3.js",revision:null},{url:"logo.png",revision:"a5bc97f14f16631d0874509056838c41"},{url:"manifest.json",revision:"0927f339740ef2435670d38be86b3611"}],{}),n.registerRoute(new n.NavigationRoute(n.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
