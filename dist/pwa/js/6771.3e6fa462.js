"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[6771],{86771:(e,a,l)=>{l.r(a),l.d(a,{default:()=>G});var t=l(59835),u=l(60499),s=l(86970),n=l(91569),o=l(18910),d=l(46190),i=l(31655),r=l(99407),p=l(98030),c=l(87270),m=l(23459),w=l(39981),v=l.n(w),_=l(17779);const b=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),f={key:0,class:"q-pa-md"},g=(0,t._)("p",null,"Друзья, Вы можете принять участие в создании дефицита нашей монеты! А значит и в росте ее цены! Ведь чем меньше монет на рынке и больше спрос на нее, тем выше ее рыночная цена! Предлагаем Вам уникальную возможность принять участие в ликвидации монет с рынка и увеличению ее ценности!",-1),y={class:"text-bold"},k={class:"text-bold"},U={class:"text-bold"},W={class:"text-bold"},h={key:0,class:""},F={key:1,class:"text-bold text-center text-negative"},x={key:0},q={class:"text-bold"},S={class:"text-bold"},V={key:0,class:"text-bold"},z={key:1,class:"q-pa-md"},Q=(0,t._)("p",null,"Введите реферальный код пригласителя",-1),Z=(0,t.Uk)("Дата"),D=(0,t.Uk)("Цена"),R=(0,t.Uk)("Остаток"),$=(0,t.Uk)("Выкуплено"),H={__name:"OlfExclusive",setup(e){const a=(0,m.Q)(),l=(0,i.T)(),w=((0,o.yj)(),(0,u.iH)("main")),H=(0,u.iH)(0),L=(0,u.iH)(0),O=75,B=((0,u.iH)([]),(0,d.c)()),C=(0,u.iH)(!1),T=(0,u.iH)(null),I=(0,u.iH)("OLF"),j=(0,o.tv)(),A="https://rupay.pro";async function P(){await(0,c.QO)(Y.value.own_reffer_code,"positive","Код скопирован")}const K=async()=>{C.value=!C.value;const e=await n.h.post("/api/p2p/save_code",{wallet:N.value,used_ref_code:T.value});e.data.success?((0,c.d$)("info",e.data.message),await l.get_user()):(0,c.d$)("negative",e.data.message),C.value=!C.value},E=(0,u.iH)({amount:null,address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:"Выкуп по "+10*O,message:"",encrypted:!1,fee:0,raw:0}),N=(0,t.Fl)((()=>B.addresses[B.currentAddressIdx].address)),X=(0,t.Fl)((()=>a.unconfirmedTx)),J=(0,t.Fl)((()=>B.balances)),Y=(0,t.Fl)((()=>l.user)),G=((0,t.Fl)((()=>B.assets)),(0,t.Fl)((()=>{const e=a.assets.find((e=>2===e.key));return e}))),M=(0,t.Fl)((()=>{if(L.value){let e=parseFloat(parseFloat(G.value.buy_course)+parseFloat(G.value.buy_course*G.value.buy_commission)).toFixed(2);return parseFloat(parseFloat(L.value)/e).toFixed(8)}}));async function ee(){C.value=!C.value;const e=!0,l=await a.getKeyPair(),t=new r.EraChain.Type.KeyPair(l),u={assetKey:2,amount:H.value};_.log(t),_.log(u);const s=await p.era.tranRawSendAsset(t,u,E.value.address,E.value.title,"Откуп OLF",E.value.encrypted,e);_.log(s),s.error?(0,c.d$)("negative",s.error.message):(E.value.fee=s.fee,E.value.raw=s.raw,await ae()),C.value=!C.value}async function ae(){const e=await p.era.broadcast64(E.value.raw);e.error?(0,c.d$)("negative",e.message):((0,c.d$)("info","Транзакция создана"),_.log(e.signature),await le(e.signature))}const le=async e=>{const a=await n.h.post("/api/p2p/new_olf_ex",{wallet:N.value,amount:H.value,price:10*O,tx:e,title:E.value.title});a.data.success?((0,c.d$)("positive",a.data.message),H.value=null,await l.get_user(),j.back()):(0,c.d$)("negative",a.data.message)},te=async()=>{C.value=!C.value;const e=await v().post(A+"/api/data/create_payment_olf_ex",{wallet:N.value,type:"CARD",want_to_buy:M.value,amount:L.value,currency:"RUB",asset_id:1048643,redirect_url:"https://app.rupay.pro",callback_url:"https://rupay.pro/api/data/p2play_url_result_olf_ex"});C.value=!C.value,e.data.success?window.location.href=e.data.url:(0,c.d$)("negative",JSON.stringify(e.data.message))};return(e,a)=>{const l=(0,t.up)("page-header"),n=(0,t.up)("q-tab"),o=(0,t.up)("q-tabs"),d=(0,t.up)("q-btn"),i=(0,t.up)("q-input"),r=(0,t.up)("q-tab-panel"),p=(0,t.up)("q-item-label"),c=(0,t.up)("q-item-section"),m=(0,t.up)("q-item"),v=(0,t.up)("q-list"),_=(0,t.up)("q-scroll-area"),B=(0,t.up)("q-tab-panels"),j=(0,t.up)("page-body"),A=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(A,null,{default:(0,t.w5)((()=>[(0,t.Wm)(j,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),b,(0,t.Wm)(o,{modelValue:w.value,"onUpdate:modelValue":a[0]||(a[0]=e=>w.value=e),class:"index-tabs text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{ripple:!1,"no-caps":"",class:"bg-white",name:"main",label:"Выкуп"}),(0,t.Wm)(n,{ripple:!1,"no-caps":"",class:"bg-white",name:"history",label:"История"})])),_:1},8,["modelValue"]),(0,t.Wm)(B,{modelValue:w.value,"onUpdate:modelValue":a[4]||(a[4]=e=>w.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{name:"main",class:"no-padding"},{default:(0,t.w5)((()=>{var l;return[(0,u.SU)(Y).used_reffer_code?((0,t.wg)(),(0,t.iD)("div",f,[g,(0,t._)("p",y,"Количество реффералов в 1й линии: "+(0,s.zw)((0,u.SU)(Y).first_line_count),1),(0,t._)("p",k,[(0,t.Uk)("Ваш реферальный код: "+(0,s.zw)((0,u.SU)(Y).own_reffer_code)+" ",1),(0,t.Wm)(d,{color:"blue-7","text-color":"dark",onClick:P,round:"",dense:"",unelevated:"",icon:"las la-clipboard"})]),(0,t._)("div",null,[(0,t._)("p",U,(0,s.zw)(e.$t("your_balance"))+" OLF: "+(0,s.zw)((0,u.SU)(J)[2][0][1]),1),(0,t._)("p",W,"Выплата при достижении курса "+(0,s.zw)(10*O)+" RUB",1),(0,t.Wm)(i,{outlined:"",modelValue:H.value,"onUpdate:modelValue":a[1]||(a[1]=e=>H.value=e),label:"Сумма OLF",class:"q-mb-md",type:"number"},null,8,["modelValue"]),0===(0,u.SU)(X).length?((0,t.wg)(),(0,t.iD)("div",h,[parseFloat(H.value)>0?((0,t.wg)(),(0,t.j4)(d,{key:0,dense:"",class:"full-width q-py-md q-mb-lg",onClick:ee,loading:C.value,color:"positive","no-caps":"",unelevated:"",disable:parseFloat(H.value)>parseFloat((0,u.SU)(J)[2][0][1]),label:`${e.$t("send_btn")}`},null,8,["loading","disable","label"])):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("p",F,"Дождитесь завершения транзакций"))]),"RUB"===(null===(l=I.value)||void 0===l?void 0:l.value)?((0,t.wg)(),(0,t.iD)("div",x,[(0,t._)("p",q,"Комиссия платежной системы: "+(0,s.zw)(100*parseFloat((0,u.SU)(G).buy_commission))+"%",1),(0,t._)("p",S,"Курс покупки: "+(0,s.zw)((0,u.SU)(G).buy_course)+" RUB",1),(0,t.Wm)(i,{modelValue:L.value,"onUpdate:modelValue":a[2]||(a[2]=e=>L.value=e),type:"number",label:"Введите сумму пополнения в RUB",outlined:"",class:"q-mb-md"},null,8,["modelValue"]),(0,u.SU)(M)?((0,t.wg)(),(0,t.iD)("p",V,"Вы получите: "+(0,s.zw)((0,u.SU)(M))+" OLF",1)):(0,t.kq)("",!0),(0,t.Wm)(d,{label:"Купить",loading:C.value,color:"primary","no-caps":"",class:"full-width",unelevated:"",onClick:te,disable:!(0,u.SU)(M)},null,8,["loading","disable"])])):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("div",z,[Q,(0,t.Wm)(i,{modelValue:T.value,"onUpdate:modelValue":a[3]||(a[3]=e=>T.value=e),outlined:"",class:"q-mb-md"},null,8,["modelValue"]),(0,t.Wm)(d,{label:"Сохранить",loading:C.value,color:"primary","no-caps":"",class:"full-width",unelevated:"",onClick:K,disable:!T.value},null,8,["loading","disable"])]))]})),_:1}),(0,t.Wm)(r,{name:"history",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{style:{height:"calc(100vh - 40vh - 50px)"}},{default:(0,t.w5)((()=>[(0,u.SU)(Y).exclusive_holds.length>0?((0,t.wg)(),(0,t.j4)(v,{key:0,dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[Z])),_:1})])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[D])),_:1})])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[R])),_:1})])),_:1}),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[$])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(Y).exclusive_holds,(e=>((0,t.wg)(),(0,t.j4)(m,{dense:"",key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat(e.amount))+" OLF",1)])),_:2},1024),(0,t.Wm)(p,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat(e.amount)*parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat(e.ostatok))+" OLF",1)])),_:2},1024),(0,t.Wm)(p,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat(e.ostatok)*parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};var L=l(47817),O=l(70900),B=l(89800),C=l(84106),T=l(24455),I=l(57786),j=l(13119),A=l(66663),P=l(13246),K=l(490),E=l(76749),N=l(33115),X=l(69984),J=l.n(X);const Y=H,G=Y;J()(H,"components",{QTabs:L.Z,QTab:O.Z,QTabPanels:B.Z,QTabPanel:C.Z,QBtn:T.Z,QSelect:I.Z,QInput:j.Z,QScrollArea:A.Z,QList:P.Z,QItem:K.Z,QItemSection:E.Z,QItemLabel:N.Z})}}]);