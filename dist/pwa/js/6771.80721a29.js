"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[6771],{86771:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Z});var t=l(59835),u=l(86970),s=l(60499),n=l(91569),d=l(18910),o=l(46190),r=l(31655),i=l(99407),p=l(98030),w=l(87270),c=l(23459),m=l(17779);const _=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),f={class:"q-pa-md"},v={class:"text-bold"},g={class:"text-bold"},k={class:"text-bold"},y={key:1,class:"no-margin text-bold"},b=(0,t.Uk)("Дата"),U=(0,t.Uk)("Цена"),W=(0,t.Uk)("Остаток"),h=(0,t.Uk)("Выкуплено"),q={__name:"OlfExclusive",setup(e){const a=(0,c.Q)(),l=(0,r.T)(),q=(0,d.yj)(),F=(0,s.iH)(0),x=((0,s.iH)([]),(0,o.c)()),z=(0,s.iH)(!1),S=(0,s.iH)({amount:null,address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:`Выкуп по ${q.query.ip}`,message:"",encrypted:!1,fee:0,raw:0}),$=(0,t.Fl)((()=>x.addresses[x.currentAddressIdx].address)),I=(0,t.Fl)((()=>x.balances)),L=(0,t.Fl)((()=>l.user)),Q=(0,t.Fl)((()=>x.assets));async function R(){z.value=!z.value;const e=!0,l=await a.getKeyPair(),t=new i.EraChain.Type.KeyPair(l),u={assetKey:2,amount:F.value};m.log(t),m.log(u);const s=await p.era.tranRawSendAsset(t,u,S.value.address,S.value.title,"Откуп OLF",S.value.encrypted,e);m.log(s),s.error?(0,w.d$)("negative",s.error.message):(S.value.fee=s.fee,S.value.raw=s.raw,await Z()),z.value=!z.value}async function Z(){const e=await p.era.broadcast64(S.value.raw);e.error?(0,w.d$)("negative",e.message):((0,w.d$)("info","Транзакция создана"),await B())}const B=async()=>{const e=await n.h.post("/api/p2p/new_olf_ex",{wallet:$.value,amount:F.value,price:10*Q.value.find((e=>"1-2"==e.tx_seqNo)).course});e.data.success?((0,w.d$)("positive",e.data.message),F.value=null,await l.get_user()):(0,w.d$)("negative",e.data.message)};return(e,a)=>{const l=(0,t.up)("page-header"),n=(0,t.up)("q-input"),d=(0,t.up)("q-btn"),o=(0,t.up)("q-item-label"),r=(0,t.up)("q-item-section"),i=(0,t.up)("q-item"),p=(0,t.up)("q-list"),w=(0,t.up)("page-body"),c=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),_,(0,t._)("div",f,[(0,t._)("p",v,(0,u.zw)(e.$t("your_balance"))+" OLF: "+(0,u.zw)((0,s.SU)(I)[2][0][1]),1),(0,t._)("p",g,"Текущий курс: "+(0,u.zw)((0,s.SU)(Q).find((e=>"1-2"==e.tx_seqNo)).course)+" RUB",1),(0,t._)("p",k,"Выкуп по: "+(0,u.zw)(10*(0,s.SU)(Q).find((e=>"1-2"==e.tx_seqNo)).course)+" RUB",1),(0,t.Wm)(n,{outlined:"",modelValue:F.value,"onUpdate:modelValue":a[0]||(a[0]=e=>F.value=e),label:"Сумма OLF",class:"q-mb-md",type:"number"},null,8,["modelValue"]),parseFloat(F.value)>0?((0,t.wg)(),(0,t.j4)(d,{key:0,dense:"",class:"full-width q-py-md q-mb-lg",onClick:R,loading:z.value,color:"positive","no-caps":"",unelevated:"",disable:parseFloat(F.value)>parseFloat((0,s.SU)(I)[2][0][1]),label:`${e.$t("send_btn")}`},null,8,["loading","disable","label"])):(0,t.kq)("",!0),(0,s.SU)(L).exclusive_holds.length>0?((0,t.wg)(),(0,t.iD)("p",y,"Текущие выкупы")):(0,t.kq)("",!0),(0,s.SU)(L).exclusive_holds.length>0?((0,t.wg)(),(0,t.j4)(p,{key:2,dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[b])),_:1})])),_:1}),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[U])),_:1})])),_:1}),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[W])),_:1})])),_:1}),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[h])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,s.SU)(L).exclusive_holds,(e=>((0,t.wg)(),(0,t.j4)(i,{dense:"",key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount))+" OLF",1)])),_:2},1024),(0,t.Wm)(o,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount)*parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok))+" OLF",1)])),_:2},1024),(0,t.Wm)(o,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok)*parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,t.kq)("",!0)])])),_:1})])),_:1})}}};var F=l(13119),x=l(24455),z=l(13246),S=l(490),$=l(76749),I=l(33115),L=l(69984),Q=l.n(L);const R=q,Z=R;Q()(q,"components",{QInput:F.Z,QBtn:x.Z,QList:z.Z,QItem:S.Z,QItemSection:$.Z,QItemLabel:I.Z})}}]);