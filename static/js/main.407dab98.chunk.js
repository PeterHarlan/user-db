(this["webpackJsonpuser-db"]=this["webpackJsonpuser-db"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var n,r,s=c(0),a=c.n(s),i=c(36),j=c.n(i),l=(c(46),c(8)),o=(c(47),c(37)),d=c.n(o),b=c(75),u=c(76),O=c(41),h=c(11),x=c(74),f=c(9),m=c(10),p=c(12),g=c(1),v=p.a.div(n||(n=Object(h.a)(["\n  font-size: medium;\n"]))),N=p.a.div(r||(r=Object(h.a)(["\n  font-weight: bold;\n"])));function y(e){var t=e.user,c=t&&t.picture&&t.picture.large||"",n=Object(s.useState)("mail"),r=Object(l.a)(n,2),a=r[0],i=r[1];return Object(g.jsx)("div",{className:"h-100 d-flex py-5",children:Object(g.jsxs)("div",{className:"my-auto mx-auto w-100",children:[Object(g.jsx)(x.a,{className:"my-auto w-100 px-4",src:c,alt:"Stack Overflow logo and icons and such"}),Object(g.jsxs)(b.a,{className:"my-4 text-center",fluid:!0,children:[Object(g.jsx)(u.a,{className:"mail"===a?"":"d-none",children:Object(g.jsxs)(O.a,{className:"mb-4",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(v,{children:"My Email is"})})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(N,{children:t.email})})})]})}),Object(g.jsx)(u.a,{className:"bday"===a?"":"d-none",children:Object(g.jsxs)(O.a,{className:"mb-4",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(v,{children:"My B-day is"})})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(N,{children:t.dob.date})})})]})}),Object(g.jsx)(u.a,{className:"phone"===a?"":"d-none",children:Object(g.jsxs)(O.a,{className:"mb-4",children:[Object(g.jsx)(u.a,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(v,{children:"My number is"})})}),Object(g.jsx)(u.a,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(N,{children:t.cell})})})]})}),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(O.a,{children:Object(g.jsx)(f.a,{icon:m.b,size:"lg",onMouseEnter:function(){return i("mail")}})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(f.a,{icon:m.a,size:"lg",onMouseEnter:function(){return i("bday")}})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(f.a,{icon:m.d,size:"lg",onMouseEnter:function(){return i("phone")}})})]})]})]})})}var S,L,w=c(17),C=c(24),E=c(25),F=c(79),M=c(77),P=c(78);function T(e){var t=e.fnPeopleFilter,c=e.filterTag,n=e.placeHolder;return Object(g.jsx)(P.a,{onSubmit:function(e){return e.preventDefault()},children:Object(g.jsx)(P.a.Control,{onChange:function(e){return t(e,c)},placeholder:n})})}var z=p.a.div(S||(S=Object(h.a)(["\n  max-height: calc(100% - 50px);\n  height: 100%;\n  overflow-y: scroll;\n"]))),H=p.a.div(L||(L=Object(h.a)(["\n  height: 50px;\n"])));function k(e){var t=e.originalPeopleList,c=e.fnSetUser,n=Object(s.useState)(0),r=Object(l.a)(n,2),a=r[0],i=r[1],j=Object(s.useState)([]),o=Object(l.a)(j,2),d=o[0],b=o[1],u=Object(s.useState)({firstName:"",lastName:""}),O=Object(l.a)(u,2),h=O[0],x=O[1];Object(s.useEffect)((function(){b(Object(E.a)(t))}),[t]),Object(s.useEffect)((function(){var e={firstName:function(e,t){var c=e.name||{},n=c.title,r=c.first;return!!N(n,r).toLowerCase().includes(t.toLowerCase())&&e},lastName:function(e,t){return!!(e.name||{}).last.toLowerCase().includes(t.toLowerCase())&&e},street:function(e,t){var c=e.location.street||{},n=c.number,r=c.name;return!!y(n,r).toLocaleLowerCase().includes(t.toLowerCase())&&e}},c=t;Object.entries(h).forEach((function(t){var n=Object(l.a)(t,2),r=n[0],s=n[1],a=e[r];c=c.filter((function(e){return a(e,s)}))})),c.length<50&&f(0),b(Object(E.a)(c))}),[h,t]);for(var f=function(e){i(e)},m=[],p=function(e){m.push(Object(g.jsx)(F.a.Item,{active:e===a,onClick:function(){return f(e)},children:e+1},e))},v=0;v<d.length/50;v++)p(v);var N=function(e,t){return e?"".concat(e,". ").concat(t):t},y=function(e,t){return"".concat(e," ").concat(t)},S=function(e){var t=e.peopleList;return t.length<=0?Object(g.jsx)("tr",{children:Object(g.jsx)("td",{colSpan:"8",children:"No user found"})}):t.slice(50*a,50*(a+1)).map((function(e,t){var n,r=e.login.uuid,s=e.name||{},i=s.title,j=s.first,l=s.last,o=e.location||{},d=o.city,b=o.state,u=o.country,O=o.postcode,h=e.location.street||{},x=h.number,f=h.name;return Object(g.jsxs)("tr",{onMouseEnter:function(){c(r)},children:[Object(g.jsx)("td",{children:(n=t,n+50*a+1)}),Object(g.jsx)("td",{children:N(i,j)}),Object(g.jsx)("td",{children:l}),Object(g.jsx)("td",{children:y(x,f)}),Object(g.jsx)("td",{children:d}),Object(g.jsx)("td",{children:b}),Object(g.jsx)("td",{children:u}),Object(g.jsx)("td",{children:O})]},r)}))},L=function(e,t){e.preventDefault();var c=e.target.value;x((function(e){return Object(C.a)(Object(C.a)({},e),{},Object(w.a)({},t,c))}))};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(z,{children:[Object(g.jsx)("h1",{className:"display-1",children:"Users"}),Object(g.jsxs)(M.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"#"}),Object(g.jsx)("th",{children:Object(g.jsx)(T,{fnPeopleFilter:L,filterTag:"firstName",placeHolder:"First Name"})}),Object(g.jsx)("th",{children:Object(g.jsx)(T,{fnPeopleFilter:L,filterTag:"lastName",placeHolder:"Last Name"})}),Object(g.jsx)("th",{children:Object(g.jsx)(T,{fnPeopleFilter:L,filterTag:"street",placeHolder:"Street Name"})}),Object(g.jsx)("th",{children:"City"}),Object(g.jsx)("th",{children:"State"}),Object(g.jsx)("th",{children:"Country"}),Object(g.jsx)("th",{children:"Zip"})]})}),Object(g.jsx)("tbody",{children:Object(g.jsx)(S,{peopleList:d})})]})]}),Object(g.jsx)(H,{className:"d-flex",children:Object(g.jsx)(F.a,{className:"mx-auto my-auto",size:"sm",children:m})})]})}function B(e){var t=e.children;return Object(g.jsx)("div",{className:"h-100 w-100 d-flex",children:Object(g.jsx)("h1",{className:"display-1 text-center my-auto mx-auto",children:t})})}function D(e){var t=e.error;return Object(g.jsx)(B,{children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f.a,{className:"mr-5",icon:m.c}),"".concat(t)]})})}function I(){return Object(g.jsx)(B,{children:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(f.a,{className:"mr-5",icon:m.e,spin:!0}),"Hold on, fetching some data :)"]})})}function U(e){var t=e.children,c=e.isLoading,n=e.error;return n?Object(g.jsx)(D,{error:n}):c?Object(g.jsx)(I,{}):Object(g.jsx)(g.Fragment,{children:t})}function J(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),a=Object(l.a)(r,2),i=a[0],j=a[1],o=Object(s.useState)([]),h=Object(l.a)(o,2),x=h[0],f=h[1],m=Object(s.useState)(),p=Object(l.a)(m,2),v=p[0],N=p[1],S=Object(s.useState)({}),L=Object(l.a)(S,2),w=L[0],C=L[1];Object(s.useEffect)((function(){n(!0),j(""),d.a.get("https://randomuser.me/api/?results=500&seed=foobar").then((function(e){var t=(e.data||{}).results,c=void 0===t?[]:t;if(c.length<=0)throw Error("Error fetching user list");var r=c[0].login.uuid;N(r),f(c),n(!1)})).catch((function(e){j(e)}))}),[]),Object(s.useEffect)((function(){var e=x.find((function(e){return e.login.uuid===v}));C(e)}),[v,x]);return Object(g.jsx)(b.a,{className:"vh-100",fluid:!0,children:Object(g.jsx)(U,{isLoading:c,error:i,children:Object(g.jsxs)(u.a,{className:"h-100",children:[Object(g.jsx)(O.a,{xs:12,md:4,lg:3,children:Object(g.jsx)(y,{user:w})}),Object(g.jsx)(O.a,{className:"h-100",xs:12,md:8,lg:9,children:Object(g.jsx)(k,{originalPeopleList:x,fnSetUser:function(e){N(e)}})})]})})})}var Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};c(72);j.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(J,{})}),document.getElementById("root")),Z()}},[[73,1,2]]]);
//# sourceMappingURL=main.407dab98.chunk.js.map