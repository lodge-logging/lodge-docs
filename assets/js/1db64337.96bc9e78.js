"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[372],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3099:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={id:"overview",title:"Dashboard Overview",slug:"/overview",hide_table_of_contents:!0},s=void 0,l={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"Dashboard Overview",description:"This is what Lodge looks like from a user\u2019s perspective on a high level. The user has deployed Lodge on their network, so now all the applications in that network can ship logs to the stack using Filebeat, a subset of Beats specifically for collecting and forwarding log data. The user can then view those logs from the Lodge dashboard that is deployed with the stack.",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/lodge-docs/overview",version:"current",frontMatter:{id:"overview",title:"Dashboard Overview",slug:"/overview",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Deploying Lodge",permalink:"/lodge-docs/deployment"},next:{title:"Shipping Logs",permalink:"/lodge-docs/shipping"}},u=[],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is what Lodge looks like from a user\u2019s perspective on a high level. The user has deployed Lodge on their network, so now all the applications in that network can ship logs to the stack using Filebeat, a subset of Beats specifically for collecting and forwarding log data. The user can then view those logs from the Lodge dashboard that is deployed with the stack."))}d.isMDXComponent=!0}}]);