(this.webpackJsonpprueba=this.webpackJsonpprueba||[]).push([[0],{169:function(e,c,n){"use strict";n.r(c);var t=n(0),s=n.n(t),a=n(24),r=n.n(a),i=(n(97),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,175)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,a=c.getLCP,r=c.getTTFB;n(e),t(e),s(e),a(e),r(e)}))}),o=n(67),l=n(40),j=n.n(l),u=n(65),d=n(36),b=n(8),h=function(e){var c=e.advice;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{children:c.advice})})},f=n(172),O=n(173),m=n(90),v=(n(99),function(){var e=Object(t.useState)([]),c=Object(d.a)(e,2),n=c[0],s=c[1],a=Object(t.useState)(!1),r=Object(d.a)(a,2),i=r[0],l=r[1],v=Object(t.useState)(""),x=Object(d.a)(v,2),p=x[0],N=x[1],g=Object(t.useState)([]),C=Object(d.a)(g,2),w=C[0],y=C[1],k=Object(t.useState)([]),F=Object(d.a)(k,2),I=F[0],S=F[1];Object(t.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.adviceslip.com/advice");case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n.slip);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(t.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===p){e.next=8;break}return e.next=3,fetch("https://api.adviceslip.com/advice/search/".concat(p,"\n        "));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,y(n.slips);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[p]);var B=function(e){if(0===I.length)S((function(c){return[].concat(Object(o.a)(c),[e])}));else{var c=I.filter((function(c){return c===e}));0===c.length&&S((function(c){return[].concat(Object(o.a)(c),[e])}))}};return Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h1",{children:"Concejos del d\xeda"}),Object(b.jsxs)("div",{className:"container-advice",children:[Object(b.jsx)("div",{className:"",children:Object(b.jsx)("div",{id:"results",children:n?Object(b.jsx)(h,{advice:n},n.id):"no existe datos"})}),Object(b.jsxs)("div",{className:"container-btn",children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return B(n.advice)},children:"Marcar como favorita"}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){l(!i)},children:"siguiente concejo"})]})]})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h1",{children:"Consejos Favoritos"}),I?I.map((function(e,c){return Object(b.jsxs)("div",{className:"container-favorite",children:[Object(b.jsx)("div",{id:"results",children:Object(b.jsx)("p",{children:e},c)}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(e){var c=I.filter((function(c){return c!==e}));S(c)}(e)},children:"eliminar concejo"})]},c)})):"no existe datos"]})]}),Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("h1",{children:"Buscador de consejos"}),Object(b.jsxs)("div",{className:"container-search",children:[Object(b.jsxs)(f.a,{className:"container-form",name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(e){console.log("values",e.search),N(e.search),console.log(w,"searchInfo")},onFinishFailed:function(e){console.log("errorInfo:",e)},autoComplete:"off",children:[Object(b.jsx)(f.a.Item,{label:"Buscar Concejo:",name:"search",rules:[{required:!0,message:"Ingrese el t\xedtulo de la busqueda"}],children:Object(b.jsx)(O.a,{})}),Object(b.jsx)(f.a.Item,{children:Object(b.jsx)(m.a,{className:"btn-advice",type:"primary",htmlType:"submit",children:"Buscar"})})]}),w?w.map((function(e,c){return Object(b.jsxs)("div",{className:"container-search",children:[Object(b.jsx)("p",{id:"results",children:e.advice},c)," ",Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return B(e.advice)},children:"marcar como favorita"})]},c)})):"no existe coincidencia en la busqueda"]})]})})]})})})});r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),i()},97:function(e,c,n){},99:function(e,c,n){}},[[169,1,2]]]);
//# sourceMappingURL=main.6c2e3e5a.chunk.js.map