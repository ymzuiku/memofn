var e={},m="_|_$memoFn*_!_";function r(n,o,s){return(...c)=>{let t=n+m+JSON.stringify(c);return e[t]||(e[t]=s(...c),setTimeout(()=>{delete e[t]},o)),e[t]}}function i(n){Object.keys(e).forEach(o=>{o.split(m)[0]===n&&delete e[o]})}function u(){Object.keys(e).forEach(n=>{delete e[n]})}r.remove=i;r.removeAll=u;export{r as default};
