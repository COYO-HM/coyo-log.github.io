(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8251)}])},8014:function(e,t,r){"use strict";r.d(t,{O:function(){return n}}),t.Z={language:"ko",profileImage:"/images/logo.png",email:"bsydwp@gmail.com",title:"COYO-LOG:D ",description:"주니어 개발자의 개발 일지",siteUrl:"https://coyo-hm.github.io/",copyright:"coyo \xa9 All rights reserved.",author:{name:"COYO"}};let n="https://coyo-hm.github.io/"},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,o=n(r(7294)),c=r(1003),a=r(7795),i=r(4465),u=r(2692),s=r(8245),f=r(9246),d=r(227),p=r(3468);let h=new Set;function v(e,t,r,n){if(c.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(h.has(o))return;h.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let x=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:h,children:x,prefetch:g,passHref:y,replace:b,shallow:j,scroll:w,locale:C,onClick:_,onMouseEnter:O,onTouchStart:N,legacyBehavior:k=!1}=e,M=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=x,k&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let E=!1!==g,z=o.default.useContext(u.RouterContext),L=o.default.useContext(s.AppRouterContext),P=null!=z?z:L,R=!z,{href:S,as:I}=o.default.useMemo(()=>{if(!z){let e=m(a);return{href:e,as:h?m(h):e}}let[e,t]=c.resolveHref(z,a,!0);return{href:e,as:h?c.resolveHref(z,h):t||e}},[z,a,h]),Z=o.default.useRef(S),B=o.default.useRef(I);k&&(n=o.default.Children.only(r));let T=k?n&&"object"==typeof n&&n.ref:t,[H,D,X]=f.useIntersection({rootMargin:"200px"}),U=o.default.useCallback(e=>{(B.current!==I||Z.current!==S)&&(X(),B.current=I,Z.current=S),H(e),T&&("function"==typeof T?T(e):"object"==typeof T&&(T.current=e))},[I,T,S,X,H]);o.default.useEffect(()=>{P&&D&&E&&v(P,S,I,{locale:C})},[I,S,D,C,E,null==z?void 0:z.locale,P]);let A={ref:U,onClick(e){k||"function"!=typeof _||_(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,r,n,l,a,i,u,s,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?o.default.startTransition(h):h()}(e,P,S,I,b,j,w,C,R,E)},onMouseEnter(e){k||"function"!=typeof O||O(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),P&&(E||!R)&&v(P,S,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof N||N(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),P&&(E||!R)&&v(P,S,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&d.getDomainLocale(I,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);A.href=t||p.addBasePath(i.addLocale(I,e,null==z?void 0:z.defaultLocale))}return k?o.default.cloneElement(n,A):o.default.createElement("a",Object.assign({},M,A),r)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,u=i||!o,[s,f]=n.useState(!1),d=n.useRef(null),p=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(o){if(u||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=c.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},a.push(r),c.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),c.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(e)}},[u,r,t,s,d.current]);let h=n.useCallback(()=>{f(!1)},[]);return[p,s,h]};var n=r(7294),l=r(4686);let o="function"==typeof IntersectionObserver,c=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7169:function(e,t,r){"use strict";r.d(t,{bQ:function(){return o}});var n=r(7294);let l=(0,n.createContext)({prefix:""}),o=l.Provider;l.Consumer,t.ZP=l},7261:function(e,t,r){"use strict";r.d(t,{l:function(){return f},Z:function(){return p}});var n=r(5893),l=r(7294),o=r(1163),c=r(8357);function a(e){return(0,c.w_)({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z",fill:"currentColor"}}]})(e)}let i=()=>{(0,l.useEffect)(()=>{if("hidden"!==document.body.style.overflow)return document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}},[])};var u=r(1739);let s=e=>{let{tags:t}=e;console.log("SideBar");let r=(0,o.useRouter)(),{closeSidebar:l}=(0,u.Z)();i();let c=(e,t)=>{e.preventDefault(),l(),r.push("/blog/tags/".concat(t))};return(0,n.jsxs)("div",{className:"inset-0 m-0 p-0 fixed w-screen h-full",children:[(0,n.jsx)("div",{className:"fixed inset-0 m-0 p-0 w-full h-full opacity-70 bg-neutral-800"}),(0,n.jsxs)("div",{className:"fixed inset-0 flex flex-col p-4 w-1/3 h-full bg-white overflow-y-auto",children:[(0,n.jsx)("button",{onClick:l,className:"hover:text-blue-700",children:(0,n.jsx)(a,{size:24})}),(0,n.jsx)("h1",{className:"pl-8 font-bold text-xl py-4 w-full",children:"#Tag"}),(0,n.jsx)("ul",{className:"pl-8 grid gap-1 grid-cols-1",children:t.map(e=>{let{tag:t}=e;return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:e=>c(e,t),className:"break-normal transition-all hover:text-blue-700 hover:text-lg",children:t})},t)})})]})]})},f=(0,l.createContext)(null),d=e=>{let{children:t}=e,[r,o]=(0,l.useState)(!1),[c,a]=(0,l.useState)([]),i=()=>o(!0),u=()=>o(!1);return(0,n.jsxs)(f.Provider,{value:{setTags:a,openSidebar:i,closeSidebar:u},children:[t,r&&(0,n.jsx)(s,{tags:c})]})};var p=d},1739:function(e,t,r){"use strict";var n=r(7294),l=r(7261);let o=()=>{let e=(0,n.useContext)(l.l);if(!e)throw Error("NO SIDEBAR");return e};t.Z=o},8251:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(5893);r(7097),r(5032),r(7599),r(9382),r(8346),r(639);var l=r(7261),o=r(9583),c=r(8014);let a=()=>(0,n.jsxs)("footer",{className:"w-full flex flex-col items-center text-neutral-700 pb-3",children:[(0,n.jsxs)("div",{className:"flex justify-center mb-2",children:[(0,n.jsx)("a",{href:"https://github.com/COYO-HM",target:"_blank",rel:"noreferrer",className:"mr-4 hover:text-blue-700",children:(0,n.jsx)(o.hJX,{size:24})}),(0,n.jsx)("a",{href:"mailto:bsydwp@gmail.com",className:"hover:text-blue-700",children:(0,n.jsx)(o.SRX,{size:24})})]}),(0,n.jsx)("div",{className:"col-span-2 font-extralight",children:c.Z.copyright})]});var i=r(1664),u=r.n(i),s=r(1739),f=r(1163);let d=()=>{let{route:e}=(0,f.useRouter)();return(0,n.jsx)("nav",{className:"max-md:hidden",children:[{title:"Blog",link:"/blog"},{title:"Project",link:"/project"}].map(t=>(0,n.jsx)(u(),{href:t.link,className:"hover:text-blue-700 mr-4 last:mr-0 py-2 ".concat(e.includes(t.link)?"border-b border-b-blue-700":""),children:t.title},t.title))})},p=()=>{let{openSidebar:e}=(0,s.Z)();return(0,n.jsxs)("header",{className:"w-full flex justify-between items-center pb-1 pt-4",children:[(0,n.jsx)("button",{className:"hover:text-blue-700",onClick:e,children:(0,n.jsx)(o.Fm7,{size:24})}),(0,n.jsx)("div",{className:"flex flex-row items-center max-md:grow max-md:justify-center",children:(0,n.jsx)(u(),{href:"/",className:"font-extralight text-lg",children:c.Z.title})}),(0,n.jsx)(d,{})]})},h=e=>(0,n.jsxs)("div",{className:"md:max-lg:w-full lg:w-[1024px] flex flex-col items-center px-8 m-auto",children:[(0,n.jsx)(p,{}),(0,n.jsx)("main",{className:"w-full flex flex-col justify-center my-6",children:e.children}),(0,n.jsx)(a,{})]});var v=r(7169);function m(e){let{Component:t,pageProps:r}=e;return(0,n.jsx)(v.bQ,{value:{prefix:c.O},children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(h,{children:(0,n.jsx)(t,{...r})})})})}},7097:function(){},5032:function(){},639:function(){},7599:function(){},8346:function(){},9382:function(){},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)},9583:function(e,t,r){"use strict";r.d(t,{Fm7:function(){return o},RiI:function(){return c},SRX:function(){return i},hJX:function(){return l},s$2:function(){return a}});var n=r(8357);function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"}}]})(e)}function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"}}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(l),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function i(e){return function(t){return n.createElement(u,c({attr:c({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,c({key:r},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var r,l=e.attr,o=e.size,i=e.title,u=a(e,["attr","size","title"]),s=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);