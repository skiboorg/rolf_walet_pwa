"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[429],{89429:(e,a,l)=>{l.r(a),l.d(a,{default:()=>La});l(46727),l(40702),l(18964);var t=l(59835),n=l(60499),u=l(86970),o=l(61957),s=l(76028),i=l(23459),r=l(98030),d=l(91569),c=l(46190),m=l(43463),p=l(6827),v=(l(39981),l(18910)),w=l(66195),g=l.n(w),_=l(82341),f=l.n(_),y=l(95563),x=l.n(y),U=l(17779);const b={class:"flex items-center"},h=["src"],k={class:"no-margin text-weight-medium"},S=(0,t._)("p",{class:"q-mb-none q-px-sm text-weight-medium"},"/",-1),W=["src"],q={class:"no-margin text-weight-medium"},z=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),H={class:"row q-col-gutter-sm"},F={class:"col-4"},V={key:0,class:"no-margin text-bold text-h6"},Q={key:1,class:"no-margin text-bold text-h6 text-positive"},Z={class:"col-8"},C={class:"row q-col-gutter-xs text-caption"},j={class:"col-5"},P=(0,t._)("span",{class:"text-grey-7"},"Макс за 24ч",-1),A=(0,t._)("br",null,null,-1),K=(0,t._)("br",null,null,-1),D=(0,t._)("span",{class:"text-grey-7"},"Мин за 24ч",-1),O=(0,t._)("br",null,null,-1),Y={class:"col-6"},T={class:"text-grey-7 ellipsis q-mb-none"},I=(0,t._)("br",null,null,-1),B={class:"text-grey-7 ellipsis q-mb-none"},L=(0,t._)("br",null,null,-1),N={class:"flex items-center no-wrap q-mb-md"},$=(0,t._)("br",null,null,-1),M=(0,t._)("br",null,null,-1),E={class:"text-caption q-mb-sm"},R=(0,t._)("p",{class:"text-caption q-mb-sm"},"Цена за единицу",-1),G=(0,t._)("p",{class:"text-caption q-mb-sm"},"Итого",-1),J={class:""},X={class:"row q-col-gutter-sm"},ee={class:"col-6"},ae={class:"orders-grid"},le=(0,t._)("div",{class:"flex items-center justify-between"},[(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Цена"),(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Объем")],-1),te={class:"no-margin price-red-color text-10 text-weight-medium"},ne={class:"no-margin vol-color text-10 text-weight-medium"},ue={class:"col-6"},oe={class:"orders-grid"},se=(0,t._)("div",{class:"flex items-center justify-between"},[(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Цена"),(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Объем")],-1),ie={class:"no-margin price-green-color text-10 text-weight-medium"},re={class:"no-margin vol-color text-10 text-weight-medium"},de={class:"col-6"},ce={class:"flex items-center justify-between"},me=(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Всего",-1),pe={class:"no-margin text-10 vol-color text-weight-medium"},ve={class:"col-6"},we={class:"flex items-center justify-between"},ge=(0,t._)("p",{class:"no-margin text-10 text-grey-8 text-weight-medium"},"Всего",-1),_e={class:"no-margin text-10 vol-color text-weight-medium"},fe=(0,t.Uk)(" Подтверждение транзакции создании ордера "),ye=(0,t.Uk)("Имею"),xe=(0,t.Uk)("Хочу"),Ue=(0,t.Uk)("Комиссия");f().setOptions({rangeSelector:{dropdownLabel:["Масштаб"],buttons:[{type:"month",count:1,text:"1м",title:"1 мес"},{type:"month",count:3,text:"3м",title:"3 мес"},{type:"month",count:6,text:"6м",title:"6 мес"},{type:"ytd",text:"С начала года",title:"С начала года"},{type:"year",count:1,text:"1г",title:"1 год"},{type:"all",text:"Все",title:"Показать всё"}]},lang:{shortMonths:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],weekdays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]}}),x()(f());const be={name:"StockChart",components:{VueHighcharts:g()}},he=Object.assign(be,{props:{tradePair:Object},setup(e){const a=e,l=(0,m.s)(),o=(0,i.Q)(),w=(0,c.c)(),g=((0,v.tv)(),(0,t.Fl)((()=>o.assets)),(0,t.Fl)((()=>w.balances)));let _=(0,n.iH)([]),f=(0,n.iH)({}),y=(0,n.iH)({}),x=(0,n.iH)("buy"),be=(0,n.iH)(null),he=(0,n.iH)(null),ke=(0,n.iH)(null),Se=(0,n.iH)(!1),We=(0,n.iH)(!1),qe=(0,n.iH)({}),ze=(0,n.iH)(0),He=(0,n.iH)(0),Fe=(0,n.iH)(0),Ve=(0,n.iH)({}),Qe=(0,n.iH)([]),Ze=(0,n.iH)({rangeSelector:{selected:1},title:{text:""},series:[{name:"",data:[]}]});const Ce={11:"Недостаточно средств на балансе",66:"Минимальная стоимость ордера 280руб"};function je(){U.log(be.value),be.value||(ke.value=null,he.value=null),he.value&&(ke.value=parseFloat(be.value*he.value).toFixed(5))}function Pe(){Fe.value=0,He.value=0,x.value="buy",be.value=null,he.value=null,ke.value=null,Ze.value.series[0].data=[],Qe.value=[]}function Ae(){U.log(ze.value),U.log(he.value),ze.value>0&&"sell"===x.value&&2===f.value.key&&(U.log(y.value),he.value>=ze.value?U.log("norm"):(he.value=ze.value,U.log("dsf"))),be.value&&(ke.value=parseFloat(be.value*he.value).toFixed(5))}function Ke(){U.log(ke.value),he.value&&(be.value=parseFloat(ke.value/he.value).toFixed(5))}async function De(){const e=await o.getKeyPair(),a="buy"===x.value?y.value.key:f.value.key,l="buy"===x.value?ke.value:be.value,t="buy"===x.value?f.value.key:y.value.key,n="buy"===x.value?be.value:ke.value;U.log("have",a),U.log("want",t),U.log("haveAmount",l),U.log("wantAmount",n),await r.era.tranRawOrder(e,"name",a,l,t,n,!0).then((e=>{qe.value=e,U.log(qe.value),Se.value=!0}))}async function Oe(){We.value=!We.value;const e=await r.era.broadcast64(qe.value.raw);U.log(e),e.error?p.Z.create({color:"negative",message:Ce[e.error]}):p.Z.create({color:"info",message:"Транзакция отправлена в сеть"}),Se.value=!1,We.value=!We.value}function Ye(e){be.value=e.pairAmount,he.value=e.pairPrice,ke.value=parseFloat(e.pairAmount*e.pairPrice).toFixed(5),x.value="sell"}function Te(e){be.value=parseFloat(e.pairAmount).toFixed(5),he.value=e.pairPrice,ke.value=parseFloat(e.pairAmount*e.pairPrice).toFixed(5),x.value="buy"}async function Ie(){f.value=o.assets.find((e=>e.key===a.tradePair["0"])),y.value=o.assets.find((e=>e.key===a.tradePair["1"])),_.value=await(0,s.AU)(a.tradePair["0"],a.tradePair["1"]),U.log(_.value),ze.value=y.value.min_trade_price;for(let a of _.value.have)He.value+=parseFloat(a.leftHave);for(let a of _.value.want)Fe.value+=parseFloat(a.leftWant);const e=await d.h.get(`/api/settings/volume?q_key=${y.value.key}&b_key=${f.value.key}`);Ve.value=e.data}return(0,t.YP)(x,(e=>{be.value=null,he.value=null,ke.value=null})),(e,a)=>{const o=(0,t.up)("q-btn"),s=(0,t.up)("q-avatar"),i=(0,t.up)("q-header"),r=(0,t.up)("q-separator"),d=(0,t.up)("q-input"),c=(0,t.up)("q-linear-progress"),m=(0,t.up)("q-card-section"),p=(0,t.up)("q-card"),v=(0,t.up)("q-dialog"),w=(0,t.up)("q-item-section"),U=(0,t.up)("q-item"),ze=(0,t.up)("q-list"),Qe=(0,t.up)("q-card-actions"),Ze=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(v,{modelValue:(0,n.SU)(l).tradeModalVisible,"onUpdate:modelValue":a[6]||(a[6]=e=>(0,n.SU)(l).tradeModalVisible=e),persistent:"",maximized:"","transition-show":"slide-left","transition-hide":"slide-right",onBeforeShow:Ie,onBeforeHide:Pe},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{class:"bg-white"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{style:{"padding-right":"16px"},reveal:"",class:"text-white q-py-sm items-center flex justify-between"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(o,{label:"Назад","no-caps":"",icon:"las la-angle-left",unelevated:""},null,512),[[Ze]]),(0,t._)("div",b,[(0,t.Wm)(s,{size:"30px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(f).icon,alt:""},null,8,h)])),_:1}),(0,t._)("p",k,(0,u.zw)((0,n.SU)(f).name),1),S,(0,t.Wm)(s,{size:"30px",class:"q-mr-sm"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:(0,n.SU)(y).icon,alt:""},null,8,W)])),_:1}),(0,t._)("p",q,(0,u.zw)((0,n.SU)(y).name),1)])])),_:1}),z,(0,t.Wm)(m,{class:"q-pt-none"},{default:(0,t.w5)((()=>[(0,t._)("div",H,[(0,t._)("div",F,["OLF"!==(0,n.SU)(f).name?((0,t.wg)(),(0,t.iD)("p",V,(0,u.zw)(parseFloat((0,n.SU)(Ve).last_price).toFixed(4)),1)):((0,t.wg)(),(0,t.iD)("p",Q,(0,u.zw)(parseFloat((0,n.SU)(f).course/(0,n.SU)(y).course).toFixed(5)),1))]),(0,t._)("div",Z,[(0,t._)("div",C,[(0,t._)("div",j,[P,A,(0,t.Uk)(" "+(0,u.zw)(parseFloat((0,n.SU)(Ve).highest_price_24h).toFixed(2)),1),K,D,O,(0,t.Uk)(" "+(0,u.zw)(parseFloat((0,n.SU)(Ve).lowest_price_24h).toFixed(2)),1)]),(0,t._)("div",Y,[(0,t._)("p",T,"Объем за 24ч ("+(0,u.zw)((0,n.SU)(f).name)+")",1),(0,t.Uk)(" ~"+(0,u.zw)(parseFloat((0,n.SU)(Ve).base_volume_24).toFixed(2)),1),I,(0,t._)("p",B,"Объем за 24ч ("+(0,u.zw)((0,n.SU)(y).name)+")",1),(0,t.Uk)(" ~"+(0,u.zw)(parseFloat((0,n.SU)(Ve).quote_volume_24).toFixed(2)),1),L])])])]),(0,t.Wm)(r,{spaced:"md"}),(0,t._)("div",N,[(0,t.Wm)(o,{unelevated:"","no-caps":"",class:"bye-btn full-width q-py-sm",color:"buy"===(0,n.SU)(x)?"positive":"grey-5",onClick:a[0]||(a[0]=e=>(0,n.dq)(x)?x.value="buy":x="buy")},{default:(0,t.w5)((()=>[(0,t.Uk)(" Купить "+(0,u.zw)((0,n.SU)(f).name)+" за",1),$,(0,t.Uk)(" "+(0,u.zw)((0,n.SU)(y).name),1)])),_:1},8,["color"]),(0,t.Wm)(o,{color:"sell"===(0,n.SU)(x)?"negative":"grey-5",unelevated:"",class:"sell-btn full-width q-py-sm","no-caps":"",onClick:a[1]||(a[1]=e=>(0,n.dq)(x)?x.value="sell":x="sell")},{default:(0,t.w5)((()=>[(0,t.Uk)(" Продать "+(0,u.zw)((0,n.SU)(f).name)+" за",1),M,(0,t.Uk)(" "+(0,u.zw)((0,n.SU)(y).name),1)])),_:1},8,["color"])]),(0,t._)("p",E,(0,u.zw)("buy"===(0,n.SU)(x)?"Кол-во к покупке":"Кол-во к продаже"),1),(0,t.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(be),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,n.dq)(be)?be.value=e:be=e),onKeyup:je,type:"number"},{append:(0,t.w5)((()=>["sell"===(0,n.SU)(x)?((0,t.wg)(),(0,t.j4)(o,{key:0,onClick:a[2]||(a[2]=e=>(0,n.dq)(be)?be.value=(0,n.SU)(g)[(0,n.SU)(f).key][0][1]:be=(0,n.SU)(g)[(0,n.SU)(f).key][0][1]),size:"10px",flat:"",rounded:"",label:"Продать все"})):(0,t.kq)("",!0)])),_:1},8,["modelValue"]),R,(0,t.Wm)(d,{class:"q-mb-sm",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(he),"onUpdate:modelValue":a[4]||(a[4]=e=>(0,n.dq)(he)?he.value=e:he=e),onBlur:Ae,type:"number"},null,8,["modelValue"]),G,(0,t.Wm)(d,{class:"q-mb-md",rounded:"",dense:"",outlined:"",modelValue:(0,n.SU)(ke),"onUpdate:modelValue":a[5]||(a[5]=e=>(0,n.dq)(ke)?ke.value=e:ke=e),onKeyup:Ke,type:"number"},null,8,["modelValue"]),(0,t.Wm)(o,{rounded:"",loading:(0,n.SU)(We),label:"buy"===(0,n.SU)(x)?"Купить":"Продать",color:"buy"===(0,n.SU)(x)?"positive":"negative",class:"full-width q-mb-md",unelevated:"",size:"18px","no-caps":"",disable:!(0,n.SU)(be)||!(0,n.SU)(he)||!(0,n.SU)(ke),onClick:De},null,8,["loading","label","color","disable"]),(0,t._)("div",J,[(0,t._)("div",X,[(0,t._)("div",ee,[(0,t._)("div",ae,[le,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(_).have,((e,a)=>((0,t.wg)(),(0,t.j4)(c,{reverse:"",onClick:a=>Te(e),class:"flex items-center justify-between relative-position sell-pr",color:"red-2",value:e.leftHave/e.amountHave,size:"16px"},{default:(0,t.w5)((()=>[(0,t._)("p",te,(0,u.zw)(e.pairPrice),1),(0,t._)("p",ne,(0,u.zw)(e.leftHave),1)])),_:2},1032,["onClick","value"])))),256))])]),(0,t._)("div",ue,[(0,t._)("div",oe,[se,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(_).want,((e,a)=>((0,t.wg)(),(0,t.j4)(c,{onClick:a=>Ye(e),class:"flex items-center justify-between relative-position bg-white buy-pr",color:"light-green-11",value:e.leftWant/e.amountWant,size:"16px"},{default:(0,t.w5)((()=>[(0,t._)("p",ie,(0,u.zw)(e.pairPrice),1),(0,t._)("p",re,(0,u.zw)(e.leftWant),1)])),_:2},1032,["onClick","value"])))),256))])]),(0,t._)("div",de,[(0,t.Wm)(r),(0,t._)("div",ce,[me,(0,t._)("p",pe,(0,u.zw)((0,n.SU)(He)),1)])]),(0,t._)("div",ve,[(0,t.Wm)(r),(0,t._)("div",we,[ge,(0,t._)("p",_e,(0,u.zw)((0,n.SU)(Fe)),1)])])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(v,{modelValue:(0,n.SU)(Se),"onUpdate:modelValue":a[7]||(a[7]=e=>(0,n.dq)(Se)?Se.value=e:Se=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[fe])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ze,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[ye])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)("buy"===(0,n.SU)(x)?(0,n.SU)(ke):(0,n.SU)(be))+" "+(0,u.zw)("buy"===(0,n.SU)(x)?(0,n.SU)(y).name:(0,n.SU)(f).name),1)])),_:1})])),_:1}),(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[xe])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)("buy"===(0,n.SU)(x)?(0,n.SU)(be):(0,n.SU)(ke))+" "+(0,u.zw)("buy"===(0,n.SU)(x)?(0,n.SU)(f).name:(0,n.SU)(y).name),1)])),_:1})])),_:1}),(0,t.Wm)(U,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[Ue])),_:1}),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(qe).fee),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(Qe,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(o,{rounded:"","no-caps":"",unelevated:"",color:"grey-6",loading:(0,n.SU)(We),label:"Отмена"},null,8,["loading"]),[[Ze]]),(0,t.Wm)(o,{rounded:"","no-caps":"",unelevated:"",loading:(0,n.SU)(We),onClick:Oe,label:"buy"===(0,n.SU)(x)?"Купить":"Продать",color:"buy"===(0,n.SU)(x)?"positive":"negative"},null,8,["loading","label","color"])])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}});var ke=l(32074),Se=l(44458),We=l(16602),qe=l(24455),ze=l(61357),He=l(63190),Fe=l(50926),Ve=l(13119),Qe=l(8289),Ze=l(13246),Ce=l(490),je=l(76749),Pe=l(11821),Ae=l(62146),Ke=l(69984),De=l.n(Ke);const Oe=he,Ye=Oe;De()(he,"components",{QDialog:ke.Z,QCard:Se.Z,QHeader:We.Z,QBtn:qe.Z,QAvatar:ze.Z,QCardSection:He.Z,QSeparator:Fe.Z,QInput:Ve.Z,QLinearProgress:Qe.Z,QList:Ze.Z,QItem:Ce.Z,QItemSection:je.Z,QCardActions:Pe.Z}),De()(he,"directives",{ClosePopup:Ae.Z});var Te=l(17779);const Ie=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),Be={class:"flex items-center justify-start"},Le=["src"],Ne=["src"],$e={class:"q-pa-md"},Me={key:0},Ee=(0,t._)("span",{class:"text-weight-medium text-grey-9"},"за 24ч",-1),Re=(0,t.Uk)(" : "),Ge=(0,t._)("br",null,null,-1),Je=(0,t._)("span",{class:"text-weight-medium text-grey-9"},"за 7д",-1),Xe=(0,t.Uk)(" : "),ea=(0,t._)("br",null,null,-1),aa=(0,t._)("span",{class:"text-weight-medium text-grey-9"},"за 1м",-1),la=(0,t.Uk)(" : "),ta={class:"no-margin text-caption text-weight-bold"},na={class:"no-margin text-caption"},ua={class:"no-margin text-caption"},oa={class:"no-margin text-caption"},sa={class:"no-margin text-caption"},ia={class:"no-margin text-caption"},ra=(0,t.Uk)("Блок "),da=["href"],ca={class:"no-margin text-caption text-weight-bold"},ma={class:"no-margin text-caption"},pa={class:"no-margin text-caption"},va={class:"no-margin text-caption"},wa={class:"no-margin text-caption"},ga={class:"no-margin text-caption"},_a=(0,t.Uk)("Блок "),fa=["href"],ya={class:"no-margin text-caption text-weight-bold"},xa={class:"no-margin text-caption"},Ua={class:"no-margin text-caption"},ba={class:"no-margin text-caption"},ha={class:"no-margin text-caption"},ka={class:"no-margin text-caption"},Sa=(0,t.Uk)("Блок "),Wa=["href"],qa={class:"text-h6"},za={class:"caption q-mb-sm"},Ha={class:"caption q-mb-sm"},Fa={key:0,class:"no-margin text-negative text-center"},Va=(0,t.Uk)(" Подтверждение транзакции отмены ордера "),Qa=(0,t.Uk)("Комиссия"),Za={components:{TradeModal:Ye}},Ca=Object.assign(Za,{__name:"Exchange",setup(e){const a=(0,i.Q)(),l=(0,c.c)(),p=(0,m.s)(),v=(0,n.iH)(null),w=(0,n.iH)(!1),g=(0,n.iH)(!1),_=(0,n.iH)(null),f=(0,n.iH)(null),y=(0,n.iH)("market"),x=(0,n.iH)("active"),U=(0,n.iH)(null),b=(0,n.iH)({}),h=(0,n.iH)([]),k=(0,n.iH)([]),S=(0,n.iH)([]),W=(0,n.iH)([]),q=(0,n.iH)({});let z=(0,n.iH)({}),H=(0,n.iH)(!1),F=(0,n.iH)([]);async function V(e){g.value=!g.value;const l=await a.getKeyPair(),t=await r.era.tranBySeq(e);Te.log(t);const n=await r.era.tranRawCancelOrder(l,"name",t.signature,!0);z.value=n,Te.log(z.value),H.value=!0,g.value=!g.value}async function Q(){g.value=!g.value,Te.log(z.value.raw);const e=await r.era.broadcast64(z.value.raw);Te.log(e),H.value=!1,g.value=!g.value}function Z(){let e=K.value[v.value];U.value=_.value*e.price}function C(){let e=K.value[v.value];_.value=U.value*e.reversePrice}function j(){_.value=null,U.value=null,z.value={}}async function P(){g.value=!g.value;const e=await a.getKeyPair();let l=K.value[v.value];const t=l.have,n=_.value,u=l.want,o=U.value;Te.log("have",t),Te.log("want",u),Te.log("haveAmount",n),Te.log("wantAmount",o),await r.era.tranRawOrder(e,"name",t,n,u,o,!0).then((e=>{z.value=e,Te.log(z.value)})),g.value=!g.value}(0,t.YP)(f,(e=>{if(e){let a={};Te.log(D.value);let l=Object.keys(D.value).filter((a=>a.toUpperCase().includes(e.toUpperCase())));Te.log(l);for(let e of l)Te.log(D.value[e]),a[e]=D.value[e];q.value=a,Te.log(a)}else q.value={}})),(0,t.YP)(_,(e=>{e>Y.value[K.value[v.value].have][0][1]&&(_.value=Y.value[K.value[v.value].have][0][1],U.value=0,C())}));const A=(0,t.Fl)((()=>a.assets)),K=(0,t.Fl)((()=>a.marketExchange)),D=(0,t.Fl)((()=>a.trade_pairs)),O=(0,t.Fl)((()=>l.addresses[l.currentAddressIdx].address)),Y=((0,t.Fl)((()=>l.assets)),(0,t.Fl)((()=>l.balances))),T=(0,t.Fl)((()=>Object.keys(Y.value)));return(0,t.wF)((async()=>{p.toggleLoadingState();const e=await d.h.get("/api/settings/volumes");Te.log(e.data),F.value=e.data,await a.getMarketExchangeOrders(),await a.setTradePairs(),h.value=await(0,s.rK)(O.value);let l=[];for(let a of h.value)A.value.find((e=>e.key===a.haveAssetKey))&&A.value.find((e=>e.key===a.wantAssetKey))&&l.push(a);Te.log(l.filter((e=>1===e.status))),k.value=l.filter((e=>1===e.status||2===e.status)),S.value=l.filter((e=>3===e.status)),W.value=l.filter((e=>4===e.status)),p.toggleLoadingState()})),(e,a)=>{const l=(0,t.up)("page-header"),s=(0,t.up)("q-tab"),i=(0,t.up)("q-tabs"),r=(0,t.up)("q-separator"),d=(0,t.up)("q-avatar"),c=(0,t.up)("q-icon"),m=(0,t.up)("q-item-section"),h=(0,t.up)("q-item-label"),O=(0,t.up)("q-item"),I=(0,t.up)("q-list"),B=(0,t.up)("q-scroll-area"),L=(0,t.up)("q-tab-panel"),N=(0,t.up)("q-input"),$=(0,t.up)("q-badge"),M=(0,t.up)("q-btn"),E=(0,t.up)("q-tab-panels"),R=(0,t.up)("q-card-section"),G=(0,t.up)("q-card-actions"),J=(0,t.up)("q-card"),X=(0,t.up)("q-dialog"),ee=(0,t.up)("page-body"),ae=(0,t.up)("page"),le=(0,t.Q2)("touch-swipe"),te=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(ae,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ee,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l),Ie,(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{"no-caps":"",class:"bg-white",name:"market",label:"Биржа"}),(0,t.Wm)(s,{"no-caps":"",class:"bg-white",name:"own_orders",label:"Мои оффера"})])),_:1},8,["modelValue"])),[[le]]),(0,t.Wm)(r),(0,t.Wm)(E,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=e=>y.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{name:"exchange",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(B,{style:{height:"85vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)((0,n.SU)(K),((e,a)=>(0,t.wy)(((0,t.wg)(),(0,t.j4)(O,{clickable:"",onClick:e=>(v.value=a,w.value=!0),key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("div",Be,[(0,t.Wm)(d,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`/asset_icons/${(0,n.SU)(A).find((a=>a.key===e.have)).icon}`},null,8,Le)])),_:2},1024),(0,t.Wm)(c,{name:"las la-long-arrow-alt-right",size:"30px"}),(0,t.Wm)(d,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`/asset_icons/${(0,n.SU)(A).find((a=>a.key===e.want)).icon}`},null,8,Ne)])),_:2},1024)])])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(A).find((a=>a.key===e.have)).name)+"/"+(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.want)).name),1)])),_:2},1024),(0,t.Wm)(h,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)(" 1 / "+(0,u.zw)(e.price),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[o.F8,(0,n.SU)(T).includes(String(e.have))]]))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(L,{name:"market",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t._)("div",$e,[(0,t.Wm)(N,{dense:"",outlined:"",rounded:"",modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e),label:"Поиск"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"search"})])),_:1},8,["modelValue"])]),(0,t.Wm)(r),(0,t.Wm)(B,{style:{height:"75vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(Object.keys(q.value).length>0?q.value:(0,n.SU)(D),((e,a)=>((0,t.wg)(),(0,t.j4)(O,{clickable:"",onClick:a=>(b.value=e,(0,n.SU)(p).toggleTradeModalVisible()),key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"text-weight-medium"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(a.replace("_"," / ")),1)])),_:2},1024),(0,t.Wm)(m,{class:"text-caption"},{default:(0,t.w5)((()=>[(0,n.SU)(F).filter((e=>e.pair===a)).length>0?((0,t.wg)(),(0,t.iD)("span",Me,[Ee,Re,(0,t.Wm)($,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat((0,n.SU)(F).find((e=>e.pair===a)).base_volume_24).toFixed(2))+" / "+(0,u.zw)(parseFloat((0,n.SU)(F).find((e=>e.pair===a)).quote_volume_24).toFixed(2)),1)])),_:2},1024),Ge,Je,Xe,(0,t.Wm)($,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat((0,n.SU)(F).find((e=>e.pair===a)).base_volume_1w).toFixed(2))+" / "+(0,u.zw)(parseFloat((0,n.SU)(F).find((e=>e.pair===a)).quote_volume_1w).toFixed(2)),1)])),_:2},1024),ea,aa,la,(0,t.Wm)($,{rounded:"",color:"grey-3","text-color":"dark"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat((0,n.SU)(F).find((e=>e.pair===a)).base_volume_1m).toFixed(2))+" / "+(0,u.zw)(parseFloat((0,n.SU)(F).find((e=>e.pair===a)).quote_volume_1m).toFixed(2)),1)])),_:2},1024)])):(0,t.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(L,{name:"own_orders",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(i,{modelValue:x.value,"onUpdate:modelValue":a[2]||(a[2]=e=>x.value=e),dense:"",align:"justify"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{"no-caps":"",class:"bg-white text-info",name:"active",label:"Активные"}),(0,t.Wm)(s,{"no-caps":"",class:"bg-white text-positive",name:"done",label:"Исполненные"}),(0,t.Wm)(s,{"no-caps":"",class:"bg-white text-negative",name:"cancel",label:"Отмененные"})])),_:1},8,["modelValue"])),[[le]]),(0,t.Wm)(r),(0,t.Wm)(B,{style:{height:"83vh"}},{default:(0,t.w5)((()=>[(0,t.Wm)(E,{modelValue:x.value,"onUpdate:modelValue":a[3]||(a[3]=e=>x.value=e),animated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(L,{name:"active",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(k.value,((e,a)=>((0,t.wg)(),(0,t.j4)(O,{key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",ta,(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.wantAssetKey)).name)+" / "+(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.haveAssetKey)).name),1),(0,t._)("p",na,"Кол-во "+(0,u.zw)(e.amountHave),1),(0,t._)("p",ua,"Цена "+(0,u.zw)(e.price),1),(0,t._)("p",oa,"Итого "+(0,u.zw)(e.amountWant),1),(0,t._)("p",sa,"Осталось "+(0,u.zw)(e.leftWant),1),(0,t._)("p",ia,[ra,(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.seqNo}&lang=ru`},(0,u.zw)(e.seqNo),9,da)])])),_:2},1024),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(M,{rounded:"",color:"negative",loading:g.value,onClick:a=>V(e.seqNo),unelevated:"",outline:"","no-caps":"",size:"12px",label:"Отменить оффер"},null,8,["loading","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(L,{name:"done",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(S.value,((e,a)=>((0,t.wg)(),(0,t.j4)(O,{key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",ca,(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.wantAssetKey)).name)+" / "+(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.haveAssetKey)).name),1),(0,t._)("p",ma,"Кол-во "+(0,u.zw)(e.amountHave),1),(0,t._)("p",pa,"Цена "+(0,u.zw)(e.price),1),(0,t._)("p",va,"Итого "+(0,u.zw)(e.amountWant),1),(0,t._)("p",wa,"Осталось "+(0,u.zw)(e.leftWant),1),(0,t._)("p",ga,[_a,(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.seqNo}&lang=ru`},(0,u.zw)(e.seqNo),9,fa)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1}),(0,t.Wm)(L,{name:"cancel",class:"no-padding"},{default:(0,t.w5)((()=>[(0,t.Wm)(I,{separator:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(W.value,((e,a)=>((0,t.wg)(),(0,t.j4)(O,{key:a},{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t._)("p",ya,(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.wantAssetKey)).name)+" / "+(0,u.zw)((0,n.SU)(A).find((a=>a.key===e.haveAssetKey)).name),1),(0,t._)("p",xa,"Кол-во "+(0,u.zw)(e.amountHave),1),(0,t._)("p",Ua,"Цена "+(0,u.zw)(e.price),1),(0,t._)("p",ba,"Итого "+(0,u.zw)(e.amountWant),1),(0,t._)("p",ha,"Осталось "+(0,u.zw)(e.leftWant),1),(0,t._)("p",ka,[Sa,(0,t._)("a",{target:"_blank",href:`https://scan.rupay.pro/index/blockexplorer.html?tx=${e.seqNo}&lang=ru`},(0,u.zw)(e.seqNo),9,Wa)])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(X,{modelValue:w.value,"onUpdate:modelValue":a[7]||(a[7]=e=>w.value=e),persistent:"","transition-show":"scale","transition-hide":"scale",onBeforeShow:j},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[(0,t._)("div",qa,[(0,t.Uk)("Обмен "+(0,u.zw)((0,n.SU)(A).find((e=>e.key===(0,n.SU)(K)[v.value].have)).name)+" ",1),(0,t.Wm)(c,{name:"las la-long-arrow-alt-right",size:"30px"}),(0,t.Uk)(" "+(0,u.zw)((0,n.SU)(A).find((e=>e.key===(0,n.SU)(K)[v.value].want)).name),1)])])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t._)("p",za,"Отдам "+(0,u.zw)((0,n.SU)(A).find((e=>e.key===(0,n.SU)(K)[v.value].have)).name)+" (баланс "+(0,u.zw)((0,n.SU)(Y)[(0,n.SU)(K)[v.value].have][0][1])+") ",1),(0,t.Wm)(N,{class:"q-mb-md",dense:"",outlined:"",autofocus:"",modelValue:_.value,"onUpdate:modelValue":a[5]||(a[5]=e=>_.value=e),onKeyup:Z,type:"number"},null,8,["modelValue"]),(0,t._)("p",Ha,"Получу "+(0,u.zw)((0,n.SU)(A).find((e=>e.key===(0,n.SU)(K)[v.value].want)).name),1),(0,t.Wm)(N,{class:"q-mb-md",dense:"",outlined:"",modelValue:U.value,"onUpdate:modelValue":a[6]||(a[6]=e=>U.value=e),onKeyup:C,type:"number"},null,8,["modelValue"]),(0,n.SU)(z).raw?((0,t.wg)(),(0,t.iD)("p",Fa,"Комиссия : "+(0,u.zw)((0,n.SU)(z).fee),1)):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(G,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(M,{"no-caps":"",unelevated:"",color:"negative",loading:g.value,outline:"",label:"Отмена"},null,8,["loading"]),[[te]]),(0,n.SU)(z).raw?((0,t.wg)(),(0,t.j4)(M,{key:1,"no-caps":"",unelevated:"",color:"positive",loading:g.value,onClick:Q,label:"Обменять"},null,8,["loading"])):((0,t.wg)(),(0,t.j4)(M,{key:0,"no-caps":"",unelevated:"",color:"positive",disable:!_.value||!U.value,loading:g.value,onClick:P,label:"Запросить комиссию"},null,8,["disable","loading"]))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)((0,n.SU)(Ye),{"trade-pair":b.value},null,8,["trade-pair"]),(0,t.Wm)(X,{modelValue:(0,n.SU)(H),"onUpdate:modelValue":a[8]||(a[8]=e=>(0,n.dq)(H)?H.value=e:H=e),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(J,{style:{width:"100%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(R,{class:"bg-primary text-white"},{default:(0,t.w5)((()=>[Va])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,{separator:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[Qa])),_:1}),(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)((0,n.SU)(z).fee),1)])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(G,{align:"right"},{default:(0,t.w5)((()=>[(0,t.wy)((0,t.Wm)(M,{"no-caps":"",unelevated:"",color:"grey-6",loading:g.value,label:"Отмена"},null,8,["loading"]),[[te]]),(0,t.Wm)(M,{"no-caps":"",unelevated:"",loading:g.value,onClick:Q,label:"Ок",color:"positive"},null,8,["loading"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})}}});var ja=l(47817),Pa=l(70900),Aa=l(89800),Ka=l(84106),Da=l(66663),Oa=l(22857),Ya=l(33115),Ta=l(20990),Ia=l(64871);const Ba=Ca,La=Ba;De()(Ca,"components",{QTabs:ja.Z,QTab:Pa.Z,QSeparator:Fe.Z,QTabPanels:Aa.Z,QTabPanel:Ka.Z,QScrollArea:Da.Z,QList:Ze.Z,QItem:Ce.Z,QItemSection:je.Z,QAvatar:ze.Z,QIcon:Oa.Z,QItemLabel:Ya.Z,QInput:Ve.Z,QBadge:Ta.Z,QBtn:qe.Z,QDialog:ke.Z,QCard:Se.Z,QCardSection:He.Z,QCardActions:Pe.Z}),De()(Ca,"directives",{TouchSwipe:Ia.Z,ClosePopup:Ae.Z})}}]);