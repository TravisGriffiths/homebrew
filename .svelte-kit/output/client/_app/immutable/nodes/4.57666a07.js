import{S as H,i as I,s as M,W as N,k,q as p,a as v,e as T,l as w,m as y,r as _,h as i,c as E,b as f,E as d,X as x,g as L,d as A,U as b,y as F,z as O,A as P,B as j}from"../chunks/index.13cdf78d.js";import{T as C}from"../chunks/Table.9ecff711.js";const S="https://www.dnd5eapi.co/api",g=async()=>{try{return await(await fetch(`${S}/monsters`)).json()}catch(r){throw console.error(r),r}};function q(r){let t,a;return{c(){t=k("h2"),a=p("An Error Occured Fetching the Monster List")},l(s){t=w(s,"H2",{});var n=y(t);a=_(n,"An Error Occured Fetching the Monster List"),n.forEach(i)},m(s,n){f(s,t,n),d(t,a)},p:b,i:b,o:b,d(s){s&&i(t)}}}function D(r){let t,a,s=r[1].count+"",n,h,u,c,m;return c=new C({props:{tableData:r[1].results,header:r[0]}}),{c(){t=k("h4"),a=p("Fetched "),n=p(s),h=p(" monsters"),u=v(),F(c.$$.fragment)},l(o){t=w(o,"H4",{});var e=y(t);a=_(e,"Fetched "),n=_(e,s),h=_(e," monsters"),e.forEach(i),u=E(o),O(c.$$.fragment,o)},m(o,e){f(o,t,e),d(t,a),d(t,n),d(t,h),f(o,u,e),P(c,o,e),m=!0},p:b,i(o){m||(L(c.$$.fragment,o),m=!0)},o(o){A(c.$$.fragment,o),m=!1},d(o){o&&i(t),o&&i(u),j(c,o)}}}function R(r){let t,a;return{c(){t=k("h2"),a=p("Loading...")},l(s){t=w(s,"H2",{});var n=y(t);a=_(n,"Loading..."),n.forEach(i)},m(s,n){f(s,t,n),d(t,a)},p:b,i:b,o:b,d(s){s&&i(t)}}}function z(r){let t,a,s,n,h,u,c,m,o={ctx:r,current:null,token:null,hasCatch:!0,pending:R,then:D,catch:q,value:1,error:2,blocks:[,,,]};return N(g(),o),{c(){t=k("h1"),a=p("5e Monsters"),s=v(),n=k("section"),h=p("This is a interactive list of monsters from The 5e API mostly as a jump off point for how you could integrate this into your own creations"),u=v(),c=T(),o.block.c()},l(e){t=w(e,"H1",{});var l=y(t);a=_(l,"5e Monsters"),l.forEach(i),s=E(e),n=w(e,"SECTION",{});var $=y(n);h=_($,"This is a interactive list of monsters from The 5e API mostly as a jump off point for how you could integrate this into your own creations"),$.forEach(i),u=E(e),c=T(),o.block.l(e)},m(e,l){f(e,t,l),d(t,a),f(e,s,l),f(e,n,l),d(n,h),f(e,u,l),f(e,c,l),o.block.m(e,o.anchor=l),o.mount=()=>c.parentNode,o.anchor=c,m=!0},p(e,[l]){r=e,x(o,r,l)},i(e){m||(L(o.block),m=!0)},o(e){for(let l=0;l<3;l+=1){const $=o.blocks[l];A($)}m=!1},d(e){e&&i(t),e&&i(s),e&&i(n),e&&i(u),e&&i(c),o.block.d(e),o.token=null,o=null}}}function B(r){return[{index:"Index",name:"Name",url:"Link"}]}class X extends H{constructor(t){super(),I(this,t,B,z,M,{})}}export{X as component};