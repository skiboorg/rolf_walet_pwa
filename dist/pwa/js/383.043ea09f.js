"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[383],{75008:(e,a,t)=>{t.d(a,{C:()=>o,d:()=>n});var l=t(13433),s=t(17779);const n=({seed:e,password:a})=>{const t={status:!0,seed:e},s=l.createCipher("aes192",a);return s.update(JSON.stringify(t),"utf8","hex")+s.final("hex")},o=({hash:e,password:a})=>{try{const t=l.createDecipher("aes192",a),s=t.update(e,"hex","utf8")+t.final("utf8"),n=JSON.parse(s);return!!n.status&&n.seed}catch(t){return s.log(t),!1}}},14895:(e,a,t)=>{t.d(a,{Z:()=>b});var l=t(59835),s=t(60499),n=t(43463),o=t(87270),u=t(75008),d=t(9991),i=t(17779);const c={props:["transactionInfo"]},r=Object.assign(c,{__name:"PinCodeModal",emits:["pincode_ок"],setup(e,{emit:a}){const t=(0,n.s)(),c=(0,d.QT)();function r(e){const l=localStorage.getItem("hash"),s=(0,u.C)({hash:l,password:e});i.log(s),s?(a("pincode_ок"),t.togglePinCodeModalVisible()):(0,o.d$)("negative",c.t("wrong_pin"))}return(e,a)=>{const n=(0,l.up)("pin-code"),o=(0,l.up)("q-btn"),u=(0,l.up)("q-card-section"),d=(0,l.up)("q-card"),i=(0,l.up)("q-dialog");return(0,l.wg)(),(0,l.j4)(i,{modelValue:(0,s.SU)(t).pinCodeModalVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(t).pinCodeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{class:"bg-white fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:"flex column items-center justify-center fullscreen"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{showDigits:!1,onPincode_ready:r}),(0,l.Wm)(o,{class:"q-mt-md",onClick:a[0]||(a[0]=e=>(0,s.SU)(t).togglePinCodeModalVisible()),"no-caps":"",unelevated:"",color:"negative",label:e.$t("cancel_btn")},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var p=t(32074),m=t(44458),w=t(63190),g=t(24455),f=t(69984),v=t.n(f);const h=r,b=h;v()(r,"components",{QDialog:p.Z,QCard:m.Z,QCardSection:w.Z,QBtn:g.Z})},21383:(e,a,t)=>{t.r(a),t.d(a,{default:()=>M});var l=t(59835),s=t(60499),n=t(86970),o=t(91569),u=t(14895),d=t(43463),i=t(87270),c=t(18910),r=t(98030),p=t(46190),m=t(23459),w=t(17779);const g=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),f=(0,l._)("div",{class:"",style:{height:"50px"}},null,-1),v={class:"text-weight-bold text-dark"},h={key:0,class:"text-weight-bold text-dark"},b={key:1,class:"text-weight-bold text-dark"},_=(0,l._)("p",{class:"text-negative text-center text-bold"},"У вас нет RUB баланса",-1),k=(0,l.Uk)(" Подтверждение отправки актива "),U=(0,l.Uk)("Актив"),x=(0,l.Uk)("RUB"),y=(0,l.Uk)("Количество"),q=(0,l.Uk)("Комиссия транзакции"),W={key:0},C={key:1},S={__name:"SendRubToRolf",setup(e){const a=(0,d.s)(),{EraChain:S}=((0,c.tv)(),t(99407)),Q=(0,p.c)(),Z=(0,m.Q)();let B=(0,s.iH)(!1);const R=(0,s.iH)(!1);(0,s.iH)(0),(0,s.iH)(!1),(0,c.yj)();(0,s.iH)(null);const V=(0,l.Fl)((()=>Q.balances)),j=(0,l.Fl)((()=>$.value.amount>0?.01*parseFloat($.value.amount)<.25?.25:.01*parseFloat($.value.amount):0)),D=(0,l.Fl)((()=>Q.addresses[Q.currentAddressIdx].address));function P(){a.togglePinCodeModalVisible()}const $=(0,s.iH)({amount:0,address:"7JXmTnbwuDnpqQ3NwxwzhfGgDk223j13eP",title:"Отправка RUB на РОЛФ",message:"Отправка RUB на РОЛФ",encrypted:!1,fee:0,raw:0});function z(){$.value={amount:0,address:"7JXmTnbwuDnpqQ3NwxwzhfGgDk223j13eP",title:"Отправка RUB на РОЛФ",message:"Отправка RUB на РОЛФ",encrypted:!1,fee:0,raw:0}}async function F(){R.value=!R.value;const e=!0,a=await Z.getKeyPair(),t=new S.Type.KeyPair(a),l={assetKey:"1643",amount:$.value.amount};w.log(t),w.log(l);const s=await r.era.tranRawSendAsset(t,l,$.value.address,$.value.title,$.value.message,$.value.encrypted,e);w.log(s),s.error?(0,i.d$)("negative",s.error.message):($.value.fee=s.fee,$.value.raw=s.raw),R.value=!R.value}async function H(){R.value=!R.value;const e=await o.h.get(`/api/user/check_address?wallet=${D.value}`);if(e.data.success){(0,i.d$)("positive",e.data.message);const a=await r.era.broadcast64($.value.raw);if(w.log(a),a.error)(0,i.d$)("negative",a.message);else{(0,i.d$)("info","Транзакция создана"),B.value=!1;const e=await o.h.post("/api/user/rub_to_rolf",{wallet:D.value,tx:a.signature});e.data.success?((0,i.d$)("positive",e.data.message),z()):(0,i.d$)("negative",e.data.message)}}else(0,i.d$)("negative",e.data.message);R.value=!R.value}return(e,a)=>{const t=(0,l.up)("q-btn"),o=(0,l.up)("unconfirmed-tx-icon"),d=(0,l.up)("q-header"),i=(0,l.up)("q-input"),c=(0,l.up)("btn"),r=(0,l.up)("q-card-section"),p=(0,l.up)("page-body"),m=(0,l.up)("q-item-section"),w=(0,l.up)("q-item"),S=(0,l.up)("q-list"),Q=(0,l.up)("q-card-actions"),Z=(0,l.up)("q-card"),D=(0,l.up)("q-dialog"),T=(0,l.up)("page"),I=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d,{reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,l.w5)((()=>[(0,l.Wm)(t,{"no-caps":"",label:"Назад",onClick:a[0]||(a[0]=a=>e.$router.back()),icon:"las la-angle-left",unelevated:""}),(0,l.Wm)(o)])),_:1}),g,f,(0,s.SU)(V)[1643]?((0,l.wg)(),(0,l.j4)(r,{key:0,class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("p",v,"Ваш баланс: "+(0,n.zw)((0,s.SU)(V)[1643][0][1])+" RUB",1),(0,l.Wm)(i,{outlined:"",class:"q-mb-md",modelValue:$.value.amount,"onUpdate:modelValue":a[1]||(a[1]=e=>$.value.amount=e),label:"Укажите сумму перевода"},null,8,["modelValue"]),(0,s.SU)(j)>0?((0,l.wg)(),(0,l.iD)("p",h,"Комиссия за перевод: "+(0,n.zw)((0,s.SU)(j))+" RUB (1%, минимум: 0.25)",1)):(0,l.kq)("",!0),(0,s.SU)(j)>0?((0,l.wg)(),(0,l.iD)("p",b,"С вас спишется: "+(0,n.zw)(parseFloat($.value.amount)+(0,s.SU)(j))+" RUB",1)):(0,l.kq)("",!0),(0,l.Wm)(c,{label:"Отправить",onClick:P,disabled:!$.value.amount||parseFloat($.value.amount)+(0,s.SU)(j)>parseFloat((0,s.SU)(V)[1643][0][1]),outline:!1},null,8,["disabled"])])),_:1})):((0,l.wg)(),(0,l.j4)(r,{key:1,class:"q-pt-none"},{default:(0,l.w5)((()=>[_])),_:1}))])),_:1}),(0,l.Wm)(D,{modelValue:(0,s.SU)(B),"onUpdate:modelValue":a[2]||(a[2]=e=>(0,s.dq)(B)?B.value=e:B=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeHide:z},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"bg-white text-dark",style:{width:"100%"}},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{class:"text-weight-bold"},{default:(0,l.w5)((()=>[k])),_:1}),(0,l.Wm)(r,{class:"q-py-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{dense:"",separator:"",class:"q-mb-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[U])),_:1}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[x])),_:1})])),_:1}),(0,l.Wm)(w,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[y])),_:1}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)($.value.amount)+" RUB",1)])),_:1})])),_:1}),(0,l.Wm)(w,{class:"no-padding"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{side:"",class:"text-weight-medium text-dark"},{default:(0,l.w5)((()=>[q])),_:1}),(0,l.Wm)(m,{class:"text-caption"},{default:(0,l.w5)((()=>[$.value.fee>0?((0,l.wg)(),(0,l.iD)("span",W,(0,n.zw)((0,s.SU)(j))+" RUB ",1)):(0,l.kq)("",!0),$.value.fee>0?((0,l.wg)(),(0,l.iD)("span",C,"+ газ "+(0,n.zw)($.value.fee)+" OLF",1)):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(Q,{class:"bg-white text-teal"},{default:(0,l.w5)((()=>[0===$.value.fee?((0,l.wg)(),(0,l.j4)(t,{key:0,label:"Расчет комиссии",loading:R.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"info",onClick:F,outline:!1},null,8,["loading"])):((0,l.wg)(),(0,l.j4)(t,{key:1,label:"Подтвердить",loading:R.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"positive",onClick:H,outline:!1},null,8,["loading"])),(0,l.wy)((0,l.Wm)(t,{label:"Отменить","no-caps":"",color:"negative",class:"full-width",unelevated:"",outline:"",loading:R.value},null,8,["loading"]),[[I]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)((0,s.SU)(u.Z),{onPincode_ок:a[3]||(a[3]=e=>(0,s.dq)(B)?B.value=!0:B=!0)})])),_:1})}}};var Q=t(16602),Z=t(24455),B=t(63190),R=t(13119),V=t(32074),j=t(44458),D=t(13246),P=t(490),$=t(76749),z=t(11821),F=t(62146),H=t(69984),T=t.n(H);const I=S,M=I;T()(S,"components",{QHeader:Q.Z,QBtn:Z.Z,QCardSection:B.Z,QInput:R.Z,QDialog:V.Z,QCard:j.Z,QList:D.Z,QItem:P.Z,QItemSection:$.Z,QCardActions:z.Z}),T()(S,"directives",{ClosePopup:F.Z})}}]);