import{S as L,i as U,s as w,k as m,a as T,l as v,m as k,h as _,c as y,n as D,b as p,E as g,U as O,Y as E,q as S,r as Y,u as C}from"./index.13cdf78d.js";function q(o,t,s){const c=o.slice();return c[2]=t[s],c}function x(o,t,s){const c=o.slice();return c[5]=t[s],c}function A(o,t,s){const c=o.slice();return c[8]=t[s],c}function B(o){let t,s=o[1][o[8]]+"",c,n;return{c(){t=m("th"),c=S(s),n=T()},l(e){t=v(e,"TH",{});var r=k(t);c=Y(r,s),n=y(r),r.forEach(_)},m(e,r){p(e,t,r),g(t,c),g(t,n)},p(e,r){r&2&&s!==(s=e[1][e[8]]+"")&&C(c,s)},d(e){e&&_(t)}}}function H(o){let t,s=o[2][o[5]]+"",c;return{c(){t=m("td"),c=S(s),this.h()},l(n){t=v(n,"TD",{class:!0});var e=k(t);c=Y(e,s),e.forEach(_),this.h()},h(){D(t,"class","p-1.5")},m(n,e){p(n,t,e),g(t,c)},p(n,e){e&1&&s!==(s=n[2][n[5]]+"")&&C(c,s)},d(n){n&&_(t)}}}function R(o){let t,s,c=Object.keys(o[2]),n=[];for(let e=0;e<c.length;e+=1)n[e]=H(x(o,c,e));return{c(){t=m("tr");for(let e=0;e<n.length;e+=1)n[e].c();s=T(),this.h()},l(e){t=v(e,"TR",{class:!0});var r=k(t);for(let l=0;l<n.length;l+=1)n[l].l(r);s=y(r),r.forEach(_),this.h()},h(){D(t,"class","svelte-1jxqbf0")},m(e,r){p(e,t,r);for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(t,null);g(t,s)},p(e,r){if(r&1){c=Object.keys(e[2]);let l;for(l=0;l<c.length;l+=1){const d=x(e,c,l);n[l]?n[l].p(d,r):(n[l]=H(d),n[l].c(),n[l].m(t,s))}for(;l<n.length;l+=1)n[l].d(1);n.length=c.length}},d(e){e&&_(t),E(n,e)}}}function z(o){let t,s,c,n,e,r=Object.keys(o[1]),l=[];for(let h=0;h<r.length;h+=1)l[h]=B(A(o,r,h));let d=o[0],i=[];for(let h=0;h<d.length;h+=1)i[h]=R(q(o,d,h));return{c(){t=m("table"),s=m("thead"),c=m("tr");for(let h=0;h<l.length;h+=1)l[h].c();n=T(),e=m("tbody");for(let h=0;h<i.length;h+=1)i[h].c();this.h()},l(h){t=v(h,"TABLE",{});var f=k(t);s=v(f,"THEAD",{});var a=k(s);c=v(a,"TR",{class:!0});var u=k(c);for(let b=0;b<l.length;b+=1)l[b].l(u);u.forEach(_),a.forEach(_),n=y(f),e=v(f,"TBODY",{});var j=k(e);for(let b=0;b<i.length;b+=1)i[b].l(j);j.forEach(_),f.forEach(_),this.h()},h(){D(c,"class","svelte-1jxqbf0")},m(h,f){p(h,t,f),g(t,s),g(s,c);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(c,null);g(t,n),g(t,e);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(e,null)},p(h,[f]){if(f&2){r=Object.keys(h[1]);let a;for(a=0;a<r.length;a+=1){const u=A(h,r,a);l[a]?l[a].p(u,f):(l[a]=B(u),l[a].c(),l[a].m(c,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=r.length}if(f&1){d=h[0];let a;for(a=0;a<d.length;a+=1){const u=q(h,d,a);i[a]?i[a].p(u,f):(i[a]=R(u),i[a].c(),i[a].m(e,null))}for(;a<i.length;a+=1)i[a].d(1);i.length=d.length}},i:O,o:O,d(h){h&&_(t),E(l,h),E(i,h)}}}function F(o,t,s){let{tableData:c=[]}=t,{header:n={}}=t;return o.$$set=e=>{"tableData"in e&&s(0,c=e.tableData),"header"in e&&s(1,n=e.header)},[c,n]}class I extends L{constructor(t){super(),U(this,t,F,z,w,{tableData:0,header:1})}}export{I as T};