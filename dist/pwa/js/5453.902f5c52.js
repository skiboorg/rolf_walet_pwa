"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[5453],{45453:(e,a,l)=>{l.r(a),l.d(a,{default:()=>V});var t=l(59835),u=l(86970),n=l(60499),s=l(91569),i=l(18910),r=l(46190),d=l(31655),o=l(99407),p=l(98030),c=l(87270),w=l(23459),v=l(17779);const m=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),g={class:"q-pa-md"},_=(0,t._)("br",null,null,-1),y=(0,t._)("br",null,null,-1),k=(0,t._)("span",{class:"text-bold"},"ВНИМАНИЕ",-1),b=(0,t.Uk)(" откуп будет происходить согласно росту ликвидного курса монеты."),f=(0,t._)("br",null,null,-1),q=(0,t._)("br",null,null,-1),U=(0,t.Uk)(),h=(0,t._)("span",{class:"text-bold text-negative"}," Отправленные монеты на откуп, будут выкуплены за рубли и вернуть монеты уже не получится.",-1),F={class:"text-bold"},W={key:1},x={key:0,class:""},S={key:1,class:"text-bold text-center text-negative"},I={key:2,class:"text-bold text-center text-positive"},z={key:3,class:"no-margin text-bold"},D=(0,t.Uk)("Дата"),$=(0,t.Uk)("Остаток"),L=(0,t.Uk)("Выкуплено"),H={__name:"Shance",setup(e){const a=(0,w.Q)(),l=(0,d.T)(),H=(0,i.yj)(),Q=(0,n.iH)(0),Z=(0,n.iH)([]),j=(0,r.c)(),R=(0,n.iH)(!1),B=(0,i.tv)(),C=(0,n.iH)({amount:null,address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:`Выкуп по ${H.query.ip}`,message:"",encrypted:!1,fee:0,raw:0}),O=(0,t.Fl)((()=>j.addresses[j.currentAddressIdx].address)),T=(0,t.Fl)((()=>j.balances)),K=(0,t.Fl)((()=>l.user)),V=(0,t.Fl)((()=>a.unconfirmedTx)),A=(0,n.iH)([]);async function P(){R.value=!R.value;const e=!0,l=await a.getKeyPair(),t=new o.EraChain.Type.KeyPair(l),u={assetKey:2,amount:Q.value};v.log(t),v.log(u);const n=await p.era.tranRawSendAsset(t,u,C.value.address,C.value.title,"Откуп OLF",C.value.encrypted,e);v.log(n),n.error?(0,c.d$)("negative",n.error.message):(C.value.fee=n.fee,C.value.raw=n.raw,await E()),R.value=!R.value}async function E(){const e=await p.era.broadcast64(C.value.raw);e.error?(0,c.d$)("negative",e.message):((0,c.d$)("info","Транзакция создана"),await N(e.signature))}(0,t.wF)((async()=>{v.log(H.query.i),v.log(H.query.ip),Z.value=K.value.shance_holds.filter((e=>e.price.id===parseInt(H.query.i)));const e=await(0,s.h)("/api/p2p/shances");A.value=e.data}));const N=async e=>{const a=await s.h.post("/api/p2p/new_shance",{wallet:O.value,amount:Q.value,shance_id:H.query.i,tx:e,title:C.value.title});a.data.success?((0,c.d$)("positive",a.data.message),await l.get_user(),B.back()):(0,c.d$)("negative",a.data.message),R.value=!1};return(e,a)=>{const l=(0,t.up)("page-header"),s=(0,t.up)("q-input"),i=(0,t.up)("q-btn"),r=(0,t.up)("q-item-label"),d=(0,t.up)("q-item-section"),o=(0,t.up)("q-item"),p=(0,t.up)("q-list"),c=(0,t.up)("page-body"),w=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>{var c,w;return[(0,t.Wm)(l),m,(0,t._)("div",g,[(0,t._)("p",null,[(0,t.Uk)("Просто выбери количество монет и получи откуп отправленных тобой монет по цене "+(0,u.zw)((0,n.SU)(H).query.ip)+" RUB за каждую монету.",1),_,y,k,b,f,q,U,h]),(0,t._)("p",F,(0,u.zw)(e.$t("your_balance"))+" OLF: "+(0,u.zw)((0,n.SU)(T)[2][0][1]),1),null!==(c=A.value.find((e=>e.price===parseInt((0,n.SU)(H).query.ip))))&&void 0!==c&&c.is_active?((0,t.wg)(),(0,t.j4)(s,{key:0,outlined:"",modelValue:Q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Q.value=e),label:"Сумма OLF",class:"q-mb-md",type:"number"},null,8,["modelValue"])):(0,t.kq)("",!0),null!==(w=A.value.find((e=>e.price===parseInt((0,n.SU)(H).query.ip))))&&void 0!==w&&w.is_active?((0,t.wg)(),(0,t.iD)("div",W,[0===(0,n.SU)(V).length?((0,t.wg)(),(0,t.iD)("div",x,[parseFloat(Q.value)>0?((0,t.wg)(),(0,t.j4)(i,{key:0,dense:"",class:"full-width q-py-md q-mb-lg",onClick:P,loading:R.value,color:"positive","no-caps":"",unelevated:"",disable:parseFloat(Q.value)>parseFloat((0,n.SU)(T)[2][0][1]),label:`${e.$t("send_btn")}`},null,8,["loading","disable","label"])):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("p",S,"Дождитесь завершения транзакций"))])):((0,t.wg)(),(0,t.iD)("p",I,"Начат процесс выплат по "+(0,u.zw)((0,n.SU)(H).query.ip)+" RUB",1)),Z.value.length>0?((0,t.wg)(),(0,t.iD)("p",z,"Текущие выкупы")):(0,t.kq)("",!0),Z.value.length>0?((0,t.wg)(),(0,t.j4)(p,{key:4,dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[D])),_:1})])),_:1}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[$])),_:1})])),_:1}),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[L])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Z.value,(e=>((0,t.wg)(),(0,t.j4)(o,{dense:"",key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount))+" OLF",1)])),_:2},1024),(0,t.Wm)(r,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount)*parseInt((0,n.SU)(H).query.ip))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok))+" OLF",1)])),_:2},1024),(0,t.Wm)(r,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok)*parseInt((0,n.SU)(H).query.ip))+" RUB",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,t.kq)("",!0)])]})),_:1})])),_:1})}}};var Q=l(13119),Z=l(24455),j=l(13246),R=l(490),B=l(76749),C=l(33115),O=l(69984),T=l.n(O);const K=H,V=K;T()(H,"components",{QInput:Q.Z,QBtn:Z.Z,QList:j.Z,QItem:R.Z,QItemSection:B.Z,QItemLabel:C.Z})}}]);