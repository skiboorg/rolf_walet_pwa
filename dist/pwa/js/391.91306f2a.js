(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[391],{35391:(e,a,l)=>{"use strict";l.r(a),l.d(a,{default:()=>te});var s=l(59835),t=l(60499),u=l(86970),n=l(29565),o=l.n(n),i=l(23459),m=l(46190),c=l(91569),d=l(39981),r=l.n(d),p=l(18910),v=l(87270),b=l(65054);const _=(0,s._)("div",{class:"",style:{height:"60px"}},null,-1),y={key:0,class:"q-mb-lg"},U=(0,s._)("p",{class:"q-mb-sm text-caption"},"Укажите кошелек с которого будете совершать транзакцию*",-1),w=(0,s._)("p",{class:"q-mb-sm text-caption"},"С указанного вами кошелька совершаете транзакцию на адрес:",-1),g={class:"text-weight-medium q-mb-sm"},x={class:"q-mb-sm text-caption"},q=(0,s.Uk)(" Отправляйте на данный адрес только "),k={class:"text-weight-bold"},S=(0,s._)("br",null,null,-1),h=(0,s._)("span",{class:"text-negative"},"Отправка любых других монет приведет к их безвозвратной потере",-1),f=(0,s._)("br",null,null,-1),z=(0,s.Uk)(" Совершая транзакцию в "),V={class:"text-weight-bold"},H=(0,s._)("br",null,null,-1),W=(0,s.Uk)(" Зачисление происходит в сроки до 24 часов с момента транзакции (указаны максимальные сроки) "),F=(0,s._)("p",{class:"q-mb-sm text-caption"},"Сумма пополнения*",-1),A={key:1,class:"q-mb-lg"},C={key:0},Q={class:"q-mb-sm text-caption"},D=(0,s._)("br",null,null,-1),R={class:"text-bold text-negative"},B={class:"q-mb-sm text-caption text-bold"},Z={key:1},j={key:0},M=(0,s._)("p",{class:"q-mb-sm text-caption"},[(0,s.Uk)("Сумма пополнения в рублях* ("),(0,s._)("span",{class:"text-bold text-negative"},"мининум 1000 руб"),(0,s.Uk)(")")],-1),I={class:"q-mb-sm text-caption text-bold"},$={key:1},E=(0,s._)("p",{class:"text-bold"},"Внимание!",-1),N={class:"q-mb-sm text-caption"},T={class:"q-mb-sm text-caption text-weight-bold"},G=(0,s._)("p",{class:"q-mb-sm text-caption text-weight-bold"}," ВНИМАНИЕ НАЗНАЧЕНИЕ ПЛАТЕЖА ДОЛЖНО СОВПАДАТЬ С УКАЗАННЫМ В ИНСТРУКЦИИ.",-1),J={class:"q-mb-sm text-caption"},O=(0,s._)("p",{class:"q-mb-lg text-caption"},[(0,s._)("span",{style:{"font-weight":"bold"}},"Реквизиты для оплаты взносов"),(0,s._)("br"),(0,s.Uk)(" Номер счёта: 40703810326350000009"),(0,s._)("br"),(0,s.Uk)(" Валюта: RUR"),(0,s._)("br"),(0,s.Uk)(' Название: ПОТРЕБИТЕЛЬСКИЙ КООПЕРАТИВ ПО РАЗВИТИЮ ГРАЖДАНСКИХ ИНИЦИАТИВ "РОЛФ"'),(0,s._)("br"),(0,s.Uk)(" ИНН: 2366034781"),(0,s._)("br"),(0,s.Uk)(" КПП: 236601001"),(0,s._)("br"),(0,s.Uk)(' Банк: ФИЛИАЛ "РОСТОВСКИЙ" АО "АЛЬФА-БАНК"'),(0,s._)("br"),(0,s.Uk)(" БИК: 046015207"),(0,s._)("br"),(0,s.Uk)(" Кор. счёт: 30101810500000000207"),(0,s._)("br"),(0,s.Uk)(" Юридический адрес компании: улица ГОРЬКОГО, д. 60/4, кв./оф. 44, Краснодарский край, р-н ГОРОД-КУРОРТ СОЧИ, г. Сочи")],-1),P={__name:"Buy",setup(e){const a=(0,i.Q)(),l=(0,m.c)(),n=(0,p.yj)();let d=(0,t.iH)(null),P=(0,t.iH)(null),Y=(0,t.iH)(null),K=(0,t.iH)(!1),L=(0,t.iH)(!1),X=(0,t.iH)(0),ee=(0,t.iH)(300),ae=(0,t.iH)(0);(0,t.iH)(.02),(0,t.iH)(0);const le=(0,t.iH)({label:"Visa/Mastercard",currency:"RUB",value:"Card1",min:300,max:5e4,commission:.15}),se=[{label:"Visa/Mastercard",value:"Card1",currency:"RUB",min:300,max:5e4,commission:.15},{label:"Qiwi",value:"Qiwi",currency:"RUB",min:300,max:5e4,commission:.15},{label:"Перевод на Р/С",value:"rs",currency:"RUB",min:1e3,max:5e4,commission:0}],te=(0,s.Fl)((()=>2===ie.value.key?(ae.value=ee.value,parseFloat(parseFloat(ee.value/ie.value.course)-parseFloat(ee.value/ie.value.course*le.value.commission)).toFixed(5)):(ae.value=ee.value*ie.value.course_api,parseFloat(ee.value-ee.value*le.value.commission).toFixed(5))));async function ue(){K.value=!K.value;const e=await r().post("https://rupay.pro/api/data/create_payment",{wallet:me.value,type:le.value.value,want_to_buy:te.value,amount:ae.value,currency:2===ie.value.key||1643===ie.value.key?le.value.currency:"USD",asset_id:ie.value.key});K.value=!K.value,e.data.success?window.location.href=e.data.url:(0,v.d)("negative",JSON.stringify(e.data.message))}async function ne(){K.value=!K.value,await c.h.post("/api/settings/payment_request",{code:d.value,wallet:me.value,fromWallet:Y.value,currency:ie.value.name,amount:P.value}),await r().get(`https://api.telegram.org/bot603507616:AAEmmGeaujFe_lqkw31HHSoh2EiAvVNtFA4/sendMessage?chat_id=-542426502\n  &text=Запрос на пополнение с RUPAY%0A\n  Код : ${d.value}%0A\n  На кошелек ${me.value}%0A\n  Сумма пополнения: ${P.value} руб\n\n`),d.value=ce(4),Y.value=null,P.value=null,K.value=!K.value,L.value=!0,(0,v.d)("positive","Запрос успешно отправлен<br>Ожидаем поступление средств")}function oe(){(0,b.Z)(ie.value.from_address).then((()=>{(0,v.d)("positive","Адрес кошелька скопирован")})).catch((()=>{}))}const ie=(0,s.Fl)((()=>a.assets.find((e=>e.key===X.value)))),me=(0,s.Fl)((()=>l.addresses[l.currentAddressIdx].address));function ce(e){for(var a="",l="0123456789",s=l.length,t=0;t<e;t++)a+=l.charAt(Math.floor(Math.random()*s));return a}return(0,s.wF)((async()=>{X.value=parseInt(n.query.asset),d.value=ce(4),ie.value.payment_system&&(le.value={label:ie.value.payment_system,value:ie.value.payment_system,currency:`${ie.value.name}`,min:ie.value.payment_min/ie.value.course_api,max:ie.value.payment_max/ie.value.course_api,commission:ie.value.payment_comission/100},ee.value=ie.value.payment_min/ie.value.course_api)})),(e,a)=>{const l=(0,s.up)("page-header"),n=(0,s.up)("q-input"),i=(0,s.up)("q-btn"),m=(0,s.up)("q-select"),c=(0,s.up)("q-img"),r=(0,s.up)("q-scroll-area"),p=(0,s.up)("page-body"),v=(0,s.up)("page");return(0,s.wg)(),(0,s.j4)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"q-px-md"},{default:(0,s.w5)((()=>[(0,s.Wm)(l),_,(0,t.SU)(ie).show_description?((0,s.wg)(),(0,s.iD)("div",y,[U,(0,s.Wm)(n,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(Y),"onUpdate:modelValue":a[0]||(a[0]=e=>(0,t.dq)(Y)?Y.value=e:Y=e)},null,8,["modelValue"]),(0,s._)("div",null,[w,(0,s._)("p",g,(0,u.zw)((0,t.SU)(ie).from_address),1),(0,s.Wm)(i,{class:"q-mb-sm",color:"primary",label:"Скопировать адрес",onClick:oe,"no-caps":"",size:"12px",unelevated:"",icon:"las la-copy"}),(0,s._)("p",x,[q,(0,s._)("span",k,(0,u.zw)((0,t.SU)(ie).name)+" "+(0,u.zw)((0,t.SU)(ie).description),1),S,h,f,z,(0,s._)("span",V,(0,u.zw)((0,t.SU)(ie).name),1),(0,s.Uk)(" вы делаете добровольный имущественный паевой взнос ПКРГИ РОЛФ Равный количеству отправляемых "+(0,u.zw)((0,t.SU)(ie).name)+" Вывод монет с кошелька является выплатой по вашему взносу",1),H,W]),F,(0,s.Wm)(n,{class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(P),"onUpdate:modelValue":a[1]||(a[1]=e=>(0,t.dq)(P)?P.value=e:P=e),type:"number"},null,8,["modelValue"]),(0,s.Wm)(i,{color:"primary",loading:(0,t.SU)(K),onClick:ne,disable:!(0,t.SU)(P)||!(0,t.SU)(Y),unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])])):((0,s.wg)(),(0,s.iD)("div",A,[(0,s.Wm)(r,{style:{height:"85vh"}},{default:(0,s.w5)((()=>["rs"!==le.value.value?((0,s.wg)(),(0,s.iD)("div",C,[2===(0,t.SU)(ie).key||1643===(0,t.SU)(ie).key?((0,s.wg)(),(0,s.j4)(m,{key:0,rounded:"",modelValue:le.value,"onUpdate:modelValue":a[2]||(a[2]=e=>le.value=e),outlined:"",dense:"",options:se,class:"q-mb-md",label:"Выберите тип оплаты"},null,8,["modelValue"])):(0,s.kq)("",!0),(0,s._)("p",Q,[(0,s.Uk)("Сумма пополнения в "+(0,u.zw)(le.value.currency)+"*",1),D,(0,s._)("span",R," мининум "+(0,u.zw)(le.value.min)+" "+(0,u.zw)(le.value.currency)+", максимум "+(0,u.zw)(le.value.max)+" "+(0,u.zw)(le.value.currency)+", комиссия "+(0,u.zw)(100*le.value.commission)+" %",1)]),(0,s.Wm)(n,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(ee),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,t.dq)(ee)?ee.value=e:ee=e),type:"number",label:"На какую сумму хотите пополнить*"},null,8,["modelValue"]),(0,s._)("p",B,"Вы получите: "+(0,u.zw)((0,t.SU)(te))+" "+(0,u.zw)((0,t.SU)(ie).name),1),(0,s.Wm)(i,{color:"primary",rounded:"",loading:(0,t.SU)(K),onClick:ue,disable:(0,t.SU)(ee)<le.value.min||(0,t.SU)(ee)>le.value.max,unelevated:"","no-caps":"",class:"full-width q-py-md",label:"Отправить"},null,8,["loading","disable"])])):((0,s.wg)(),(0,s.iD)("div",Z,[(0,t.SU)(L)?((0,s.wg)(),(0,s.iD)("div",$,[E,(0,s._)("p",N,"Для пополнения вашего баланса "+(0,u.zw)((0,t.SU)(ie).name)+" по указанным реквизитам ниже совершаете оплату в назначении платежа указать:",1),(0,s._)("p",T," Добровольный членский взнос от ФИО, КОД "+(0,u.zw)((0,t.SU)(d)),1),G,(0,s._)("p",J," Зачисление "+(0,u.zw)((0,t.SU)(ie).name)+" происходит в течении нескольких часов после получения средств на счет! Рекомендуем совершать оплату с Альфа Банка, тогда зачисление будет происходить быстрее. Оплата с других банков может затянуть зачисление до 5 рабочих дней.",1),(0,s.Wm)(c,{src:o()}),O])):((0,s.wg)(),(0,s.iD)("div",j,[M,(0,s.Wm)(n,{rounded:"",class:"q-mb-sm",dense:"",outlined:"",modelValue:(0,t.SU)(P),"onUpdate:modelValue":a[4]||(a[4]=e=>(0,t.dq)(P)?P.value=e:P=e),type:"number"},null,8,["modelValue"]),(0,s._)("p",I,"Вы получите: "+(0,u.zw)((0,t.SU)(P)/(0,t.SU)(ie).course)+" "+(0,u.zw)((0,t.SU)(ie).name),1),(0,s.Wm)(i,{color:"primary",loading:(0,t.SU)(K),onClick:ne,disable:!(0,t.SU)(P)||(0,t.SU)(P)<1e3,unelevated:"","no-caps":"",class:"full-width q-py-md q-mb-md",rounded:"",label:"Отправить"},null,8,["loading","disable"])]))]))])),_:1})]))])),_:1})])),_:1})}}};var Y=l(13119),K=l(24455),L=l(66663),X=l(18401),ee=l(70335),ae=l(69984),le=l.n(ae);const se=P,te=se;le()(P,"components",{QInput:Y.Z,QBtn:K.Z,QScrollArea:L.Z,QSelect:X.Z,QImg:ee.Z})},29565:(e,a,l)=>{e.exports=l.p+"img/qr.28e572d7.jpg"}}]);