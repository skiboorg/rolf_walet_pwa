"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[575],{25575:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Ft});var a=l(59835),s=l(60499),n=l(86970),o=l(91569),r=l(18910),p=l(23459),i=l(98030),u=l(31655),d=l(87270),_=l(9991),w=l(17779);const c=(0,a._)("div",{class:"",style:{height:"50px"}},null,-1),f={key:0,class:"text-bold text-center text-primary"},m={key:1},b={key:2},g={key:0},U={key:0,class:"q-mb-md"},y=["innerHTML"],v={key:1},x={class:"text-bold"},k={class:"text-bold"},S=(0,a.Uk)("  "),h={key:0},z={key:1},$={class:"text-bold"},q={class:"text-bold"},D={class:"text-bold"},W=(0,a._)("br",null,null,-1),C={class:"text-bold text-negative text-uppercase"},j=(0,a._)("br",null,null,-1),H={class:"text-bold"},Q=(0,a._)("br",null,null,-1),V=(0,a._)("br",null,null,-1),Z={class:"text-bold"},T=(0,a._)("br",null,null,-1),I={class:"text-bold"},A=(0,a._)("br",null,null,-1),F={key:2},B=["href"],K=(0,a._)("br",null,null,-1),P=(0,a._)("br",null,null,-1),R={key:3},J=["href"],L=(0,a._)("br",null,null,-1),M=(0,a._)("br",null,null,-1),N={key:0},O={key:0},E={key:1},G={key:0},X={class:"text-bold"},Y={key:1},ee={class:"text-bold text-negative text-center text-justify"},te={key:2},le=["href"],ae={class:"text-bold"},se={key:0},ne={class:"text-bold"},oe=(0,a._)("br",null,null,-1),re=(0,a._)("br",null,null,-1),pe={class:"text-caption text-bold text-negative text-justify"},ie={key:3},ue={key:0},de=["href"],_e={key:4},we=["href"],ce={class:"text-bold"},fe={key:1},me={class:"text-negative text-center items-center"},be={class:"text-bold"},ge={class:"text-bold"},Ue=(0,a.Uk)("  "),ye={key:0},ve={key:1},xe={class:"text-bold"},ke={class:"text-bold"},Se={class:"text-bold"},he=(0,a._)("br",null,null,-1),ze={class:"text-bold text-negative text-uppercase"},$e=(0,a._)("br",null,null,-1),qe={class:"text-bold"},De=(0,a._)("br",null,null,-1),We=(0,a._)("br",null,null,-1),Ce={class:"text-bold"},je=(0,a._)("br",null,null,-1),He={class:"text-bold"},Qe=(0,a._)("br",null,null,-1),Ve={key:2},Ze=["href"],Te=(0,a._)("br",null,null,-1),Ie=(0,a._)("br",null,null,-1),Ae={key:3},Fe=["href"],Be=(0,a._)("br",null,null,-1),Ke=(0,a._)("br",null,null,-1),Pe={key:2},Re=(0,a._)("p",{class:"text-bold text-center text-positive"},"Админ часть",-1),Je=(0,a._)("br",null,null,-1),Le=(0,a._)("br",null,null,-1),Me=(0,a._)("br",null,null,-1),Ne=(0,a._)("br",null,null,-1),Oe=(0,a._)("br",null,null,-1),Ee=(0,a._)("br",null,null,-1),Ge=(0,a._)("br",null,null,-1),Xe=(0,a.Uk)(" Создатель оффера: "),Ye=["href"],et=(0,a._)("br",null,null,-1),tt=(0,a.Uk)(),lt=(0,a._)("br",null,null,-1),at=(0,a.Uk)(" Создатель сделки: "),st=["href"],nt=(0,a._)("br",null,null,-1),ot={key:0},rt=["href"],pt={class:"text-bold"},it={key:1},ut=["href"],dt={class:"text-bold"},_t={key:2},wt=["href"],ct=(0,a._)("br",null,null,-1),ft=(0,a._)("br",null,null,-1),mt={key:3},bt=["href"],gt={class:"text-bold"},Ut={class:"full-height"},yt=(0,a._)("br",null,null,-1),vt={key:0},xt=["href"],kt={class:"flex items-center"},St={__name:"Trade",setup(e){const t=new Audio("notify.mp3"),St=(0,r.yj)(),ht=(0,r.tv)(),{EraChain:zt}=l(99407),$t=(0,p.Q)(),qt=(0,u.T)(),Dt=(0,s.iH)(null),Wt=(0,s.iH)(null),Ct=(0,s.iH)(null),jt=(0,s.iH)(null),Ht=(0,s.iH)(null),Qt=(0,s.iH)(null),Vt=(0,s.iH)(null),Zt=(0,s.iH)(null),Tt=(0,s.iH)(!1);let It=(0,s.iH)(!1);const At=(0,s.iH)([]),Ft=((0,s.iH)(0),(0,s.iH)(3e5)),Bt=(0,_.QT)(),Kt=(Bt.t("p2p_error"),"7JXmTnbwuDnpqQ3NwxwzhfGgDk223j13eP"),Pt=(0,a.Fl)((()=>qt.user)),Rt=(0,a.Fl)((()=>qt.trade)),Jt=(0,a.Fl)((()=>Rt.value.offer.is_sell?Rt.value.offer.user.wallet===Pt.value.wallet:Rt.value.opponent.wallet===Pt.value.wallet));function Lt(){Zt.value=setInterval((async function(){await qt.get_trade()}),5e3)}async function Mt(e){let t=Pt.value.wallet;"money_receive"===e&&(t=Pt.value.is_p2p_admin?Rt.value.freeze_user===Rt.value.opponent.wallet?Rt.value.offer.user.wallet:Rt.value.opponent.wallet:Rt.value.offer.user.wallet!==Pt.value.wallet?Rt.value.offer.user.wallet:Rt.value.opponent.wallet),w.log(Ht.value),Tt.value=!Tt.value;let l=new FormData;l.set("action",e),Ht.value&&l.set("file",Ht.value),l.set("wallet",t),l.set("uid",Rt.value.UID),w.log(l);const a=await(0,o.h)({method:"post",headers:{"content-type":"multipart/form-data"},url:"/api/p2p/trade_action",data:l});a.data.success?(0,d.d$)("positive",a.data.message):(0,d.d$)("negative",a.data.message),Tt.value=!Tt.value,"delete"===e&&ht.push({name:"p2p_index"}),"money_receive"===e&&ht.push({name:"p2p_index"})}async function Nt(){Dt.value=new WebSocket(`wss://xn--k1affs.xn--p1ai/ws/trade_chat/${Rt.value.UID}`);const e=await o.h.get(`/api/p2p/get_trade_chat?trade_uid=${Rt.value.UID}`);w.log(e.data),At.value=e.data.messages,Dt.value.onmessage=async e=>{let l=JSON.parse(e.data)["message"];w.log("DATA",l.user.wallet);let a={id:l.id,message:l.message,file:l.file?l.file:null,createdAt:l.createdAt,user:{wallet:l.user.wallet,is_p2p_admin:l.user.is_p2p_admin,fio:l.user.fio}};At.value.push(a),Et(),t.play()}}async function Ot(e){13===e.keyCode&&jt.value&&await Xt()}function Et(){It.value&&(Vt.value.setScrollPosition("vertical",Ft.value,300),Ft.value=20*Math.floor(300))}function Gt(){Et()}async function Xt(){Tt.value=!Tt.value;let e=new FormData;e.set("message",JSON.stringify(jt.value)),e.set("file",Qt.value),e.set("wallet",Pt.value.wallet),e.set("trade_uid",Rt.value.UID),w.log(e);await(0,o.h)({method:"post",headers:{"content-type":"multipart/form-data"},url:"/api/p2p/add_message_in_trade_chat",data:e});jt.value=null,Qt.value=null,Tt.value=!Tt.value}async function Yt(){Tt.value=!Tt.value;const e=!0,t=await $t.getKeyPair(),l=new zt.Type.KeyPair(t),a={assetKey:Rt.value.offer.asset.key,amount:Rt.value.asset_amount};w.log(l),w.log(a);const s=await i.era.tranRawSendAsset(l,a,Kt,Bt.t("p2p_depon"),`${Bt.t("p2p_trade")} ${Rt.value.id} ${Bt.t("p2p_by_offer")} ${Rt.value.offer.id}`,!1,e);w.log(s),s.error?(0,d.d$)("negative",s.error.message):(Wt.value=s.fee,Ct.value=s.raw,await el()),Tt.value=!Tt.value}async function el(){const e=await i.era.broadcast64(Ct.value);if(w.log(e),e.error)(0,d.d$)("negative",e.message);else{(0,d.d$)("positive",Bt.t("p2p_depon1"));await o.h.post("/api/p2p/trade_action",{action:"freeze_money",uid:Rt.value.UID,tx:e.signature,wallet:Pt.value.wallet})}}return(0,a.wF)((async()=>{qt.current_trade_uid=St.params.uid,await qt.get_user(),w.log("wallet",Pt.value),await qt.get_trade(),await Nt(),Rt.value.status.is_need_help&&(It.value=!0),Lt()})),(0,a.Jd)((async()=>{Dt.value?Dt.value.close():w.log("not connect"),clearInterval(Zt.value)})),(e,t)=>{const l=(0,a.up)("page-header"),o=(0,a.up)("q-btn"),r=(0,a.up)("q-card-section"),p=(0,a.up)("q-card"),i=(0,a.up)("q-badge"),u=(0,a.up)("q-separator"),d=(0,a.up)("q-icon"),_=(0,a.up)("q-file"),w=(0,a.up)("q-chat-message"),St=(0,a.up)("q-scroll-area"),ht=(0,a.up)("q-input"),zt=(0,a.up)("q-dialog"),$t=(0,a.up)("page-body"),qt=(0,a.up)("page"),Dt=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(qt,null,{default:(0,a.w5)((()=>[(0,a.Wm)($t,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{route_name:"p2p_index"}),c,!(0,s.SU)(Rt).can_delete&&(0,s.SU)(Rt).status.is_default?((0,a.wg)(),(0,a.iD)("p",f,(0,n.zw)(e.$t("p2p_trade_can_decline"))+" "+(0,n.zw)(new Date((0,s.SU)(Rt).can_delete_time).toLocaleString()),1)):(0,a.kq)("",!0),(0,s.SU)(Rt).status.is_default&&(0,s.SU)(Rt).can_delete?((0,a.wg)(),(0,a.iD)("div",m,[(0,a.Wm)(o,{class:"full-width q-mb-md","no-caps":"",unelevated:"",color:"negative",onClick:t[0]||(t[0]=e=>Mt("delete")),label:e.$t("p2p_trade_decline")},null,8,["label"])])):(0,a.kq)("",!0),(0,a.Wm)(p,{flat:"",class:(0,n.C_)(["text-bold text-center q-mb-md text-white",`bg-${(0,s.SU)(Rt).status.color}`])},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a._)("span",null,(0,n.zw)(e.$t("p2p_trade_status"))+": "+(0,n.zw)((0,s.SU)(Rt).status.label)+" ",1)])),_:1})])),_:1},8,["class"]),(0,s.SU)(Rt).status.is_declined?((0,a.wg)(),(0,a.iD)("div",mt,[(0,s.SU)(Rt).tx_send?((0,a.wg)(),(0,a.iD)("a",{key:0,class:"text-primary",style:{"text-decoration":"none","border-bottom":"1px dashed"},href:`https://scan.rupay.pro/index/main.html?tx=${(0,s.SU)(Rt).tx_return}&lang=en`,target:"_blank"},[(0,a._)("span",gt,"Транзакция возврата "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1)],8,bt)):(0,a.kq)("",!0)])):((0,a.wg)(),(0,a.iD)("div",b,[(0,s.SU)(Rt).status.is_need_help?((0,a.wg)(),(0,a.iD)("div",fe,[(0,a._)("p",me,(0,n.zw)(e.$t("p2p_admin_wait")),1),(0,a._)("p",null,[(0,a.Uk)((0,n.zw)(e.$t("p2p_trade"))+" ",1),(0,a._)("span",be,"#"+(0,n.zw)((0,s.SU)(Rt).id),1),(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_by_offer"))+" ",1),(0,a._)("span",ge,"#"+(0,n.zw)((0,s.SU)(Rt).offer.id),1),Ue,(0,s.SU)(Rt).offer.is_sell?((0,a.wg)(),(0,a.iD)("span",ye,(0,n.zw)((0,s.SU)(Rt).opponent.wallet===(0,s.SU)(Pt).wallet?e.$t("p2p_buy_orders"):e.$t("p2p_sell_orders")),1)):((0,a.wg)(),(0,a.iD)("span",ve,(0,n.zw)((0,s.SU)(Rt).opponent.wallet===(0,s.SU)(Pt).wallet?e.$t("p2p_sell_orders"):e.$t("p2p_buy_orders")),1)),(0,a._)("span",xe," "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1),(0,a.Uk)("  "+(0,n.zw)(e.$t("p2p_trade_course"))+" ",1),(0,a._)("span",ke,(0,n.zw)((0,s.SU)(Rt).offer.course)+" RUB",1),(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_trade_total_rub"))+" ",1),(0,a._)("span",Se,(0,n.zw)((0,s.SU)(Rt).fiat_amount)+" RUB",1),he,(0,a._)("span",ze,(0,n.zw)(e.$t("p2p_trade_comm"))+" "+(0,n.zw)((0,s.SU)(Rt).asset_amount_without_commission)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1),$e,(0,a._)("span",qe,(0,n.zw)(e.$t("p2p_rules"))+":",1),De,(0,a.Uk)((0,n.zw)((0,s.SU)(Rt).offer.rules),1),We,(0,a._)("span",Ce,(0,n.zw)(e.$t("p2p_payment_system"))+":",1),(0,a.Uk)(" "+(0,n.zw)((0,s.SU)(Rt).payment_type.label),1),je,(0,a._)("span",He,(0,n.zw)((0,s.SU)(Jt)?e.$t("p2p_trade_buyer"):e.$t("p2p_trade_seller")),1),Qe,(0,s.SU)(Rt).offer.user.wallet!==(0,s.SU)(Pt).wallet?((0,a.wg)(),(0,a.iD)("span",Ve,[(0,a._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${(0,s.SU)(Rt).offer.user.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold text-caption",target:"_blank"},(0,n.zw)((0,s.SU)(Rt).offer.user.fio?(0,s.SU)(Rt).offer.user.fio:(0,s.SU)(Rt).offer.user.wallet),9,Ze),Te,(0,s.SU)(Rt).offer.user.fio?((0,a.wg)(),(0,a.j4)(i,{key:0,color:"positive"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("p2p_verify")),1)])),_:1})):((0,a.wg)(),(0,a.j4)(i,{key:1,color:"negative"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("p2p_not_verify")),1)])),_:1})),Ie,(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_finish_trades"))+" "+(0,n.zw)((0,s.SU)(Rt).offer.user.total_trades),1)])):((0,a.wg)(),(0,a.iD)("span",Ae,[(0,a._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${(0,s.SU)(Rt).opponent.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold text-caption",target:"_blank"},(0,n.zw)((0,s.SU)(Rt).opponent.fio?(0,s.SU)(Rt).opponent.fio:(0,s.SU)(Rt).opponent.wallet),9,Fe),Be,(0,s.SU)(Rt).opponent.fio?((0,a.wg)(),(0,a.j4)(i,{key:0,color:"positive"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("p2p_verify")),1)])),_:1})):((0,a.wg)(),(0,a.j4)(i,{key:1,color:"negative"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("p2p_not_verify")),1)])),_:1})),Ke,(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_finish_trades"))+" "+(0,n.zw)((0,s.SU)(Rt).opponent.total_trades),1)]))])])):((0,a.wg)(),(0,a.iD)("div",g,[(0,s.SU)(Rt).status.is_default||(0,s.SU)(Rt).status.is_finished?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",U,[(0,a.Wm)(p,{flat:"",class:"bg-red-4"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[(0,a._)("p",{class:"text-white caption text-justify",innerHTML:e.$t("p2p_trade_call_admin_text")},null,8,y),(0,a.Wm)(o,{label:e.$t("p2p_trade_call_admin_btn"),loading:Tt.value,onClick:t[1]||(t[1]=e=>Mt("need_help")),class:"full-width","no-caps":"",unelevated:"",color:"yellow-4","text-color":"dark"},null,8,["label","loading"])])),_:1})])),_:1})])),(0,s.SU)(Rt).status.is_finished?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("p",null,[(0,a.Uk)((0,n.zw)(e.$t("p2p_trade"))+" ",1),(0,a._)("span",x,"#"+(0,n.zw)((0,s.SU)(Rt).id),1),(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_by_offer"))+" ",1),(0,a._)("span",k,"#"+(0,n.zw)((0,s.SU)(Rt).offer.id),1),S,(0,s.SU)(Rt).offer.is_sell?((0,a.wg)(),(0,a.iD)("span",h,(0,n.zw)((0,s.SU)(Rt).opponent.wallet===(0,s.SU)(Pt).wallet?e.$t("p2p_buy_orders"):e.$t("p2p_sell_orders")),1)):((0,a.wg)(),(0,a.iD)("span",z,(0,n.zw)((0,s.SU)(Rt).opponent.wallet===(0,s.SU)(Pt).wallet?e.$t("p2p_sell_orders"):e.$t("p2p_buy_orders")),1)),(0,a._)("span",$," "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1),(0,a.Uk)("  "+(0,n.zw)(e.$t("p2p_trade_course"))+" ",1),(0,a._)("span",q,(0,n.zw)((0,s.SU)(Rt).offer.course)+" RUB",1),(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_trade_total_rub"))+" ",1),(0,a._)("span",D,(0,n.zw)((0,s.SU)(Rt).fiat_amount)+" RUB",1),W,(0,a._)("span",C,(0,n.zw)(e.$t("p2p_trade_comm"))+" "+(0,n.zw)((0,s.SU)(Rt).asset_amount_without_commission)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1),j,(0,a._)("span",H,(0,n.zw)(e.$t("p2p_rules"))+":",1),Q,(0,a.Uk)((0,n.zw)((0,s.SU)(Rt).offer.rules),1),V,(0,a._)("span",Z,(0,n.zw)(e.$t("p2p_payment_system"))+":",1),(0,a.Uk)(" "+(0,n.zw)((0,s.SU)(Rt).payment_type.label),1),T,(0,a._)("span",I,(0,n.zw)((0,s.SU)(Jt)?e.$t("p2p_trade_buyer"):e.$t("p2p_trade_seller")),1),A,(0,s.SU)(Rt).offer.user.wallet!==(0,s.SU)(Pt).wallet?((0,a.wg)(),(0,a.iD)("span",F,[(0,a._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${(0,s.SU)(Rt).offer.user.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold text-caption",target:"_blank"},(0,n.zw)((0,s.SU)(Rt).offer.user.fio?(0,s.SU)(Rt).offer.user.fio:(0,s.SU)(Rt).offer.user.wallet),9,B),K,(0,s.SU)(Rt).offer.user.fio?((0,a.wg)(),(0,a.j4)(i,{key:0,color:"positive"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("p2p_verify")),1)])),_:1})):((0,a.wg)(),(0,a.j4)(i,{key:1,color:"negative"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("p2p_not_verify")),1)])),_:1})),P,(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_finish_trades"))+" "+(0,n.zw)((0,s.SU)(Rt).offer.user.total_trades),1)])):((0,a.wg)(),(0,a.iD)("span",R,[(0,a._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${(0,s.SU)(Rt).opponent.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold text-caption",target:"_blank"},(0,n.zw)((0,s.SU)(Rt).opponent.fio?(0,s.SU)(Rt).opponent.fio:(0,s.SU)(Rt).opponent.wallet),9,J),L,(0,s.SU)(Rt).opponent.fio?((0,a.wg)(),(0,a.j4)(i,{key:0,color:"positive"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("p2p_verify")),1)])),_:1})):((0,a.wg)(),(0,a.j4)(i,{key:1,color:"negative"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(e.$t("p2p_not_verify")),1)])),_:1})),M,(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_finish_trades"))+" "+(0,n.zw)((0,s.SU)(Rt).opponent.total_trades),1)]))]),(0,a.Wm)(u,{spaced:"lg"}),(0,s.SU)(Rt).status.is_default?((0,a.wg)(),(0,a.iD)("div",N,[(0,s.SU)(Rt).offer.user.wallet===(0,s.SU)(Pt).wallet?((0,a.wg)(),(0,a.iD)("div",O,[(0,a.Wm)(o,{loading:Tt.value,label:e.$t("p2p_trade_agree"),color:"positive",class:"full-width q-py-md",onClick:t[2]||(t[2]=e=>Mt("trade_accept")),unelevated:"","no-caps":""},null,8,["loading","label"])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),(0,s.SU)(Rt).status.is_active?((0,a.wg)(),(0,a.iD)("div",E,[(0,s.SU)(Jt)?((0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("p",null,[(0,a.Uk)((0,n.zw)(e.$t("p2p_trade_agree_text1"))+" ",1),(0,a._)("span",X,(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1),(0,a.Uk)(". "+(0,n.zw)(e.$t("p2p_trade_agree_text2")),1)]),(0,a.Wm)(o,{loading:Tt.value,label:`${e.$t("p2p_trade_depo")} ${(0,s.SU)(Rt).asset_amount} ${(0,s.SU)(Rt).offer.asset.name}`,color:"positive",class:"full-width q-py-md",onClick:Yt,unelevated:"","no-caps":""},null,8,["loading","label"])])):((0,a.wg)(),(0,a.iD)("div",Y,[(0,a._)("p",ee,(0,n.zw)(e.$t("p2p_trade_depo_text")),1),(0,a._)("p",null,(0,n.zw)(e.$t("p2p_trade_depo_wait"))+" "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1)]))])):(0,a.kq)("",!0),(0,s.SU)(Rt).status.is_money_freeze?((0,a.wg)(),(0,a.iD)("div",te,[(0,a._)("p",null,[(0,a._)("a",{class:"text-primary",style:{"text-decoration":"none","border-bottom":"1px dashed"},href:`https://scan.rupay.pro/index/main.html?tx=${(0,s.SU)(Rt).tx}&lang=en`,target:"_blank"},[(0,a._)("span",ae,(0,n.zw)(e.$t("p2p_trade_depo_trans"))+" "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1)],8,le)]),(0,s.SU)(Jt)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",se,[(0,a._)("p",ne,[(0,a.Uk)((0,n.zw)(e.$t("p2p_trade_sellser_text")),1),oe,(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_payment_system"))+": "+(0,n.zw)((0,s.SU)(Rt).payment_type.label),1),re,(0,a.Uk)(" "+(0,n.zw)(e.$t("p2p_trade_sellser_req"))+": "+(0,n.zw)((0,s.SU)(Rt).payment_type.payment_info),1)]),(0,a._)("p",pe,(0,n.zw)(e.$t("p2p_trade_sellser_confirm")),1),(0,a.Wm)(_,{outlined:"",label:e.$t("p2p_trade_sellser_confirm_btn"),modelValue:Ht.value,"onUpdate:modelValue":t[3]||(t[3]=e=>Ht.value=e),"bg-color":Ht.value?"positive":"red-1",color:"white",class:"q-mb-md"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(d,{name:"attach_file"})])),_:1},8,["label","modelValue","bg-color"]),(0,a.Wm)(o,{loading:Tt.value,disable:!Ht.value,label:Ht.value?e.$t("p2p_trade_sellser_confirm_btn_done"):e.$t("p2p_trade_sellser_confirm_btn_not"),color:Ht.value?"positive":"negative",class:"full-width q-py-md",onClick:t[4]||(t[4]=e=>Mt("money_send")),unelevated:"","no-caps":""},null,8,["loading","disable","label","color"])]))])):(0,a.kq)("",!0),(0,s.SU)(Rt).status.is_money_sent?((0,a.wg)(),(0,a.iD)("div",ie,[(0,s.SU)(Jt)?((0,a.wg)(),(0,a.iD)("div",ue,[(0,a._)("p",null,[(0,a._)("a",{class:"text-primary text-bold",style:{"text-decoration":"none","border-bottom":"1px dashed"},href:(0,s.SU)(Rt).send_img,target:"_blank"},(0,n.zw)(e.$t("p2p_trade_pay_confirm")),9,de)]),(0,a.Wm)(o,{loading:Tt.value,label:e.$t("p2p_trade_pay_confirm_btn"),color:"positive",class:"full-width q-py-md",onClick:t[5]||(t[5]=e=>Mt("money_receive")),unelevated:"","no-caps":""},null,8,["loading","label"])])):(0,a.kq)("",!0)])):(0,a.kq)("",!0),(0,s.SU)(Rt).status.is_money_recieve?((0,a.wg)(),(0,a.iD)("div",_e,[(0,a._)("p",null,[(0,a._)("a",{class:"text-primary",style:{"text-decoration":"none","border-bottom":"1px dashed"},href:`https://scan.rupay.pro/index/main.html?tx=${(0,s.SU)(Rt).tx_send}&lang=en`,target:"_blank"},[(0,a._)("span",ce,(0,n.zw)(e.$t("p2p_trade_pay_trans"))+" "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1)],8,we)])])):(0,a.kq)("",!0)]))])),(0,s.SU)(Pt).is_p2p_admin&&!(0,s.SU)(Rt).status.is_finished?((0,a.wg)(),(0,a.iD)("div",Pe,[(0,a.Wm)(u,{spaced:"lg"}),Re,(0,a._)("p",null,[(0,a.Uk)(" Cделка № "+(0,n.zw)((0,s.SU)(Rt).id),1),Je,(0,a.Uk)(" Оффер № "+(0,n.zw)((0,s.SU)(Rt).offer.id),1),Le,(0,a.Uk)(" Сумма сделки в рублях: "+(0,n.zw)((0,s.SU)(Rt).fiat_amount),1),Me,(0,a.Uk)(" Сумма сделки в активе: "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1),Ne,Oe,(0,a.Uk)(" Тип оффера: "+(0,n.zw)((0,s.SU)(Rt).offer.is_sell?"продажа":"покупка"),1),Ee,Ge,Xe,(0,a._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${(0,s.SU)(Rt).offer.user.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold text-caption",target:"_blank"},(0,n.zw)((0,s.SU)(Rt).offer.user.wallet),9,Ye),et,tt,lt,at,(0,a._)("a",{href:`https://scan.rupay.pro/index/main.html?address=${(0,s.SU)(Rt).opponent.wallet}&lang=en`,style:{"text-decoration":"none","border-bottom":"1px dashed"},class:"text-primary text-bold text-caption",target:"_blank"},(0,n.zw)((0,s.SU)(Rt).opponent.wallet),9,st),nt]),(0,s.SU)(Rt).tx?((0,a.wg)(),(0,a.iD)("p",ot,[(0,a._)("a",{class:"text-primary",style:{"text-decoration":"none","border-bottom":"1px dashed"},href:`https://scan.rupay.pro/index/main.html?tx=${(0,s.SU)(Rt).tx}&lang=en`,target:"_blank"},[(0,a._)("span",pt,"Транзакция депонирования "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1)],8,rt)])):(0,a.kq)("",!0),(0,s.SU)(Rt).tx_send?((0,a.wg)(),(0,a.iD)("p",it,[(0,a._)("a",{class:"text-primary",style:{"text-decoration":"none","border-bottom":"1px dashed"},href:`https://scan.rupay.pro/index/main.html?tx=${(0,s.SU)(Rt).tx_send}&lang=en`,target:"_blank"},[(0,a._)("span",dt,"Транзакция перевода "+(0,n.zw)((0,s.SU)(Rt).asset_amount)+" "+(0,n.zw)((0,s.SU)(Rt).offer.asset.name),1)],8,ut)])):(0,a.kq)("",!0),(0,s.SU)(Rt).send_img?((0,a.wg)(),(0,a.iD)("p",_t,[(0,a._)("a",{class:"text-primary text-bold",style:{"text-decoration":"none","border-bottom":"1px dashed"},href:(0,s.SU)(Rt).send_img,target:"_blank"},"Подтверждение оплаты",8,wt)])):(0,a.kq)("",!0),ct,ft,(0,s.SU)(Rt).tx?((0,a.wg)(),(0,a.j4)(o,{key:3,loading:Tt.value,label:"Отмена сделки с возвратом задепонированнго баланса продавцу",color:"negative",class:"full-width q-py-md q-mb-md",onClick:t[6]||(t[6]=e=>Mt("admin_stop")),unelevated:"","no-caps":""},null,8,["loading"])):(0,a.kq)("",!0),(0,s.SU)(Rt).tx?((0,a.wg)(),(0,a.j4)(o,{key:4,loading:Tt.value,label:"Завершить сделку с перечисление средств покупателю",color:"positive",class:"full-width q-py-md q-mb-md",onClick:t[7]||(t[7]=e=>Mt("money_receive")),unelevated:"","no-caps":""},null,8,["loading"])):(0,a.kq)("",!0),(0,s.SU)(Rt).tx?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(o,{key:5,loading:Tt.value,class:"full-width q-py-md","no-caps":"",unelevated:"",color:"negative",onClick:t[8]||(t[8]=e=>Mt("admin_decline")),label:"Отменить сделку"},null,8,["loading"]))])):(0,a.kq)("",!0)])),(0,a.Wm)(zt,{modelValue:(0,s.SU)(It),"onUpdate:modelValue":t[12]||(t[12]=e=>(0,s.dq)(It)?It.value=e:It=e),seamless:"",position:"bottom",onShow:Gt},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{class:"full-width"},{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:"q-pt-xl"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(o,{class:"absolute-top-right z-max",flat:"",round:"",icon:"close"},null,512),[[Dt]]),(0,a._)("div",Ut,[(0,a.Wm)(St,{ref_key:"messages_wrapper",ref:Vt,style:{height:"300px"}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(At.value,(t=>((0,a.wg)(),(0,a.j4)(w,{key:t.id,stamp:new Date(t.createdAt).toLocaleString(),name:t.user.fio,text:[t.message],sent:t.user.wallet===(0,s.SU)(Pt).wallet,"bg-color":t.user.is_p2p_admin?"red-7":t.user.wallet===(0,s.SU)(Pt).wallet?"green-3":"grey-3","text-color":t.user.is_p2p_admin?"white":""},{name:(0,a.w5)((()=>[(0,a._)("span",{class:(0,n.C_)(t.user.is_p2p_admin?"text-red-7":"")},(0,n.zw)(t.user.fio?t.user.fio:t.user.wallet),3),yt,t.file?((0,a.wg)(),(0,a.iD)("span",vt,[(0,a._)("a",{class:"file_link",target:"_blank",href:t.file},(0,n.zw)(e.$t("p2p_attach")),9,xt)])):(0,a.kq)("",!0)])),_:2},1032,["stamp","name","text","sent","bg-color","text-color"])))),128))])),_:1},512),(0,a._)("div",kt,[(0,a.Wm)(d,{size:"24px",class:"cursor-pointer q-mr-lg",color:Qt.value?"positive":"grey-6",name:"attach_file"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{style:{position:"absolute",width:"42px",opacity:"0"},modelValue:Qt.value,"onUpdate:modelValue":t[9]||(t[9]=e=>Qt.value=e)},null,8,["modelValue"])])),_:1},8,["color"]),(0,a.Wm)(ht,{outlined:"",class:"col-grow",loading:Tt.value,disable:Tt.value,onKeydown:Ot,modelValue:jt.value,"onUpdate:modelValue":t[11]||(t[11]=e=>jt.value=e),label:e.$t("p2p_message")},{append:(0,a.w5)((()=>[(0,a.Wm)(o,{round:"",dense:"",disable:!jt.value,loading:Tt.value,onClick:t[10]||(t[10]=e=>Xt()),flat:"",icon:"send"},null,8,["disable","loading"])])),_:1},8,["loading","disable","modelValue","label"])])])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,s.SU)(Rt).status.is_finished?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(o,{key:4,style:{position:"fixed",bottom:"20px",right:"20px"},flat:"",size:"24px",round:"",icon:"las la-comments",onClick:t[13]||(t[13]=e=>(0,s.dq)(It)?It.value=!0:It=!0)},{default:(0,a.w5)((()=>[At.value.length>0?((0,a.wg)(),(0,a.j4)(d,{key:0,class:"absolute-top-right",size:"16px",color:"red",name:"priority_high"})):(0,a.kq)("",!0)])),_:1}))])),_:1})])),_:1})}}};var ht=l(24455),zt=l(44458),$t=l(63190),qt=l(20990),Dt=l(50926),Wt=l(33837),Ct=l(22857),jt=l(32074),Ht=l(66663),Qt=l(396),Vt=l(13119),Zt=l(62146),Tt=l(69984),It=l.n(Tt);const At=St,Ft=At;It()(St,"components",{QBtn:ht.Z,QCard:zt.Z,QCardSection:$t.Z,QBadge:qt.Z,QSeparator:Dt.Z,QFile:Wt.Z,QIcon:Ct.Z,QDialog:jt.Z,QScrollArea:Ht.Z,QChatMessage:Qt.Z,QInput:Vt.Z}),It()(St,"directives",{ClosePopup:Zt.Z})}}]);