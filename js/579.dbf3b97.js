(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{234:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return v}));var r,o=10;function c(t){return h(t).segments_count}function d(t){h(t).segments_count+=1}function l(t){h(t).records_count+=1}function f(t,e){h(t).segments_total_raw_size+=e}function v(t){return null==r?void 0:r.get(t)}function h(t){var e;return r||(r=new Map),r.has(t)?e=r.get(t):(e={records_count:0,segments_count:0,segments_total_raw_size:0},r.set(t,e),r.size>o&&function(){if(!r)return;if(r.keys)r.delete(r.keys().next().value);else{var t=!0;r.forEach((function(e,n){t&&(r.delete(n),t=!1)}))}}()),e}},407:function(t,e,n){"use strict";n.d(e,"b",(function(){return mt})),n.d(e,"a",(function(){return I}));var r=n(26),o=n(61),c=n(47),d=n(34);function l(source,data){return{data:Object(d.b)({source:source},data),type:c.e.IncrementalSnapshot,timestamp:Object(r.n)()}}var f=n(167),v=n(32),h=1e5;function m(t,e){var n=Object(o.d)(t),r=n?m(n,e):e;return y(w(t),r)}function y(t,e){switch(e){case v.d.HIDDEN:case v.d.IGNORE:return e}switch(t){case v.d.ALLOW:case v.d.MASK:case v.d.MASK_USER_INPUT:case v.d.HIDDEN:case v.d.IGNORE:return t;default:return e}}function w(t){if(Object(o.j)(t)){var e=t.getAttribute(v.e);if("BASE"===t.tagName)return v.d.ALLOW;if("INPUT"===t.tagName){var n=t;if("password"===n.type||"email"===n.type||"tel"===n.type)return v.d.MASK;if("hidden"===n.type)return v.d.MASK;var r=n.getAttribute("autocomplete");if(r&&0===r.indexOf("cc-"))return v.d.MASK}return e===v.g||t.classList.contains(v.k)?v.d.HIDDEN:e===v.h||t.classList.contains(v.l)?v.d.MASK:e===v.i||t.classList.contains(v.m)?v.d.MASK_USER_INPUT:e===v.f||t.classList.contains(v.j)?v.d.ALLOW:function(element){if("SCRIPT"===element.nodeName)return!0;if("LINK"===element.nodeName){var t=r("rel");return/preload|prefetch/i.test(t)&&"script"===r("as")||"shortcut icon"===t||"icon"===t}if("META"===element.nodeName){var e=r("name"),n=(t=r("rel"),r("property"));return/^msapplication-tile(image|color)$/.test(e)||"application-name"===e||"icon"===t||"apple-touch-icon"===t||"shortcut icon"===t||"keywords"===e||"description"===e||/^(og|twitter|fb):/.test(n)||/^(og|twitter):/.test(e)||"pinterest"===e||"robots"===e||"googlebot"===e||"bingbot"===e||element.hasAttribute("http-equiv")||"author"===e||"generator"===e||"framework"===e||"publisher"===e||"progid"===e||/^article:/.test(n)||/^product:/.test(n)||"google-site-verification"===e||"yandex-verification"===e||"csrf-token"===e||"p:domain_verify"===e||"verify-v1"===e||"verification"===e||"shopify-checkout-api-token"===e}function r(t){return(element.getAttribute(t)||"").toLowerCase()}return!1}(t)?v.d.IGNORE:void 0}}function O(t,e){switch(e){case v.d.MASK:case v.d.HIDDEN:case v.d.IGNORE:return!0;case v.d.MASK_USER_INPUT:return Object(o.m)(t)?S(t.parentNode):S(t);default:return!1}}function S(t){if(!t||t.nodeType!==t.ELEMENT_NODE)return!1;var element=t;if("INPUT"===element.tagName)switch(element.type){case"button":case"color":case"reset":case"submit":return!1}return!!v.c[element.tagName]}var N=function(text){return text.replace(/\S/g,"x")};function E(t,e,n){var r,o=null===(r=t.parentElement)||void 0===r?void 0:r.tagName,c=t.textContent||"";if(!e||c.trim()){var d=n,l="STYLE"===o||void 0;if("SCRIPT"===o)c=v.b;else if(d===v.d.HIDDEN)c=v.b;else if(O(t,d)&&!l)if("DATALIST"===o||"SELECT"===o||"OPTGROUP"===o){if(!c.trim())return}else c="OPTION"===o?v.b:N(c);return c}}var C=new WeakMap;function T(t){return C.has(t)}function I(t){return C.get(t)}function M(element,t){var e=element.tagName,n=element.value;if(O(element,t)){var r=element.type;if("INPUT"===e&&("button"===r||"submit"===r||"reset"===r))return n;if(!n||"OPTION"===e)return;return v.b}return"OPTION"===e||"SELECT"===e?element.value:"INPUT"===e||"TEXTAREA"===e?n:void 0}var L=/url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm,_=/^[A-Za-z]+:|^\/\//,R=/^data:.*,/i;function j(t,e){return t.replace(L,(function(t,n,r,o,c,d){var l=r||c||d;if(!e||!l||_.test(l)||R.test(l))return t;var v=n||o||"";return"url(".concat(v).concat(function(t,e){try{return Object(f.a)(t,e).href}catch(e){return t}}(l,e)).concat(v,")")}))}var D=/[^a-z1-6-_]/;function x(t){var e=t.toLowerCase().trim();return D.test(e)?"div":e}function A(t){if(void 0!==t&&0!==t.length)return t.map((function(t){var e=t.cssRules||t.rules;return{cssRules:Array.from(e,(function(t){return t.cssText})),disabled:t.disabled||void 0,media:t.media.length>0?Array.from(t.media):void 0}}))}var P=n(146);function k(element,t,e,n){if(t===v.d.HIDDEN)return null;var r=element.getAttribute(e);if(t===v.d.MASK&&e!==v.e&&!o.a.includes(e)&&e!==n.actionNameAttribute){var c=element.tagName;switch(e){case"title":case"alt":case"placeholder":return v.b}if(!("IMG"!==c&&"SOURCE"!==c||"src"!==e&&"srcset"!==e))return v.a;if("A"===c&&"href"===e)return v.b;if(r&&Object(d.l)(e,"data-"))return v.b}return r&&"string"==typeof r&&r.length>h&&"data:"===r.slice(0,5)?"data:truncated":r}function V(t){if(!t)return null;var e;try{e=t.rules||t.cssRules}catch(t){}return e?j(Array.from(e,F).join(""),t.href):null}function F(t){return function(t){return"styleSheet"in t}(t)&&V(t.styleSheet)||t.cssText}function z(t,e){var n=function(t,e){switch(t.nodeType){case t.DOCUMENT_NODE:return function(t,e){return{type:c.d.Document,childNodes:U(t,e),adoptedStyleSheets:A(t.adoptedStyleSheets)}}(t,e);case t.DOCUMENT_FRAGMENT_NODE:return function(element,t){var e=[];element.childNodes.length&&(e=U(element,t));var n=Object(o.l)(element);n&&t.serializationContext.shadowRootsController.addShadowRoot(element);return{type:c.d.DocumentFragment,childNodes:e,isShadowRoot:n,adoptedStyleSheets:n?A(element.adoptedStyleSheets):void 0}}(t,e);case t.DOCUMENT_TYPE_NODE:return n=t,{type:c.d.DocumentType,name:n.name,publicId:n.publicId,systemId:n.systemId};case t.ELEMENT_NODE:return function(element,t){var e,n=x(element.tagName),r=(f=element,"svg"===f.tagName||f instanceof SVGElement||void 0),l=y(w(element),t.parentNodePrivacyLevel);var f;if(l===v.d.HIDDEN){var h=element.getBoundingClientRect(),m=h.width,S=h.height;return{type:c.d.Element,tagName:n,attributes:(e={rr_width:"".concat(m,"px"),rr_height:"".concat(S,"px")},e[v.e]=v.g,e),childNodes:[],isSVG:r}}if(l===v.d.IGNORE)return;var N=function(element,t,e){var n;if(t===v.d.HIDDEN)return{};for(var r={},o=x(element.tagName),c=element.ownerDocument,i=0;i<element.attributes.length;i+=1){var d=element.attributes.item(i).name,l=k(element,t,d,e.configuration);null!==l&&(r[d]=l)}if(element.value&&("textarea"===o||"select"===o||"option"===o||"input"===o)){var f=M(element,t);void 0!==f&&(r.value=f)}if("option"===o&&t===v.d.ALLOW){var h=element;h.selected&&(r.selected=h.selected)}if("link"===o){var m,y=Array.from(c.styleSheets).find((function(s){return s.href===element.href}));(m=V(y))&&y&&!Object(P.d)(P.a.DISABLE_REPLAY_INLINE_CSS)&&(r._cssText=m)}"style"===o&&element.sheet&&!(element.innerText||element.textContent||"").trim().length&&(m=V(element.sheet))&&(r._cssText=m);var w,S,N=element;if("input"!==o||"radio"!==N.type&&"checkbox"!==N.type||(t===v.d.ALLOW?r.checked=!!N.checked:O(N,t)&&delete r.checked),"audio"===o||"video"===o){var E=element;r.rr_mediaState=E.paused?"paused":"played"}var C=e.serializationContext;switch(C.status){case 0:w=Math.round(element.scrollTop),S=Math.round(element.scrollLeft),(w||S)&&C.elementsScrollPositions.set(element,{scrollTop:w,scrollLeft:S});break;case 1:C.elementsScrollPositions.has(element)&&(w=(n=C.elementsScrollPositions.get(element)).scrollTop,S=n.scrollLeft)}return S&&(r.rr_scrollLeft=S),w&&(r.rr_scrollTop=w),r}(element,l,t),E=[];if(element.childNodes.length){E=U(element,t.parentNodePrivacyLevel===l&&t.ignoreWhiteSpace===("head"===n)?t:Object(d.b)({},t,{parentNodePrivacyLevel:l,ignoreWhiteSpace:"head"===n}))}if(Object(o.k)(element)){var C=z(element.shadowRoot,t);null!==C&&E.push(C)}return{type:c.d.Element,tagName:n,attributes:N,childNodes:E,isSVG:r}}(t,e);case t.TEXT_NODE:return function(t,e){var n,r=null===(n=t.parentElement)||void 0===n?void 0:n.tagName,o=E(t,e.ignoreWhiteSpace||!1,e.parentNodePrivacyLevel);if(void 0===o)return;return{type:c.d.Text,textContent:o,isStyle:"STYLE"===r||void 0}}(t,e);case t.CDATA_SECTION_NODE:return{type:c.d.CDATA,textContent:""}}var n}(t,e);if(!n)return null;var r=I(t)||H++,l=n;return l.id=r,function(t,e){C.set(t,e)}(t,r),e.serializedNodeIds&&e.serializedNodeIds.add(r),l}var H=1;function U(t,e){var n=[];return t.childNodes.forEach((function(t){var r=z(t,e);r&&n.push(r)})),n}function G(t,e,n){return z(t,{serializationContext:n,parentNodePrivacyLevel:e.defaultPrivacyLevel,configuration:e})}var B=n(80),W=n(98),Y=n(291);function K(t){return Boolean(t.changedTouches)}function X(t){return!0===t.composed&&Object(o.k)(t.target)?t.composedPath()[0]:t.target}var J=function(t,e){var n=window.visualViewport,r={layoutViewportX:t,layoutViewportY:e,visualViewportX:t,visualViewportY:e};return n?(!function(t){return Math.abs(t.pageTop-t.offsetTop-window.scrollY)>25||Math.abs(t.pageLeft-t.offsetLeft-window.scrollX)>25}(n)?(r.visualViewportX=Math.round(t-n.offsetLeft),r.visualViewportY=Math.round(e-n.offsetTop)):(r.layoutViewportX=Math.round(t+n.offsetLeft),r.layoutViewportY=Math.round(e+n.offsetTop)),r):r},Z=function(t){return{scale:t.scale,offsetLeft:t.offsetLeft,offsetTop:t.offsetTop,pageLeft:t.pageLeft,pageTop:t.pageTop,height:t.height,width:t.width}},$=50;function Q(t){var e=K(t)?t.changedTouches[0]:t,n=e.clientX,r=e.clientY;if(window.visualViewport){var o=J(n,r);n=o.visualViewportX,r=o.visualViewportY}if(Number.isFinite(n)&&Number.isFinite(r))return{x:n,y:r};t.isTrusted&&Object(Y.b)("mouse/touch event without x/y")}var tt,et=100;var nt=((tt={}).pointerup=c.c.MouseUp,tt.mousedown=c.c.MouseDown,tt.click=c.c.Click,tt.contextmenu=c.c.ContextMenu,tt.dblclick=c.c.DblClick,tt.focus=c.c.Focus,tt.blur=c.c.Blur,tt.touchstart=c.c.TouchStart,tt.touchend=c.c.TouchEnd,tt);var ot=n(168);function it(t,e,n){void 0===n&&(n=document);var r,o=t.defaultPrivacyLevel,c=new WeakMap,l=n!==document,f=Object(W.b)(t,n,l?["change"]:["input","change"],(function(t){var e=X(t);(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&y(e)}),{capture:!0,passive:!0}).stop;if(l)r=B.a;else{var h=[Object(ot.c)(HTMLInputElement.prototype,"value",y),Object(ot.c)(HTMLInputElement.prototype,"checked",y),Object(ot.c)(HTMLSelectElement.prototype,"value",y),Object(ot.c)(HTMLTextAreaElement.prototype,"value",y),Object(ot.c)(HTMLSelectElement.prototype,"selectedIndex",y)];r=function(){h.forEach((function(t){return t.stop()}))}}return function(){r(),f()};function y(t){var e=m(t,o);if(e!==v.d.HIDDEN){var n,r=t.type;if("radio"===r||"checkbox"===r){if(O(t,e))return;n={isChecked:t.checked}}else{var c=M(t,e);if(void 0===c)return;n={text:c}}w(t,n);var l=t.name;"radio"===r&&l&&t.checked&&Object(d.h)(document.querySelectorAll('input[type="radio"][name="'.concat(Object(d.c)(l),'"]')),(function(e){e!==t&&w(e,{isChecked:!1})}))}}function w(t,n){if(T(t)){var r=c.get(t);r&&r.text===n.text&&r.isChecked===n.isChecked||(c.set(t,n),e(Object(d.b)({id:I(t)},n)))}}}function at(t){for(var path=[],e=t;e.parentRule;){var n=Array.from(e.parentRule.cssRules).indexOf(e);path.unshift(n),e=e.parentRule}if(e.parentStyleSheet){var r=Array.from(e.parentStyleSheet.cssRules).indexOf(e);return path.unshift(r),path}}var ut=200;var ct=n(37),st=100;function lt(t){var e=B.a,n=[];function r(){e(),t(n),n=[]}return{addMutations:function(t){0===n.length&&(e=function(t,e){if(window.requestIdleCallback&&window.cancelIdleCallback){var n=window.requestIdleCallback(Object(ct.c)(t),e);return function(){return window.cancelIdleCallback(n)}}var r=window.requestAnimationFrame(Object(ct.c)(t));return function(){return window.cancelAnimationFrame(r)}}(r,{timeout:st})),n.push.apply(n,t)},flush:r,stop:function(){e()}}}function ft(t,e,n,r){var c=Object(o.c)();if(!c)return{stop:B.a,flush:B.a};var d=lt((function(c){!function(t,e,n,r,c){t.filter((function(t){return"childList"===t.type})).forEach((function(t){t.removedNodes.forEach((function(t){pt(t,r.removeShadowRoot)}))}));var d=t.filter((function(t){return c.contains(t.target)&&function(t){for(var e=t;e;){if(!T(e)&&!Object(o.l)(e))return!1;e=Object(o.d)(e)}return!0}(t.target)&&m(t.target,n.defaultPrivacyLevel)!==v.d.HIDDEN})),l=function(t,e,n){for(var r=new Set,c=new Map,d=function(t){t.addedNodes.forEach((function(t){r.add(t)})),t.removedNodes.forEach((function(e){r.has(e)||c.set(e,t.target),r.delete(e)}))},l=0,f=t;l<f.length;l++){d(f[l])}var h=Array.from(r);y=h,y.sort((function(a,b){var t=a.compareDocumentPosition(b);return t&Node.DOCUMENT_POSITION_CONTAINED_BY?-1:t&Node.DOCUMENT_POSITION_CONTAINS||t&Node.DOCUMENT_POSITION_FOLLOWING?1:t&Node.DOCUMENT_POSITION_PRECEDING?-1:0}));var y;for(var w=new Set,O=[],S=0,N=h;S<N.length;S++){var E=N[S];if(!R(E)){var C=m(E.parentNode,e.defaultPrivacyLevel);if(C!==v.d.HIDDEN&&C!==v.d.IGNORE){var M=z(E,{serializedNodeIds:w,parentNodePrivacyLevel:C,serializationContext:{status:2,shadowRootsController:n},configuration:e});if(M){var L=Object(o.d)(E);O.push({nextId:j(E),parentId:I(L),node:M})}}}}var _=[];return c.forEach((function(t,e){T(e)&&_.push({parentId:I(t),id:I(e)})})),{adds:O,removes:_,hasBeenSerialized:R};function R(t){return T(t)&&w.has(I(t))}function j(t){for(var e=t.nextSibling;e;){if(T(e))return I(e);e=e.nextSibling}return null}}(d.filter((function(t){return"childList"===t.type})),n,r),f=l.adds,h=l.removes,y=l.hasBeenSerialized,w=function(t,e){for(var n,r=[],c=new Set,d=t.filter((function(t){return!c.has(t.target)&&(c.add(t.target),!0)})),l=0,f=d;l<f.length;l++){var h=f[l];if(h.target.textContent!==h.oldValue){var y=m(Object(o.d)(h.target),e.defaultPrivacyLevel);y!==v.d.HIDDEN&&y!==v.d.IGNORE&&r.push({id:I(h.target),value:null!==(n=E(h.target,!1,y))&&void 0!==n?n:null})}}return r}(d.filter((function(t){return"characterData"===t.type&&!y(t.target)})),n),O=function(t,e){for(var n=[],r=new Map,o=t.filter((function(t){var e=r.get(t.target);return!(null==e?void 0:e.has(t.attributeName))&&(e?e.add(t.attributeName):r.set(t.target,new Set([t.attributeName])),!0)})),c=new Map,d=0,l=o;d<l.length;d++){var f=l[d];if(f.target.getAttribute(f.attributeName)!==f.oldValue){var v=m(f.target,e.defaultPrivacyLevel),h=k(f.target,v,f.attributeName,e),y=void 0;if("value"===f.attributeName){var w=M(f.target,v);if(void 0===w)continue;y=w}else y="string"==typeof h?h:null;var O=c.get(f.target);O||(O={id:I(f.target),attributes:{}},n.push(O),c.set(f.target,O)),O.attributes[f.attributeName]=y}}return n}(d.filter((function(t){return"attributes"===t.type&&!y(t.target)})),n);if(!(w.length||O.length||h.length||f.length))return;e({adds:f,removes:h,texts:w,attributes:O})}(c.concat(l.takeRecords()),t,e,n,r)})),l=new c(Object(ct.c)(d.addMutations));return l.observe(r,{attributeOldValue:!0,attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0}),{stop:function(){l.disconnect(),d.stop()},flush:function(){d.flush()}}}function pt(t,e){Object(o.k)(t)&&e(t.shadowRoot),Object(o.b)(t).forEach((function(t){return pt(t,e)}))}function vt(t,e){var n=function(){var t=new WeakMap,e=1;return{getIdForEvent:function(n){return t.has(n)||t.set(n,e++),t.get(n)}}}(),r=ft(e.mutationCb,e.configuration,e.shadowRootsController,document),f=function(t,e){var n=Object(B.b)((function(t){var n=X(t);if(T(n)){var r=Q(t);if(!r)return;var o={id:I(n),timeOffset:0,x:r.x,y:r.y};e([o],K(t)?c.a.TouchMove:c.a.MouseMove)}}),$,{trailing:!1}).throttled;return Object(W.b)(t,document,["mousemove","touchmove"],n,{capture:!0,passive:!0}).stop}(t,e.mousemoveCb),h=function(t,e,n){return Object(W.b)(t,document,Object.keys(nt),(function(r){var o=X(r);if(m(o,t.defaultPrivacyLevel)!==v.d.HIDDEN&&T(o)){var f,h=I(o),y=nt[r.type];if(y!==c.c.Blur&&y!==c.c.Focus){var w=Q(r);if(!w)return;f={id:h,type:y,x:w.x,y:w.y}}else f={id:h,type:y};var O=Object(d.b)({id:n.getIdForEvent(r)},l(c.a.MouseInteraction,f));e(O)}}),{capture:!0,passive:!0}).stop}(t,e.mouseInteractionCb,n),y=function(t,e,n,r){var c=Object(B.b)((function(t){var c=X(t);if(c&&m(c,n)!==v.d.HIDDEN&&T(c)){var d=I(c),l=c===document?{scrollTop:Object(o.f)(),scrollLeft:Object(o.e)()}:{scrollTop:Math.round(c.scrollTop),scrollLeft:Math.round(c.scrollLeft)};r.set(c,l),e({id:d,x:l.scrollLeft,y:l.scrollTop})}}),et).throttled;return Object(W.a)(t,document,"scroll",c,{capture:!0,passive:!0}).stop}(t,e.scrollCb,e.configuration.defaultPrivacyLevel,e.elementsScrollPositions),w=function(t,e){return Object(o.i)(t).subscribe(e).unsubscribe}(t,e.viewportResizeCb),O=it(t,e.inputCb),S=function(t,e,n){return Object(W.b)(t,document,["play","pause"],(function(t){var r=X(t);r&&m(r,n)!==v.d.HIDDEN&&T(r)&&e({id:I(r),type:"play"===t.type?c.b.Play:c.b.Pause})}),{capture:!0,passive:!0}).stop}(t,e.mediaInteractionCb,e.configuration.defaultPrivacyLevel),N=function(t){function e(t,e){t&&T(t.ownerNode)&&e(I(t.ownerNode))}var n=[Object(ot.b)(CSSStyleSheet.prototype,"insertRule",{before:function(n,r){e(this,(function(e){return t({id:e,adds:[{rule:n,index:r}]})}))}}),Object(ot.b)(CSSStyleSheet.prototype,"deleteRule",{before:function(n){e(this,(function(e){return t({id:e,removes:[{index:n}]})}))}})];function r(r){n.push(Object(ot.b)(r.prototype,"insertRule",{before:function(n,r){var o=this;e(this.parentStyleSheet,(function(e){var path=at(o);path&&(path.push(r||0),t({id:e,adds:[{rule:n,index:path}]}))}))}}),Object(ot.b)(r.prototype,"deleteRule",{before:function(n){var r=this;e(this.parentStyleSheet,(function(e){var path=at(r);path&&(path.push(n),t({id:e,removes:[{index:path}]}))}))}}))}return"undefined"!=typeof CSSGroupingRule?r(CSSGroupingRule):(r(CSSMediaRule),r(CSSSupportsRule)),function(){return n.forEach((function(t){return t.stop()}))}}(e.styleSheetCb),E=function(t,e){return Object(W.b)(t,window,["focus","blur"],(function(){e({has_focus:document.hasFocus()})})).stop}(t,e.focusCb),C=function(t,e){var n=window.visualViewport;if(!n)return B.a;var r=Object(B.b)((function(){e(Z(n))}),ut,{trailing:!1}),o=r.throttled,c=r.cancel,d=Object(W.b)(t,n,["resize","scroll"],o,{capture:!0,passive:!0}).stop;return function(){d(),c()}}(t,e.visualViewportResizeCb),M=function(t,e,n){return t.subscribe(10,(function(data){var t,r,o;"action"===data.rawRumEvent.type&&"click"===data.rawRumEvent.action.type&&(null===(r=null===(t=data.rawRumEvent.action.frustration)||void 0===t?void 0:t.type)||void 0===r?void 0:r.length)&&"events"in data.domainContext&&(null===(o=data.domainContext.events)||void 0===o?void 0:o.length)&&e({timestamp:data.rawRumEvent.date,type:c.e.FrustrationRecord,data:{frustrationTypes:data.rawRumEvent.action.frustration.type,recordIds:data.domainContext.events.map((function(t){return n.getIdForEvent(t)}))}})})).unsubscribe}(e.lifeCycle,e.frustrationCb,n);return{flush:function(){r.flush()},stop:function(){r.stop(),f(),h(),y(),w(),O(),S(),N(),E(),C(),M()}}}var ht=function(t,e){var n=e.mutationCb,r=e.inputCb,o=new Map,c={addShadowRoot:function(e){var d=ft(n,t,c,e),l=d.stop,f=d.flush,v=it(t,r,e);o.set(e,{flush:f,stop:function(){l(),v()}})},removeShadowRoot:function(t){var e=o.get(t);e&&(e.stop(),o.delete(t))},stop:function(){o.forEach((function(t){return(0,t.stop)()}))},flush:function(){o.forEach((function(t){return(0,t.flush)()}))}};return c};function mt(t){var e=t.emit,n=t.configuration;if(!e)throw new Error("emit function is required");var d,f=(d=new WeakMap,{set:function(element,t){(element!==document||document.scrollingElement)&&d.set(element===document?document.scrollingElement:element,t)},get:function(element){return d.get(element)},has:function(element){return d.has(element)}}),v=function(t){e(l(c.a.Mutation,t))},h=function(s){return e(l(c.a.Input,s))},m=ht(n,{mutationCb:v,inputCb:h}),y=function(t,d){void 0===t&&(t=Object(r.n)()),void 0===d&&(d={status:0,elementsScrollPositions:f,shadowRootsController:m});var l=Object(o.h)(),v=l.width,h=l.height;e({data:{height:h,href:window.location.href,width:v},type:c.e.Meta,timestamp:t}),e({data:{has_focus:document.hasFocus()},type:c.e.Focus,timestamp:t}),e({data:{node:G(document,n,d),initialOffset:{left:Object(o.e)(),top:Object(o.f)()}},type:c.e.FullSnapshot,timestamp:t}),window.visualViewport&&e({data:Z(window.visualViewport),type:c.e.VisualViewport,timestamp:t})};y();var w=vt(n,{lifeCycle:t.lifeCycle,configuration:n,elementsScrollPositions:f,inputCb:h,mediaInteractionCb:function(p){return e(l(c.a.MediaInteraction,p))},mouseInteractionCb:function(t){return e(t)},mousemoveCb:function(t,source){return e(l(source,{positions:t}))},mutationCb:v,scrollCb:function(p){return e(l(c.a.Scroll,p))},styleSheetCb:function(t){return e(l(c.a.StyleSheetRule,t))},viewportResizeCb:function(t){return e(l(c.a.ViewportResize,t))},frustrationCb:function(t){return e(t)},focusCb:function(data){return e({data:data,type:c.e.Focus,timestamp:Object(r.n)()})},visualViewportResizeCb:function(data){e({data:data,type:c.e.VisualViewport,timestamp:Object(r.n)()})},shadowRootsController:m}),O=w.stop,S=w.flush;function N(){m.flush(),S()}return{stop:function(){m.stop(),O()},takeSubsequentFullSnapshot:function(t){N(),y(t,{shadowRootsController:m,status:1,elementsScrollPositions:f})},flushMutations:N,shadowRootsController:m}}},47:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return l}));var r={FullSnapshot:2,IncrementalSnapshot:3,Meta:4,Focus:6,ViewEnd:7,VisualViewport:8,FrustrationRecord:9},o={Document:0,DocumentType:1,Element:2,Text:3,CDATA:4,DocumentFragment:11},c={Mutation:0,MouseMove:1,MouseInteraction:2,Scroll:3,ViewportResize:4,Input:5,TouchMove:6,MediaInteraction:7,StyleSheetRule:8},d={MouseUp:0,MouseDown:1,Click:2,ContextMenu:3,DblClick:4,Focus:5,Blur:6,TouchStart:7,TouchEnd:9},l={Play:0,Pause:1}},545:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(833),o=n(166),c=n(61),d=n(818),l=n(819),f=Object(l.a)(d.a),v=Object(c.n)(c.o,f);Object(r.a)(Object(o.a)(),"DD_RUM",v)},558:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return y}));var r=n(26),o=n(810),c=n(62),d=n(34);var l=n(802),f=n(47),v=n(234),h=function(){function t(t,e,n){this.encoder=t;var r=e.view.id;this.metadata=Object(d.b)({start:1/0,end:-1/0,creation_reason:n,records_count:0,has_full_snapshot:!1,index_in_view:v.e(r),source:"browser"},e),v.b(r)}return t.prototype.addRecord=function(t,e){var n;this.metadata.start=Math.min(this.metadata.start,t.timestamp),this.metadata.end=Math.max(this.metadata.end,t.timestamp),this.metadata.records_count+=1,(n=this.metadata).has_full_snapshot||(n.has_full_snapshot=t.type===f.e.FullSnapshot),Object(l.a)("record",{record:t,segment:this.metadata}),v.a(this.metadata.view.id);var r=1===this.metadata.records_count?'{"records":[':",";this.encoder.write(r+JSON.stringify(t),e)},t.prototype.flush=function(t){var e=this;if(0===this.metadata.records_count)throw new Error("Empty segment flushed");this.encoder.write("],".concat(JSON.stringify(this.metadata).slice(1),"\n"),(function(){v.c(e.metadata.view.id,e.encoder.rawBytesCount),t(e.metadata)})),this.encoder.reset()},t}(),m=30*r.c,y=6e4;function w(t,e,n,r,l,f){return function(t,e,n,r){var l={status:0,nextSegmentCreationReason:"init"},f=t.subscribe(2,(function(){w("view_change")})).unsubscribe,v=t.subscribe(9,(function(t){w(t.reason)})).unsubscribe;function w(t){1===l.status&&(l.segment.flush((function(e){var c=function(data,t,e){var n=new FormData;n.append("segment",new Blob([data],{type:"application/octet-stream"}),"".concat(t.session.id,"-").concat(t.start));var r=Object(d.b)({raw_segment_size:e,compressed_segment_size:data.byteLength},t),o=JSON.stringify(r);return n.append("event",new Blob([o],{type:"application/json"})),{data:n,bytesCount:data.byteLength}}(r.encodedBytes,e,r.rawBytesCount);Object(o.c)(t)?n.sendOnExit(c):n.send(c)})),Object(c.b)(l.expirationTimeoutId)),l="stop"!==t?{status:0,nextSegmentCreationReason:t}:{status:2}}return{addRecord:function(t){if(2!==l.status){if(0===l.status){var n=e();if(!n)return;l={status:1,segment:new h(r,n,l.nextSegmentCreationReason),expirationTimeoutId:Object(c.d)((function(){w("segment_duration_limit")}),m)}}var o=l.segment;o.addRecord(t,(function(){1===l.status&&l.segment===o&&r.encodedBytesCount>y&&w("segment_bytes_limit")}))}},stop:function(){w("stop"),f(),v()}}}(t,(function(){return function(t,e,n){var r=e.findTrackedSession(),o=n.findView();if(!r||!o)return;return{application:{id:t},session:{id:r.id},view:{id:o.id}}}(e.applicationId,n,r)}),l,f)}}}]);