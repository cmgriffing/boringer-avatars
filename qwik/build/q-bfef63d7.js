import{o as E,T as d,_ as C}from"./q-cb38e6f5.js";const P=n=>{for(var t=0,a=0;a<n.length;a++){var e=n.charCodeAt(a);t=(t<<5)-t+e,t=t&t}return Math.abs(t)},F=(n,t)=>Math.floor(n/Math.pow(10,t)%10),A=(n,t)=>!(F(n,t)%2),c=(n,t,a)=>{let e=n%t;return a&&F(n,a)%2===0?-e:e},T=(n,t,a)=>t[n%a],S=n=>{if(!n)return"#FFFFFF";n.slice(0,1)==="#"&&(n=n.slice(1));var t=parseInt(n.substr(0,2),16),a=parseInt(n.substr(2,2),16),e=parseInt(n.substr(4,2),16),r=(t*299+a*587+e*114)/1e3;return r>=128?"#000000":"#FFFFFF"},B={variant:"marble",colors:["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"],name:"Clara Barton",square:!1,hasTitle:!1,size:40},I=4,h=80;function L(n,t){const a=P(n),e=t&&t.length;return Array.from({length:I},(s,o)=>({color:T(a+o,t,e),translateX:c(a*(o+1),h/2-(o+17),1),translateY:c(a*(o+1),h/2-(o+17),2),rotate:c(a*(o+1),360),isSquare:A(a,2)}))}const g=function(t,a,e,r){return L(e,r)},V=function(t,a){var e,r,s,o,l,u;return"translate("+((r=(e=g(t,a,t.name,t.colors))==null?void 0:e[1])==null?void 0:r.translateX)+" "+((o=(s=g(t,a,t.name,t.colors))==null?void 0:s[1])==null?void 0:o.translateY)+") rotate("+((u=(l=g(t,a,t.name,t.colors))==null?void 0:l[1])==null?void 0:u.rotate)+" "+h/2+" "+h/2+")"},q=function(t,a){var e,r,s,o;return"translate("+((r=(e=g(t,a,t.name,t.colors))==null?void 0:e[2])==null?void 0:r.translateX)+" "+((o=(s=g(t,a,t.name,t.colors))==null?void 0:s[2])==null?void 0:o.translateY)+")"},Z=function(t,a){var e,r,s,o,l,u;return"translate("+((r=(e=g(t,a,t.name,t.colors))==null?void 0:e[3])==null?void 0:r.translateX)+" "+((o=(s=g(t,a,t.name,t.colors))==null?void 0:s[3])==null?void 0:o.translateY)+") rotate("+((u=(l=g(t,a,t.name,t.colors))==null?void 0:l[3])==null?void 0:u.rotate)+" "+h/2+" "+h/2+")"},k=E(d(()=>C(()=>import("./q-25a95fc0.js"),["build/q-25a95fc0.js","build/q-cb38e6f5.js"]),"s_MUpBVjwkJUY")),i=36;function D(n,t){const a=P(n),e=t&&t.length,r=T(a,t,e),s=c(a,10,1),o=s<5?s+i/9:s,l=c(a,10,2),u=l<5?l+i/9:l;return{wrapperColor:r,faceColor:S(r),backgroundColor:T(a+13,t,e),wrapperTranslateX:o,wrapperTranslateY:u,wrapperRotate:c(a,360),wrapperScale:1+c(a,i/12)/10,isMouthOpen:A(a,2),isCircle:A(a,1),eyeSpread:c(a,5),mouthSpread:c(a,3),faceRotate:c(a,10,3),faceTranslateX:o>i/6?o/2:c(a,8,1),faceTranslateY:u>i/6?u/2:c(a,7,2)}}const m=function(t,a,e,r){return D(e,r)},z=function(t,a){return"translate("+m(t,a,t.name,t.colors).wrapperTranslateX+" "+m(t,a,t.name,t.colors).wrapperTranslateY+") rotate("+m(t,a,t.name,t.colors).wrapperRotate+" "+i/2+" "+i/2+") scale("+m(t,a,t.name,t.colors).wrapperScale+")"},K=function(t,a){return"translate("+m(t,a,t.name,t.colors).faceTranslateX+" "+m(t,a,t.name,t.colors).faceTranslateY+") rotate("+m(t,a,t.name,t.colors).faceRotate+" "+i/2+" "+i/2+")"},U=function(t,a){return"M15 "+(19+m(t,a,t.name,t.colors).mouthSpread)+"c2 1 4 1 6 0"},j=function(t,a){return"M13,"+(19+m(t,a,t.name,t.colors).mouthSpread)+" a1,0.75 0 0,0 10,0"},G=E(d(()=>C(()=>import("./q-3a515dc2.js"),["build/q-3a515dc2.js","build/q-cb38e6f5.js"]),"s_F0y7fP23DaI")),M=3,_=80;function R(n,t){const a=P(n),e=t&&t.length;return Array.from({length:M},(s,o)=>({color:T(a+o,t,e),translateX:c(a*(o+1),_/10,1),translateY:c(a*(o+1),_/10,2),scale:1.2+c(a*(o+1),_/20)/10,rotate:c(a*(o+1),360,1)}))}const f=function(t,a,e,r){return R(e,r)},Q=function(t,a){return"translate("+f(t,a,t.name,t.colors)[1].translateX+" "+f(t,a,t.name,t.colors)[1].translateY+") rotate("+f(t,a,t.name,t.colors)[1].rotate+" "+_/2+" "+_/2+") scale("+f(t,a,t.name,t.colors)[2].scale+")"},J=function(t,a){return"translate("+f(t,a,t.name,t.colors)[2].translateX+" "+f(t,a,t.name,t.colors)[2].translateY+") rotate("+f(t,a,t.name,t.colors)[2].rotate+" "+_/2+" "+_/2+") scale("+f(t,a,t.name,t.colors)[2].scale+")"},W=E(d(()=>C(()=>import("./q-c710de70.js"),["build/q-c710de70.js","build/q-cb38e6f5.js"]),"s_0C0jW0Kyt9c")),O=64,H=80;function w(n,t){const a=P(n),e=t&&t.length;return Array.from({length:O},(s,o)=>T(a%o,t,e))}const x=function(t,a,e,r){return w(e,r)},p=E(d(()=>C(()=>import("./q-604b0ba6.js"),["build/q-604b0ba6.js","build/q-cb38e6f5.js"]),"s_UaOzX2GKmk4")),tt=90,N=5;function X(n,t){const a=P(t),e=n&&n.length,r=Array.from({length:N},(o,l)=>T(a+l,n,e)),s=[];return s[0]=r[0],s[1]=r[1],s[2]=r[1],s[3]=r[2],s[4]=r[2],s[5]=r[3],s[6]=r[3],s[7]=r[0],s[8]=r[4],s}const at=function(t,a,e,r){return X(r,e)},nt=E(d(()=>C(()=>import("./q-245a01e5.js"),["build/q-245a01e5.js","build/q-cb38e6f5.js"]),"s_NrzEQn6Pkg8")),Y=4,et=80;function $(n,t){const a=P(n),e=t&&t.length;return Array.from({length:Y},(s,o)=>T(a+o,t,e))}const v=function(t,a){return t.name.replace(/\s/g,"")},rt=function(t,a,e,r){return $(e,r)},ot=function(t,a){return"url(#gradient_paint0_linear_"+v(t)+")"},st=function(t,a){return"url(#gradient_paint1_linear_"+v(t)+")"},ct=function(t,a){return"gradient_paint0_linear_"+v(t)},lt=function(t,a){return"gradient_paint1_linear_"+v(t)},ut=E(d(()=>C(()=>import("./q-76e93091.js"),["build/q-76e93091.js","build/q-cb38e6f5.js"]),"s_QBKi4Sfcze8")),it=E(d(()=>C(()=>import("./q-87ab0009.js"),["build/q-87ab0009.js","build/q-cb38e6f5.js"]),"s_bKTlfe6bmSs"));export{it as A,G as B,W as C,p as D,nt as E,ut as F,h as S,q as a,Z as b,i as c,m as d,z as e,K as f,V as g,U as h,j as i,_ as j,f as k,Q as l,J as m,H as n,x as o,g as p,tt as q,at as r,et as s,ot as t,st as u,ct as v,rt as w,lt as x,k as y,B as z};
