(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{8949:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slugs]",function(){return n(5224)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,i=n(2648).Z,l=n(1598).Z,o=n(7273).Z,a=l(n(7294)),s=i(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var f=i(n(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://coyo-hm.github.io/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,n,i,l,o,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,l=!1;i.current(r({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let b=a.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:l,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:h,placeholder:m,loading:g,srcString:b,config:w,unoptimized:v,loader:x,onLoadRef:y,onLoadingCompleteRef:j,setBlurComplete:C,setShowAltText:E,onLoad:_,onError:S}=e,N=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,a.default.createElement(a.default.Fragment,null,a.default.createElement("img",Object.assign({},N,n,{width:l,height:i,decoding:"async","data-nimg":h?"fill":"1",className:c,loading:g,style:r({},u,d),ref:a.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,b,m,y,j,C,v))},[b,m,y,j,C,S,v,t]),onLoad:e=>{let t=e.currentTarget;p(t,b,m,y,j,C,v)},onError:e=>{E(!0),"blur"===m&&C(!0),S&&S(e)}})))}),w=a.forwardRef((e,t)=>{let n,i;var l,{src:p,sizes:w,unoptimized:v=!1,priority:x=!1,loading:y,className:j,quality:C,width:E,height:_,fill:S,style:N,onLoad:k,onLoadingComplete:O,placeholder:I="empty",blurDataURL:R,layout:z,objectFit:M,objectPosition:P,lazyBoundary:Z,lazyRoot:D}=e,T=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=a.useContext(d.ImageConfigContext),L=a.useMemo(()=>{let e=h||A||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return r({},e,{allSizes:t,deviceSizes:n})},[A]),B=T,F=B.loader||f.default;delete B.loader;let H="__next_img_default"in F;if(H){if("custom"===L.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:n}=t,r=o(t,["config"]);return e(r)}}if(z){"fill"===z&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(N=r({},N,e));let t={responsive:"100vw",fill:"100vw"}[z];t&&!w&&(w=t)}let q="",G=g(E),W=g(_);if("object"==typeof(l=p)&&(m(l)||void 0!==l.src)){let e=m(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,i=e.blurHeight,R=R||e.blurDataURL,q=e.src,!S){if(G||W){if(G&&!W){let t=G/e.width;W=Math.round(e.height*t)}else if(!G&&W){let t=W/e.height;G=Math.round(e.width*t)}}else G=e.width,W=e.height}}let X=!x&&("lazy"===y||void 0===y);((p="string"==typeof p?p:q).startsWith("data:")||p.startsWith("blob:"))&&(v=!0,X=!1),L.unoptimized&&(v=!0),H&&p.endsWith(".svg")&&!L.dangerouslyAllowSVG&&(v=!0);let[U,$]=a.useState(!1),[V,Y]=a.useState(!1),J=g(C),K=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:P}:{},V?{}:{color:"transparent"},N),Q="blur"===I&&R&&!U?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:W,blurWidth:n,blurHeight:i,blurDataURL:R}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:l,sizes:o,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let l=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:l,kind:"x"}}(t,i,o),u=s.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:s.map((e,r)=>"".concat(a({config:t,src:n,quality:l,width:e})," ").concat("w"===c?e:r+1).concat(c)).join(", "),src:a({config:t,src:n,quality:l,width:s[u]})}}({config:L,src:p,unoptimized:v,width:G,quality:J,sizes:w,loader:F}),et=p,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},er=a.useRef(k);a.useEffect(()=>{er.current=k},[k]);let ei=a.useRef(O);a.useEffect(()=>{ei.current=O},[O]);let el=r({isLazy:X,imgAttributes:ee,heightInt:W,widthInt:G,qualityInt:J,className:j,imgStyle:K,blurStyle:Q,loading:y,config:L,fill:S,unoptimized:v,placeholder:I,loader:F,srcString:et,onLoadRef:er,onLoadingCompleteRef:ei,setBlurComplete:$,setShowAltText:Y},B);return a.default.createElement(a.default.Fragment,null,a.default.createElement(b,Object.assign({},el,{ref:t})),x?a.default.createElement(s.default,null,a.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:l}=e,o=r||t,a=i||n,s=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(a,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(r&&i?"1":"20","'/%3E").concat(s,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},4541:function(e,t,n){"use strict";n.d(t,{Is:function(){return o},Rj:function(){return a}});var r=n(5893),i=n(2962),l=n(8014);l.Z.title,l.Z.description,l.Z.siteUrl,l.Z.title,l.Z.description,l.Z.author.name;let o=e=>{let{title:t,description:n,url:o}=e;return(0,r.jsx)(i.PB,{title:"".concat(t," – ").concat(l.Z.title),description:n,canonical:o,openGraph:{url:o,title:t,description:n,images:[{alt:t,url:"/thumbnail.png"}]}})},a=e=>{let{title:t,summary:n,date:o,updatedAt:a,url:s,tags:c,images:u=[]}=e,d=new Date(o).toISOString(),f=new Date(a||o).toISOString(),h=u.map(e=>({url:e,alt:t}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.PB,{title:"".concat(t," – ").concat(l.Z.title),description:n,canonical:s,openGraph:{type:"article",article:{publishedTime:d,modifiedTime:f,authors:[l.Z.author.name],tags:c},url:s,title:t,description:n,images:h}}),(0,r.jsx)(i.dX,{authorName:l.Z.author.name,dateModified:f,datePublished:d,description:n,images:u,publisherName:l.Z.author.name,title:t,url:s,publisherLogo:"".concat(l.Z.siteUrl,"/favicons/favicon-32x32.png")})]})}},5224:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return I},default:function(){return R}});var r={};n.r(r),n.d(r,{MDXContext:function(){return b},MDXProvider:function(){return y},useMDXComponents:function(){return v},withMDXComponents:function(){return w}});var i=n(5893),l=n(4541),o=n(7635);let a=e=>{let{title:t,date:n}=e,{dateStr:r}=(0,o.Z)(n);return(0,i.jsxs)("header",{className:"py-20 text-5xl font-semibold text-center",children:[(0,i.jsx)("h1",{children:t}),(0,i.jsx)("p",{className:"text-sm text-neutral-500 mt-2",children:r})]})};var s=n(1664),c=n.n(s),u=n(9583);let d=e=>{let t=e.split("\n").filter(e=>e.includes("# "));return t.filter(e=>"#"===e[0]).map(e=>{var t;let n=(null===(t=e.match(/#/g))||void 0===t?void 0:t.length)||0;return{title:e.split("# ")[1].replace(/`/g,"").trim(),count:n}})},f=e=>{let{content:t}=e,n=d(t),r=()=>{window.scrollTo(0,0)},l=()=>{console.log(window.outerHeight,document.body.scrollHeight),document.body.scrollTop=document.body.scrollHeight,window.scrollTo(0,document.body.scrollHeight)};return(0,i.jsxs)("div",{className:"shrink-0 h-screen sticky flex flex-col flex-nowrap justify-center items-center top-0",id:"toc",children:[(0,i.jsx)("button",{onClick:r,className:"hover:text-blue-700",children:(0,i.jsx)(u.s$2,{size:32})}),(0,i.jsx)("div",{className:"grid gap-1.5 py-1 border-l border-l-blue-700 my-4",children:n.map(e=>{let{title:t,count:n}=e;return console.log(t,n),(0,i.jsx)(c(),{href:"#".concat(t.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,"")),className:"hover:text-blue-700 ".concat(""===t?"bg-blue-100":""," header-").concat(n),children:t},t)})}),(0,i.jsx)("button",{onClick:l,children:(0,i.jsx)(u.RiI,{size:32,className:"hover:text-blue-700"})})]})};var h=n(5675),m=n.n(h),g=n(7294),p=n(2746);let b=g.createContext({});function w(e){return function(t){let n=v(t.components);return g.createElement(e,{...t,allComponents:n})}}function v(e){let t=g.useContext(b);return g.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let x={};function y({components:e,children:t,disableParentContext:n}){let r=v(e);return n&&(r=e||x),g.createElement(b.Provider,{value:r},t)}function j({compiledSource:e,frontmatter:t,scope:n,components:i={},lazy:l}){let[o,a]=(0,g.useState)(!l||"undefined"==typeof window);(0,g.useEffect)(()=>{if(l){let e=window.requestIdleCallback(()=>{a(!0)});return()=>window.cancelIdleCallback(e)}},[]);let s=(0,g.useMemo)(()=>{let i=Object.assign({opts:{...r,...p.jsxRuntime}},{frontmatter:t},n),l=Object.keys(i),o=Object.values(i),a=Reflect.construct(Function,l.concat(`${e}`));return a.apply(a,o).default},[n,e]);if(!o)return g.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let c=g.createElement(y,{components:i},g.createElement(s,null));return l?g.createElement("div",null,c):c}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});let C=e=>{let{children:t}=e,n="";return t.map(e=>{if("string"==typeof e)n+=e.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,"");else if((null==e?void 0:e.type)==="code"){var t,r;n+=null==e?void 0:null===(t=e.props)||void 0===t?void 0:null===(r=t.children)||void 0===r?void 0:r.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣\w$-+]/gi,"")}}),n},E={Image:m(),a:e=>(0,i.jsx)("a",{href:"".concat(null==e?void 0:e.href),...e,target:"_blank",rel:"noreferrer",children:null==e?void 0:e.children}),h1:e=>(0,i.jsx)("h1",{className:"font-bold text-2xl",id:C(e),children:e.children}),h2:e=>(0,i.jsx)("h2",{className:"font-bold text-xl",id:C(e),children:e.children}),h3:e=>(0,i.jsx)("h3",{className:"font-bold text-lg",id:C(e),children:e.children}),h4:e=>(0,i.jsx)("h4",{className:"font-bold text-lg",id:C(e),children:e.children}),h5:e=>(0,i.jsx)("h5",{className:"font-bold text-lg",id:C(e),children:e.children}),h6:e=>(0,i.jsx)("h6",{className:"font-bold text-lg",id:C(e),children:e.children})},_=e=>(0,i.jsx)("div",{className:"grow shrink pr-10 min-w-0",children:(0,i.jsx)(j,{...e,components:{...E,...e.components||{}}})}),S=()=>{let e=(0,g.createRef)();return(0,g.useEffect)(()=>{if(null===e.current)return;let t=document.createElement("script");Object.entries({src:"https://utteranc.es/client.js",repo:"COYO-HM/COYO-HM.github.io","issue-term":"pathname",label:"Comment",theme:"github-light",crossorigin:"anonymous",async:"true"}).forEach(e=>{let[n,r]=e;t.setAttribute(n,r)}),e.current.appendChild(t)},[]),(0,i.jsx)("div",{ref:e})};var N=n(8014);let k=e=>{let{post:{fields:{slug:t},frontMatter:n,body:r,path:o},mdx:s}=e,{title:c,category:u,tags:d,date:h,description:m,socialImageCredit:g,thumbnail:p}=n;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Rj,{title:"".concat(N.Z.title," | ").concat(c),summary:m,date:h,url:N.Z.siteUrl+t,tags:d,images:[]}),(0,i.jsxs)("article",{className:"flex flex-col",children:[(0,i.jsx)(a,{...n}),(0,i.jsxs)("div",{className:"flex flex-row flex-nowrap relative border-y border-y-blue-700 py-10",children:[(0,i.jsx)(_,{...s}),(0,i.jsx)(f,{content:r})]}),(0,i.jsx)(S,{})]})]})},O=e=>{let{post:t,mdx:n}=e;return(0,i.jsx)(k,{post:t,mdx:n})};var I=!0,R=O},7635:function(e,t){"use strict";let n=e=>{let t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return{year:n,month:r,date:i,dateStr:"".concat(n,".").concat(r,".").concat(i)}};t.Z=n},5675:function(e,t,n){e.exports=n(9749)},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)}},function(e){e.O(0,[962,774,888,179],function(){return e(e.s=8949)}),_N_E=e.O()}]);