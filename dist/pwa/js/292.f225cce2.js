"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[292],{83292:(l,e,a)=>{a.r(e),a.d(e,{default:()=>Ol});var n=a(59835),t=a(60499),u=a(86970),s=a(23459),o=a(91569),r=a(87270),i=a(31655);const d=(0,n._)("div",{class:"",style:{height:"50px"}},null,-1),_={key:0},p=(0,n.Uk)("Покупатель "),m={key:0,class:"text-positive"},c={key:1,class:"text-negative"},w=(0,n._)("br",null,null,-1),b=(0,n._)("strong",null,"Дата размещения",-1),g=(0,n._)("br",null,null,-1),f=(0,n._)("strong",null,"Обьем",-1),k=(0,n._)("br",null,null,-1),v=(0,n._)("strong",null,"Курс",-1),U=(0,n._)("br",null,null,-1),y=(0,n._)("strong",null,"Минимальный объем",-1),W=(0,n._)("br",null,null,-1),h=(0,n._)("strong",null,"Тип оплаты",-1),z=(0,n.Uk)(":"),D=(0,n._)("br",null,null,-1),$=(0,n._)("br",null,null,-1),x=(0,n._)("strong",null,"Условия",-1),q=(0,n.Uk)(":"),S=(0,n._)("br",null,null,-1),C=(0,n._)("br",null,null,-1),V=(0,n._)("br",null,null,-1),Q=(0,n.Uk)("Покупатель "),Z={key:0,class:"text-positive"},H={key:1,class:"text-negative"},j=(0,n._)("br",null,null,-1),Y=(0,n._)("strong",null,"Дата размещения",-1),K=(0,n._)("br",null,null,-1),F=(0,n._)("strong",null,"Обьем",-1),L=(0,n._)("br",null,null,-1),P=(0,n._)("strong",null,"Курс",-1),T=(0,n._)("br",null,null,-1),I=(0,n._)("strong",null,"Минимальный объем",-1),A=(0,n._)("br",null,null,-1),B=(0,n._)("strong",null,"Тип оплаты",-1),E=(0,n.Uk)(":"),G=(0,n._)("br",null,null,-1),J=(0,n._)("br",null,null,-1),M=(0,n._)("strong",null,"Условия",-1),N=(0,n.Uk)(":"),O=(0,n._)("br",null,null,-1),R=(0,n._)("br",null,null,-1),X=(0,n._)("br",null,null,-1),ll=(0,n._)("p",{class:"text-bold"},"Мои предложения",-1),el=(0,n._)("strong",null,"Дата размещения",-1),al=(0,n._)("br",null,null,-1),nl=(0,n._)("strong",null,"Обьем",-1),tl=(0,n._)("br",null,null,-1),ul=(0,n._)("strong",null,"Курс",-1),sl=(0,n._)("br",null,null,-1),ol=(0,n._)("strong",null,"Минимальный объем",-1),rl=(0,n._)("br",null,null,-1),il=(0,n._)("strong",null,"Тип оплаты",-1),dl=(0,n.Uk)(":"),_l=(0,n._)("br",null,null,-1),pl=(0,n._)("br",null,null,-1),ml=(0,n._)("strong",null,"Условия",-1),cl=(0,n.Uk)(":"),wl=(0,n._)("br",null,null,-1),bl=(0,n._)("br",null,null,-1),gl=(0,n._)("br",null,null,-1),fl={class:"q-gutter-md"},kl=(0,n._)("p",{class:"text-bold"},"Мои сделки",-1),vl=(0,n._)("strong",null,"Дата создания сделки",-1),Ul=(0,n._)("br",null,null,-1),yl=(0,n._)("br",null,null,-1),Wl=(0,n._)("strong",null,"Объем в рублях",-1),hl=(0,n._)("br",null,null,-1),zl=(0,n._)("br",null,null,-1),Dl=(0,n._)("p",{class:"text-bold"},"Активные сделки",-1),$l=(0,n._)("strong",null,"Дата создания сделки",-1),xl=(0,n._)("br",null,null,-1),ql=(0,n._)("br",null,null,-1),Sl=(0,n._)("strong",null,"Объем в рублях",-1),Cl=(0,n._)("br",null,null,-1),Vl=(0,n._)("br",null,null,-1),Ql={key:1,class:"relative-position full-height"},Zl={__name:"Index",setup(l){let e=a(24409);const Zl=(0,s.Q)(),Hl=(0,i.T)(),jl=(0,t.iH)("sell"),Yl=(0,t.iH)("offers"),Kl=(0,t.iH)(!1),Fl=(0,t.iH)({name:""});(0,n.YP)(Fl,(async l=>{await Gl()}));const Ll=(0,n.Fl)((()=>e.orderBy(Zl.assets,["id"]))),Pl=(0,n.Fl)((()=>Hl.offers)),Tl=(0,n.Fl)((()=>Hl.own_offers)),Il=(0,n.Fl)((()=>Hl.own_trades)),Al=(0,n.Fl)((()=>Hl.all_trades)),Bl=(0,n.Fl)((()=>Hl.user));async function El(l){const e=await o.h.post("/api/p2p/delete_offer",{wallet:Bl.value.wallet,id:l});e.data.success?(0,r.d)("positive",e.data.message):(0,r.d)("negative",e.data.message),await Hl.get_own_offers()}async function Gl(){await Hl.getAllData(Fl.value.id)}return(0,n.wF)((async()=>{Kl.value=!Kl,Fl.value=Ll.value[0],await Gl(),Kl.value=!Kl})),(l,e)=>{const a=(0,n.up)("page-header"),s=(0,n.up)("q-tab"),o=(0,n.up)("q-tabs"),r=(0,n.up)("q-separator"),i=(0,n.up)("q-select"),Zl=(0,n.up)("q-inner-loading"),Hl=(0,n.up)("q-btn"),Gl=(0,n.up)("q-card-section"),Jl=(0,n.up)("q-card"),Ml=(0,n.up)("q-expansion-item"),Nl=(0,n.up)("q-list"),Ol=(0,n.up)("q-scroll-area"),Rl=(0,n.up)("q-tab-panel"),Xl=(0,n.up)("q-tab-panels"),le=(0,n.up)("page-body"),ee=(0,n.up)("page");return(0,n.wg)(),(0,n.j4)(ee,null,{default:(0,n.w5)((()=>[(0,n.Wm)(le,{class:""},{default:(0,n.w5)((()=>[(0,n.Wm)(a),d,(0,t.SU)(Bl).is_p2p_blocked?((0,n.wg)(),(0,n.iD)("div",Ql,[(0,n.Wm)(Zl,{class:"z-max",showing:"",label:"Доступ на P2P вам временно закрыт",color:"negative","label-class":"text-negative","label-style":"font-size: 1.1em"})])):((0,n.wg)(),(0,n.iD)("div",_,[(0,n.Wm)(o,{modelValue:Yl.value,"onUpdate:modelValue":e[0]||(e[0]=l=>Yl.value=l),align:"justify","narrow-indicator":""},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{"no-caps":"",class:"bg-white text-primary",name:"offers",label:"P2P"}),(0,n.Wm)(s,{"no-caps":"",class:"bg-white text-primary",name:"own",label:"Мои предложения и сделки"}),(0,t.SU)(Bl).is_p2p_admin?((0,n.wg)(),(0,n.j4)(s,{key:0,"no-caps":"",class:"bg-white text-negative",name:"admin",label:"Раздел админа"})):(0,n.kq)("",!0)])),_:1},8,["modelValue"]),(0,n.Wm)(r),(0,n.Wm)(Xl,{modelValue:Yl.value,"onUpdate:modelValue":e[6]||(e[6]=l=>Yl.value=l),animated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Rl,{name:"offers",class:"q-pa-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{outlined:"",rounded:"",options:(0,t.SU)(Ll),modelValue:Fl.value,"onUpdate:modelValue":e[1]||(e[1]=l=>Fl.value=l),"option-label":"name",class:"q-mb-md",behavior:"menu",label:"Выберите актив"},null,8,["options","modelValue"]),(0,n.Wm)(o,{modelValue:jl.value,"onUpdate:modelValue":e[2]||(e[2]=l=>jl.value=l),align:"justify"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{"no-caps":"",class:"bg-white text-negative",name:"sell",label:"Продажа"}),(0,n.Wm)(s,{"no-caps":"",class:"bg-white text-positive",name:"buy",label:"Покупка"})])),_:1},8,["modelValue"]),(0,n.Wm)(r),(0,n.Wm)(Xl,{modelValue:jl.value,"onUpdate:modelValue":e[3]||(e[3]=l=>jl.value=l),animated:""},{default:(0,n.w5)((()=>[(0,n.Wm)(Rl,{name:"buy",class:"no-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)(Ol,{style:{height:"calc(100vh - 400px)"}},{default:(0,n.w5)((()=>[(0,n.Wm)(Zl,{class:"z-max",showing:Kl.value,color:"primary"},null,8,["showing"]),(0,n.Wm)(Nl,{separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(Pl).filter((l=>!l.is_sell)),(e=>((0,n.wg)(),(0,n.j4)(Ml,{clickable:"",group:"buy",label:`Объем ${e.amount} из ${e.start_amount}`,key:e.id,caption:`Курс ${e.course}`},{default:(0,n.w5)((()=>[(0,n.Wm)(Jl,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Gl,null,{default:(0,n.w5)((()=>[(0,n._)("strong",null,[p,e.user.is_online?((0,n.wg)(),(0,n.iD)("span",m,"в сети")):((0,n.wg)(),(0,n.iD)("span",c,"не в сети"))]),w,b,(0,n.Uk)(": "+(0,u.zw)(new Date(e.created_at).toLocaleDateString()),1),g,f,(0,n.Uk)(": "+(0,u.zw)(e.amount)+" из "+(0,u.zw)(e.start_amount),1),k,v,(0,n.Uk)(": "+(0,u.zw)(e.course),1),U,y,(0,n.Uk)(": "+(0,u.zw)(e.min_amount),1),W,h,z,D,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.payment_types,(l=>((0,n.wg)(),(0,n.iD)("span",{key:l.id},(0,u.zw)(l.label)+"  ",1)))),128)),$,x,q,S,(0,n.Uk)(" "+(0,u.zw)(e.rules),1),C,V,(0,n.Wm)(Hl,{color:"negative",disable:e.user.wallet===(0,t.SU)(Bl).wallet,onClick:a=>l.$router.push({name:"p2p_offer",params:{offer_id:e.id}}),rounded:"","no-caps":"",unelevated:"",class:"full-width",label:"Продать"},null,8,["disable","onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","caption"])))),128))])),_:1})])),_:1})])),_:1}),(0,n.Wm)(Rl,{name:"sell",class:"no-padding"},{default:(0,n.w5)((()=>[(0,n.Wm)(Ol,{style:{height:"calc(100vh - 400px)"}},{default:(0,n.w5)((()=>[(0,n.Wm)(Zl,{class:"z-max",showing:Kl.value,color:"primary"},null,8,["showing"]),(0,n.Wm)(Nl,{separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(Pl).filter((l=>l.is_sell)),(e=>((0,n.wg)(),(0,n.j4)(Ml,{clickable:"",group:"sell",key:e.id,label:`Объем ${e.amount} из ${e.start_amount}`,caption:`Курс ${e.course}`},{default:(0,n.w5)((()=>[(0,n.Wm)(Jl,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Gl,null,{default:(0,n.w5)((()=>[(0,n._)("strong",null,[Q,e.user.is_online?((0,n.wg)(),(0,n.iD)("span",Z,"в сети")):((0,n.wg)(),(0,n.iD)("span",H,"не в сети"))]),j,Y,(0,n.Uk)(": "+(0,u.zw)(new Date(e.created_at).toLocaleDateString()),1),K,F,(0,n.Uk)(": "+(0,u.zw)(e.amount)+" из "+(0,u.zw)(e.start_amount),1),L,P,(0,n.Uk)(": "+(0,u.zw)(e.course)+" руб",1),T,I,(0,n.Uk)(": "+(0,u.zw)(e.min_amount),1),A,B,E,G,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.payment_types,(l=>((0,n.wg)(),(0,n.iD)("span",{key:l.id},(0,u.zw)(l.label)+"  ",1)))),128)),J,M,N,O,(0,n.Uk)(" "+(0,u.zw)(e.rules),1),R,X,(0,n.Wm)(Hl,{color:"positive",disable:e.user.wallet===(0,t.SU)(Bl).wallet,onClick:a=>l.$router.push({name:"p2p_offer",params:{offer_id:e.id}}),rounded:"","no-caps":"",unelevated:"",class:"full-width",label:"Купить"},null,8,["disable","onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","caption"])))),128))])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),(0,n.Wm)(Rl,{name:"own",class:"q-pa-md"},{default:(0,n.w5)((()=>[(0,n.Wm)(Hl,{label:"Создать предложение на покупку",onClick:e[4]||(e[4]=e=>l.$router.push({name:"p2p_new_buy_offer"})),rounded:"",unelevated:"","no-caps":"",color:"positive",class:"full-width q-mb-md q-py-md"}),(0,n.Wm)(Hl,{label:"Создать предложение на продажу",onClick:e[5]||(e[5]=e=>l.$router.push({name:"p2p_new_sell_offer"})),rounded:"",unelevated:"","no-caps":"",color:"negative",class:"full-width q-py-md"}),(0,n.Wm)(r,{spaced:"lg"}),ll,(0,n.Wm)(Nl,{separator:"",class:"q-mb-md"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(Tl),(l=>((0,n.wg)(),(0,n.j4)(Ml,{clickable:"",group:"offers",label:`#${l.id} - На ${l.is_sell?"продажу":"покупку"} ${l.amount} ${l.asset.name}`,key:l.id,caption:`Курс ${l.course}`},{default:(0,n.w5)((()=>[(0,n.Wm)(Jl,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Gl,null,{default:(0,n.w5)((()=>[el,(0,n.Uk)(": "+(0,u.zw)(new Date(l.created_at).toLocaleDateString()),1),al,nl,(0,n.Uk)(": "+(0,u.zw)(l.amount),1),tl,ul,(0,n.Uk)(": "+(0,u.zw)(l.course)+" руб",1),sl,ol,(0,n.Uk)(": "+(0,u.zw)(l.min_amount),1),rl,il,dl,_l,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.payment_types,(l=>((0,n.wg)(),(0,n.iD)("span",{key:l.id},(0,u.zw)(l.label)+"  ",1)))),128)),pl,ml,cl,wl,(0,n.Uk)(" "+(0,u.zw)(l.rules),1),bl,gl,(0,n._)("div",fl,[(0,n.Wm)(Hl,{color:"warning",disable:"",rounded:"","no-caps":"",unelevated:"",label:"Редактировать"}),(0,n.Wm)(Hl,{color:"negative",onClick:e=>El(l.id),rounded:"","no-caps":"",unelevated:"",label:"Удалить"},null,8,["onClick"])])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","caption"])))),128))])),_:1}),kl,(0,n.Wm)(Nl,{separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(Il),(e=>((0,n.wg)(),(0,n.j4)(Ml,{clickable:"",group:"offers",label:`# ${e.id} - ${e.offer.is_sell?e.opponent.wallet===(0,t.SU)(Bl).wallet?"Покупка":"Продажа":e.opponent.wallet===(0,t.SU)(Bl).wallet?"Продажа":"Покупка"}\n                                ${e.asset_amount} ${e.offer.asset.name} по офферу #${e.offer.id}`,"header-class":`${e.offer.is_sell?e.opponent.wallet===(0,t.SU)(Bl).wallet?"text-positive":"text-negative":e.opponent.wallet===(0,t.SU)(Bl).wallet?"text-negative":"text-positive"}\n                                ${e.asset_amount} ${e.offer.asset.name}`,key:e.id,caption:`Сумма сделки в рублях ${e.fiat_amount} | Статус сделки: ${e.status.label}`},{default:(0,n.w5)((()=>[(0,n.Wm)(Jl,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Gl,null,{default:(0,n.w5)((()=>[vl,(0,n.Uk)(": "+(0,u.zw)(new Date(e.created_at).toLocaleDateString()),1),Ul,(0,n._)("strong",null,"Обьем в "+(0,u.zw)(e.offer.asset.name),1),(0,n.Uk)(": "+(0,u.zw)(e.asset_amount)+" ",1),yl,Wl,(0,n.Uk)(": "+(0,u.zw)(e.fiat_amount),1),hl,zl,(0,n.Wm)(Hl,{dense:"",class:"full-width q-py-md",color:"primary","no-caps":"",unelevated:"",onClick:a=>l.$router.push({name:"p2p_trade",params:{uid:e.UID}}),rounded:"",label:"В сделку"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class","caption"])))),128))])),_:1})])),_:1}),(0,n.Wm)(Rl,{name:"admin",class:"q-pa-md"},{default:(0,n.w5)((()=>[Dl,(0,n.Wm)(Nl,{separator:""},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,t.SU)(Al).filter((l=>l.in_progress)),(e=>((0,n.wg)(),(0,n.j4)(Ml,{clickable:"",group:"offers",label:`№${e.id} Cтатус: ${e.status.label}`,"header-class":`text-${e.status.color}`,key:e.id},{default:(0,n.w5)((()=>[(0,n.Wm)(Jl,null,{default:(0,n.w5)((()=>[(0,n.Wm)(Gl,null,{default:(0,n.w5)((()=>[$l,(0,n.Uk)(": "+(0,u.zw)(new Date(e.created_at).toLocaleDateString()),1),xl,(0,n._)("strong",null,"Обьем в "+(0,u.zw)(e.offer.asset.name),1),(0,n.Uk)(": "+(0,u.zw)(e.asset_amount)+" ",1),ql,Sl,(0,n.Uk)(": "+(0,u.zw)(e.fiat_amount),1),Cl,Vl,(0,n.Wm)(Hl,{dense:"",class:"full-width q-py-md",color:"primary","no-caps":"",unelevated:"",onClick:a=>l.$router.push({name:"p2p_trade",params:{uid:e.UID}}),rounded:"",label:"В сделку"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)])),_:2},1032,["label","header-class"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"])]))])),_:1})])),_:1})}}};var Hl=a(47817),jl=a(70900),Yl=a(50926),Kl=a(89800),Fl=a(84106),Ll=a(18401),Pl=a(66663),Tl=a(60854),Il=a(13246),Al=a(61123),Bl=a(44458),El=a(63190),Gl=a(24455),Jl=a(69984),Ml=a.n(Jl);const Nl=Zl,Ol=Nl;Ml()(Zl,"components",{QTabs:Hl.Z,QTab:jl.Z,QSeparator:Yl.Z,QTabPanels:Kl.Z,QTabPanel:Fl.Z,QSelect:Ll.Z,QScrollArea:Pl.Z,QInnerLoading:Tl.Z,QList:Il.Z,QExpansionItem:Al.Z,QCard:Bl.Z,QCardSection:El.Z,QBtn:Gl.Z})}}]);