"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[783],{6783:(e,l,a)=>{a.r(l),a.d(l,{default:()=>z});a(40702),a(84641),a(83269),a(84607),a(25231),a(47725),a(69359),a(56408),a(940),a(13667);var t=a(59835),n=a(60499),u=a(86970),r=a(61957),i=a(99407),o=a(87270),d=a(23459),s=a(46190),m=a(9991),c=a(17779);const p=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),v={key:0,class:""},g={class:"flex items-center justify-start q-mb-lg"},b=["src"],w={class:"absolute-bottom-right cursor-pointer",for:"take_img"},y={class:"row items-center justify-end"},h={class:"q-mb-none"},_={class:"q-gutter-sm q-mb-lg"},f={class:"text-center text-weight-medium"},U={key:0,class:"text-center text-weight-medium"},x=["href"],V={__name:"CreatePerson",setup(e){const l=(0,d.Q)(),a=(0,s.c)(),V=(0,m.QT)(),k=(0,n.iH)(null),q=320,N=200,W="image/jpeg",$=1;localStorage.getItem("verify_sent");let R=(0,n.iH)(!1),L=(0,n.iH)(!1),P=(0,n.iH)(null);const j=(0,n.iH)({firstName:null,lastName:null,middleName:null,birthday:null,gender:0,userPhoto:null,imageUrl:null}),C=(0,t.Fl)((()=>!j.value.firstName||!j.value.lastName||!j.value.birthday||!j.value.userPhoto)),I=((0,t.Fl)((()=>a.addresses[a.currentAddressIdx].publicKey)),(0,t.Fl)((()=>a.addresses[a.currentAddressIdx].address))),z=async()=>{let e=k.value.files[0];const l=URL.createObjectURL(e),a=new Image;a.src=l,a.onerror=function(){URL.revokeObjectURL(this.src),c.log("Cannot load image")},a.onload=function(){URL.revokeObjectURL(this.src);const[l,t]=Q(a,q,N),n=document.createElement("canvas");n.width=l,n.height=t;const u=n.getContext("2d");u.drawImage(a,0,0,l,t),n.toBlob((l=>{c.log("Original file",e),c.log("Compressed file",l),l.size>1e6?(0,o.d)("negative",V.t("img_too_big")):l.size<11e3?(0,o.d)("negative",V.t("img_too_small")):(j.value.userPhoto=new File([l],"image.jpg",{type:l.type}),j.value.imageUrl=URL.createObjectURL(j.value.userPhoto))}),W,$)}};function Q(e,l,a){let t=e.width,n=e.height;return t>n?t>l&&(n=Math.round(n*l/t),t=l):n>a&&(t=Math.round(t*a/n),n=a),[t,n]}function S(){return j.value.middleName?j.value.firstName+" "+j.value.lastName+" "+j.value.middleName:j.value.firstName+" "+j.value.lastName}const Z=async()=>{R.value=!R.value;const e=await l.getKeyPair(),a=new i.EraChain.Type.PublicKeyAccount(e.publicKey),t=new Int8Array(await j.value.userPhoto.arrayBuffer()),n=await new i.EraChain.Type.PersonHuman(a,S(),new Date(j.value.birthday).getTime(),new Date(j.value.birthday).getTime(),j.value.gender,"",0,0,"","","",0,new Int8Array(0),t,""),u=await n.raw64(e.secretKey),r=new Blob([u],{type:"text/plain"}),o=new File([r],`${I.value}.txt`,{type:"text/plain"});c.log(r),P.value=URL.createObjectURL(o),R.value=!R.value,await navigator.share({title:"",text:V.t("my_raw"),files:[o]}),L.value=!0;let d=document.getElementById("d_link");d.href=URL.createObjectURL(o),d.setAttribute("download","raw.txt"),localStorage.setItem("verify_sent",!0)};return(e,l)=>{const a=(0,t.up)("page-header"),i=(0,t.up)("q-icon"),o=(0,t.up)("q-avatar"),d=(0,t.up)("q-input"),s=(0,t.up)("q-btn"),m=(0,t.up)("q-date"),c=(0,t.up)("q-popup-proxy"),V=(0,t.up)("q-radio"),q=(0,t.up)("btn"),N=(0,t.up)("page-body"),W=(0,t.up)("page"),$=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(N,{class:"q-px-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(a),p,(0,n.SU)(L)?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",v,[(0,t._)("div",g,[(0,t.Wm)(o,{size:"150px",class:"relative-position q-mr-md"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:j.value.imageUrl?j.value.imageUrl:"/noavatar.png",alt:""},null,8,b),(0,t._)("label",w,[(0,t.Wm)(i,{size:"md",color:"white",class:"bg-primary round q-pa-sm",name:"photo_camera"}),(0,t._)("input",{id:"take_img",ref_key:"photo",ref:k,onChange:z,style:{display:"none"},type:"file"},null,544)])])),_:1}),(0,t._)("p",null,(0,u.zw)(e.$t("photo")),1)]),(0,t.Wm)(d,{modelValue:j.value.firstName,"onUpdate:modelValue":l[0]||(l[0]=e=>j.value.firstName=e),dense:"",label:e.$t("name"),outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue","label"]),(0,t.Wm)(d,{modelValue:j.value.lastName,"onUpdate:modelValue":l[1]||(l[1]=e=>j.value.lastName=e),dense:"",label:e.$t("family"),outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue","label"]),(0,t.Wm)(d,{modelValue:j.value.middleName,"onUpdate:modelValue":l[2]||(l[2]=e=>j.value.middleName=e),dense:"",label:e.$t("otch"),outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue","label"]),(0,t.Wm)(d,{label:e.$t("birthday"),outlined:"",clearable:"",dense:"",modelValue:j.value.birthday,"onUpdate:modelValue":l[4]||(l[4]=e=>j.value.birthday=e),mask:"date",rules:["date"]},{append:(0,t.w5)((()=>[(0,t.Wm)(i,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{modelValue:j.value.birthday,"onUpdate:modelValue":l[3]||(l[3]=e=>j.value.birthday=e)},{default:(0,t.w5)((()=>[(0,t._)("div",y,[(0,t.wy)((0,t.Wm)(s,{label:e.$t("select"),color:"primary",flat:""},null,8,["label"]),[[$]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["label","modelValue"]),(0,t._)("p",h,(0,u.zw)(e.$t("gender")),1),(0,t._)("div",_,[(0,t.Wm)(V,{modelValue:j.value.gender,"onUpdate:modelValue":l[5]||(l[5]=e=>j.value.gender=e),val:0,label:e.$t("gender_m")},null,8,["modelValue","label"]),(0,t.Wm)(V,{modelValue:j.value.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>j.value.gender=e),val:1,label:e.$t("gender_f")},null,8,["modelValue","label"])]),(0,t.Wm)(q,{label:e.$t("create_raw"),disabled:(0,n.SU)(C),loading:(0,n.SU)(R),onClick:Z,outline:!1},null,8,["label","disabled","loading"])])),(0,t.wy)((0,t._)("div",null,[(0,t._)("p",f,(0,u.zw)(e.$t("wait_verify")),1),(0,n.SU)(P)?((0,t.wg)(),(0,t.iD)("p",U,[(0,t.Uk)((0,u.zw)(e.$t("wait_verify_text1")),1),(0,t._)("a",{style:{},id:"d_link",href:(0,n.SU)(P)},(0,u.zw)(e.$t("wait_verify_text2")),9,x),(0,t.Uk)(" "+(0,u.zw)(e.$t("wait_verify_text3")),1)])):(0,t.kq)("",!0)],512),[[r.F8,(0,n.SU)(L)]])])),_:1})])),_:1})}}};var k=a(61357),q=a(22857),N=a(13119),W=a(52765),$=a(67088),R=a(24455),L=a(11480),P=a(62146),j=a(69984),C=a.n(j);const I=V,z=I;C()(V,"components",{QAvatar:k.Z,QIcon:q.Z,QInput:N.Z,QPopupProxy:W.Z,QDate:$.Z,QBtn:R.Z,QRadio:L.Z}),C()(V,"directives",{ClosePopup:P.Z})}}]);