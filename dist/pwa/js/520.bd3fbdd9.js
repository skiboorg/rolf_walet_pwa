"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[520],{33520:(e,l,a)=>{a.r(l),a.d(l,{default:()=>y});var t=a(59835),n=a(86970),u=a(46190),s=a(60499),o=a(39981),p=a.n(o);const r=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),i=(0,t.Uk)("Дата"),c=(0,t.Uk)("ФИО"),m={__name:"VerifiedPersons",setup(e){const l=(0,u.c)(),a=(0,s.iH)([]),o=(0,t.Fl)((()=>l.verifyPersonData));return(0,t.wF)((async()=>{const e=await p().get(`https://scan.rupay.pro/index/blockexplorer.json?person=${o.value.key}&lang=ru`);a.value=e.data.My_Persons})),(e,l)=>{const u=(0,t.up)("page-header"),s=(0,t.up)("q-item-label"),o=(0,t.up)("q-item-section"),p=(0,t.up)("q-item"),m=(0,t.up)("q-list"),w=(0,t.up)("page-body"),d=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(d,null,{default:(0,t.w5)((()=>[(0,t.Wm)(w,{class:"q-px-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(u),r,(0,t.Wm)(m,null,{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.value,((l,a)=>((0,t.wg)(),(0,t.j4)(p,{clickable:"",key:a,onClick:a=>e.$router.push({name:"verified_person",params:{person_key:l.key}})},{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(new Date(l.timestamp).toLocaleString()),1)])),_:2},1024),(0,t.Wm)(s,{caption:""},{default:(0,t.w5)((()=>[i])),_:1})])),_:2},1024),(0,t.Wm)(o,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,n.zw)(l.name),1)])),_:2},1024),(0,t.Wm)(s,{caption:""},{default:(0,t.w5)((()=>[c])),_:1})])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1})}}};var w=a(13246),d=a(490),_=a(76749),f=a(33115),k=a(69984),g=a.n(k);const h=m,y=h;g()(m,"components",{QList:w.Z,QItem:d.Z,QItemSection:_.Z,QItemLabel:f.Z})}}]);