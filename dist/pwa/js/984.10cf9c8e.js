"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[984],{61984:(e,l,a)=>{a.r(l),a.d(l,{default:()=>S});var u=a(59835),t=a(60499),s=a(86970),p=a(46190),o=a(31655),n=a(91569),m=a(87270),d=a(18910),i=(a(24409),a(23459)),c=a(17779);const _=(0,u._)("div",{class:"",style:{height:"50px"}},null,-1),r=["src"],v={key:0},b={key:1},w={class:"text-caption"},y={key:0,class:"text-caption text-negative"},k={key:2},f={__name:"NewSellOffer",setup(e){const l=(0,p.c)(),a=(0,t.iH)(null),f=(0,d.tv)(),g=(0,o.T)(),q=((0,i.Q)(),(0,t.iH)(null)),V=(0,t.iH)(null),$=(0,t.iH)(null),h=(0,t.iH)(null),U=(0,t.iH)(null),W=((0,u.Fl)((()=>l.addresses[l.currentAddressIdx].address)),(0,u.Fl)((()=>g.user))),F=(0,u.Fl)((()=>l.assets)),z=(0,u.Fl)((()=>l.balances));async function x(){c.log(q.value);const e=await n.h.post("/api/p2p/add_offer",{is_sell:!0,asset_key:q.value.key,wallet:W.value.wallet,amount:V.value,min_amount:$.value,payment_types:a.value,course:h.value,rules:U.value});c.log(e.data),e.data.success?(0,m.d$)("positive",e.data.message):(0,m.d$)("negative",e.data.message),await g.get_own_offers(),f.push({name:"p2p_index"})}return(e,l)=>{const p=(0,u.up)("page-header"),o=(0,u.up)("q-avatar"),n=(0,u.up)("q-item-section"),m=(0,u.up)("q-item-label"),d=(0,u.up)("q-item"),i=(0,u.up)("q-select"),c=(0,u.up)("q-btn"),f=(0,u.up)("q-input"),g=(0,u.up)("page-body"),S=(0,u.up)("page");return(0,u.wg)(),(0,u.j4)(S,null,{default:(0,u.w5)((()=>[(0,u.Wm)(g,{class:"q-pa-md"},{default:(0,u.w5)((()=>[(0,u.Wm)(p,{route_name:"p2p_index"}),_,(0,u.Wm)(i,{outlined:"",options:(0,t.SU)(F),modelValue:q.value,"onUpdate:modelValue":l[0]||(l[0]=e=>q.value=e),"option-label":"name",class:"q-mb-md",behavior:"menu",label:e.$t("p2p_select_asset_for_sell")},{option:(0,u.w5)((l=>[(0,u.Wm)(d,(0,s.vs)((0,u.F4)(l.itemProps)),{default:(0,u.w5)((()=>[(0,u.Wm)(n,{avatar:""},{default:(0,u.w5)((()=>[(0,u.Wm)(o,{rounded:""},{default:(0,u.w5)((()=>[(0,u._)("img",{src:`https://scan.rupay.pro${l.opt.iconURL}`},null,8,r)])),_:2},1024)])),_:2},1024),(0,u.Wm)(n,null,{default:(0,u.w5)((()=>[(0,u.Wm)(m,{class:"text-bold"},{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(l.opt.name),1)])),_:2},1024),(0,u.Wm)(m,{caption:""},{default:(0,u.w5)((()=>[(0,u.Uk)((0,s.zw)(e.$t("your_balance"))+": "+(0,s.zw)((0,t.SU)(z)[l.opt.key][0][1]),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["options","modelValue","label"]),q.value?((0,u.wg)(),(0,u.iD)("div",v,[(0,u.Wm)(i,{outlined:"",options:(0,t.SU)(W).payment_types,modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=e=>a.value=e),"use-chips":"",class:"q-mb-md",behavior:"menu",multiple:"",label:e.$t("p2p_select_payment_system")},null,8,["options","modelValue","label"])])):(0,u.kq)("",!0),a.value&&a.value.length>0?((0,u.wg)(),(0,u.iD)("div",b,[(0,u._)("p",null,(0,s.zw)(e.$t("your_balance"))+" "+(0,s.zw)((0,t.SU)(z)[q.value.key][0][1])+" "+(0,s.zw)(q.value.name),1),(0,u.Wm)(f,{outlined:"",modelValue:V.value,"onUpdate:modelValue":l[3]||(l[3]=e=>V.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_volume")},{append:(0,u.w5)((()=>[(0,u.Wm)(c,{onClick:l[2]||(l[2]=e=>V.value=(0,t.SU)(z)[q.value.key][0][1]),size:"10px",unelevated:"",color:"primary","no-caps":"",label:e.$t("sell_all")},null,8,["label"])])),_:1},8,["modelValue","label"]),(0,u.Wm)(f,{outlined:"",modelValue:$.value,"onUpdate:modelValue":l[4]||(l[4]=e=>$.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_volume_min")},null,8,["modelValue","label"]),(0,u._)("p",w,(0,s.zw)(e.$t("buy_amomunt_cource"))+": "+(0,s.zw)(q.value.course),1),parseFloat(q.value.p2p_min_sell_price)>0?((0,u.wg)(),(0,u.iD)("p",y,(0,s.zw)(e.$t("sell_min_cource"))+": "+(0,s.zw)(q.value.p2p_min_sell_price),1)):(0,u.kq)("",!0),(0,u.Wm)(f,{outlined:"",modelValue:h.value,"onUpdate:modelValue":l[5]||(l[5]=e=>h.value=e),class:"q-mb-md",type:"number",label:e.$t("p2p_select_course")},null,8,["modelValue","label"]),(0,u.Wm)(f,{outlined:"",modelValue:U.value,"onUpdate:modelValue":l[6]||(l[6]=e=>U.value=e),class:"q-mb-md",type:"textarea",label:e.$t("p2p_select_rules")},null,8,["modelValue","label"])])):(0,u.kq)("",!0),V.value&&$.value&&h.value?((0,u.wg)(),(0,u.iD)("div",k,[(0,u.Wm)(c,{dense:"",class:"full-width q-py-md",color:"positive","no-caps":"",unelevated:"",disable:parseFloat(V.value)>parseFloat((0,t.SU)(z)[q.value.key][0][1])||parseFloat($.value)>parseFloat(V.value)||parseFloat(h.value)<parseFloat(q.value.p2p_min_sell_price),onClick:x,label:`${e.$t("p2p_create_offer")} ${V.value*h.value} RUB`},null,8,["disable","label"])])):(0,u.kq)("",!0)])),_:1})])),_:1})}}};var g=a(57786),q=a(490),V=a(76749),$=a(61357),h=a(33115),U=a(13119),W=a(24455),F=a(69984),z=a.n(F);const x=f,S=x;z()(f,"components",{QSelect:g.Z,QItem:q.Z,QItemSection:V.Z,QAvatar:$.Z,QItemLabel:h.Z,QInput:U.Z,QBtn:W.Z})}}]);