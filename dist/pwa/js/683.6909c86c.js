(globalThis["webpackChunkrupay_wallet"]=globalThis["webpackChunkrupay_wallet"]||[]).push([[683],{75008:(e,t,a)=>{"use strict";a.d(t,{C:()=>o,d:()=>s});var l=a(13433),n=a(17779);const s=({seed:e,password:t})=>{const a={status:!0,seed:e},n=l.createCipher("aes192",t);return n.update(JSON.stringify(a),"utf8","hex")+n.final("hex")},o=({hash:e,password:t})=>{try{const a=l.createDecipher("aes192",t),n=a.update(e,"hex","utf8")+a.final("utf8"),s=JSON.parse(n);return!!s.status&&s.seed}catch(a){return n.log(a),!1}}},67683:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ee});var l=a(59835),n=a(36755),s=a.n(n);const o=e=>((0,l.dD)("data-v-9a0e4050"),e=e(),(0,l.Cn)(),e),i=o((()=>(0,l._)("h3",{class:"text-center text-bold text-gold-gradient"},"Технические работы",-1)));function u(e,t,a,n,o,u){const c=(0,l.up)("q-img"),d=(0,l.up)("page");return(0,l.wg)(),(0,l.j4)(d,{class:"bg-black flex column items-center justify-center q-pa-lg"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{ratio:4/3,fit:"contain",src:s()}),i])),_:1})}a(46727);var c=a(86970),d=a(60499),r=a(87270),g=a(75008),p=a(9991),v=a(18910),m=a(96928),_=a(43463),w=a(44974),h=a(17779);const b={class:"text3d text-h5 text-bold text-center text-primary q-mb-lg"},y={key:0},x={key:0,class:"flex column justify-between"},f={class:""},k={key:1,class:"pincode-tab"},q={__name:"Login",emits:["seedGood"],setup(e,{emit:t}){const a=(0,p.QT)(),n=(0,v.tv)(),s=[{label:"Русский",value:"ru-RU"},{label:"English",value:"en-US"},{label:"French",value:"fr-FR"},{label:"हिन्दी Hindī",value:"hi-IN"}],o=(0,d.iH)(null),i=(0,m.t)(),u=(0,_.s)(),q=(0,w.T)(),S=(0,d.iH)(""),H=(0,d.iH)(""),$=((0,d.iH)(!0),localStorage.getItem("hash"));async function C(e){const t=(0,g.C)({hash:$,password:e});t?(S.value=t,await D()):(0,r.d$)("negative",a.t("wrong_pin"))}async function D(){u.toggleLoadingState();const e=(0,g.d)({seed:S.value,password:H.value});await i.login(S.value,e);const t=localStorage.getItem("addresses");await q.connectWS(JSON.parse(t)[0].address),u.toggleLoadingState(),await n.push({name:"wallet_index"})}async function I(e){H.value=e,await D()}async function Q(){await i.logout()}function W(e){const a=/^[A-Za-z0-9]+$/;return!!a.test(e)&&(t("seedGood",{val:[43,44,86,87,88].includes(e.length)}),[43,44,86,87,88].includes(e.length))}(0,l.wF)((()=>{const e=localStorage.getItem("lang");o.value=s.find((t=>t.value===e))}));const z=()=>{h.log(o.value),localStorage.setItem("lang",o.value.value),n.go("/")};return(e,t)=>{const a=(0,l.up)("q-select"),n=(0,l.up)("q-input"),i=(0,l.up)("pin-code"),u=(0,l.up)("q-btn");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("p",b,(0,c.zw)(e.$t("login_title")),1),(0,d.SU)($)?((0,l.wg)(),(0,l.iD)("div",k,[(0,l.Wm)(i,{showDigits:!1,onPincode_ready:C}),(0,l.Wm)(u,{"no-caps":"",outline:"",flat:"",class:"full-width q-mt-md",onClick:Q,size:"14px",dense:"",color:"negative",label:e.$t("lost_pin")},null,8,["label"])])):((0,l.wg)(),(0,l.iD)("div",y,[(0,l.Wm)(a,{modelValue:o.value,"onUpdate:modelValue":[t[0]||(t[0]=e=>o.value=e),z],options:s,filled:"",behavior:"menu",label:"Выберите язык/Choose language",class:"bg-gold q-mb-lg"},null,8,["modelValue"]),(0,l.Wm)(n,{autofocus:"",filled:"",modelValue:S.value,"onUpdate:modelValue":t[1]||(t[1]=e=>S.value=e),color:"primary",label:e.$t("enter_seed"),class:"input-bg-gold",rules:[t=>t&&t.length>0||e.$t("req_field"),t=>W(t)||e.$t("wrong_seed")]},null,8,["modelValue","label","rules"]),W(S.value)?((0,l.wg)(),(0,l.iD)("div",x,[(0,l._)("div",f,[(0,l.Wm)(i,{showDigits:!0,onPincode_ready:I})])])):(0,l.kq)("",!0)]))],64)}}};var S=a(57786),H=a(13119),$=a(24455),C=a(69984),D=a.n(C);const I=q,Q=I;D()(q,"components",{QSelect:S.Z,QInput:H.Z,QBtn:$.Z});var W=a(99407);const z={class:"text3d text-h5 text-bold text-center text-primary"},U={key:0,class:""},V={class:"text-weight-bold text-center text-negative"},Z=["innerHTML"],L={class:"text-center"},T={class:"text-golder text-bold",target:"_blank",href:"https://wallet.rupay.pro/rupay_user_agreement.pdf"},F={key:1,class:""},j={class:"text-center q-mt-md"},N={key:2,class:""},O={class:"text-gold"},P={style:{"word-break":"break-all"},class:"text-caption bg-grey-3 q-pa-md"},R={class:"bg-grey-7 text-gold q-pa-md text-weight-medium"},J={__name:"Register",emits:["openLogin"],setup(e,{emit:t}){const a=(0,p.QT)(),n=(0,m.t)(),s=(0,v.tv)(),o=(0,w.T)(),i=(0,d.iH)(1),u=(0,d.iH)(""),_=((0,d.iH)(!0),(0,d.iH)(!1)),h=(0,d.iH)(!1);let b=(0,d.iH)(null);const y=(0,d.iH)([{agree:!1,text:a.t("reg_agree1")},{agree:!1,text:a.t("reg_agree2")},{agree:!1,text:a.t("reg_agree3")}]),x=(0,l.Fl)((()=>y.value[0].agree&&y.value[1].agree&&y.value[2].agree));function f(){t("openLogin")}async function k(e){u.value=e,await q()}async function q(){_.value=!_.value,b.value=await W.EraChain.Crypt.generateSeed(),_.value=!_.value,i.value=3}async function S(){_.value=!_.value;const e=(0,g.d)({seed:b.value,password:u.value});await n.login(b.value,e);const t=localStorage.getItem("addresses");await o.connectWS(JSON.parse(t)[0].address),await s.push({name:"wallet_index"}),_.value=!_.value}async function H(){await(0,r.QO)(b.value,"positive",a.t("seed_copy_done")),h.value=!0}return(e,t)=>{const a=(0,l.up)("q-toggle"),n=(0,l.up)("q-btn"),s=(0,l.up)("pin-code");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("p",z,(0,c.zw)(e.$t("reg_title")),1),1===i.value?((0,l.wg)(),(0,l.iD)("div",U,[(0,l._)("p",V,(0,c.zw)(e.$t("reg_agree")),1),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.value,((e,t)=>((0,l.wg)(),(0,l.j4)(a,{modelValue:y.value[t].agree,"onUpdate:modelValue":e=>y.value[t].agree=e,"checked-icon":"check",color:"green","unchecked-icon":"clear",class:"text-caption q-mb-md",style:{"line-height":"110%"}},{default:(0,l.w5)((()=>[(0,l._)("p",{class:"no-margin text-gold",innerHTML:e.text},null,8,Z)])),_:2},1032,["modelValue","onUpdate:modelValue"])))),256)),(0,l._)("p",L,[(0,l._)("a",T,(0,c.zw)(e.$t("user_agreement")),1)]),(0,d.SU)(x)?((0,l.wg)(),(0,l.j4)(n,{key:0,unelevated:"","no-caps":"",label:e.$t("seed_copy_next"),class:"bg-gold q-py-md full-width",onClick:t[0]||(t[0]=e=>i.value=2),type:"submit",outline:!1},null,8,["label"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0),2===i.value?((0,l.wg)(),(0,l.iD)("div",F,[(0,l.Wm)(s,{showDigits:!0,onPincode_ready:k}),(0,l._)("div",j,[(0,l._)("p",{class:"text-caption no-margin",onClick:f},(0,c.zw)(e.$t("have_seed")),1)])])):(0,l.kq)("",!0),3===i.value?((0,l.wg)(),(0,l.iD)("div",N,[(0,l._)("p",O,(0,c.zw)(e.$t("your_seed")),1),(0,l._)("p",P,(0,c.zw)((0,d.SU)(b)),1),(0,l.Wm)(n,{onClick:H,"no-caps":"",label:e.$t("seed_copy_btn"),unelevated:"",class:"bg-gold q-py-md full-width q-mb-md"},null,8,["label"]),(0,l._)("p",R,(0,c.zw)(e.$t("seed_copy")),1),(0,l.Wm)(n,{unelevated:"","no-caps":"",label:h.value?e.$t("seed_copy_next"):e.$t("seed_copy_need_copy"),disabled:!h.value,is_loading:_.value,onClick:S,class:"bg-gold q-py-md full-width",type:"submit",outline:!1},null,8,["label","disabled","is_loading"])])):(0,l.kq)("",!0)],64)}}};var Y=a(23175);const A=J,B=A;D()(J,"components",{QToggle:Y.Z,QBtn:$.Z});const E={name:"IndexPage",components:{Register:B,Login:Q},preFetch({redirect:e,router:t}){localStorage.getItem("seed")},setup(){const e=(0,d.iH)(!0),t=(0,d.iH)(!1),a=localStorage.getItem("hash"),l="RUPAY";function n(e){t.value=e.val}function s(a){t.value=!1,e.value=!0}return{loginActive:e,is_seed_good:t,hash:a,wallet_name:l,setSeed:n,openLogin:s}}};var G=a(11639),M=a(70335),K=a(18149);const X=(0,G.Z)(E,[["render",u],["__scopeId","data-v-9a0e4050"]]),ee=X;D()(E,"components",{QBtn:$.Z,QImg:M.Z,QField:K.Z})},36755:(e,t,a)=>{e.exports=a.p+"img/logo.ee83538b.png"}}]);