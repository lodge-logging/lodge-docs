"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[927],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=o,g=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(g,c(c({ref:t},p),{},{components:r})):n.createElement(g,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9870:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],a={id:"architecture",title:"Lodge Architecture",slug:"/architecture",hide_table_of_contents:!0},u=void 0,l={unversionedId:"architecture",id:"architecture",isDocsHomePage:!1,title:"Lodge Architecture",description:"Lodge Architecture",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/lodge-docs/architecture",version:"current",frontMatter:{id:"architecture",title:"Lodge Architecture",slug:"/architecture",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Tearing Down Lodge",permalink:"/lodge-docs/teardown"}},p=[],s={toc:p};function f(e){var t=e.components,a=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lodge Architecture",src:r(176).Z})),(0,i.kt)("p",null,"The above diagram shows the complete infrastructure of a Lodge logging pipeline that is provisioned with ",(0,i.kt)("inlineCode",{parentName:"p"},"lodge deploy"),". This specific diagram also shows supporting components that we added to make Lodge resilient and the multiple Availability Zone cluster configurations for maximizing availability. For a deeper understanding of this architecture and what each piece is doing, please read our ",(0,i.kt)("a",{parentName:"p",href:"https://lodge-logging.github.io"},"case study"),"."))}f.isMDXComponent=!0},176:function(e,t,r){t.Z=r.p+"assets/images/complete-infra-324999fe6023af092409183afa8f059e.png"}}]);