import{d as L,c as u,o as v,a as y,F,r as V,n as at,t as H,u as m,_ as U,b as Z,w as ot,e as st,f as a,g as B,h as $,i as rt,j as it,k as A,p as lt,l as ct}from"./yeDdLpfO.js";import{u as dt}from"./DIUbnNQT.js";const ut=L({__name:"CountdownNumber",props:{value:{},padding:{}},setup(t){const i=t,_=u(()=>i.value.toString().padStart(i.padding??0,"0").split(""));return(r,s)=>(v(),y("span",null,[(v(!0),y(F,null,V(m(_),(M,b)=>(v(),y("span",{class:at(["digit",{"mr-2":b===0}])},H(M),3))),256))]))}}),ft=U(ut,[["__scopeId","data-v-e67acf9f"]]),D=200,ht=800,mt=.1,vt=.3,P=.5,_t=.5,gt=12,pt=800,yt=1600,bt=150,xt=3500,It=["#FFC700","#FF0000","#2E3191","#41BBC7"];var z={props:{particleCount:{type:Number,default:bt},particleSize:{type:Number,default:gt},duration:{type:Number,default:xt},colors:{type:Array,default:It},force:{type:Number,default:_t},stageHeight:{type:Number,default:pt},stageWidth:{type:Number,default:yt},shouldDestroyAfterDone:{type:Boolean,default:!0}},setup(t){const i=Z(!0),_=(e,n)=>{Y(e,{degree:n})},r=u(()=>M(t.particleCount,t.colors));ot(()=>{t.particleCount>300&&console.log("[VUE-CONFETTI-EXPLOSION] That's a lot of confetti, you sure about that? A lesser number like 200 will still give off the party vibes while still not bricking the device 😉")});const s=u(()=>W(t.particleCount,t.duration,t.colors,t.particleSize,t.force,t.stageHeight,t.stageWidth));st(async()=>{await b(t.duration),t.shouldDestroyAfterDone&&(i.value=!1)});const M=(e,n)=>{const o=360/e;return Array.from({length:e},(h,d)=>({color:n[d%n.length],degree:d*o}))},b=e=>new Promise(n=>setTimeout(n,e));function f(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return Math.round((e+Number.EPSILON)*10**n)/10**n}function E(e,n){if(e===n)return!0;if(e==null||n==null||e.length!==n.length)return!1;for(let o=0;o<e.length;o++)if(e[o]!==n[o])return!1;return!0}const g=(e,n,o,h,d)=>(e-n)*(d-h)/(o-n)+h,N=(e,n)=>{const o=e+n;return o>360?o-360:o},T=()=>Math.random()>.5,x=[0,0,1],k=[[1,1,0],[1,0,1],[0,1,1],[1,0,0],[0,1,0],x],j=e=>!E(k[e],x)&&T(),I=e=>typeof e>"u",C=e=>{console.error(e)};function W(e,n,o,h,d,w,S){const p=Number.isSafeInteger;return!I(e)&&p(e)&&e<0?(C("particleCount must be a positive integer"),!1):!I(n)&&p(n)&&n<0?(C("duration must be a positive integer"),!1):!I(o)&&!Array.isArray(o)?(C("colors must be an array of strings"),!1):!I(h)&&p(h)&&h<0?(C("particleSize must be a positive integer"),!1):!I(d)&&p(d)&&(d<0||d>1)?(C("force must be a positive integer and should be within 0 and 1"),!1):!I(w)&&typeof w=="number"&&p(w)&&w<0?(C("floorHeight must be a positive integer"),!1):!I(S)&&typeof S=="number"&&p(S)&&S<0?(C("floorWidth must be a positive integer"),!1):!0}function Y(e,n){let{degree:o}=n;const h=g(Math.abs(N(o,90)-180),0,180,-t.stageWidth/2,t.stageWidth/2),d=Math.random()*(ht-D)+D,w=Math.round(Math.random()*(k.length-1)),S=t.duration-Math.round(Math.random()*1e3),p=Math.random()<mt,R=j(w),O=p?f(Math.random()*vt,2):0,G=O*-1,X=O,q=f(Math.abs(g(Math.abs(N(o,90)-180),0,180,-1,1)),4),J=f(Math.random()*P,4),Q=f(Math.random()*t.force*(T()?1:-1),4),K=P,tt=f(Math.max(g(Math.abs(o-180),0,180,t.force,-t.force),0),4),l=(et,nt)=>e==null?void 0:e.style.setProperty(et,nt+"");l("--x-landing-point",`${h}px`),l("--duration-chaos",`${S}ms`),l("--x1",`${O}`),l("--x2",`${G}`),l("--x3",`${X}`),l("--x4",`${q}`),l("--y1",`${J}`),l("--y2",`${Q}`),l("--y3",`${K}`),l("--y4",`${tt}`),l("--width",`${R?t.particleSize:Math.round(Math.random()*4)+t.particleSize/2}px`),l("--height",(R?t.particleSize:Math.round(Math.random()*2)+t.particleSize)+"px"),l("--rotation",`${k[w].join()}`),l("--rotation-duration",`${d}ms`),l("--border-radius",`${R?"50%":"0"}`)}return{isVisible:i,isValid:s,stageHeight:t.stageHeight,particles:r,setItemRef:_}}};function Ct(t,i,_,r,s,M){return r.isVisible&&r.isValid?(v(),y("div",{key:0,class:"confetti-container",style:B(`--floor-height: ${r.stageHeight}px;`)},[(v(!0),y(F,null,V(r.particles,b=>{let{color:f,degree:E}=b;return v(),y("div",{key:E,class:"particle",ref:g=>r.setItemRef(g,E)},[a("div",{style:B(`--bgcolor: ${f};`)},null,4)],512)}),128))],4)):$("",!0)}function wt(t,i){i===void 0&&(i={});var _=i.insertAt;if(!(typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",_==="top"&&r.firstChild?r.insertBefore(s,r.firstChild):r.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var Mt=`
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
`;wt(Mt);z.render=Ct;z.__scopeId="data-v-4ff796ae";var Et=(()=>{const t=z;return t.install=i=>{i.component("ConfettiExplosion",t)},t})();const c=t=>(lt("data-v-33cd2523"),t=t(),ct(),t),St={class:"overflow-hidden mt-10"},Nt=c(()=>a("h1",{class:"text-5xl font-bold"},"about me",-1)),Tt={class:"flex flex-col xl:flex-row items-center xl:items-start mt-10"},At=c(()=>a("img",{class:"basis-0 w-[400px] h-[400px]",src:"https://picsum.photos/400/400",alt:"Me!",width:"400",height:"400"},null,-1)),kt={class:"stuff"},Rt=c(()=>a("p",null,"Hey! My name is Joseph Edwards.",-1)),Ot=c(()=>a("p",null,"I like making cool stuff, whether that be through programming, writing, drawing, or whatever else.",-1)),$t=c(()=>a("hr",{class:"border-black border-2"},null,-1)),Ft=c(()=>a("p",null,"For the past 4 years I've been studying Computer Science at the University of Oxford.",-1)),zt=c(()=>a("p",null,"I haven't graduated yet, but I'm due to graduate in",-1)),Bt={class:"text-center xl:text-start"},Dt={class:"group sm:mr-14 mb-5 sm:mb-0"},Pt=c(()=>a("div",null,"days",-1)),Lt=c(()=>a("br",{class:"sm:hidden"},null,-1)),Vt={class:"group mr-3"},Ht=c(()=>a("div",null,"hours",-1)),Ut=c(()=>a("span",{class:"colon"},":",-1)),Zt={class:"group mr-3"},jt=c(()=>a("div",null,"minutes",-1)),Wt=c(()=>a("span",{class:"colon"},":",-1)),Yt={class:"group"},Gt=c(()=>a("div",null,"seconds",-1)),Xt=14554944e5,qt=1721991e6,Jt=L({__name:"about",setup(t){const i=dt(),_=u(()=>i.value-Xt),r=u(()=>Math.floor(_.value/(1e3*60*60*24*365))),s=u(()=>Math.max(0,Math.floor((qt-i.value)/1e3))),M=u(()=>s.value%60),b=u(()=>Math.floor(s.value/60)%60),f=u(()=>Math.floor(s.value/(60*60))%24),E=u(()=>Math.floor(s.value/(60*60*24))),g=Z(!1);return rt(s,(N,T)=>{T>0&&N<=0&&(g.value=!0)}),(N,T)=>{const x=ft;return v(),y("div",St,[Nt,a("div",Tt,[At,a("div",kt,[Rt,Ot,a("p",null,"I've been programming since I was a kid, and I've been doing web development for "+H(m(r))+" years, in some form or another.",1),$t,Ft,m(g)?(v(),it(m(Et),{key:0,class:"absolute left-1/2"})):$("",!0),m(s)>0?(v(),y(F,{key:1},[zt,a("div",Bt,[a("div",Dt,[A(x,{value:m(E),padding:2},null,8,["value"]),Pt]),Lt,a("div",Vt,[A(x,{value:m(f),padding:2},null,8,["value"]),Ht]),Ut,a("div",Zt,[A(x,{value:m(b),padding:2},null,8,["value"]),jt]),Wt,a("div",Yt,[A(x,{value:m(M),padding:2},null,8,["value"]),Gt])])],64)):$("",!0)])])])}}}),te=U(Jt,[["__scopeId","data-v-33cd2523"]]);export{te as default};
