function w(){}function j(t,n){for(const e in n)t[e]=n[e];return t}function A(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function E(t){return t()}function B(){return Object.create(null)}function q(t){t.forEach(E)}function C(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function P(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function S(t){return Object.keys(t).length===0}function y(t,...n){if(t==null){for(const o of n)o(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function U(t){let n;return y(t,e=>n=e)(),n}function D(t,n,e){t.$$.on_destroy.push(y(n,e))}function G(t,n,e,o){if(t){const r=m(t,n,e,o);return t[0](r)}}function m(t,n,e,o){return t[1]&&o?j(e.ctx.slice(),t[1](o(n))):e.ctx}function H(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],_=Math.max(n.dirty.length,r.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|r[s];return l}return n.dirty|r}return n.dirty}function I(t,n,e,o,r,l){if(r){const _=m(n,e,o,l);t.p(_,r)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let f;function h(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function K(t){k().$$.on_mount.push(t)}function L(t){k().$$.after_update.push(t)}function N(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const a=[],b=[];let u=[];const g=[],x=Promise.resolve();let p=!1;function O(){p||(p=!0,x.then(z))}function Q(){return O(),x}function v(t){u.push(t)}const d=new Set;let c=0;function z(){if(c!==0)return;const t=f;do{try{for(;c<a.length;){const n=a[c];c++,h(n),M(n.$$)}}catch(n){throw a.length=0,c=0,n}for(h(null),a.length=0,c=0;b.length;)b.pop()();for(let n=0;n<u.length;n+=1){const e=u[n];d.has(e)||(d.add(e),e())}u.length=0}while(a.length);for(;g.length;)g.pop()();p=!1,d.clear(),h(t)}function M(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function R(t){const n=[],e=[];u.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),u=n}export{k as A,U as B,N as C,H as a,y as b,G as c,b as d,D as e,P as f,J as g,L as h,C as i,B as j,z as k,S as l,v as m,w as n,K as o,R as p,f as q,q as r,F as s,Q as t,I as u,h as v,E as w,a as x,O as y,A as z};
