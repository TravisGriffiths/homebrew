import{S as C,i as q,s as U,a as j,e as h,c as z,b as g,d,f as A,g as p,h as w,j as W,o as F,k as G,l as H,m as J,n as y,p as m,q as K,r as M,u as Q,v as I,w as L,x as E,y as v,z as D,A as P,B as R}from"../chunks/index.13cdf78d.js";const X="modulepreload",Y=function(a){return"/"+a},O={},k=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Y(f),f in O)return;O[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!s)for(let l=i.length-1;l>=0;l--){const u=i[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},ie={};function Z(a){let e,n,s;var i=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=E(i,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),g(t,n,r),s=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&i!==(i=t[1][0])){if(e){I();const o=e;d(o.$$.fragment,1,0,()=>{R(o,1)}),A()}i?(e=E(i,f(t)),t[12](e),v(e.$$.fragment),p(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&p(e.$$.fragment,t),s=!0)},o(t){e&&d(e.$$.fragment,t),s=!1},d(t){a[12](null),t&&w(n),e&&R(e,t)}}}function $(a){let e,n,s;var i=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return i&&(e=E(i,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),g(t,n,r),s=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&i!==(i=t[1][0])){if(e){I();const o=e;d(o.$$.fragment,1,0,()=>{R(o,1)}),A()}i?(e=E(i,f(t)),t[11](e),v(e.$$.fragment),p(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&p(e.$$.fragment,t),s=!0)},o(t){e&&d(e.$$.fragment,t),s=!1},d(t){a[11](null),t&&w(n),e&&R(e,t)}}}function x(a){let e,n,s;var i=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=E(i,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&D(e.$$.fragment,t),n=h()},m(t,r){e&&P(e,t,r),g(t,n,r),s=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&i!==(i=t[1][1])){if(e){I();const o=e;d(o.$$.fragment,1,0,()=>{R(o,1)}),A()}i?(e=E(i,f(t)),t[10](e),v(e.$$.fragment),p(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&p(e.$$.fragment,t),s=!0)},o(t){e&&d(e.$$.fragment,t),s=!1},d(t){a[10](null),t&&w(n),e&&R(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(s){e=H(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=J(e);n&&n.l(i),i.forEach(w),this.h()},h(){y(e,"id","svelte-announcer"),y(e,"aria-live","assertive"),y(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(s,i){g(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=V(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&w(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,s){g(n,e,s)},p(n,s){s&128&&Q(e,n[7])},d(n){n&&w(e)}}}function ee(a){let e,n,s,i,f;const t=[$,Z],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&T(a);return{c(){n.c(),s=j(),o&&o.c(),i=h()},l(l){n.l(l),s=z(l),o&&o.l(l),i=h()},m(l,u){r[e].m(l,u),g(l,s,u),o&&o.m(l,u),g(l,i,u),f=!0},p(l,[u]){let b=e;e=_(l),e===b?r[e].p(l,u):(I(),d(r[b],1,1,()=>{r[b]=null}),A(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),p(n,1),n.m(s.parentNode,s)),l[5]?o?o.p(l,u):(o=T(l),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){f||(p(n),f=!0)},o(l){d(n),f=!1},d(l){r[e].d(l),l&&w(s),o&&o.d(l),l&&w(i)}}}function te(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;W(s.page.notify);let l=!1,u=!1,b=null;F(()=>{const c=s.page.subscribe(()=>{l&&(n(6,u=!0),n(7,b=document.title||"untitled page"))});return n(5,l=!0),c});function N(c){L[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){L[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){L[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,s=c.stores),"page"in c&&n(9,i=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,f,r,_,o,l,u,b,s,i,N,S,B]}class se extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const re=[()=>k(()=>import("../nodes/0.8c6b0670.js"),["_app/immutable/nodes/0.8c6b0670.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/index.36475e15.js","_app/immutable/assets/0.0b2278fc.css"]),()=>k(()=>import("../nodes/1.ba3a6fdd.js"),["_app/immutable/nodes/1.ba3a6fdd.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/singletons.7b5cd3b2.js","_app/immutable/chunks/index.36475e15.js"]),()=>k(()=>import("../nodes/2.f144e437.js"),["_app/immutable/nodes/2.f144e437.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/Table.9ecff711.js","_app/immutable/assets/Table.85e0db56.css","_app/immutable/assets/2.abb63e53.css"]),()=>k(()=>import("../nodes/3.b8b614b5.js"),["_app/immutable/nodes/3.b8b614b5.js","_app/immutable/chunks/index.13cdf78d.js"]),()=>k(()=>import("../nodes/4.57666a07.js"),["_app/immutable/nodes/4.57666a07.js","_app/immutable/chunks/index.13cdf78d.js","_app/immutable/chunks/Table.9ecff711.js","_app/immutable/assets/Table.85e0db56.css"]),()=>k(()=>import("../nodes/5.487b4115.js"),["_app/immutable/nodes/5.487b4115.js","_app/immutable/chunks/index.13cdf78d.js"])],oe=[],ae={"/":[2],"/5eAPI":[3],"/5eAPI/monsters":[4],"/5eAPI/spells":[5]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,re as nodes,se as root,oe as server_loads};
