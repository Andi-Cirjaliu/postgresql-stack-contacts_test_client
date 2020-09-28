(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,a){e.exports=a(48)},28:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=a.n(r),l=(a(28),a(3)),s=a.n(l),u=a(5),i=a(9),p=a(6),m=a.n(p),d=a(10),b=a(1),E=function(e,t){var a,n;switch(console.log("state: ",e,", action: ",t),t.type){case"GET_CONTACTS":return Object(b.a)(Object(b.a)({},e),{},{contacts:t.payload,loading:!1});case"ADD_CONTACT":return a=[].concat(Object(d.a)(e.contacts),[t.payload]),Object(b.a)(Object(b.a)({},e),{},{contacts:a,loading:!1});case"UPDATE_CONTACT":return n=t.payload.id,a=Object(d.a)(e.contacts).map((function(e){return e.id===n?t.payload:e})),Object(b.a)(Object(b.a)({},e),{},{contacts:a,loading:!1});case"DELETE_CONTACT":return n=t.payload,a=Object(d.a)(e.contacts).filter((function(e){return e.id!==n})),Object(b.a)(Object(b.a)({},e),{},{contacts:a,loading:!1});case"SET_ERROR":return Object(b.a)(Object(b.a)({},e),{},{loading:!1,error:t.payload});case"CLEAR_ERROR":return Object(b.a)(Object(b.a)({},e),{},{error:null});case"SET_LOADING":return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case"SET_CURRENT":return Object(b.a)(Object(b.a)({},e),{},{current:t.payload});case"CLEAR_CURRENT":return Object(b.a)(Object(b.a)({},e),{},{current:null});default:return e}},f=Object(n.createContext)(),O="http://localhost:4000/contacts",C=function(e){var t=Object(n.useReducer)(E,{contacts:[],current:null,loading:!1,error:null}),a=Object(i.a)(t,2),r=a[0],o=a[1],l=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Get contacts.."),j(),e.prev=2,e.next=5,m.a.get("".concat(O));case 5:t=e.sent,a=t.data,console.log(a),o({type:"GET_CONTACTS",payload:a}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.response),C(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Add contact ",t),j(),e.prev=2,e.next=5,m.a.post("".concat(O),t,{headers:{"Content-Type":"application/json"}});case 5:a=e.sent,n=a.data,console.log(n),o({type:"ADD_CONTACT",payload:n}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.response),C(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Update contact ",t),j(),e.prev=2,e.next=5,m.a.put("".concat(O,"/").concat(t.id),t,{headers:{"Content-Type":"application/json"}});case 5:a=e.sent,n=a.data,console.log(n),o({type:"UPDATE_CONTACT",payload:n}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.response),C(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete contact ",t),j(),e.prev=2,e.next=5,m.a.delete("".concat(O,"/").concat(t));case 5:a=e.sent,n=a.data,console.log(n),o({type:"DELETE_CONTACT",payload:t}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0.response),C(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),C=function(e){o({type:"SET_ERROR",payload:e}),setTimeout((function(){return v()}),5e3)},v=function(){o({type:"CLEAR_ERROR"})},j=function(){o({type:"SET_LOADING"})};return c.a.createElement(f.Provider,{value:{contacts:r.contacts,current:r.current,loading:r.loading,error:r.error,getContacts:l,addContact:p,updateContact:d,deleteContact:b,setCurrent:function(e){o({type:"SET_CURRENT",payload:e})},clearCurrent:function(){o({type:"CLEAR_CURRENT"})}}},e.children)},v=function(e){var t=e.contact,a=t.id,r=t.name,o=t.email,l=Object(n.useContext)(f),s=l.setCurrent,u=l.deleteContact;return c.a.createElement("div",{className:"card bg-light"},c.a.createElement("h3",{className:"text-primary text-left"},r),c.a.createElement("ul",{className:"list"},c.a.createElement("li",null,o)),c.a.createElement("p",null,c.a.createElement("button",{className:"btn btn-dark btn-sm",onClick:function(e){s(t)}},"Edit"),c.a.createElement("button",{className:"btn btn-danger btn-sm",onClick:function(e){u(a)}},"Delete")))},j=function(){var e=Object(n.useContext)(f),t=e.contacts,a=e.getContacts;return Object(n.useEffect)((function(){a()}),[]),c.a.createElement("div",null,t.map((function(e){return c.a.createElement(v,{key:e.id,contact:e})})))},g=a(8),y=function(){var e=Object(n.useState)({name:"",email:""}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useContext)(f),l=o.addContact,s=o.updateContact,u=o.current,p=o.clearCurrent;Object(n.useEffect)((function(){r(u||{name:"",email:""})}),[u]);var m=function(e){r(Object(b.a)(Object(b.a)({},a),{},Object(g.a)({},e.target.name,e.target.value)))};return c.a.createElement("div",{className:"form-container"},c.a.createElement("h1",null,u?"Edit contact":"Add contact"),c.a.createElement("form",{onSubmit:function(e){console.log("Submit"),e.preventDefault(),u?(s(a),p()):(l(a),r({name:"",email:""}))},onReset:function(e){console.log("Clear"),p()}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",name:"name",value:a.name,onChange:m,required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email address"),c.a.createElement("input",{type:"email",name:"email",value:a.email,onChange:m,required:!0})),c.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Submit"}),c.a.createElement("input",{type:"reset",className:"btn btn-secondary btn-block",value:"Clear"})))},T=function(){var e=Object(n.useContext)(f).error;return e&&c.a.createElement("div",{className:"alert alert-danger"},c.a.createElement("i",{className:"fas fa-info-cicle"})," ",e)};var h=function(){return c.a.createElement(C,null,c.a.createElement(T,null),c.a.createElement(y,null),c.a.createElement("div",{className:"App"},c.a.createElement(j,null)))},N=a(22);a.n(N).a.config(),console.log("Server: ","http://localhost:4000/contacts"),o.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.20759d30.chunk.js.map