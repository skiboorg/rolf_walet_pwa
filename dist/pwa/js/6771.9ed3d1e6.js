"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[6771],{86771:(e,a,l)=>{l.r(a),l.d(a,{default:()=>B});var t=l(59835),u=l(86970),s=l(60499),n=l(91569),d=l(18910),o=l(46190),r=l(31655),i=l(99407),p=l(98030),w=l(87270),c=l(23459),m=l(17779);const _=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),f={class:"q-pa-md"},v=(0,t._)("p",null,"Друзья, Вы можете принять участие в создании дефицита нашей монеты! А значит и в росте ее цены! Ведь чем меньше монет на рынке и больше спрос на нее, тем выше ее рыночная цена! Предлагаем Вам уникальную возможность принять участие в ликвидации монет с рынка и увеличению ее ценности!",-1),g={class:"text-bold"},k={class:"text-bold"},y={class:"text-bold"},b={key:1,class:"no-margin text-bold"},U=(0,t.Uk)("Дата"),W=(0,t.Uk)("Цена"),h=(0,t.Uk)("Остаток"),q=(0,t.Uk)("Выкуплено"),F={__name:"OlfExclusive",setup(e){const a=(0,c.Q)(),l=(0,r.T)(),F=(0,d.yj)(),x=(0,s.iH)(0),z=((0,s.iH)([]),(0,o.c)()),S=(0,s.iH)(!1),$=(0,s.iH)({amount:null,address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:`Выкуп по ${F.query.ip}`,message:"",encrypted:!1,fee:0,raw:0}),I=(0,t.Fl)((()=>z.addresses[z.currentAddressIdx].address)),L=(0,t.Fl)((()=>z.balances)),Q=(0,t.Fl)((()=>l.user)),R=(0,t.Fl)((()=>z.assets));async function Z(){S.value=!S.value;const e=!0,l=await a.getKeyPair(),t=new i.EraChain.Type.KeyPair(l),u={assetKey:2,amount:x.value};m.log(t),m.log(u);const s=await p.era.tranRawSendAsset(t,u,$.value.address,$.value.title,"Откуп OLF",$.value.encrypted,e);m.log(s),s.error?(0,w.d$)("negative",s.error.message):($.value.fee=s.fee,$.value.raw=s.raw,await B()),S.value=!S.value}async function B(){const e=await p.era.broadcast64($.value.raw);e.error?(0,w.d$)("negative",e.message):((0,w.d$)("info","Транзакция создана"),await H())}const H=async()=>{const e=await n.h.post("/api/p2p/new_olf_ex",{wallet:I.value,amount:x.value,price:10*R.value.find((e=>"1-2"==e.tx_seqNo)).course});e.data.success?((0,w.d$)("positive",e.data.message),x.value=null,await l.get_user()):(0,w.d$)("negative",e.data.message)};return(e,a)=>{const l=(0,t.up)("page-header"),n=(0,t.up)("q-input"),d=(0,t.up)("q-btn"),o=(0,t.up)("q-item-label"),r=(0,t.up)("q-item-section"),i=(0,t.up)("q-item"),p=(0,t.up)("q-list"),w=(0,t.up)("page-body"),c=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),_,(0,t._)("div",f,[v,(0,t._)("p",g,(0,u.zw)(e.$t("your_balance"))+" OLF: "+(0,u.zw)((0,s.SU)(L)[2][0][1]),1),(0,t._)("p",k,"Текущий курс: "+(0,u.zw)((0,s.SU)(R).find((e=>"1-2"==e.tx_seqNo)).course)+" RUB",1),(0,t._)("p",y,"Выплата при достижении курса "+(0,u.zw)(10*(0,s.SU)(R).find((e=>"1-2"==e.tx_seqNo)).course)+" RUB",1),(0,t.Wm)(n,{outlined:"",modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value=e),label:"Сумма OLF",class:"q-mb-md",type:"number"},null,8,["modelValue"]),parseFloat(x.value)>0?((0,t.wg)(),(0,t.j4)(d,{key:0,dense:"",class:"full-width q-py-md q-mb-lg",onClick:Z,loading:S.value,color:"positive","no-caps":"",unelevated:"",disable:parseFloat(x.value)>parseFloat((0,s.SU)(L)[2][0][1]),label:`${e.$t("send_btn")}`},null,8,["loading","disable","label"])):(0,t.kq)("",!0),(0,s.SU)(Q).exclusive_holds.length>0?((0,t.wg)(),(0,t.iD)("p",b,"Текущие выкупы")):(0,t.kq)("",!0),(0,s.SU)(Q).exclusive_holds.length>0?((0,t.wg)(),(0,t.j4)(p,{key:2,dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[U])),_:1})])),_:1}),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[W])),_:1})])),_:1}),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[h])),_:1})])),_:1}),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[q])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,s.SU)(Q).exclusive_holds,(e=>((0,t.wg)(),(0,t.j4)(i,{dense:"",key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount))+" OLF",1)])),_:2},1024),(0,t.Wm)(o,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount)*parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok))+" OLF",1)])),_:2},1024),(0,t.Wm)(o,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok)*parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,t.kq)("",!0)])])),_:1})])),_:1})}}};var x=l(13119),z=l(24455),S=l(13246),$=l(490),I=l(76749),L=l(33115),Q=l(69984),R=l.n(Q);const Z=F,B=Z;R()(F,"components",{QInput:x.Z,QBtn:z.Z,QList:S.Z,QItem:$.Z,QItemSection:I.Z,QItemLabel:L.Z})}}]);