"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[5453],{45453:(e,a,l)=>{l.r(a),l.d(a,{default:()=>K});var t=l(59835),u=l(86970),n=l(60499),s=l(91569),d=l(18910),r=l(46190),i=l(31655),o=l(99407),p=l(98030),w=l(87270),c=l(23459),m=l(17779);const _=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),v={class:"q-pa-md"},g=(0,t._)("br",null,null,-1),y=(0,t._)("br",null,null,-1),b=(0,t._)("span",{class:"text-bold"},"ВНИМАНИЕ",-1),f=(0,t.Uk)(" откуп будет происходить согласно росту ликвидного курса монеты."),k=(0,t._)("br",null,null,-1),q=(0,t._)("br",null,null,-1),h=(0,t.Uk)(),U=(0,t._)("span",{class:"text-bold text-negative"}," Отправленные монеты на откуп, будут выкуплены за рубли и вернуть монеты уже не получится.",-1),W={class:"text-bold"},F={key:1,class:"no-margin text-bold"},S=(0,t.Uk)("Дата"),$=(0,t.Uk)("Остаток"),x=(0,t.Uk)("Выкуплено"),z={__name:"Shance",setup(e){const a=(0,c.Q)(),l=(0,i.T)(),z=(0,d.yj)(),I=(0,n.iH)(0),L=(0,n.iH)([]),Q=(0,r.c)(),Z=(0,n.iH)(!1),H=(0,d.tv)(),j=(0,n.iH)({amount:null,address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:`Выкуп по ${z.query.ip}`,message:"",encrypted:!1,fee:0,raw:0}),C=(0,t.Fl)((()=>Q.addresses[Q.currentAddressIdx].address)),D=(0,t.Fl)((()=>Q.balances)),O=(0,t.Fl)((()=>l.user));async function K(){Z.value=!Z.value;const e=!0,l=await a.getKeyPair(),t=new o.EraChain.Type.KeyPair(l),u={assetKey:2,amount:I.value};m.log(t),m.log(u);const n=await p.era.tranRawSendAsset(t,u,j.value.address,j.value.title,"Откуп OLF",j.value.encrypted,e);m.log(n),n.error?(0,w.d$)("negative",n.error.message):(j.value.fee=n.fee,j.value.raw=n.raw,await R()),Z.value=!Z.value}async function R(){const e=await p.era.broadcast64(j.value.raw);e.error?(0,w.d$)("negative",e.message):((0,w.d$)("info","Транзакция создана"),await T(e.signature))}(0,t.wF)((async()=>{m.log(z.query.i),m.log(z.query.ip),L.value=O.value.shance_holds.filter((e=>e.price.id===parseInt(z.query.i)))}));const T=async e=>{const a=await s.h.post("/api/p2p/new_shance",{wallet:C.value,amount:I.value,shance_id:z.query.i,tx:e,title:j.value.title});a.data.success?((0,w.d$)("positive",a.data.message),await l.get_user(),H.back()):(0,w.d$)("negative",a.data.message),Z.value=!1};return(e,a)=>{const l=(0,t.up)("page-header"),s=(0,t.up)("q-input"),d=(0,t.up)("q-btn"),r=(0,t.up)("q-item-label"),i=(0,t.up)("q-item-section"),o=(0,t.up)("q-item"),p=(0,t.up)("q-list"),w=(0,t.up)("page-body"),c=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),_,(0,t._)("div",v,[(0,t._)("p",null,[(0,t.Uk)("Просто выбери количество монет и получи откуп отправленных тобой монет по цене "+(0,u.zw)((0,n.SU)(z).query.ip)+" за каждую монету.",1),g,y,b,f,k,q,h,U]),(0,t._)("p",W,(0,u.zw)(e.$t("your_balance"))+" OLF: "+(0,u.zw)((0,n.SU)(D)[2][0][1]),1),(0,t.Wm)(s,{outlined:"",modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]=e=>I.value=e),label:"Сумма OLF",class:"q-mb-md",type:"number"},null,8,["modelValue"]),parseFloat(I.value)>0?((0,t.wg)(),(0,t.j4)(d,{key:0,dense:"",class:"full-width q-py-md q-mb-lg",onClick:K,loading:Z.value,color:"positive","no-caps":"",unelevated:"",disable:parseFloat(I.value)>parseFloat((0,n.SU)(D)[2][0][1]),label:`${e.$t("send_btn")}`},null,8,["loading","disable","label"])):(0,t.kq)("",!0),L.value.length>0?((0,t.wg)(),(0,t.iD)("p",F,"Текущие выкупы")):(0,t.kq)("",!0),L.value.length>0?((0,t.wg)(),(0,t.j4)(p,{key:2,dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[S])),_:1})])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[$])),_:1})])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[x])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(L.value,(e=>((0,t.wg)(),(0,t.j4)(o,{dense:"",key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount))+" OLF",1)])),_:2},1024),(0,t.Wm)(r,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount)*parseInt((0,n.SU)(z).query.ip))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok))+" OLF",1)])),_:2},1024),(0,t.Wm)(r,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok)*parseInt((0,n.SU)(z).query.ip))+" RUB",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,t.kq)("",!0)])])),_:1})])),_:1})}}};var I=l(13119),L=l(24455),Q=l(13246),Z=l(490),H=l(76749),j=l(33115),C=l(69984),D=l.n(C);const O=z,K=O;D()(z,"components",{QInput:I.Z,QBtn:L.Z,QList:Q.Z,QItem:Z.Z,QItemSection:H.Z,QItemLabel:j.Z})}}]);