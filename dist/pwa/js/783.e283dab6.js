"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[783],{6783:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Q});l(40702),l(84641),l(83269),l(84607),l(25231),l(47725),l(69359),l(56408),l(940),l(13667);var t=l(59835),n=l(60499),u=l(99407),r=l(23459),o=l(46190),s=l(17779);const i=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),d={key:0,class:""},m={class:"flex items-center justify-start q-mb-lg"},c=["src"],p={class:"absolute-bottom-right cursor-pointer"},v=(0,t._)("p",null,"Фото персоны*",-1),g={class:"row items-center justify-end"},b=(0,t._)("p",{class:"q-mb-none"},"Пол*",-1),h={class:"q-gutter-sm q-mb-lg"},y={key:1},w=(0,t._)("p",{class:"text-center text-weight-medium"},"Ожидайте верификацию",-1),f=[w],_={__name:"CreatePerson",setup(e){const a=(0,r.Q)(),l=(0,o.c)(),w=(0,n.iH)(null),_=320,U=180,V="image/jpeg",q=.5,x=localStorage.getItem("verify_sent");let W=(0,n.iH)(!1),P=(0,n.iH)(!1);const k=(0,n.iH)({firstName:null,lastName:null,birthday:null,gender:0,userPhoto:null,imageUrl:null}),C=(0,t.Fl)((()=>!k.value.firstName||!k.value.lastName||!k.value.birthday||!k.value.userPhoto)),I=((0,t.Fl)((()=>l.addresses[l.currentAddressIdx].publicKey)),(0,t.Fl)((()=>l.addresses[l.currentAddressIdx].address))),N=async()=>{let e=w.value.files[0];const a=URL.createObjectURL(e),l=new Image;l.src=a,l.onerror=function(){URL.revokeObjectURL(this.src),s.log("Cannot load image")},l.onload=function(){URL.revokeObjectURL(this.src);const[a,t]=j(l,_,U),n=document.createElement("canvas");n.width=a,n.height=t;const u=n.getContext("2d");u.drawImage(l,0,0,a,t),n.toBlob((a=>{s.log("Original file",e),s.log("Compressed file",a),k.value.userPhoto=new File([a],"image.jpg",{type:a.type}),k.value.imageUrl=URL.createObjectURL(k.value.userPhoto)}),V,q)}};function j(e,a,l){let t=e.width,n=e.height;return t>n?t>a&&(n=Math.round(n*a/t),t=a):n>l&&(t=Math.round(t*l/n),n=l),[t,n]}const Q=async()=>{W.value=!W.value;const e=await a.getKeyPair(),l=new u.EraChain.Type.PublicKeyAccount(e.publicKey),t=new Int8Array(await k.value.userPhoto.arrayBuffer()),n=await new u.EraChain.Type.PersonHuman(l,k.value.firstName+" "+k.value.lastName,new Date(k.value.birthday).getTime(),new Date(k.value.birthday).getTime(),k.value.gender,"",0,0,"","","",0,new Int8Array(0),t,""),r=await n.raw64(e.secretKey),o=new Blob([r],{type:"text/plain"}),i=new File([o],`${I.value}.txt`,{type:"text/plain"});s.log(o),W.value=!W.value,await navigator.share({title:"",text:"Мой raw код для верификации",files:[i]}),P.value=!0,localStorage.setItem("verify_sent",!0)};return(e,a)=>{const l=(0,t.up)("page-header"),u=(0,t.up)("q-icon"),r=(0,t.up)("q-avatar"),o=(0,t.up)("q-input"),s=(0,t.up)("q-btn"),_=(0,t.up)("q-date"),U=(0,t.up)("q-popup-proxy"),V=(0,t.up)("q-radio"),q=(0,t.up)("btn"),I=(0,t.up)("page-body"),j=(0,t.up)("page"),R=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(j,null,{default:(0,t.w5)((()=>[(0,t.Wm)(I,{class:"q-px-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(l),i,(0,n.SU)(P)||(0,n.SU)(x)?((0,t.wg)(),(0,t.iD)("div",y,f)):((0,t.wg)(),(0,t.iD)("div",d,[(0,t._)("div",m,[(0,t.Wm)(r,{size:"150px",class:"relative-position q-mr-md"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:k.value.imageUrl?k.value.imageUrl:"/noavatar.png",alt:""},null,8,c),(0,t._)("label",p,[(0,t.Wm)(u,{size:"sm",color:"white",class:"bg-primary round q-pa-sm",name:"photo_camera"}),(0,t._)("input",{ref_key:"photo",ref:w,onChange:N,style:{display:"none"},type:"file"},null,544)])])),_:1}),v]),(0,t.Wm)(o,{modelValue:k.value.firstName,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value.firstName=e),dense:"",label:"Имя*",outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue"]),(0,t.Wm)(o,{modelValue:k.value.lastName,"onUpdate:modelValue":a[1]||(a[1]=e=>k.value.lastName=e),dense:"",label:"Фамилия *",outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue"]),(0,t.Wm)(o,{label:"Дата рождения*",outlined:"",clearable:"",dense:"",modelValue:k.value.birthday,"onUpdate:modelValue":a[3]||(a[3]=e=>k.value.birthday=e),mask:"date",rules:["date"]},{append:(0,t.w5)((()=>[(0,t.Wm)(u,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{modelValue:k.value.birthday,"onUpdate:modelValue":a[2]||(a[2]=e=>k.value.birthday=e)},{default:(0,t.w5)((()=>[(0,t._)("div",g,[(0,t.wy)((0,t.Wm)(s,{label:"Выбрать",color:"primary",flat:""},null,512),[[R]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),b,(0,t._)("div",h,[(0,t.Wm)(V,{modelValue:k.value.gender,"onUpdate:modelValue":a[4]||(a[4]=e=>k.value.gender=e),val:0,label:"Мужской"},null,8,["modelValue"]),(0,t.Wm)(V,{modelValue:k.value.gender,"onUpdate:modelValue":a[5]||(a[5]=e=>k.value.gender=e),val:1,label:"Женский"},null,8,["modelValue"])]),(0,t.Wm)(q,{label:"Добавить персону",disabled:(0,n.SU)(C),loading:(0,n.SU)(W),onClick:Q,outline:!1},null,8,["disabled","loading"])]))])),_:1})])),_:1})}}};var U=l(61357),V=l(22857),q=l(64152),x=l(89133),W=l(67088),P=l(24455),k=l(11480),C=l(62146),I=l(69984),N=l.n(I);const j=_,Q=j;N()(_,"components",{QAvatar:U.Z,QIcon:V.Z,QInput:q.Z,QPopupProxy:x.Z,QDate:W.Z,QBtn:P.Z,QRadio:k.Z}),N()(_,"directives",{ClosePopup:C.Z})}}]);