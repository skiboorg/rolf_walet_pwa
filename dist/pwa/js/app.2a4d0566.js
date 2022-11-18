(()=>{var e={5852:(e,t,a)=>{"use strict";a(40702),a(18964);var n=a(61957),o=a(71947),r=a(60499),l=a(59835);function s(e,t,a,n,o,r){const s=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(s)}const i=(0,l.aZ)({name:"App"});var c=a(11639);const u=(0,c.Z)(i,[["render",s]]),d=u;var p=a(23340),f=a(7363);const m=(0,p.h)((()=>{const e=(0,f.WB)();return e}));var v=a(18910);const g=[{path:"/",component:()=>Promise.all([a.e(736),a.e(969)]).then(a.bind(a,25969)),children:[{path:"",redirect:"/auth"},{path:"/auth",component:()=>Promise.all([a.e(736),a.e(532)]).then(a.bind(a,23532)),children:[{path:"/wallet/index",name:"wallet_index",component:()=>Promise.all([a.e(736),a.e(165)]).then(a.bind(a,55165))},{path:"/wallet/asset/:asset_key",name:"wallet_asset",component:()=>Promise.all([a.e(736),a.e(708)]).then(a.bind(a,60708))},{path:"/wallet/receive",name:"wallet_receive",component:()=>Promise.all([a.e(736),a.e(319)]).then(a.bind(a,14319))},{path:"/wallet/select",name:"wallet_select",component:()=>a.e(34).then(a.bind(a,84034))},{path:"/wallet/unconfirmed",name:"wallet_unconfirmed",component:()=>a.e(201).then(a.bind(a,31201))},{path:"/wallet/assets_for_buy",name:"wallet_assets_for_buy",component:()=>Promise.all([a.e(736),a.e(970)]).then(a.bind(a,75970))},{path:"/wallet/buy",name:"wallet_buy",component:()=>Promise.all([a.e(736),a.e(391)]).then(a.bind(a,35391))},{path:"/wallet/own_assets",name:"wallet_own_assets",component:()=>a.e(495).then(a.bind(a,89495))},{path:"/wallet/exchange",name:"wallet_exchange",component:()=>Promise.all([a.e(736),a.e(429)]).then(a.bind(a,89429))},{path:"/wallet/create_person",name:"create_person",component:()=>Promise.all([a.e(736),a.e(783)]).then(a.bind(a,6783))},{path:"/wallet/verify_person",name:"verify_person",component:()=>Promise.all([a.e(736),a.e(359)]).then(a.bind(a,72359))},{path:"/wallet/withdraw",name:"withdraw",component:()=>Promise.all([a.e(736),a.e(852)]).then(a.bind(a,57852))},{path:"/wallet/games/:asset_key",name:"games",component:()=>a.e(560).then(a.bind(a,46560))},{path:"/wallet/chickenbro_cbt",name:"chickenbro_cbt",component:()=>Promise.all([a.e(736),a.e(460)]).then(a.bind(a,29460))},{path:"/wallet/chickenbro_ru",name:"chickenbro_ru",component:()=>Promise.all([a.e(736),a.e(832)]).then(a.bind(a,96832))},{path:"/wallet/notifications",name:"notifications",component:()=>a.e(32).then(a.bind(a,27032))},{path:"/wallet/p2p",name:"p2p_index",component:()=>Promise.all([a.e(736),a.e(292)]).then(a.bind(a,83292))},{path:"/wallet/p2p",name:"p2p_index_blank",component:()=>a.e(514).then(a.bind(a,1514))},{path:"/wallet/p2p/offer/:offer_id",name:"p2p_offer",component:()=>Promise.all([a.e(736),a.e(628)]).then(a.bind(a,76628))},{path:"/wallet/p2p/trade/:uid",name:"p2p_trade",component:()=>Promise.all([a.e(736),a.e(575)]).then(a.bind(a,25575))},{path:"/wallet/p2p/new_buy_offer",name:"p2p_new_buy_offer",component:()=>Promise.all([a.e(736),a.e(874)]).then(a.bind(a,70874))},{path:"/wallet/p2p/new_sell_offer",name:"p2p_new_sell_offer",component:()=>Promise.all([a.e(736),a.e(984)]).then(a.bind(a,61984))},{path:"/wallet/p2p/user",name:"p2p_user",component:()=>Promise.all([a.e(736),a.e(892)]).then(a.bind(a,74892))}]}]},{path:"/:catchAll(.*)*",component:()=>a.e(862).then(a.bind(a,91862))}],h=g,w=(0,p.BC)((function(){const e=v.PO,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("/")});return t}));async function b(e,t){const a=e(d);a.use(o.Z,t);const n="function"===typeof m?await m({}):m;a.use(n);const l=(0,r.Xl)("function"===typeof w?await w({store:n}):w);return n.use((({store:e})=>{e.router=l})),{app:a,store:n,router:l}}var _=a(5943),y=a(6827);const k={config:{ripple:{early:!0,color:"primary"}},lang:_.Z,plugins:{Notify:y.Z}};var x=a(70368),P=a(17779);(0,x.z)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){P.log("New content is downloading.")},updated(){},offline(){},error(){}});var S=a(17779);let q="function"===typeof d.preFetch?d.preFetch:void 0!==d.__c&&"function"===typeof d.__c.preFetch&&d.__c.preFetch;function H(e,t){const a=e?e.matched?e:t.resolve(e).route:t.currentRoute.value;return a?Array.prototype.concat.apply([],a.matched.map((e=>Object.keys(e.components).map((t=>{const a=e.components[t];return{path:e.path,c:a}}))))):[]}function W({router:e,store:t,publicPath:a}){e.beforeResolve(((n,o,r)=>{const l=window.location.href.replace(window.location.origin,""),s=H(n,e),i=H(o,e);let c=!1;const u=s.filter(((e,t)=>c||(c=!i[t]||i[t].c!==e.c||e.path.indexOf("/:")>-1))).filter((e=>void 0!==e.c&&("function"===typeof e.c.preFetch||void 0!==e.c.__c&&"function"===typeof e.c.__c.preFetch))).map((e=>void 0!==e.c.__c?e.c.__c.preFetch:e.c.preFetch));if(!1!==q&&(u.unshift(q),q=!1),0===u.length)return r();let d=!1;const p=e=>{d=!0,r(e)},f=()=>{!1===d&&r()};u.reduce(((e,r)=>e.then((()=>!1===d&&r({store:t,currentRoute:n,previousRoute:o,redirect:p,urlPath:l,publicPath:a})))),Promise.resolve()).then(f).catch((e=>{S.error(e),f()}))}))}var C=a(17779);/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&a.e(736).then(a.t.bind(a,84848,23));const U="/";async function j({app:e,router:t,store:a},n){let o=!1;const r=e=>{try{return t.resolve(e).href}catch(a){}return Object(e)===e?null:e},l=e=>{if(o=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=r(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===o&&c<n.length;c++)try{await n[c]({app:e,router:t,store:a,ssrContext:null,redirect:l,urlPath:s,publicPath:U})}catch(i){return i&&i.url?void l(i.url):void C.error("[Quasar] boot error:",i)}!0!==o&&(e.use(t),W({router:t,store:a}),e.mount("#q-app"))}b(n.ri,k).then((e=>Promise.all([Promise.resolve().then(a.bind(a,56927)),Promise.resolve().then(a.bind(a,78027)),Promise.resolve().then(a.bind(a,98030))]).then((t=>{const a=t.map((e=>e.default)).filter((e=>"function"===typeof e));j(e,a)}))))},91569:(e,t,a)=>{"use strict";a.d(t,{h:()=>l});var n=a(23340),o=a(39981),r=a.n(o);const l=r().create({baseURL:"https://xn--k1affs.xn--p1ai"});(0,n.xr)((({app:e})=>{e.config.globalProperties.$axios=r(),e.config.globalProperties.$api=l}))},98030:(e,t,a)=>{"use strict";a.r(t),a.d(t,{era:()=>s});const{EraChain:n}=a(99407),o="https://scan.rupay.pro/api",r=9066,l={sdkMode:"SIDE",rpcPort:9077},s=new n.API(o,r,l)},78027:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(23340),o=a(43463);const r=(0,o.s)(),l={page:a(8793).Z,"page-header":a(12645).Z,"page-body":a(3407).Z,btn:a(9024).Z,"unconfirmed-tx-icon":a(3342).Z,"pin-code":a(72321).Z},s=(0,n.xr)((({app:e})=>{for(const t in l)e.component(t,l[t]),e.config.globalProperties.$globalStore=r}))},56927:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var n=a(23340),o=a(46190),r=a(23459),l=a(43463),s=a(44974);const i=(0,o.c)(),c=(0,r.Q)(),u=(0,l.s)(),d=(0,s.T)(),p=(0,n.xr)((async({app:e,store:t,router:a})=>{const n=localStorage.getItem("addresses"),o=localStorage.getItem("hash");c.seed||await a.push("/auth"),o||(await i.wipeInfo(),await a.push("/auth")),u.getVersion(),n&&(await i.setAddresses(),await c.getAssets(),c.startCheckUnconfirmTx(),await d.connectWS(JSON.parse(n)[0].address)),initComplete(),e.config.globalProperties.$global=u,e.config.globalProperties.$filters={convertAmount(e){return e.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2})}}}))},76028:(e,t,a)=>{"use strict";a.d(t,{AU:()=>i,GT:()=>g,lU:()=>c,mZ:()=>l,rK:()=>f,sg:()=>m,un:()=>v,ye:()=>s});a(99407),a(98030);var n=a(39981),o=a.n(n),r=a(17779);const l=async e=>await o().get(`https://scan.rupay.pro/api/addressassets/${e}`),s=async()=>{const e=await o().get("https://scan.rupay.pro/apiexchange/spot/list");return e.data},i=async(e,t)=>{const a=await o().get(`https://scan.rupay.pro/apiexchange/ordersbook/${e}/${t}?limit=500`);return a.data},c=async e=>{const t=await o().get(`https://scan.rupay.pro/apiexchange/order/${e}`);return t.data},u=async(e,t,a)=>await o().get(`https://scan.rupay.pro/api/tx/find?address=${e}&desc=true&limit=${t}&offset=${a}`);async function d(e,t=0){if(0===t){const t=await o().get(`https://scan.rupay.pro/apiexchange/allordersbyaddress/${e}?limit=20&desc`);return t.data}{const a=await o().get(`https://scan.rupay.pro/apiexchange/allordersbyaddress/${e}/${t}?limit=20&desc`);return a.data}}function p(e){return r.log("checkOrdersData",e.length),r.log(e),20===e.length&&e[19].id}const f=async e=>{let t=await d(e),a=p(t);if(a)do{let n=await d(e,a);t=t.concat(n),a=p(n),r.log("do again",a)}while(a);return t},m=async(e,t,a,n)=>{let o=[],l=[];const s=await u(e,a,n),i=s.data.filter((e=>e.assetKey===t));for(let c in i)r.log(c),i[c].fullDate=new Date(i[c].timestamp).toLocaleString(),i[c].timestamp=new Date(i[c].timestamp).toLocaleDateString();return l=[],o=l.concat(i),o},v=async e=>await o().get(`https://scan.rupay.pro/apiasset/${e}`),g=async e=>await o().get(`https://scan.rupay.pro/api/tx/unconfirmed?address=${e}`)},87270:(e,t,a)=>{"use strict";a.d(t,{Q:()=>l,d:()=>r});var n=a(65054),o=a(6827);function r(e,t){o.Z.create({message:t,timeout:1e3,html:!0,color:e,position:"bottom"})}async function l(e,t,a){await(0,n.Z)(e),r(t,a)}},46190:(e,t,a)=>{"use strict";a.d(t,{c:()=>d});a(40702);var n=a(7363),o=a(60499),r=a(23459),l=a(76028),s=a(99407),i=a(98030),c=a(91569),u=a(17779);const d=(0,n.Q_)("account",(()=>{const e=(0,r.Q)();let t=(0,o.iH)([]),a=(0,o.iH)([]),n=(0,o.iH)(0),d=(0,o.iH)(null),p=(0,o.iH)([]);function f(){var e,a;return null!==(e=t.value[null!==(a=n.value)&&void 0!==a?a:0].publicKey)&&void 0!==e?e:null}function m(e){n.value=e,localStorage.setItem("currentAddressIdx",e)}function v(){localStorage.removeItem("addresses")}function g(){localStorage.removeItem("addresses"),t.value=[],a.value=[],n.value=0,d.value=null,p.value=[]}async function h(e){const t=await i.era.getPersonByAddress(e);return t.error?d.value=null:d.value=t,Promise.resolve("Success")}async function w(){const a=await e.getKeyPair(t.value.length),n=await s.EraChain.Base58.encode(a.publicKey),o=await s.EraChain.Crypt.addressByPublicKey(a.publicKey);return t.value.push({address:o,publicKey:n,name:null}),localStorage.setItem("addresses",JSON.stringify(t.value)),await h(o),Promise.resolve("Success")}async function b(){var e,o;const r=await(0,l.mZ)(null!==(e=t.value[null!==(o=n.value)&&void 0!==o?o:0].address)&&void 0!==e?e:null);a.value=r.data;const s=Object.keys(a.value),i=await c.h.get("/api/settings/assets"),d=i.data;for(let t of s){let e=await(0,l.un)(t);e.data.error?u.log("getAsset error. Asset key:",t):"Digital asset"===e.data.type_name?0===p.value.filter((t=>t.key===e.data.key)).length&&(d.filter((e=>e.key===parseInt(t))).length>0?(e.data.course=d.find((e=>e.key===parseInt(t))).course,e.data.course_api=d.find((e=>e.key===parseInt(t))).course_api,p.value.push(e.data)):u.log("add course error. Asset key:",t)):u.log("skip nft")}return Promise.resolve("Success")}async function _(){return t.value=[],t.value.length||(await w(),m(0)),Promise.resolve("Success")}async function y(){const e=localStorage.getItem("addresses");return t.value=JSON.parse(e),await h(t.value[0].address),await b(),Promise.resolve("Success")}return{addresses:t,balances:a,currentAddressIdx:n,verifyPersonData:d,currentPublicKey:f,assets:p,firstAddress:_,getBalances:b,setAddresses:y,clearInfo:v,wipeInfo:g}}))},96928:(e,t,a)=>{"use strict";a.d(t,{t:()=>i});var n=a(7363),o=a(60499),r=a(23459),l=a(46190),s=a(18910);const i=(0,n.Q_)("auth",(()=>{const e=(0,r.Q)(),t=(0,l.c)(),a=(0,s.tv)();let n=(0,o.iH)(null),i=(0,o.iH)(!1);async function c(a,o){e.setSeed(a),i.value=!0,n.value=o;const r=localStorage.getItem("hash");return r||localStorage.setItem("hash",o),await e.getAssets(),await t.firstAddress(),await t.getBalances(),e.startCheckUnconfirmTx(),Promise.resolve("Success")}async function u(){return localStorage.removeItem("hash"),localStorage.removeItem("seed"),t.clearInfo(),e.stopCheckUnconfirmTx(),await a.push("/"),await a.go(),Promise.resolve("Success")}return{hash:n,seedStatus:i,login:c,logout:u}}))},23459:(e,t,a)=>{"use strict";a.d(t,{Q:()=>u});a(40702),a(46727);var n=a(7363),o=a(99407),r=a(60499),l=a(76028),s=a(87270),i=a(46190),c=a(91569);a(39981);const u=(0,n.Q_)("era_store",(()=>{const e=(0,r.iH)([{from:1643,to:2,comission:.05},{from:2,to:1,comission:0},{from:1,to:2,comission:.15}]),t=[{have:2,want:1,price:0,reversePrice:0,seqNo:"46649-1"},{have:1,want:2,price:0,reversePrice:0,seqNo:"46648-1"}],a=(0,r.iH)([]);let n=(0,r.iH)([]),u=(0,r.iH)([]);(0,r.iH)([]);const d=(0,i.c)();let p=(0,r.iH)(!1),f=(0,r.iH)(null),m=(0,r.iH)(null),v=(0,r.iH)(null),g=(0,r.iH)(null),h=(0,r.iH)(0),w=(0,r.iH)([]),b=(0,r.iH)([]);async function _(e){f.value=e}async function y(e){m.value=e}function k(){clearInterval(g.value)}async function x(){const e=await c.h.get("/api/settings/assets");a.value=e.data}async function P(){const e=await c.h.get("/api/settings/get_courses"),t=Object.keys(e.data);for(let n of a)t.includes(String(n.key))&&(n.course=e.data[n.key])}async function S(){for(let e in t){const a=await(0,l.lU)(t[e].seqNo);t[e].price=a.priceReverse,t[e].reversePrice=a.price}}function q(){g.value=setInterval((async function(){const e=await(0,l.GT)(d.addresses[d.currentAddressIdx].address);w.value=e.data,w.value.length>0&&(p.value=!0);for(let t of w.value)b.value.includes(t.timestamp)||(b.value.push(t.timestamp),(0,s.d)("positive","Транзакция обрабатывается"));p.value&&0===w.value.length&&(p.value=!1,b.value=[],await d.getBalances(),(0,s.d)("positive","Транзакции обработаны"))}),15e3)}async function H(){n.value=await(0,l.ye)()}async function W(e=h.value){const t=await o.EraChain.Crypt.generateAccountSeed(f.value,e);return o.EraChain.Crypt.getKeyPairFromSeed(t)}async function C(e=h.value){const t=await o.EraChain.Crypt.generateAccountSeed(m.value,e);return o.EraChain.Crypt.getKeyPairFromSeed(t)}return{getKeyPair:W,setSeed:_,startCheckUnconfirmTx:q,getAssetsCourse:P,setTradePairs:H,getMarketExchangeOrders:S,stopCheckUnconfirmTx:k,getAssets:x,getKeyPairForAddBalance:C,setSessionID:y,seed:f,session_id:m,address:v,addressIdx:h,unconfirmedTx:w,assets:a,exchange:e,trade_pairs:n,marketExchange:t,trade_pairs_v24:u}}))},43463:(e,t,a)=>{"use strict";a.d(t,{s:()=>r});var n=a(7363),o=a(60499);a(91569);const r=(0,n.Q_)("global",(()=>{let e=(0,o.iH)(!1),t=(0,o.iH)(!1),a=(0,o.iH)(!1),n=(0,o.iH)(!1),r=(0,o.iH)(!1),l=(0,o.iH)(!1),s=(0,o.iH)(!1),i=(0,o.iH)(!1),c=(0,o.iH)(!1),u=(0,o.iH)(null);function d(){e.value=!e.value}function p(){c.value=!c.value}function f(){t.value=!t.value}function m(e){i.value=e}function v(){r.value=!r.value}function g(){a.value=!a.value}function h(){n.value=!n.value}async function w(){navigator.serviceWorker.getRegistrations().then((function(e){u.value=setInterval((function(){e[0].update()}),15e3)}))}return{is_loading:e,transactionInfoModalVisible:t,sendAssetModalVisible:a,isPageHidden:l,needUpdate:s,tradeModalVisible:n,pinCodeModalVisible:r,isPinOk:i,isBlur:c,toggleLoadingState:d,toggleTransactionInfoModalVisible:f,toggleSendAssetModalVisible:g,toggleTradeModalVisible:h,togglePinCodeModalVisible:v,setPinOk:m,getVersion:w,toggleIsBlur:p}}))},31655:(e,t,a)=>{"use strict";a.d(t,{T:()=>d});var n=a(7363),o=a(91569),r=(a(87270),a(59835)),l=a(60499),s=a(46190),i=a(17779);const c=(0,s.c)(),u=(0,r.Fl)((()=>c.addresses[c.currentAddressIdx].address)),d=(0,n.Q_)("p2p",(()=>{const e=(0,l.iH)([]),t=(0,l.iH)([]),a=(0,l.iH)([]),n=(0,l.iH)([]),r=(0,l.iH)([]),s=(0,l.iH)({}),c=(0,l.iH)({}),d=(0,l.iH)(null),p=(0,l.iH)({offer:{user:{},asset:{}},opponent:{},status:{},payment_type:{}});async function f(e){await m(e),await v(),await _(),await g(),await k(),s.value.is_p2p_admin&&await y()}async function m(t){const a=await o.h.get(`/api/p2p/offers?id=${t}`);e.value=a.data}async function v(){const e=await o.h.get(`/api/p2p/own_offers?wallet=${u.value}`);t.value=e.data}async function g(){const e=await o.h.get(`/api/p2p/notifications?wallet=${u.value}`);r.value=e.data}async function h(){const e=await o.h.get("/api/p2p/get_payment_methods");c.value=e.data}async function w(){await o.h.post("/api/p2p/set_read_notification",{wallet:u.value}),await g()}async function b(e){await o.h.post("/api/p2p/delete_notification",{id:e}),await g()}async function _(){const e=await o.h.get(`/api/p2p/own_trades?wallet=${u.value}`);a.value=e.data}async function y(){const e=await o.h.get("/api/p2p/all_trades");n.value=e.data}async function k(){i.log("current_address",u.value);const e=await o.h.get(`/api/p2p/user?wallet=${u.value}`);s.value=e.data}async function x(){const e=await o.h.get(`/api/p2p/trade?uid=${d.value}`);p.value=e.data}return{get_offers:m,get_own_offers:v,get_own_trades:_,get_user:k,get_notifications:g,getAllData:f,set_notification_read:w,delete_notification:b,get_trade:x,get_all_trades:y,get_payment_methods:h,offers:e,own_offers:t,own_trades:a,all_trades:n,user:s,notifications:r,trade:p,current_trade_uid:d,payment_methods:c}}))},44974:(e,t,a)=>{"use strict";a.d(t,{T:()=>m});var n=a(7363),o=(a(99407),a(23459)),r=(a(98030),a(87270)),l=a(46190),s=a(31655),i=a(59835),c=a(17779);(0,o.Q)();const u=(0,l.c)(),d=(0,s.T)(),p=(0,i.Fl)((()=>u.verifyPersonData)),f=new Audio("notify.mp3"),m=(0,n.Q_)("ws",(()=>{let e=null;async function t(t){if(c.log(p.value),p.value)return e=new WebSocket("wss://xn--k1affs.xn--p1ai/ws/user/online"),e.onopen=()=>{c.log("ws connected",t),e.send(JSON.stringify({wallet:t,fio:p.value.name})),e.onmessage=async e=>{c.log("message",JSON.parse(e.data));let t=JSON.parse(e.data);if("update_user_notifications"===t.event&&(await d.get_notifications(),f.play()),"update_trade"===t.event){let e=t.message;c.log(d.current_trade_uid),await d.get_notifications(),d.current_trade_uid===e&&(await d.get_trade(),"freeze"===t.event_id&&(0,r.d)("positive",d.trade.asset_amount))}}},Promise.resolve("Success");c.log("not person")}return{connectWS:t}}))},72321:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});a(18964),a(12809);var n=a(59835),o=a(86970),r=a(60499),l=a(87270),s=a(17779);const i={key:0,class:"text-center text-weight-medium"},c={key:1,class:"text-center text-weight-medium"},u={class:"text-center q-gutter-md q-mb-lg"},d={class:"number-grid"},p={class:"number"},f={__name:"PinCode",props:{showDigits:Boolean},emits:["pincode_ready"],setup(e,{emit:t}){const a=e;let f=(0,r.iH)([11,11,11,11]),m=(0,r.iH)([11,11,11,11]),v=(0,r.iH)(0),g=(0,r.iH)("init");const h=(0,r.iH)([1,2,3,4,5,6,7,8,9,0]);function w(){0!==v.value&&("init"===g.value?f.value[v.value-1]=11:m.value[v.value-1]=11,v.value-=1)}function b(e){if(s.log(),v.value<=3&&("init"===g.value?f.value[v.value]=e:m.value[v.value]=e,v.value+=1),4===v.value)if(a.showDigits)if("init"===g.value)g.value="repeat",v.value=0;else{const e=f.value.join(),a=m.value.join();s.log(e),s.log(a),s.log(e===a),e===a?t("pincode_ready",f.value.join().replaceAll(",","")):(g.value="init",v.value=0,f.value=[11,11,11,11],m.value=[11,11,11,11],(0,l.d)("negative","Пинкоды не совпадают"))}else t("pincode_ready",f.value.join().replaceAll(",",""))}return(t,a)=>{const l=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)(n.HY,null,[e.showDigits?((0,n.wg)(),(0,n.iD)("p",i,(0,o.zw)("init"===(0,r.SU)(g)?"Придумайте пинкод":"Повторите пинкод"),1)):((0,n.wg)(),(0,n.iD)("p",c,"Введите пинкод")),(0,n._)("div",u,[e.showDigits?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)("init"===(0,r.SU)(g)?(0,r.SU)(f):(0,r.SU)(m),((e,t)=>((0,n.wg)(),(0,n.j4)(l,{size:"15px",round:"",outline:"",flat:"",disable:"",key:"init"===(0,r.SU)(g)?t:t+30,label:11===e?"⚬":e},null,8,["label"])))),128)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)((0,r.SU)(f),(e=>((0,n.wg)(),(0,n.j4)(l,{size:"15px",flat:"",round:"",outline:"",disable:"",key:e,label:11===e?"⚬":"✳"},null,8,["label"])))),128))]),(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(h.value,(e=>((0,n.wg)(),(0,n.iD)("div",{class:"number",key:e},[(0,n.Wm)(l,{onClick:t=>b(e),size:"18px",round:"",unelevated:"",color:"grey-3","text-color":"dark",label:e},null,8,["onClick","label"])])))),128)),(0,n._)("div",p,[(0,n.Wm)(l,{onClick:w,size:"18px",round:"",unelevated:"",color:"grey-9",flat:"",icon:"las la-backspace"})])])],64)}}};var m=a(24455),v=a(69984),g=a.n(v);const h=f,w=h;g()(f,"components",{QBtn:m.Z})},9024:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(59835);function o(e,t,a,o,r,l){const s=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.j4)(s,{rounded:"",unelevated:"","no-caps":"",color:"primary",loading:a.is_loading,class:"q-py-md full-width",outline:a.outline,label:a.label},null,8,["loading","outline","label"])}const r={name:"Button",props:{label:{type:String,required:!0},is_loading:{type:Boolean,required:!1,default:!1},outline:{type:Boolean,required:!1,default:!0}}};var l=a(11639),s=a(24455),i=a(69984),c=a.n(i);const u=(0,l.Z)(r,[["render",o]]),d=u;c()(r,"components",{QBtn:s.Z})},3342:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var n=a(59835),o=a(60499),r=a(86970),l=a(23459);const s={__name:"UnconfirmedTxIcon",setup(e){const t=(0,l.Q)(),a=(0,n.Fl)((()=>t.unconfirmedTx));return(e,t)=>{const l=(0,n.up)("q-icon"),s=(0,n.up)("q-badge");return(0,o.SU)(a).length>0?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"unconfirmed-icon",onClick:t[0]||(t[0]=t=>e.$router.push({name:"wallet_unconfirmed"}))},[(0,n.Wm)(l,{name:"las la-sync",color:"white",size:"26px",class:"rotate"}),(0,n.Wm)(s,{color:"white",rounded:"","text-color":"dark"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)((0,o.SU)(a).length),1)])),_:1})])):(0,n.kq)("",!0)}}};var i=a(22857),c=a(20990),u=a(69984),d=a.n(u);const p=s,f=p;d()(s,"components",{QIcon:i.Z,QBadge:c.Z})},3407:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(59835),o=a(61957);const r={class:"page-body full-height"};function l(e,t,a,l,s,i){const c=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.WI)(e.$slots,"default"),(0,n.Wm)(c,null,{default:(0,n.w5)((({Component:e})=>[(0,n.Wm)(o.uT,{appear:"","enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutRight"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)((0,n.LL)(e)))])),_:2},1024)])),_:1})])}const s={name:"PageBody",props:["background"],setup(){}};var i=a(11639);const c=(0,i.Z)(s,[["render",l]]),u=c},12645:(e,t,a)=>{"use strict";a.d(t,{Z:()=>F});var n=a(59835),o=a(86970),r=a(60499),l=a(39981),s=a.n(l),i=a(87270),c=a(43463),u=a(46190),d=a(96928),p=a(18910),f=a(31655);const m=["src"],v=(0,n._)("p",{class:"text-negative text-bold q-mb-sm"},"Ваш счет является анонимным. Для разблокировки всего функционала создайте персону и верифицируйте счет",-1),g=(0,n._)("a",{class:"q-btn q-btn-item non-selectable no-outline q-btn--unelevated q-btn--rectangle bg-blue-7 text-white q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase q-btn--active",tabindex:"0",href:"https://t.me/verify_RUpaybot",target:"_blank"},[(0,n._)("span",{class:"q-focus-helper",tabindex:"-1"}),(0,n._)("span",{class:"q-btn__content text-center col items-center q-anchor--skip justify-center row"},[(0,n._)("i",{class:"q-icon on-left lab la-telegram","aria-hidden":"true",role:"img"}),(0,n._)("span",{class:"block"},"Бот для верификации")])],-1),h={class:"text-caption q-mb-none ellipsis"},w=(0,n.Uk)("Адрес кошелька"),b=(0,n.Uk)("Верифицировать пользователя"),_=(0,n.Uk)("P2P"),y=(0,n.Uk)("Выход"),k=(0,n.Uk)("Подтвердить кошелек для регистрации в игре ChickenBro"),x={__name:"Header",props:{route_name:String},setup(e){const t="https://astraz.ru",a=((0,c.s)(),(0,u.c)()),l=(0,p.tv)(),x=(0,f.T)(),P=(0,d.t)(),S=(0,r.iH)(!1),q=(0,r.iH)(!1),H=(0,r.iH)(!1),W="0.01",C="https://scan.rupay.pro";async function U(){await(0,i.Q)(I.value,"positive","Адрес кошелька скопирован")}const j=(0,n.Fl)((()=>x.user)),I=(0,n.Fl)((()=>a.addresses[0].address)),A=(0,n.Fl)((()=>a.verifyPersonData)),Z=(0,n.Fl)((()=>x.notifications)),O=(0,n.Fl)((()=>Z.value.filter((e=>e.is_new)).length>0));async function Q(){const e=await s().post(t+"/api/user/check_address",{wallet:I.value,confim:!0});e.data.success?(q.value=!1,(0,i.d)("positive","Кошелек подтвержден, можете продолжить регистрацию")):(0,i.d)("negative","Ошибка подтверждения кошелька")}async function T(){await P.logout(),await l.push("/")}return(0,n.wF)((async()=>{const e=await s().post(t+"/api/user/check_address",{wallet:I.value,get:!0});q.value=!e.data.is_confirm,A.value&&(await x.get_notifications(),await x.get_user(),H.value=0===j.value.payment_types.length)})),(t,a)=>{const s=(0,n.up)("q-btn"),i=(0,n.up)("q-toolbar-title"),c=(0,n.up)("unconfirmed-tx-icon"),u=(0,n.up)("q-icon"),d=(0,n.up)("q-badge"),p=(0,n.up)("q-toolbar"),f=(0,n.up)("q-header"),x=(0,n.up)("q-item-section"),P=(0,n.up)("q-item"),j=(0,n.up)("q-avatar"),Z=(0,n.up)("q-item-label"),$=(0,n.up)("q-separator"),D=(0,n.up)("q-list"),B=(0,n.up)("q-banner"),F=(0,n.up)("q-drawer");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(f,{class:(0,o.C_)(["text-white items-center flex justify-between",{"bg-tr":"/wallet/index"===t.$route.path}])},{default:(0,n.w5)((()=>[(0,n.Wm)(p,{class:"q-pl-none"},{default:(0,n.w5)((()=>["/wallet/index"!==t.$route.path?((0,n.wg)(),(0,n.j4)(s,{key:0,label:"Назад","no-caps":"",unelevated:"","text-color":"white",onClick:a[0]||(a[0]=a=>e.route_name?t.$router.push({name:e.route_name}):t.$router.back()),icon:"las la-angle-left"})):(0,n.kq)("",!0),(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.WI)(t.$slots,"title")])),_:3}),(0,n.Wm)(c),(0,r.SU)(A)?((0,n.wg)(),(0,n.j4)(s,{key:1,flat:"",round:"",dense:"",icon:"las la-bell",onClick:a[1]||(a[1]=e=>t.$router.push({name:"notifications"})),class:"q-ml-md"},{default:(0,n.w5)((()=>[(0,r.SU)(O)?((0,n.wg)(),(0,n.j4)(d,{key:0,rounded:"",floating:"",color:"negative"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{size:"10px",name:"priority_high"})])),_:1})):(0,n.kq)("",!0)])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(s,{flat:"",round:"",dense:"",icon:"las la-bars",onClick:a[2]||(a[2]=e=>S.value=!S.value),class:"q-ml-md"},{default:(0,n.w5)((()=>[q.value?((0,n.wg)(),(0,n.j4)(d,{key:0,rounded:"",floating:"",color:"negative"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{size:"10px",name:"priority_high"})])),_:1})):(0,n.kq)("",!0),H.value?((0,n.wg)(),(0,n.j4)(d,{key:1,rounded:"",floating:"",color:"negative"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{size:"10px",name:"priority_high"})])),_:1})):(0,n.kq)("",!0)])),_:1})])),_:3})])),_:3},8,["class"]),(0,n.Wm)(F,{modelValue:S.value,"onUpdate:modelValue":a[7]||(a[7]=e=>S.value=e),"show-if-above":"",bordered:"",side:"right",class:"q-py-lg"},{default:(0,n.w5)((()=>[(0,n.Wm)(D,{separator:"",class:"text-dark"},{default:(0,n.w5)((()=>[(0,n.Wm)(P,null,{default:(0,n.w5)((()=>[(0,n.Wm)(x),(0,n.Wm)(x,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{round:"","text-color":"primary",icon:"las la-times-circle",unelevated:"",onClick:a[3]||(a[3]=e=>S.value=!S.value)})])),_:1})])),_:1}),(0,r.SU)(A)?((0,n.wg)(),(0,n.j4)(P,{key:0},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(j,null,{default:(0,n.w5)((()=>[(0,n._)("img",{src:(0,r.SU)(C)+(0,r.SU)(A).maker_image},null,8,m)])),_:1})])),_:1}),(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Z,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,o.zw)((0,r.SU)(A).maker_name),1)])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),(0,r.SU)(A)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(P,{key:1,class:"block"},{default:(0,n.w5)((()=>[v,(0,n.Wm)(s,{label:"Пройти верификацию",color:"blue-7",onClick:a[4]||(a[4]=e=>(0,r.SU)(l).push({name:"create_person"})),icon:"las la-user-plus","no-caps":"",unelevated:""})])),_:1})),(0,r.SU)(A)?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(P,{key:2,class:"block"},{default:(0,n.w5)((()=>[g])),_:1})),(0,n.Wm)(P,null,{default:(0,n.w5)((()=>[(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Z,{overline:""},{default:(0,n.w5)((()=>[(0,n._)("p",h,(0,o.zw)((0,r.SU)(I)),1)])),_:1}),(0,n.Wm)(Z,{caption:""},{default:(0,n.w5)((()=>[w])),_:1})])),_:1}),(0,n.Wm)(x,{side:""},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{color:"blue-7",onClick:U,round:"",dense:"",unelevated:"",icon:"las la-clipboard"})])),_:1})])),_:1}),(0,r.SU)(A)?((0,n.wg)(),(0,n.j4)(P,{key:3,clickable:"",onClick:a[5]||(a[5]=e=>(0,r.SU)(l).push({name:"verify_person"}))},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{size:"20px",name:"las la-id-card"})])),_:1}),(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[b])),_:1})])),_:1})):(0,n.kq)("",!0),(0,r.SU)(A)?((0,n.wg)(),(0,n.j4)(P,{key:4,clickable:"",onClick:a[6]||(a[6]=e=>t.$router.push({name:"p2p_user"})),class:"relative-position"},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{size:"20px",name:"las la-users"})])),_:1}),H.value?((0,n.wg)(),(0,n.j4)(d,{key:0,rounded:"",floating:"",color:"negative"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{size:"10px",name:"priority_high"})])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[_])),_:1})])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(P,{clickable:"",onClick:T,class:"text-negative"},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{size:"20px",name:"las la-sign-out-alt"})])),_:1}),(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[y])),_:1})])),_:1}),(0,n.Wm)($),q.value?((0,n.wg)(),(0,n.j4)(P,{key:5,clickable:"",onClick:Q,class:"text-positive"},{default:(0,n.w5)((()=>[(0,n.Wm)(x,{avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{size:"20px",name:"las la-gamepad"})])),_:1}),(0,n.Wm)(x,null,{default:(0,n.w5)((()=>[k])),_:1})])),_:1})):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(B,{class:"bg-blue-7 absolute-bottom"},{default:(0,n.w5)((()=>[(0,n.Uk)("RUPAY Wallet - Версия "+(0,o.zw)((0,r.SU)(W)),1)])),_:1})])),_:1},8,["modelValue"])],64)}}};var P=a(16602),S=a(51663),q=a(24455),H=a(81973),W=a(20990),C=a(22857),U=a(10906),j=a(13246),I=a(490),A=a(76749),Z=a(61357),O=a(33115),Q=a(50926),T=a(47128),$=a(69984),D=a.n($);const B=x,F=B;D()(x,"components",{QHeader:P.Z,QToolbar:S.Z,QBtn:q.Z,QToolbarTitle:H.Z,QBadge:W.Z,QIcon:C.Z,QDrawer:U.Z,QList:j.Z,QItem:I.Z,QItemSection:A.Z,QAvatar:Z.Z,QItemLabel:O.Z,QSeparator:Q.Z,QBanner:T.Z})},8793:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(59835),o=a(86970),r=a(60499),l=a(43463);const s={__name:"Page",setup(e){const t=(0,l.s)();return(e,a)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,o.C_)(["page absolute-top fit bg-white",{hidden:(0,r.SU)(t).isPageHidden}])},[(0,n.WI)(e.$slots,"default")],2))}};var i=a(11639);const c=(0,i.Z)(s,[["__scopeId","data-v-9164f80a"]]),u=c},80950:()=>{},46601:()=>{},89214:()=>{},8623:()=>{},7748:()=>{},85568:()=>{},56619:()=>{},77108:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.loaded=!0,r.exports}a.m=e,(()=>{var e=[];a.O=(t,n,o,r)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,o,r]=e[u],s=!0,i=0;i<n.length;i++)(!1&r||l>=r)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,r<l&&(l=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"===typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"===typeof n.then)return n}var r=Object.create(null);a.r(r);var l={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>l[e]=()=>n[e]));return l["default"]=()=>n,a.d(r,l),r}})(),(()=>{a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,n)=>(a.f[n](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{32:"2fa653c2",34:"4d4cb828",165:"281b3f66",201:"7644e272",292:"322f9d64",319:"335704d2",359:"9cc0c155",391:"992da6b8",429:"d56a1910",460:"11db6957",495:"7726da0d",514:"16964263",532:"9b6773d8",560:"8083a8c7",575:"34e3e07c",628:"b6cdd146",708:"64fb8bba",783:"0f94ff49",832:"63a9a3af",852:"2feec84e",862:"62ed9180",874:"2b61b28e",892:"42d48f90",969:"c6b0d69b",970:"01d3827b",984:"af0d857b"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"1601cf6d",165:"d6e00f59",319:"2aaf6d0e",359:"fb63fb52",391:"2aaf6d0e",429:"cf954619",532:"266e8c68",575:"1f8bc801",708:"da36b6cc",736:"4c1ba8fe",783:"fb63fb52",852:"2aaf6d0e",969:"4048f7f4"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="rolf-wallet:";a.l=(n,o,r,l)=>{if(e[n])e[n].push(o);else{var s,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[o];var p=(t,a)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(a))),t)return t(a)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),i&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{a.p="/"})(),(()=>{var e=(e,t,a,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=r=>{if(o.onerror=o.onload=null,"load"===r.type)a();else{var l=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=l,i.request=s,o.parentNode.removeChild(o),n(i)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var o=a[n],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var l=document.getElementsByTagName("style");for(n=0;n<l.length;n++){o=l[n],r=o.getAttribute("data-href");if(r===e||r===t)return o}},n=n=>new Promise(((o,r)=>{var l=a.miniCssF(n),s=a.p+l;if(t(l,s))return o();e(n,s,o,r)})),o={143:0};a.f.miniCss=(e,t)=>{var a={165:1,319:1,359:1,391:1,429:1,532:1,575:1,708:1,783:1,852:1,969:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};a.f.j=(t,n)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise(((a,n)=>o=e[t]=[a,n]));n.push(o[2]=r);var l=a.p+a.u(t),s=new Error,i=n=>{if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",s.name="ChunkLoadError",s.type=r,s.request=l,o[1](s)}};a.l(l,i,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[l,s,i]=n,c=0;if(l.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)var u=i(a)}for(t&&t(n);c<l.length;c++)r=l[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(u)},n=globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=a.O(void 0,[736],(()=>a(5852)));n=a.O(n)})();