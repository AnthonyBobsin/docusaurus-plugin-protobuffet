(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),l=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),c=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||f[p]||a;return n?l.a.createElement(m,s(s({ref:t},i),{},{components:n})):l.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<a;i++)o[i]=n[i];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},110:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n.n(r),a=n(10),o=n(113),s=n(8);const u=Object(r.createContext)({collectLink:()=>{}});var i=n(112),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]])}return n};t.default=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:p,isActive:m,"data-noBrokenLinkCheck":b,autoAddBaseUrl:y=!0}=e,g=c(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(i.b)(),E=Object(r.useContext)(u),v=d||f,O=Object(o.a)(v),j=null==v?void 0:v.replace("pathname://",""),w=void 0!==j?(T=j,y&&(e=>e.startsWith("/"))(T)?h(T):T):void 0;var T;const C=Object(r.useRef)(!1),P=n?a.e:a.c,k=s.a.canUseIntersectionObserver;let x;Object(r.useEffect)((()=>(!k&&O&&window.docusaurus.prefetch(w),()=>{k&&x&&x.disconnect()})),[w,k,O]);const N=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,S=!w||!O||N;return w&&O&&!N&&!b&&E.collectLink(w),S?l.a.createElement("a",Object.assign({href:w},v&&!O&&{target:"_blank",rel:"noopener noreferrer"},g)):l.a.createElement(P,Object.assign({},g,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(w),C.current=!0)},innerRef:e=>{var t,n;k&&e&&O&&(t=e,n=()=>{window.docusaurus.prefetch(w)},x=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),n())}))})),x.observe(t))},to:w||""},n&&{isActive:m,activeClassName:p}))}},112:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(16),l=n(113);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(l.b)(n))return n;if(r)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+o:o}(t,e,n,r)}}function o(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},113:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return l}))},122:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ProtoMessage=t.ProtoService=t.ProtoServiceMethod=t.ProtoEnum=void 0;var l=r(n(0)),a=r(n(110)),o={textAlign:"left"};t.ProtoEnum=function(e){var t=e.enumb;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement("table",null,l.default.createElement((function(){return l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Number"),l.default.createElement("th",null,"Description")))}),null),l.default.createElement((function(){return l.default.createElement("tbody",null,t.values.map((function(e){return l.default.createElement("tr",{key:e.name},l.default.createElement("td",null,l.default.createElement("code",null,e.name)),l.default.createElement("td",null,l.default.createElement("code",null,e.number)),l.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null)))};t.ProtoServiceMethod=function(e){var t=e.method;return l.default.createElement("table",null,l.default.createElement("tbody",null,l.default.createElement("tr",null,l.default.createElement("th",{style:o},"Method"),l.default.createElement("td",null,l.default.createElement("code",null,t.name))),l.default.createElement("tr",null,l.default.createElement("th",{style:o},"Request"),l.default.createElement("td",null,l.default.createElement(a.default,{to:t.requestTypeLink},l.default.createElement("code",null,t.requestType)),!0===t.requestStreaming?" stream":"")),l.default.createElement("tr",null,l.default.createElement("th",{style:o},"Response"),l.default.createElement("td",null,l.default.createElement(a.default,{to:t.responseTypeLink},l.default.createElement("code",null,t.responseType)),!0===t.responseStreaming?" stream":"")),l.default.createElement("tr",null,l.default.createElement("th",{style:o},"Description"),l.default.createElement("td",null,t.description))))};var s=function(e){var n=e.methods;return l.default.createElement(l.default.Fragment,null,n.map((function(e,n){return l.default.createElement(t.ProtoServiceMethod,{method:e,key:e.name+"-"+n})})))};t.ProtoService=function(e){var t=e.service;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement(s,{methods:t.methods}))};var u=function(e){var t=e.fields,n=function(e){var t=e.field,n=l.default.createElement("code",null,t.longType);return void 0===t.typeLink?n:l.default.createElement(a.default,{to:t.typeLink},n)};return l.default.createElement("table",null,l.default.createElement((function(){return l.default.createElement("thead",null,l.default.createElement("tr",null,l.default.createElement("th",null,"Name"),l.default.createElement("th",null,"Type"),l.default.createElement("th",null,"Description")))}),null),l.default.createElement((function(){return l.default.createElement("tbody",null,t.map((function(e){return l.default.createElement("tr",{key:e.name},l.default.createElement("td",null,l.default.createElement("code",null,e.name)),l.default.createElement("td",null,l.default.createElement(n,{field:e})),l.default.createElement("td",{style:{whiteSpace:"pre-wrap"}},e.description))})))}),null))};t.ProtoMessage=function(e){var t=e.message;return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},t.description),l.default.createElement(u,{fields:t.fields}))};t.default=function(e){var n=e.fileDescriptor,r=e.components;return l.default.createElement(l.default.Fragment,null,l.default.createElement(r.h1,null,n.name),l.default.createElement("p",{style:{whiteSpace:"pre-wrap"}},n.description),n.messages.map((function(e,n){return l.default.createElement(t.ProtoMessage,{message:e,key:n})})))}},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),l=n(7),a=(n(0),n(107)),o=n(122),s={title:"Customer.proto",hide_title:!0},u={unversionedId:"Customer.proto",id:"Customer.proto",isDocsHomePage:!1,title:"Customer.proto",description:"Customer.proto",source:"@site/protodocs/Customer.proto.mdx",slug:"/Customer.proto",permalink:"/docusaurus-protobuffet/protodocs/Customer.proto",version:"current",sidebar:"protodocs",previous:{title:"Booking.proto",permalink:"/docusaurus-protobuffet/protodocs/Booking.proto"},next:{title:"Vehicle.proto",permalink:"/docusaurus-protobuffet/protodocs/Vehicle.proto"}},i=[{value:"<code>Customer.proto</code>",id:"customerproto",children:[]},{value:"Messages",id:"messages",children:[{value:"<code>Address</code>",id:"address",children:[]},{value:"<code>Customer</code>",id:"customer",children:[]}]}],c={toc:i};function d(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"customerproto"},Object(a.b)("inlineCode",{parentName:"h2"},"Customer.proto")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"path")," Customer.proto")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("strong",{parentName:"em"},"package")," com.example")),Object(a.b)("p",null,"This file has messages for describing a customer."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"messages"},"Messages"),Object(a.b)("h3",{id:"address"},Object(a.b)("inlineCode",{parentName:"h3"},"Address")),Object(a.b)(o.ProtoMessage,{key:0,message:{name:"Address",longName:"Address",fullName:"com.example.Address",description:"Represents a mail address.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"address_line_1",description:"First address line.",label:"required",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"address_line_2",description:"Second address line.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"address_line_3",description:"Second address line.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"town",description:"Address town.",label:"required",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"county",description:"Address county, if applicable.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"country",description:"Address country.",label:"required",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""}]},mdxType:"ProtoMessage"}),Object(a.b)("h3",{id:"customer"},Object(a.b)("inlineCode",{parentName:"h3"},"Customer")),Object(a.b)(o.ProtoMessage,{key:1,message:{name:"Customer",longName:"Customer",fullName:"com.example.Customer",description:"Represents a customer.",hasExtensions:!1,hasFields:!0,hasOneofs:!1,extensions:[],fields:[{name:"id",description:"Unique customer ID.",label:"required",type:"int32",longType:"int32",fullType:"int32",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"first_name",description:"Customer first name.",label:"required",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"last_name",description:"Customer last name.",label:"required",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"details",description:"Customer details.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"email_address",description:"Customer e-mail address.",label:"optional",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"phone_number",description:"Customer phone numbers, primary first.",label:"repeated",type:"string",longType:"string",fullType:"string",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:""},{name:"mail_addresses",description:"Customer mail addresses, primary first.",label:"repeated",type:"Address",longType:"Address",fullType:"com.example.Address",ismap:!1,isoneof:!1,oneofdecl:"",defaultValue:"",typeLink:"/protodocs/Customer.proto#address"}]},mdxType:"ProtoMessage"}),Object(a.b)("hr",null))}d.isMDXComponent=!0}}]);