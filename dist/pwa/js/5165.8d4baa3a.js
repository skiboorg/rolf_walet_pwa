(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[5165],{55165:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Je});a(40702);var l=a(59835),n=a(60499),s=a(86970),o=a(85157),i=a.n(o),r=a(39161),c=a.n(r),u=a(35281),d=a.n(u),p=a(4749),m=a.n(p),_=a(72859),g=a.n(_),w=a(12154),b=a.n(w),x=a(36918),f=a.n(x),h=a(26244),v=a.n(h),k=a(48284),y=a.n(k),W=a(46190),q=a(31655),$=a(39981),C=a.n($),z=a(91569),F=a(18910),U=a(43463),H=a(17322),S=a(17779);const Q=e=>((0,l.dD)("data-v-12b7dc52"),e=e(),(0,l.Cn)(),e),Z={class:"page-body--top text-white flex column items-center justify-around"},L=["src"],V={class:""},T={style:{"line-height":"110%"},class:"text-caption text-bold no-margin text-dark"},D={class:"flex items-center text-center q-mb-md"},j={class:"top-buttons"},I=["innerHTML"],M=["innerHTML"],B=["innerHTML"],P=["innerHTML"],A={class:"page-body--top"},O={class:"text-white stat-ban relative-position"},E=Q((()=>(0,l._)("p",{class:"text-center text-bold text-vw-3"},"Статистика создания дефицита",-1))),K=Q((()=>(0,l._)("p",{class:"text-bold q-pa-sm q-mb-mdtext-vw-2"},"Выведено из оборота:",-1))),Y={class:"stat-bg q-pa-sm"},J={class:"text-bold q-mb-none text-vw-2"},N={class:"text-bold q-mb-none text-vw-2"},R={class:"text-bold q-mb-none text-vw-2"},X={class:"text-bold q-mb-none absolute-bottom q-pa-md text-vw-1"},G=(0,l.Uk)("Объем выведенных из оборота монет/всего монет"),ee=Q((()=>(0,l._)("br",null,null,-1))),te=Q((()=>(0,l._)("br",null,null,-1))),ae=["src"],le={class:"functions-grid"},ne=Q((()=>(0,l._)("img",{src:i(),alt:""},null,-1))),se=Q((()=>(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"P2P",-1))),oe=[ne,se],ie=Q((()=>(0,l._)("img",{src:c(),alt:""},null,-1))),re={class:"text-caption text-center no-margin lh100"},ce=Q((()=>(0,l._)("img",{src:d(),alt:""},null,-1))),ue={class:"text-caption text-center no-margin lh100"},de=Q((()=>(0,l._)("img",{src:m(),alt:""},null,-1))),pe=Q((()=>(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"Откуп OLF",-1))),me=[de,pe],_e=Q((()=>(0,l._)("div",{class:"functions-grid-item"},[(0,l._)("a",{style:{color:"inherit","text-decoration":"none"},href:"https://t.me/VmesteVygodneeBot?start=action-EQ-SFNU-AND-f-EQ-ec743006-843f-457e-92b5-50d31787",target:"_blank"},[(0,l._)("img",{src:g(),alt:""}),(0,l._)("p",{class:"text-caption text-center no-margin lh100"},"Бизнес клуб «Вместе выгодней»")])],-1))),ge={class:"functions-grid-item"},we={style:{color:"inherit","text-decoration":"none"},href:"https://t.me/rupayPRO",target:"_blank"},be=Q((()=>(0,l._)("img",{src:b(),alt:""},null,-1))),xe={class:"text-caption text-center no-margin lh100"},fe=Q((()=>(0,l._)("img",{src:f(),alt:""},null,-1))),he={class:"text-caption text-center no-margin lh100"},ve=Q((()=>(0,l._)("img",{src:v(),alt:""},null,-1))),ke={class:"text-caption text-center no-margin lh100"},ye={class:"functions-grid-item"},We={style:{color:"inherit","text-decoration":"none"},href:"https://oneunion.ru",target:"_blank"},qe=Q((()=>(0,l._)("img",{src:y(),alt:""},null,-1))),$e={class:"text-caption text-center no-margin lh100"},Ce={class:"text-bold"},ze=(0,l.aZ)({components:{Vue3Marquee:H.J}}),Fe=Object.assign(ze,{__name:"Index",setup(e){const t=(0,W.c)(),a=((0,U.s)(),(0,q.T)()),o="https://scan.rupay.pro",i=(0,n.iH)("tokens"),r=((0,n.iH)(void 0),["bitcoin","bnb","tether","litecoin"]),c=(0,n.iH)([]),u=(0,n.iH)([]),d=(0,n.iH)({}),p=(0,n.iH)(0),m=(0,F.tv)(),_=(0,l.Fl)((()=>a.user)),g=((0,l.Fl)((()=>t.verifyPersonData)),(0,l.Fl)((()=>t.addresses[t.currentAddressIdx].address)),(0,l.Fl)((()=>t.assets))),w=(0,l.Fl)((()=>t.balances));const b=(0,l.Fl)((()=>{let e=0;if(g.value.length>0)for(let a of g.value)try{e+=w.value[a.key][0][1]*a.course}catch(t){S.log("balance error",t)}return e})),x=e=>{const t=e.data.histPrices["24H"],a=e.data.price.USD-t.USD,l=a/t.USD*100;return+l.toFixed(3)},f=async e=>{const t=await C().get(`https://api.cryptorank.io/v0/coins/${e}`);S.log(t.data),c.value.push({change:x(t.data),name:t.data.data.name,image:t.data.data.image.x60,priceUSD:t.data.data.price.USD}),S.log(c)};(0,l.wF)((async()=>{const e=await z.h.get("/api/settings/banner?rupay=1");S.log(e.data),u.value=e.data,r.forEach((async e=>{await f(e)}));const t=await z.h.get("/api/settings/data");d.value=t.data}));const h=e=>{S.log(e),u.value[e].inner_url?m.push(u.value[e].inner_url):window.location.href=u.value[e].outer_url};return(e,t)=>{const a=(0,l.up)("page-header"),r=(0,l.up)("q-btn"),m=(0,l.up)("q-icon"),x=(0,l.up)("q-avatar"),f=(0,l.up)("q-tab-panel"),v=(0,l.up)("q-carousel-slide"),k=(0,l.up)("q-carousel-control"),y=(0,l.up)("q-carousel"),W=(0,l.up)("q-tab-panels"),q=(0,l.up)("q-tab"),$=(0,l.up)("q-tabs"),C=(0,l.up)("q-item-section"),z=(0,l.up)("q-item-label"),F=(0,l.up)("q-item"),U=(0,l.up)("q-list"),S=(0,l.up)("q-scroll-area"),Q=(0,l.up)("page-body"),ne=(0,l.up)("page");return(0,n.SU)(_).is_wallet_blocked?((0,l.wg)(),(0,l.j4)(ne,{key:1,class:"fullscreen flex column items-center justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{size:"60px",color:"red",name:"cancel",class:"q-mb-lg"}),(0,l._)("p",Ce,(0,s.zw)(e.$t("access_d")),1)])),_:1})):((0,l.wg)(),(0,l.j4)(ne,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(a),(0,l.Wm)(W,{modelValue:i.value,"onUpdate:modelValue":t[8]||(t[8]=e=>i.value=e),animated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{name:"tokens",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l._)("div",Z,[(0,l.Wm)((0,n.SU)(H.J),{clone:!0,duration:8},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(c.value,((e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"coin",key:t},[(0,l._)("img",{src:e.image,alt:""},null,8,L),(0,l._)("div",V,[(0,l._)("p",T,(0,s.zw)(e.name)+" $"+(0,s.zw)(parseFloat(e.priceUSD).toFixed(2)),1),(0,l._)("p",{style:{"line-height":"110%"},class:(0,s.C_)(["text-caption no-margin",parseFloat(e.change)>0?"text-positive":"text-negative"])},(0,s.zw)(e.change)+"%",3)])])))),128))])),_:1}),(0,l._)("div",D,[(0,l._)("p",{class:(0,s.C_)(["q-mb-none q-mr-md text-h5 text-bold text-gold-gradient",{blur:e.$global.isBlur}])},"~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(b)))+" ₽",3),(0,l.Wm)(r,{icon:e.$global.isBlur?"las la-low-vision":"las la-eye","text-color":"gold",flat:"",dense:"",round:"",onClick:t[0]||(t[0]=t=>e.$global.toggleIsBlur())},null,8,["icon"])]),(0,l._)("div",j,[(0,l._)("div",{class:"text-center",onClick:t[1]||(t[1]=t=>e.$router.push({name:"wallet_own_assets"}))},[(0,l.Wm)(x,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{size:"22px",name:"las la-upload"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("send_in_rupay")},null,8,I)]),(0,l._)("div",{class:"text-center",onClick:t[2]||(t[2]=t=>e.$router.push({name:"wallet_select"}))},[(0,l.Wm)(x,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{size:"22px",name:"las la-download"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("receive_in_rupay")},null,8,M)]),(0,l._)("div",{class:"text-center",onClick:t[3]||(t[3]=t=>e.$router.push({name:"wallet_assets_for_buy"}))},[(0,l.Wm)(x,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{size:"22px",name:"las la-tag"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("receive_in")},null,8,B)]),(0,l._)("div",{class:"text-center",onClick:t[4]||(t[4]=t=>e.$router.push({name:"withdraw"}))},[(0,l.Wm)(x,{rounded:"",class:"bg-blue-7 q-mb-sm"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{size:"22px",name:"las la-wallet"})])),_:1}),(0,l._)("p",{class:"no-margin text-body2 lh100",innerHTML:e.$t("withdrawal")},null,8,P)])])])])),_:1}),(0,l.Wm)(f,{name:"functions",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l._)("div",A,[(0,l.Wm)(y,{swipeable:"",animated:"",ref:"carousel",modelValue:p.value,"onUpdate:modelValue":t[7]||(t[7]=e=>p.value=e),style:{height:"100%",background:"#000"},infinite:""},{control:(0,l.w5)((()=>[(0,l.Wm)(k,{position:"bottom-right",offset:[5,5],class:"q-gutter-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{push:"",round:"",dense:"",color:"gold","text-color":"black",icon:"arrow_left",onClick:t[5]||(t[5]=t=>e.$refs.carousel.previous())}),(0,l.Wm)(r,{push:"",round:"",dense:"",color:"gold","text-color":"black",icon:"arrow_right",onClick:t[6]||(t[6]=t=>e.$refs.carousel.next())})])),_:1})])),default:(0,l.w5)((()=>[(0,l.Wm)(v,{name:0},{default:(0,l.w5)((()=>[(0,l._)("div",O,[E,K,(0,l._)("div",Y,[(0,l._)("p",J,"OLF ШАНС: "+(0,s.zw)(parseFloat(d.value.total_olf_shan).toFixed(5)),1),(0,l._)("p",N,"OLF EXCLUSIVE: "+(0,s.zw)(parseFloat(d.value.total_olf_ex).toFixed(5)),1),(0,l._)("p",R,"OLF ОТКУП: "+(0,s.zw)(parseFloat(d.value.total_olf_otkup).toFixed(5)),1)]),(0,l._)("p",X,[G,ee,(0,l.Uk)(" ~"+(0,s.zw)(parseFloat(parseFloat(d.value.total_olf_ex)+parseFloat(d.value.total_olf_shan)+parseFloat(d.value.total_olf_otkup)).toFixed(0))+"/3000000 ",1),te,(0,l.Uk)(" Всего пользователей: "+(0,s.zw)(d.value.total_p2p_users),1)])])])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(u.value,((e,t)=>((0,l.wg)(),(0,l.j4)(v,{onClick:e=>h(t),name:t+1,"img-src":e.image,key:e.id},null,8,["onClick","name","img-src"])))),128))])),_:1},8,["modelValue"])])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)($,{modelValue:i.value,"onUpdate:modelValue":t[9]||(t[9]=e=>i.value=e),class:"index-tabs text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,l.w5)((()=>[(0,l.Wm)(q,{ripple:!1,"no-caps":"",class:"bg-white",name:"tokens",label:e.$t("assets")},null,8,["label"]),(0,l.Wm)(q,{ripple:!1,"no-caps":"",class:"bg-white",name:"functions",label:e.$t("applications")},null,8,["label"])])),_:1},8,["modelValue"]),(0,l.Wm)(W,{modelValue:i.value,"onUpdate:modelValue":t[16]||(t[16]=e=>i.value=e),animated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{name:"tokens",class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{style:{height:"calc(100vh - 40vh - 50px)"}},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"q-pa-md"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)((0,n.SU)(g),((t,a)=>((0,l.wg)(),(0,l.j4)(F,{onClick:t=>e.$router.push({name:"wallet_asset",params:{asset_key:a}}),clickable:"",class:"asset-item",key:a},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{rounded:""},{default:(0,l.w5)((()=>[(0,l._)("img",{src:(0,n.SU)(o)+t.iconURL},null,8,ae)])),_:2},1024)])),_:2},1024),(0,l.Wm)(C,{class:"text-weight-medium"},{default:(0,l.w5)((()=>[(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(t.name),1)])),_:2},1024),(0,l.Wm)(z,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(t.course)+" ₽",1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(z,{class:(0,s.C_)(["text-weight-medium",{blur:e.$global.isBlur}])},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)((0,n.SU)(w)[t.key][0][1]),1)])),_:2},1032,["class"]),t.course?((0,l.wg)(),(0,l.j4)(z,{key:0,caption:"",class:(0,s.C_)({blur:e.$global.isBlur})},{default:(0,l.w5)((()=>[(0,l.Uk)("~ "+(0,s.zw)(e.$filters.convertAmount((0,n.SU)(w)[t.key][0][1]*t.course))+" ₽",1)])),_:2},1032,["class"])):(0,l.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,l.Wm)(f,{name:"functions"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{style:{height:"50vh"}},{default:(0,l.w5)((()=>[(0,l._)("div",le,[(0,l._)("div",{class:"functions-grid-item",onClick:t[10]||(t[10]=t=>e.$router.push({name:"p2p_index"}))},oe),(0,l._)("div",{class:"functions-grid-item",onClick:t[11]||(t[11]=t=>e.$router.push({name:"wallet_exchange"}))},[ie,(0,l._)("p",re,(0,s.zw)(e.$t("market")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:t[12]||(t[12]=t=>e.$router.push({name:"vip_club"}))},[ce,(0,l._)("p",ue,(0,s.zw)(e.$t("app_vip")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:t[13]||(t[13]=t=>e.$router.push({name:"freeze_olf"}))},me),_e,(0,l._)("div",ge,[(0,l._)("a",we,[be,(0,l._)("p",xe,(0,s.zw)(e.$t("news")),1)])]),(0,l._)("div",{class:"functions-grid-item",onClick:t[14]||(t[14]=t=>e.$router.push({name:"scan_index"}))},[fe,(0,l._)("p",he,(0,s.zw)(e.$t("app_scan")),1)]),(0,l._)("div",{class:"functions-grid-item",onClick:t[15]||(t[15]=t=>e.$router.push({name:"asset_hold"}))},[ve,(0,l._)("p",ke,(0,s.zw)(e.$t("asset_hold")),1)]),(0,l._)("div",ye,[(0,l._)("a",We,[qe,(0,l._)("p",$e,(0,s.zw)(e.$t("app_union")),1)])])])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}))}}});var Ue=a(11639),He=a(89800),Se=a(84106),Qe=a(24455),Ze=a(61357),Le=a(22857),Ve=a(60960),Te=a(41694),De=a(10033),je=a(47817),Ie=a(70900),Me=a(66663),Be=a(13246),Pe=a(490),Ae=a(76749),Oe=a(33115),Ee=a(69984),Ke=a.n(Ee);const Ye=(0,Ue.Z)(Fe,[["__scopeId","data-v-12b7dc52"]]),Je=Ye;Ke()(Fe,"components",{QTabPanels:He.Z,QTabPanel:Se.Z,QBtn:Qe.Z,QAvatar:Ze.Z,QIcon:Le.Z,QCarousel:Ve.Z,QCarouselSlide:Te.Z,QCarouselControl:De.Z,QTabs:je.Z,QTab:Ie.Z,QScrollArea:Me.Z,QList:Be.Z,QItem:Pe.Z,QItemSection:Ae.Z,QItemLabel:Oe.Z})},72859:(e,t,a)=>{e.exports=a.p+"img/bb.f7a46800.jpeg"},39161:(e,t,a)=>{e.exports=a.p+"img/ex.84c3a38b.png"},4749:(e,t,a)=>{e.exports=a.p+"img/freezeolf.86909962.png"},26244:(e,t,a)=>{e.exports=a.p+"img/hold.de5ee240.png"},12154:(e,t,a)=>{e.exports=a.p+"img/news.855533c8.png"},48284:(e,t,a)=>{e.exports=a.p+"img/ou.a3dea0e4.jpeg"},85157:(e,t,a)=>{e.exports=a.p+"img/p2p.21f4ecfa.png"},36918:(e,t,a)=>{e.exports=a.p+"img/scan.7a7708c6.png"},35281:(e,t,a)=>{e.exports=a.p+"img/vip.f754d637.jpg"}}]);