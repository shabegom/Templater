(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,b=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(104)),i={title:"Overview",slug:"/commands"},c={unversionedId:"commands/overview",id:"commands/overview",isDocsHomePage:!1,title:"Overview",description:"Command Types",source:"@site/docs/commands/overview.md",slug:"/commands",permalink:"/Templater/docs/commands",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/commands/overview.md",version:"current",sidebar:"docs",previous:{title:"System Command User Functions",permalink:"/Templater/docs/user-functions/system-user-functions"},next:{title:"Javascript Execution Command",permalink:"/Templater/docs/commands/execution-command"}},m=[{value:"Command Types",id:"command-types",children:[]},{value:"Command utilities",id:"command-utilities",children:[]}],l={toc:m};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"command-types"},"Command Types"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater"},"Templater")," defines 3 types of opening tags, that defines 3 types of ",Object(o.b)("strong",{parentName:"p"},"commands"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<%"),":  Raw display command. It will just output the expression that's inside."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<%~"),": Interpolation command. Same as the raw display tag, but adds some character escaping."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<%*"),": ",Object(o.b)("a",{parentName:"li",href:"commands/execution-command"},"JavaScript execution command"),". It will execute the JavaScript code that's inside. It does not output anything by default.")),Object(o.b)("p",null,"The closing tag for a command is always the same: ",Object(o.b)("inlineCode",{parentName:"p"},"%>")),Object(o.b)("h2",{id:"command-utilities"},"Command utilities"),Object(o.b)("p",null,"In addition to the 3 different types of commands, you can also use command utilities. They are also declared in the opening tag of the command, and they work with all the command types. Available command utilities are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"commands/whitespace-control"},"Whitespace Control")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"commands/dynamic-command"},"Dynamic Commands"))))}s.isMDXComponent=!0}}]);