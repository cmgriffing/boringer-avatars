import{o as d,T as y,_ as p,r as P,V as v,D as j,B,K as l,f as V}from"./q-cb38e6f5.js";const N='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/boringer-avatars/qwik/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',$=l("qc-c"),tt=l("qc-ic"),H=l("qc-h"),K=l("qc-l"),M=l("qc-n"),et=d(y(()=>p(()=>import("./q-5cb50449.js"),["build/q-5cb50449.js","build/q-cb38e6f5.js"]),"s_AKetNByE5TM")),k=new WeakMap,Q=Symbol(),D=Symbol(),g=new Map,st=async(t,e,s,n)=>{if(Array.isArray(t))for(const o of t){const a=o[0].exec(n);if(a){const r=o[1],c=Y(o[2],a),h=o[4],C=new Array(r.length),u=[],W=F(e,n);let L;return r.forEach((f,x)=>{T(f,u,U=>C[x]=U,s)}),T(W,u,f=>L=f==null?void 0:f.default,s),u.length>0&&await Promise.all(u),[c,C,L,h]}}return null},T=(t,e,s,n)=>{if(typeof t=="function"){const o=k.get(t);if(o)s(o);else{const a=t();typeof a.then=="function"?e.push(a.then(r=>{n!==!1&&k.set(t,r),s(r)})):a&&s(a)}}},F=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const s=t.find(n=>n[0]===e||e.startsWith(n[0]+(e.endsWith("/")?"":"/")));if(s)return s[1]}},Y=(t,e)=>{const s={};if(t)for(let n=0;n<t.length;n++)s[t[n]]=e?e[n+1]:"";return s},nt=(t,e,s,n)=>{const o=Z(),a={data:t?t.body:null,head:o,withLocale:r=>P(n,r),...e};for(let r=s.length-1;r>=0;r--){const c=s[r]&&s[r].head;c&&(typeof c=="function"?A(o,P(n,()=>c(a))):typeof c=="object"&&A(o,c))}return a.head},A=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),_(t.meta,e.meta),_(t.links,e.links),_(t.styles,e.styles),Object.assign(t.frontmatter,e.frontmatter)},_=(t,e)=>{if(Array.isArray(e))for(const s of e){if(typeof s.key=="string"){const n=t.findIndex(o=>o.key===s.key);if(n>-1){t[n]=s;continue}}t.push(s)}},Z=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),ot=()=>v(H),at=()=>v(K),rt=()=>v(M),ct=()=>j(B("qwikcity")),I=t=>t.pathname+t.search+t.hash,i=(t,e)=>new URL(t,e.href),w=(t,e)=>t.origin===e.origin,O=(t,e)=>t.pathname+t.search===e.pathname+e.search,z=(t,e)=>t.pathname===e.pathname,q=(t,e)=>w(t,e)&&!O(t,e),G=(t,e)=>t+(t.endsWith("/")?"":"/")+"q-data.json"+(e??""),it=(t,e)=>{const s=t.href;if(typeof s=="string"&&s.trim()!==""&&typeof t.target!="string")try{const n=i(s,e),o=i("",e);if(w(n,o))return I(n)}catch(n){console.error(n)}return null},ft=(t,e,s)=>{if(t.prefetch!==!1&&e){const n=i(e,s);if(!z(n,i("",s)))return""}return null},lt=(t,e)=>{const s=t.location,n=i(e.path,s);q(s,n)&&(R(t,s,n),t.history.pushState("","",I(n))),t[D]||(t[D]=1,t.addEventListener("popstate",()=>{const o=t.location,a=i(e.path,o);q(o,a)&&(R(t,a,o),e.path=I(o))}),t.removeEventListener("popstate",t[Q]))},R=async(t,e,s)=>{const n=t.document,o=s.hash;if(O(e,s))e.hash!==o&&(await m(),o?b(n,o):t.scrollTo(0,0));else if(o)for(let a=0;a<24&&(await m(),!b(n,o));a++);else await m(),t.scrollTo(0,0)},m=()=>new Promise(t=>setTimeout(t,12)),b=(t,e)=>{const s=e.slice(1),n=t.getElementById(s);return n&&n.scrollIntoView(),n},S=t=>{typeof document<"u"&&document.dispatchEvent(new CustomEvent("qprefetch",{detail:t}))},J=async(t,e)=>{const s=new URL(t),n=s.pathname,o=s.search,a=G(n,o);let r=g.get(a);return S({links:[n]}),r||(r=fetch(a).then(c=>{if(c.ok&&(c.headers.get("content-type")||"").includes("json"))return c.json().then(h=>(S({bundles:h.prefetch}),e&&g.delete(a),h));g.delete(a)}),g.set(a,r)),r},ht=d(y(()=>p(()=>import("./q-ff253631.js"),["build/q-ff253631.js","build/q-cb38e6f5.js"]),"s_TxCFOy819ag"));y(()=>p(()=>import("./q-3149be1c.js"),["build/q-3149be1c.js","build/q-cb38e6f5.js"]),"s_WmYC5H00wtI");y(()=>p(()=>import("./q-7e3e5830.js"),["build/q-7e3e5830.js","build/q-cb38e6f5.js"]),"s_8gdLBszqbaM");const ut=(t,e)=>{t&&t.href&&t.hasAttribute("data-prefetch")&&(E||(E=innerWidth),(!e||e&&E<520)&&J(t.href))};let E=0;const gt=()=>V("script",{dangerouslySetInnerHTML:N});export{tt as C,H as D,Q as P,ht as Q,et as R,gt as S,$ as a,K as b,Z as c,M as d,J as e,g as f,lt as g,rt as h,at as i,it as j,ft as k,st as l,D as m,ot as n,ut as p,nt as r,I as t,ct as u};