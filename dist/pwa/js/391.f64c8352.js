(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[391],{35391:(e,l,a)=>{"use strict";a.r(l),a.d(l,{default:()=>ze});a(18964);var t=a(59835),s=a(60499),n=a(86970),u=a(29565),o=a.n(u),i=a(9991),d=a(23459),c=a(46190),m=a(91569),r=a(39981),p=a.n(r),v=a(18910),b=a(87270),_=a(65054),w=a(17779);const y=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),x={key:0,class:"q-mb-lg"},g={key:0},U={class:"q-mb-sm text-caption"},k={class:"text-weight-medium q-mb-sm"},q={class:"q-mb-sm text-caption"},h={class:"text-weight-bold"},z=(0,t._)("br",null,null,-1),S={class:"text-negative"},$=(0,t._)("br",null,null,-1),f={class:"q-mb-sm text-caption text-bold"},F={key:1},V={class:"q-mb-sm text-caption"},H={class:"q-mb-sm text-caption"},W={class:"text-weight-medium q-mb-sm"},A={class:"q-mb-sm text-caption"},D=["innerHTML"],C=(0,t._)("br",null,null,-1),j=(0,t.Uk)(),M={class:"text-weight-bold"},Q=(0,t._)("br",null,null,-1),P={class:"text-weight-bold"},R={class:"q-mb-sm text-caption"},T={key:1,class:"q-mb-lg"},Z={key:0},B={key:0,class:""},N={class:"q-mb-sm text-caption"},I=(0,t._)("br",null,null,-1),J={class:"text-bold text-negative"},O={class:"q-mb-sm flex items-center justify-between"},E={class:"no-margin text-caption text-bold"},L={class:"no-margin text-caption text-bold"},G={key:1},Y={class:"text-center text-negative text-bold"},K={class:"text-center text-positive text-bold"},X=(0,t.Uk)("P2P"),ee={key:1},le={key:0},ae={key:0},te=(0,t._)("p",{class:"q-mb-sm text-caption"},[(0,t.Uk)("Сумма пополнения в рублях* ("),(0,t._)("span",{class:"text-bold text-negative"},"мининум 1000 руб"),(0,t.Uk)(")")],-1),se={class:"q-mb-sm text-caption text-bold"},ne={key:1},ue=(0,t._)("p",{class:"text-bold"},"Внимание!",-1),oe={class:"q-mb-sm text-caption"},ie={class:"q-mb-sm text-caption text-weight-bold"},de=(0,t._)("p",{class:"q-mb-sm text-caption text-weight-bold"}," ВНИМАНИЕ НАЗНАЧЕНИЕ ПЛАТЕЖА ДОЛЖНО СОВПАДАТЬ С УКАЗАННЫМ В ИНСТРУКЦИИ.",-1),ce={class:"q-mb-sm text-caption"},me=(0,t._)("div",{class:"text-center"},[(0,t._)("img",{style:{width:"300px",height:"300px","object-fit":"contain"},src:o()})],-1),re=(0,t._)("p",{class:"q-mb-lg text-caption"},[(0,t._)("span",{style:{"font-weight":"bold"}},"Реквизиты для оплаты взносов"),(0,t._)("br"),(0,t.Uk)(" Номер счёта: 40703810326350000009"),(0,t._)("br"),(0,t.Uk)(" Валюта: RUR"),(0,t._)("br"),(0,t.Uk)(' Название: ПОТРЕБИТЕЛЬСКИЙ КООПЕРАТИВ ПО РАЗВИТИЮ ГРАЖДАНСКИХ ИНИЦИАТИВ "РОЛФ"'),(0,t._)("br"),(0,t.Uk)(" ИНН: 2366034781"),(0,t._)("br"),(0,t.Uk)(" КПП: 236601001"),(0,t._)("br"),(0,t.Uk)(' Банк: ФИЛИАЛ "РОСТОВСКИЙ" АО "АЛЬФА-БАНК"'),(0,t._)("br"),(0,t.Uk)(" БИК: 046015207"),(0,t._)("br"),(0,t.Uk)(" Кор. счёт: 30101810500000000207"),(0,t._)("br"),(0,t.Uk)(" Юридический адрес компании: улица ГОРЬКОГО, д. 60/4, кв./оф. 44, Краснодарский край, р-н ГОРОД-КУРОРТ СОЧИ, г. Сочи")],-1),pe={key:1},ve={class:"text-center text-negative text-bold"},be={class:"text-center text-positive text-bold"},_e=(0,t.Uk)("P2P"),we={__name:"Buy",setup(e){const l=(0,i.QT)(),a=(0,d.Q)(),u=(0,c.c)(),o=(0,v.yj)(),r="https://rupay.pro";let we=(0,s.iH)(null),ye=(0,s.iH)(null),xe=(0,s.iH)(null),ge=(0,s.iH)(null),Ue=(0,s.iH)(!1),ke=(0,s.iH)(!1),qe=(0,s.iH)(0),he=(0,s.iH)(1e3),ze=(0,s.iH)(0);const Se=(0,s.iH)("");(0,s.iH)(.02);let $e=(0,s.iH)(0);const fe=(0,s.iH)({label:"Visa/Mastercard/МИР",value:"Card1",currency:"RUB",min:1e3,max:15e3,commission:.06,disabled:!1}),Fe=(0,t.Fl)((()=>{if(1048615===Ce.value.key||1643===Ce.value.key||1048619===Ce.value.key||2===Ce.value.key){ze.value=he.value;let e=parseFloat(parseFloat(Ce.value.course)+parseFloat(Ce.value.course*fe.value.commission)).toFixed(2);return w.log(e),$e.value=Ce.value.course,parseFloat(he.value/e).toFixed(5)}return ze.value=he.value,$e.value=parseFloat(parseFloat(Ce.value.course)+.1*parseFloat(Ce.value.course)),parseFloat(parseFloat(he.value/$e.value)).toFixed(5)})),Ve=(0,s.iH)(null);async function He(e){Ue.value=!Ue.value,w.log(Ce.value);const l=await p().post(r+"/api/data/check_tx_hash",{tx:Se.value.replace(/\s/g,""),wallet:je.value,network:Ve.value,target_asset:{name:Ce.value.name,key:Ce.value.key,to:Ce.value.round_to}});l.data.success?(0,b.d$)("positive",JSON.stringify(l.data.message)):(0,b.d$)("negative",JSON.stringify(l.data.message)),Se.value=null,Ue.value=!Ue.value}async function We(){Ue.value=!Ue.value;const e=await p().post(r+"/api/data/create_payment",{wallet:je.value,type:fe.value.value,want_to_buy:Fe.value,amount:ze.value,currency:2===Ce.value.key||1643===Ce.value.key||1048610===Ce.value.key?fe.value.currency:"USD",asset_id:Ce.value.key,redirect_url:"https://app.rupay.pro"});Ue.value=!Ue.value,e.data.success?window.location.href=e.data.url:(0,b.d$)("negative",JSON.stringify(e.data.message))}async function Ae(){Ue.value=!Ue.value,ye.value=Me(4),await m.h.post("/api/settings/payment_request",{code:ye.value,wallet:je.value,fromWallet:ge.value,currency:Ce.value.name,amount:xe.value});let e="";1048610===Ce.value.key&&(e="🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️🅰️"),await p().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=${e}Запрос на пополнение с RUPAY%0A\n  Код : ${ye.value}%0A\n  С кошелека ${ge.value}%0A\n  На кошелек ${je.value}%0A\n  Актив ${Ce.value.name}%0A\n  Сумма пополнения: ${xe.value} ${Ce.value.name}\n\n`),ge.value=null,xe.value=null,Ue.value=!Ue.value,ke.value=!0,(0,b.d$)("positive",l.t("buy_success"))}function De(){(0,_.Z)(Ce.value.from_address).then((()=>{(0,b.d$)("positive",l.t("wallet_address_copy"))})).catch((()=>{}))}const Ce=(0,t.Fl)((()=>{const e=a.assets.find((e=>e.key===qe.value));return Ve.value=e.networks[0],e})),je=(0,t.Fl)((()=>u.addresses[u.currentAddressIdx].address));function Me(e){for(var l="",a="0123456789",t=a.length,s=0;s<e;s++)l+=a.charAt(Math.floor(Math.random()*t));return l}return(0,t.wF)((async()=>{qe.value=parseInt(o.query.asset),we.value=o.query.type})),(e,l)=>{const a=(0,t.up)("page-header"),u=(0,t.up)("q-select"),o=(0,t.up)("q-btn"),i=(0,t.up)("q-input"),d=(0,t.up)("router-link"),c=(0,t.up)("q-scroll-area"),m=(0,t.up)("page-body"),r=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(r,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"q-px-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(a),y,"other"===(0,s.SU)(we)?((0,t.wg)(),(0,t.iD)("div",x,[(0,s.SU)(Ce).is_can_buy_by_tx_check?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(u,{class:"q-mb-md",outlined:"",dense:"",label:e.$t("choose_network"),modelValue:Ve.value,"onUpdate:modelValue":l[0]||(l[0]=e=>Ve.value=e),options:(0,s.SU)(Ce).networks,"option-label":"name"},null,8,["label","modelValue","options"]),(0,t._)("p",U,(0,n.zw)(e.$t("create_transaction"))+":",1),(0,t._)("p",k,(0,n.zw)(Ve.value.address),1),(0,t.Wm)(o,{class:"q-mb-sm",color:"primary",label:e.$t("address_copy_btn"),onClick:De,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"},null,8,["label"]),(0,t._)("p",q,[(0,t.Uk)((0,n.zw)(e.$t("send_only"))+" ",1),(0,t._)("span",h,(0,n.zw)((0,s.SU)(Ce).name)+" "+(0,n.zw)(Ve.value.description),1),z,(0,t._)("span",S,(0,n.zw)(e.$t("send_only11")),1),$]),(0,t._)("p",f,(0,n.zw)(e.$t("after_transaction")),1),(0,t.Wm)(i,{class:"q-mb-sm",dense:"",outlined:"",modelValue:Se.value,"onUpdate:modelValue":l[1]||(l[1]=e=>Se.value=e)},null,8,["modelValue"]),(0,t.Wm)(o,{color:"primary",loading:(0,s.SU)(Ue),onClick:l[2]||(l[2]=e=>He("usdt")),disable:!Se.value,unelevated:"","no-caps":"",class:"full-width q-py-md",label:e.$t("check_transaction")},null,8,["loading","disable","label"])])):((0,t.wg)(),(0,t.iD)("div",F,[(0,t._)("p",V,(0,n.zw)(e.$t("wallet_from")),1),(0,t.Wm)(i,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,s.SU)(ge),"onUpdate:modelValue":l[3]||(l[3]=e=>(0,s.dq)(ge)?ge.value=e:ge=e)},null,8,["modelValue"]),(0,t._)("div",null,[(0,t._)("p",H,(0,n.zw)(e.$t("wallet_to")),1),(0,t._)("p",W,(0,n.zw)((0,s.SU)(Ce).from_address),1),(0,t.Wm)(o,{class:"q-mb-sm",color:"primary",label:e.$t("address_copy_btn"),onClick:De,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"},null,8,["label"]),(0,t._)("p",A,[(0,t._)("span",{class:"text-negative",innerHTML:e.$t("send_only")},null,8,D),C,j,(0,t._)("span",M,(0,n.zw)((0,s.SU)(Ce).name)+" "+(0,n.zw)((0,s.SU)(Ce).description),1),Q,(0,t.Uk)(" "+(0,n.zw)(e.$t("send_only1")),1),(0,t._)("span",P,(0,n.zw)((0,s.SU)(Ce).name),1),(0,t.Uk)(" "+(0,n.zw)(e.$t("send_only2"))+(0,n.zw)((0,s.SU)(Ce).name)+" "+(0,n.zw)(e.$t("send_only3")),1)]),(0,t._)("p",R,(0,n.zw)(e.$t("buy_amomunt"))+"*",1),(0,t.Wm)(i,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,s.SU)(xe),"onUpdate:modelValue":l[4]||(l[4]=e=>(0,s.dq)(xe)?xe.value=e:xe=e),type:"number"},null,8,["modelValue"]),(0,t.Wm)(o,{color:"primary",loading:(0,s.SU)(Ue),onClick:Ae,disable:!(0,s.SU)(xe)||!(0,s.SU)(ge),unelevated:"","no-caps":"",class:"full-width q-py-md",label:e.$t("send_btn")},null,8,["loading","disable","label"])])]))])):((0,t.wg)(),(0,t.iD)("div",T,[(0,t.Wm)(c,{style:{height:"85vh"}},{default:(0,t.w5)((()=>["rs"!==fe.value.value?((0,t.wg)(),(0,t.iD)("div",Z,[fe.value.disabled?((0,t.wg)(),(0,t.iD)("div",G,[(0,t._)("p",Y,(0,n.zw)(e.$t("buy_disable")),1),(0,t._)("p",K,[(0,t.Uk)((0,n.zw)(e.$t("buy_disable_p2p"))+" ",1),(0,t.Wm)(d,{to:{name:"p2p_index"}},{default:(0,t.w5)((()=>[X])),_:1})])])):((0,t.wg)(),(0,t.iD)("div",B,[(0,t._)("p",N,[(0,t.Uk)((0,n.zw)(e.$t("buy_amomunt"))+" "+(0,n.zw)(fe.value.currency)+"*",1),I,(0,t._)("span",J,(0,n.zw)(e.$t("buy_amomunt_min"))+" "+(0,n.zw)(fe.value.min)+" "+(0,n.zw)(fe.value.currency)+", "+(0,n.zw)(e.$t("buy_amomunt_max"))+" "+(0,n.zw)(fe.value.max)+" "+(0,n.zw)(fe.value.currency)+", "+(0,n.zw)(e.$t("buy_amomunt_comission"))+" "+(0,n.zw)(100*fe.value.commission)+" % ",1)]),(0,t.Wm)(i,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,s.SU)(he),"onUpdate:modelValue":l[5]||(l[5]=e=>(0,s.dq)(he)?he.value=e:he=e),type:"number",label:e.$t("buy_amomunt_label")},null,8,["modelValue","label"]),(0,t._)("div",O,[(0,t._)("p",E,(0,n.zw)(e.$t("buy_amomunt_total"))+": "+(0,n.zw)((0,s.SU)(Fe))+" "+(0,n.zw)((0,s.SU)(Ce).name),1),(0,t._)("p",L,(0,n.zw)(e.$t("buy_amomunt_cource"))+": "+(0,n.zw)(parseFloat((0,s.SU)($e)).toFixed(2))+" RUB",1)]),(0,t.Wm)(o,{color:"primary",loading:(0,s.SU)(Ue),onClick:We,disable:(0,s.SU)(he)<fe.value.min||(0,s.SU)(he)>fe.value.max,unelevated:"","no-caps":"",class:"full-width q-py-md",label:e.$t("send_btn")},null,8,["loading","disable","label"])]))])):((0,t.wg)(),(0,t.iD)("div",ee,[fe.value.disabled?((0,t.wg)(),(0,t.iD)("div",pe,[(0,t._)("p",ve,(0,n.zw)(e.$t("buy_disable")),1),(0,t._)("p",be,[(0,t.Uk)((0,n.zw)(e.$t("buy_disable_p2p"))+" ",1),(0,t.Wm)(d,{to:{name:"p2p_index"}},{default:(0,t.w5)((()=>[_e])),_:1})])])):((0,t.wg)(),(0,t.iD)("div",le,[(0,s.SU)(ke)?((0,t.wg)(),(0,t.iD)("div",ne,[ue,(0,t._)("p",oe,"Для пополнения вашего баланса "+(0,n.zw)((0,s.SU)(Ce).name)+" по указанным реквизитам ниже совершаете оплату в назначении платежа указать:",1),(0,t._)("p",ie," Добровольный членский взнос от ФИО, КОД "+(0,n.zw)((0,s.SU)(ye)),1),de,(0,t._)("p",ce," Зачисление "+(0,n.zw)((0,s.SU)(Ce).name)+" происходит в течении нескольких часов после получения средств на счет! Рекомендуем совершать оплату с Альфа Банка, тогда зачисление будет происходить быстрее. Оплата с других банков может затянуть зачисление до 5 рабочих дней.",1),me,re])):((0,t.wg)(),(0,t.iD)("div",ae,[te,(0,t.Wm)(i,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,s.SU)(xe),"onUpdate:modelValue":l[6]||(l[6]=e=>(0,s.dq)(xe)?xe.value=e:xe=e),type:"number"},null,8,["modelValue"]),(0,t._)("p",se,"Вы получите: "+(0,n.zw)((0,s.SU)(xe)/(0,s.SU)(Ce).course)+" "+(0,n.zw)((0,s.SU)(Ce).name),1),(0,t.Wm)(o,{color:"primary",loading:(0,s.SU)(Ue),onClick:Ae,disable:!(0,s.SU)(xe)||(0,s.SU)(xe)<1e3,unelevated:"","no-caps":"",class:"full-width q-py-md q-mb-md",label:"Отправить"},null,8,["loading","disable"])]))]))]))])),_:1})]))])),_:1})])),_:1})}}};var ye=a(57786),xe=a(24455),ge=a(13119),Ue=a(66663),ke=a(69984),qe=a.n(ke);const he=we,ze=he;qe()(we,"components",{QSelect:ye.Z,QBtn:xe.Z,QInput:ge.Z,QScrollArea:Ue.Z})},29565:(e,l,a)=>{e.exports=a.p+"img/qr.28e572d7.jpg"}}]);