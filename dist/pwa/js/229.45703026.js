"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[229],{64229:(e,a,l)=>{l.r(a),l.d(a,{default:()=>G});var t=l(59835),s=l(86970),u=l(60499),d=l(91569),n=l(14895),i=l(43463),o=l(87270),c=l(18910),m=l(98030),r=l(46190),w=l(23459),v=l(17779);const p=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),g=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),f=(0,t.Uk)("Ваш баланс"),_=(0,t.Uk)("Количество отправляемых взносов "),b={class:"text-bold"},k=(0,t._)("p",{class:"text-bold text-caption text-center text-negative q-mb-none"},"ВНИМАНИЕ ВЫ СОВЕРШАЕТЕ НЕВОЗВРАТНЫЙ ВЗНОС",-1),W=(0,t.Uk)(" Подтверждение отправки актива "),h=(0,t.Uk)("Актив"),x=(0,t.Uk)("OLF"),y=(0,t.Uk)("Количество"),q=(0,t.Uk)("Комиссия транзакции"),U={key:0},Z={key:1},Q={__name:"Buy_part",setup(e){const a=(0,i.s)(),{EraChain:Q}=((0,c.tv)(),l(99407)),C=(0,r.c)(),F=(0,w.Q)(),H=250,V=H+.01*H+.002;let L=(0,u.iH)(!1);const S=(0,u.iH)(!1),z=(0,u.iH)(0),O=(0,u.iH)(0),j=(0,u.iH)(!1),M=(0,c.yj)();let A=(0,u.iH)(null);(0,t.bv)((async()=>{O.value=parseInt(P.value[2][0][1]/V),O.value>0?z.value=1:z.value=0}));const P=(0,t.Fl)((()=>C.balances)),B=(0,t.Fl)((()=>(T.value.amount=z.value*H,z.value*H))),D=(0,t.Fl)((()=>C.addresses[C.currentAddressIdx].address));function I(){a.togglePinCodeModalVisible()}(0,t.bv)((async()=>{A.value=M.params.asset_key}));const T=(0,u.iH)({amount:null,address:"7GMmxFHoXhrTM4vbZyRAFsZ2hGtfbqkyhU",title:"Покупка невозвратного паевого взноса",message:"",encrypted:!1,fee:0,raw:0});function G(){T.value={amount:null,address:"7NBHJjDugvtNq9GsMMcwcbx7yNMAn47fLH",title:"Покупка невозвратного паевого взноса",message:"",encrypted:!1,fee:0,raw:0}}async function K(){S.value=!S.value;const e=!0,a=await F.getKeyPair(),l=new Q.Type.KeyPair(a),t={assetKey:"2",amount:T.value.amount};v.log(l),v.log(t);const s=await m.era.tranRawSendAsset(l,t,T.value.address,T.value.title,`Приобретено ${z.value} долей`,T.value.encrypted,e);v.log(s),s.error?(0,o.d)("negative",s.error.message):(T.value.fee=s.fee,T.value.raw=s.raw),S.value=!S.value}async function N(){S.value=!S.value;const e=await d.h.get(`/api/user/check_address?wallet=${D.value}`);if(e.data.success){(0,o.d)("positive",e.data.message);const a=await m.era.broadcast64(T.value.raw);if(v.log(a),a.error)(0,o.d)("negative",a.message);else{(0,o.d)("info","Транзакция создана"),L.value=!1;const e=await d.h.post("/api/user/addition_balance",{wallet:D.value,tx:a.signature,parts:z.value});e.data.success?((0,o.d)("positive",e.data.message),j.value=!1,z.value=0):(0,o.d)("negative",e.data.message)}}else(0,o.d)("negative",e.data.message);S.value=!S.value}return(e,a)=>{const l=(0,t.up)("q-btn"),d=(0,t.up)("unconfirmed-tx-icon"),i=(0,t.up)("q-header"),o=(0,t.up)("q-item-section"),c=(0,t.up)("q-item"),m=(0,t.up)("q-slider"),r=(0,t.up)("q-separator"),w=(0,t.up)("q-checkbox"),v=(0,t.up)("btn"),Q=(0,t.up)("q-list"),C=(0,t.up)("q-card-section"),F=(0,t.up)("page-body"),H=(0,t.up)("q-card-actions"),M=(0,t.up)("q-card"),A=(0,t.up)("q-dialog"),D=(0,t.up)("page"),$=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(F,null,{default:(0,t.w5)((()=>[(0,t.Wm)(i,{reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{"no-caps":"",label:"Внести паевой взнос",onClick:a[0]||(a[0]=a=>e.$router.back()),icon:"las la-angle-left",unelevated:""}),(0,t.Wm)(d)])),_:1}),p,g,(0,t.Wm)(C,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{side:"",class:"text-weight-bold text-dark"},{default:(0,t.w5)((()=>[f])),_:1}),(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)((0,u.SU)(P)[2][0][1])+" OLF",1)])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{side:"",class:"text-weight-bold text-dark"},{default:(0,t.w5)((()=>[(0,t.Uk)("Стоимость одного невозвратного паевого взноса с учетом комиссии сети "+(0,s.zw)(V)+" OLF")])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[_,(0,t._)("span",b,(0,s.zw)(z.value)+" ("+(0,s.zw)((0,u.SU)(B))+" OLF)",1)])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,{modelValue:z.value,"onUpdate:modelValue":a[1]||(a[1]=e=>z.value=e),"marker-labels":"",min:O.value>0?1:0,max:O.value},null,8,["modelValue","min","max"])])),_:1})])),_:1}),(0,t.Wm)(r,{class:"q-my-md"}),k,(0,t.Wm)(w,{class:"q-mb-md",modelValue:j.value,"onUpdate:modelValue":a[2]||(a[2]=e=>j.value=e),label:"Принимаю"},null,8,["modelValue"]),(0,t.Wm)(v,{label:"Отправить",onClick:I,disabled:!(j.value&&z.value>0),outline:!1},null,8,["disabled"])])),_:1})])),_:1})])),_:1}),(0,t.Wm)(A,{modelValue:(0,u.SU)(L),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,u.dq)(L)?L.value=e:L=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeHide:G},{default:(0,t.w5)((()=>[(0,t.Wm)(M,{class:"bg-white text-dark",style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{class:"text-weight-bold"},{default:(0,t.w5)((()=>[W])),_:1}),(0,t.Wm)(C,{class:"q-py-none"},{default:(0,t.w5)((()=>[(0,t.Wm)(Q,{dense:"",separator:"",class:"q-mb-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[h])),_:1}),(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[x])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[y])),_:1}),(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(T.value.amount)+" OLF",1)])),_:1})])),_:1}),(0,t.Wm)(c,{class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{side:"",class:"text-weight-medium text-dark"},{default:(0,t.w5)((()=>[q])),_:1}),(0,t.Wm)(o,{class:"text-caption"},{default:(0,t.w5)((()=>[T.value.fee>0?((0,t.wg)(),(0,t.iD)("span",U,(0,s.zw)(.01*T.value.amount)+" OLF",1)):(0,t.kq)("",!0),T.value.fee>0?((0,t.wg)(),(0,t.iD)("span",Z,"+ газ "+(0,s.zw)(T.value.fee)+" OLF",1)):(0,t.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(H,{class:"bg-white text-teal"},{default:(0,t.w5)((()=>[0===T.value.fee?((0,t.wg)(),(0,t.j4)(l,{key:0,label:"Расчет комиссии",rounded:"",loading:S.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"info",onClick:K,outline:!1},null,8,["loading"])):((0,t.wg)(),(0,t.j4)(l,{key:1,label:"Подтвердить",rounded:"",loading:S.value,class:"q-mb-sm full-width",unelevated:"","no-caps":"",color:"positive",onClick:N,outline:!1},null,8,["loading"])),(0,t.wy)((0,t.Wm)(l,{label:"Отменить",rounded:"","no-caps":"",color:"negative",class:"full-width",unelevated:"",outline:"",loading:S.value},null,8,["loading"]),[[$]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)((0,u.SU)(n.Z),{onPincode_ок:a[4]||(a[4]=e=>(0,u.dq)(L)?L.value=!0:L=!0)})])),_:1})}}};var C=l(16602),F=l(24455),H=l(63190),V=l(13246),L=l(490),S=l(76749),z=l(28423),O=l(50926),j=l(11221),M=l(32074),A=l(44458),P=l(11821),B=l(62146),D=l(69984),I=l.n(D);const T=Q,G=T;I()(Q,"components",{QHeader:C.Z,QBtn:F.Z,QCardSection:H.Z,QList:V.Z,QItem:L.Z,QItemSection:S.Z,QSlider:z.Z,QSeparator:O.Z,QCheckbox:j.Z,QDialog:M.Z,QCard:A.Z,QCardActions:P.Z}),I()(Q,"directives",{ClosePopup:B.Z})}}]);