(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[0],{18:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(12),s=c.n(a),i=(c(18),c(5)),o=c(2),l=c(9),u=c.n(l),b=c(11),j=c(6),d=c(4),h=c(13),p=c(1);d.d.register(d.c,d.g,d.i);var f=function(){var e=Object(r.useState)("AAPL"),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),s=Object(j.a)(a,2),i=s[0],o=s[1],l=Object(r.useState)(null),d=Object(j.a)(l,2),h=d[0],f=d[1],v=function(){var e=Object(b.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://price-tracker-4wvhqyk1m-asbhadauriya.vercel.app/stock/".concat(c));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,f(r.price),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching stock price:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://price-tracker-4wvhqyk1m-asbhadauriya.vercel.app/stocks/all");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,o(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching stocks:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[]),Object(r.useEffect)((function(){v();var e=setInterval(v,1e3);return function(){return clearInterval(e)}}),[c]),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"head",children:[Object(p.jsx)("h1",{children:"Mini Stock Price Tracker"}),Object(p.jsx)("p",{children:"Select the stock from the list to see the lastest Price"})]}),Object(p.jsxs)("div",{className:"select",children:[Object(p.jsx)("p",{className:"para-head",children:"Pick Stock :-    "}),Object(p.jsx)("select",{value:c,onChange:function(e){return n(e.target.value)},children:null===i||void 0===i?void 0:i.map((function(e){return Object(p.jsx)("option",{value:e.symbol,children:e.symbol})}))})]}),Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"head",children:[Object(p.jsxs)("b",{children:[" ",c]}),null!==h?Object(p.jsxs)("p",{children:["Current Market Price:",Object(p.jsxs)("b",{children:[" $",h]})]}):Object(p.jsx)("p",{children:"Loading..."}),Object(p.jsx)("div",{className:"chart",children:Object(p.jsx)(O,{price:h,selectedStock:c})})]})]})},O=function(e){var t=e.price,c=e.selectedStock,n=Object(r.useState)({labels:[],datasets:[{label:"Stock Price",data:[],fill:!1,borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]}),a=Object(j.a)(n,2),s=a[0],l=a[1];return Object(r.useEffect)((function(){l({labels:[],datasets:[{label:c,data:[],fill:!1,borderColor:"rgba(75, 192, 192, 1)",borderWidth:1}]})}),[c]),Object(r.useEffect)((function(){var e={x:(new Date).toLocaleTimeString(),y:t};l((function(t){return{labels:[].concat(Object(o.a)(t.labels),[e.x]),datasets:[Object(i.a)(Object(i.a)({},t.datasets[0]),{},{data:[].concat(Object(o.a)(t.datasets[0].data),[e.y])})]}}))}),[t]),Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{data:s,options:{responsive:!0}})})};var v=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f,{})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.55d95bfb.chunk.js.map