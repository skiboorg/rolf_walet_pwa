"use strict";(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[5453],{45453:(e,l,a)=>{a.r(l),a.d(l,{default:()=>R});var t=a(59835),u=a(86970),n=a(60499),s=a(91569),d=a(18910),p=a(46190),r=a(31655),i=(a(99407),a(98030),a(87270),a(23459)),o=a(17779);const w=(0,t._)("div",{class:"",style:{height:"50px"}},null,-1),c={class:"q-pa-md"},m=(0,t._)("br",null,null,-1),_=(0,t._)("br",null,null,-1),k=(0,t._)("span",{class:"text-bold"},"ВНИМАНИЕ",-1),y=(0,t.Uk)(" откуп будет происходить согласно росту ликвидного курса монеты."),f=(0,t._)("br",null,null,-1),b=(0,t._)("br",null,null,-1),U=(0,t.Uk)(),g=(0,t._)("span",{class:"text-bold text-negative"}," Отправленные монеты на откуп, будут выкуплены за рубли и вернуть монеты уже не получится.",-1),v={class:"text-bold"},q={key:2,class:"text-bold text-center text-positive"},W={key:3,class:"no-margin text-bold"},h=(0,t.Uk)("Дата"),F=(0,t.Uk)("Остаток"),x=(0,t.Uk)("Выкуплено"),z={__name:"Shance",setup(e){const l=(0,i.Q)(),a=(0,r.T)(),z=(0,d.yj)(),I=(0,n.iH)(0),S=(0,n.iH)([]),H=(0,p.c)(),L=((0,n.iH)(!1),(0,d.tv)(),(0,n.iH)({amount:null,address:"7PsEDvVphCpXwk7NrZyAyHNR7d6Fp57Xcy",title:`Выкуп по ${z.query.ip}`,message:"",encrypted:!1,fee:0,raw:0}),(0,t.Fl)((()=>H.addresses[H.currentAddressIdx].address)),(0,t.Fl)((()=>H.balances))),Q=(0,t.Fl)((()=>a.user)),Z=((0,t.Fl)((()=>l.unconfirmedTx)),(0,n.iH)([]));(0,t.wF)((async()=>{o.log(z.query.i),o.log(z.query.ip),S.value=Q.value.shance_holds.filter((e=>e.price.id===parseInt(z.query.i)));const e=await(0,s.h)("/api/p2p/shances");Z.value=e.data}));return(e,l)=>{const a=(0,t.up)("page-header"),s=(0,t.up)("q-input"),d=((0,t.up)("q-btn"),(0,t.up)("q-item-label")),p=(0,t.up)("q-item-section"),r=(0,t.up)("q-item"),i=(0,t.up)("q-list"),o=(0,t.up)("page-body"),H=(0,t.up)("page");return(0,t.wg)(),(0,t.j4)(H,null,{default:(0,t.w5)((()=>[(0,t.Wm)(o,null,{default:(0,t.w5)((()=>{var o;return[(0,t.Wm)(a),w,(0,t._)("div",c,[(0,t._)("p",null,[(0,t.Uk)("Просто выбери количество монет и получи откуп отправленных тобой монет по цене "+(0,u.zw)((0,n.SU)(z).query.ip)+" RUB за каждую монету.",1),m,_,k,y,f,b,U,g]),(0,t._)("p",v,(0,u.zw)(e.$t("your_balance"))+" OLF: "+(0,u.zw)((0,n.SU)(L)[2][0][1]),1),null!==(o=Z.value.find((e=>e.price===parseInt((0,n.SU)(z).query.ip))))&&void 0!==o&&o.is_active?((0,t.wg)(),(0,t.j4)(s,{key:0,outlined:"",modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=e=>I.value=e),label:"Сумма OLF",class:"q-mb-md",type:"number"},null,8,["modelValue"])):(0,t.kq)("",!0),((0,t.wg)(),(0,t.iD)("p",q,"Начат процесс выплат по "+(0,u.zw)((0,n.SU)(z).query.ip)+" RUB",1)),S.value.length>0?((0,t.wg)(),(0,t.iD)("p",W,"Текущие выкупы")):(0,t.kq)("",!0),S.value.length>0?((0,t.wg)(),(0,t.j4)(i,{key:4,dense:"",separator:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[h])),_:1})])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[F])),_:1})])),_:1}),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[x])),_:1})])),_:1})])),_:1}),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(S.value,(e=>((0,t.wg)(),(0,t.j4)(r,{dense:"",key:e.id},{default:(0,t.w5)((()=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(new Date(e.created_at).toLocaleDateString()),1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,{overline:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount))+" OLF",1)])),_:2},1024),(0,t.Wm)(d,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.amount)*parseInt((0,n.SU)(z).query.ip))+" RUB",1)])),_:2},1024)])),_:2},1024),(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(d,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok))+" OLF",1)])),_:2},1024),(0,t.Wm)(d,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,u.zw)(parseFloat(e.ostatok)*parseInt((0,n.SU)(z).query.ip))+" RUB",1)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,t.kq)("",!0)])]})),_:1})])),_:1})}}};var I=a(13119),S=a(24455),H=a(13246),L=a(490),Q=a(76749),Z=a(33115),D=a(69984),j=a.n(D);const B=z,R=B;j()(z,"components",{QInput:I.Z,QBtn:S.Z,QList:H.Z,QItem:L.Z,QItemSection:Q.Z,QItemLabel:Z.Z})}}]);