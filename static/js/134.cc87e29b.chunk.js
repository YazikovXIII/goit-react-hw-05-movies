"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{313:function(e,t,r){r.d(t,{SU:function(){return s},Y5:function(){return p},ix:function(){return f},mo:function(){return l},wR:function(){return i}});var n=r(165),a=r(861),c=r(243),o="040fbcd62819e93b33d68dfe6cbb3776",u="https://api.themoviedb.org/3/",s=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t,r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat(u,"movie/popular?api_key=").concat(o),e.next=4,c.Z.get(t);case 4:return r=e.sent,a=r.data.results,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Ooops! We have a problem!",e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(u,"search/movie?api_key=").concat(o,"&query=").concat(t),e.next=4,c.Z.get(r);case 4:return a=e.sent,s=a.data.results,e.abrupt("return",s);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Ooops! We have a problem!",e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(u,"movie/").concat(t,"?api_key=").concat(o),e.next=4,c.Z.get(r);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Ooops! We have a problem!",e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(u,"movie/").concat(t,"/credits?api_key=").concat(o),e.next=4,c.Z.get(r);case 4:return a=e.sent,s=a.data.cast,e.abrupt("return",s);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Ooops! We have a problem!",e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="".concat(u,"movie/").concat(t,"/reviews?api_key=").concat(o),e.next=4,c.Z.get(r);case 4:return a=e.sent,s=a.data.results,e.abrupt("return",s);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Ooops! We have a problem!",e.t0.message),e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},65:function(e,t,r){r.d(t,{Y:function(){return i},c:function(){return s}});var n,a,c=r(168),o=r(867),u=r(87),s=o.zo.ul(n||(n=(0,c.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 10px;\n"]))),i=(0,o.zo)(u.Link)(a||(a=(0,c.Z)(["\n  text-decoration: none;\n"])))},134:function(e,t,r){r.r(t);var n=r(165),a=r(861),c=r(439),o=r(791),u=r(689),s=r(87),i=r(313),p=r(65),f=r(184);t.default=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),r=t[0],l=t[1],v=(0,o.useState)(""),h=(0,c.Z)(v,2),m=h[0],d=h[1],Z=(0,u.TH)(),x=(0,s.useSearchParams)(),w=(0,c.Z)(x,2),b=w[0],k=w[1],g=b.get("search")||"";(0,o.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.wR)(g);case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Oooops!",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();g&&e()}),[g]);return(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Search movies"}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k({search:m})},children:[(0,f.jsx)("input",{type:"text",value:m,onChange:function(e){d(e.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)(u.j3,{}),(0,f.jsx)(p.c,{children:r.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(p.Y,{to:"/movies/".concat(e.id),state:{from:Z},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=134.cc87e29b.chunk.js.map