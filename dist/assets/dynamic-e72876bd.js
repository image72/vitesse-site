import{f as o,_ as s,o as r,g as u,w as i,h as l,i as c}from"./app-9315bbf0.js";import e from"./normal-e053c022.js";const n={name:"AppLayout",data:()=>({layout:e}),watch:{$route:{immediate:!0,async handler(a){try{const t=await s(()=>import(`@/layouts/${a.meta.layout}.vue`),[]);this.layout=(t==null?void 0:t.default)||e}catch{this.layout=e}}}}};function _(a,t,d,p,m,y){return r(),u(l(a.layout),null,{default:i(()=>[c(a.$slots,"default")]),_:3})}const $=o(n,[["render",_],["__file","/Users/image72/projects/vitesse-site/src/layouts/dynamic.vue"]]);export{$ as default};
