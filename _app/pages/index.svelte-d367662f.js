var ge=Object.defineProperty,be=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var de=(a,e,t)=>e in a?ge(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,K=(a,e)=>{for(var t in e||(e={}))ke.call(e,t)&&de(a,t,e[t]);if(me)for(var t of me(e))we.call(e,t)&&de(a,t,e[t]);return a},q=(a,e)=>be(a,ve(e));import{U as M,V as Ee,W as ye,X as Ie,S as Z,i as G,s as Q,F as ie,e as b,c as v,a as k,d as c,b as _,g as C,J as ue,K as fe,L as ce,q as h,o as g,w as E,k as B,x as y,m as F,y as I,H as f,I as _e,B as z,Y as ze,Z as De,t as L,h as T,j as he,_ as Se,M as Ae,$ as Le,a0 as Te,T as ee,a1 as Ve,a2 as Ce,a3 as Re}from"../chunks/vendor-dd0f5091.js";import{p as H}from"../chunks/preferences-30108c93.js";M.locale("de");M.extend(Ee);M.extend(ye);M.extend(Ie);function We(a){let e,t;const n=a[2].default,s=ie(n,a,a[1],null);return{c(){e=b("label"),s&&s.c(),this.h()},l(l){e=v(l,"LABEL",{for:!0,class:!0});var r=k(e);s&&s.l(r),r.forEach(c),this.h()},h(){_(e,"for",a[0]),_(e,"class","block mb-2")},m(l,r){C(l,e,r),s&&s.m(e,null),t=!0},p(l,[r]){s&&s.p&&(!t||r&2)&&ue(s,n,l,l[1],t?ce(n,l[1],r,null):fe(l[1]),null),(!t||r&1)&&_(e,"for",l[0])},i(l){t||(h(s,l),t=!0)},o(l){g(s,l),t=!1},d(l){l&&c(e),s&&s.d(l)}}}function je(a,e,t){let{$$slots:n={},$$scope:s}=e,{for:l=""}=e;return a.$$set=r=>{"for"in r&&t(0,l=r.for),"$$scope"in r&&t(1,s=r.$$scope)},[l,s,n]}class Be extends Z{constructor(e){super();G(this,e,je,We,Q,{for:0})}}function Fe(a){let e;return{c(){e=L(a[1])},l(t){e=T(t,a[1])},m(t,n){C(t,e,n)},p(t,n){n&2&&he(e,t[1])},d(t){t&&c(e)}}}function Ne(a){let e,t,n,s,l,r,o,i;return t=new Be({props:{for:a[2],$$slots:{default:[Fe]},$$scope:{ctx:a}}}),{c(){e=b("div"),E(t.$$.fragment),n=B(),s=b("textarea"),this.h()},l($){e=v($,"DIV",{});var u=k(e);y(t.$$.fragment,u),n=F(u),s=v(u,"TEXTAREA",{id:!0,class:!0}),k(s).forEach(c),u.forEach(c),this.h()},h(){_(s,"id",a[2]),_(s,"class","h-48 rounded-lg bg-zinc-100 text-zinc-900 border-none dark:bg-zinc-800 dark:text-zinc-50 shadow-inner shadow-zinc-400/30 dark:shadow-slate-900/50 "),s.value=l=a[0].join(`
`)},m($,u){C($,e,u),I(t,e,null),f(e,n),f(e,s),r=!0,o||(i=_e(s,"input",a[3]),o=!0)},p($,[u]){const R={};u&34&&(R.$$scope={dirty:u,ctx:$}),t.$set(R),(!r||u&1&&l!==(l=$[0].join(`
`)))&&(s.value=l)},i($){r||(h(t.$$.fragment,$),r=!0)},o($){g(t.$$.fragment,$),r=!1},d($){$&&c(e),z(t),o=!1,i()}}}function Oe(a,e,t){let{value:n=[]}=e,{label:s=""}=e;const l=ze(),r=De();function o(i){r("input",i.currentTarget.value.split(/\r?\n/))}return a.$$set=i=>{"value"in i&&t(0,n=i.value),"label"in i&&t(1,s=i.label)},[n,s,l,o]}class Ke extends Z{constructor(e){super();G(this,e,Oe,Ne,Q,{value:0,label:1})}}function qe(a){let e,t;const n=a[1].default,s=ie(n,a,a[0],null);return{c(){e=b("div"),s&&s.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var r=k(e);s&&s.l(r),r.forEach(c),this.h()},h(){_(e,"class","flex flex-col gap-4")},m(l,r){C(l,e,r),s&&s.m(e,null),t=!0},p(l,[r]){s&&s.p&&(!t||r&1)&&ue(s,n,l,l[0],t?ce(n,l[0],r,null):fe(l[0]),null)},i(l){t||(h(s,l),t=!0)},o(l){g(s,l),t=!1},d(l){l&&c(e),s&&s.d(l)}}}function He(a,e,t){let{$$slots:n={},$$scope:s}=e;return a.$$set=l=>{"$$scope"in l&&t(0,s=l.$$scope)},[s,n]}class Me extends Z{constructor(e){super();G(this,e,He,qe,Q,{})}}function Pe(a){let e,t,n,s;const l=a[2].default,r=ie(l,a,a[1],null);return{c(){e=b("button"),r&&r.c(),this.h()},l(o){e=v(o,"BUTTON",{type:!0,class:!0});var i=k(e);r&&r.l(i),i.forEach(c),this.h()},h(){_(e,"type",a[0]),_(e,"class","flex gap-2 py-3 px-4 rounded-lg bg-slate-800 text-slate-50 shadow shadow-slate-800/30 hover:bg-slate-900 hover:shadow-slate-900/30 dark:bg-slate-50 dark:text-slate-800 dark:shadow-slate-50/30 dark:hover:bg-slate-200 dark:hover:shadow-slate-200/30 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-800 focus-visible:ring-opacity-50 transition ease-out")},m(o,i){C(o,e,i),r&&r.m(e,null),t=!0,n||(s=_e(e,"click",a[3]),n=!0)},p(o,[i]){r&&r.p&&(!t||i&2)&&ue(r,l,o,o[1],t?ce(l,o[1],i,null):fe(o[1]),null),(!t||i&1)&&_(e,"type",o[0])},i(o){t||(h(r,o),t=!0)},o(o){g(r,o),t=!1},d(o){o&&c(e),r&&r.d(o),n=!1,s()}}}function Ue(a,e,t){let{$$slots:n={},$$scope:s}=e,{type:l="button"}=e;function r(o){Se.call(this,a,o)}return a.$$set=o=>{"type"in o&&t(0,l=o.type),"$$scope"in o&&t(1,s=o.$$scope)},[l,s,n,r]}class x extends Z{constructor(e){super();G(this,e,Ue,Pe,Q,{type:0})}}function Xe(a){let e,t;return e=new Te({props:{size:"24"}}),{c(){E(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){I(e,n,s),t=!0},p:ee,i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}function Ye(a){let e,t;return e=new Ve({props:{size:"24"}}),{c(){E(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){I(e,n,s),t=!0},p:ee,i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}function Je(a){let e,t;return e=new Ce({props:{size:"24"}}),{c(){E(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){I(e,n,s),t=!0},p:ee,i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){g(e.$$.fragment,n),t=!1},d(n){z(e,n)}}}function Ze(a){let e,t,n;return e=new Re({props:{size:"24"}}),{c(){E(e.$$.fragment),t=L(" Sortieren")},l(s){y(e.$$.fragment,s),t=T(s," Sortieren")},m(s,l){I(e,s,l),C(s,t,l),n=!0},p:ee,i(s){n||(h(e.$$.fragment,s),n=!0)},o(s){g(e.$$.fragment,s),n=!1},d(s){z(e,s),s&&c(t)}}}function Ge(a){let e,t,n,s,l;return e=new Ke({props:{label:"Moderatoren",value:a[0].toArray()}}),e.$on("input",a[3]),s=new x({props:{$$slots:{default:[Ze]},$$scope:{ctx:a}}}),s.$on("click",a[4]),{c(){E(e.$$.fragment),t=B(),n=b("div"),E(s.$$.fragment)},l(r){y(e.$$.fragment,r),t=F(r),n=v(r,"DIV",{});var o=k(n);y(s.$$.fragment,o),o.forEach(c)},m(r,o){I(e,r,o),C(r,t,o),C(r,n,o),I(s,n,null),l=!0},p(r,o){const i={};o&1&&(i.value=r[0].toArray()),e.$set(i);const $={};o&8192&&($.$$scope={dirty:o,ctx:r}),s.$set($)},i(r){l||(h(e.$$.fragment,r),h(s.$$.fragment,r),l=!0)},o(r){g(e.$$.fragment,r),g(s.$$.fragment,r),l=!1},d(r){z(e,r),r&&c(t),r&&c(n),z(s)}}}function Qe(a){let e,t,n,s,l,r,o,i,$,u,R,w,P,D,S,m,A=a[2].format("dddd")+"",U,te,$e=a[2].format("LL")+"",se,ne,O,ae,pe=a[2].isoWeek()+"",re,le,W,X;return i=new x({props:{$$slots:{default:[Xe]},$$scope:{ctx:a}}}),i.$on("click",a[6]),u=new x({props:{$$slots:{default:[Ye]},$$scope:{ctx:a}}}),u.$on("click",a[7]),w=new x({props:{$$slots:{default:[Je]},$$scope:{ctx:a}}}),w.$on("click",a[5]),W=new Me({props:{$$slots:{default:[Ge]},$$scope:{ctx:a}}}),{c(){e=b("div"),t=b("section"),n=L(`Diese Woche moderiert
		`),s=b("h1"),l=L(a[1]),r=B(),o=b("div"),E(i.$$.fragment),$=B(),E(u.$$.fragment),R=B(),E(w.$$.fragment),P=B(),D=b("section"),S=b("p"),m=L("Es ist "),U=L(A),te=L(", der "),se=L($e),ne=B(),O=b("p"),ae=L("Kalenderwoche "),re=L(pe),le=B(),E(W.$$.fragment),this.h()},l(p){e=v(p,"DIV",{class:!0});var d=k(e);t=v(d,"SECTION",{class:!0});var j=k(t);n=T(j,`Diese Woche moderiert
		`),s=v(j,"H1",{class:!0});var Y=k(s);l=T(Y,a[1]),Y.forEach(c),r=F(j),o=v(j,"DIV",{class:!0});var V=k(o);y(i.$$.fragment,V),$=F(V),y(u.$$.fragment,V),R=F(V),y(w.$$.fragment,V),V.forEach(c),j.forEach(c),P=F(d),D=v(d,"SECTION",{class:!0});var N=k(D);S=v(N,"P",{});var J=k(S);m=T(J,"Es ist "),U=T(J,A),te=T(J,", der "),se=T(J,$e),J.forEach(c),ne=F(N),O=v(N,"P",{});var oe=k(O);ae=T(oe,"Kalenderwoche "),re=T(oe,pe),oe.forEach(c),N.forEach(c),le=F(d),y(W.$$.fragment,d),d.forEach(c),this.h()},h(){_(s,"class","text-4xl"),_(o,"class","flex mt-2 gap-2"),_(t,"class","mb-4"),_(D,"class","mb-4"),_(e,"class","py-8")},m(p,d){C(p,e,d),f(e,t),f(t,n),f(t,s),f(s,l),f(t,r),f(t,o),I(i,o,null),f(o,$),I(u,o,null),f(o,R),I(w,o,null),f(e,P),f(e,D),f(D,S),f(S,m),f(S,U),f(S,te),f(S,se),f(D,ne),f(D,O),f(O,ae),f(O,re),f(e,le),I(W,e,null),X=!0},p(p,[d]){(!X||d&2)&&he(l,p[1]);const j={};d&8192&&(j.$$scope={dirty:d,ctx:p}),i.$set(j);const Y={};d&8192&&(Y.$$scope={dirty:d,ctx:p}),u.$set(Y);const V={};d&8192&&(V.$$scope={dirty:d,ctx:p}),w.$set(V);const N={};d&8193&&(N.$$scope={dirty:d,ctx:p}),W.$set(N)},i(p){X||(h(i.$$.fragment,p),h(u.$$.fragment,p),h(w.$$.fragment,p),h(W.$$.fragment,p),X=!0)},o(p){g(i.$$.fragment,p),g(u.$$.fragment,p),g(w.$$.fragment,p),g(W.$$.fragment,p),X=!1},d(p){p&&c(e),z(i),z(u),z(w),z(W)}}}function xe(a,e,t){let n,s,l,r,o,i;Ae(a,H,m=>t(11,i=m));const $=M("2022-01-01"),u=M();function R(m){H.update(A=>q(K({},A),{employees:m.detail}))}function w(m){H.update(A=>q(K({},A),{employees:l.toArray()}))}function P(){H.update(m=>q(K({},m),{skips:(m.skips+1)%l.count()}))}function D(){H.update(m=>q(K({},m),{skips:(m.skips-1)%l.count()}))}function S(){H.update(m=>q(K({},m),{skips:0}))}return a.$$.update=()=>{var m;a.$$.dirty&2048&&t(0,n=Le.List(i.employees)),a.$$.dirty&2048&&t(10,s=i.skips),a.$$.dirty&1&&t(8,l=n.sort((A,U)=>A.localeCompare(U)*-1)),a.$$.dirty&1280&&t(9,r=A=>l.get((A.diff($,"weeks")+s)%l.size)),a.$$.dirty&512&&t(1,o=(m=r(u))!=null?m:"Niemand?")},[n,o,u,R,w,P,D,S,l,r,s,i]}class nt extends Z{constructor(e){super();G(this,e,xe,Qe,Q,{})}}export{nt as default};
