"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[6771],{86771:(e,a,l)=>{l.r(a),l.d(a,{default:()=>M});var t=l(59835),u=l(60499),s=l(86970),n=l(91569),o=l(18910),d=l(46190),i=l(31655),r=l(99407),p=l(98030),c=l(87270),m=l(23459),v=l(39981),w=l.n(v),_=l(17779);const b=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),g={key:0,class:"q-pa-md"},f=(0,t._)("p",null,"Друзья, Вы можете принять участие в создании дефицита нашей монеты! А значит и в росте ее цены! Ведь чем меньше монет на рынке и больше спрос на нее, тем выше ее рыночная цена! Предлагаем Вам уникальную возможность принять участие в ликвидации монет с рынка и увеличению ее ценности!",-1),y={class:"text-bold"},k={class:"text-bold"},U={key:0},W={class:"text-bold"},F={class:"text-bold"},h={key:0,class:""},x={key:1,class:"text-bold text-center text-negative"},q={key:1},S={class:"text-bold"},V={class:"text-bold"},z={key:0,class:"text-bold"},Q={key:1,class:"q-pa-md"},L=(0,t._)("p",null,"Введите реферальный код пригласителя",-1),O=(0,t.Uk)("Дата"),R=(0,t.Uk)("Цена"),Z=(0,t.Uk)("Остаток"),D=(0,t.Uk)("Выкуплено"),B={__name:"OlfExclusive",setup(e){const a=(0,m.Q)(),l=(0,i.T)(),v=((0,o.yj)(),(0,u.iH)("main")),B=(0,u.iH)(0),$=(0,u.iH)(0),H=75,C=((0,u.iH)([]),(0,d.c)()),T=(0,u.iH)(!1),I=(0,u.iH)(null),j=(0,u.iH)(null),A=(0,o.tv)(),P=[{label:"С баланса OLF",value:"OLF"},{label:"Купить OLF",value:"RUB"}],K="https://rupay.pro";async function E(){await(0,c.QO)(M.value.own_reffer_code,"positive","Код скопирован")}const N=async()=>{T.value=!T.value;const e=await n.h.post("/api/p2p/save_code",{wallet:J.value,used_ref_code:I.value});e.data.success?((0,c.d$)("info",e.data.message),await l.get_user()):(0,c.d$)("negative",e.data.message),T.value=!T.value},X=(0,u.iH)({amount:null,address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:"Выкуп по "+10*H,message:"",encrypted:!1,fee:0,raw:0}),J=(0,t.Fl)((()=>C.addresses[C.currentAddressIdx].address)),Y=(0,t.Fl)((()=>a.unconfirmedTx)),G=(0,t.Fl)((()=>C.balances)),M=(0,t.Fl)((()=>l.user)),ee=((0,t.Fl)((()=>C.assets)),(0,t.Fl)((()=>{const e=a.assets.find((e=>2===e.key));return e}))),ae=(0,t.Fl)((()=>{if($.value){let e=parseFloat(parseFloat(ee.value.buy_course)+parseFloat(ee.value.buy_course*ee.value.buy_commission)).toFixed(2);return parseFloat(parseFloat($.value)/e).toFixed(8)}}));async function le(){T.value=!T.value;const e=!0,l=await a.getKeyPair(),t=new r.EraChain.Type.KeyPair(l),u={assetKey:2,amount:B.value};_.log(t),_.log(u);const s=await p.era.tranRawSendAsset(t,u,X.value.address,X.value.title,"Откуп OLF",X.value.encrypted,e);_.log(s),s.error?(0,c.d$)("negative",s.error.message):(X.value.fee=s.fee,X.value.raw=s.raw,await te()),T.value=!T.value}async function te(){const e=await p.era.broadcast64(X.value.raw);e.error?(0,c.d$)("negative",e.message):((0,c.d$)("info","Транзакция создана"),_.log(e.signature),await ue(e.signature))}const ue=async e=>{const a=await n.h.post("/api/p2p/new_olf_ex",{wallet:J.value,amount:B.value,price:10*H,tx:e,title:X.value.title});a.data.success?((0,c.d$)("positive",a.data.message),B.value=null,await l.get_user(),A.back()):(0,c.d$)("negative",a.data.message)},se=async()=>{T.value=!T.value;const e=await w().post(K+"/api/data/create_payment_olf_ex",{wallet:J.value,type:"CARD",want_to_buy:ae.value,amount:$.value,currency:"RUB",asset_id:1048643,redirect_url:"https://app.rupay.pro",callback_url:"https://rupay.pro/api/data/p2play_url_result_olf_ex"});T.value=!T.value,e.data.success?window.location.href=e.data.url:(0,c.d$)("negative",JSON.stringify(e.data.message))};return(e,a)=>{const l=(0,t.up)("page-header"),n=(0,t.up)("q-tab"),o=(0,t.up)("q-tabs"),d=(0,t.up)("q-btn"),i=(0,t.up)("q-select"),r=(0,t.up)("q-input"),p=(0,t.up)("q-tab-panel"),c=(0,t.up)("q-item-label"),m=(0,t.up)("q-item-section"),w=(0,t.up)("q-item"),_=(0,t.up)("q-list"),C=(0,t.up)("q-scroll-area"),A=(0,t.up)("q-tab-panels"),K=(0,t.up)("page-body"),X=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(X,null,{default:(0,t.w5)((()=>[(0,t.Wm)(K,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),b,(0,t.Wm)(o,{modelValue:v.value,"onUpdate:modelValue":a[0]||(a[0]=e=>v.value=e),class:"index-tabs text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{ripple:!1,"no-caps":"",class:"bg-white",name:"main",label:"Выкуп"}),(0,t.Wm)(n,{ripple:!1,"no-caps":"",class:"bg-white",name:"history",label:"История"})])),_:1},8,["modelValue"]),(0,t.Wm)(A,{modelValue:v.value,"onUpdate:modelValue":a[5]||(a[5]=e=>v.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{name:"main",class:"no-padding"},{default:(0,t.w5)((()=>{var l,n;return[(0,u.SU)(M).used_reffer_code?((0,t.wg)(),(0,t.iD)("div",g,[f,(0,t._)("p",y,"Количество реффералов в 1й линии: "+(0,s.zw)((0,u.SU)(M).first_line_count),1),(0,t._)("p",k,[(0,t.Uk)("Ваш реферальный код: "+(0,s.zw)((0,u.SU)(M).own_reffer_code)+" ",1),(0,t.Wm)(d,{color:"blue-7","text-color":"dark",onClick:E,round:"",dense:"",unelevated:"",icon:"las la-clipboard"})]),(0,t.Wm)(i,{outlined:"",options:P,modelValue:j.value,"onUpdate:modelValue":a[1]||(a[1]=e=>j.value=e),label:"Выберите тип пополнения",class:"q-mb-md"},null,8,["modelValue"]),"OLF"===(null===(l=j.value)||void 0===l?void 0:l.value)?((0,t.wg)(),(0,t.iD)("div",U,[(0,t._)("p",W,(0,s.zw)(e.$t("your_balance"))+" OLF: "+(0,s.zw)((0,u.SU)(G)[2][0][1]),1),(0,t._)("p",{class:"text-bold"},"Текущий курс: "+(0,s.zw)(H)+" RUB"),(0,t._)("p",F,"Выплата при достижении курса "+(0,s.zw)(10*H)+" RUB",1),(0,t.Wm)(r,{outlined:"",modelValue:B.value,"onUpdate:modelValue":a[2]||(a[2]=e=>B.value=e),label:"Сумма OLF",class:"q-mb-md",type:"number"},null,8,["modelValue"]),0===(0,u.SU)(Y).length?((0,t.wg)(),(0,t.iD)("div",h,[parseFloat(B.value)>0?((0,t.wg)(),(0,t.j4)(d,{key:0,dense:"",class:"full-width q-py-md q-mb-lg",onClick:le,loading:T.value,color:"positive","no-caps":"",unelevated:"",disable:parseFloat(B.value)>parseFloat((0,u.SU)(G)[2][0][1]),label:`${e.$t("send_btn")}`},null,8,["loading","disable","label"])):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("p",x,"Дождитесь завершения транзакций"))])):(0,t.kq)("",!0),"RUB"===(null===(n=j.value)||void 0===n?void 0:n.value)?((0,t.wg)(),(0,t.iD)("div",q,[(0,t._)("p",S,"Комиссия платежной системы: "+(0,s.zw)(100*parseFloat((0,u.SU)(ee).buy_commission))+"%",1),(0,t._)("p",V,"Курс покупки: "+(0,s.zw)((0,u.SU)(ee).buy_course)+" RUB",1),(0,t.Wm)(r,{modelValue:$.value,"onUpdate:modelValue":a[3]||(a[3]=e=>$.value=e),type:"number",label:"Введите сумму пополнения в RUB",outlined:"",class:"q-mb-md"},null,8,["modelValue"]),(0,u.SU)(ae)?((0,t.wg)(),(0,t.iD)("p",z,"Вы получите: "+(0,s.zw)((0,u.SU)(ae))+" OLF",1)):(0,t.kq)("",!0),(0,t.Wm)(d,{label:"Купить",loading:T.value,color:"primary","no-caps":"",class:"full-width",unelevated:"",onClick:se,disable:!(0,u.SU)(ae)},null,8,["loading","disable"])])):(0,t.kq)("",!0)])):((0,t.wg)(),(0,t.iD)("div",Q,[L,(0,t.Wm)(r,{modelValue:I.value,"onUpdate:modelValue":a[4]||(a[4]=e=>I.value=e),outlined:"",class:"q-mb-md"},null,8,["modelValue"]),(0,t.Wm)(d,{label:"Сохранить",loading:T.value,color:"primary","no-caps":"",class:"full-width",unelevated:"",onClick:N,disable:!I.value},null,8,["loading","disable"])]))]})),_:1}),(0,t.Wm)(p,{name:"history",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{style:{height:"calc(100vh - 40vh - 50px)"}},{default:(0,t.w5)((()=>[(0,u.SU)(M).exclusive_holds.length>0?((0,t.wg)(),(0,t.j4)(_,{key:0,dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[O])),_:1})])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[R])),_:1})])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[Z])),_:1})])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[D])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,u.SU)(M).exclusive_holds,(e=>((0,t.wg)(),(0,t.j4)(w,{dense:"",key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat(e.amount))+" OLF",1)])),_:2},1024),(0,t.Wm)(c,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat(e.amount)*parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat(e.ostatok))+" OLF",1)])),_:2},1024),(0,t.Wm)(c,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(parseFloat(e.ostatok)*parseInt(e.price))+" RUB",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}};var $=l(47817),H=l(70900),C=l(89800),T=l(84106),I=l(24455),j=l(57786),A=l(13119),P=l(66663),K=l(13246),E=l(490),N=l(76749),X=l(33115),J=l(69984),Y=l.n(J);const G=B,M=G;Y()(B,"components",{QTabs:$.Z,QTab:H.Z,QTabPanels:C.Z,QTabPanel:T.Z,QBtn:I.Z,QSelect:j.Z,QInput:A.Z,QScrollArea:P.Z,QList:K.Z,QItem:E.Z,QItemSection:N.Z,QItemLabel:X.Z})}}]);