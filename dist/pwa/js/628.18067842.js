"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[628],{76628:(e,a,l)=>{l.r(a),l.d(a,{default:()=>L});var t=l(59835),u=l(86970),s=l(60499),n=l(91569),o=l(18910),p=l(46190),d=l(31655),r=l(87270);const v=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),i={class:"q-mb-sm"},m={class:"text-bold"},_=(0,t.Uk)(", минимальный объем "),c={class:"text-bold"},w={class:"text-bold"},y=(0,t._)("br",null,null,-1),b=(0,t.Uk)(" Разместил пользователь "),f=["href"],g=(0,t.Uk)("Верифицирован"),k=(0,t.Uk)("Не верифицирован"),U=(0,t.Uk)("В сети"),h=(0,t.Uk)("Не в сети"),x=(0,t.Uk)(" сделок проведено "),z={class:"text-bold"},F=(0,t._)("br",null,null,-1),q=(0,t._)("span",{class:"text-bold"},"Условия сделки:",-1),$=(0,t._)("br",null,null,-1),W=(0,t._)("span",{class:"text-bold"},null,-1),S=(0,t.Uk)("Введите объем сделки минимум: "),j={class:"text-bold"},V=(0,t.Uk)(", максимум: "),Q={class:"text-bold"},Z=(0,t._)("p",null,"Выберите платежную систему",-1),C={key:0,class:"text-negative text-bold"},H=(0,t.Uk)(" Y вас нет выбранной платежной системы. Добавьте ее "),T=(0,t.Uk)("тут"),B=(0,t.Uk)(" или выберите другую."),I={__name:"Offer",setup(e){const a=(0,o.yj)(),l=(0,o.tv)(),I=(0,p.c)(),A=(0,d.T)(),D=(0,s.iH)({asset:{name:""},user:{wallet:"",total_trades:0}}),O=(0,s.iH)(null),Y=(0,s.iH)(null),E=(0,s.iH)(!1),G=(0,t.Fl)((()=>A.user)),J=(0,t.Fl)((()=>{if(Y.value){let e=Y.value.payment_type.id;return G.value.payment_types.filter((a=>a.payment_type.id===e))}return!1})),K=(0,t.Fl)((()=>{if(Y.value){let e=Y.value.payment_type.id;return N.value?G.value.payment_types.filter((a=>a.payment_type.id===e)):D.value.user.payment_types.filter((a=>a.payment_type.id===e))}})),L=(0,t.Fl)((()=>N.value?`Продать ${O.value} ${D.value.asset.name} на ${X.value} руб`:`Купить ${O.value} ${D.value.asset.name} на ${X.value} руб`)),M=(0,t.Fl)((()=>R.value?N.value?"negative":"positive":"grey-7")),N=(0,t.Fl)((()=>D.value.is_sell?D.value.user.wallet===G.value.wallet:D.value.user.wallet!==G.value.wallet)),P=(0,t.Fl)((()=>I.addresses[I.currentAddressIdx].address)),R=(0,t.Fl)((()=>parseFloat(O.value)>=D.value.min_amount&&parseFloat(O.value)<=D.value.amount&&Y.value&&K.value.length>0)),X=(0,t.Fl)((()=>{if(O.value)return parseFloat(O.value)*D.value.course}));async function ee(){E.value=!E.value;const e=await n.h.post("/api/p2p/create_trade",{offer_id:D.value.id,amount:O.value,asset_amount_without_commission:parseFloat(O.value-.01*O.value).toFixed(5),payment_type:K.value[0].id,opponent:P.value});e.data.success?(0,r.d)("positive",e.data.message):(0,r.d)("negative",e.data.message),E.value=!E.value,await A.get_own_trades(),l.push({name:"p2p_index"})}return(0,t.wF)((async()=>{let e=a.params.offer_id;const l=await n.h.get(`/api/p2p/offer?id=${e}`);D.value=l.data})),(e,a)=>{const l=(0,t.up)("page-header"),n=(0,t.up)("q-badge"),o=(0,t.up)("q-separator"),p=(0,t.up)("q-btn"),d=(0,t.up)("q-input"),r=(0,t.up)("q-select"),I=(0,t.up)("router-link"),A=(0,t.up)("page-body"),G=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(G,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A,{class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{route_name:"p2p_index"}),v,(0,t._)("p",i,[(0,t.Uk)(" Оффер #"+(0,u.zw)(D.value.id)+" на "+(0,u.zw)(D.value.is_sell?"продажу":"покупку")+" ",1),(0,t._)("span",m,(0,u.zw)(D.value.amount)+" "+(0,u.zw)(D.value.asset.name),1),_,(0,t._)("span",c,(0,u.zw)(D.value.min_amount)+" "+(0,u.zw)(D.value.asset.name),1),(0,t.Uk)(", курс "+(0,u.zw)(D.value.is_sell?"покупки":"продажи")+" ",1),(0,t._)("span",w,(0,u.zw)(D.value.course)+" руб.",1),y,b,(0,t._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${D.value.user.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold",target:"_blank"},(0,u.zw)(D.value.user.fio?D.value.user.fio:D.value.user.wallet),9,f),D.value.user.fio?((0,t.wg)(),(0,t.j4)(n,{key:0,color:"positive"},{default:(0,t.w5)((()=>[g])),_:1})):((0,t.wg)(),(0,t.j4)(n,{key:1,color:"negative"},{default:(0,t.w5)((()=>[k])),_:1})),D.value.user.is_online?((0,t.wg)(),(0,t.j4)(n,{key:2,color:"positive"},{default:(0,t.w5)((()=>[U])),_:1})):((0,t.wg)(),(0,t.j4)(n,{key:3,color:"negative"},{default:(0,t.w5)((()=>[h])),_:1})),x,(0,t._)("span",z,(0,u.zw)(D.value.user.total_trades),1),F,q,$,(0,t.Uk)((0,u.zw)(D.value.rules),1)]),(0,t.Wm)(o,{spaced:"md"}),W,(0,t._)("p",null,[S,(0,t._)("span",j,(0,u.zw)(D.value.min_amount)+" "+(0,u.zw)(D.value.asset.name),1),V,(0,t._)("span",Q,(0,u.zw)(D.value.amount)+" "+(0,u.zw)(D.value.asset.name),1)]),(0,t.Wm)(d,{outlined:"",rounded:"",modelValue:O.value,"onUpdate:modelValue":a[1]||(a[1]=e=>O.value=e),type:"number",label:`Объем сделки в ${D.value.asset.name}`,class:"q-mb-md"},{append:(0,t.w5)((()=>[(0,t.Wm)(p,{onClick:a[0]||(a[0]=e=>O.value=D.value.amount),size:"10px",unelevated:"",color:"primary","no-caps":"",rounded:"",label:"Максимум"})])),_:1},8,["modelValue","label"]),Z,(0,t.Wm)(r,{outlined:"",rounded:"",modelValue:Y.value,"onUpdate:modelValue":a[2]||(a[2]=e=>Y.value=e),options:D.value.payment_types,class:"q-mb-md",label:"Платежная система",behavior:"dialog"},null,8,["modelValue","options"]),Y.value&&!(0,s.SU)(J).length>0?((0,t.wg)(),(0,t.iD)("p",C,[H,(0,t.Wm)(I,{to:{name:"p2p_user"}},{default:(0,t.w5)((()=>[T])),_:1}),B])):(0,t.kq)("",!0),(0,t.Wm)(p,{disable:!(0,s.SU)(R),label:(0,s.SU)(R)?(0,s.SU)(L):"Заполните все поля",class:"full-width q-py-md",color:(0,s.SU)(M),"no-caps":"",onClick:ee,loading:E.value,rounded:"",unelevated:""},null,8,["disable","label","color","loading"])])),_:1})])),_:1})}}};var A=l(20990),D=l(50926),O=l(13119),Y=l(24455),E=l(18401),G=l(69984),J=l.n(G);const K=I,L=K;J()(I,"components",{QBadge:A.Z,QSeparator:D.Z,QInput:O.Z,QBtn:Y.Z,QSelect:E.Z})}}]);