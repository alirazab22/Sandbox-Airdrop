/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[587],{1174:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.encodeToCurve=e.hashToCurve=e.schnorr=e.secp256k1=void 0;const o=n(1175),r=n(320),f=n(381),c=n(746),h=n(265),d=n(1179),l=n(1180),y=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),w=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),B=BigInt(1),x=BigInt(2),E=(a,b)=>(a+b/x)/b;function m(t){const e=y,n=BigInt(3),o=BigInt(6),r=BigInt(11),c=BigInt(22),h=BigInt(23),d=BigInt(44),l=BigInt(88),w=t*t*t%e,B=w*w*t%e,E=(0,f.pow2)(B,n,e)*B%e,m=(0,f.pow2)(E,n,e)*B%e,L=(0,f.pow2)(m,x,e)*w%e,H=(0,f.pow2)(L,r,e)*L%e,v=(0,f.pow2)(H,c,e)*H%e,A=(0,f.pow2)(v,d,e)*v%e,k=(0,f.pow2)(A,l,e)*A%e,T=(0,f.pow2)(k,d,e)*v%e,U=(0,f.pow2)(T,n,e)*B%e,O=(0,f.pow2)(U,h,e)*H%e,_=(0,f.pow2)(O,o,e)*w%e,C=(0,f.pow2)(_,x,e);if(!I.eql(I.sqr(C),t))throw new Error("Cannot find square root");return C}const I=(0,f.Field)(y,void 0,void 0,{sqrt:m});e.secp256k1=(0,l.createCurve)({a:BigInt(0),b:BigInt(7),Fp:I,n:w,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=w,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),o=-B*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),r=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),c=n,h=BigInt("0x100000000000000000000000000000000"),d=E(c*t,e),l=E(-o*t,e);let y=(0,f.mod)(t-d*n-l*r,e),x=(0,f.mod)(-d*o-l*c,e);const m=y>h,I=x>h;if(m&&(y=e-y),I&&(x=e-x),y>h||x>h)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:m,k1:y,k2neg:I,k2:x}}}},o.sha256);const L=BigInt(0),H=t=>"bigint"==typeof t&&L<t&&t<y,v=t=>"bigint"==typeof t&&L<t&&t<w,A={};function k(t,...e){let n=A[t];if(void 0===n){const e=(0,o.sha256)(Uint8Array.from(t,(t=>t.charCodeAt(0))));n=(0,h.concatBytes)(e,e),A[t]=n}return(0,o.sha256)((0,h.concatBytes)(n,...e))}const T=t=>t.toRawBytes(!0).slice(1),U=t=>(0,h.numberToBytesBE)(t,32),O=t=>(0,f.mod)(t,y),_=t=>(0,f.mod)(t,w),C=e.secp256k1.ProjectivePoint,S=(t,a,b)=>C.BASE.multiplyAndAddUnsafe(t,a,b);function P(t){let n=e.secp256k1.utils.normPrivateKeyToScalar(t),p=C.fromPrivateKey(n);return{scalar:p.hasEvenY()?n:_(-n),bytes:T(p)}}function j(t){if(!H(t))throw new Error("bad x: need 0 < x < p");const e=O(t*t);let n=m(O(e*t+BigInt(7)));n%x!==L&&(n=O(-n));const p=new C(t,n,B);return p.assertValidity(),p}function N(...t){return _((0,h.bytesToNumberBE)(k("BIP0340/challenge",...t)))}function D(t){return P(t).bytes}function M(t,e,n=(0,r.randomBytes)(32)){const o=(0,h.ensureBytes)("message",t),{bytes:f,scalar:c}=P(e),a=(0,h.ensureBytes)("auxRand",n,32),d=U(c^(0,h.bytesToNumberBE)(k("BIP0340/aux",a))),l=k("BIP0340/nonce",d,f,o),y=_((0,h.bytesToNumberBE)(l));if(y===L)throw new Error("sign failed: k is zero");const{bytes:w,scalar:B}=P(y),x=N(w,f,o),E=new Uint8Array(64);if(E.set(w,0),E.set(U(_(B+x*c)),32),!F(E,o,f))throw new Error("sign: Invalid signature produced");return E}function F(t,e,n){const o=(0,h.ensureBytes)("signature",t,64),r=(0,h.ensureBytes)("message",e),f=(0,h.ensureBytes)("publicKey",n,32);try{const t=j((0,h.bytesToNumberBE)(f)),e=(0,h.bytesToNumberBE)(o.subarray(0,32));if(!H(e))return!1;const s=(0,h.bytesToNumberBE)(o.subarray(32,64));if(!v(s))return!1;const n=N(U(e),T(t),r),c=S(t,s,_(-n));return!(!c||!c.hasEvenY()||c.toAffine().x!==e)}catch(t){return!1}}e.schnorr={getPublicKey:D,sign:M,verify:F,utils:{randomPrivateKey:e.secp256k1.utils.randomPrivateKey,lift_x:j,pointToBytes:T,numberToBytesBE:h.numberToBytesBE,bytesToNumberBE:h.bytesToNumberBE,taggedHash:k,mod:f.mod}};const V=(()=>(0,d.isogenyMap)(I,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map((i=>i.map((t=>BigInt(t)))))))(),G=(()=>(0,c.mapToCurveSimpleSWU)(I,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:I.create(BigInt("-11"))}))(),R=(()=>(0,d.createHasher)(e.secp256k1.ProjectivePoint,(t=>{const{x:e,y:n}=G(I.create(t[0]));return V(e,n)}),{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:I.ORDER,m:1,k:128,expand:"xmd",hash:o.sha256}))();e.hashToCurve=R.hashToCurve,e.encodeToCurve=R.encodeToCurve},1175:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sha224=e.sha256=void 0;const o=n(1176),r=n(320),f=(a,b,t)=>a&b^a&t^b&t,c=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),h=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),d=new Uint32Array(64);class l extends o.SHA2{constructor(){super(64,32,8,!1),this.A=0|h[0],this.B=0|h[1],this.C=0|h[2],this.D=0|h[3],this.E=0|h[4],this.F=0|h[5],this.G=0|h[6],this.H=0|h[7]}get(){const{A:t,B:e,C:n,D:o,E:r,F:f,G:c,H:h}=this;return[t,e,n,o,r,f,c,h]}set(t,e,n,o,r,f,c,h){this.A=0|t,this.B=0|e,this.C=0|n,this.D=0|o,this.E=0|r,this.F=0|f,this.G=0|c,this.H=0|h}process(view,t){for(let i=0;i<16;i++,t+=4)d[i]=view.getUint32(t,!1);for(let i=16;i<64;i++){const t=d[i-15],e=d[i-2],n=(0,r.rotr)(t,7)^(0,r.rotr)(t,18)^t>>>3,o=(0,r.rotr)(e,17)^(0,r.rotr)(e,19)^e>>>10;d[i]=o+d[i-7]+n+d[i-16]|0}let{A:e,B:n,C:o,D:h,E:l,F:y,G:w,H:B}=this;for(let i=0;i<64;i++){const t=B+((0,r.rotr)(l,6)^(0,r.rotr)(l,11)^(0,r.rotr)(l,25))+((a=l)&y^~a&w)+c[i]+d[i]|0,x=((0,r.rotr)(e,2)^(0,r.rotr)(e,13)^(0,r.rotr)(e,22))+f(e,n,o)|0;B=w,w=y,y=l,l=h+t|0,h=o,o=n,n=e,e=t+x|0}var a;e=e+this.A|0,n=n+this.B|0,o=o+this.C|0,h=h+this.D|0,l=l+this.E|0,y=y+this.F|0,w=w+this.G|0,B=B+this.H|0,this.set(e,n,o,h,l,y,w,B)}roundClean(){d.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class y extends l{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}e.sha256=(0,r.wrapConstructor)((()=>new l)),e.sha224=(0,r.wrapConstructor)((()=>new y))},1176:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SHA2=void 0;const o=n(745),r=n(320);class f extends r.Hash{constructor(t,e,n,o){super(),this.blockLen=t,this.outputLen=e,this.padOffset=n,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,r.createView)(this.buffer)}update(data){o.default.exists(this);const{view:view,buffer:t,blockLen:e}=this,n=(data=(0,r.toBytes)(data)).length;for(let o=0;o<n;){const f=Math.min(e-this.pos,n-o);if(f!==e)t.set(data.subarray(o,o+f),this.pos),this.pos+=f,o+=f,this.pos===e&&(this.process(view,0),this.pos=0);else{const t=(0,r.createView)(data);for(;e<=n-o;o+=e)this.process(t,o)}}return this.length+=data.length,this.roundClean(),this}digestInto(t){o.default.exists(this),o.default.output(t,this),this.finished=!0;const{buffer:e,view:view,blockLen:n,isLE:f}=this;let{pos:c}=this;e[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>n-c&&(this.process(view,0),c=0);for(let i=c;i<n;i++)e[i]=0;!function(view,t,e,n){if("function"==typeof view.setBigUint64)return view.setBigUint64(t,e,n);const o=BigInt(32),r=BigInt(4294967295),f=Number(e>>o&r),c=Number(e&r),h=n?4:0,d=n?0:4;view.setUint32(t+h,f,n),view.setUint32(t+d,c,n)}(view,n-8,BigInt(8*this.length),f),this.process(view,0);const h=(0,r.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=d/4,y=this.get();if(l>y.length)throw new Error("_sha2: outputLen bigger than state");for(let i=0;i<l;i++)h.setUint32(4*i,y[i],f)}digest(){const{buffer:t,outputLen:e}=this;this.digestInto(t);const n=t.slice(0,e);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:e,buffer:n,length:o,finished:r,destroyed:f,pos:c}=this;return t.length=o,t.pos=c,t.finished=r,t.destroyed=f,o%e&&t.buffer.set(n),t}}e.SHA2=f},1177:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.crypto=void 0,e.crypto="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0},1181:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=e.HMAC=void 0;const o=n(745),r=n(320);class f extends r.Hash{constructor(t,e){super(),this.finished=!1,this.destroyed=!1,o.default.hash(t);const n=(0,r.toBytes)(e);if(this.iHash=t.create(),"function"!=typeof this.iHash.update)throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const f=this.blockLen,c=new Uint8Array(f);c.set(n.length>f?t.create().update(n).digest():n);for(let i=0;i<c.length;i++)c[i]^=54;this.iHash.update(c),this.oHash=t.create();for(let i=0;i<c.length;i++)c[i]^=106;this.oHash.update(c),c.fill(0)}update(t){return o.default.exists(this),this.iHash.update(t),this}digestInto(t){o.default.exists(this),o.default.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:e,iHash:n,finished:o,destroyed:r,blockLen:f,outputLen:c}=this;return t.finished=o,t.destroyed=r,t.blockLen=f,t.outputLen=c,t.oHash=e._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}e.HMAC=f;e.hmac=(t,e,n)=>new f(t,e).update(n).digest(),e.hmac.create=(t,e)=>new f(t,e)},320:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapXOFConstructorWithOpts=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const o=n(1177),r=a=>a instanceof Uint8Array;e.u8=t=>new Uint8Array(t.buffer,t.byteOffset,t.byteLength);e.u32=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4));e.createView=t=>new DataView(t.buffer,t.byteOffset,t.byteLength);if(e.rotr=(t,e)=>t<<32-e|t>>>e,e.isLE=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0],!e.isLE)throw new Error("Non little-endian hardware is not supported");const f=Array.from({length:256},((t,i)=>i.toString(16).padStart(2,"0")));e.bytesToHex=function(t){if(!r(t))throw new Error("Uint8Array expected");let e="";for(let i=0;i<t.length;i++)e+=f[t[i]];return e},e.hexToBytes=function(t){if("string"!=typeof t)throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const e=2*i,o=t.slice(e,e+2),r=Number.parseInt(o,16);if(Number.isNaN(r)||r<0)throw new Error("Invalid byte sequence");n[i]=r}return n};function c(t){if("string"!=typeof t)throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array((new TextEncoder).encode(t))}function h(data){if("string"==typeof data&&(data=c(data)),!r(data))throw new Error("expected Uint8Array, got "+typeof data);return data}e.nextTick=async()=>{},e.asyncLoop=async function(t,n,o){let r=Date.now();for(let i=0;i<t;i++){o(i);const t=Date.now()-r;t>=0&&t<n||(await(0,e.nextTick)(),r+=t)}},e.utf8ToBytes=c,e.toBytes=h,e.concatBytes=function(...t){const e=new Uint8Array(t.reduce(((t,a)=>t+a.length),0));let n=0;return t.forEach((a=>{if(!r(a))throw new Error("Uint8Array expected");e.set(a,n),n+=a.length})),e};e.Hash=class{clone(){return this._cloneInto()}};e.checkOpts=function(t,e){if(void 0!==e&&("object"!=typeof e||(n=e,"[object Object]"!==Object.prototype.toString.call(n)||n.constructor!==Object)))throw new Error("Options should be object or undefined");var n;return Object.assign(t,e)},e.wrapConstructor=function(t){const e=e=>t().update(h(e)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e},e.wrapConstructorWithOpts=function(t){const e=(e,n)=>t(n).update(h(e)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=e=>t(e),e},e.wrapXOFConstructorWithOpts=function(t){const e=(e,n)=>t(n).update(h(e)).digest(),n=t({});return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=e=>t(e),e},e.randomBytes=function(t=32){if(o.crypto&&"function"==typeof o.crypto.getRandomValues)return o.crypto.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}},745:function(t,e,n){"use strict";function o(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function r(b){if("boolean"!=typeof b)throw new Error(`Expected boolean, not ${b}`)}function f(b,...t){if(!(b instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(b.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${b.length}`)}function c(t){if("function"!=typeof t||"function"!=typeof t.create)throw new Error("Hash should be wrapped by utils.wrapConstructor");o(t.outputLen),o(t.blockLen)}function h(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function output(t,e){f(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Object.defineProperty(e,"__esModule",{value:!0}),e.output=e.exists=e.hash=e.bytes=e.bool=e.number=void 0,e.number=o,e.bool=r,e.bytes=f,e.hash=c,e.exists=h,e.output=output;const d={number:o,bool:r,bytes:f,hash:c,exists:h,output:output};e.default=d}}]);