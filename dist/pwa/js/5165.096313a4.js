(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[5165],{55165:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>ea});t(40702);var l=t(59835),n=t(60499),s=t(86970),i=t(85157),o=t.n(i),c=t(39161),r=t.n(c),u=t(26244),p=t.n(u),d=t(12154),m=t.n(d),g=t(4749),_=t.n(g),w=t(36918),x=t.n(w),h=t(80269),b=t.n(h),f=t(27899),v=t.n(f),y=t(88140),k=t.n(y),$=t(12516),W=t.n($),q=t(48284),z=t.n(q),C=t(90287),U=t.n(C),H=t(46190),S=t(31655),Z=t(39981),T=t.n(Z),Q=t(91569),F=t(18910),L=t(17322),V=t(17779);const D=e=>((0,l.dD)("data-v-0fb92ba8"),e=e(),(0,l.Cn)(),e),j={class:"page-body--top text-white flex column items-center justify-around"},M=["src"],I={class:""},P={style:{"line-height":"110%"},class:"text-caption text-bold no-margin text-dark"},B={class:"flex items-center text-center q-mb-md"},A={class:"top-buttons"},O=["innerHTML"],K=["innerHTML"],Y={class:"text-center",style:{opacity:".5"}},J=["innerHTML"],R={class:"text-center",style:{opacity:".5"}},E=["innerHTML"],G={class:"page-body--top"},N=["src"],X={class:"functions-grid"},ee=D((()=>(0,l._)("img",{src:o(),alt:""},null,-1))),ae=D((()=>(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"P2P",-1))),te=[ee,ae],le=D((()=>(0,l._)("img",{src:r(),alt:""},null,-1))),ne={class:"text-caption text-center no-margin lh100"},se=D((()=>(0,l._)("img",{src:p(),alt:""},null,-1))),ie={class:"text-caption text-center no-margin lh100"},oe={class:"functions-grid-item"},ce={style:{color:"inherit","text-decoration":"none"},href:"https://t.me/rupayPRO",target:"_blank"},re=D((()=>(0,l._)("img",{src:m(),alt:""},null,-1))),ue={class:"text-caption text-center no-margin lh100"},pe=D((()=>(0,l._)("img",{src:_(),alt:""},null,-1))),de=D((()=>(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"Откуп OLF",-1))),me=[pe,de],ge=D((()=>(0,l._)("img",{src:x(),alt:""},null,-1))),_e={class:"text-caption text-center no-margin lh100"},we=D((()=>(0,l._)("img",{src:b(),alt:""},null,-1))),xe=D((()=>(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"OLF шанс",-1))),he=[we,xe],be=D((()=>(0,l._)("img",{src:v(),alt:""},null,-1))),fe={class:"text-caption text-center no-margin lh100"},ve=D((()=>(0,l._)("img",{src:k(),alt:""},null,-1))),ye={class:"text-caption text-center no-margin lh100"},ke=D((()=>(0,l._)("img",{src:W(),alt:""},null,-1))),$e={class:"text-caption text-center no-margin lh100"},We={class:"functions-grid-item"},qe={style:{color:"inherit","text-decoration":"none"},href:"https://oneunion.ru",target:"_blank"},ze=D((()=>(0,l._)("img",{src:z(),alt:""},null,-1))),Ce={class:"text-caption text-center no-margin lh100"},Ue={class:"functions-grid-item"},He={style:{color:"inherit","text-decoration":"none"},href:"https://x-car.ru",target:"_blank"},Se=D((()=>(0,l._)("img",{src:U(),alt:""},null,-1))),Ze={class:"text-caption text-center no-margin lh100"},Te={class:"text-bold"},Qe=(0,l.aZ)({components:{Vue3Marquee:L.J}}),Fe=Object.assign(Qe,{__name:"Index",setup(e){const a=(0,H.c)(),t=(0,S.T)(),i="https://scan.rupay.pro",o=(0,n.iH)("tokens"),c=((0,n.iH)(void 0),["bitcoin","bnb","tether","litecoin"]),r=(0,n.iH)([]),u=(0,n.iH)([]),p=(0,n.iH)(0),d=(0,F.tv)(),m=(0,l.Fl)((()=>t.user)),g=((0,l.Fl)((()=>a.verifyPersonData)),(0,l.Fl)((()=>a.addresses[a.currentAddressIdx].address)),(0,l.Fl)((()=>a.assets))),_=(0,l.Fl)((()=>a.balances));const w=(0,l.Fl)((()=>{let e=0;if(g.value.length>0)for(let t of g.value)try{e+=_.value[t.key][0][1]*t.course}catch(a){V.log("balance error",a)}return e})),x=e=>{const a=e.data.histPrices["24H"],t=e.data.price.USD-a.USD,l=t/a.USD*100;return+l.toFixed(3)},h=async e=>{const a=await T().get(`https://api.cryptorank.io/v0/coins/${e}`);V.log(a.data),r.value.push({change:x(a.data),name:a.data.data.name,image:a.data.data.image.x60,priceUSD:a.data.data.price.USD}),V.log(r)};(0,l.wF)((async()=>{const e=await Q.h.get("/api/settings/banner?rupay=1");V.log(e.data),u.value=e.data,c.forEach((async e=>{await h(e)}))}));const b=e=>{V.log(e),u.value[e].inner_url?d.push(u.value[e].inner_url):window.location.href=u.value[e].outer_url};return(e,a)=>{const t=(0,l.up)("page-header"),c=(0,l.up)("q-btn"),d=(0,l.up)("q-icon"),x=(0,l.up)("q-avatar"),h=(0,l.up)("q-tab-panel"),f=(0,l.up)("q-carousel-slide"),v=(0,l.up)("q-carousel"),y=(0,l.up)("q-tab-panels"),k=(0,l.up)("q-tab"),$=(0,l.up)("q-tabs"),W=(0,l.up)("q-item-section"),q=(0,l.up)("q-item-label"),z=(0,l.up)("q-item"),C=(0,l.up)("q-list"),U=(0,l.up)("q-scroll-area"),H=(0,l.up)("page-body"),S=(0,l.up)("page");return(0,n.SU)(m).is_wallet_blocked?((0,l.wg)(),(0,l.j4)(S,{key:1,class:"fullscreen flex column items-center justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{size:"60px",color:"red",name:"cancel",class:"q-mb-lg"}),(0,l._)("p",Te,(0,s.zw)(e.$t("access_d")),1)])),_:1})):((0,l.wg)(),(0,l.j4)(S,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(t),(0,l.Wm)(y,{modelValue:o.value,"onUpdate:modelValue":a[4]||(a[4]=e=>o.value=e),animated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"tokens",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l._)("div",j,[(0,l.Wm)((0,n.SU)(L.J),{clone:!0,duration:8},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.value,((e,a)=>((0,l.wg)(),(0,l.iD)("div",{class:"coin",key:a},[(0,l._)("img",{src:e.image,alt:""},null,8,M),(0,l._)("div",I,[(0,l._)("p",P,(0,s.zw)(e.name)+" $"+(0,s.zw)(parseFloat(e.priceUSD).toFixed(2)),1),(0,l._)("p",{style:{"line-height":"110%"},class:(0,s.C_)(["text-caption no-margin",parseFloat(e.change)>0?"text-positive":"text-negative"])},(0,s.zw)(e.change)+"%",3)])])))),128))])),_:1}),(0,l._)("div",B,[(0,l._)("p",{class:(0,s.C_)(["q-mb-none q-mr-md text-h5 text-bold text-gold-gradient",{blur:e.$global.isBlur}])},"~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(w)))+" ₽",3),(0,l.Wm)(c,{icon:e.$global.isBlur?"las la-low-vision":"las la-eye","text-color":"gold",flat:"",dense:"",round:"",onClick:a[0]||(a[0]=a=>e.$global.toggleIsBlur())},null,8,["icon"])]),(0,l._)("div",A,[(0,l._)("div",{class:"text-center",onClick:a[1]||(a[1]=a=>e.$router.push({name:"wallet_own_assets"}))},[(0,l.Wm)(x,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{size:"22px",name:"las la-upload"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("send_in_rupay")},null,8,O)]),(0,l._)("div",{class:"text-center",onClick:a[2]||(a[2]=a=>e.$router.push({name:"wallet_select"}))},[(0,l.Wm)(x,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{size:"22px",name:"las la-download"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("receive_in_rupay")},null,8,K)]),(0,l._)("div",Y,[(0,l.Wm)(x,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{size:"22px",name:"las la-tag"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("receive_in")},null,8,J)]),(0,l._)("div",R,[(0,l.Wm)(x,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{size:"22px",name:"las la-wallet"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("withdrawal")},null,8,E)])])])])),_:1}),(0,l.Wm)(h,{name:"functions",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l._)("div",G,[(0,l.Wm)(v,{swipeable:"",animated:"",arrows:"",modelValue:p.value,"onUpdate:modelValue":a[3]||(a[3]=e=>p.value=e),style:{height:"100%",background:"#000"},infinite:""},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.value,((e,a)=>((0,l.wg)(),(0,l.j4)(f,{onClick:e=>b(a),name:a,"img-src":e.image,key:e.id},null,8,["onClick","name","img-src"])))),128))])),_:1},8,["modelValue"])])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)($,{modelValue:o.value,"onUpdate:modelValue":a[5]||(a[5]=e=>o.value=e),class:"index-tabs text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{ripple:!1,"no-caps":"",class:"bg-white",name:"tokens",label:e.$t("assets")},null,8,["label"]),(0,l.Wm)(k,{ripple:!1,"no-caps":"",class:"bg-white",name:"functions",label:e.$t("applications")},null,8,["label"])])),_:1},8,["modelValue"]),(0,l.Wm)(y,{modelValue:o.value,"onUpdate:modelValue":a[15]||(a[15]=e=>o.value=e),animated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{name:"tokens",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{height:"calc(100vh - 40vh - 50px)"}},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{class:"q-pa-md"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(g),((a,t)=>((0,l.wg)(),(0,l.j4)(z,{onClick:a=>e.$router.push({name:"wallet_asset",params:{asset_key:t}}),clickable:"",class:"asset-item",key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{rounded:""},{default:(0,l.w5)((()=>[(0,l._)("img",{src:(0,n.SU)(i)+a.iconURL},null,8,N)])),_:2},1024)])),_:2},1024),(0,l.Wm)(W,{class:"text-weight-medium"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.name),1)])),_:2},1024),(0,l.Wm)(q,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(a.course)+" ₽",1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(W,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,{class:(0,s.C_)(["text-weight-medium",{blur:e.$global.isBlur}])},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)((0,n.SU)(_)[a.key][0][1]),1)])),_:2},1032,["class"]),a.course?((0,l.wg)(),(0,l.j4)(q,{key:0,caption:"",class:(0,s.C_)({blur:e.$global.isBlur})},{default:(0,l.w5)((()=>[(0,l.Uk)("~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(_)[a.key][0][1]*a.course))+" ₽",1)])),_:2},1032,["class"])):(0,l.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,l.Wm)(h,{name:"functions"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{height:"50vh"}},{default:(0,l.w5)((()=>[(0,l._)("div",X,[(0,l._)("div",{class:"functions-grid-item",onClick:a[6]||(a[6]=a=>e.$router.push({name:"p2p_index"}))},te),(0,l._)("div",{class:"functions-grid-item",onClick:a[7]||(a[7]=a=>e.$router.push({name:"wallet_exchange"}))},[le,(0,l._)("p",ne,(0,s.zw)(e.$t("market")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:a[8]||(a[8]=a=>e.$router.push({name:"asset_hold"}))},[se,(0,l._)("p",ie,(0,s.zw)(e.$t("asset_hold")),1)]),(0,l._)("div",oe,[(0,l._)("a",ce,[re,(0,l._)("p",ue,(0,s.zw)(e.$t("news")),1)])]),(0,l._)("div",{class:"functions-grid-item",onClick:a[9]||(a[9]=a=>e.$router.push({name:"freeze_olf"}))},me),(0,l._)("div",{class:"functions-grid-item",onClick:a[10]||(a[10]=a=>e.$router.push({name:"scan_index"}))},[ge,(0,l._)("p",_e,(0,s.zw)(e.$t("app_scan")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:a[11]||(a[11]=a=>e.$router.push({name:"olf_shance"}))},he),(0,l._)("div",{class:"functions-grid-item",onClick:a[12]||(a[12]=a=>e.$router.push({name:"vip_club"}))},[be,(0,l._)("p",fe,(0,s.zw)(e.$t("app_vip")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:a[13]||(a[13]=a=>e.$router.push({name:"ido"}))},[ve,(0,l._)("p",ye,(0,s.zw)(e.$t("app_ido")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:a[14]||(a[14]=a=>e.$router.push({name:"documents"}))},[ke,(0,l._)("p",$e,(0,s.zw)(e.$t("app_docs")),1)]),(0,l._)("div",We,[(0,l._)("a",qe,[ze,(0,l._)("p",Ce,(0,s.zw)(e.$t("app_union")),1)])]),(0,l._)("div",Ue,[(0,l._)("a",He,[Se,(0,l._)("p",Ze,(0,s.zw)(e.$t("app_xcar")),1)])])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}))}}});var Le=t(11639),Ve=t(89800),De=t(84106),je=t(24455),Me=t(61357),Ie=t(22857),Pe=t(60960),Be=t(41694),Ae=t(47817),Oe=t(70900),Ke=t(66663),Ye=t(13246),Je=t(490),Re=t(76749),Ee=t(33115),Ge=t(69984),Ne=t.n(Ge);const Xe=(0,Le.Z)(Fe,[["__scopeId","data-v-0fb92ba8"]]),ea=Xe;Ne()(Fe,"components",{QTabPanels:Ve.Z,QTabPanel:De.Z,QBtn:je.Z,QAvatar:Me.Z,QIcon:Ie.Z,QCarousel:Pe.Z,QCarouselSlide:Be.Z,QTabs:Ae.Z,QTab:Oe.Z,QScrollArea:Ke.Z,QList:Ye.Z,QItem:Je.Z,QItemSection:Re.Z,QItemLabel:Ee.Z})},12516:(e,a,t)=>{e.exports=t.p+"img/docs.793ac779.png"},39161:(e,a,t)=>{e.exports=t.p+"img/ex.84c3a38b.png"},4749:(e,a,t)=>{e.exports=t.p+"img/freezeolf.86909962.png"},26244:(e,a,t)=>{e.exports=t.p+"img/hold.de5ee240.png"},88140:(e,a,t)=>{e.exports=t.p+"img/ido.9f4a123a.png"},80269:(e,a,t)=>{e.exports=t.p+"img/main.276a4631.webp"},12154:(e,a,t)=>{e.exports=t.p+"img/news.855533c8.png"},48284:(e,a,t)=>{e.exports=t.p+"img/ou.a3dea0e4.jpeg"},85157:(e,a,t)=>{e.exports=t.p+"img/p2p.21f4ecfa.png"},36918:(e,a,t)=>{e.exports=t.p+"img/scan.7a7708c6.png"},27899:(e,a,t)=>{e.exports=t.p+"img/vip.c7ba0dc5.png"},90287:(e,a,t)=>{e.exports=t.p+"img/xcar.1d7b0479.jpg"}}]);