import{G as f,b as c,w as l,i as d,H as i,I as v,J as m,K as h,A as p,L as H}from"./VANZdYBv.js";function M(n,t={}){const e=t.head||f();if(e)return e.ssr?e.push(n,t):I(e,n,t)}function I(n,t,e={}){const s=c(!1),r=c({});l(()=>{r.value=s.value?{}:h(t)});const a=n.push(r.value,e);return d(r,o=>{a.patch(o)}),p()&&(i(()=>{a.dispose()}),v(()=>{s.value=!0}),m(()=>{s.value=!1})),a}function U(n,t){const{title:e,titleTemplate:s,...r}=n;return M({title:e,titleTemplate:s,_flatMeta:r},{...t,transform(a){const u=H({...a._flatMeta});return delete a._flatMeta,{...a,meta:u}}})}export{U as u};
