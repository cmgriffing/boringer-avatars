import{B as x,W as c,Z as l,t as H,T as O,_ as v,f as b,u as k,a as M,e as q,D as A}from"./q-f7341803.js";import{u as N,t as p,c as W,a as j,C as Q,D as S,R as U,b as B,l as V,d as Z,r as z,e as F,f as Y}from"./q-ccc4b91a.js";const G=()=>{const n=N();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const r=x("url");if(!r)throw new Error("Missing Qwik URL Env Data");const s=new URL(r),e=c({href:s.href,pathname:s.pathname,query:Object.fromEntries(s.searchParams.entries()),params:n.params}),h=c({path:p(s)}),t=c(W),o=c({headings:void 0,menu:void 0}),u=c({contents:void 0});return l(j,o),l(Q,u),l(S,t),l(U,e),l(B,h),H(O(()=>v(()=>Promise.resolve().then(()=>K),void 0),"s_2Eo7WCpaqI8",[o,u,t,n,e,h])),b(k,{},"qY_0")},J=async({track:n})=>{const[r,s,e,h,t,o]=M(),u=q(""),{routes:C,menus:g,cacheModules:E,trailingSlash:_}=await v(()=>import("./q-cfb52d6c.js"),["build/q-cfb52d6c.js","build/q-f7341803.js"]),w=n(()=>o.path),a=new URL(w,t.href),m=a.pathname,y=V(C,g,E,m),D=Z(a.href,!0),f=await y;if(f){const[R,P,L]=f,d=P,I=d[d.length-1];if(m.endsWith("/")){if(!_){a.pathname=m.slice(0,-1),o.path=p(a);return}}else if(_){a.pathname+="/",o.path=p(a);return}t.href=a.href,t.pathname=m,t.params={...R},t.query=Object.fromEntries(a.searchParams.entries()),r.headings=I.headings,r.menu=L,s.contents=A(d);const T=await D,i=z(T,t,d,u);F.clear(),e.links=i.links,e.meta=i.meta,e.styles=i.styles,e.title=i.title,e.frontmatter=i.frontmatter,Y(window,o)}},K=Object.freeze(Object.defineProperty({__proto__:null,s_2Eo7WCpaqI8:J,s_TxCFOy819ag:G},Symbol.toStringTag,{value:"Module"}));export{J as s_2Eo7WCpaqI8,G as s_TxCFOy819ag};