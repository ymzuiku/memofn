var i=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var d=(n,e)=>{for(var r in e)i(n,r,{get:e[r],enumerable:!0})},F=(n,e,r,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of f(e))!l.call(n,t)&&t!==r&&i(n,t,{get:()=>e[t],enumerable:!(c=s(e,t))||c.enumerable});return n};var a=n=>F(i({},"__esModule",{value:!0}),n);var _={};d(_,{default:()=>m});module.exports=a(_);var o={},u="_|_$memoFn*_!_";function m(n,e,r){return(...c)=>{let t=n+u+JSON.stringify(c);return o[t]||(o[t]=r(...c),setTimeout(()=>{delete o[t]},e)),o[t]}}function k(n){Object.keys(o).forEach(e=>{e.split(u)[0]===n&&delete o[e]})}function v(){Object.keys(o).forEach(n=>{delete o[n]})}m.remove=k;m.removeAll=v;0&&(module.exports={});
