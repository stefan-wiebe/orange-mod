var c=Object.defineProperty,d=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var p=(s,e,r)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,o=(s,e)=>{for(var r in e||(e={}))f.call(e,r)&&p(s,r,e[r]);if(a)for(var r of a(e))k.call(e,r)&&p(s,r,e[r]);return s},i=(s,e)=>d(s,m(e));import{Q as l,R as n}from"./vendor-dd0f5091.js";const t=l("preferences",{employees:[],dark:window.matchMedia("(prefers-color-scheme: dark)").matches,skips:0});n(t).skips===void 0&&t.update(s=>i(o({},s),{skips:0}));export{t as p};
