import{s as S,n as _,b as x}from"../chunks/scheduler.BaS80cnO.js";import{S as j,i as k,e as f,n as g,s as q,g as d,o as h,p as v,l as u,j as y,k as m,r as $,u as E}from"../chunks/index.DnEiMaZo.js";import{s as C}from"../chunks/entry.CXKlzaYZ.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function w(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=f("h1"),o=g(r),n=q(),i=f("p"),l=g(p)},l(e){t=d(e,"H1",{});var a=h(t);o=v(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var c=h(i);l=v(c,p),c.forEach(u)},m(e,a){m(e,t,a),$(t,o),m(e,n,a),m(e,i,a),$(i,l)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&E(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&E(l,p)},i:_,o:_,d(e){e&&(u(t),u(n),u(i))}}}function z(s,t,r){let o;return x(s,P,n=>r(0,o=n)),[o]}let F=class extends j{constructor(t){super(),k(this,t,z,w,S,{})}};export{F as component};
