import{d as H,c as u,o as g,a as y,F,r as L,n as at,t as V,u as m,_ as U,b as j,w as ot,e as st,f as a,g as B,h as $,i as rt,j as it,k as A,p as lt,l as ct}from"./VANZdYBv.js";import{u as dt}from"./CqLldxa6.js";import{u as ut}from"./C3C5eqof.js";const ft=H({__name:"CountdownNumber",props:{value:{},padding:{}},setup(t){const i=t,v=u(()=>i.value.toString().padStart(i.padding??0,"0").split(""));return(r,s)=>(g(),y("span",null,[(g(!0),y(F,null,L(m(v),(C,b)=>(g(),y("span",{class:at(["digit",{"mr-2":b===0}])},V(C),3))),256))]))}}),ht=U(ft,[["__scopeId","data-v-e67acf9f"]]),D=200,mt=800,gt=.1,vt=.3,P=.5,_t=.5,pt=12,yt=800,bt=1600,xt=150,It=3500,Mt=["#FFC700","#FF0000","#2E3191","#41BBC7"];var z={props:{particleCount:{type:Number,default:xt},particleSize:{type:Number,default:pt},duration:{type:Number,default:It},colors:{type:Array,default:Mt},force:{type:Number,default:_t},stageHeight:{type:Number,default:yt},stageWidth:{type:Number,default:bt},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(t){const i=j(!0),v=(e,n)=>{Y(e,{degree:n})},r=u(()=>C(t.particleCount,t.colors));ot(()=>{t.particleCount>300&&console.log("[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device 😉")});const s=u(()=>W(t.particleCount,t.duration,t.colors,t.particleSize,t.force,t.stageHeight,t.stageWidth));st(async()=>{await b(t.duration),t.shouldDestroyAfterDone&&(i.value=!1)});const C=(e,n)=>{const o=360/e;return Array.from({length:e},(h,d)=>({color:n[d%n.length],degree:d*o}))},b=e=>new Promise(n=>setTimeout(n,e));function f(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((e+Number.EPSILON)*10**n)/10**n}function S(e,n){if(e===n)return!0;if(e==null||n==null||e.length!==n.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!==n[o])return!1;return!0}const _=(e,n,o,h,d)=>(e-n)*(d-h)/(o-n)+h,N=(e,n)=>{const o=e+n;return o>360?o-360:o},T=()=>Math.random()>.5,x=[0,0,1],k=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],x],Z=e=>!S(k[e],x)&&T(),I=e=>typeof e>"u",M=e=>{console.error(e)};function W(e,n,o,h,d,w,E){const p=Number.isSafeInteger;return!I(e)&&p(e)&&e<0?(M("particleCount must be a positive integer"),!1):!I(n)&&p(n)&&n<0?(M("duration must be a positive integer"),!1):!I(o)&&!Array.isArray(o)?(M("colors must be an array of strings"),!1):!I(h)&&p(h)&&h<0?(M("particleSize must be a positive integer"),!1):!I(d)&&p(d)&&(d<0||d>1)?(M("force must be a positive integer and should be within 0 and 1"),!1):!I(w)&&typeof w=="number"&&p(w)&&w<0?(M("floorHeight must be a positive integer"),!1):!I(E)&&typeof E=="number"&&p(E)&&E<0?(M("floorWidth must be a positive integer"),!1):!0}function Y(e,n){let{degree:o}=n;const h=_(Math.abs(N(o,90)-180),0,180,-t.stageWidth/2,t.stageWidth/2),d=Math.random()*(mt-D)+D,w=Math.round(Math.random()*(k.length-1)),E=t.duration-Math.round(Math.random()*1e3),p=Math.random()<gt,R=Z(w),O=p?f(Math.random()*vt,2):0,G=O*-1,J=O,X=f(Math.abs(_(Math.abs(N(o,90)-180),0,180,-1,1)),4),q=f(Math.random()*P,4),Q=f(Math.random()*t.force*(T()?1:-1),4),K=P,tt=f(Math.max(_(Math.abs(o-180),0,180,t.force,-t.force),0),4),l=(et,nt)=>e==null?void 0:e.style.setProperty(et,nt+"");l("--x-landing-point",`${h}px`),l("--duration-chaos",`${E}ms`),l("--x1",`${O}`),l("--x2",`${G}`),l("--x3",`${J}`),l("--x4",`${X}`),l("--y1",`${q}`),l("--y2",`${Q}`),l("--y3",`${K}`),l("--y4",`${tt}`),l("--width",`${R?t.particleSize:Math.round(Math.random()*4)+t.particleSize/2}px`),l("--height",(R?t.particleSize:Math.round(Math.random()*2)+t.particleSize)+"px"),l("--rotation",`${k[w].join()}`),l("--rotation-duration",`${d}ms`),l("--border-radius",`${R?"50%":"0"}`)}return{isVisible:i,isValid:s,stageHeight:t.stageHeight,particles:r,setItemRef:v}}};function wt(t,i,v,r,s,C){return r.isVisible&&r.isValid?(g(),y("div",{key:0,class:"confetti-container",style:B(`--floor-height: ${r.stageHeight}px;`)},[(g(!0),y(F,null,L(r.particles,b=>{let{color:f,degree:S}=b;return g(),y("div",{key:S,class:"particle",ref:_=>r.setItemRef(_,S)},[a("div",{style:B(`--bgcolor: ${f};`)},null,4)],512)}),128))],4)):$("",!0)}function Ct(t,i){i===void 0&&(i={});var v=i.insertAt;if(!(typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",v==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var St=`
@keyframes y-axis-4ff796ae {
to {
    transform: translate3d(0, var(--floor-height), 0);
}
}
@keyframes x-axis-4ff796ae {
to {
    transform: translate3d(var(--x-landing-point), 0, 0);
}
}
@keyframes rotation-4ff796ae {
to {
    transform: rotate3d(var(--rotation), 360deg);
}
}
.confetti-container[data-v-4ff796ae] {
  width: 0;
  height: 0;
  overflow: visible;
  position: relative;
  transform: translate3d(var(--x, 0), var(--y, 0), 0);
  z-index: 1200;
}
.confetti-container > .particle[data-v-4ff796ae] {
  animation: x-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--x1), var(--x2), var(--x3), var(--x4));
}
.confetti-container > .particle div[data-v-4ff796ae] {
  position: absolute;
  top: 0;
  left: 0;
  animation: y-axis-4ff796ae var(--duration-chaos) forwards cubic-bezier(var(--y1), var(--y2), var(--y3), var(--y4));
  width: var(--width);
  height: var(--height);
}
.confetti-container > .particle div[data-v-4ff796ae]:before {
  display: block;
  height: 100%;
  width: 100%;
  content: "";
  background-color: var(--bgcolor);
  animation: rotation-4ff796ae var(--rotation-duration) infinite linear;
  border-radius: var(--border-radius);
}
`;Ct(St);z.render=wt;z.__scopeId="data-v-4ff796ae";var Et=(()=>{const t=z;return t.install=i=>{i.component("ConfettiExplosion",t)},t})();const c=t=>(lt("data-v-6fb11cb6"),t=t(),ct(),t),Nt={class:"overflow-hidden mt-10"},Tt=c(()=>a("h1",{class:"text-5xl font-bold"},"about me",-1)),At={class:"flex flex-col xl:flex-row items-center xl:items-start mt-10"},kt=c(()=>a("img",{class:"basis-0 w-[400px] h-[400px]",src:"https://picsum.photos/400/400",alt:"Me!",width:"400",height:"400"},null,-1)),Rt={class:"stuff"},Ot=c(()=>a("p",null,"Hey! My name is Joseph Edwards.",-1)),$t=c(()=>a("p",null,"I like making cool stuff, whether that be through programming, writing, drawing, or whatever else.",-1)),Ft=c(()=>a("hr",{class:"border-black border-2"},null,-1)),zt=c(()=>a("p",null,"For the past 4 years I've been studying Computer Science at the University of Oxford.",-1)),Bt=c(()=>a("p",null,"I haven't graduated yet, but I'm due to graduate in",-1)),Dt={class:"text-center xl:text-start"},Pt={class:"group sm:mr-14 mb-5 sm:mb-0"},Ht=c(()=>a("div",null,"days",-1)),Lt=c(()=>a("br",{class:"sm:hidden"},null,-1)),Vt={class:"group mr-3"},Ut=c(()=>a("div",null,"hours",-1)),jt=c(()=>a("span",{class:"colon"},":",-1)),Zt={class:"group mr-3"},Wt=c(()=>a("div",null,"minutes",-1)),Yt=c(()=>a("span",{class:"colon"},":",-1)),Gt={class:"group"},Jt=c(()=>a("div",null,"seconds",-1)),Xt=14554944e5,qt=1721991e6,Qt=H({__name:"about",setup(t){dt({title:"joee.dev - about",ogTitle:"about me",ogSiteName:"joee.dev",ogImage:"/img/logo/256.png",ogDescription:"Hey! My name is Joseph Edwards."});const i=ut(),v=u(()=>i.value-Xt),r=u(()=>Math.floor(v.value/(1e3*60*60*24*365))),s=u(()=>Math.max(0,Math.floor((qt-i.value)/1e3))),C=u(()=>s.value%60),b=u(()=>Math.floor(s.value/60)%60),f=u(()=>Math.floor(s.value/(60*60))%24),S=u(()=>Math.floor(s.value/(60*60*24))),_=j(!1);return rt(s,(N,T)=>{T>0&&N<=0&&(_.value=!0)}),(N,T)=>{const x=ht;return g(),y("div",Nt,[Tt,a("div",At,[kt,a("div",Rt,[Ot,$t,a("p",null,"I've been programming since I was a kid, and I've been doing web development for "+V(m(r))+" years, in some form or another.",1),Ft,zt,m(_)?(g(),it(m(Et),{key:0,class:"absolute left-1/2"})):$("",!0),m(s)>0?(g(),y(F,{key:1},[Bt,a("div",Dt,[a("div",Pt,[A(x,{value:m(S),padding:2},null,8,["value"]),Ht]),Lt,a("div",Vt,[A(x,{value:m(f),padding:2},null,8,["value"]),Ut]),jt,a("div",Zt,[A(x,{value:m(b),padding:2},null,8,["value"]),Wt]),Yt,a("div",Gt,[A(x,{value:m(C),padding:2},null,8,["value"]),Jt])])],64)):$("",!0)])])])}}}),ne=U(Qt,[["__scopeId","data-v-6fb11cb6"]]);export{ne as default};
