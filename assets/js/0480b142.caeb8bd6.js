(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(104)),a={title:"FAQ"},c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Unicode characters (emojis, ...) are not working on Windows ?",source:"@site/docs/faq.md",slug:"/faq",permalink:"/Templater/docs/faq",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/faq.md",version:"current",sidebar:"docs",previous:{title:"Settings",permalink:"/Templater/docs/settings"},next:{title:"Overview",permalink:"/Templater/docs/internal-variables-functions"}},s=[{value:"Unicode characters (emojis, ...) are not working on Windows ?",id:"unicode-characters-emojis--are-not-working-on-windows-",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"unicode-characters-emojis--are-not-working-on-windows-"},"Unicode characters (emojis, ...) are not working on Windows ?"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cmd.exe")," and ",Object(i.b)("inlineCode",{parentName:"p"},"powershell")," on Windows are known to have problems with unicode characters."),Object(i.b)("p",null,"You can check ",Object(i.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater/issues/15#issuecomment-824067020"},"https://github.com/SilentVoid13/Templater/issues/15#issuecomment-824067020")," for a solution."),Object(i.b)("p",null,"Another good solution (probably the best) is to use ",Object(i.b)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701"},"Windows Terminal")," and set it as the default shell in Templater's setting."),Object(i.b)("p",null,"Another resource containing solutions that could work for you: ",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/49476326/displaying-unicode-in-powershell"},"https://stackoverflow.com/questions/49476326/displaying-unicode-in-powershell")))}p.isMDXComponent=!0}}]);