"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[984],{61984:(e,l,a)=>{a.r(l),a.d(l,{default:()=>S});var t=a(59835),u=a(60499),s=a(86970),o=a(46190),p=a(31655),n=a(91569),m=a(87270),d=a(18910),i=(a(24409),a(23459)),c=a(17779);const _=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),r=["src"],v={key:0},b={key:1},w={class:"text-caption"},y={key:0,class:"text-caption text-negative"},g={key:2},k={__name:"NewSellOffer",setup(e){const l=(0,o.c)(),a=(0,u.iH)(null),k=(0,d.tv)(),f=(0,p.T)(),q=((0,i.Q)(),(0,u.iH)(null)),V=(0,u.iH)(null),$=(0,u.iH)(null),h=(0,u.iH)(null),U=(0,u.iH)(null),W=((0,t.Fl)((()=>l.addresses[l.currentAddressIdx].address)),(0,t.Fl)((()=>f.user))),F=(0,t.Fl)((()=>l.assets)),z=(0,t.Fl)((()=>l.balances));async function x(){c.log(q.value);const e=await n.h.post("/api/p2p/add_offer",{is_sell:!0,asset_key:q.value.key,wallet:W.value.wallet,amount:V.value,min_amount:$.value,payment_types:a.value,course:h.value,rules:U.value});c.log(e.data),e.data.success?(0,m.d$)("positive",e.data.message):(0,m.d$)("negative",e.data.message),await f.get_own_offers(),k.push({name:"p2p_index"})}return(e,l)=>{const o=(0,t.up)("page-header"),p=(0,t.up)("q-avatar"),n=(0,t.up)("q-item-section"),m=(0,t.up)("q-item-label"),d=(0,t.up)("q-item"),i=(0,t.up)("q-select"),c=(0,t.up)("q-btn"),k=(0,t.up)("q-input"),f=(0,t.up)("page-body"),S=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(S,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,{class:"q-pa-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{route_name:"p2p_index"}),_,(0,t.Wm)(i,{outlined:"",options:(0,u.SU)(F),modelValue:q.value,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value=e),"option-label":"name",class:"q-mb-md",behavior:"dialog",label:e.$t("p2p_select_asset_for_sell")},{option:(0,t.w5)((l=>[(0,t.Wm)(d,(0,s.vs)((0,t.F4)(l.itemProps)),{default:(0,t.w5)((()=>[(0,t.Wm)(n,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{rounded:""},{default:(0,t.w5)((()=>[(0,t._)("img",{src:`https://scan.rupay.pro${l.opt.iconURL}`},null,8,r)])),_:2},1024)])),_:2},1024),(0,t.Wm)(n,null,{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"text-bold"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(l.opt.name),1)])),_:2},1024),(0,t.Wm)(m,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(e.$t("your_balance"))+": "+(0,s.zw)((0,u.SU)(z)[l.opt.key][0][1]),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["options","modelValue","label"]),q.value?((0,t.wg)(),(0,t.iD)("div",v,[(0,t.Wm)(i,{outlined:"",options:(0,u.SU)(W).payment_types,modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),"use-chips":"",class:"q-mb-md",behavior:"dialog",multiple:"",label:e.$t("p2p_select_payment_system")},null,8,["options","modelValue","label"])])):(0,t.kq)("",!0),a.value&&a.value.length>0?((0,t.wg)(),(0,t.iD)("div",b,[(0,t._)("p",null,(0,s.zw)(e.$t("your_balance"))+" "+(0,s.zw)((0,u.SU)(z)[q.value.key][0][1])+" "+(0,s.zw)(q.value.name),1),(0,t.Wm)(k,{outlined:"",modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=e=>V.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_volume")},{append:(0,t.w5)((()=>[(0,t.Wm)(c,{onClick:l[2]||(l[2]=e=>V.value=(0,u.SU)(z)[q.value.key][0][1]),size:"10px",unelevated:"",color:"primary","no-caps":"",label:e.$t("sell_all")},null,8,["label"])])),_:1},8,["modelValue","label"]),(0,t.Wm)(k,{outlined:"",modelValue:$.value,"onUpdate:modelValue":l[4]||(l[4]=e=>$.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_volume_min")},null,8,["modelValue","label"]),(0,t._)("p",w,(0,s.zw)(e.$t("buy_amomunt_cource"))+": "+(0,s.zw)(q.value.course),1),parseFloat(q.value.p2p_min_sell_price)>0?((0,t.wg)(),(0,t.iD)("p",y,(0,s.zw)(e.$t("sell_min_cource"))+": "+(0,s.zw)(q.value.p2p_min_sell_price),1)):(0,t.kq)("",!0),(0,t.Wm)(k,{outlined:"",modelValue:h.value,"onUpdate:modelValue":l[5]||(l[5]=e=>h.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_course")},null,8,["modelValue","label"]),(0,t.Wm)(k,{outlined:"",modelValue:U.value,"onUpdate:modelValue":l[6]||(l[6]=e=>U.value=e),class:"q-mb-md",type:"textarea",label:e.$t("p2p_select_rules")},null,8,["modelValue","label"])])):(0,t.kq)("",!0),V.value&&$.value&&h.value?((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(c,{dense:"",class:"full-width q-py-md",color:"positive","no-caps":"",unelevated:"",disable:parseFloat(V.value)>parseFloat((0,u.SU)(z)[q.value.key][0][1])||parseFloat($.value)>parseFloat(V.value)||parseFloat(h.value)<parseFloat(q.value.p2p_min_sell_price),onClick:x,label:`${e.$t("p2p_create_offer")} ${V.value*h.value} RUB`},null,8,["disable","label"])])):(0,t.kq)("",!0)])),_:1})])),_:1})}}};var f=a(57786),q=a(490),V=a(76749),$=a(61357),h=a(33115),U=a(13119),W=a(24455),F=a(69984),z=a.n(F);const x=k,S=x;z()(k,"components",{QSelect:f.Z,QItem:q.Z,QItemSection:V.Z,QAvatar:$.Z,QItemLabel:h.Z,QInput:U.Z,QBtn:W.Z})}}]);