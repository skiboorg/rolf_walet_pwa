"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[229],{75008:(e,a,l)=>{l.d(a,{C:()=>u,d:()=>n});var t=l(13433),s=l(17779);const n=({seed:e,password:a})=>{const l={status:!0,seed:e},s=t.createCipher("aes192",a);return s.update(JSON.stringify(l),"utf8","hex")+s.final("hex")},u=({hash:e,password:a})=>{try{const l=t.createDecipher("aes192",a),s=l.update(e,"hex","utf8")+l.final("utf8"),n=JSON.parse(s);return!!n.status&&n.seed}catch(l){return s.log(l),!1}}},14895:(e,a,l)=>{l.d(a,{Z:()=>h});var t=l(59835),s=l(60499),n=l(43463),u=l(87270),d=l(75008),o=l(9991),i=l(17779);const c={props:["transactionInfo"]},r=Object.assign(c,{__name:"PinCodeModal",emits:["pincode_ок"],setup(e,{emit:a}){const l=(0,n.s)(),c=(0,o.QT)();function r(e){const t=localStorage.getItem("hash"),s=(0,d.C)({hash:t,password:e});i.log(s),s?(a("pincode_ок"),l.togglePinCodeModalVisible()):(0,u.d)("negative",c.t("wrong_pin"))}return(e,a)=>{const n=(0,t.up)("pin-code"),u=(0,t.up)("q-btn"),d=(0,t.up)("q-card-section"),o=(0,t.up)("q-card"),i=(0,t.up)("q-dialog");return(0,t.wg)(),(0,t.j4)(i,{modelValue:(0,s.SU)(l).pinCodeModalVisible,"onUpdate:modelValue":a[1]||(a[1]=e=>(0,s.SU)(l).pinCodeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{class:"bg-white fullscreen"},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{class:"flex column items-center justify-center fullscreen"},{default:(0,t.w5)((()=>[(0,t.Wm)(n,{showDigits:!1,onPincode_ready:r}),(0,t.Wm)(u,{class:"q-mt-md",onClick:a[0]||(a[0]=e=>(0,s.SU)(l).togglePinCodeModalVisible()),"no-caps":"",unelevated:"",rounded:"",color:"negative",label:e.$t("cancel_btn")},null,8,["label"])])),_:1})])),_:1})])),_:1},8,["modelValue"])}}});var m=l(32074),p=l(44458),v=l(63190),w=l(24455),g=l(69984),f=l.n(g);const b=r,h=b;f()(r,"components",{QDialog:m.Z,QCard:p.Z,QCardSection:v.Z,QBtn:w.Z})},64229:(e,a,l)=>{l.r(a),l.d(a,{default:()=>$});var t=l(59835),s=l(86970),n=l(60499),u=l(91569),d=l(14895),o=l(43463),i=l(87270),c=l(18910),r=l(98030),m=l(46190),p=l(23459),v=l(17779);const w=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),g=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),f=(0,t.Uk)("Ваш баланс"),b=(0,t.Uk)("Количество отправляемых взносов "),h={class:"text-bold"},_=(0,t._)("p",{class:"text-bold text-caption text-center text-negative q-mb-none"},"ВНИМАНИЕ ВЫ СОВЕРШАЕТЕ НЕВОЗВРАТНЫЙ ВЗНОС",-1),W=(0,t.Uk)(" Подтверждение отправки актива "),x=(0,t.Uk)("Актив"),k=(0,t.Uk)("OLF"),y=(0,t.Uk)("Количество"),q=(0,t.Uk)("Комиссия транзакции"),U={key:0},C={key:1},Z={__name:"Buy_part",setup(e){const a=(0,o.s)(),{EraChain:Z}=((0,c.tv)(),l(99407)),Q=(0,m.c)(),S=(0,p.Q)(),V=(0,n.iH)({label:"250 OLF",value:250}),F=(0,n.iH)([{label:"250 OLF",value:250},{label:"25 OLF",value:25}]);let O=(0,n.iH)(!1);const H=(0,n.iH)(!1),L=(0,n.iH)(0),M=(0,n.iH)(!1),P=(0,c.yj)();let j=(0,n.iH)(null);const z=(0,t.Fl)((()=>Q.balances)),D=(0,t.Fl)((()=>(G.value.amount=L.value*V.value.value,L.value*V.value.value))),I=(0,t.Fl)((()=>V.value.value+.01*V.value.value+.002)),T=(0,t.Fl)((()=>{let e;return e=parseInt(z.value[2][0][1]/I.value),L.value=e>0?1:0,e})),A=(0,t.Fl)((()=>Q.addresses[Q.currentAddressIdx].address));function B(){a.togglePinCodeModalVisible()}(0,t.bv)((async()=>{j.value=P.params.asset_key}));const G=(0,n.iH)({amount:null,address:"7GMmxFHoXhrTM4vbZyRAFsZ2hGtfbqkyhU",title:"Покупка невозвратного паевого взноса",message:"",encrypted:!1,fee:0,raw:0});function $(){G.value={amount:null,address:"7GMmxFHoXhrTM4vbZyRAFsZ2hGtfbqkyhU",title:"Покупка невозвратного паевого взноса",message:"",encrypted:!1,fee:0,raw:0}}async function K(){H.value=!H.value;const e=!0,a=await S.getKeyPair(),l=new Z.Type.KeyPair(a),t={assetKey:"2",amount:G.value.amount};v.log(l),v.log(t);const s=await r.era.tranRawSendAsset(l,t,G.value.address,G.value.title,`Приобретено ${L.value} долей`,G.value.encrypted,e);v.log(s),s.error?(0,i.d)("negative",s.error.message):(G.value.fee=s.fee,G.value.raw=s.raw),H.value=!H.value}async function R(){H.value=!H.value;const e=await u.h.get(`/api/user/check_address?wallet=${A.value}`);if(e.data.success){(0,i.d)("positive",e.data.message);const a=await r.era.broadcast64(G.value.raw);if(v.log(a),a.error)(0,i.d)("negative",a.message);else{(0,i.d)("info","Транзакция создана"),O.value=!1;const e=await u.h.post("/api/user/addition_balance",{wallet:A.value,tx:a.signature,parts:L.value,part_price:V.value.value});e.data.success?((0,i.d)("positive",e.data.message),M.value=!1,L.value=0):(0,i.d)("negative",e.data.message)}}else(0,i.d)("negative",e.data.message);H.value=!H.value}return(e,a)=>{const l=(0,t.up)("q-btn"),u=(0,t.up)("unconfirmed-tx-icon"),o=(0,t.up)("q-header"),i=(0,t.up)("q-item-section"),c=(0,t.up)("q-item"),r=(0,t.up)("q-select"),m=(0,t.up)("q-slider"),p=(0,t.up)("q-separator"),v=(0,t.up)("q-checkbox"),Z=(0,t.up)("btn"),Q=(0,t.up)("q-list"),S=(0,t.up)("q-card-section"),P=(0,t.up)("page-body"),j=(0,t.up)("q-card-actions"),A=(0,t.up)("q-card"),J=(0,t.up)("q-dialog"),N=(0,t.up)("page"),X=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(N,null,{default:(0,t.w5)((()=>[(0,t.Wm)(P,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,{reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{"no-caps":"",label:"Внести паевой взнос",onClick:a[0]||(a[0]=a=>e.$router.back()),icon:"las la-angle-left",unelevated:""}),(0,t.Wm)(u)])),_:1}),w,g,(0,t.Wm)(S,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{side:"",class:"text-weight-bold text-dark"},{default:(0,t.w5)((()=>[f])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)((0,n.SU)(z)[2][0][1])+" OLF",1)])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"text-weight-bold text-dark"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e),options:F.value,outlined:"",rounded:"",label:"Выберите стоимость одного невозвратного паевого взноса без учета комиссии"},null,8,["modelValue","options"])])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{side:"",class:"text-weight-bold text-negative"},{default:(0,t.w5)((()=>[(0,t.Uk)("Стоимость одного невозвратного паевого взноса с учетом комиссии сети "+(0,s.zw)((0,n.SU)(I))+" OLF",1)])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[b,(0,t._)("span",h,(0,s.zw)(L.value)+" ("+(0,s.zw)((0,n.SU)(D))+" OLF)",1)])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,{modelValue:L.value,"onUpdate:modelValue":a[2]||(a[2]=e=>L.value=e),"marker-labels":"",min:(0,n.SU)(T)>0?1:0,max:(0,n.SU)(T)},null,8,["modelValue","min","max"])])),_:1})])),_:1}),(0,t.Wm)(p,{class:"q-my-md"}),_,(0,t.Wm)(v,{class:"q-mb-md",modelValue:M.value,"onUpdate:modelValue":a[3]||(a[3]=e=>M.value=e),label:"Принимаю"},null,8,["modelValue"]),(0,t.Wm)(Z,{label:"Отправить",onClick:B,disabled:!(M.value&&L.value>0),outline:!1},null,8,["disabled"])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(J,{modelValue:(0,n.SU)(O),"onUpdate:modelValue":a[4]||(a[4]=e=>(0,n.dq)(O)?O.value=e:O=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeHide:$},{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"bg-white text-dark",style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(S,{class:"text-weight-bold"},{default:(0,t.w5)((()=>[W])),_:1}),(0,t.Wm)(S,{class:"q-py-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{dense:"",separator:"",class:"q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[x])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[k])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(G.value.amount)+" OLF",1)])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[q])),_:1}),(0,t.Wm)(i,{class:"text-caption"},{default:(0,t.w5)((()=>[G.value.fee>0?((0,t.wg)(),(0,t.iD)("span",U,(0,s.zw)(.01*G.value.amount)+" OLF",1)):(0,t.kq)("",!0),G.value.fee>0?((0,t.wg)(),(0,t.iD)("span",C,"+ газ "+(0,s.zw)(G.value.fee)+" OLF",1)):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(j,{class:"bg-white text-teal"},{default:(0,t.w5)((()=>[0===G.value.fee?((0,t.wg)(),(0,t.j4)(l,{key:0,label:"Расчет комиссии",rounded:"",loading:H.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"info",onClick:K,outline:!1},null,8,["loading"])):((0,t.wg)(),(0,t.j4)(l,{key:1,label:"Подтвердить",rounded:"",loading:H.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"positive",onClick:R,outline:!1},null,8,["loading"])),(0,t.wy)((0,t.Wm)(l,{label:"Отменить",rounded:"","no-caps":"",color:"negative",class:"full-width",unelevated:"",outline:"",loading:H.value},null,8,["loading"]),[[X]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)((0,n.SU)(d.Z),{onPincode_ок:a[5]||(a[5]=e=>(0,n.dq)(O)?O.value=!0:O=!0)})])),_:1})}}};var Q=l(16602),S=l(24455),V=l(63190),F=l(13246),O=l(490),H=l(76749),L=l(57786),M=l(28423),P=l(50926),j=l(11221),z=l(32074),D=l(44458),I=l(11821),T=l(62146),A=l(69984),B=l.n(A);const G=Z,$=G;B()(Z,"components",{QHeader:Q.Z,QBtn:S.Z,QCardSection:V.Z,QList:F.Z,QItem:O.Z,QItemSection:H.Z,QSelect:L.Z,QSlider:M.Z,QSeparator:P.Z,QCheckbox:j.Z,QDialog:z.Z,QCard:D.Z,QCardActions:I.Z}),B()(Z,"directives",{ClosePopup:T.Z})}}]);