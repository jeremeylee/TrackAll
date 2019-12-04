(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=a(34),i=(a(97),a(12)),u=a(30),s=a(8),m=a.n(s),p=a(14),f=a(25),d=a.n(f),y="/api/categories",g={getCategories:function(){return d.a.get("".concat(y)).then((function(e){return e.data}))},addCategory:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("".concat(y),t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateCategory:function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("".concat(y,"/").concat(a),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteCategory:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat(y,"/").concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b={getLists:function(){return d.a.get("".concat("/api/lists")).then((function(e){return e.data}))},addItem:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("".concat("/api/lists"),t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateItem:function(){var e=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("".concat("/api/lists","/").concat(a),t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),deleteItem:function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("".concat("/api/lists","/").concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=a(23),v=a(42),h=a(170),O=a(148),C=a(151),j=a(152),w=function(e){return r.a.createElement(O.a,null,void 0===e.lists?"":e.lists.map((function(e){return r.a.createElement(C.a,{key:e.id,divider:!0},r.a.createElement(j.a,{primary:e.content}))})))},k=a(153),x=a(154),S=a(155),D=a(156),I=a(173),N=a(158),L=a(171),W=a(160),A=a(161),P=a(162),B=a(163),V=a(75),F=a.n(V),T=Object(k.a)({title:{display:"flex",justifyContent:"space-between"},card:{display:"flex",flexDirection:"column",minHeight:"31vh",maxHeight:"31vh",margin:"1em 1em 1em 1em"},cardContent:{flexGrow:"1",overflow:"hidden"},cardActions:{paddingLeft:"16px"}}),H=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),f=s[0],d=s[1],y=Object(n.useState)(!1),E=Object(i.a)(y,2),h=E[0],k=E[1],V=Object(n.useState)(e.category.title),H=Object(i.a)(V,2),J=H[0],z=H[1],G=T(),M=function(){o(!1),d(!0)},$=function(){d(!1)},q=function(){var t=Object(p.a)(m.a.mark((function t(a){var n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={title:J},t.next=4,g.updateCategory(n,e.category.id);case 4:r=t.sent,c=e.categories.map((function(t){return t.id===e.category.id?r.data:t})),e.setCategories(c),z(""),d(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(t){if(t){var a=e.categories.filter((function(t){return t.id!==e.category.id}));e.setCategories(a),g.deleteCategory(e.category.id),Promise.all(e.category.lists.map(function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.deleteItem(t.id);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}};return r.a.createElement(x.a,{className:G.card},r.a.createElement(S.a,{className:G.cardContent},r.a.createElement("div",{className:G.title},r.a.createElement(v.a,{variant:"h5"},e.category.title),r.a.createElement(D.a,{onClick:function(){o(!0)}},r.a.createElement(F.a,null))),r.a.createElement(I.a,{onClose:function(){o(!1)},open:c,fullWidth:!0},r.a.createElement(O.a,null,["Edit Title","Delete"].map((function(e){return r.a.createElement(C.a,{button:!0,onClick:function(){return function(e){switch(e){case"Edit Title":M();break;case"Delete":k(!0);break;default:o(!1)}}(e)},key:e},r.a.createElement(j.a,null,e))})))),r.a.createElement(I.a,{onClose:$,open:f,fullWidth:!0},r.a.createElement("form",{autoComplete:"off",onSubmit:q},r.a.createElement(N.a,null,r.a.createElement(L.a,{autoFocus:!0,margin:"dense",id:"edit",value:J,onChange:function(e){z(e.target.value)},label:"Enter a new title",type:"edit",fullWidth:!0}),r.a.createElement(W.a,null,r.a.createElement(D.a,{onClick:$,color:"primary"},"Cancel"),r.a.createElement(D.a,{color:"primary",type:"submit"},"Save"))))),r.a.createElement(I.a,{onClose:function(){return k(!1)},open:h,fullWidth:!0},r.a.createElement(A.a,null,"Are you sure you want to delete this category?"),r.a.createElement(N.a,null,r.a.createElement(P.a,null,"Deleting this category will also delete all items as well. Once deleted, you cannot reverse these changes."),r.a.createElement(W.a,null,r.a.createElement(D.a,{onClick:function(){return k(!1)},color:"primary"},"Cancel"),r.a.createElement(D.a,{onClick:function(){k(!1),K(!0),o(!1)},color:"primary"},"Delete")))),r.a.createElement(w,{lists:e.category.lists})),r.a.createElement(B.a,{className:G.cardActions},r.a.createElement(D.a,{size:"small"},r.a.createElement(l.b,{to:"/".concat(e.category.title)},"View More"))))},J=a(164),z=a(165),G=a(166),M=a(174),$=a(167),q=a(78),K=a.n(q),Q=Object(k.a)({root:{display:"flex",justifyContent:"space-between"}}),R=function(e){var t=Object(J.a)("(min-width:1024px)"),a=Q();return r.a.createElement(z.a,{position:"sticky"},r.a.createElement(G.a,{className:a.root},e.toolBarContent,r.a.createElement(M.a,{title:e.tooltip},r.a.createElement($.a,{color:"inherit",style:{display:t?"":"none"},onClick:e.handleClick},r.a.createElement(K.a,null)))))},U=function(e){var t=function(){e.setOpen(!1)};return r.a.createElement(I.a,{open:e.open,onClose:t,fullWidth:!0},r.a.createElement(A.a,null,e.title),r.a.createElement("form",{autoComplete:"off",onSubmit:e.handleAdd},r.a.createElement(N.a,null,r.a.createElement(L.a,{autoFocus:!0,margin:"dense",id:"name",value:e.value,onChange:e.handleValueChange,label:e.label,type:e.type,fullWidth:!0}),r.a.createElement(W.a,null,r.a.createElement(D.a,{onClick:t,color:"primary"},"Cancel"),r.a.createElement(D.a,{color:"primary",type:"submit"},"Add")))))},X=a(168),Y=a(169),Z=Object(k.a)({sticky:{width:"100%",position:"fixed",bottom:0}}),_=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(J.a)("(min-width:1024px)"),u=Z();return r.a.createElement(X.a,{showLabels:!0,style:{display:l?"none":""},value:c,onChange:function(e,t){o(t)},className:u.sticky},r.a.createElement(Y.a,{onClick:e.handleClick,label:e.label,icon:e.icon}))},ee=a(49),te=a.n(ee),ae=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),u=Object(i.a)(l,2),s=u[0],f=u[1],d=function(){o(!0)},y=function(){var t=Object(p.a)(m.a.mark((function t(a){var n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={title:s},t.next=4,g.addCategory(n);case 4:r=t.sent,c=[].concat(Object(E.a)(e.categories),[r.data]),e.setCategories(c),f(""),o(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(R,{handleClick:d,tooltip:"New Category",toolBarContent:r.a.createElement(v.a,{variant:"h6"},"Track All")}),r.a.createElement(h.a,{container:!0,spacing:0},e.categories.map((function(t){return r.a.createElement(h.a,{item:!0,xs:12,sm:6,lg:3,key:t.id},r.a.createElement(H,{setCategories:e.setCategories,categories:e.categories,category:t}))}))),r.a.createElement(U,{open:c,setOpen:o,handleAdd:y,value:s,handleValueChange:function(e){f(e.target.value)},title:"New Category",label:"Enter a title",type:"category"}),r.a.createElement(_,{handleClick:d,label:"New Category",icon:r.a.createElement(te.a,null)}))},ne=a(11),re=a(79),ce=a.n(re),oe=a(80),le=a.n(oe);function ie(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ie(a,!0).forEach((function(t){Object(ne.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ie(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var se=Object(k.a)({flex:{display:"flex",justifyContent:"space-between"}}),me=function(e){var t=e.lists.map((function(e){return e.content})),a=Object(n.useState)(""),c=Object(i.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(null),s=Object(i.a)(u,2),f=s[0],d=s[1],y=Object(n.useState)(!1),E=Object(i.a)(y,2),v=E[0],h=E[1],w=Object(n.useState)(t),k=Object(i.a)(w,2),x=k[0],S=k[1],A=se(),P=function(){S(e.lists[f].content),h(!0)},B=function(){h(!1)},V=function(){var t=Object(p.a)(m.a.mark((function t(a){var n,r,c,o,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),h(!1),n={content:x},t.next=5,b.updateItem(n,e.lists[f].id);case 5:r=t.sent,c=e.lists.map((function(e,t){return t===f?r.data:e})),o=ue({},e.category,{lists:c}),l=e.categories.map((function(t){return t.id===e.category.id?o:t})),e.setCategories(l),e.setLists(c),g.updateCategory(o,e.category.id);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(){var t=e.lists.filter((function(e,t){return t!==f})),a=ue({},e.category,{lists:t}),n=e.categories.map((function(t){return t.id===e.category.id?a:t}));e.setCategories(n),e.setLists(t),g.updateCategory(a,e.category.id),b.deleteItem(o)};return r.a.createElement(O.a,null,void 0===e.lists?"":e.lists.map((function(e,t){return r.a.createElement("div",{key:e.id,className:A.flex},r.a.createElement(C.a,{divider:!0},r.a.createElement(j.a,{onClick:function(){return a=e.id,n=t,l(a),void d(n);var a,n},primary:e.content}),r.a.createElement($.a,{onClick:P,style:{display:e.id!==o?"none":""}},r.a.createElement(ce.a,null)),r.a.createElement($.a,{onClick:F,style:{display:e.id!==o?"none":""}},r.a.createElement(le.a,null))))})),r.a.createElement(I.a,{onClose:B,open:v,fullWidth:!0},r.a.createElement("form",{autoComplete:"off",onSubmit:V},r.a.createElement(N.a,null,r.a.createElement(L.a,{autoFocus:!0,margin:"dense",id:"edit",value:x,onChange:function(e){S(e.target.value)},label:"Edit your item",type:"edit",fullWidth:!0}),r.a.createElement(W.a,null,r.a.createElement(D.a,{onClick:B,color:"primary"},"Cancel"),r.a.createElement(D.a,{color:"primary",type:"submit"},"Save"))))))},pe=a(81),fe=a.n(pe),de=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(""),s=Object(i.a)(u,2),f=s[0],d=s[1],y=function(){o(!0)},g=function(){var t=Object(p.a)(m.a.mark((function t(a){var n,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={categoryId:e.category.id,content:f},t.next=4,b.addItem(n);case 4:r=t.sent,c=[].concat(Object(E.a)(e.allLists),[r.data]),e.setLists(c),e.category.lists=e.category.lists.concat(r.data),d(""),o(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(R,{tooltip:"New Item",handleClick:y,toolBarContent:r.a.createElement(h.a,{container:!0},r.a.createElement(l.b,{to:"/"},r.a.createElement(fe.a,null)),r.a.createElement(v.a,{variant:"h6"},e.category.title))}),r.a.createElement(U,{open:c,setOpen:o,handleAdd:g,value:f,handleValueChange:function(e){d(e.target.value)},title:"New Item",label:"Add a new item",type:"listItem"}),r.a.createElement(me,{setLists:e.setLists,lists:e.category.lists,category:e.category,categories:e.categories,setCategories:e.setCategories}),r.a.createElement(_,{handleClick:y,label:"New Item",icon:r.a.createElement(te.a,null)}))},ye=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),s=l[0],m=l[1];return Object(n.useEffect)((function(){g.getCategories().then((function(e){c(e)})),b.getLists().then((function(e){m(e)}))}),[]),r.a.createElement("div",null,r.a.createElement(u.c,null,a.map((function(e){return r.a.createElement(u.a,{key:e.id,path:"/".concat(e.title)},r.a.createElement(de,{setCategories:c,categories:a,category:e,setLists:m,allLists:s}))})),r.a.createElement(u.a,{path:"/"},r.a.createElement(ae,{setCategories:c,categories:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},92:function(e,t,a){e.exports=a(121)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.2c120d52.chunk.js.map