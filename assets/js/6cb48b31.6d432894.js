(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{107:function(e,t,o){"use strict";o.d(t,"a",(function(){return f})),o.d(t,"b",(function(){return d}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},f=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(o),b=n,d=f["".concat(i,".").concat(b)]||f[b]||p[b]||a;return o?r.a.createElement(d,u(u({ref:t},s),{},{components:o})):r.a.createElement(d,u({ref:t},s))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=o[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"},88:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return u})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return l}));var n=o(3),r=o(7),a=(o(0),o(107)),i={title:"Motivation",slug:"/what/motivation"},u={unversionedId:"what/motivation",id:"what/motivation",isDocsHomePage:!1,title:"Motivation",description:"Protobuffet is intended for builders and consumers of Protobuf service implementations.",source:"@site/docs/what/motivation.md",slug:"/what/motivation",permalink:"/docusaurus-protobuffet/docs/what/motivation",editUrl:"https://github.com/AnthonyBobsin/docusaurus-protobuffet/edit/master/website/docs/what/motivation.md",version:"current",sidebar:"docs",previous:{title:"Demo",permalink:"/docusaurus-protobuffet/docs/what/demo"},next:{title:"Packages",permalink:"/docusaurus-protobuffet/docs/how/packages"}},c=[],s={toc:c};function l(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Protobuffet is intended for builders and consumers of Protobuf service implementations.")),Object(a.b)("p",null,"Documentation reduces the barrier for users to consume your APIs. As a builder, writing consistent, accurate documentation is difficult and often impacts developer velocity. The community is transitioning to services exposed by Protobuf contracts, but unfortunately the documentation toolset that we used to rely on for JSON APIs is no longer applicable. Protobuffet aims to solve this need for consistent, accurate documentation that satisfies both the builders and consumers of APIs driven by Protobuf contracts."),Object(a.b)("p",null,"Use Protobuffet if:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u2705 You build or consume a set of APIs driven by Protobuf contracts."),Object(a.b)("li",{parentName:"ul"},"\u2705 You rely on Protobuf contracts for data de/serialization."),Object(a.b)("li",{parentName:"ul"},"\u2705 You require an enhanced version of Protobuf documentation compared to what is offered today."),Object(a.b)("li",{parentName:"ul"},"\u2705 You believe documentation should be driven by code and auto-generated."),Object(a.b)("li",{parentName:"ul"},"\u2705 You are willing to leverage the Docusaurus framework.")))}l.isMDXComponent=!0}}]);