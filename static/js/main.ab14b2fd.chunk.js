(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(6),i=n.n(a),o=(n(12),n(13),n(7)),s=n(2);var l=n(0),u=function(){var e=Array(9).fill(null),t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=n.serialize,a=void 0===c?JSON.stringify:c,i=n.deserialize,o=void 0===i?JSON.parse:i,l=r.useState((function(){var n=window.localStorage.getItem(e);return n?o(n):"function"===typeof t?t():t})),u=Object(s.a)(l,2),d=u[0],j=u[1],f=r.useRef(e);return r.useEffect((function(){var t=f.current;t!==e&&window.localStorage.removeItem(t),f.current=e,window.localStorage.setItem(e,a(d))}),[e,d,a]),[d,j]}("squares",e),n=Object(s.a)(t,2),c=n[0],a=n[1],i=function(e){return e.filter(Boolean).length%2===0?"X":"O"}(c),u=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(s.a)(t[n],3),c=r[0],a=r[1],i=r[2];if(e[c]&&e[c]===e[a]&&e[c]===e[i])return e[c]}return null}(c),d=function(e,t,n){return e?"Winner: ".concat(e):t.every(Boolean)?"Its a Draw":"Next player: ".concat(n)}(u,c,i);function j(e){return Object(l.jsx)("button",{className:"square",onClick:function(){return function(e){if(!u&&!c[e]){var t=Object(o.a)(c);t[e]=i,a(t)}}(e)},children:c[e]})}return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"status",children:d}),Object(l.jsxs)("div",{className:"board-row",children:[j(0),j(1),j(2)]}),Object(l.jsxs)("div",{className:"board-row",children:[j(3),j(4),j(5)]}),Object(l.jsxs)("div",{className:"board-row",children:[j(6),j(7),j(8)]}),Object(l.jsx)("button",{className:"restart",onClick:function(){a(e)},children:"restart"})]})},d=function(){return Object(l.jsx)("div",{className:"game",children:Object(l.jsx)("div",{className:"game-board",children:Object(l.jsx)(u,{})})})};var j=function(){return Object(l.jsx)(d,{})};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ab14b2fd.chunk.js.map