import{d as l,o,a as r,f as a,t as i,m as h,n as c,_,F as n,r as s,k as f,q as b}from"./yeDdLpfO.js";const y=["href"],w=["src","alt"],k={class:"info"},v=l({__name:"Project",props:{title:{},color:{},whiteText:{type:Boolean},projectUrl:{},imageUrl:{}},setup(m){return(e,p)=>(o(),r("a",{href:e.projectUrl,target:"_blank",class:c(["project",{[e.color]:!0,white:e.whiteText,clicky:e.projectUrl!==void 0}])},[a("img",{src:e.imageUrl,alt:e.title},null,8,w),a("div",k,[a("h1",null,i(e.title),1),a("p",null,[h(e.$slots,"default",{},void 0,!0)])])],10,y))}}),U=_(v,[["__scopeId","data-v-d4251bc0"]]),A={class:"pt-5 pb-52"},T={key:0},j=a("h1",{class:"text-center font-bold"},"to be continued...",-1),B=l({__name:"projects",setup(m){const e=[{name:"Allchemy",color:"from-yellow-400",whiteText:!1,projectUrl:"https://allchemy.io",imageUrl:"/img/allchemy.png",description:`
      A fun web game where players combine items together to make new items.
      All items and item combinations are generated using GPT-3.5, making the game virtually
      infinite.
    `},{name:"ATLAS",color:"from-black",whiteText:!0,imageUrl:"/img/atlas.png",description:[`
        An interactive simulation of a programmable computer, with the ability to
        zoom in and look at individual transistors as the computer runs a program.
        Started out as a hobby project, but eventually became my 3rd year project at
        university.
      `,"Working on a more polished version of ATLAS suitable for release."]},{name:"Atlang",color:"from-[#1f1f1f]",whiteText:!0,projectUrl:"https://github.com/PitsPower/atlc",imageUrl:"/img/atlang.png",description:`
      A statically typed programming language, with a compiler built in Rust, designed to run on a
      similar architecture to the one showcased in ATLAS. My 4th year university project.
    `},{name:"Bonk Leagues",color:"from-[#013e79]",whiteText:!0,projectUrl:"https://bonkleagues.io",imageUrl:"/img/bonkleagues.png",description:`
      A collection of tools for the web game bonk.io, including an editor for
      in-game avatars, and a Chrome extension for the game.
    `}];return(p,x)=>{const u=U;return o(),r("div",A,[(o(),r(n,null,s(e,t=>f(u,{class:"mb-10",title:t.name,color:t.color,"white-text":t.whiteText,"project-url":t.projectUrl,"image-url":t.imageUrl},{default:b(()=>[typeof t.description=="string"?(o(),r("div",T,i(t.description),1)):(o(!0),r(n,{key:1},s(t.description,(d,g)=>(o(),r("div",{class:c({"mt-3":g>0})},i(d),3))),256))]),_:2},1032,["title","color","white-text","project-url","image-url"])),64)),j])}}});export{B as default};
