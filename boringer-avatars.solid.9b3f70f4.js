import{a as F,b as X,s as Z,S as G}from"./chunks/solid.884540d1.js";function Zr(t,r,n){let s=n.length,a=r.length,l=s,c=0,o=0,_=r[a-1].nextSibling,g=null;for(;c<a||o<l;){if(r[c]===n[o]){c++,o++;continue}for(;r[a-1]===n[l-1];)a--,l--;if(a===c){const d=l<s?o?n[o-1].nextSibling:n[l-o]:_;for(;o<l;)t.insertBefore(n[o++],d)}else if(l===o)for(;c<a;)(!g||!g.has(r[c]))&&r[c].remove(),c++;else if(r[c]===n[l-1]&&n[o]===r[a-1]){const d=r[--a].nextSibling;t.insertBefore(n[o++],r[c++].nextSibling),t.insertBefore(n[--l],d),r[a]=n[l]}else{if(!g){g=new Map;let h=o;for(;h<l;)g.set(n[h],h++)}const d=g.get(r[c]);if(d!=null)if(o<d&&d<l){let h=c,p=1,$;for(;++h<a&&h<l&&!(($=g.get(r[h]))==null||$!==d+p);)p++;if(p>d-o){const S=r[c];for(;o<d;)t.insertBefore(n[o++],S)}else t.replaceChild(n[o++],r[c++])}else c++;else r[c++].remove()}}}function q(t,r,n){const s=document.createElement("template");s.innerHTML=t;let a=s.content.firstChild;return n&&(a=a.firstChild),a}function e(t,r,n){n==null?t.removeAttribute(r):t.setAttribute(r,n)}function C(t,r,n,s){if(n!==void 0&&!s&&(s=[]),typeof r!="function")return tt(t,r,s,n);X(a=>tt(t,r(),a,n),s)}function tt(t,r,n,s,a){for(Z.context&&!n&&(n=[...t.childNodes]);typeof n=="function";)n=n();if(r===n)return n;const l=typeof r,c=s!==void 0;if(t=c&&n[0]&&n[0].parentNode||t,l==="string"||l==="number"){if(Z.context)return n;if(l==="number"&&(r=r.toString()),c){let o=n[0];o&&o.nodeType===3?o.data=r:o=document.createTextNode(r),n=V(t,n,s,o)}else n!==""&&typeof n=="string"?n=t.firstChild.data=r:n=t.textContent=r}else if(r==null||l==="boolean"){if(Z.context)return n;n=V(t,n,s)}else{if(l==="function")return X(()=>{let o=r();for(;typeof o=="function";)o=o();n=tt(t,o,n,s)}),()=>n;if(Array.isArray(r)){const o=[],_=n&&Array.isArray(n);if(rt(o,r,n,a))return X(()=>n=tt(t,o,n,s,!0)),()=>n;if(Z.context){if(!o.length)return n;for(let g=0;g<o.length;g++)if(o[g].parentNode)return n=o}if(o.length===0){if(n=V(t,n,s),c)return n}else _?n.length===0?jr(t,o,s):Zr(t,n,o):(n&&V(t),jr(t,o));n=o}else if(r instanceof Node){if(Z.context&&r.parentNode)return n=c?[r]:r;if(Array.isArray(n)){if(c)return n=V(t,n,s,r);V(t,n,null,r)}else n==null||n===""||!t.firstChild?t.appendChild(r):t.replaceChild(r,t.firstChild);n=r}}return n}function rt(t,r,n,s){let a=!1;for(let l=0,c=r.length;l<c;l++){let o=r[l],_=n&&n[l];if(o instanceof Node)t.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))a=rt(t,o,_)||a;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();a=rt(t,Array.isArray(o)?o:[o],Array.isArray(_)?_:[_])||a}else t.push(o),a=!0;else{const g=String(o);_&&_.nodeType===3&&_.data===g?t.push(_):t.push(document.createTextNode(g))}}return a}function jr(t,r,n=null){for(let s=0,a=r.length;s<a;s++)t.insertBefore(r[s],n)}function V(t,r,n,s){if(n===void 0)return t.textContent="";const a=s||document.createTextNode("");if(r.length){let l=!1;for(let c=r.length-1;c>=0;c--){const o=r[c];if(a!==o){const _=o.parentNode===t;!l&&!c?_?t.replaceChild(a,o):t.insertBefore(a,n):_&&o.remove()}else l=!0}}else t.insertBefore(a,n);return[a]}const W=t=>{for(var r=0,n=0;n<t.length;n++){var s=t.charCodeAt(n);r=(r<<5)-r+s,r=r&r}return Math.abs(r)},Jr=(t,r)=>Math.floor(t/Math.pow(10,r)%10),et=(t,r)=>!(Jr(t,r)%2),B=(t,r,n)=>{let s=t%r;return n&&Jr(t,n)%2===0?-s:s},Q=(t,r,n)=>r[t%n],te=t=>{if(!t)return"#FFFFFF";t.slice(0,1)==="#"&&(t=t.slice(1));var r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),s=parseInt(t.substr(4,2),16),a=(r*299+n*587+s*114)/1e3;return a>=128?"#000000":"#FFFFFF"},f={variant:"marble",colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"],name:"Clara Barton",square:!1,title:!1,size:40},re=4,w=80;function ee(t,r){const n=W(t),s=r&&r.length;return Array.from({length:re},(a,l)=>({color:Q(n+l,r,s),translateX:B(n*(l+1),w/2-(l+17),1),translateY:B(n*(l+1),w/2-(l+17),2),rotate:B(n*(l+1),360),isSquare:et(n,2)}))}const ne=q("<title></title>"),ie=q('<svg fill="none" role="img" xmlns="http://www.w3.org/2000/svg"><mask id="mask__bauhaus" maskUnits="userSpaceOnUse" x="0" y="0"><rect fill="#FFFFFF"></rect></mask><g mask="url(#mask__bauhaus)"><rect></rect><rect></rect><circle></circle><line x1="0" strokeWidth="2"></line></g></svg>');function oe(t){function r(l,c){return ee(l,c)}function n(){var l,c,o,_,g,d;return"translate("+((c=(l=r(t.name,t.colors))==null?void 0:l[1])==null?void 0:c.translateX)+" "+((_=(o=r(t.name,t.colors))==null?void 0:o[1])==null?void 0:_.translateY)+") rotate("+((d=(g=r(t.name,t.colors))==null?void 0:g[1])==null?void 0:d.rotate)+" "+w/2+" "+w/2+")"}function s(){var l,c,o,_;return"translate("+((c=(l=r(t.name,t.colors))==null?void 0:l[2])==null?void 0:c.translateX)+" "+((_=(o=r(t.name,t.colors))==null?void 0:o[2])==null?void 0:_.translateY)+")"}function a(){var l,c,o,_,g,d;return"translate("+((c=(l=r(t.name,t.colors))==null?void 0:l[3])==null?void 0:c.translateX)+" "+((_=(o=r(t.name,t.colors))==null?void 0:o[3])==null?void 0:_.translateY)+") rotate("+((d=(g=r(t.name,t.colors))==null?void 0:g[3])==null?void 0:d.rotate)+" "+w/2+" "+w/2+")"}return(()=>{const l=ie.cloneNode(!0),c=l.firstChild,o=c.firstChild,_=c.nextSibling,g=_.firstChild,d=g.nextSibling,h=d.nextSibling,p=h.nextSibling;return e(l,"viewBox","0 0 "+w+" "+w),C(l,F(G,{get when(){return t.title},get children(){const $=ne.cloneNode(!0);return C($,()=>t.name),$}}),c),e(c,"width",w),e(c,"height",w),e(o,"width",w),e(o,"height",w),e(g,"width",w),e(g,"height",w),e(d,"x",(w-60)/2),e(d,"y",(w-20)/2),e(d,"width",w),e(h,"cx",w/2),e(h,"cy",w/2),e(h,"r",w/5),e(p,"y1",w/2),e(p,"x2",w),e(p,"y2",w/2),X($=>{var S,v,m,x,b,k,u,M,N,A;const U=t.size,T=t.size,O=t.square?void 0:w*2,L=(v=(S=r(t.name,t.colors))==null?void 0:S[0])==null?void 0:v.color,R=(x=(m=r(t.name,t.colors))==null?void 0:m[1])!=null&&x.isSquare?w:w/8,H=(k=(b=r(t.name,t.colors))==null?void 0:b[1])==null?void 0:k.color,E=n(),I=(M=(u=r(t.name,t.colors))==null?void 0:u[2])==null?void 0:M.color,j=s(),J=(A=(N=r(t.name,t.colors))==null?void 0:N[3])==null?void 0:A.color,P=a();return U!==$._v$&&e(l,"width",$._v$=U),T!==$._v$2&&e(l,"height",$._v$2=T),O!==$._v$3&&e(o,"rx",$._v$3=O),L!==$._v$4&&e(g,"fill",$._v$4=L),R!==$._v$5&&e(d,"height",$._v$5=R),H!==$._v$6&&e(d,"fill",$._v$6=H),E!==$._v$7&&e(d,"transform",$._v$7=E),I!==$._v$8&&e(h,"fill",$._v$8=I),j!==$._v$9&&e(h,"transform",$._v$9=j),J!==$._v$10&&e(p,"stroke",$._v$10=J),P!==$._v$11&&e(p,"transform",$._v$11=P),$},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0}),l})()}const y=36;function le(t,r){const n=W(t),s=r&&r.length,a=Q(n,r,s),l=B(n,10,1),c=l<5?l+y/9:l,o=B(n,10,2),_=o<5?o+y/9:o;return{wrapperColor:a,faceColor:te(a),backgroundColor:Q(n+13,r,s),wrapperTranslateX:c,wrapperTranslateY:_,wrapperRotate:B(n,360),wrapperScale:1+B(n,y/12)/10,isMouthOpen:et(n,2),isCircle:et(n,1),eyeSpread:B(n,5),mouthSpread:B(n,3),faceRotate:B(n,10,3),faceTranslateX:c>y/6?c/2:B(n,8,1),faceTranslateY:_>y/6?_/2:B(n,7,2)}}const ve=q("<title></title>"),ae=q('<svg><path fill="none" strokeLinecap="round"></path></svg>',4,!0),ce=q('<svg fill="none" role="img" xmlns="http://www.w3.org/2000/svg"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0"><rect fill="#FFFFFF"></rect></mask><g mask="url(#mask__beam)"><rect></rect><rect x="0" y="0"></rect><g><rect stroke="none" y="14" width="1.5" height="2" rx="1"></rect><rect stroke="none" y="14" width="1.5" height="2" rx="1"></rect></g></g></svg>'),se=q("<svg><path></path></svg>",4,!0);function _e(t){function r(c,o){return le(c,o)}function n(){return"translate("+r(t.name,t.colors).wrapperTranslateX+" "+r(t.name,t.colors).wrapperTranslateY+") rotate("+r(t.name,t.colors).wrapperRotate+" "+y/2+" "+y/2+") scale("+r(t.name,t.colors).wrapperScale+")"}function s(){return"translate("+r(t.name,t.colors).faceTranslateX+" "+r(t.name,t.colors).faceTranslateY+") rotate("+r(t.name,t.colors).faceRotate+" "+y/2+" "+y/2+")"}function a(){return"M15 "+(19+r(t.name,t.colors).mouthSpread)+"c2 1 4 1 6 0"}function l(){return"M13,"+(19+r(t.name,t.colors).mouthSpread)+" a1,0.75 0 0,0 10,0"}return(()=>{const c=ce.cloneNode(!0),o=c.firstChild,_=o.firstChild,g=o.nextSibling,d=g.firstChild,h=d.nextSibling,p=h.nextSibling,$=p.firstChild,S=$.nextSibling;return e(c,"viewBox","0 0 "+y+" "+y),C(c,F(G,{get when(){return t.title},get children(){const v=ve.cloneNode(!0);return C(v,()=>t.name),v}}),o),e(o,"width",y),e(o,"height",y),e(_,"width",y),e(_,"height",y),e(d,"width",y),e(d,"height",y),e(h,"width",y),e(h,"height",y),C(p,F(G,{get fallback(){return(()=>{const v=se.cloneNode(!0);return X(m=>{const x=l(),b=r(t.name,t.colors).faceColor;return x!==m._v$15&&e(v,"d",m._v$15=x),b!==m._v$16&&e(v,"fill",m._v$16=b),m},{_v$15:void 0,_v$16:void 0}),v})()},get when(){return r(t.name,t.colors).isMouthOpen},get children(){const v=ae.cloneNode(!0);return X(m=>{const x=a(),b=r(t.name,t.colors).faceColor;return x!==m._v$&&e(v,"d",m._v$=x),b!==m._v$2&&e(v,"stroke",m._v$2=b),m},{_v$:void 0,_v$2:void 0}),v}}),$),X(v=>{const m=t.size,x=t.size,b=t.square?void 0:y*2,k=r(t.name,t.colors).backgroundColor,u=n(),M=r(t.name,t.colors).wrapperColor,N=r(t.name,t.colors).isCircle?y:y/6,A=s(),U=14-r(t.name,t.colors).eyeSpread,T=r(t.name,t.colors).faceColor,O=20+r(t.name,t.colors).eyeSpread,L=r(t.name,t.colors).faceColor;return m!==v._v$3&&e(c,"width",v._v$3=m),x!==v._v$4&&e(c,"height",v._v$4=x),b!==v._v$5&&e(_,"rx",v._v$5=b),k!==v._v$6&&e(d,"fill",v._v$6=k),u!==v._v$7&&e(h,"transform",v._v$7=u),M!==v._v$8&&e(h,"fill",v._v$8=M),N!==v._v$9&&e(h,"rx",v._v$9=N),A!==v._v$10&&e(p,"transform",v._v$10=A),U!==v._v$11&&e($,"x",v._v$11=U),T!==v._v$12&&e($,"fill",v._v$12=T),O!==v._v$13&&e(S,"x",v._v$13=O),L!==v._v$14&&e(S,"fill",v._v$14=L),v},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0}),c})()}const he=3,z=80;function $e(t,r){const n=W(t),s=r&&r.length;return Array.from({length:he},(a,l)=>({color:Q(n+l,r,s),translateX:B(n*(l+1),z/10,1),translateY:B(n*(l+1),z/10,2),scale:1.2+B(n*(l+1),z/20)/10,rotate:B(n*(l+1),360,1)}))}const de=q("<title></title>"),ge=q('<svg fill="none" role="img" xmlns="http://www.w3.org/2000/svg"><mask id="mask__marble" maskUnits="userSpaceOnUse" x="0" y="0"><rect fill="#FFFFFF"></rect></mask><g mask="url(#mask__marble)"><rect></rect><path filter="url(#prefix__filter0_f)" d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"></path><path filter="url(#prefix__filter0_f)" d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"></path></g><defs><filter id="prefix__filter0_f" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood result="BackgroundImageFix" floodOpacity="0"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur" stdDeviation="7"></feGaussianBlur></filter></defs></svg>');function ue(t){function r(a,l){return $e(a,l)}function n(){return"translate("+r(t.name,t.colors)[1].translateX+" "+r(t.name,t.colors)[1].translateY+") rotate("+r(t.name,t.colors)[1].rotate+" "+z/2+" "+z/2+") scale("+r(t.name,t.colors)[2].scale+")"}function s(){return"translate("+r(t.name,t.colors)[2].translateX+" "+r(t.name,t.colors)[2].translateY+") rotate("+r(t.name,t.colors)[2].rotate+" "+z/2+" "+z/2+") scale("+r(t.name,t.colors)[2].scale+")"}return(()=>{const a=ge.cloneNode(!0),l=a.firstChild,c=l.firstChild,o=l.nextSibling,_=o.firstChild,g=_.nextSibling,d=g.nextSibling;return e(a,"viewBox","0 0 "+z+" "+z),C(a,F(G,{get when(){return t.title},get children(){const h=de.cloneNode(!0);return C(h,()=>t.name),h}}),l),e(l,"width",z),e(l,"height",z),e(c,"width",z),e(c,"height",z),e(_,"width",z),e(_,"height",z),d.style.setProperty("mix-blend-mode","overlay"),X(h=>{const p=t.size,$=t.size,S=t.square?void 0:z*2,v=r(t.name,t.colors)[0].color,m=r(t.name,t.colors)[1].color,x=n(),b=r(t.name,t.colors)[2].color,k=s();return p!==h._v$&&e(a,"width",h._v$=p),$!==h._v$2&&e(a,"height",h._v$2=$),S!==h._v$3&&e(c,"rx",h._v$3=S),v!==h._v$4&&e(_,"fill",h._v$4=v),m!==h._v$5&&e(g,"fill",h._v$5=m),x!==h._v$6&&e(g,"transform",h._v$6=x),b!==h._v$7&&e(d,"fill",h._v$7=b),k!==h._v$8&&e(d,"transform",h._v$8=k),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),a})()}const fe=64,D=80;function me(t,r){const n=W(t),s=r&&r.length;return Array.from({length:fe},(a,l)=>Q(n%l,r,s))}const xe=q("<title></title>"),we=q('<svg fill="none" role="img" xmlns="http://www.w3.org/2000/svg"><mask id="mask__pixel" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0"><rect fill="#FFFFFF"></rect></mask><g mask="url(#mask__pixel)"><rect width="10" height="10"></rect><rect x="20" width="10" height="10"></rect><rect x="40" width="10" height="10"></rect><rect x="60" width="10" height="10"></rect><rect x="10" width="10" height="10"></rect><rect x="30" width="10" height="10"></rect><rect x="50" width="10" height="10"></rect><rect x="70" width="10" height="10"></rect><rect y="10" width="10" height="10"></rect><rect y="20" width="10" height="10"></rect><rect y="30" width="10" height="10"></rect><rect y="40" width="10" height="10"></rect><rect y="50" width="10" height="10"></rect><rect y="60" width="10" height="10"></rect><rect y="70" width="10" height="10"></rect><rect x="20" y="10" width="10" height="10"></rect><rect x="20" y="20" width="10" height="10"></rect><rect x="20" y="30" width="10" height="10"></rect><rect x="20" y="40" width="10" height="10"></rect><rect x="20" y="50" width="10" height="10"></rect><rect x="20" y="60" width="10" height="10"></rect><rect x="20" y="70" width="10" height="10"></rect><rect x="40" y="10" width="10" height="10"></rect><rect x="40" y="20" width="10" height="10"></rect><rect x="40" y="30" width="10" height="10"></rect><rect x="40" y="40" width="10" height="10"></rect><rect x="40" y="50" width="10" height="10"></rect><rect x="40" y="60" width="10" height="10"></rect><rect x="40" y="70" width="10" height="10"></rect><rect x="60" y="10" width="10" height="10"></rect><rect x="60" y="20" width="10" height="10"></rect><rect x="60" y="30" width="10" height="10"></rect><rect x="60" y="40" width="10" height="10"></rect><rect x="60" y="50" width="10" height="10"></rect><rect x="60" y="60" width="10" height="10"></rect><rect x="60" y="70" width="10" height="10"></rect><rect x="10" y="10" width="10" height="10"></rect><rect x="10" y="20" width="10" height="10"></rect><rect x="10" y="30" width="10" height="10"></rect><rect x="10" y="40" width="10" height="10"></rect><rect x="10" y="50" width="10" height="10"></rect><rect x="10" y="60" width="10" height="10"></rect><rect x="10" y="70" width="10" height="10"></rect><rect x="30" y="10" width="10" height="10"></rect><rect x="30" y="20" width="10" height="10"></rect><rect x="30" y="30" width="10" height="10"></rect><rect x="30" y="40" width="10" height="10"></rect><rect x="30" y="50" width="10" height="10"></rect><rect x="30" y="60" width="10" height="10"></rect><rect x="30" y="70" width="10" height="10"></rect><rect x="50" y="10" width="10" height="10"></rect><rect x="50" y="20" width="10" height="10"></rect><rect x="50" y="30" width="10" height="10"></rect><rect x="50" y="40" width="10" height="10"></rect><rect x="50" y="50" width="10" height="10"></rect><rect x="50" y="60" width="10" height="10"></rect><rect x="50" y="70" width="10" height="10"></rect><rect x="70" y="10" width="10" height="10"></rect><rect x="70" y="20" width="10" height="10"></rect><rect x="70" y="30" width="10" height="10"></rect><rect x="70" y="40" width="10" height="10"></rect><rect x="70" y="50" width="10" height="10"></rect><rect x="70" y="60" width="10" height="10"></rect><rect x="70" y="70" width="10" height="10"></rect></g></svg>');function pe(t){function r(n,s){return me(n,s)}return(()=>{const n=we.cloneNode(!0),s=n.firstChild,a=s.firstChild,l=s.nextSibling,c=l.firstChild,o=c.nextSibling,_=o.nextSibling,g=_.nextSibling,d=g.nextSibling,h=d.nextSibling,p=h.nextSibling,$=p.nextSibling,S=$.nextSibling,v=S.nextSibling,m=v.nextSibling,x=m.nextSibling,b=x.nextSibling,k=b.nextSibling,u=k.nextSibling,M=u.nextSibling,N=M.nextSibling,A=N.nextSibling,U=A.nextSibling,T=U.nextSibling,O=T.nextSibling,L=O.nextSibling,R=L.nextSibling,H=R.nextSibling,E=H.nextSibling,I=E.nextSibling,j=I.nextSibling,J=j.nextSibling,P=J.nextSibling,nt=P.nextSibling,it=nt.nextSibling,ot=it.nextSibling,lt=ot.nextSibling,vt=lt.nextSibling,at=vt.nextSibling,ct=at.nextSibling,st=ct.nextSibling,_t=st.nextSibling,ht=_t.nextSibling,$t=ht.nextSibling,dt=$t.nextSibling,gt=dt.nextSibling,ut=gt.nextSibling,ft=ut.nextSibling,mt=ft.nextSibling,xt=mt.nextSibling,wt=xt.nextSibling,pt=wt.nextSibling,bt=pt.nextSibling,St=bt.nextSibling,yt=St.nextSibling,Ft=yt.nextSibling,Ct=Ft.nextSibling,kt=Ct.nextSibling,zt=kt.nextSibling,Bt=zt.nextSibling,qt=Bt.nextSibling,Mt=qt.nextSibling,Nt=Mt.nextSibling,At=Nt.nextSibling,Ut=At.nextSibling,Tt=Ut.nextSibling,Ot=Tt.nextSibling,Pr=Ot.nextSibling;return e(n,"viewBox","0 0 "+D+" "+D),C(n,F(G,{get when(){return t.title},get children(){const i=xe.cloneNode(!0);return C(i,()=>t.name),i}}),s),e(s,"width",D),e(s,"height",D),e(a,"width",D),e(a,"height",D),X(i=>{const Lt=t.size,Yt=t.size,Gt=t.square?void 0:D*2,Xt=r(t.name,t.colors)[0],Rt=r(t.name,t.colors)[1],Ht=r(t.name,t.colors)[2],Et=r(t.name,t.colors)[3],It=r(t.name,t.colors)[4],Dt=r(t.name,t.colors)[5],Kt=r(t.name,t.colors)[6],Qt=r(t.name,t.colors)[7],Vt=r(t.name,t.colors)[8],Wt=r(t.name,t.colors)[9],jt=r(t.name,t.colors)[10],Jt=r(t.name,t.colors)[11],Pt=r(t.name,t.colors)[12],Zt=r(t.name,t.colors)[13],tr=r(t.name,t.colors)[14],rr=r(t.name,t.colors)[15],er=r(t.name,t.colors)[16],nr=r(t.name,t.colors)[17],ir=r(t.name,t.colors)[18],or=r(t.name,t.colors)[19],lr=r(t.name,t.colors)[20],vr=r(t.name,t.colors)[21],ar=r(t.name,t.colors)[22],cr=r(t.name,t.colors)[23],sr=r(t.name,t.colors)[24],_r=r(t.name,t.colors)[25],hr=r(t.name,t.colors)[26],$r=r(t.name,t.colors)[27],dr=r(t.name,t.colors)[28],gr=r(t.name,t.colors)[29],ur=r(t.name,t.colors)[30],fr=r(t.name,t.colors)[31],mr=r(t.name,t.colors)[32],xr=r(t.name,t.colors)[33],wr=r(t.name,t.colors)[34],pr=r(t.name,t.colors)[35],br=r(t.name,t.colors)[36],Sr=r(t.name,t.colors)[37],yr=r(t.name,t.colors)[38],Fr=r(t.name,t.colors)[39],Cr=r(t.name,t.colors)[40],kr=r(t.name,t.colors)[41],zr=r(t.name,t.colors)[42],Br=r(t.name,t.colors)[43],qr=r(t.name,t.colors)[44],Mr=r(t.name,t.colors)[45],Nr=r(t.name,t.colors)[46],Ar=r(t.name,t.colors)[47],Ur=r(t.name,t.colors)[48],Tr=r(t.name,t.colors)[49],Or=r(t.name,t.colors)[50],Lr=r(t.name,t.colors)[51],Yr=r(t.name,t.colors)[52],Gr=r(t.name,t.colors)[53],Xr=r(t.name,t.colors)[54],Rr=r(t.name,t.colors)[55],Hr=r(t.name,t.colors)[56],Er=r(t.name,t.colors)[57],Ir=r(t.name,t.colors)[58],Dr=r(t.name,t.colors)[59],Kr=r(t.name,t.colors)[60],Qr=r(t.name,t.colors)[61],Vr=r(t.name,t.colors)[62],Wr=r(t.name,t.colors)[63];return Lt!==i._v$&&e(n,"width",i._v$=Lt),Yt!==i._v$2&&e(n,"height",i._v$2=Yt),Gt!==i._v$3&&e(a,"rx",i._v$3=Gt),Xt!==i._v$4&&e(c,"fill",i._v$4=Xt),Rt!==i._v$5&&e(o,"fill",i._v$5=Rt),Ht!==i._v$6&&e(_,"fill",i._v$6=Ht),Et!==i._v$7&&e(g,"fill",i._v$7=Et),It!==i._v$8&&e(d,"fill",i._v$8=It),Dt!==i._v$9&&e(h,"fill",i._v$9=Dt),Kt!==i._v$10&&e(p,"fill",i._v$10=Kt),Qt!==i._v$11&&e($,"fill",i._v$11=Qt),Vt!==i._v$12&&e(S,"fill",i._v$12=Vt),Wt!==i._v$13&&e(v,"fill",i._v$13=Wt),jt!==i._v$14&&e(m,"fill",i._v$14=jt),Jt!==i._v$15&&e(x,"fill",i._v$15=Jt),Pt!==i._v$16&&e(b,"fill",i._v$16=Pt),Zt!==i._v$17&&e(k,"fill",i._v$17=Zt),tr!==i._v$18&&e(u,"fill",i._v$18=tr),rr!==i._v$19&&e(M,"fill",i._v$19=rr),er!==i._v$20&&e(N,"fill",i._v$20=er),nr!==i._v$21&&e(A,"fill",i._v$21=nr),ir!==i._v$22&&e(U,"fill",i._v$22=ir),or!==i._v$23&&e(T,"fill",i._v$23=or),lr!==i._v$24&&e(O,"fill",i._v$24=lr),vr!==i._v$25&&e(L,"fill",i._v$25=vr),ar!==i._v$26&&e(R,"fill",i._v$26=ar),cr!==i._v$27&&e(H,"fill",i._v$27=cr),sr!==i._v$28&&e(E,"fill",i._v$28=sr),_r!==i._v$29&&e(I,"fill",i._v$29=_r),hr!==i._v$30&&e(j,"fill",i._v$30=hr),$r!==i._v$31&&e(J,"fill",i._v$31=$r),dr!==i._v$32&&e(P,"fill",i._v$32=dr),gr!==i._v$33&&e(nt,"fill",i._v$33=gr),ur!==i._v$34&&e(it,"fill",i._v$34=ur),fr!==i._v$35&&e(ot,"fill",i._v$35=fr),mr!==i._v$36&&e(lt,"fill",i._v$36=mr),xr!==i._v$37&&e(vt,"fill",i._v$37=xr),wr!==i._v$38&&e(at,"fill",i._v$38=wr),pr!==i._v$39&&e(ct,"fill",i._v$39=pr),br!==i._v$40&&e(st,"fill",i._v$40=br),Sr!==i._v$41&&e(_t,"fill",i._v$41=Sr),yr!==i._v$42&&e(ht,"fill",i._v$42=yr),Fr!==i._v$43&&e($t,"fill",i._v$43=Fr),Cr!==i._v$44&&e(dt,"fill",i._v$44=Cr),kr!==i._v$45&&e(gt,"fill",i._v$45=kr),zr!==i._v$46&&e(ut,"fill",i._v$46=zr),Br!==i._v$47&&e(ft,"fill",i._v$47=Br),qr!==i._v$48&&e(mt,"fill",i._v$48=qr),Mr!==i._v$49&&e(xt,"fill",i._v$49=Mr),Nr!==i._v$50&&e(wt,"fill",i._v$50=Nr),Ar!==i._v$51&&e(pt,"fill",i._v$51=Ar),Ur!==i._v$52&&e(bt,"fill",i._v$52=Ur),Tr!==i._v$53&&e(St,"fill",i._v$53=Tr),Or!==i._v$54&&e(yt,"fill",i._v$54=Or),Lr!==i._v$55&&e(Ft,"fill",i._v$55=Lr),Yr!==i._v$56&&e(Ct,"fill",i._v$56=Yr),Gr!==i._v$57&&e(kt,"fill",i._v$57=Gr),Xr!==i._v$58&&e(zt,"fill",i._v$58=Xr),Rr!==i._v$59&&e(Bt,"fill",i._v$59=Rr),Hr!==i._v$60&&e(qt,"fill",i._v$60=Hr),Er!==i._v$61&&e(Mt,"fill",i._v$61=Er),Ir!==i._v$62&&e(Nt,"fill",i._v$62=Ir),Dr!==i._v$63&&e(At,"fill",i._v$63=Dr),Kr!==i._v$64&&e(Ut,"fill",i._v$64=Kr),Qr!==i._v$65&&e(Tt,"fill",i._v$65=Qr),Vr!==i._v$66&&e(Ot,"fill",i._v$66=Vr),Wr!==i._v$67&&e(Pr,"fill",i._v$67=Wr),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0,_v$28:void 0,_v$29:void 0,_v$30:void 0,_v$31:void 0,_v$32:void 0,_v$33:void 0,_v$34:void 0,_v$35:void 0,_v$36:void 0,_v$37:void 0,_v$38:void 0,_v$39:void 0,_v$40:void 0,_v$41:void 0,_v$42:void 0,_v$43:void 0,_v$44:void 0,_v$45:void 0,_v$46:void 0,_v$47:void 0,_v$48:void 0,_v$49:void 0,_v$50:void 0,_v$51:void 0,_v$52:void 0,_v$53:void 0,_v$54:void 0,_v$55:void 0,_v$56:void 0,_v$57:void 0,_v$58:void 0,_v$59:void 0,_v$60:void 0,_v$61:void 0,_v$62:void 0,_v$63:void 0,_v$64:void 0,_v$65:void 0,_v$66:void 0,_v$67:void 0}),n})()}const K=90,be=5;function Se(t,r){const n=W(r),s=t&&t.length,a=Array.from({length:be},(c,o)=>Q(n+o,t,s)),l=[];return l[0]=a[0],l[1]=a[1],l[2]=a[1],l[3]=a[2],l[4]=a[2],l[5]=a[3],l[6]=a[3],l[7]=a[0],l[8]=a[4],l}const ye=q("<title></title>"),Fe=q('<svg fill="none" role="img" xmlns="http://www.w3.org/2000/svg"><mask id="mask__ring" maskUnits="userSpaceOnUse" x="0" y="0"><rect fill="#FFFFFF"></rect></mask><g mask="url(#mask__ring)"><path d="M0 0h90v45H0z"></path><path d="M0 45h90v45H0z"></path><path d="M83 45a38 38 0 00-76 0h76z"></path><path d="M83 45a38 38 0 01-76 0h76z"></path><path d="M77 45a32 32 0 10-64 0h64z"></path><path d="M77 45a32 32 0 11-64 0h64z"></path><path d="M71 45a26 26 0 00-52 0h52z"></path><path d="M71 45a26 26 0 01-52 0h52z"></path><circle cx="45" cy="45" r="23"></circle></g></svg>');function Ce(t){function r(n,s){return Se(s,n)}return(()=>{const n=Fe.cloneNode(!0),s=n.firstChild,a=s.firstChild,l=s.nextSibling,c=l.firstChild,o=c.nextSibling,_=o.nextSibling,g=_.nextSibling,d=g.nextSibling,h=d.nextSibling,p=h.nextSibling,$=p.nextSibling,S=$.nextSibling;return e(n,"viewBox","0 0 "+K+" "+K),C(n,F(G,{get when(){return t.title},get children(){const v=ye.cloneNode(!0);return C(v,()=>t.name),v}}),s),e(s,"width",K),e(s,"height",K),e(a,"width",K),e(a,"height",K),X(v=>{const m=t.size,x=t.size,b=t.square?void 0:K*2,k=r(t.name,t.colors)[0],u=r(t.name,t.colors)[1],M=r(t.name,t.colors)[2],N=r(t.name,t.colors)[3],A=r(t.name,t.colors)[4],U=r(t.name,t.colors)[5],T=r(t.name,t.colors)[6],O=r(t.name,t.colors)[7],L=r(t.name,t.colors)[8];return m!==v._v$&&e(n,"width",v._v$=m),x!==v._v$2&&e(n,"height",v._v$2=x),b!==v._v$3&&e(a,"rx",v._v$3=b),k!==v._v$4&&e(c,"fill",v._v$4=k),u!==v._v$5&&e(o,"fill",v._v$5=u),M!==v._v$6&&e(_,"fill",v._v$6=M),N!==v._v$7&&e(g,"fill",v._v$7=N),A!==v._v$8&&e(d,"fill",v._v$8=A),U!==v._v$9&&e(h,"fill",v._v$9=U),T!==v._v$10&&e(p,"fill",v._v$10=T),O!==v._v$11&&e($,"fill",v._v$11=O),L!==v._v$12&&e(S,"fill",v._v$12=L),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0}),n})()}const ke=4,Y=80;function ze(t,r){const n=W(t),s=r&&r.length;return Array.from({length:ke},(a,l)=>Q(n+l,r,s))}const Be=q("<title></title>"),qe=q('<svg fill="none" role="img" xmlns="http://www.w3.org/2000/svg"><mask id="mask__sunset" maskUnits="userSpaceOnUse" x="0" y="0"><rect fill="#FFFFFF"></rect></mask><g mask="url(#mask__sunset)"><path d="M0 0h80v40H0z"></path><path d="M0 40h80v40H0z"></path></g><defs><linearGradient gradientUnits="userSpaceOnUse" y1="0"><stop></stop><stop offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1"></stop></linearGradient></defs></svg>');function Me(t){function r(){return t.name.replace(/\s/g,"")}function n(o,_){return ze(o,_)}function s(){return"url(#gradient_paint0_linear_"+r()+")"}function a(){return"url(#gradient_paint1_linear_"+r()+")"}function l(){return"gradient_paint0_linear_"+r()}function c(){return"gradient_paint1_linear_"+r()}return(()=>{const o=qe.cloneNode(!0),_=o.firstChild,g=_.firstChild,d=_.nextSibling,h=d.firstChild,p=h.nextSibling,$=d.nextSibling,S=$.firstChild,v=S.firstChild,m=v.nextSibling,x=S.nextSibling,b=x.firstChild,k=b.nextSibling;return e(o,"viewBox","0 0 "+Y+" "+Y),C(o,F(G,{get when(){return t.title},get children(){const u=Be.cloneNode(!0);return C(u,()=>t.name),u}}),_),e(_,"width",Y),e(_,"height",Y),e(g,"width",Y),e(g,"height",Y),e(S,"x1",Y/2),e(S,"x2",Y/2),e(S,"y2",Y/2),e(x,"x1",Y/2),e(x,"y1",Y/2),e(x,"x2",Y/2),e(x,"y2",Y),X(u=>{const M=t.size,N=t.size,A=t.square?void 0:Y*2,U=s(),T=a(),O=l(),L=n(t.name,t.colors)[0],R=n(t.name,t.colors)[1],H=c(),E=n(t.name,t.colors)[2],I=n(t.name,t.colors)[3];return M!==u._v$&&e(o,"width",u._v$=M),N!==u._v$2&&e(o,"height",u._v$2=N),A!==u._v$3&&e(g,"rx",u._v$3=A),U!==u._v$4&&e(h,"fill",u._v$4=U),T!==u._v$5&&e(p,"fill",u._v$5=T),O!==u._v$6&&e(S,"id",u._v$6=O),L!==u._v$7&&e(v,"stop-color",u._v$7=L),R!==u._v$8&&e(m,"stop-color",u._v$8=R),H!==u._v$9&&e(x,"id",u._v$9=H),E!==u._v$10&&e(b,"stop-color",u._v$10=E),I!==u._v$11&&e(k,"stop-color",u._v$11=I),u},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0}),o})()}const Ne=q("<div></div>");function Ue(t){return(()=>{const r=Ne.cloneNode(!0);return C(r,F(G,{get when(){return t.variant==="bauhaus"},get children(){return F(oe,{get colors(){return t.colors||f.colors},get name(){return t.name||f.name},get square(){return t.square||f.square},get title(){return t.title||f.title},get size(){return t.size||f.size}})}}),null),C(r,F(G,{get when(){return t.variant==="beam"},get children(){return F(_e,{get colors(){return t.colors||f.colors},get name(){return t.name||f.name},get square(){return t.square||f.square},get title(){return t.title||f.title},get size(){return t.size||f.size}})}}),null),C(r,F(G,{get when(){return t.variant==="marble"},get children(){return F(ue,{get colors(){return t.colors||f.colors},get name(){return t.name||f.name},get square(){return t.square||f.square},get title(){return t.title||f.title},get size(){return t.size||f.size}})}}),null),C(r,F(G,{get when(){return t.variant==="pixel"},get children(){return F(pe,{get colors(){return t.colors||f.colors},get name(){return t.name||f.name},get square(){return t.square||f.square},get title(){return t.title||f.title},get size(){return t.size||f.size}})}}),null),C(r,F(G,{get when(){return t.variant==="ring"},get children(){return F(Ce,{get colors(){return t.colors||f.colors},get name(){return t.name||f.name},get square(){return t.square||f.square},get title(){return t.title||f.title},get size(){return t.size||f.size}})}}),null),C(r,F(G,{get when(){return t.variant==="sunset"},get children(){return F(Me,{get colors(){return t.colors||f.colors},get name(){return t.name||f.name},get square(){return t.square||f.square},get title(){return t.title||f.title},get size(){return t.size||f.size}})}}),null),r})()}export{Ue as Avatar};