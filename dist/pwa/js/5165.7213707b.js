(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[5165],{55165:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Ke});a(40702);var l=a(59835),n=a(60499),s=a(86970),i=a(85157),o=a.n(i),c=a(39161),r=a.n(c),u=a(26244),d=a.n(u),p=a(12154),m=a.n(p),g=a(4749),_=a.n(g),w=a(36918),h=a.n(w),x=a(80269),b=a.n(x),f=a(27899),v=a.n(f),y=a(84422),k=a.n(y),$=a(88140),W=a.n($),q=a(48284),C=a.n(q),z=a(46190),U=a(31655),H=a(39981),S=a.n(H),Q=a(91569),Z=a(18910),T=a(17322),V=a(17779);const F=e=>((0,l.dD)("data-v-45ce9d9c"),e=e(),(0,l.Cn)(),e),D={class:"page-body--top text-white flex column items-center justify-around"},L=["src"],j={class:""},M={style:{"line-height":"110%"},class:"text-caption text-bold no-margin text-dark"},I={class:"flex items-center text-center q-mb-md"},A={class:"top-buttons"},B=["innerHTML"],P=["innerHTML"],O={class:"text-center",style:{opacity:".5"}},E=["innerHTML"],K={class:"text-center",style:{opacity:".5"}},R=["innerHTML"],Y={class:"page-body--top"},J=["src"],N={class:"functions-grid"},X=F((()=>(0,l._)("img",{src:o(),alt:""},null,-1))),G=F((()=>(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"P2P",-1))),ee=[X,G],te=F((()=>(0,l._)("img",{src:r(),alt:""},null,-1))),ae={class:"text-caption text-center no-margin lh100"},le=F((()=>(0,l._)("img",{src:d(),alt:""},null,-1))),ne={class:"text-caption text-center no-margin lh100"},se={class:"functions-grid-item"},ie={style:{color:"inherit","text-decoration":"none"},href:"https://t.me/rupayPRO",target:"_blank"},oe=F((()=>(0,l._)("img",{src:m(),alt:""},null,-1))),ce={class:"text-caption text-center no-margin lh100"},re=F((()=>(0,l._)("img",{src:_(),alt:""},null,-1))),ue=F((()=>(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"Откуп OLF",-1))),de=[re,ue],pe=F((()=>(0,l._)("img",{src:h(),alt:""},null,-1))),me={class:"text-caption text-center no-margin lh100"},ge=F((()=>(0,l._)("img",{src:b(),alt:""},null,-1))),_e=F((()=>(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"OLF шанс",-1))),we=[ge,_e],he=F((()=>(0,l._)("img",{src:v(),alt:""},null,-1))),xe={class:"text-caption text-center no-margin lh100"},be=F((()=>(0,l._)("div",{class:"functions-grid-item"},[(0,l._)("a",{style:{color:"inherit","text-decoration":"none"},href:"https://t.me/VmesteVygodneeBot?start=action-EQ-SFNU-AND-f-EQ-ec743006-843f-457e-92b5-50d31787",target:"_blank"},[(0,l._)("img",{src:k(),alt:""}),(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"XCAR")])],-1))),fe=F((()=>(0,l._)("img",{src:W(),alt:""},null,-1))),ve={class:"text-caption text-center no-margin lh100"},ye={class:"functions-grid-item"},ke={style:{color:"inherit","text-decoration":"none"},href:"https://oneunion.ru",target:"_blank"},$e=F((()=>(0,l._)("img",{src:C(),alt:""},null,-1))),We={class:"text-caption text-center no-margin lh100"},qe={class:"text-bold"},Ce=(0,l.aZ)({components:{Vue3Marquee:T.J}}),ze=Object.assign(Ce,{__name:"Index",setup(e){const t=(0,z.c)(),a=(0,U.T)(),i="https://scan.rupay.pro",o=(0,n.iH)("tokens"),c=((0,n.iH)(void 0),["bitcoin","bnb","tether","litecoin"]),r=(0,n.iH)([]),u=(0,n.iH)([]),d=(0,n.iH)(0),p=(0,Z.tv)(),m=(0,l.Fl)((()=>a.user)),g=((0,l.Fl)((()=>t.verifyPersonData)),(0,l.Fl)((()=>t.addresses[t.currentAddressIdx].address)),(0,l.Fl)((()=>t.assets))),_=(0,l.Fl)((()=>t.balances));const w=(0,l.Fl)((()=>{let e=0;if(g.value.length>0)for(let a of g.value)try{e+=_.value[a.key][0][1]*a.course}catch(t){V.log("balance error",t)}return e})),h=e=>{const t=e.data.histPrices["24H"],a=e.data.price.USD-t.USD,l=a/t.USD*100;return+l.toFixed(3)},x=async e=>{const t=await S().get(`https://api.cryptorank.io/v0/coins/${e}`);V.log(t.data),r.value.push({change:h(t.data),name:t.data.data.name,image:t.data.data.image.x60,priceUSD:t.data.data.price.USD}),V.log(r)};(0,l.wF)((async()=>{const e=await Q.h.get("/api/settings/banner?rupay=1");V.log(e.data),u.value=e.data,c.forEach((async e=>{await x(e)}))}));const b=e=>{V.log(e),u.value[e].inner_url?p.push(u.value[e].inner_url):window.location.href=u.value[e].outer_url};return(e,t)=>{const a=(0,l.up)("page-header"),c=(0,l.up)("q-btn"),p=(0,l.up)("q-icon"),h=(0,l.up)("q-avatar"),x=(0,l.up)("q-tab-panel"),f=(0,l.up)("q-carousel-slide"),v=(0,l.up)("q-carousel"),y=(0,l.up)("q-tab-panels"),k=(0,l.up)("q-tab"),$=(0,l.up)("q-tabs"),W=(0,l.up)("q-item-section"),q=(0,l.up)("q-item-label"),C=(0,l.up)("q-item"),z=(0,l.up)("q-list"),U=(0,l.up)("q-scroll-area"),H=(0,l.up)("page-body"),S=(0,l.up)("page");return(0,n.SU)(m).is_wallet_blocked?((0,l.wg)(),(0,l.j4)(S,{key:1,class:"fullscreen flex column items-center justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{size:"60px",color:"red",name:"cancel",class:"q-mb-lg"}),(0,l._)("p",qe,(0,s.zw)(e.$t("access_d")),1)])),_:1})):((0,l.wg)(),(0,l.j4)(S,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(a),(0,l.Wm)(y,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=e=>o.value=e),animated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{name:"tokens",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l._)("div",D,[(0,l.Wm)((0,n.SU)(T.J),{clone:!0,duration:8},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.value,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"coin",key:t},[(0,l._)("img",{src:e.image,alt:""},null,8,L),(0,l._)("div",j,[(0,l._)("p",M,(0,s.zw)(e.name)+" $"+(0,s.zw)(parseFloat(e.priceUSD).toFixed(2)),1),(0,l._)("p",{style:{"line-height":"110%"},class:(0,s.C_)(["text-caption no-margin",parseFloat(e.change)>0?"text-positive":"text-negative"])},(0,s.zw)(e.change)+"%",3)])])))),128))])),_:1}),(0,l._)("div",I,[(0,l._)("p",{class:(0,s.C_)(["q-mb-none q-mr-md text-h5 text-bold text-gold-gradient",{blur:e.$global.isBlur}])},"~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(w)))+" ₽",3),(0,l.Wm)(c,{icon:e.$global.isBlur?"las la-low-vision":"las la-eye","text-color":"gold",flat:"",dense:"",round:"",onClick:t[0]||(t[0]=t=>e.$global.toggleIsBlur())},null,8,["icon"])]),(0,l._)("div",A,[(0,l._)("div",{class:"text-center",onClick:t[1]||(t[1]=t=>e.$router.push({name:"wallet_own_assets"}))},[(0,l.Wm)(h,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{size:"22px",name:"las la-upload"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("send_in_rupay")},null,8,B)]),(0,l._)("div",{class:"text-center",onClick:t[2]||(t[2]=t=>e.$router.push({name:"wallet_select"}))},[(0,l.Wm)(h,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{size:"22px",name:"las la-download"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("receive_in_rupay")},null,8,P)]),(0,l._)("div",O,[(0,l.Wm)(h,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{size:"22px",name:"las la-tag"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("receive_in")},null,8,E)]),(0,l._)("div",K,[(0,l.Wm)(h,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{size:"22px",name:"las la-wallet"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("withdrawal")},null,8,R)])])])])),_:1}),(0,l.Wm)(x,{name:"functions",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l._)("div",Y,[(0,l.Wm)(v,{swipeable:"",animated:"",arrows:"",modelValue:d.value,"onUpdate:modelValue":t[3]||(t[3]=e=>d.value=e),style:{height:"100%",background:"#000"},infinite:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.value,((e,t)=>((0,l.wg)(),(0,l.j4)(f,{onClick:e=>b(t),name:t,"img-src":e.image,key:e.id},null,8,["onClick","name","img-src"])))),128))])),_:1},8,["modelValue"])])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)($,{modelValue:o.value,"onUpdate:modelValue":t[5]||(t[5]=e=>o.value=e),class:"index-tabs text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{ripple:!1,"no-caps":"",class:"bg-white",name:"tokens",label:e.$t("assets")},null,8,["label"]),(0,l.Wm)(k,{ripple:!1,"no-caps":"",class:"bg-white",name:"functions",label:e.$t("applications")},null,8,["label"])])),_:1},8,["modelValue"]),(0,l.Wm)(y,{modelValue:o.value,"onUpdate:modelValue":t[14]||(t[14]=e=>o.value=e),animated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{name:"tokens",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{height:"calc(100vh - 40vh - 50px)"}},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{class:"q-pa-md"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(g),((t,a)=>((0,l.wg)(),(0,l.j4)(C,{onClick:t=>e.$router.push({name:"wallet_asset",params:{asset_key:a}}),clickable:"",class:"asset-item",key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{rounded:""},{default:(0,l.w5)((()=>[(0,l._)("img",{src:(0,n.SU)(i)+t.iconURL},null,8,J)])),_:2},1024)])),_:2},1024),(0,l.Wm)(W,{class:"text-weight-medium"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(t.name),1)])),_:2},1024),(0,l.Wm)(q,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(t.course)+" ₽",1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,{class:(0,s.C_)(["text-weight-medium",{blur:e.$global.isBlur}])},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)((0,n.SU)(_)[t.key][0][1]),1)])),_:2},1032,["class"]),t.course?((0,l.wg)(),(0,l.j4)(q,{key:0,caption:"",class:(0,s.C_)({blur:e.$global.isBlur})},{default:(0,l.w5)((()=>[(0,l.Uk)("~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(_)[t.key][0][1]*t.course))+" ₽",1)])),_:2},1032,["class"])):(0,l.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,l.Wm)(x,{name:"functions"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{height:"50vh"}},{default:(0,l.w5)((()=>[(0,l._)("div",N,[(0,l._)("div",{class:"functions-grid-item",onClick:t[6]||(t[6]=t=>e.$router.push({name:"p2p_index"}))},ee),(0,l._)("div",{class:"functions-grid-item",onClick:t[7]||(t[7]=t=>e.$router.push({name:"wallet_exchange"}))},[te,(0,l._)("p",ae,(0,s.zw)(e.$t("market")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:t[8]||(t[8]=t=>e.$router.push({name:"asset_hold"}))},[le,(0,l._)("p",ne,(0,s.zw)(e.$t("asset_hold")),1)]),(0,l._)("div",se,[(0,l._)("a",ie,[oe,(0,l._)("p",ce,(0,s.zw)(e.$t("news")),1)])]),(0,l._)("div",{class:"functions-grid-item",onClick:t[9]||(t[9]=t=>e.$router.push({name:"freeze_olf"}))},de),(0,l._)("div",{class:"functions-grid-item",onClick:t[10]||(t[10]=t=>e.$router.push({name:"scan_index"}))},[pe,(0,l._)("p",me,(0,s.zw)(e.$t("app_scan")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:t[11]||(t[11]=t=>e.$router.push({name:"olf_shance"}))},we),(0,l._)("div",{class:"functions-grid-item",onClick:t[12]||(t[12]=t=>e.$router.push({name:"vip_club"}))},[he,(0,l._)("p",xe,(0,s.zw)(e.$t("app_vip")),1)]),be,(0,l._)("div",{class:"functions-grid-item",onClick:t[13]||(t[13]=t=>e.$router.push({name:"ido"}))},[fe,(0,l._)("p",ve,(0,s.zw)(e.$t("app_ido")),1)]),(0,l._)("div",ye,[(0,l._)("a",ke,[$e,(0,l._)("p",We,(0,s.zw)(e.$t("app_union")),1)])])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}))}}});var Ue=a(11639),He=a(89800),Se=a(84106),Qe=a(24455),Ze=a(61357),Te=a(22857),Ve=a(60960),Fe=a(41694),De=a(47817),Le=a(70900),je=a(66663),Me=a(13246),Ie=a(490),Ae=a(76749),Be=a(33115),Pe=a(69984),Oe=a.n(Pe);const Ee=(0,Ue.Z)(ze,[["__scopeId","data-v-45ce9d9c"]]),Ke=Ee;Oe()(ze,"components",{QTabPanels:He.Z,QTabPanel:Se.Z,QBtn:Qe.Z,QAvatar:Ze.Z,QIcon:Te.Z,QCarousel:Ve.Z,QCarouselSlide:Fe.Z,QTabs:De.Z,QTab:Le.Z,QScrollArea:je.Z,QList:Me.Z,QItem:Ie.Z,QItemSection:Ae.Z,QItemLabel:Be.Z})},39161:(e,t,a)=>{e.exports=a.p+"img/ex.84c3a38b.png"},4749:(e,t,a)=>{e.exports=a.p+"img/freezeolf.86909962.png"},84422:(e,t,a)=>{e.exports=a.p+"img/hands.17dfd6cb.png"},26244:(e,t,a)=>{e.exports=a.p+"img/hold.de5ee240.png"},88140:(e,t,a)=>{e.exports=a.p+"img/ido.9f4a123a.png"},80269:(e,t,a)=>{e.exports=a.p+"img/main.276a4631.webp"},12154:(e,t,a)=>{e.exports=a.p+"img/news.855533c8.png"},48284:(e,t,a)=>{e.exports=a.p+"img/ou.a3dea0e4.jpeg"},85157:(e,t,a)=>{e.exports=a.p+"img/p2p.21f4ecfa.png"},36918:(e,t,a)=>{e.exports=a.p+"img/scan.7a7708c6.png"},27899:(e,t,a)=>{e.exports=a.p+"img/vip.c7ba0dc5.png"}}]);