const p={};function y(t){p.context=t}function F(){return{...p.context,id:`${p.context.id}${p.context.count++}-`,count:0}}const H=(t,e)=>t===e,w={equals:H};let R=q;const h=1,v=2,A={owned:null,cleanups:null,context:null,owner:null};var c=null;let a=null,u=null,o=null,f=null,E=0;function G(t,e){const n=u,s=c,r=t.length===0,l=r?A:{owned:null,cleanups:null,context:null,owner:e||s},i=r?t:()=>t(()=>b(()=>m(l)));c=l,u=null;try{return g(i,!0)}finally{u=n,c=s}}function I(t,e){e=e?Object.assign({},w,e):w;const n={value:t,observers:null,observerSlots:null,comparator:e.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),T(n,r));return[C.bind(n),s]}function M(t,e,n){const s=d(t,e,!1,h);x(s)}function k(t,e,n){n=n?Object.assign({},w,n):w;const s=d(t,e,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,x(s),C.bind(s)}function b(t){let e,n=u;return u=null,e=t(),u=n,e}function C(){const t=a;if(this.sources&&(this.state||t))if(this.state===h||t)x(this);else{const e=o;o=null,g(()=>S(this),!1),o=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function T(t,e,n){let s=t.value;return(!t.comparator||!t.comparator(s,e))&&(t.value=e,t.observers&&t.observers.length&&g(()=>{for(let r=0;r<t.observers.length;r+=1){const l=t.observers[r],i=a&&a.running;i&&a.disposed.has(l),(i&&!l.tState||!i&&!l.state)&&(l.pure?o.push(l):f.push(l),l.observers&&N(l)),i||(l.state=h)}if(o.length>1e6)throw o=[],new Error},!1)),e}function x(t){if(!t.fn)return;m(t);const e=c,n=u,s=E;u=c=t,j(t,t.value,s),u=n,c=e}function j(t,e,n){let s;try{s=t.fn(e)}catch(r){t.pure&&(t.state=h),O(r)}(!t.updatedAt||t.updatedAt<=n)&&(t.updatedAt!=null&&"observers"in t?T(t,s):t.value=s,t.updatedAt=n)}function d(t,e,n,s=h,r){const l={fn:t,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:c,context:null,pure:n};return c===null||c!==A&&(c.owned?c.owned.push(l):c.owned=[l]),l}function U(t){const e=a;if(t.state===0||e)return;if(t.state===v||e)return S(t);if(t.suspense&&b(t.suspense.inFallback))return t.suspense.effects.push(t);const n=[t];for(;(t=t.owner)&&(!t.updatedAt||t.updatedAt<E);)(t.state||e)&&n.push(t);for(let s=n.length-1;s>=0;s--)if(t=n[s],t.state===h||e)x(t);else if(t.state===v||e){const r=o;o=null,g(()=>S(t,n[0]),!1),o=r}}function g(t,e){if(o)return t();let n=!1;e||(o=[]),f?n=!0:f=[],E++;try{const s=t();return L(n),s}catch(s){o||(f=null),O(s)}}function L(t){if(o&&(q(o),o=null),t)return;const e=f;f=null,e.length&&g(()=>R(e),!1)}function q(t){for(let e=0;e<t.length;e++)U(t[e])}function S(t,e){const n=a;t.state=0;for(let s=0;s<t.sources.length;s+=1){const r=t.sources[s];r.sources&&(r.state===h||n?r!==e&&U(r):(r.state===v||n)&&S(r,e))}}function N(t){const e=a;for(let n=0;n<t.observers.length;n+=1){const s=t.observers[n];(!s.state||e)&&(s.state=v,s.pure?o.push(s):f.push(s),s.observers&&N(s))}}function m(t){let e;if(t.sources)for(;t.sources.length;){const n=t.sources.pop(),s=t.sourceSlots.pop(),r=n.observers;if(r&&r.length){const l=r.pop(),i=n.observerSlots.pop();s<r.length&&(l.sourceSlots[i]=s,r[s]=l,n.observerSlots[s]=i)}}if(t.owned){for(e=0;e<t.owned.length;e++)m(t.owned[e]);t.owned=null}if(t.cleanups){for(e=0;e<t.cleanups.length;e++)t.cleanups[e]();t.cleanups=null}t.state=0,t.context=null}function $(t){return t instanceof Error||typeof t=="string"?t:new Error("Unknown error")}function O(t){throw t=$(t),t}let D=!1;function P(){D=!0}function Q(t,e){if(D&&p.context){const n=p.context;y(F());const s=b(()=>t(e||{}));return y(n),s}return b(()=>t(e||{}))}function V(t){let e=!1;const n=t.keyed,s=k(()=>t.when,void 0,{equals:(r,l)=>e?r===l:!r==!l});return k(()=>{const r=s();if(r){const l=t.children,i=typeof l=="function"&&l.length>0;return e=n||i,i?b(()=>l(r)):l}return t.fallback})}export{V as S,Q as a,M as b,I as c,G as d,P as e,p as s};
