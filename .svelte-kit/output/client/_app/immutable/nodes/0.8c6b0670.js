import{C as Ve,S as y,i as w,s as x,D as z,k as V,a as U,l as C,m as T,h as v,c as W,n as u,b as O,E as B,F as N,G as j,H as q,g as b,d as H,I as ie,J as Y,K as Z,L as ne,M as J,v as Q,f as X,N as Ce,O as Te,P as ce,Q as Ie,R as re,T as M,q as $,r as ee,y as te,z as le,A as ae,B as se,U as Ae}from"../chunks/index.13cdf78d.js";import{w as Be}from"../chunks/index.36475e15.js";const oe={};function ue(l){return l==="local"?localStorage:sessionStorage}function fe(l,e,t){const s=(t==null?void 0:t.serializer)??JSON,r=(t==null?void 0:t.storage)??"local";function a(i,f){ue(r).setItem(i,s.stringify(f))}if(!oe[l]){const i=Be(e,g=>{const R=ue(r).getItem(l);R&&g(s.parse(R));{const P=_=>{_.key===l&&g(_.newValue?s.parse(_.newValue):null)};return window.addEventListener("storage",P),()=>window.removeEventListener("storage",P)}}),{subscribe:f,set:c}=i;oe[l]={set(g){a(l,g),c(g)},update(g){const R=g(Ve(i));a(l,R),c(R)},subscribe:f}}return oe[l]}fe("modeOsPrefers",!1);fe("modeUserPrefers",void 0);fe("modeCurrent",!1);const Oe=l=>({}),de=l=>({}),ze=l=>({}),he=l=>({});function Ne(l){let e,t,s,r,a,i,f,c,g,R,P;const _=l[13].lead,L=z(_,l,l[12],he),p=l[13].default,S=z(p,l,l[12],null),h=l[13].trail,o=z(h,l,l[12],de);return{c(){e=V("div"),t=V("div"),L&&L.c(),r=U(),a=V("div"),S&&S.c(),f=U(),c=V("div"),o&&o.c(),this.h()},l(n){e=C(n,"DIV",{class:!0,"data-testid":!0});var E=T(e);t=C(E,"DIV",{class:!0});var A=T(t);L&&L.l(A),A.forEach(v),r=W(E),a=C(E,"DIV",{class:!0});var F=T(a);S&&S.l(F),F.forEach(v),f=W(E),c=C(E,"DIV",{class:!0});var I=T(c);o&&o.l(I),I.forEach(v),E.forEach(v),this.h()},h(){u(t,"class",s="app-bar-lead "+l[0]),u(a,"class",i="app-bar-default "+l[1]),u(c,"class",g="app-bar-trail "+l[2]),u(e,"class",R="app-rail "+l[3]),u(e,"data-testid","app-rail")},m(n,E){O(n,e,E),B(e,t),L&&L.m(t,null),B(e,r),B(e,a),S&&S.m(a,null),B(e,f),B(e,c),o&&o.m(c,null),P=!0},p(n,[E]){L&&L.p&&(!P||E&4096)&&N(L,_,n,n[12],P?q(_,n[12],E,ze):j(n[12]),he),(!P||E&1&&s!==(s="app-bar-lead "+n[0]))&&u(t,"class",s),S&&S.p&&(!P||E&4096)&&N(S,p,n,n[12],P?q(p,n[12],E,null):j(n[12]),null),(!P||E&2&&i!==(i="app-bar-default "+n[1]))&&u(a,"class",i),o&&o.p&&(!P||E&4096)&&N(o,h,n,n[12],P?q(h,n[12],E,Oe):j(n[12]),de),(!P||E&4&&g!==(g="app-bar-trail "+n[2]))&&u(c,"class",g),(!P||E&8&&R!==(R="app-rail "+n[3]))&&u(e,"class",R)},i(n){P||(b(L,n),b(S,n),b(o,n),P=!0)},o(n){H(L,n),H(S,n),H(o,n),P=!1},d(n){n&&v(e),L&&L.d(n),S&&S.d(n),o&&o.d(n)}}}const je="grid grid-rows-[auto_1fr_auto] overflow-y-auto";function qe(l,e,t){let s,{$$slots:r={},$$scope:a}=e,{background:i="bg-surface-100-800-token"}=e,{border:f=""}=e,{width:c="w-20"}=e,{height:g="h-full"}=e,{gap:R="gap-0"}=e,{regionLead:P=""}=e,{regionDefault:_=""}=e,{regionTrail:L=""}=e,{hover:p="bg-primary-hover-token"}=e,{active:S="bg-primary-active-token"}=e,{spacing:h="space-y-1"}=e;return ie("active",S),ie("hover",p),ie("spacing",h),l.$$set=o=>{t(14,e=Y(Y({},e),Z(o))),"background"in o&&t(4,i=o.background),"border"in o&&t(5,f=o.border),"width"in o&&t(6,c=o.width),"height"in o&&t(7,g=o.height),"gap"in o&&t(8,R=o.gap),"regionLead"in o&&t(0,P=o.regionLead),"regionDefault"in o&&t(1,_=o.regionDefault),"regionTrail"in o&&t(2,L=o.regionTrail),"hover"in o&&t(9,p=o.hover),"active"in o&&t(10,S=o.active),"spacing"in o&&t(11,h=o.spacing),"$$scope"in o&&t(12,a=o.$$scope)},l.$$.update=()=>{t(3,s=`${je} ${i} ${f} ${c} ${g} ${R} ${e.class||""}`)},e=Z(e),[P,_,L,s,i,f,c,g,R,p,S,h,a,r]}class Je extends y{constructor(e){super(),w(this,e,qe,Ne,x,{background:4,border:5,width:6,height:7,gap:8,regionLead:0,regionDefault:1,regionTrail:2,hover:9,active:10,spacing:11})}}const Me=l=>({}),_e=l=>({});function ge(l){let e,t,s;const r=l[15].lead,a=z(r,l,l[14],_e);return{c(){e=V("div"),a&&a.c(),this.h()},l(i){e=C(i,"DIV",{class:!0});var f=T(e);a&&a.l(f),f.forEach(v),this.h()},h(){u(e,"class",t="app-rail-lead "+l[1])},m(i,f){O(i,e,f),a&&a.m(e,null),s=!0},p(i,f){a&&a.p&&(!s||f&16384)&&N(a,r,i,i[14],s?q(r,i[14],f,Me):j(i[14]),_e),(!s||f&2&&t!==(t="app-rail-lead "+i[1]))&&u(e,"class",t)},i(i){s||(b(a,i),s=!0)},o(i){H(a,i),s=!1},d(i){i&&v(e),a&&a.d(i)}}}function Ue(l){let e,t,s,r,a,i,f,c,g,R,P,_=l[6].lead&&ge(l);const L=l[15].default,p=z(L,l,l[14],null);let S=[{class:f="app-rail-anchor "+l[3]},{href:c=l[5].href},l[4](),{"data-testid":"app-rail-anchor"}],h={};for(let o=0;o<S.length;o+=1)h=Y(h,S[o]);return{c(){e=V("a"),t=V("div"),_&&_.c(),s=U(),r=V("div"),p&&p.c(),this.h()},l(o){e=C(o,"A",{class:!0,href:!0,"data-testid":!0});var n=T(e);t=C(n,"DIV",{class:!0});var E=T(t);_&&_.l(E),s=W(E),r=C(E,"DIV",{class:!0});var A=T(r);p&&p.l(A),A.forEach(v),E.forEach(v),n.forEach(v),this.h()},h(){u(r,"class",a="app-rail-label "+l[0]),u(t,"class",i="app-rail-wrapper "+l[2]),ne(e,h)},m(o,n){O(o,e,n),B(e,t),_&&_.m(t,null),B(t,s),B(t,r),p&&p.m(r,null),g=!0,R||(P=[J(e,"click",l[16]),J(e,"keydown",l[17]),J(e,"keyup",l[18]),J(e,"keypress",l[19]),J(e,"mouseover",l[20]),J(e,"mouseleave",l[21]),J(e,"focus",l[22]),J(e,"blur",l[23])],R=!0)},p(o,[n]){o[6].lead?_?(_.p(o,n),n&64&&b(_,1)):(_=ge(o),_.c(),b(_,1),_.m(t,s)):_&&(Q(),H(_,1,1,()=>{_=null}),X()),p&&p.p&&(!g||n&16384)&&N(p,L,o,o[14],g?q(L,o[14],n,null):j(o[14]),null),(!g||n&1&&a!==(a="app-rail-label "+o[0]))&&u(r,"class",a),(!g||n&4&&i!==(i="app-rail-wrapper "+o[2]))&&u(t,"class",i),ne(e,h=Ce(S,[(!g||n&8&&f!==(f="app-rail-anchor "+o[3]))&&{class:f},(!g||n&32&&c!==(c=o[5].href))&&{href:c},o[4](),{"data-testid":"app-rail-anchor"}]))},i(o){g||(b(_),b(p,o),g=!0)},o(o){H(_),H(p,o),g=!1},d(o){o&&v(e),_&&_.d(),p&&p.d(o),R=!1,Te(P)}}}const We="unstyled",Ge="w-full aspect-square flex flex-col justify-center items-stretch text-center space-y-1",Ke="font-bold text-xs";function Qe(l,e,t){let s,r,a,i,f;const c=["selected","regionLead","regionLabel","hover","active","spacing"];let g=ce(e,c),{$$slots:R={},$$scope:P}=e;const _=Ie(R);let{selected:L=!1}=e,{regionLead:p="flex justify-center items-center"}=e,{regionLabel:S=""}=e,{hover:h=re("hover")}=e,{active:o=re("active")}=e,{spacing:n=re("spacing")}=e;function E(){return delete g.class,g}function A(k){M.call(this,l,k)}function F(k){M.call(this,l,k)}function I(k){M.call(this,l,k)}function d(k){M.call(this,l,k)}function m(k){M.call(this,l,k)}function D(k){M.call(this,l,k)}function G(k){M.call(this,l,k)}function K(k){M.call(this,l,k)}return l.$$set=k=>{t(5,e=Y(Y({},e),Z(k))),t(24,g=ce(e,c)),"selected"in k&&t(7,L=k.selected),"regionLead"in k&&t(8,p=k.regionLead),"regionLabel"in k&&t(9,S=k.regionLabel),"hover"in k&&t(10,h=k.hover),"active"in k&&t(11,o=k.active),"spacing"in k&&t(12,n=k.spacing),"$$scope"in k&&t(14,P=k.$$scope)},l.$$.update=()=>{l.$$.dirty&2176&&t(13,s=L?o:""),t(3,r=`${We}  ${e.class||""}`),l.$$.dirty&13312&&t(2,a=`${Ge} ${h} ${n} ${s}`),l.$$.dirty&256&&t(1,i=`${p}`),l.$$.dirty&512&&t(0,f=`${Ke} ${S}`)},e=Z(e),[f,i,a,r,E,e,_,L,p,S,h,o,n,s,P,R,A,F,I,d,m,D,G,K]}class Xe extends y{constructor(e){super(),w(this,e,Qe,Ue,x,{selected:7,regionLead:8,regionLabel:9,hover:10,active:11,spacing:12})}}const Ye=l=>({}),me=l=>({}),Ze=l=>({}),be=l=>({}),ye=l=>({}),ve=l=>({}),we=l=>({}),Le=l=>({}),xe=l=>({}),Ee=l=>({}),$e=l=>({}),ke=l=>({});function Pe(l){let e,t,s;const r=l[18].header,a=z(r,l,l[17],ke);return{c(){e=V("header"),a&&a.c(),this.h()},l(i){e=C(i,"HEADER",{id:!0,class:!0});var f=T(e);a&&a.l(f),f.forEach(v),this.h()},h(){u(e,"id","shell-header"),u(e,"class",t="flex-none "+l[7])},m(i,f){O(i,e,f),a&&a.m(e,null),s=!0},p(i,f){a&&a.p&&(!s||f&131072)&&N(a,r,i,i[17],s?q(r,i[17],f,$e):j(i[17]),ke),(!s||f&128&&t!==(t="flex-none "+i[7]))&&u(e,"class",t)},i(i){s||(b(a,i),s=!0)},o(i){H(a,i),s=!1},d(i){i&&v(e),a&&a.d(i)}}}function pe(l){let e,t;const s=l[18].sidebarLeft,r=z(s,l,l[17],Ee);return{c(){e=V("aside"),r&&r.c(),this.h()},l(a){e=C(a,"ASIDE",{id:!0,class:!0});var i=T(e);r&&r.l(i),i.forEach(v),this.h()},h(){u(e,"id","sidebar-left"),u(e,"class",l[6])},m(a,i){O(a,e,i),r&&r.m(e,null),t=!0},p(a,i){r&&r.p&&(!t||i&131072)&&N(r,s,a,a[17],t?q(s,a[17],i,xe):j(a[17]),Ee),(!t||i&64)&&u(e,"class",a[6])},i(a){t||(b(r,a),t=!0)},o(a){H(r,a),t=!1},d(a){a&&v(e),r&&r.d(a)}}}function Se(l){let e,t,s;const r=l[18].pageHeader,a=z(r,l,l[17],Le),i=a||et();return{c(){e=V("header"),i&&i.c(),this.h()},l(f){e=C(f,"HEADER",{id:!0,class:!0});var c=T(e);i&&i.l(c),c.forEach(v),this.h()},h(){u(e,"id","page-header"),u(e,"class",t="flex-none "+l[4])},m(f,c){O(f,e,c),i&&i.m(e,null),s=!0},p(f,c){a&&a.p&&(!s||c&131072)&&N(a,r,f,f[17],s?q(r,f[17],c,we):j(f[17]),Le),(!s||c&16&&t!==(t="flex-none "+f[4]))&&u(e,"class",t)},i(f){s||(b(i,f),s=!0)},o(f){H(i,f),s=!1},d(f){f&&v(e),i&&i.d(f)}}}function et(l){let e;return{c(){e=$("(slot:header)")},l(t){e=ee(t,"(slot:header)")},m(t,s){O(t,e,s)},d(t){t&&v(e)}}}function He(l){let e,t,s;const r=l[18].pageFooter,a=z(r,l,l[17],ve),i=a||tt();return{c(){e=V("footer"),i&&i.c(),this.h()},l(f){e=C(f,"FOOTER",{id:!0,class:!0});var c=T(e);i&&i.l(c),c.forEach(v),this.h()},h(){u(e,"id","page-footer"),u(e,"class",t="flex-none "+l[2])},m(f,c){O(f,e,c),i&&i.m(e,null),s=!0},p(f,c){a&&a.p&&(!s||c&131072)&&N(a,r,f,f[17],s?q(r,f[17],c,ye):j(f[17]),ve),(!s||c&4&&t!==(t="flex-none "+f[2]))&&u(e,"class",t)},i(f){s||(b(i,f),s=!0)},o(f){H(i,f),s=!1},d(f){f&&v(e),i&&i.d(f)}}}function tt(l){let e;return{c(){e=$("(slot:footer)")},l(t){e=ee(t,"(slot:footer)")},m(t,s){O(t,e,s)},d(t){t&&v(e)}}}function Re(l){let e,t;const s=l[18].sidebarRight,r=z(s,l,l[17],be);return{c(){e=V("aside"),r&&r.c(),this.h()},l(a){e=C(a,"ASIDE",{id:!0,class:!0});var i=T(e);r&&r.l(i),i.forEach(v),this.h()},h(){u(e,"id","sidebar-right"),u(e,"class",l[5])},m(a,i){O(a,e,i),r&&r.m(e,null),t=!0},p(a,i){r&&r.p&&(!t||i&131072)&&N(r,s,a,a[17],t?q(s,a[17],i,Ze):j(a[17]),be),(!t||i&32)&&u(e,"class",a[5])},i(a){t||(b(r,a),t=!0)},o(a){H(r,a),t=!1},d(a){a&&v(e),r&&r.d(a)}}}function Fe(l){let e,t,s;const r=l[18].footer,a=z(r,l,l[17],me);return{c(){e=V("footer"),a&&a.c(),this.h()},l(i){e=C(i,"FOOTER",{id:!0,class:!0});var f=T(e);a&&a.l(f),f.forEach(v),this.h()},h(){u(e,"id","shell-footer"),u(e,"class",t="flex-none "+l[1])},m(i,f){O(i,e,f),a&&a.m(e,null),s=!0},p(i,f){a&&a.p&&(!s||f&131072)&&N(a,r,i,i[17],s?q(r,i[17],f,Ye):j(i[17]),me),(!s||f&2&&t!==(t="flex-none "+i[1]))&&u(e,"class",t)},i(i){s||(b(a,i),s=!0)},o(i){H(a,i),s=!1},d(i){i&&v(e),a&&a.d(i)}}}function lt(l){let e,t,s,r,a,i,f,c,g,R,P,_,L,p,S,h=l[9].header&&Pe(l),o=l[9].sidebarLeft&&pe(l),n=l[9].pageHeader&&Se(l);const E=l[18].default,A=z(E,l,l[17],null);let F=l[9].pageFooter&&He(l),I=l[9].sidebarRight&&Re(l),d=l[9].footer&&Fe(l);return{c(){e=V("div"),h&&h.c(),t=U(),s=V("div"),o&&o.c(),r=U(),a=V("div"),n&&n.c(),i=U(),f=V("main"),A&&A.c(),g=U(),F&&F.c(),P=U(),I&&I.c(),_=U(),d&&d.c(),this.h()},l(m){e=C(m,"DIV",{id:!0,class:!0,"data-testid":!0});var D=T(e);h&&h.l(D),t=W(D),s=C(D,"DIV",{class:!0});var G=T(s);o&&o.l(G),r=W(G),a=C(G,"DIV",{id:!0,class:!0});var K=T(a);n&&n.l(K),i=W(K),f=C(K,"MAIN",{id:!0,class:!0});var k=T(f);A&&A.l(k),k.forEach(v),g=W(K),F&&F.l(K),K.forEach(v),P=W(G),I&&I.l(G),G.forEach(v),_=W(D),d&&d.l(D),D.forEach(v),this.h()},h(){u(f,"id","page-content"),u(f,"class",c="flex-auto "+l[3]),u(a,"id","page"),u(a,"class",R=l[0]+" "+De),u(s,"class","flex-auto "+st),u(e,"id","appShell"),u(e,"class",l[8]),u(e,"data-testid","app-shell")},m(m,D){O(m,e,D),h&&h.m(e,null),B(e,t),B(e,s),o&&o.m(s,null),B(s,r),B(s,a),n&&n.m(a,null),B(a,i),B(a,f),A&&A.m(f,null),B(a,g),F&&F.m(a,null),B(s,P),I&&I.m(s,null),B(e,_),d&&d.m(e,null),L=!0,p||(S=J(a,"scroll",l[19]),p=!0)},p(m,[D]){m[9].header?h?(h.p(m,D),D&512&&b(h,1)):(h=Pe(m),h.c(),b(h,1),h.m(e,t)):h&&(Q(),H(h,1,1,()=>{h=null}),X()),m[9].sidebarLeft?o?(o.p(m,D),D&512&&b(o,1)):(o=pe(m),o.c(),b(o,1),o.m(s,r)):o&&(Q(),H(o,1,1,()=>{o=null}),X()),m[9].pageHeader?n?(n.p(m,D),D&512&&b(n,1)):(n=Se(m),n.c(),b(n,1),n.m(a,i)):n&&(Q(),H(n,1,1,()=>{n=null}),X()),A&&A.p&&(!L||D&131072)&&N(A,E,m,m[17],L?q(E,m[17],D,null):j(m[17]),null),(!L||D&8&&c!==(c="flex-auto "+m[3]))&&u(f,"class",c),m[9].pageFooter?F?(F.p(m,D),D&512&&b(F,1)):(F=He(m),F.c(),b(F,1),F.m(a,null)):F&&(Q(),H(F,1,1,()=>{F=null}),X()),(!L||D&1&&R!==(R=m[0]+" "+De))&&u(a,"class",R),m[9].sidebarRight?I?(I.p(m,D),D&512&&b(I,1)):(I=Re(m),I.c(),b(I,1),I.m(s,null)):I&&(Q(),H(I,1,1,()=>{I=null}),X()),m[9].footer?d?(d.p(m,D),D&512&&b(d,1)):(d=Fe(m),d.c(),b(d,1),d.m(e,null)):d&&(Q(),H(d,1,1,()=>{d=null}),X()),(!L||D&256)&&u(e,"class",m[8])},i(m){L||(b(h),b(o),b(n),b(A,m),b(F),b(I),b(d),L=!0)},o(m){H(h),H(o),H(n),H(A,m),H(F),H(I),H(d),L=!1},d(m){m&&v(e),h&&h.d(),o&&o.d(),n&&n.d(),A&&A.d(m),F&&F.d(),I&&I.d(),d&&d.d(),p=!1,S()}}}const at="w-full h-full flex flex-col overflow-hidden",st="w-full h-full flex overflow-hidden",De="flex-1 overflow-x-hidden flex flex-col",it="flex-none overflow-x-hidden overflow-y-auto",rt="flex-none overflow-x-hidden overflow-y-auto";function ot(l,e,t){let s,r,a,i,f,c,g,R,{$$slots:P={},$$scope:_}=e;const L=Ie(P);let{regionPage:p=""}=e,{slotHeader:S="z-10"}=e,{slotSidebarLeft:h="w-auto"}=e,{slotSidebarRight:o="w-auto"}=e,{slotPageHeader:n=""}=e,{slotPageContent:E=""}=e,{slotPageFooter:A=""}=e,{slotFooter:F=""}=e;function I(d){M.call(this,l,d)}return l.$$set=d=>{t(20,e=Y(Y({},e),Z(d))),"regionPage"in d&&t(0,p=d.regionPage),"slotHeader"in d&&t(10,S=d.slotHeader),"slotSidebarLeft"in d&&t(11,h=d.slotSidebarLeft),"slotSidebarRight"in d&&t(12,o=d.slotSidebarRight),"slotPageHeader"in d&&t(13,n=d.slotPageHeader),"slotPageContent"in d&&t(14,E=d.slotPageContent),"slotPageFooter"in d&&t(15,A=d.slotPageFooter),"slotFooter"in d&&t(16,F=d.slotFooter),"$$scope"in d&&t(17,_=d.$$scope)},l.$$.update=()=>{t(8,s=`${at} ${e.class??""}`),l.$$.dirty&1024&&t(7,r=`${S}`),l.$$.dirty&2048&&t(6,a=`${it} ${h}`),l.$$.dirty&4096&&t(5,i=`${rt} ${o}`),l.$$.dirty&8192&&t(4,f=`${n}`),l.$$.dirty&16384&&t(3,c=`${E}`),l.$$.dirty&32768&&t(2,g=`${A}`),l.$$.dirty&65536&&t(1,R=`${F}`)},e=Z(e),[p,R,g,c,f,i,a,r,s,L,S,h,o,n,E,A,F,_,P,I]}class ft extends y{constructor(e){super(),w(this,e,ot,lt,x,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function nt(l){let e,t,s;return{c(){e=V("h3"),t=V("a"),s=$("The Excellent 5e API"),this.h()},l(r){e=C(r,"H3",{});var a=T(e);t=C(a,"A",{href:!0});var i=T(t);s=ee(i,"The Excellent 5e API"),i.forEach(v),a.forEach(v),this.h()},h(){u(t,"href","/5eAPI")},m(r,a){O(r,e,a),B(e,t),B(t,s)},p:Ae,d(r){r&&v(e)}}}function ct(l){let e,t;return{c(){e=V("h1"),t=$("Resources")},l(s){e=C(s,"H1",{});var r=T(e);t=ee(r,"Resources"),r.forEach(v)},m(s,r){O(s,e,r),B(e,t)},p:Ae,d(s){s&&v(e)}}}function ut(l){let e,t;return e=new Xe({props:{href:"/",slot:"lead",$$slots:{default:[ct]},$$scope:{ctx:l}}}),{c(){te(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){ae(e,s,r),t=!0},p(s,r){const a={};r&1&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){se(e,s)}}}function dt(l){let e,t;return e=new Je({props:{class:"background w-fit",$$slots:{lead:[ut],default:[nt]},$$scope:{ctx:l}}}),{c(){te(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){ae(e,s,r),t=!0},p(s,[r]){const a={};r&1&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){se(e,s)}}}class ht extends y{constructor(e){super(),w(this,e,null,dt,x,{})}}function _t(l){let e,t;const s=l[0].default,r=z(s,l,l[1],null);return{c(){e=V("div"),r&&r.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var i=T(e);r&&r.l(i),i.forEach(v),this.h()},h(){u(e,"class","p-10")},m(a,i){O(a,e,i),r&&r.m(e,null),t=!0},p(a,i){r&&r.p&&(!t||i&2)&&N(r,s,a,a[1],t?q(s,a[1],i,null):j(a[1]),null)},i(a){t||(b(r,a),t=!0)},o(a){H(r,a),t=!1},d(a){a&&v(e),r&&r.d(a)}}}function gt(l){let e,t;return e=new ht({}),{c(){te(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){ae(e,s,r),t=!0},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){se(e,s)}}}function mt(l){let e,t;return e=new ft({props:{$$slots:{sidebarLeft:[gt],default:[_t]},$$scope:{ctx:l}}}),{c(){te(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,r){ae(e,s,r),t=!0},p(s,[r]){const a={};r&2&&(a.$$scope={dirty:r,ctx:s}),e.$set(a)},i(s){t||(b(e.$$.fragment,s),t=!0)},o(s){H(e.$$.fragment,s),t=!1},d(s){se(e,s)}}}function bt(l,e,t){let{$$slots:s={},$$scope:r}=e;return l.$$set=a=>{"$$scope"in a&&t(1,r=a.$$scope)},[s,r]}class Et extends y{constructor(e){super(),w(this,e,bt,mt,x,{})}}export{Et as component};
