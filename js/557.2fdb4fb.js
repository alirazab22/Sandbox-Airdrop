/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{1040:function(t,e,r){"use strict";var n={foo:{}},o=Object;t.exports=function(){return{__proto__:n}.foo===n.foo&&!({__proto__:null}instanceof o)}},1041:function(t,e,r){"use strict";var n=Array.prototype.slice,o=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==o.call(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,c=n.call(arguments,1),f=Math.max(0,e.length-c.length),y=[],i=0;i<f;i++)y.push("$"+i);if(r=Function("binder","return function ("+y.join(",")+"){ return binder.apply(this,arguments); }")((function(){if(this instanceof r){var o=e.apply(this,c.concat(n.call(arguments)));return Object(o)===o?o:this}return e.apply(t,c.concat(n.call(arguments)))})),e.prototype){var l=function(){};l.prototype=e.prototype,r.prototype=new l,l.prototype=null}return r}},1172:function(t,e,r){"use strict";var n=r(43),o=r(743),c=new n(0),f=new n(-1),y={noether:"0",wei:"1",kwei:"1000",Kwei:"1000",babbage:"1000",femtoether:"1000",mwei:"1000000",Mwei:"1000000",lovelace:"1000000",picoether:"1000000",gwei:"1000000000",Gwei:"1000000000",shannon:"1000000000",nanoether:"1000000000",nano:"1000000000",szabo:"1000000000000",microether:"1000000000000",micro:"1000000000000",finney:"1000000000000000",milliether:"1000000000000000",milli:"1000000000000000",ether:"1000000000000000000",kether:"1000000000000000000000",grand:"1000000000000000000000",mether:"1000000000000000000000000",gether:"1000000000000000000000000000",tether:"1000000000000000000000000000000"};function l(t){var e=t?t.toLowerCase():"ether",r=y[e];if("string"!=typeof r)throw new Error("[ethjs-unit] the unit provided "+t+" doesn't exists, please use the one of the following units "+JSON.stringify(y,null,2));return new n(r,10)}function h(t){if("string"==typeof t){if(!t.match(/^-?[0-9.]+$/))throw new Error("while converting number to string, invalid number value '"+t+"', should be a number matching (^-?[0-9.]+).");return t}if("number"==typeof t)return String(t);if("object"==typeof t&&t.toString&&(t.toTwos||t.dividedToIntegerBy))return t.toPrecision?String(t.toPrecision()):t.toString(10);throw new Error("while converting number to string, invalid number value '"+t+"' type "+typeof t+".")}t.exports={unitMap:y,numberToString:h,getValueOfUnit:l,fromWei:function(t,e,r){var n=o(t),h=n.lt(c),base=l(e),d=y[e].length-1||1,w=r||{};h&&(n=n.mul(f));for(var v=n.mod(base).toString(10);v.length<d;)v="0"+v;w.pad||(v=v.match(/^([0-9]*[1-9]|0)(0*)/)[1]);var m=n.div(base).toString(10);w.commify&&(m=m.replace(/\B(?=(\d{3})+(?!\d))/g,","));var A=m+("0"==v?"":"."+v);return h&&(A="-"+A),A},toWei:function(t,e){var r=h(t),base=l(e),o=y[e].length-1||1,c="-"===r.substring(0,1);if(c&&(r=r.substring(1)),"."===r)throw new Error("[ethjs-unit] while converting number "+t+" to wei, invalid value");var d=r.split(".");if(d.length>2)throw new Error("[ethjs-unit] while converting number "+t+" to wei,  too many decimal points");var w=d[0],v=d[1];if(w||(w="0"),v||(v="0"),v.length>o)throw new Error("[ethjs-unit] while converting number "+t+" to wei, too many decimal places");for(;v.length<o;)v+="0";w=new n(w),v=new n(v);var m=w.mul(base).add(v);return c&&(m=m.mul(f)),new n(m.toString(10),10)}}},1184:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shake256=e.shake128=e.keccak_512=e.keccak_384=e.keccak_256=e.keccak_224=e.sha3_512=e.sha3_384=e.sha3_256=e.sha3_224=e.Keccak=e.keccakP=void 0;const n=r(748),o=r(1185),c=r(511),[f,y,l]=[[],[],[]],h=BigInt(0),d=BigInt(1),w=BigInt(2),v=BigInt(7),m=BigInt(256),A=BigInt(113);for(let t=0,e=d,r=1,n=0;t<24;t++){[r,n]=[n,(2*r+3*n)%5],f.push(2*(5*n+r)),y.push((t+1)*(t+2)/2%64);let o=h;for(let t=0;t<7;t++)e=(e<<d^(e>>v)*A)%m,e&w&&(o^=d<<(d<<BigInt(t))-d);l.push(o)}const[k,x]=o.default.split(l,!0),E=(t,e,s)=>s>32?o.default.rotlBH(t,e,s):o.default.rotlSH(t,e,s),O=(t,e,s)=>s>32?o.default.rotlBL(t,e,s):o.default.rotlSL(t,e,s);function P(s,t=24){const e=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let t=0;t<10;t++)e[t]=s[t]^s[t+10]^s[t+20]^s[t+30]^s[t+40];for(let t=0;t<10;t+=2){const r=(t+8)%10,n=(t+2)%10,o=e[n],c=e[n+1],f=E(o,c,1)^e[r],y=O(o,c,1)^e[r+1];for(let e=0;e<50;e+=10)s[t+e]^=f,s[t+e+1]^=y}let t=s[2],n=s[3];for(let e=0;e<24;e++){const r=y[e],o=E(t,n,r),c=O(t,n,r),l=f[e];t=s[l],n=s[l+1],s[l]=o,s[l+1]=c}for(let t=0;t<50;t+=10){for(let r=0;r<10;r++)e[r]=s[t+r];for(let r=0;r<10;r++)s[t+r]^=~e[(r+2)%10]&e[(r+4)%10]}s[0]^=k[r],s[1]^=x[r]}e.fill(0)}e.keccakP=P;class _ extends c.Hash{constructor(t,e,r,o=!1,f=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=r,this.enableXOF=o,this.rounds=f,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n.default.number(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=(0,c.u32)(this.state)}keccak(){P(this.state32,this.rounds),this.posOut=0,this.pos=0}update(data){n.default.exists(this);const{blockLen:t,state:e}=this,r=(data=(0,c.toBytes)(data)).length;for(let n=0;n<r;){const o=Math.min(t-this.pos,r-n);for(let i=0;i<o;i++)e[this.pos++]^=data[n++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:e,pos:r,blockLen:n}=this;t[r]^=e,0!=(128&e)&&r===n-1&&this.keccak(),t[n-1]^=128,this.keccak()}writeInto(t){n.default.exists(this,!1),n.default.bytes(t),this.finish();const e=this.state,{blockLen:r}=this;for(let n=0,o=t.length;n<o;){this.posOut>=r&&this.keccak();const c=Math.min(r-this.posOut,o-n);t.set(e.subarray(this.posOut,this.posOut+c),n),this.posOut+=c,n+=c}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return n.default.number(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(n.default.output(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:e,suffix:r,outputLen:n,rounds:o,enableXOF:c}=this;return t||(t=new _(e,r,n,c,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=r,t.outputLen=n,t.enableXOF=c,t.destroyed=this.destroyed,t}}e.Keccak=_;const S=(t,e,r)=>(0,c.wrapConstructor)((()=>new _(e,t,r)));e.sha3_224=S(6,144,28),e.sha3_256=S(6,136,32),e.sha3_384=S(6,104,48),e.sha3_512=S(6,72,64),e.keccak_224=S(1,144,28),e.keccak_256=S(1,136,32),e.keccak_384=S(1,104,48),e.keccak_512=S(1,72,64);const L=(t,e,r)=>(0,c.wrapXOFConstructorWithOpts)(((n={})=>new _(e,t,void 0===n.dkLen?r:n.dkLen,!0)));e.shake128=L(31,168,16),e.shake256=L(31,136,32)},1185:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const n=BigInt(2**32-1),o=BigInt(32);function c(t,e=!1){return e?{h:Number(t&n),l:Number(t>>o&n)}:{h:0|Number(t>>o&n),l:0|Number(t&n)}}function f(t,e=!1){let r=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let i=0;i<t.length;i++){const{h:o,l:f}=c(t[i],e);[r[i],n[i]]=[o,f]}return[r,n]}e.fromBig=c,e.split=f;e.toBig=(t,e)=>BigInt(t>>>0)<<o|BigInt(e>>>0);function y(t,e,r,n){const o=(e>>>0)+(n>>>0);return{h:t+r+(o/2**32|0)|0,l:0|o}}e.add=y;const l={fromBig:c,split:f,toBig:e.toBig,shrSH:(t,e,s)=>t>>>s,shrSL:(t,e,s)=>t<<32-s|e>>>s,rotrSH:(t,e,s)=>t>>>s|e<<32-s,rotrSL:(t,e,s)=>t<<32-s|e>>>s,rotrBH:(t,e,s)=>t<<64-s|e>>>s-32,rotrBL:(t,e,s)=>t>>>s-32|e<<64-s,rotr32H:(t,e)=>e,rotr32L:(t,e)=>t,rotlSH:(t,e,s)=>t<<s|e>>>32-s,rotlSL:(t,e,s)=>e<<s|t>>>32-s,rotlBH:(t,e,s)=>e<<s-32|t>>>64-s,rotlBL:(t,e,s)=>t<<s-32|e>>>64-s,add:y,add3L:(t,e,r)=>(t>>>0)+(e>>>0)+(r>>>0),add3H:(t,e,r,n)=>e+r+n+(t/2**32|0)|0,add4L:(t,e,r,n)=>(t>>>0)+(e>>>0)+(r>>>0)+(n>>>0),add4H:(t,e,r,n,o)=>e+r+n+o+(t/2**32|0)|0,add5H:(t,e,r,n,o,c)=>e+r+n+o+c+(t/2**32|0)|0,add5L:(t,e,r,n,o)=>(t>>>0)+(e>>>0)+(r>>>0)+(n>>>0)+(o>>>0)};e.default=l},1186:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=void 0,e.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0},1208:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(1209);function o(t){return"string"==typeof t&&(!!/^(0x)?[0-9a-f]{512}$/i.test(t)&&!(!/^(0x)?[0-9a-f]{512}$/.test(t)&&!/^(0x)?[0-9A-F]{512}$/.test(t)))}function c(t,e){"object"==typeof e&&e.constructor===Uint8Array&&(e=n.bytesToHex(e));const r=n.keccak256(e).replace("0x","");for(let i=0;i<12;i+=4){const e=(parseInt(r.substr(i,2),16)<<8)+parseInt(r.substr(i+2,2),16)&2047,n=1<<e%4;if((f(t.charCodeAt(t.length-1-Math.floor(e/4)))&n)!==n)return!1}return!0}function f(t){if(t>=48&&t<=57)return t-48;if(t>=65&&t<=70)return t-55;if(t>=97&&t<=102)return t-87;throw new Error("invalid bloom")}function y(t){return"string"==typeof t&&(!!/^(0x)?[0-9a-f]{64}$/i.test(t)&&!(!/^(0x)?[0-9a-f]{64}$/.test(t)&&!/^(0x)?[0-9A-F]{64}$/.test(t)))}function l(address){return"string"==typeof address&&(!!address.match(/^(0x)?[0-9a-fA-F]{40}$/)||!!address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/))}e.isBloom=o,e.isInBloom=c,e.isUserEthereumAddressInBloom=function(t,e){if(!o(t))throw new Error("Invalid bloom given");if(!l(e))throw new Error(`Invalid ethereum address given: "${e}"`);return c(t,n.padLeft(e,64))},e.isContractAddressInBloom=function(t,e){if(!o(t))throw new Error("Invalid bloom given");if(!l(e))throw new Error(`Invalid contract address given: "${e}"`);return c(t,e)},e.isTopicInBloom=function(t,e){if(!o(t))throw new Error("Invalid bloom given");if(!y(e))throw new Error("Invalid topic");return c(t,e)},e.isTopic=y,e.isAddress=l},1209:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=r(889);function o(t){if(null==t)throw new Error("cannot convert null value to array");if("string"==typeof t){const e=t.match(/^(0x)?[0-9a-fA-F]*$/);if(!e)throw new Error("invalid hexidecimal string");if("0x"!==e[1])throw new Error("hex string must have 0x prefix");(t=t.substring(2)).length%2&&(t="0"+t);const r=[];for(let i=0;i<t.length;i+=2)r.push(parseInt(t.substr(i,2),16));return c(new Uint8Array(r))}if(function(t){if(!t||parseInt(String(t.length))!=t.length||"string"==typeof t)return!1;for(let i=0;i<t.length;i++){const e=t[i];if(e<0||e>=256||parseInt(String(e))!=e)return!1}return!0}(t))return c(new Uint8Array(t));throw new Error("invalid arrayify value")}function c(t){return void 0!==t.slice||(t.slice=()=>{const e=Array.prototype.slice.call(arguments);return c(new Uint8Array(Array.prototype.slice.apply(t,e)))}),t}e.keccak256=function(data){return"0x"+n.keccak_256(o(data))},e.padLeft=(t,e)=>{const r=/^0x/i.test(t)||"number"==typeof t,n=e-(t=t.toString().replace(/^0x/i,"")).length+1>=0?e-t.length+1:0;return(r?"0x":"")+new Array(n).join("0")+t},e.bytesToHex=function(t){const e=[];for(let i=0;i<t.length;i++)e.push((t[i]>>>4).toString(16)),e.push((15&t[i]).toString(16));return`0x${e.join("").replace(/^0+/,"")}`},e.toByteArray=o},196:function(t,e,r){"use strict";var n,o="object"==typeof Reflect?Reflect:null,c=o&&"function"==typeof o.apply?o.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};n=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var f=Number.isNaN||function(t){return t!=t};function y(){y.init.call(this)}t.exports=y,t.exports.once=function(t,e){return new Promise((function(r,n){function o(r){t.removeListener(e,c),n(r)}function c(){"function"==typeof t.removeListener&&t.removeListener("error",o),r([].slice.call(arguments))}E(t,e,c,{once:!0}),"error"!==e&&function(t,e,r){"function"==typeof t.on&&E(t,"error",e,r)}(t,o,{once:!0})}))},y.EventEmitter=y,y.prototype._events=void 0,y.prototype._eventsCount=0,y.prototype._maxListeners=void 0;var l=10;function h(t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function d(t){return void 0===t._maxListeners?y.defaultMaxListeners:t._maxListeners}function w(t,e,r,n){var o,c,f,y;if(h(r),void 0===(c=t._events)?(c=t._events=Object.create(null),t._eventsCount=0):(void 0!==c.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),c=t._events),f=c[e]),void 0===f)f=c[e]=r,++t._eventsCount;else if("function"==typeof f?f=c[e]=n?[r,f]:[f,r]:n?f.unshift(r):f.push(r),(o=d(t))>0&&f.length>o&&!f.warned){f.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+f.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=t,l.type=e,l.count=f.length,y=l,console&&console.warn&&console.warn(y)}return t}function v(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function m(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=v.bind(n);return o.listener=r,n.wrapFn=o,o}function A(t,e,r){var n=t._events;if(void 0===n)return[];var o=n[e];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(t){for(var e=new Array(t.length),i=0;i<e.length;++i)e[i]=t[i].listener||t[i];return e}(o):x(o,o.length)}function k(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function x(t,e){for(var r=new Array(e),i=0;i<e;++i)r[i]=t[i];return r}function E(t,e,r,n){if("function"==typeof t.on)n.once?t.once(e,r):t.on(e,r);else{if("function"!=typeof t.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t);t.addEventListener(e,(function o(c){n.once&&t.removeEventListener(e,o),r(c)}))}}Object.defineProperty(y,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(t){if("number"!=typeof t||t<0||f(t))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");l=t}}),y.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},y.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||f(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},y.prototype.getMaxListeners=function(){return d(this)},y.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var r="error"===t,n=this._events;if(void 0!==n)r=r&&void 0===n.error;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var f=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw f.context=o,f}var y=n[t];if(void 0===y)return!1;if("function"==typeof y)c(y,this,e);else{var l=y.length,h=x(y,l);for(i=0;i<l;++i)c(h[i],this,e)}return!0},y.prototype.addListener=function(t,e){return w(this,t,e,!1)},y.prototype.on=y.prototype.addListener,y.prototype.prependListener=function(t,e){return w(this,t,e,!0)},y.prototype.once=function(t,e){return h(e),this.on(t,m(this,t,e)),this},y.prototype.prependOnceListener=function(t,e){return h(e),this.prependListener(t,m(this,t,e)),this},y.prototype.removeListener=function(t,e){var r,n,o,i,c;if(h(e),void 0===(n=this._events))return this;if(void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===e||r[i].listener===e){c=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,o),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,c||e)}return this},y.prototype.off=y.prototype.removeListener,y.prototype.removeAllListeners=function(t){var e,r,i;if(void 0===(r=this._events))return this;if(void 0===r.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;if(0===arguments.length){var n,o=Object.keys(r);for(i=0;i<o.length;++i)"removeListener"!==(n=o[i])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(i=e.length-1;i>=0;i--)this.removeListener(t,e[i]);return this},y.prototype.listeners=function(t){return A(this,t,!0)},y.prototype.rawListeners=function(t){return A(this,t,!1)},y.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):k.call(t,e)},y.prototype.listenerCount=k,y.prototype.eventNames=function(){return this._eventsCount>0?n(this._events):[]}},371:function(t,e,r){var n=r(55).Buffer,o=r(479);t.exports=function(t,e,r,c){if(n.isBuffer(t)||(t=n.from(t,"binary")),e&&(n.isBuffer(e)||(e=n.from(e,"binary")),8!==e.length))throw new RangeError("salt should be Buffer with 8 byte length");for(var f=r/8,y=n.alloc(f),l=n.alloc(c||0),h=n.alloc(0);f>0||c>0;){var d=new o;d.update(h),d.update(t),e&&d.update(e),h=d.digest();var w=0;if(f>0){var v=y.length-f;w=Math.min(f,h.length),h.copy(y,v,0,w),f-=w}if(w<h.length&&c>0){var m=l.length-c,A=Math.min(c,h.length-w);h.copy(l,m,w,w+A),c-=A}}return h.fill(0),{key:y,iv:l}}},430:function(t,e,r){"use strict";var n,o=SyntaxError,c=Function,f=TypeError,y=function(t){try{return c('"use strict"; return ('+t+").constructor;")()}catch(t){}},l=Object.getOwnPropertyDescriptor;if(l)try{l({},"")}catch(t){l=null}var h=function(){throw new f},d=l?function(){try{return h}catch(t){try{return l(arguments,"callee").get}catch(t){return h}}}():h,w=r(879)(),v=r(1040)(),m=Object.getPrototypeOf||(v?function(t){return t.__proto__}:null),A={},k="undefined"!=typeof Uint8Array&&m?m(Uint8Array):n,x={"%AggregateError%":"undefined"==typeof AggregateError?n:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?n:ArrayBuffer,"%ArrayIteratorPrototype%":w&&m?m([][Symbol.iterator]()):n,"%AsyncFromSyncIteratorPrototype%":n,"%AsyncFunction%":A,"%AsyncGenerator%":A,"%AsyncGeneratorFunction%":A,"%AsyncIteratorPrototype%":A,"%Atomics%":"undefined"==typeof Atomics?n:Atomics,"%BigInt%":"undefined"==typeof BigInt?n:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?n:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?n:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?n:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?n:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?n:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?n:FinalizationRegistry,"%Function%":c,"%GeneratorFunction%":A,"%Int8Array%":"undefined"==typeof Int8Array?n:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?n:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?n:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":w&&m?m(m([][Symbol.iterator]())):n,"%JSON%":"object"==typeof JSON?JSON:n,"%Map%":"undefined"==typeof Map?n:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&w&&m?m((new Map)[Symbol.iterator]()):n,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?n:Promise,"%Proxy%":"undefined"==typeof Proxy?n:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?n:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?n:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&w&&m?m((new Set)[Symbol.iterator]()):n,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?n:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":w&&m?m(""[Symbol.iterator]()):n,"%Symbol%":w?Symbol:n,"%SyntaxError%":o,"%ThrowTypeError%":d,"%TypedArray%":k,"%TypeError%":f,"%Uint8Array%":"undefined"==typeof Uint8Array?n:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?n:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?n:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?n:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?n:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?n:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?n:WeakSet};if(m)try{null.error}catch(t){var E=m(m(t));x["%Error.prototype%"]=E}var O=function t(e){var r;if("%AsyncFunction%"===e)r=y("async function () {}");else if("%GeneratorFunction%"===e)r=y("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=y("async function* () {}");else if("%AsyncGenerator%"===e){var n=t("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===e){var o=t("%AsyncGenerator%");o&&m&&(r=m(o.prototype))}return x[e]=r,r},P={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},_=r(497),S=r(885),L=_.call(Function.call,Array.prototype.concat),B=_.call(Function.apply,Array.prototype.splice),I=_.call(Function.call,String.prototype.replace),j=_.call(Function.call,String.prototype.slice),U=_.call(Function.call,RegExp.prototype.exec),F=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,T=/\\(\\)?/g,R=function(t,e){var r,n=t;if(S(P,n)&&(n="%"+(r=P[n])[0]+"%"),S(x,n)){var c=x[n];if(c===A&&(c=O(n)),void 0===c&&!e)throw new f("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:c}}throw new o("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new f("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new f('"allowMissing" argument must be a boolean');if(null===U(/^%?[^%]*%?$/,t))throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=function(t){var e=j(t,0,1),r=j(t,-1);if("%"===e&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return I(t,F,(function(t,e,r,o){n[n.length]=r?I(o,T,"$1"):e||t})),n}(t),n=r.length>0?r[0]:"",c=R("%"+n+"%",e),y=c.name,h=c.value,d=!1,w=c.alias;w&&(n=w[0],B(r,L([0,1],w)));for(var i=1,v=!0;i<r.length;i+=1){var m=r[i],A=j(m,0,1),k=j(m,-1);if(('"'===A||"'"===A||"`"===A||'"'===k||"'"===k||"`"===k)&&A!==k)throw new o("property names with quotes must have matching quotes");if("constructor"!==m&&v||(d=!0),S(x,y="%"+(n+="."+m)+"%"))h=x[y];else if(null!=h){if(!(m in h)){if(!e)throw new f("base intrinsic for "+t+" exists, but the property is not available.");return}if(l&&i+1>=r.length){var desc=l(h,m);h=(v=!!desc)&&"get"in desc&&!("originalValue"in desc.get)?desc.get:h[m]}else v=S(h,m),h=h[m];v&&!d&&(x[y]=h)}}return h}},456:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.keccak512=e.keccak384=e.keccak256=e.keccak224=void 0;const n=r(1184),o=r(749);e.keccak224=(0,o.wrapHash)(n.keccak_224),e.keccak256=(()=>{const t=(0,o.wrapHash)(n.keccak_256);return t.create=n.keccak_256.create,t})(),e.keccak384=(0,o.wrapHash)(n.keccak_384),e.keccak512=(0,o.wrapHash)(n.keccak_512)},497:function(t,e,r){"use strict";var n=r(1041);t.exports=Function.prototype.bind||n},510:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.secp256k1=void 0;var n=r(1174);Object.defineProperty(e,"secp256k1",{enumerable:!0,get:function(){return n.secp256k1}})},511:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapXOFConstructorWithOpts=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const n=r(1186),o=a=>a instanceof Uint8Array;e.u8=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength);e.u32=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4));e.createView=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);if(e.rotr=(t,e)=>t<<32-e|t>>>e,e.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},((t,i)=>i.toString(16).padStart(2,"0")));e.bytesToHex=function(t){if(!o(t))throw new Error("Uint8Array expected");let e="";for(let i=0;i<t.length;i++)e+=c[t[i]];return e},e.hexToBytes=function(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const r=new Uint8Array(e/2);for(let i=0;i<r.length;i++){const e=2*i,n=t.slice(e,e+2),o=Number.parseInt(n,16);if(Number.isNaN(o)||o<0)throw new Error("Invalid byte sequence");r[i]=o}return r};function f(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}function y(data){if("string"==typeof data&&(data=f(data)),!o(data))throw new Error("expected Uint8Array, got "+typeof data);return data}e.nextTick=async()=>{},e.asyncLoop=async function(t,r,n){let o=Date.now();for(let i=0;i<t;i++){n(i);const t=Date.now()-o;t>=0&&t<r||(await(0,e.nextTick)(),o+=t)}},e.utf8ToBytes=f,e.toBytes=y,e.concatBytes=function(...t){const e=new Uint8Array(t.reduce(((t,a)=>t+a.length),0));let r=0;return t.forEach((a=>{if(!o(a))throw new Error("Uint8Array expected");e.set(a,r),r+=a.length})),e};e.Hash=class{clone(){return this._cloneInto()}};e.checkOpts=function(t,e){if(void 0!==e&&("object"!=typeof e||(r=e,"[object Object]"!==Object.prototype.toString.call(r)||r.constructor!==Object)))throw new Error("Options should be object or undefined");var r;return Object.assign(t,e)},e.wrapConstructor=function(t){const e=e=>t().update(y(e)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e},e.wrapConstructorWithOpts=function(t){const e=(e,r)=>t(r).update(y(e)).digest(),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=e=>t(e),e},e.wrapXOFConstructorWithOpts=function(t){const e=(e,r)=>t(r).update(y(e)).digest(),r=t({});return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=e=>t(e),e},e.randomBytes=function(t=32){if(n.crypto&&"function"==typeof n.crypto.getRandomValues)return n.crypto.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}},748:function(t,e,r){"use strict";function n(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function o(b){if("boolean"!=typeof b)throw new Error(`Expected boolean, not ${b}`)}function c(b,...t){if(!(b instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(b.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${b.length}`)}function f(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");n(t.outputLen),n(t.blockLen)}function y(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function output(t,e){c(t);const r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}Object.defineProperty(e,"__esModule",{value:!0}),e.output=e.exists=e.hash=e.bytes=e.bool=e.number=void 0,e.number=n,e.bool=o,e.bytes=c,e.hash=f,e.exists=y,e.output=output;const l={number:n,bool:o,bytes:c,hash:f,exists:y,output:output};e.default=l},749:function(t,e,r){"use strict";(function(t){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=e.wrapHash=e.equalsBytes=e.hexToBytes=e.bytesToUtf8=e.utf8ToBytes=e.createView=e.concatBytes=e.toHex=e.bytesToHex=e.assertBytes=e.assertBool=void 0;const o=n(r(748)),c=r(511),f=o.default.bool;e.assertBool=f;const y=o.default.bytes;e.assertBytes=y;var l=r(511);Object.defineProperty(e,"bytesToHex",{enumerable:!0,get:function(){return l.bytesToHex}}),Object.defineProperty(e,"toHex",{enumerable:!0,get:function(){return l.bytesToHex}}),Object.defineProperty(e,"concatBytes",{enumerable:!0,get:function(){return l.concatBytes}}),Object.defineProperty(e,"createView",{enumerable:!0,get:function(){return l.createView}}),Object.defineProperty(e,"utf8ToBytes",{enumerable:!0,get:function(){return l.utf8ToBytes}}),e.bytesToUtf8=function(data){if(!(data instanceof Uint8Array))throw new TypeError("bytesToUtf8 expected Uint8Array, got "+typeof data);return(new TextDecoder).decode(data)},e.hexToBytes=function(data){const t=data.startsWith("0x")?data.substring(2):data;return(0,c.hexToBytes)(t)},e.equalsBytes=function(a,b){if(a.length!==b.length)return!1;for(let i=0;i<a.length;i++)if(a[i]!==b[i])return!1;return!0},e.wrapHash=function(t){return e=>(o.default.bytes(e),t(e))},e.crypto=(()=>{const e="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,r="function"==typeof t.require&&t.require.bind(t);return{node:r&&!e?r("crypto"):void 0,web:e}})()}).call(this,r(245)(t))},870:function(t,e,r){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var n=Object.getOwnPropertySymbols(t);if(1!==n.length||n[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(t,e);if(42!==o.value||!0!==o.enumerable)return!1}return!0}},879:function(t,e,r){"use strict";var n="undefined"!=typeof Symbol&&Symbol,o=r(870);t.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}},885:function(t,e,r){"use strict";var n=r(497);t.exports=n.call(Function.call,Object.prototype.hasOwnProperty)}}]);