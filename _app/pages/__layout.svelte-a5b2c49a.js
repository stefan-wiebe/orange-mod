var T=Object.defineProperty,j=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var N=(n,e,t)=>e in n?T(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,O=(n,e)=>{for(var t in e||(e={}))Q.call(e,t)&&N(n,t,e[t]);if(M)for(var t of M(e))U.call(e,t)&&N(n,t,e[t]);return n},V=(n,e)=>j(n,A(e));import{S as W,i as X,s as Y,F as Z,e as h,k as x,t as ee,c as g,a as b,d,m as C,G as te,h as se,b as P,g as B,H as v,I as ne,o as k,p as ae,q as $,J as re,K as oe,L as le,M as ce,v as ie,N as ue,n as de,O as me,w as G,x as H,y as K,B as R,P as _e}from"../chunks/vendor-dd0f5091.js";import{p as S}from"../chunks/preferences-30108c93.js";const{document:F}=ue;function fe(n){let e,t;return e=new me({props:{size:"24",class:"text-zinc-900"}}),{c(){G(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,r){K(e,s,r),t=!0},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){k(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function pe(n){let e,t;return e=new _e({props:{size:"24",class:"text-white"}}),{c(){G(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,r){K(e,s,r),t=!0},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){k(e.$$.fragment,s),t=!1},d(s){R(e,s)}}}function ve(n){let e,t,s,r,o,p,l,_,y,f,E,L;const w=[pe,fe],m=[];function q(a,i){var u;return((u=a[0])==null?void 0:u.dark)?0:1}r=q(n),o=m[r]=w[r](n);const I=n[2].default,c=Z(I,n,n[1],null);return{c(){e=h("div"),t=h("div"),s=h("div"),o.c(),p=x(),c&&c.c(),l=x(),_=h("script"),y=ee(`{
			const preferences = JSON.parse(localStorage.getItem('preferences')) ?? {};

			if (preferences.dark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}`),this.h()},l(a){e=g(a,"DIV",{class:!0});var i=b(e);t=g(i,"DIV",{class:!0});var u=b(t);s=g(u,"DIV",{});var z=b(s);o.l(z),z.forEach(d),u.forEach(d),p=C(i),c&&c.l(i),i.forEach(d),l=C(a);const D=te('[data-svelte="svelte-tmtvmg"]',F.head);_=g(D,"SCRIPT",{});var J=b(_);y=se(J,`{
			const preferences = JSON.parse(localStorage.getItem('preferences')) ?? {};

			if (preferences.dark) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}`),J.forEach(d),D.forEach(d),this.h()},h(){P(t,"class","py-4"),P(e,"class","container mx-auto")},m(a,i){B(a,e,i),v(e,t),v(t,s),m[r].m(s,null),v(e,p),c&&c.m(e,null),B(a,l,i),v(F.head,_),v(_,y),f=!0,E||(L=ne(s,"click",n[3]),E=!0)},p(a,[i]){let u=r;r=q(a),r!==u&&(de(),k(m[u],1,1,()=>{m[u]=null}),ae(),o=m[r],o||(o=m[r]=w[r](a),o.c()),$(o,1),o.m(s,null)),c&&c.p&&(!f||i&2)&&re(c,I,a,a[1],f?le(I,a[1],i,null):oe(a[1]),null)},i(a){f||($(o),$(c,a),f=!0)},o(a){k(o),k(c,a),f=!1},d(a){a&&d(e),m[r].d(),c&&c.d(a),a&&d(l),d(_),E=!1,L()}}}function ke(n,e,t){let s;ce(n,S,l=>t(0,s=l));let{$$slots:r={},$$scope:o}=e;ie(()=>{S.subscribe(({dark:l})=>{l?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")})});const p=()=>S.update(l=>V(O({},l),{dark:!l.dark}));return n.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[s,o,r,p]}class be extends W{constructor(e){super();X(this,e,ke,ve,Y,{})}}export{be as default};
