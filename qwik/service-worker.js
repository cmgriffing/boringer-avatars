/* Qwik Service Worker */
const appBundles=[["q-213f77a1.js",[24,27],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-245a01e5.js",[25,27],["NrzEQn6Pkg8"]],["q-25a95fc0.js",[25,27],["MUpBVjwkJUY"]],["q-2cfa7355.js",[27],["QYR5yhkF8EI"]],["q-3149be1c.js",[24,27],["WmYC5H00wtI"]],["q-318f4c28.js",[27],["VkLNXphUh5s"]],["q-3a288081.js",[20,27],["emg0Y2vR8RI","NEVU8lFLS0I","vEVcUi7pn9I","wrrfanC3V14"]],["q-3a515dc2.js",[25,27],["F0y7fP23DaI"]],["q-45aab3b6.js",[]],["q-586ec897.js",[20,27],["ciffbfU0xO0","DDC6pCKt58c","ijxibMEVNFU","q0uyJ8ti594"]],["q-5955c967.js",[27]],["q-5a852c44.js",[27]],["q-5cb50449.js",[24,27],["AKetNByE5TM"]],["q-604b0ba6.js",[25,27],["UaOzX2GKmk4"]],["q-6b53b696.js",[24,27],["zrbrqoaqXSY"]],["q-76e93091.js",[25,27],["QBKi4Sfcze8"]],["q-7e3e5830.js",[24,27],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","u0YVoxt2aTY","yiXwCC0m3jY"]],["q-87ab0009.js",[25,27],["bKTlfe6bmSs"]],["q-a3293d03.js",[20,25,27],["5mc39axZayE","G2KSr2Xavc8","IeUQf5hjots","kY2Abzr0Wp8","XKY4jnJRjQg","xYL1qOwPyDI"]],["q-a9e1504c.js",[27]],["q-ae29c962.js",[27]],["q-b3a49b1f.js",[27]],["q-b5c2d1b5.js",[20,27],["8yIs7br2xu4","BGWj8UQ6bmE","dfYD6Pq9DWA","lYFbpqDIhFA","XOb02FQaw4M"]],["q-ba368459.js",[20,27],["gvfnsSKyxgg","OKXsV2N0wSs","RTQKtVexHZo","TSieusgRdsY"]],["q-bc9a3ee0.js",[27]],["q-bfef63d7.js",[27]],["q-c710de70.js",[25,27],["0C0jW0Kyt9c"]],["q-cb38e6f5.js",[]],["q-eb6ba709.js",[27]],["q-edb31446.js",[20,27],["3ycPZMCZXlo","500ux82iEWQ","l00jXwx9CIY","m0Eofq1L4Ow","MsYvBTt282g"]],["q-ff253631.js",[24,27],["2Eo7WCpaqI8","TxCFOy819ag"]]];
const libraryBundleIds=[10];
const linkBundles=[[/^\/boringer-avatars\/qwik\/$/,[28,5,19,18]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
