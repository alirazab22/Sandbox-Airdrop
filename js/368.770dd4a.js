(window.webpackJsonp=window.webpackJsonp||[]).push([[368],{188:function(e,t,n){"use strict";n.d(t,"h",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return m})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return k}));var r,o=n(4),c=(n(10),n(11),n(12),n(13),n(53),n(67),{ADMIN:1,ARTIST_MODERATOR:2,MODERATOR:3,ARTIST:4,USER:5,GUEST:6,COMMUNITY_MANAGER:7,SUPER_ADMIN:8,PARTNER:9}),d=(r={},Object(o.a)(r,c.SUPER_ADMIN,"all"),Object(o.a)(r,c.ADMIN,[c.ARTIST_MODERATOR,c.MODERATOR,c.ARTIST,c.USER,c.GUEST,c.COMMUNITY_MANAGER,c.PARTNER]),Object(o.a)(r,c.ARTIST_MODERATOR,[c.ARTIST,c.USER]),r);function l(e){return e===c.SUPER_ADMIN}function f(e){return e===c.ADMIN||e===c.SUPER_ADMIN}function m(e){return e===c.ARTIST_MODERATOR}function h(e){return e===c.MODERATOR}function v(e){return e===c.ARTIST}function w(e){return e===c.COMMUNITY_MANAGER}c.SUPER_ADMIN,c.ADMIN;var x=[c.SUPER_ADMIN,c.ADMIN,c.ARTIST_MODERATOR];function k(e,t){var n=d[e];return!(!n||"all"!==n&&!n.includes(parseInt(t)))}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"f",(function(){return w})),n.d(t,"d",(function(){return x})),n.d(t,"e",(function(){return k}));var r=n(4),o=(n(10),n(11),n(12),n(13),n(7),n(17),n(18),n(20),n(22),n(15),n(21),n(8)),c=n(292);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){return{loading:function(progress){return e("registerState",{state:t,status:"loading",data:progress}),!0},success:function(data){return e("registerState",{state:t,status:"success",data:data}),!0},error:function(n){return e("registerState",{state:t,status:"error",data:n}),!1}}}var m={registerState:function(e,t){o.default.set(e,t.state,{status:t.status,data:t.data})}};function h(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return Array.isArray(t)||(t=[t]),r?!t.some((function(t){var r=e[t];return!r||r.status!==n})):t.some((function(t){var r=e[t];return r&&r.status===n}))}var v={get:function(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e[t];return r&&"success"===r.status?r.data:n}},isSuccess:function(e){return function(t){return h(e,t,"success",!0)}},isLoading:function(e){return function(t){return h(e,t,"loading")}},isError:function(e){return function(t){return h(e,t,"error")}}};function w(e,t){var n=e.commit,r=t.value;n("registerState",{state:t.prop,status:"success",data:r})}function x(e){return Object(c.a)(e)}var k=function(e,t){return function(n){n.hasModule(e)||n.registerModule(e,l(l({},t),{},{namespaced:!0}),{preserveState:!1})}}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=(n(10),n(11),n(12),n(13),n(9),n(31),n(2)),c=n(28);function d(e){var t=e.prop,n=e.func,d=e.toast,l=e.loading;return function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(r,f){var m,h,v,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m=r.commit,h=Object(o.a)(m,t),e.prev=2,(void 0===l||l)&&h.loading(0),e.next=6,n(f);case 6:return v=e.sent,h.success(v),d&&d.success&&Object(c.f)({title:d.success,duration:1e3}),e.abrupt("return",v);case 12:throw e.prev=12,e.t0=e.catch(2),w=Object(o.d)(e.t0),h.error(w),d&&d.error&&Object(c.b)({title:"".concat(d.error," - ").concat(w)}),e.t0;case 18:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},30:function(e,t,n){"use strict";n.d(t,"l",(function(){return U})),n.d(t,"c",(function(){return Y})),n.d(t,"h",(function(){return V})),n.d(t,"b",(function(){return z})),n.d(t,"k",(function(){return Q})),n.d(t,"i",(function(){return Z})),n.d(t,"f",(function(){return P})),n.d(t,"e",(function(){return I})),n.d(t,"d",(function(){return N})),n.d(t,"j",(function(){return D})),n.d(t,"a",(function(){return J})),n.d(t,"m",(function(){return te})),n.d(t,"g",(function(){return ne}));var r=n(19),o=n(27),c=n(0),d=(n(10),n(11),n(12),n(13),n(9),n(7),n(35),n(36),n(40),n(86),n(53),n(67),n(38),n(150),n(17),n(16)),l=n(292),f=n(106),m=n(28),h=n(513),v=n(90),w=n(183),x=function(){return n.e(60).then(n.t.bind(null,343,7))},k=[];function O(){return R.apply(this,arguments)}function R(){return(R=Object(c.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.userWeb3.eth.getAccounts().catch((function(){return[]}));case 2:if(0!==(t=e.sent).length){e.next=13;break}if(!window.ethereum){e.next=12;break}return e.next=7,window.ethereum.request({method:"eth_requestAccounts"});case 7:if(0!==(t=e.sent).length){e.next=10;break}throw new f.a("Wallet locked");case 10:e.next=13;break;case 12:throw new f.a("Wallet locked");case 13:return e.abrupt("return",t[0]);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return T.apply(this,arguments)}function T(){return(T=Object(c.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(n=t.accounts).length){e.next=3;break}throw new f.a("Wallet locked");case 3:return e.abrupt("return",n[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return C.apply(this,arguments)}function C(){return(C=Object(c.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t){e.next=3;break}throw new f.a("Wallet locked");case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){var n,r=["zengo","rainbow","metamask","trust wallet","wombat","pillar","tokenpocket","ledger wallet","imtoken"];Object(w.a)(window.$nuxt.$ff)&&r.push("bharatbox wallet"),Object(w.d)(window.$nuxt.$ff)&&r.push.apply(r,["okto","okto wallet","okto.wallet"]);var o=null==t||null===(n=t.currentProvider)||void 0===n||null===(n=n.session)||void 0===n||null===(n=n.peer)||void 0===n||null===(n=n.metadata)||void 0===n||null===(n=n.name)||void 0===n?void 0:n.toLowerCase();if(r.find((function(e){if(e.includes(o)||null!=o&&o.includes(e))return!0})))return e.on("chainChanged",function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.$nuxt.$store.commit("user","chainId",t);case 2:return e.next=4,window.$nuxt.$store.dispatch("user/loadUser");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.on("disconnect",Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.$nuxt.$store.dispatch("user/logout");case 2:case"end":return e.stop()}}),e)})))),e.on("accountsChanged",function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=null===(n=window)||void 0===n||null===(n=n.$nuxt)||void 0===n||null===(n=n.$store)||void 0===n||null===(n=n.state)||void 0===n||null===(n=n.user)||void 0===n?void 0:n.walletAddress)&&t&&t[0]&&t[0]!==r)){e.next=4;break}return e.next=4,window.$nuxt.$store.dispatch("user/logout");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t;throw Object(m.b)({title:"This wallet is not supported"}),t.currentProvider.disconnect(),new Error("This wallet is not supported")}function S(e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,c,d,l,f,m,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(700),n.e(696),n.e(697),n.e(699),n.e(1124),n.e(600),n.e(770),n.e(642),n.e(1126),n.e(1127),n.e(1139),n.e(601),n.e(1163)]).then(n.bind(null,1338));case 2:return r=e.sent,c=r.default,d=["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96","4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0","1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369","ef333840daf915aafdc4a004525502d6d49d77bd9c65e0642dbaefb3c2893bef","f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d","20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66","19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927","9414d5a85c8f4eabc1b5b15ebe0cd399e1a2a9d35643ab0ad22a6e4a32f596f0"],Object(w.a)(window.$nuxt.$ff)&&d.push("4eca426b5c9debee28d1954b646c1a2bc79582c3c2b7e6da79ebc4ad460d8b75"),Object(w.d)(window.$nuxt.$ff)&&d.push("550b59942eb58a7226381bf7935f22d311e56ee29c3530e44d96b1de0550a35a"),e.next=9,c.init({projectId:"2f5c6bc499264593600da6bff616e0d7",chains:t,showQrModal:"true",qrModalOptions:{explorerRecommendedWalletIds:d,explorerExcludedWalletIds:"ALL",themeMode:"light",themeVariables:{"--wcm-z-index":1e4}}});case 9:return l=e.sent,e.next=12,Promise.all([x(),l.enable()]);case 12:return f=e.sent,m=Object(o.a)(f,1),h=m[0].default,v=new h(l),e.abrupt("return",A(l,v));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return L.apply(this,arguments)}function L(){return(L=Object(c.a)(regeneratorRuntime.mark((function e(){var t,n,r,o,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=!d.isTestEnvironment||d.isStagingEnvironment?[1,137]:[5,80001],e.next=4,S(t);case 4:return e.abrupt("return",e.sent);case 7:if(e.prev=7,e.t0=e.catch(0),"This wallet is not supported"!==(null===e.t0||void 0===e.t0?void 0:e.t0.message)){e.next=11;break}return e.abrupt("return");case 11:if(null===e.t0||void 0===e.t0||null===(n=e.t0.message)||void 0===n||!n.includes("supported")){e.next=27;break}return e.prev=12,null===(r=localStorage)||void 0===r||r.removeItem("wc@2:core:0.3//pairing"),Object(m.b)({title:"Seems like your wallet doesn't support mutiple chains, try again we'll ask for a single chain now"}),o=!d.isTestEnvironment||d.isStagingEnvironment?[137]:[80001],e.next=18,S(o);case 18:return e.abrupt("return",e.sent);case 21:e.prev=21,e.t1=e.catch(12),c=Object(l.a)(e.t1),Object(m.b)({title:c});case 25:e.next=29;break;case 27:f=Object(l.a)(e.t0),Object(m.b)({title:f});case 29:case"end":return e.stop()}}),e,null,[[0,7],[12,21]])})))).apply(this,arguments)}function I(){return M.apply(this,arguments)}function M(){return(M=Object(c.a)(regeneratorRuntime.mark((function e(){var t,r,c,l,f,m,h,v,w,k,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="The Sandbox",r="/img/01_Top_Bar/TheSandboxLogo.svg",c=d.infura.http,l=1,e.next=6,Promise.all([n.e(152),n.e(157),n.e(160),n.e(226),n.e(651),n.e(616),n.e(769),n.e(667),n.e(749),n.e(647),n.e(603),n.e(609),n.e(599),n.e(602),n.e(630),n.e(1117)]).then(n.t.bind(null,1339,7));case 6:return f=e.sent,m=f.default,h=new m({appName:t,appLogoUrl:r,darkMode:!1}),v=h.makeWeb3Provider(c,l),e.next=12,Promise.all([x(),v.enable()]);case 12:return w=e.sent,k=Object(o.a)(w,1),O=k[0].default,e.abrupt("return",new O(v));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){var t={metamask:"MetaMask",coinbase:"Coinbase Wallet",bitski:"Bitski",brave:"Brave",opera:"Opera",tokenpocket:"Token Pocket"},n=k.find((function(n){var r;return(null==n||null===(r=n.info)||void 0===r?void 0:r.name)===t[e]}));return null==n?void 0:n.provider}function D(){window.addEventListener("eip6963:announceProvider",(function(e){k.push(e.detail)})),window.dispatchEvent(new Event("eip6963:requestProvider"))}function $(){return _.apply(this,arguments)}function _(){return(_=Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W()){e.next=5;break}return e.next=3,window.bitski.signIn();case 3:if(W()){e.next=5;break}throw new f.a("Wallet locked");case 5:return e.abrupt("return",O());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return window.bitski.authStatus===window.AuthenticationStatus.Connected}function U(){return F.apply(this,arguments)}function F(){return(F=Object(c.a)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.$nuxt.$store.state.user.walletType,n=localStorage.getItem("walletconnect"),r=localStorage.getItem("-walletlink:https://www.walletlink.org:Addresses"),!n){e.next=6;break}return e.abrupt("return",y(JSON.parse(n)));case 6:if(!r){e.next=8;break}return e.abrupt("return",j(r));case 8:if("bitski"!==t){e.next=12;break}return e.abrupt("return",$());case 12:return e.abrupt("return",O());case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(){return B.apply(this,arguments)}function B(){return B=Object(c.a)(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(n.length>0&&void 0!==n[0])||n[0],e.next=3,window.$nuxt.$store.state.inventory.requestMintingActive.data;case 3:e.sent&&(t?(window.$nuxt.$store.dispatch("inventory/pendingMintingStatus",!0),Object(h.a)("PENDING_MINTING","true",8)):(window.$nuxt.$store.dispatch("inventory/pendingMintingStatus",!1),Object(h.a)("PENDING_MINTING","false",.1)),window.$nuxt.$store.dispatch("inventory/isRequestMinting",!1));case 5:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function Y(e,t,n,r,o,c){return H.apply(this,arguments)}function H(){return H=Object(c.a)(regeneratorRuntime.mark((function e(t,n,o,c,d,l){var f,m,h,v,w,x,k=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=k.length>6&&void 0!==k[6]?k[6]:null,v=k.length>7&&void 0!==k[7]?k[7]:null,w="arkane"===(null===(f=window.$nuxt)||void 0===f||null===(f=f.$store)||void 0===f||null===(f=f.state)||void 0===f||null===(f=f.user)||void 0===f?void 0:f.walletType)?1:0,x=null===(m=window.userWeb3)||void 0===m||null===(m=m.givenProvider)||void 0===m?void 0:m.isBraveWallet,e.abrupt("return",new Promise((function(e,f){try{var m;c.gasPrice||(c.gasPrice=x?void 0:null),c.maxPriorityFeePerGas||(c.maxPriorityFeePerGas=x?void 0:null),c.maxFeePerGas||(c.maxFeePerGas=x?void 0:null),(v||(m=t.methods)[n].apply(m,Object(r.a)(o)).send)(c).on("transactionHash",(function(t){e(t)})).on("confirmation",(function(e,t){G(),e===w&&(t.status?d&&d(t.transactionHash):l&&l(t.transactionHash))})).on("error",(function(e){h&&h(e),J(c.from,e,f)}))}catch(e){f(e)}})));case 5:case"end":return e.stop()}}),e)}))),H.apply(this,arguments)}function V(e){var t=e.txHash,n=e.from,r=e.reject,o=e.resolve,c=e.web3,d=void 0===c?null:c,l=e.cbSuccess,f=void 0===l?null:l,m=e.cbFailure,h=void 0===m?null:m,v=e.cbError,w=void 0===v?null:v;d&&(d=window.userWeb3);var x=setInterval((function(){d.eth.getTransactionReceipt(t,(function(e,c){!e&&c?(clearInterval(x),G(!1),c.status?f&&f(t):h&&h(t),o(t)):e&&(G(!1),w&&w(null==e?void 0:e.message),J(n,e,r))}))}),2e3)}function J(e,t,n){!function(e){if(e.message){if(e.message.match(/User denied/)||e.message.match(/User cancelled/))return!0}else if("ABORTED"===e.status)return!0;return!1}(t)?t.message.match(/Invalid "from" address/)?n(new f.a("Invalid wallet. Please select wallet ".concat(e))):t.message.match(/gas required exceeds allowance/)?n(new f.a("Transaction rejected. Insuficient funds")):t.message.match(/User limit reached/)?n(new f.a("You don’t have any free transactions left.")):t.message.match(/execution reverted: SandRewardPool: must wait/)?n(new f.a("Transaction rejected. You must wait in order to make the next claim.")):t.message.match(/the method eth_signTypedData_v4 does not exist/)?n(new f.a("If you have a hardware wallet, please go to settings.")):t.message.match(/Error getting token gas price inside SDK/)?n(new f.a("Internal Biconomy Error. Falling back to normal transaction.")):(console.error(t),n(new f.a("Transaction rejected. Please check your wallet"))):n(new f.a("Transaction rejected"))}function z(e,t){return K.apply(this,arguments)}function K(){return K=Object(c.a)(regeneratorRuntime.mark((function e(t,n){var o,c,d,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>2&&void 0!==l[2]?l[2]:[],d=l.length>3&&void 0!==l[3]?l[3]:{},e.next=4,(o=t.methods)[n].apply(o,Object(r.a)(c)).call(d);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function Q(e,t){return X.apply(this,arguments)}function X(){return(X=Object(c.a)(regeneratorRuntime.mark((function e(address,data){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){try{window.userWeb3.currentProvider.sendAsync({method:"eth_signTypedData_v4",params:[address,Object(v.a)(data)],from:address},(function(n,r){return n?t(n):e(r.result)}))}catch(e){t(e)}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){return ee.apply(this,arguments)}function ee(){return ee=Object(c.a)(regeneratorRuntime.mark((function e(t,address){var n,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>2&&void 0!==r[2]&&r[2]?"Welcome to The Sandbox Dashboard, please sign this message to confirm your registration. Your custom challenge is: ".concat(t):"Welcome to The Sandbox Dashboard, please sign this message to verify your identity. Your custom challenge is: ".concat(t),e.abrupt("return",new Promise((function(e,r){var o,c,d,l,f,m,h;!window.ethereum||"arkane"===(null===(o=window.$nuxt)||void 0===o||null===(o=o.$store)||void 0===o||null===(o=o.state)||void 0===o||null===(o=o.user)||void 0===o?void 0:o.walletType)||"bitski"===(null===(c=window.$nuxt)||void 0===c||null===(c=c.$store)||void 0===c||null===(c=c.state)||void 0===c||null===(c=c.user)||void 0===c?void 0:c.walletType)||null!==(d=window.ethereum.providerMap)&&void 0!==d&&d.has("CoinbaseWallet")||null!==(l=window.userWeb3)&&void 0!==l&&null!==(l=l.currentProvider)&&void 0!==l&&l.isCoinbaseWallet||null!==(f=window.userWeb3)&&void 0!==f&&null!==(f=f.currentProvider)&&void 0!==f&&f.isWalletConnect||null!==(m=window.userWeb3)&&void 0!==m&&null!==(m=m.currentProvider)&&void 0!==m&&m.isBitski||null!==(h=window.userWeb3)&&void 0!==h&&null!==(h=h.currentProvider)&&void 0!==h&&h.isBrave||navigator.userAgent.toLowerCase().includes("opera")||navigator.userAgent.toLowerCase().includes("opr/")?window.userWeb3.eth.personal.sign(n,address,(function(n,o){n?J(address,n,r):e({challenge:t,signature:o})})):window.ethereum.request({method:"personal_sign",params:[n,address]}).then((function(n){e({challenge:t,signature:n})})).catch((function(e){J(address,e,r)}))})));case 3:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}var te="0x0000000000000000000000000000000000000000",ne="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"},419:function(e,t,n){"use strict";n(10),n(11),n(12),n(13),n(217);t.a=function(e){switch(String(e).toLowerCase().trim()){case"true":case"yes":case"1":return!0;default:return!1}}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return R})),n.d(t,"n",(function(){return T})),n.d(t,"q",(function(){return A})),n.d(t,"s",(function(){return S})),n.d(t,"k",(function(){return E})),n.d(t,"r",(function(){return P})),n.d(t,"c",(function(){return L})),n.d(t,"d",(function(){return I})),n.d(t,"g",(function(){return M})),n.d(t,"h",(function(){return N})),n.d(t,"p",(function(){return D})),n.d(t,"i",(function(){return $})),n.d(t,"o",(function(){return _})),n.d(t,"f",(function(){return W})),n.d(t,"e",(function(){return U})),n.d(t,"j",(function(){return F})),n.d(t,"m",(function(){return G})),n.d(t,"l",(function(){return B})),n.d(t,"t",(function(){return Y}));var r=n(27),o=n(19),c=n(0),d=(n(9),n(142),n(7),n(35),n(36),n(15),n(17),n(41),n(53),n(67),n(38),n(75),n(31),n(341),n(40),n(135),n(281)),l=n(212),f=n(88),m=n(5),h=n(16),v=n(328),w=n(183),x=n(66),k=n.n(x);k.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80,ROUNDING_MODE:k.a.ROUND_DOWN});var O=18,R=2,y={"0xcc933a862fc15379e441f2a16cb943d385a4695f":"0x3845badade8e6dff049820680d1f14bd3903a5d0","0x592daadc9ea7f56a81de1fd27a723bd407709c46":"0x3845badade8e6dff049820680d1f14bd3903a5d0","0xe03489d4e90b22c59c5e23d45dfd59fc0db8a025":"0x3845badade8e6dff049820680d1f14bd3903a5d0","0xc778417e063141139fce010982780140aa0cd5ab":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","0x9c3c9283d3e44854697cd22d3faa240cfb032889":"0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0","0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270":"0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0","0xbbba073c31bf03b8acf7c28ef0738decf3695683":"0x3845badade8e6dff049820680d1f14bd3903a5d0"},T=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(){var t,n,r,c,l=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],!(t=l.length>0&&void 0!==l[0]?l[0]:null)){e.next=9;break}return e.next=5,d.a.findById(t,{addContracts:!0});case 5:(r=e.sent)&&n.push(r),e.next=14;break;case 9:return e.next=11,d.a.findAll({addContracts:!0});case 11:c=e.sent,n.push.apply(n,Object(o.a)(c||[])),n.sort((function(a,b){return b.order-a.order}));case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(address){return y[address.toLowerCase()]||address},C=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.getTokenUsdValue(t);case 3:return n=e.sent,e.abrupt("return",n||0);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n,o,c,d,l,m,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(t.version>1)){e.next=5;break}return e.next=4,C(j(t.stakeTokenContract.address));case 4:return e.abrupt("return",e.sent);case 5:return n=t.raw.stakeTokenReserves||[],o=Object(f.a)(t.raw.stakeTokenSupply||0,!1),e.next=9,Promise.all([C(j(t.raw.stakeToken0)),C(j(t.raw.stakeToken1))]);case 9:return c=e.sent,d=Object(r.a)(c,2),l=d[0],m=d[1],h=new k.a(l).times(m).sqrt(),v=Object(f.a)(new k.a(n[0]).times(n[1]).sqrt(),!1),e.abrupt("return",new k.a(h).times(v).div(o).times(2));case 18:return e.prev=18,e.t0=e.catch(0),e.abrupt("return",new k.a(0));case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){var n=Object(f.a)(e||0,!1),r=Object(f.a)(t||0,!1),o=n.div(r).times(100);return r.isZero()?0:o.toFormat(O)},E=function(e){var t=Math.floor(Date.now()/1e3),n={finish:0,hasFinished:!1,rewardRate:0},r=1;return e.version>1&&e.raw.finish1<t&&t<e.raw.finish2&&(r=2),n.finish=e.raw["finish".concat(r)],n.rewardRate=e.raw["rate".concat(r)],n.hasFinished=!!n.finish&&n.finish<t,n},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:604800;return Object(f.a)(e||0,!1).times(t).integerValue(k.a.ROUND_UP).toFormat()},L=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,n,r,o){var c,d,l,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(f.a)(t||0,!1),d=31449600,l=Object(f.a)(o,!1),e.next=5,C(j(r));case 5:return m=e.sent,h=c.times(m).times(d).div(l.times(n)).times(100),e.abrupt("return",h.isFinite()?h.toFormat(O):0);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,n){var r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(f.a)(t||0,!1),o=new k.a(n||0).div(100),31449600,c=r.times(31449600).times(o),e.abrupt("return",c.isFinite()?c.toFormat(O):0);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M=function(e){var t={0:1,1:1.1,2:1.15,50:1.25,200:1.4,1e3:1.6},n=t[0];return Object.keys(t).forEach((function(r){e>=r&&(n=t[r])})),n},N=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,n){var r,o,slot,c,d,l,h,v,w,x,k,O;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={lockTimeClaim:0,lockTimeDeposit:0,lockTimeWithdraw:0,lastClaim:0,timeToClaim:0,timeToDeposit:0,timeToWithdraw:0,amountLockClaim:0},e.prev=1,2!==n.version){e.next=16;break}return r.lockTimeClaim=n.raw.antiCompound,e.next=6,Object(m.j)(n.layer);case 6:return o=e.sent,e.next=9,o.utils.soliditySha3(o.utils.toBN(t).toString(),{type:"uint256",value:3===n.version?"55":"65"});case 9:return slot=e.sent,e.next=12,o.eth.getStorageAt(n.poolContract.address,slot);case 12:c=e.sent,r.lastClaim=parseInt(o.utils.hexToNumberString(c)||"0"),e.next=34;break;case 16:if(3!==n.version){e.next=34;break}return h=[{option:"Claim",remaining:"getRemainingTimelockClaim"},{option:"Deposit",remaining:"getRemainingTimelockDeposit"},{option:"Withdraw",remaining:"getRemainingTimelockWithdraw"}],v=[],e.next=21,Object(m.o)(n.poolContract,n.layer);case 21:w=e.sent,x=regeneratorRuntime.mark((function e(){var o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=O[k],0!==(c=n.raw["lockTime".concat(o.option)])){e.next=4;break}return e.abrupt("return",1);case 4:r["lockTime".concat(o.option)]=c,v.push(w.methods[o.remaining]().call({from:t}).then((function(e){return r["timeTo".concat(o.option)]=e})));case 6:case"end":return e.stop()}}),e)})),k=0,O=h;case 24:if(!(k<O.length)){e.next=31;break}return e.delegateYield(x(),"t0",26);case 26:if(!e.t0){e.next=28;break}return e.abrupt("continue",28);case 28:k++,e.next=24;break;case 31:return e.next=33,Promise.all(v);case 33:2===(null===(d=n.raw)||void 0===d||null===(d=d.amountLockClaim)||void 0===d?void 0:d.length)&&null!==(l=n.raw)&&void 0!==l&&l.amountLockClaim[1]&&(r.amountLockClaim=Object(f.a)(n.raw.amountLockClaim[0]));case 34:e.next=39;break;case 36:e.prev=36,e.t1=e.catch(1),console.error(e.t1);case 39:return e.abrupt("return",r);case 40:case"end":return e.stop()}}),e,null,[[1,36]])})));return function(t,n){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.raw.erc721LandRequirement,e.abrupt("return",null!=n&&n.balanceOf&&null!=n&&n.maxAmountBalanceOf?Object(f.a)(n.maxAmountBalanceOf):null);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(e){var t;if(3===e.version&&null!==(t=e.raw)&&void 0!==t&&t.maxMultiplier){for(var n={multiplier721:0,multiplier1155:0},r=0,o=["721","1155"];r<o.length;r++){var c=o[r],d=parseFloat(e.raw["multiplier".concat(c)]),l=parseFloat(e.raw["multiplierLimit".concat(c)]);n["multiplier".concat(c)]=d<l?d:l}return n}},_=function(e){var t={contractName:e?e.toLowerCase():"sand"};return"sand"!==t.contractName&&(t.contractName.includes("gem")&&(t.attributeType="gem"),t.contractName.includes("catalyst")&&(t.attributeType="catalyst")),t.attributeType&&(t.attribute=t.contractName.replace(t.attributeType,"")),t.attribute&&t.attributeType?(t.iconPath="/img/21_Cata_Gems/".concat(t.attribute,"-").concat(t.attributeType.substring(0,4),"-small.svg"),t.translationPath="common.".concat("gem"===t.attributeType?"gems":t.attributeType,".").concat(t.attribute)):(t.iconPath="/img/29_Staking/sand-icon-sml.svg",t.translationPath="common.sand"),t},W=function(){return l.a.getHistoricalSandUsdValueWeekly()},U=function(){return l.a.getHistoricalLandFloorUsdValueWeekly()},F=function(e){var t=e.action,n=e.amount,r=void 0===n?null:n,o={claim:"getReward",deposit:"stake"}[t]||t,c={method:o,params:[]};if(["stake","withdraw"].includes(o)){r=r||"100";var d=new k.a(r.replaceAll(",","")).times(new k.a(10).pow(18)).toString();c.params.push(d)}return c},G=function(e){var t,n=3,r=(null===(t=e.stakeTokenContract)||void 0===t||null===(t=t.name)||void 0===t?void 0:t.toLowerCase())||"sand";return"sandmatictoken"===r||"sandethtoken"===r?n=1:"sand"!==e.name.toLowerCase()||e.contributionContract||e.requiresLand||(n=2),n},B=function(e,t,n,r){var c=r.poolContract,d=r.stakeTokenContract,l=r.campaignContract,f=r.contributionContract,m=r.landContractL2,v=[];if(v.push({method:c.methods.totalSupply(),prop:"".concat(e.index,"-totalSupply")},{method:c.methods.totalContributions(),prop:"".concat(e.index,"-totalContributions")}),1===e.version&&(2!==e.layer&&h.isTestEnvironment||v.push({method:d.methods.getReserves(),prop:"".concat(e.index,"-stakeTokenReserves")},{method:d.methods.totalSupply(),prop:"".concat(e.index,"-stakeTokenSupply")},{method:d.methods.token0(),prop:"".concat(e.index,"-stakeToken0")},{method:d.methods.token1(),prop:"".concat(e.index,"-stakeToken1")}),2===e.layer&&v.push({method:c.methods.periodFinish(),prop:"".concat(e.index,"-finish1")},{method:c.methods.rewardRate(),prop:"".concat(e.index,"-rate1")})),2===e.version&&v.push({method:c.methods.antiCompound(),prop:"".concat(e.index,"-antiCompound")}),3===e.version&&(v.push({method:c.methods.timeLockClaim(),prop:"".concat(e.index,"-lockTimeClaim")},{method:c.methods.lockDeposit(),prop:"".concat(e.index,"-lockTimeDeposit")},{method:c.methods.lockWithdraw(),prop:"".concat(e.index,"-lockTimeWithdraw")},{method:c.methods.amountLockClaim(),prop:"".concat(e.index,"-amountLockClaim")},{method:c.methods.getERC721RequirementList(m.options.address),prop:"".concat(e.index,"-erc721LandRequirement")}),f&&v.push({method:f.methods.multiplierLimitERC721(),prop:"".concat(e.index,"-multiplierLimit721")},{method:f.methods.multiplierLimitERC1155(),prop:"".concat(e.index,"-multiplierLimit1155")},{method:f.methods.multiplierLimitERC1155(),prop:"".concat(e.index,"-multiplierLimit1155")},{method:f.methods.multiplierLimitERC721(),prop:"".concat(e.index,"-multiplierLimit721")})),e.campaignContract&&[2,3].includes(e.version)&&v.push({method:l.methods.finish1(),prop:"".concat(e.index,"-finish1")},{method:l.methods.finish2(),prop:"".concat(e.index,"-finish2")},{method:l.methods.rate1(),prop:"".concat(e.index,"-rate1")},{method:l.methods.rate2(),prop:"".concat(e.index,"-rate2")}),n){var w=function(e,t,n){var r=n.poolContract,o=n.stakeTokenContract,c=n.contributionContract,d=[];return d.push({method:r.methods.earned(t),prop:"".concat(e.index,"-earned")},{method:r.methods.contributionOf(t),prop:"".concat(e.index,"-contributionOf")},{method:r.methods.balanceOf(t),prop:"".concat(e.index,"-balanceOf")},{method:o.methods.balanceOf(t),prop:"".concat(e.index,"-stakeTokenBalance")},{method:o.methods.allowance(t,e.poolContract.address),prop:"".concat(e.index,"-allowance")}),3===e.version&&(d.push({method:r.methods.maxStakeAllowedCalculator(t),prop:"".concat(e.index,"-maxStakeAllowed")}),c&&d.push({method:c.methods.multiplierBalanceOfERC1155(t),prop:"".concat(e.index,"-multiplier1155")},{method:c.methods.multiplierBalanceOfERC721(t),prop:"".concat(e.index,"-multiplier721")})),d}(e,t,{poolContract:c,stakeTokenContract:d,campaignContract:l,contributionContract:f,landContractL2:m});v.push.apply(v,Object(o.a)(w))}return v},Y=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(t,n,o,c){var d,l,f,h,x,k,O,R,y,T,j,C,A,S,E,P=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d=P.length>4&&void 0!==P[4]&&P[4],(l=P.length>5&&void 0!==P[5]?P[5]:null)&&d&&n[m.a.POLYGON].push({method:l.methods.balanceOf(o),prop:"-balanceOfLandsL2"}),f=0,h=[m.a.ETHEREUM,m.a.POLYGON];case 4:if(!(f<h.length)){e.next=13;break}return x=h[f],e.next=8,Object(v.a)(x,n[x],null,Object(w.c)(window.$nuxt.$ff));case 8:for(k=e.sent,O=0,R=Object.entries(k);O<R.length;O++)y=Object(r.a)(R[O],2),T=y[0],j=y[1],C=T.split("-"),A=Object(r.a)(C,2),S=A[0],(E=A[1])!=="balanceOfLandsL".concat(x)||S?S&&(t[S].raw[E]=j):c("UPDATE_LAND_BALANCE_L2",j);case 10:f++,e.next=4;break;case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}()},786:function(e,t,n){"use strict";function r(){try{var canvas=document.createElement("canvas");return!(!window.WebGLRenderingContext||!canvas.getContext("webgl")&&!canvas.getContext("experimental-webgl"))}catch(e){return console.error(e),!1}}n.d(t,"a",(function(){return r}))}}]);