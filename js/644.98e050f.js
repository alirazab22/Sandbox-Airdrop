(window.webpackJsonp=window.webpackJsonp||[]).push([[644,1134,1135],{1473:function(e,t,n){"use strict";var o=n(0),r=(n(10),n(11),n(12),n(13),n(9),n(23)),l=n(8),c=n(335);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;if(!e||!c.a[e])throw new Error("Feature flag is missing.");var d=Object(r.j)().$ff,m=Object(l.ref)(d.isFeatureFlagEnabled(e,t)),content=Object(l.ref)(d.getFeatureFlagValue(e,n));function f(){return(f=Object(o.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,d.refresh();case 2:m.value=d.isFeatureFlagEnabled(e,t),content.value=d.getFeatureFlagValue(e,n);case 4:case"end":return o.stop()}}),o)})))).apply(this,arguments)}return{enabled:m,content:content,refresh:function(){return f.apply(this,arguments)}}}},1491:function(e,t,n){"use strict";n(10),n(11),n(12),n(13);var o=n(23);t.a=function(){return Object(o.j)().$device}},1520:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n(18),n(22),n(21);var o=n(4);n(31),n(20),n(7),n(17),n(15);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c="https://res.cloudinary.com",d="dl4jjxn61",m={quality:"auto:good",format:"auto:video"},f={quality:"q",format:"f",bitRate:"br",width:"w",height:"h",crop:"c",background:"b"};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=l(l({},m),t),"".concat(c,"/").concat(d,"/video/upload/").concat(function(e){var t="",n=Object.keys(e).filter((function(t){return"none"!==e[t]}));return n.forEach((function(o,r){e[o]&&(t+="".concat(f[o],"_").concat(e[o]).concat(r<n.length-1?",":""))})),t}(t),"/fetch/").concat(e)}},1696:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var o=n(0),r=(n(9),n(7),n(38),n(150),n(53),n(67),n(8)),l=[/Android/i,/webOS/i,/iPhone/i,/iPad/i];function c(){var e=Object(r.ref)(!1),t=Object(r.ref)(!1),n=Object(r.computed)((function(){return f.value?"Opera":v.value?"Google Chrome":d.value?"Brave":h.value?"Safari":y.value?"Firefox":w.value?"Edge":m.value?"Metamask":null})),c=Object(r.computed)((function(){return l.some((function(e){return navigator.userAgent.match(e)}))})),d=Object(r.computed)((function(){return e.value})),m=Object(r.computed)((function(){return c.value&&t.value})),f=Object(r.computed)((function(){return navigator.userAgent.toLowerCase().includes("opera")||navigator.userAgent.toLowerCase().includes("opr/")||navigator.userAgent.toLowerCase().includes("opt/")})),v=Object(r.computed)((function(){return["chrome","crios"].some((function(e){return navigator.userAgent.toLowerCase().includes(e)}))&&!d.value&&!f.value&&!m.value})),h=Object(r.computed)((function(){return/^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)})),x=Object(r.computed)((function(){var e,t;return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(null===(e=navigator)||void 0===e||null===(e=e.userAgentData)||void 0===e?void 0:e.platform)||(null===(t=navigator)||void 0===t?void 0:t.userAgent.includes("Mac"))})),y=Object(r.computed)((function(){return["firefox","fxios"].some((function(e){return navigator.userAgent.toLowerCase().includes(e)}))})),w=Object(r.computed)((function(){return/edge/i.test(navigator.userAgent)}));function _(){var e=window.ethereum;t.value=null==e?void 0:e.isMetaMask}function k(){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t1=navigator.brave,!t.t1){t.next=5;break}return t.next=4,navigator.brave.isBrave();case 4:t.t1=t.sent;case 5:if(t.t0=t.t1,t.t0){t.next=8;break}t.t0=!1;case 8:e.value=t.t0;case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.onMounted)(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.ethereum?_():(window.addEventListener("ethereum#initialized",_,{once:!0}),setTimeout(_,3e3)),e.next=3,k();case 3:case"end":return e.stop()}}),e)})))),{isMobileDevice:c,isChrome:v,isSafari:h,isIOS:x,browserName:n}}function d(){var e=Object(r.ref)(!1);return Object(r.onMounted)((function(){e.value=window.matchMedia("(prefers-reduced-motion)").matches})),{prefersReducedMotion:e}}},3034:function(e,t,n){var content=n(4544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(242).default)("64677764",content,!0,{sourceMap:!1})},3035:function(e,t,n){var content=n(4546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(242).default)("64a5fe67",content,!0,{sourceMap:!1})},3039:function(e,t,n){var content=n(4554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(242).default)("d6026850",content,!0,{sourceMap:!1})},4543:function(e,t,n){"use strict";n(3034)},4544:function(e,t,n){var o=n(241)((function(i){return i[1]}));o.push([e.i,'.section-wrapper[data-v-22ee8e18]{align-items:stretch;display:flex;flex-direction:column;justify-content:flex-end}.cubes-container[data-v-22ee8e18]{background:radial-gradient(50% 266.67% at 50% 0,#0038ef 0,rgba(102,0,232,0) 100%);background-position:bottom;background-size:cover;position:relative;width:100%}.cubes-container .background-footer[data-v-22ee8e18]{height:100%;left:0;-o-object-fit:cover;object-fit:cover;-o-object-position:bottom;object-position:bottom;position:absolute;top:0;width:100%;z-index:-1}.cubes-container .breaker[data-v-22ee8e18]{height:64px;position:absolute;top:-32px;width:100%}.cubes-container .cube[data-v-22ee8e18]{pointer-events:none;position:absolute}.cubes-container .cube[data-v-22ee8e18]:nth-child(3){height:63px;right:10%;rotate:-28.93deg;top:-10%}.cubes-container .cube[data-v-22ee8e18]:nth-child(4){height:80px;left:4%;rotate:40.53deg;top:-10%}.cubes-container .cube[data-v-22ee8e18]:nth-child(5){bottom:-50%;height:280px;left:8%;rotate:15.08deg}.cubes-container .cube[data-v-22ee8e18]:nth-child(6){bottom:25%;height:128px;right:-3%;rotate:-18.57deg}.cubes-container .cube[data-v-22ee8e18]:nth-child(7){bottom:-36%;height:200px;right:11%;rotate:-18.57deg}@media(max-width:1279px){.cubes-container .cube[data-v-22ee8e18]:nth-child(3){right:4%}.cubes-container .cube[data-v-22ee8e18]:nth-child(4){left:-6%}.cubes-container .cube[data-v-22ee8e18]:nth-child(5){bottom:-60%;left:-16%}.cubes-container .cube[data-v-22ee8e18]:nth-child(6){bottom:40%;right:-10%}.cubes-container .cube[data-v-22ee8e18]:nth-child(7){bottom:-40%;right:-4%}}@media(max-width:tabletpx){.cubes-container .cube[data-v-22ee8e18]:nth-child(3){right:4%}.cubes-container .cube[data-v-22ee8e18]:nth-child(4){left:-6%}.cubes-container .cube[data-v-22ee8e18]:nth-child(5){bottom:-60%;left:-16%}.cubes-container .cube[data-v-22ee8e18]:nth-child(6){bottom:40%;right:-10%}.cubes-container .cube[data-v-22ee8e18]:nth-child(7){bottom:-40%;right:-4%}}@media(min-width:0px)and (max-width:767px){.cubes-container .cube[data-v-22ee8e18]:nth-child(6){right:-26%}}.cubes-container .text-container[data-v-22ee8e18]{align-items:center;display:flex;flex-direction:column;justify-content:center;padding:64px 80px;position:relative;width:100%;z-index:1}.cubes-container .text-container h2[data-v-22ee8e18]{color:#fff;font-family:"Montserrat Bold","Arial Black",sans-serif;font-size:28px;line-height:36px;margin:0 0 16px;text-align:center}.cubes-container .text-container p[data-v-22ee8e18]{color:#fff;font-family:"Montserrat Regular","Verdana",sans-serif;font-size:16px;line-height:24px;margin-bottom:32px;text-align:center}@media(min-width:0px)and (max-width:767px){.cubes-container .text-container[data-v-22ee8e18]{padding:80px 24px}}.cubes-container .text-container .buttons-size[data-v-22ee8e18]{border-radius:20px;color:#fff;font-family:"Montserrat Bold","Arial Black",sans-serif;font-size:16px;height:40px;line-height:24px;max-height:none;min-height:0;min-height:auto;min-width:220px;text-align:center}@media(min-width:0px)and (max-width:767px){.cubes-container .text-container .buttons-size[data-v-22ee8e18]{max-width:220px;min-height:36px;width:100%}}.cubes-container .text-container .primary-button[data-v-22ee8e18]{background-color:#0084ff;padding:8px 20px}.cubes-container .text-container .primary-button[data-v-22ee8e18]:hover{background-color:#39a0ff}',""]),o.locals={},e.exports=o},4545:function(e,t,n){"use strict";n(3035)},4546:function(e,t,n){var o=n(241)((function(i){return i[1]}));o.push([e.i,'.section-title[data-v-189fa67c]{margin-bottom:62px;margin-top:96px}@media(max-width:1023px){.section-title[data-v-189fa67c]{padding-left:80px;padding-right:80px}}@media(max-width:720px){.section-title[data-v-189fa67c]{padding-left:24px;padding-right:24px}}.section-title h3[data-v-189fa67c]{color:#fff;font-family:"Montserrat Bold","Arial Black",sans-serif;font-size:28px;line-height:36px;text-align:center}.carousel-style[data-v-189fa67c]{margin:auto auto 128px;max-width:calc(100vw - 160px)}@media(max-width:720px){.carousel-style[data-v-189fa67c]{max-width:100vw}}@media(min-width:1920px){.carousel-style[data-v-189fa67c]{max-width:1440px}}.carousel-style[data-v-189fa67c] .ssr-carousel-arrows{display:none}@media(max-width:1279px){.carousel-style[data-v-189fa67c] .ssr-carousel-arrows{display:inline;display:initial}}@media(max-width:tabletpx){.carousel-style[data-v-189fa67c] .ssr-carousel-arrows{display:inline;display:initial}}.carousel-style[data-v-189fa67c] .ssr-carousel-next-button{right:0}.carousel-style[data-v-189fa67c] .ssr-carousel-back-button{left:0}.carousel-style[data-v-189fa67c] .ssr-carousel-back-icon{background:url(/img/14_Home/carousel-arrow.svg);background-position:45%;background-repeat:no-repeat;background-size:11px;height:160px;opacity:.8}.carousel-style[data-v-189fa67c] .ssr-carousel-back-icon:before{content:normal}.carousel-style[data-v-189fa67c] .ssr-carousel-back-icon:hover{opacity:1}.carousel-style[data-v-189fa67c] .ssr-carousel-next-icon{background:url(/img/14_Home/carousel-arrow.svg);background-position:45%;background-repeat:no-repeat;background-size:11px;height:160px;opacity:.8;rotate:180deg}.carousel-style[data-v-189fa67c] .ssr-carousel-next-icon:before{content:normal}.carousel-style[data-v-189fa67c] .ssr-carousel-next-icon:hover{opacity:1}.carousel-style .video-card[data-v-189fa67c]{align-items:center;display:flex;flex-direction:row;height:220px;justify-content:flex-start}.carousel-style .video-card .video-container[data-v-189fa67c]{align-items:center;border-radius:4px;display:flex;flex-direction:row;height:160px;justify-content:center;overflow:hidden;position:relative;transition:height .5s;width:100%}.carousel-style .video-card .video-container .partner-logo[data-v-189fa67c]{filter:drop-shadow(0 0 24px #11326f);left:50%;max-height:64px;position:absolute;top:50%;transform:translate(-50%,-50%);transition:transform .5s}.carousel-style .video-card .video-container[data-v-189fa67c]:hover{height:220px}.carousel-style .video-card .video-container:hover .partner-logo[data-v-189fa67c]{transform:translate(-50%,70%) scale(.65)}@media(max-width:1023px){.carousel-style .video-card .video-container.active[data-v-189fa67c]{height:220px;transition:height 1s}.carousel-style .video-card .video-container.active .partner-logo[data-v-189fa67c]{transform:translate(-50%,70%) scale(.65);transition:transform 1s}}.carousel-style .video-card .safari-image[data-v-189fa67c],.carousel-style .video-card video[data-v-189fa67c]{aspect-ratio:16/9;height:220px;-o-object-fit:cover;object-fit:cover;width:100%}@media(min-width:720px)and (max-width:1023px){.carousel-style .video-card[data-v-189fa67c],.carousel-style .video-card .safari-image[data-v-189fa67c],.carousel-style .video-card .video-container.active[data-v-189fa67c],.carousel-style .video-card video[data-v-189fa67c]{height:320px}.carousel-style .video-card .video-container.active .partner-logo[data-v-189fa67c]{transform:translate(-50%,100%) scale(.85)}}.carousel-style[data-v-189fa67c]:hover .ssr-carousel-arrows{display:inline;display:initial}',""]),o.locals={},e.exports=o},4553:function(e,t,n){"use strict";n(3039)},4554:function(e,t,n){var o=n(241)((function(i){return i[1]}));o.push([e.i,'.polygonal-background[data-v-07b03db8]{background:radial-gradient(50% 50% at 50% 100%,#020b31 0,rgba(2,11,49,0) 100%),radial-gradient(48.26% 48.26% at 74.97% 0,#05e7ff 0,rgba(5,231,255,0) 100%),radial-gradient(50% 50% at 100% 50%,#6600e8 0,rgba(102,0,232,0) 100%),radial-gradient(100% 100% at 100% 0,#020b31 0,rgba(0,56,239,0) 100%),radial-gradient(100% 100% at 100% 0,rgba(2,11,49,0) 0,#0d1015 76.39%),url(/img/14_Home/visitors-homepage/Map-bg-v2.webp),#0d1015;background-blend-mode:normal,lighten,lighten,lighten,normal,normal,normal;-webkit-clip-path:polygon(0 0,100% 32px,100% 100%,0 1000%);clip-path:polygon(0 0,100% 32px,100% 100%,0 1000%);justify-content:center;padding-bottom:32px}.banner-content[data-v-07b03db8],.polygonal-background[data-v-07b03db8]{align-items:center;display:flex;flex-direction:row;height:100%;width:100%}.banner-content[data-v-07b03db8]{justify-content:flex-start}@media(min-width:1921px){.banner-content[data-v-07b03db8]{margin:auto;max-width:1440px}}@media(max-width:767px){.banner-content[data-v-07b03db8]{align-items:center;display:flex;flex-direction:column;gap:24px;justify-content:center}}@media(max-width:mobilepx){.banner-content[data-v-07b03db8]{align-items:center;display:flex;flex-direction:column;gap:24px;justify-content:center}}.banner-content .left[data-v-07b03db8]{align-items:stretch;display:flex;flex-direction:column;height:100%;justify-content:center;padding:0 24px 0 80px;width:50%}@media(min-width:1680px)and (max-width:1920px){.banner-content .left[data-v-07b03db8]{padding:0 24px 0 240px}}@media(max-width:767px){.banner-content .left[data-v-07b03db8]{order:2;padding:0 24px 64px;width:100%}}@media(max-width:mobilepx){.banner-content .left[data-v-07b03db8]{order:2;padding:0 24px 64px;width:100%}}.banner-content .left .small-title[data-v-07b03db8]{color:#39a0ff;font-family:"Montserrat SemiBold","Verdana",sans-serif;font-size:14px;line-height:20px;text-align:left}.banner-content .left .title[data-v-07b03db8]{color:#fff;font-family:"Montserrat Bold","Arial Black",sans-serif;font-size:28px;line-height:36px;margin-top:4px;text-align:left}@media(max-width:1279px){.banner-content .left .title[data-v-07b03db8]{max-width:286px}}.banner-content .left .description[data-v-07b03db8]{color:#fff;font-family:"Montserrat Regular","Verdana",sans-serif;font-size:16px;line-height:24px;max-width:590px;text-align:left;white-space:pre-line}.banner-content .left .flex-btns[data-v-07b03db8]{align-items:center;display:flex;flex-direction:row;gap:24px;justify-content:flex-start;margin-top:18px}@media(min-width:1024px){.banner-content .left .flex-btns[data-v-07b03db8]{align-items:center;display:flex;flex-direction:row;justify-content:flex-start}}@media(min-width:768px)and (max-width:1023px){.banner-content .left .flex-btns[data-v-07b03db8]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center}}@media(max-width:767px){.banner-content .left .flex-btns[data-v-07b03db8]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center}}@media(max-width:mobilepx){.banner-content .left .flex-btns[data-v-07b03db8]{align-items:flex-start;display:flex;flex-direction:column;justify-content:center}}.banner-content .left .flex-btns .buttons-size[data-v-07b03db8]{border-radius:20px;color:#fff;font-family:"Montserrat Bold","Arial Black",sans-serif;font-size:16px;height:40px;line-height:24px;max-height:none;min-height:0;min-height:auto;min-width:238px;text-align:center}@media(min-width:0px)and (max-width:767px){.banner-content .left .flex-btns .buttons-size[data-v-07b03db8]{max-width:none;width:100%}}.banner-content .left .flex-btns .primary-button[data-v-07b03db8]{background-color:#0084ff;padding:8px 20px}.banner-content .left .flex-btns .primary-button[data-v-07b03db8]:hover{background-color:#39a0ff}.banner-content .left .flex-btns .link-button[data-v-07b03db8]{background-color:transparent;color:#fff;min-width:auto;padding:8px 0 0}@media(min-width:0px)and (max-width:767px){.banner-content .left .flex-btns .link-button[data-v-07b03db8]{max-width:none;width:auto}}.banner-content .left .flex-btns .link-button[data-v-07b03db8]:hover:not(.no-hover):not(.loading){background-color:transparent;border-color:transparent}.banner-content .gif[data-v-07b03db8]{backface-visibility:hidden;-webkit-backface-visibility:hidden;display:grid;grid:[row] 1fr/[column] 1fr;height:auto;max-width:600px;order:1;position:relative;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;translate:0 0 0;width:50%;will-change:transform}@media(max-width:767px){.banner-content .gif[data-v-07b03db8]{padding:64px 24px 0;width:100%}}@media(max-width:mobilepx){.banner-content .gif[data-v-07b03db8]{padding:64px 24px 0;width:100%}}.banner-content .gif img[data-v-07b03db8]{animation:scaleUp-07b03db8 21s infinite;animation-timing-function:cubic-bezier(.17,.67,.65,1.27);grid-area:row/column;max-width:100%;-o-object-fit:contain;object-fit:contain;transform:scale(0);transform-origin:50% 58%}.banner-content .gif img[data-v-07b03db8]:first-of-type{animation-delay:0s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(2){animation-delay:1s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(3){animation-delay:2s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(4){animation-delay:3s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(5){animation-delay:4s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(6){animation-delay:5s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(7){animation-delay:6s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(8){animation-delay:7s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(9){animation-delay:8s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(10){animation-delay:9s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(11){animation-delay:10s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(12){animation-delay:11s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(13){animation-delay:12s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(14){animation-delay:13s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(15){animation-delay:14s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(16){animation-delay:15s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(17){animation-delay:16s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(18){animation-delay:17s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(19){animation-delay:18s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(20){animation-delay:19s}.banner-content .gif img[data-v-07b03db8]:nth-of-type(21){animation-delay:20s}@keyframes scaleUp-07b03db8{0%{opacity:1;transform:scale(.1)}1.5%,4.76%{opacity:1;transform:scale(1)}6.26%,to{opacity:0;transform:scale(.1)}}.breaker[data-v-07b03db8]{height:64px;position:absolute;top:-18px;width:100%;z-index:2}',""]),o.locals={},e.exports=o},5775:function(e,t,n){"use strict";var o=n(1789),r=n(1474),l=n(23),c=n(567),d={__name:"VisitorsHomepageFooter",setup:function(e){var t=Object(r.a)(),n=Object(l.k)();return{__sfc:!0,mixpanel:t,route:n,triggerMixpanelEvent:function(e,o){t.track("web_CreateAccountAttempt",{from:n.value.path,location:"enter_the_metaverse",section:"visitors_footer"}),o(e)},BreakerHorizontal:o.a,getFullWidthSizes:c.a}}},m=(n(4543),n(134)),component=Object(m.a)(d,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",{staticClass:"section-wrapper"},[t("div",{staticClass:"cubes-container"},[t("nuxt-img",{staticClass:"background-footer",attrs:{src:"/img/14_Home/visitors-homepage/footer-grid.webp",sizes:n.getFullWidthSizes(),alt:"",modifiers:{trim:"150"},loading:"lazy"}}),e._v(" "),t(n.BreakerHorizontal,{staticClass:"breaker"}),e._v(" "),t("nuxt-img",{staticClass:"cube",attrs:{src:"/img/14_Home/visitors-homepage/cube-a.svg",loading:"lazy",alt:""}}),e._v(" "),t("nuxt-img",{staticClass:"cube",attrs:{src:"/img/14_Home/visitors-homepage/cube-a.svg",loading:"lazy",alt:""}}),e._v(" "),t("nuxt-img",{staticClass:"cube",attrs:{src:"/img/14_Home/visitors-homepage/cube-b.svg",loading:"lazy",alt:""}}),e._v(" "),t("nuxt-img",{staticClass:"cube",attrs:{src:"/img/14_Home/visitors-homepage/cube-b.svg",loading:"lazy",alt:""}}),e._v(" "),t("nuxt-img",{staticClass:"cube",attrs:{src:"/img/14_Home/visitors-homepage/cube-c.svg",loading:"lazy",alt:""}}),e._v(" "),t("div",{staticClass:"text-container"},[t("h2",[e._v(e._s(e.$t("homepageForVisitors.footer.title")))]),e._v(" "),t("p",[e._v("\n        "+e._s(e.$t("homepageForVisitors.footer.text"))+"\n      ")]),e._v(" "),t("NuxtLink",{attrs:{custom:"",to:"/sign/?redirectTo=%2Fen%2F&createAccount=true"},scopedSlots:e._u([{key:"default",fn:function(o){var r=o.href,l=o.navigate;return[t("a",{staticClass:"buttons-size primary-button",attrs:{href:r},on:{click:function(e){return n.triggerMixpanelEvent(e,l)}}},[e._v("\n          "+e._s(e.$t("homepageForVisitors.footer.buttonCta"))+"\n        ")])]}}])})],1)],1)])}),[],!1,null,"22ee8e18",null);t.a=component.exports},5776:function(e,t,n){"use strict";n(570);var o=n(1520),r=n(1733),l=n(1582),c=n(8),d=n(1472),m=n(1491),f={components:{Carousel:r.default,CustomVideo:l.default},setup:function(){var e=Object(d.a)().locale,t=Object(m.a)(),n=Object(c.ref)([{logo:"/img/14_Home/visitors-homepage/logo/Snoop_Dogg.png",link:"/".concat(e.value,"/map/?lat=-80&lng=12&zoom=4&x=4&y=-79"),video:"https://cdn.sandbox.game/home/SnoopDogg_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/SnoopDogg_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/Paris.png",link:"/".concat(e.value,"/map/?lat=-34&lng=12&zoom=5&x=9&y=-33"),video:"https://cdn.sandbox.game/home/ParisHilton2_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/Paris2_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/SteveAoki.png",link:"/".concat(e.value,"/map/?lat=-87&lng=-1&zoom=4&x=-4&y=-87"),video:"https://cdn.sandbox.game/home/SteveAoki_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/SteveAoki_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/TWD.png",link:"/".concat(e.value,"/map/?lat=-26&lng=-42&zoom=4&x=-49&y=-23"),video:"https://cdn.sandbox.game/home/TWD_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/TWD_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/smurfs.png",link:"/".concat(e.value,"/map/?lat=-95&lng=-67&zoom=3&x=-72&y=-96"),video:"https://cdn.sandbox.game/home/Smurfs_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/Smurfs_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/Ubisoft.png",link:"/".concat(e.value,"/map/?lat=94&lng=-32&zoom=3&x=-50&y=96"),video:"https://cdn.sandbox.game/home/Ubisoft_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/Ubisoft_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/Warner_Music_Group.png",link:"/".concat(e.value,"/map/?lat=23&lng=-61&zoom=3&x=-62&y=13"),video:"https://cdn.sandbox.game/home/WMG_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/WMG_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/Playboy.png",link:"/".concat(e.value,"/map/?lat=-57&lng=-18&zoom=4&x=-22&y=-58"),video:"https://cdn.sandbox.game/home/Playboy_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/Playboy_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/A7X.png",link:"/".concat(e.value,"/map/?lat=52&lng=136&zoom=4&x=129&y=51"),video:"https://cdn.sandbox.game/home/AvengedSevenfold_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/AvengedSevenfold_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/CareBears.png",link:"/".concat(e.value,"/map/?lat=65&lng=-145&zoom=4&x=-151&y=66"),video:"https://cdn.sandbox.game/home/CareBears_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/CareBears_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/Atari.png",link:"/".concat(e.value,"/map/?lat=-96&lng=83&zoom=3&x=71&y=-96"),video:"https://cdn.sandbox.game/home/Atari_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/Atari_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/HKLOGO.png",link:"/".concat(e.value,"/map/?lat=157&lng=-50&zoom=5&x=-53&y=157"),video:"https://cdn.sandbox.game/home/HellsKitchen_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/HellsKitchen_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/deadmau5.png",link:"/".concat(e.value,"/map/?lat=163&lng=-59&zoom=5&x=-62&y=163"),video:"https://cdn.sandbox.game/home/Deadmau5_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/Deadmau5_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/blondish-logo.png",link:"/".concat(e.value,"/map/?lat=193&lng=36&zoom=5&x=34&y=193"),video:"https://cdn.sandbox.game/home/Blondish_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/Blondish_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/ledger-horizontal.png",link:"/".concat(e.value,"/map/?lat=80&lng=-12&zoom=5&x=-15&y=81"),video:"https://cdn.sandbox.game/home/Ledger_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/Ledger_placeholder.webp"},{logo:"/img/14_Home/visitors-homepage/logo/scmp.png",link:"/".concat(e.value,"/map/?lat=167&lng=82&zoom=3&x=73&y=168"),video:"https://cdn.sandbox.game/home/SouthChinaMorningPost_6seg-low.mp4",fallback:"/img/14_Home/visitors-homepage/fallback/SouthChinaMorningPost_placeholder.webp"}]),o=Object(c.ref)(0),r=Object(c.computed)((function(){return o.value}));function l(e,t){var video=document.getElementById("carrouselVideo".concat(e));video&&("play"===t?video.play():"pause"===t&&(video.pause(),video.currentTime=0))}function f(e){l(e,"play")}function v(e){l(e,"pause")}return{isActive:Object(c.computed)((function(){return function(e){return e===r.value}})),changeSlide:function(data){o.value=data.index;var e=(o.value+n.value.length-1)%n.value.length,t=(o.value+1)%n.value.length,r=document.getElementById("carrouselVideoContainer".concat(e)),l=document.getElementById("carrouselVideoContainer".concat(t));null==r||r.classList.remove("active"),null==l||l.classList.remove("active");var element=document.getElementById("carrouselVideoContainer".concat(o.value));null==element||element.classList.add("active"),window.innerWidth<1024&&(v(t),v(e),f(data.index))},pauseVideo:v,playVideo:f,activeIndex:r,partners:n,device:t}},methods:{getOptimizedVideoURL:o.a}},v=(n(4545),n(134)),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"section-title"},[t("h3",[e._v(e._s(e.$t("homepageForVisitors.partnersCarrousel.title")))])]),e._v(" "),t("Carousel",{staticClass:"carousel-style",attrs:{"slides-per-page":4,feather:64,"paginate-by-slide":"","active-index":e.activeIndex,"autoplay-delay":e.$device.isMobileOrTablet?0:2,gutter:24,"show-arrows":"",peek:e.$device.isMobileOrTablet?64:0,loop:!e.$device.isMobileOrTablet,responsive:[{maxWidth:1439,slidesPerPage:3},{maxWidth:1023,slidesPerPage:1}]},on:{change:e.changeSlide}},e._l(e.partners,(function(n,i){return t("div",{key:i,staticClass:"video-card",attrs:{index:i}},[t("NuxtLink",{staticClass:"video-container",class:{active:e.isActive(i)},attrs:{id:"carrouselVideoContaier".concat(i),to:n.link}},[t("CustomVideo",{attrs:{id:"carrouselVideo".concat(i),sources:[{src:e.getOptimizedVideoURL(n.video)}],width:"302",height:"220",inline:"",lazy:"",autoplay:e.device.isMobileOrTablet&&0===i,poster:n.fallback},on:{mouseenter:function(t){return e.playVideo(i)},mouseleave:function(t){return e.pauseVideo(i)}}}),e._v(" "),t("nuxt-img",{staticClass:"partner-logo",attrs:{src:n.logo,alt:"Partner Logo",height:"64",loading:"lazy"},on:{mouseenter:function(t){return e.playVideo(i)},mouseleave:function(t){return e.pauseVideo(i)}}})],1)],1)})),0)],1)}),[],!1,null,"189fa67c",null);t.a=component.exports},5777:function(e,t,n){"use strict";n(18),n(64);var o=n(1789),r=n(1629),l=n(8),c=n(1474),d=n(23),m=n(1473),f=n(1535),v=n(1472),h={__name:"LandBanner",setup:function(e){var t=Object(c.a)(),n=Object(d.k)();function h(e){t.track("web_buyLandClick",{from:n.value.path,location:"".concat(e,"_link"),section:"land_banner"})}var x=Object(l.ref)(0),y=Object(m.a)("map_landsales_enabled").enabled,w=Object(f.e)().landsaleHomeContent,_=Object(v.a)().t,k=Object(l.computed)((function(){return y.value&&w.value})),j=Object(l.computed)((function(){var e,t;return null!==(e=null===(t=w.value)||void 0===t?void 0:t.marketingURL)&&void 0!==e?e:""})),O=Object(l.computed)((function(){var e;return null===(e=w.value)||void 0===e?void 0:e.description})),H=Object(l.computed)((function(){var e;return null===(e=w.value)||void 0===e?void 0:e.principalBtn})),z=Object(l.computed)((function(){var e;return null===(e=w.value)||void 0===e?void 0:e.secondaryBtn})),C=Object(l.computed)((function(){return k.value?O.value:_("homepageForVisitors.landBanner.default.description")})),B=Object(l.computed)((function(){return k.value?H.value:_("homepageForVisitors.landBanner.default.principalBtn")})),M=Object(l.computed)((function(){return k.value?"/landsale":"/map?mode=buyLand"})),A=Object(l.computed)((function(){return k.value?z.value:_("homepageForVisitors.landBanner.default.secondaryBtn")})),P=Object(l.computed)((function(){return k.value?j.value:"https://www.sandbox.game/en/blog/what-is-metaverse-land-a-guide-to-virtual-real-estate/3363/"}));function V(){x.value=Math.atan(32/window.innerWidth)*(180/Math.PI)}return Object(l.onMounted)((function(){V(),window.onresize=function(){V()}})),{__sfc:!0,mixpanel:t,route:n,generateEvent:h,triggerMixpanelEventAndNavigate:function(e,t,n){h(n),t(e)},triggerMixpanelEvent:function(e){h(e)},gifImgs:["/img/14_Home/visitors-homepage/lands/atari_land.webp","/img/14_Home/visitors-homepage/lands/turkish_land.webp","/img/14_Home/visitors-homepage/lands/beach_land.webp","/img/14_Home/visitors-homepage/lands/carebears_land.webp","/img/14_Home/visitors-homepage/lands/cipriani_land.webp","/img/14_Home/visitors-homepage/lands/deadmouse_land.webp","/img/14_Home/visitors-homepage/lands/fashionstore_land.webp","/img/14_Home/visitors-homepage/lands/faze_land.webp","/img/14_Home/visitors-homepage/lands/gamingconcert_land.webp","/img/14_Home/visitors-homepage/lands/hellkitchen_land.webp","/img/14_Home/visitors-homepage/lands/madballs_land.webp","/img/14_Home/visitors-homepage/lands/parishilton_land.webp","/img/14_Home/visitors-homepage/lands/parking_land.webp","/img/14_Home/visitors-homepage/lands/playboy_land.webp","/img/14_Home/visitors-homepage/lands/rabbids_land.webp","/img/14_Home/visitors-homepage/lands/smurfs_land.webp","/img/14_Home/visitors-homepage/lands/snoopdog_land.webp","/img/14_Home/visitors-homepage/lands/sportland_land.webp","/img/14_Home/visitors-homepage/lands/tonyhawk_land.webp","/img/14_Home/visitors-homepage/lands/twd_land.webp","/img/14_Home/visitors-homepage/lands/wmg_land.webp"],angle:x,landsaleIsEnabled:y,landsaleHomeContent:w,t:_,showLandsaleTexts:k,marketingURL:j,description:O,principalBtn:H,secondaryBtn:z,descriptionKey:C,principalBtnKey:B,principalBtnLink:M,secondaryBtnKey:A,secondaryBtnLink:P,makeBreakerDiagonal:V,BreakerHorizontal:o.a,ExternalLink:r.default}}},x=(n(4553),n(134)),component=Object(x.a)(h,(function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t("div",[t(n.BreakerHorizontal,{staticClass:"breaker",style:{transform:"rotate(".concat(n.angle,"deg)")}}),e._v(" "),t("section",{staticClass:"polygonal-background"},[t("div",{staticClass:"banner-content"},[t("div",{staticClass:"left"},[t("p",{staticClass:"small-title"},[e._v("\n          "+e._s(e.$t("homepageForVisitors.landBanner.smallTitle"))+"\n        ")]),e._v(" "),t("h3",{staticClass:"title"},[e._v("\n          "+e._s(e.$t("homepageForVisitors.landBanner.title"))+"\n        ")]),e._v(" "),t("p",{staticClass:"description"},[e._v("\n          "+e._s(n.descriptionKey)+"\n        ")]),e._v(" "),t("div",{staticClass:"flex-btns"},[t("NuxtLink",{attrs:{custom:"",to:n.principalBtnLink},scopedSlots:e._u([{key:"default",fn:function(o){var r=o.href,l=o.navigate;return[t("a",{staticClass:"buttons-size primary-button",attrs:{href:r},on:{click:function(e){return n.triggerMixpanelEventAndNavigate(e,l,"buy_land")}}},[e._v("\n              "+e._s(n.principalBtnKey)+"\n            ")])]}}])}),e._v(" "),t(n.ExternalLink,{staticClass:"buttons-size link-button",attrs:{href:n.secondaryBtnLink},on:{click:function(e){return n.triggerMixpanelEvent("learn_more")}}},[e._v("\n            "+e._s(n.secondaryBtnKey)+"\n          ")])],1)]),e._v(" "),t("aside",{staticClass:"gif"},e._l(n.gifImgs,(function(image,e){return t("nuxt-img",{key:e,attrs:{loading:"lazy",src:image,sizes:"deskS:600px tab:417px mob:342px"}})})),1)])])],1)}),[],!1,null,"07b03db8",null);t.a=component.exports}}]);