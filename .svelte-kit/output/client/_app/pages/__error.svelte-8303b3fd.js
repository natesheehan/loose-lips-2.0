import{S as s,i as a,s as t,j as r,k as e,e as n,t as o,m as c,n as i,c as f,a as u,g as m,d as l,b as h,o as d,f as p,H as $,h as v,x as g,u as x,v as j}from"../chunks/vendor-b3989e7d.js";import{H as k}from"../chunks/HeadTags-412b7fc4.js";import"../chunks/environment-ac1cdc6c.js";function E(s){let a,t,E,H,b,D,S,I,V,w,y,P=s[1].name+"";return a=new k({props:{metaData:s[2]}}),{c(){r(a.$$.fragment),t=e(),E=n("div"),H=n("div"),b=n("h1"),D=o(s[0]),S=e(),I=n("p"),V=o(P),w=e(),this.h()},l(r){c(a.$$.fragment,r),t=i(r),E=f(r,"DIV",{class:!0});var e=u(E);H=f(e,"DIV",{class:!0});var n=u(H);b=f(n,"H1",{class:!0});var o=u(b);D=m(o,s[0]),o.forEach(l),S=i(n),I=f(n,"P",{});var h=u(I);V=m(h,P),h.forEach(l),w=i(n),n.forEach(l),e.forEach(l),this.h()},h(){h(b,"class","svelte-x715fd"),h(H,"class","flex flex-col justify-center items-center"),h(E,"class","md:container md:mx-auto")},m(s,r){d(a,s,r),p(s,t,r),p(s,E,r),$(E,H),$(H,b),$(b,D),$(H,S),$(H,I),$(I,V),$(H,w),y=!0},p(s,[a]){(!y||1&a)&&v(D,s[0]),(!y||2&a)&&P!==(P=s[1].name+"")&&v(V,P)},i(s){y||(g(a.$$.fragment,s),y=!0)},o(s){x(a.$$.fragment,s),y=!1},d(s){j(a,s),s&&l(t),s&&l(E)}}}function H({error:s,status:a}){return{props:{title:`${a}: ${s.message}`,status:a,error:s}}}function b(s,a,t){let{status:r}=a,{error:e}=a;const n={title:`${r} | Sveltekit`,description:"404 page of Sveltekit starter project"};return s.$$set=s=>{"status"in s&&t(0,r=s.status),"error"in s&&t(1,e=s.error)},[r,e,n]}class D extends s{constructor(s){super(),a(this,s,b,E,t,{status:0,error:1})}}export{D as default,H as load};
