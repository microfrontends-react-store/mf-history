/*! For license information please see meli-store-mf-history.js.LICENSE.txt */
System.register(["react","react-dom"],(function(e,t){var n={},r={};return Object.defineProperty(n,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){n[t]=e[t]}))},function(e){r.default=e.default}],execute:function(){e((()=>{var e={669:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(15),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,".poduct-card {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.poduct-card__image {\r\n    height: 200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.poduct-card__image>img {\r\n    max-height: 200px;\r\n    padding: 1rem;\r\n}","",{version:3,sources:["webpack://./src/components/ProductCard/ProductCard.css"],names:[],mappings:"AAAA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB",sourcesContent:[".poduct-card {\r\n    margin: 1rem 0;\r\n}\r\n\r\n.poduct-card__image {\r\n    height: 200px;\r\n    object-fit: cover;\r\n}\r\n\r\n.poduct-card__image>img {\r\n    max-height: 200px;\r\n    padding: 1rem;\r\n}"],sourceRoot:""}]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},15:e=>{"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if(!i)return a;if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),s="/*# ".concat(u," */"),l=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(l).concat([s]).join("\n")}return[a].join("\n")}},418:e=>{"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,u=o(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))n.call(i,l)&&(u[l]=i[l]);if(t){c=t(i);for(var p=0;p<c.length;p++)r.call(i,c[p])&&(u[c[p]]=i[c[p]])}}return u}},251:(e,t,n)=>{"use strict";n(418);var r=n(954),o=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,a={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!u.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:i.current}}t.jsx=s,t.jsxs=s},893:(e,t,n)=>{"use strict";e.exports=n(251)},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var f=n(p),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==f)t[f].references++,t[f].updater(d);else{var m=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=u}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},722:(e,t,n)=>{const r=n(905).R;t.s=function(e){if(e||(e=1),!n.y.meta||!n.y.meta.url)throw console.error("__system_context__",n.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");n.p=r(n.y.meta.url,e)}},905:(e,t,n)=>{t.R=function(e,t){var n=document.createElement("a");n.href=e;for(var r="/"===n.pathname[0]?n.pathname:"/"+n.pathname,o=0,a=r.length;o!==t&&a>=0;)"/"===r[--a]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var i=r.slice(0,a+1);return n.protocol+"//"+n.host+i};Number.isInteger},954:e=>{"use strict";e.exports=n},493:e=>{"use strict";e.exports=r}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var r=o[t]={id:t,exports:{}};return e[t](r,r.exports,a),r.exports}a.y=t,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var i={};return(0,a(722).s)(1),(()=>{"use strict";a.r(i),a.d(i,{bootstrap:()=>ae,mount:()=>ie,unmount:()=>ce});var e=a(954),t=a(493);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n;if("function"!=typeof(n=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(u(n)));return function(){var e=n(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(u(e)));return e}}var l=null;try{l=require("react").createContext()}catch(n){}var p,f={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function d(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function m(e,t){return new Promise((function(n,r){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=v(e,t,(function(){n(this)})),a=s(e,t)(),i=function(e){var t=e.opts,n=e.elementToRender,r=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var a=t.ReactDOM[o](r);return a.render(n),a}return"hydrate"===o?t.ReactDOM.hydrate(n,r):t.ReactDOM.render(n,r),null}({elementToRender:o,domElement:a,opts:e});e.domElements[t.name]=a,e.renderResults[t.name]=i}))}function h(e,t){return new Promise((function(n){e.unmountFinished=n;var r=e.renderResults[t.name];r&&r.unmount?r.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function y(e,t){return new Promise((function(n){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(n);var r=v(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(r);else{var a=s(e,t)();e.ReactDOM.render(r,a)}}))}function v(e,t,n){var o=e.React.createElement(e.rootComponent,t),a=l?e.React.createElement(l.Provider,{value:t},o):o;return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function n(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},n.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return n.prototype=Object.create(e.React.Component.prototype),n.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},n.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},n}(e,t),a=e.React.createElement(e.errorBoundaryClass,t,a)),e.React.createElement(e.SingleSpaRoot,r(r({},t),{},{mountFinished:n,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),a)}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(p||(p={}));var b="beforeunload";function O(e){e.preventDefault(),e.returnValue=""}function E(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function C(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,o=void 0===r?"":r,a=e.hash,i=void 0===a?"":a;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),i&&"#"!==i&&(n+="#"===i.charAt(0)?i:"#"+i),n}function w(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}const j=(0,e.createContext)(null),R=(0,e.createContext)(null),x=(0,e.createContext)({outlet:null,matches:[]});function S(e,t){if(!e)throw new Error(t)}function A(e,t,n){let r,o="string"==typeof e?w(e):e,a=""===e||""===o.pathname?"/":o.pathname;if(null==a)r=n;else{let e=t.length-1;if(a.startsWith("..")){let t=a.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}r=e>=0?t[e]:"/"}let i=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:o=""}="string"==typeof e?w(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:_(r),hash:N(o)}}(o,r);return a&&"/"!==a&&a.endsWith("/")&&!i.pathname.endsWith("/")&&(i.pathname+="/"),i}const P=e=>e.join("/").replace(/\/\/+/g,"/"),_=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",N=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function B(){return null!=(0,e.useContext)(R)}function T(){return B()||S(!1),(0,e.useContext)(R).location}function k(t){let{matches:n}=(0,e.useContext)(x),{pathname:r}=T(),o=JSON.stringify(n.map((e=>e.pathnameBase)));return(0,e.useMemo)((()=>A(t,JSON.parse(o),r)),[t,o,r])}function I(t){let{basename:n="/",children:r=null,location:o,navigationType:a=p.Pop,navigator:i,static:c=!1}=t;B()&&S(!1);let u=(e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"))(n),s=(0,e.useMemo)((()=>({basename:u,navigator:i,static:c})),[u,i,c]);"string"==typeof o&&(o=w(o));let{pathname:l="/",search:f="",hash:d="",state:m=null,key:h="default"}=o,y=(0,e.useMemo)((()=>{let e=function(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}(l,u);return null==e?null:{pathname:e,search:f,hash:d,state:m,key:h}}),[u,l,f,d,m,h]);return null==y?null:(0,e.createElement)(j.Provider,{value:s},(0,e.createElement)(R.Provider,{children:r,value:{location:y,navigationType:a}}))}function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}const D=["onClick","reloadDocument","replace","state","target","to"];function L(t){let{basename:n,children:r,window:o}=t,a=(0,e.useRef)();null==a.current&&(a.current=function(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,r=n.history;function o(){var e=n.location,t=e.pathname,o=e.search,a=e.hash,i=r.state||{};return[i.idx,{pathname:t,search:o,hash:a,state:i.usr||null,key:i.key||"default"}]}var a=null;n.addEventListener("popstate",(function(){if(a)f.call(a),a=null;else{var e=p.Pop,t=o(),n=t[0],r=t[1];if(f.length){if(null!=n){var i=u-n;i&&(a={action:e,location:r,retry:function(){j(-1*i)}},j(i))}}else v(e)}}));var i=p.Pop,c=o(),u=c[0],s=c[1],l=E(),f=E();function d(e){return"string"==typeof e?e:C(e)}function m(e,t){return void 0===t&&(t=null),g({pathname:s.pathname,hash:"",search:""},"string"==typeof e?w(e):e,{state:t,key:Math.random().toString(36).substr(2,8)})}function h(e,t){return[{usr:e.state,key:e.key,idx:t},d(e)]}function y(e,t,n){return!f.length||(f.call({action:e,location:t,retry:n}),!1)}function v(e){i=e;var t=o();u=t[0],s=t[1],l.call({action:i,location:s})}function j(e){r.go(e)}null==u&&(u=0,r.replaceState(g({},r.state,{idx:u}),""));var R={get action(){return i},get location(){return s},createHref:d,push:function e(t,o){var a=p.Push,i=m(t,o);if(y(a,i,(function(){e(t,o)}))){var c=h(i,u+1),s=c[0],l=c[1];try{r.pushState(s,"",l)}catch(e){n.location.assign(l)}v(a)}},replace:function e(t,n){var o=p.Replace,a=m(t,n);if(y(o,a,(function(){e(t,n)}))){var i=h(a,u),c=i[0],s=i[1];r.replaceState(c,"",s),v(o)}},go:j,back:function(){j(-1)},forward:function(){j(1)},listen:function(e){return l.push(e)},block:function(e){var t=f.push(e);return 1===f.length&&n.addEventListener(b,O),function(){t(),f.length||n.removeEventListener(b,O)}}};return R}({window:o}));let i=a.current,[c,u]=(0,e.useState)({action:i.action,location:i.location});return(0,e.useLayoutEffect)((()=>i.listen(u)),[i]),(0,e.createElement)(I,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:i})}const U=(0,e.forwardRef)((function(t,n){let{onClick:r,reloadDocument:o,replace:a=!1,state:i,target:c,to:u}=t,s=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,D),l=function(t){B()||S(!1);let{basename:n,navigator:r}=(0,e.useContext)(j),{hash:o,pathname:a,search:i}=k(t),c=a;if("/"!==n){let e=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?w(e).pathname:e.pathname}(t),r=null!=e&&e.endsWith("/");c="/"===a?n+(r?"/":""):P([n,a])}return r.createHref({pathname:c,search:i,hash:o})}(u),p=function(t,n){let{target:r,replace:o,state:a}=void 0===n?{}:n,i=function(){B()||S(!1);let{basename:t,navigator:n}=(0,e.useContext)(j),{matches:r}=(0,e.useContext)(x),{pathname:o}=T(),a=JSON.stringify(r.map((e=>e.pathnameBase))),i=(0,e.useRef)(!1);(0,e.useEffect)((()=>{i.current=!0}));let c=(0,e.useCallback)((function(e,r){if(void 0===r&&(r={}),!i.current)return;if("number"==typeof e)return void n.go(e);let c=A(e,JSON.parse(a),o);"/"!==t&&(c.pathname=P([t,c.pathname])),(r.replace?n.replace:n.push)(c,r.state)}),[t,n,a,o]);return c}(),c=T(),u=k(t);return(0,e.useCallback)((e=>{if(!(0!==e.button||r&&"_self"!==r||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))){e.preventDefault();let n=!!o||C(c)===C(u);i(t,{replace:n,state:a})}}),[c,i,u,o,a,r,t])}(u,{replace:a,state:i,target:c});return(0,e.createElement)("a",M({},s,{href:l,onClick:function(e){r&&r(e),e.defaultPrevented||o||p(e)},ref:n,target:c}))}));function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=a(379),H=a.n(F),J=a(795),q=a.n(J),G=a(569),$=a.n(G),Z=a(565),K=a.n(Z),V=a(216),Y=a.n(V),z=a(589),Q=a.n(z),X=a(669),ee={};ee.styleTagTransform=Q(),ee.setAttributes=K(),ee.insert=$().bind(null,"head"),ee.domAPI=q(),ee.insertStyleElement=Y(),H()(X.Z,ee),X.Z&&X.Z.locals&&X.Z.locals;var te=a(893),ne=function(e){var t=e.product;return(0,te.jsx)(U,{to:"/producto/"+t.id,children:(0,te.jsxs)("div",{className:"poduct-card card",style:{width:"250px"},children:[(0,te.jsx)("figure",{className:"poduct-card__image",children:(0,te.jsx)("img",{src:t.thumbnail,className:"card-img-top",alt:t.title})}),(0,te.jsx)("div",{className:"card-body",children:(0,te.jsx)("h5",{className:"card-title",children:t.title})})]})})},re=function(){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,e.useState)([]),2),n=t[0],r=t[1];return(0,e.useEffect)((function(){var e=window.localStorage.getItem("productsHistory");e&&r(JSON.parse(e))}),[]),(0,te.jsxs)("section",{className:"container mt-5",children:[(0,te.jsx)("h1",{className:"display-5",children:"Otros productos que puedes añadir a tu carrito"}),(0,te.jsx)("div",{className:"row row-cols-auto",children:n.map((function(e){return(0,te.jsx)("div",{className:"col",children:(0,te.jsx)(ne,{product:e})},e.id)}))})]})},oe=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=r(r({},f),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!l&&t.React.createContext&&(l=t.React.createContext()),t.SingleSpaRoot=function(e){function t(e){t.displayName="SingleSpaRoot(".concat(e.name,")")}return t.prototype=Object.create(e.React.Component.prototype),t.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},t.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},t.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},t}(t);var n={bootstrap:d.bind(null,t),mount:m.bind(null,t),unmount:h.bind(null,t)};return t.parcelCanUpdate&&(n.update=y.bind(null,t)),n}({React:e.default,ReactDOM:t.default,rootComponent:function(e){return(0,te.jsx)(L,{children:(0,te.jsx)(re,{})})},errorBoundary:function(e,t,n){return null}}),ae=oe.bootstrap,ie=oe.mount,ce=oe.unmount})(),i})())}}}));
//# sourceMappingURL=meli-store-mf-history.js.map