"use strict";(globalThis["webpackChunkrolf_wallet"]=globalThis["webpackChunkrolf_wallet"]||[]).push([[783],{6783:(e,l,a)=>{a.r(l),a.d(l,{default:()=>R});a(40702),a(84641),a(83269),a(84607),a(25231),a(47725),a(69359),a(56408),a(940),a(13667);var t=a(59835),u=a(60499),n=a(99407),o=a(87270),r=a(23459),s=a(46190),i=a(17779);const d=(0,t._)("div",{class:"",style:{height:"60px"}},null,-1),m={key:0,class:""},c={class:"flex items-center justify-start q-mb-lg"},p=["src"],v={class:"absolute-bottom-right cursor-pointer",for:"take_img"},g=(0,t._)("p",null,"Фото *",-1),b={class:"row items-center justify-end"},h=(0,t._)("p",{class:"q-mb-none"},"Пол*",-1),y={class:"q-gutter-sm q-mb-lg"},w={key:1},f=(0,t._)("p",{class:"text-center text-weight-medium"},"Ожидайте верификацию",-1),_=[f],U={__name:"CreatePerson",setup(e){const l=(0,r.Q)(),a=(0,s.c)(),f=(0,u.iH)(null),U=320,V=200,q="image/jpeg",N=1;localStorage.getItem("verify_sent");let x=(0,u.iH)(!1),W=(0,u.iH)(!1);const k=(0,u.iH)({firstName:null,lastName:null,middleName:null,birthday:null,gender:0,userPhoto:null,imageUrl:null}),P=(0,t.Fl)((()=>!k.value.firstName||!k.value.lastName||!k.value.birthday||!k.value.userPhoto)),C=((0,t.Fl)((()=>a.addresses[a.currentAddressIdx].publicKey)),(0,t.Fl)((()=>a.addresses[a.currentAddressIdx].address))),I=async()=>{let e=f.value.files[0];const l=URL.createObjectURL(e),a=new Image;a.src=l,a.onerror=function(){URL.revokeObjectURL(this.src),i.log("Cannot load image")},a.onload=function(){URL.revokeObjectURL(this.src);const[l,t]=j(a,U,V),u=document.createElement("canvas");u.width=l,u.height=t;const n=u.getContext("2d");n.drawImage(a,0,0,l,t),u.toBlob((l=>{i.log("Original file",e),i.log("Compressed file",l),l.size<11e3?(0,o.d)("negative","Выберите другое изображение"):(k.value.userPhoto=new File([l],"image.jpg",{type:l.type}),k.value.imageUrl=URL.createObjectURL(k.value.userPhoto))}),q,N)}};function j(e,l,a){let t=e.width,u=e.height;return t>u?t>l&&(u=Math.round(u*l/t),t=l):u>a&&(t=Math.round(t*a/u),u=a),[t,u]}function Q(){return k.value.middleName?k.value.firstName+" "+k.value.lastName+" "+k.value.middleName:k.value.firstName+" "+k.value.lastName}const R=async()=>{x.value=!x.value;const e=await l.getKeyPair(),a=new n.EraChain.Type.PublicKeyAccount(e.publicKey),t=new Int8Array(await k.value.userPhoto.arrayBuffer()),u=await new n.EraChain.Type.PersonHuman(a,Q(),new Date(k.value.birthday).getTime(),new Date(k.value.birthday).getTime(),k.value.gender,"",0,0,"","","",0,new Int8Array(0),t,""),o=await u.raw64(e.secretKey),r=new Blob([o],{type:"text/plain"}),s=new File([r],`${C.value}.txt`,{type:"text/plain"});i.log(r),x.value=!x.value,await navigator.share({title:"",text:"Мой raw код для верификации",files:[s]}),W.value=!0,localStorage.setItem("verify_sent",!0)};return(e,l)=>{const a=(0,t.up)("page-header"),n=(0,t.up)("q-icon"),o=(0,t.up)("q-avatar"),r=(0,t.up)("q-input"),s=(0,t.up)("q-btn"),i=(0,t.up)("q-date"),U=(0,t.up)("q-popup-proxy"),V=(0,t.up)("q-radio"),q=(0,t.up)("btn"),N=(0,t.up)("page-body"),C=(0,t.up)("page"),j=(0,t.Q2)("close-popup");return(0,t.wg)(),(0,t.j4)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(N,{class:"q-px-md"},{default:(0,t.w5)((()=>[(0,t.Wm)(a),d,(0,u.SU)(W)?((0,t.wg)(),(0,t.iD)("div",w,_)):((0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("div",c,[(0,t.Wm)(o,{size:"150px",class:"relative-position q-mr-md"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:k.value.imageUrl?k.value.imageUrl:"/noavatar.png",alt:""},null,8,p),(0,t._)("label",v,[(0,t.Wm)(n,{size:"sm",color:"white",class:"bg-primary round q-pa-sm",name:"photo_camera"}),(0,t._)("input",{id:"take_img",ref_key:"photo",ref:f,onChange:I,style:{display:"none"},type:"file"},null,544)])])),_:1}),g]),(0,t.Wm)(r,{modelValue:k.value.firstName,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value.firstName=e),dense:"",label:"Имя*",outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue"]),(0,t.Wm)(r,{modelValue:k.value.lastName,"onUpdate:modelValue":l[1]||(l[1]=e=>k.value.lastName=e),dense:"",label:"Фамилия *",outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue"]),(0,t.Wm)(r,{modelValue:k.value.middleName,"onUpdate:modelValue":l[2]||(l[2]=e=>k.value.middleName=e),dense:"",label:"Отчество",outlined:"",clearable:"",class:"q-mb-md"},null,8,["modelValue"]),(0,t.Wm)(r,{label:"Дата рождения*",outlined:"",clearable:"",dense:"",modelValue:k.value.birthday,"onUpdate:modelValue":l[4]||(l[4]=e=>k.value.birthday=e),mask:"date",rules:["date"]},{append:(0,t.w5)((()=>[(0,t.Wm)(n,{name:"event",class:"cursor-pointer"},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{modelValue:k.value.birthday,"onUpdate:modelValue":l[3]||(l[3]=e=>k.value.birthday=e)},{default:(0,t.w5)((()=>[(0,t._)("div",b,[(0,t.wy)((0,t.Wm)(s,{label:"Выбрать",color:"primary",flat:""},null,512),[[j]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),h,(0,t._)("div",y,[(0,t.Wm)(V,{modelValue:k.value.gender,"onUpdate:modelValue":l[5]||(l[5]=e=>k.value.gender=e),val:0,label:"Мужской"},null,8,["modelValue"]),(0,t.Wm)(V,{modelValue:k.value.gender,"onUpdate:modelValue":l[6]||(l[6]=e=>k.value.gender=e),val:1,label:"Женский"},null,8,["modelValue"])]),(0,t.Wm)(q,{label:"Создать код",disabled:(0,u.SU)(P),loading:(0,u.SU)(x),onClick:R,outline:!1},null,8,["disabled","loading"])]))])),_:1})])),_:1})}}};var V=a(61357),q=a(22857),N=a(13119),x=a(52765),W=a(67088),k=a(24455),P=a(11480),C=a(62146),I=a(69984),j=a.n(I);const Q=U,R=Q;j()(U,"components",{QAvatar:V.Z,QIcon:q.Z,QInput:N.Z,QPopupProxy:x.Z,QDate:W.Z,QBtn:k.Z,QRadio:P.Z}),j()(U,"directives",{ClosePopup:C.Z})}}]);