(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{66:function(e,r,n){var t;!function(o){"use strict";var f,c=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,l=Math.ceil,h=Math.floor,w="[BigNumber Error] ",m=w+"Number primitive has more than 15 significant digits: ",d=1e14,v=14,N=9007199254740991,O=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],y=1e7,E=1e9;function A(e){var i=0|e;return e>0||e===i?i:i-1}function S(a){for(var s,e,i=1,r=a.length,n=a[0]+"";i<r;){for(s=a[i++]+"",e=v-s.length;e--;s="0"+s);n+=s}for(r=n.length;48===n.charCodeAt(--r););return n.slice(0,r+1||1)}function R(e,r){var a,b,n=e.c,t=r.c,i=e.s,o=r.s,f=e.e,c=r.e;if(!i||!o)return null;if(a=n&&!n[0],b=t&&!t[0],a||b)return a?b?0:-o:i;if(i!=o)return i;if(a=i<0,b=f==c,!n||!t)return b?0:!n^a?1:-1;if(!b)return f>c^a?1:-1;for(o=(f=n.length)<(c=t.length)?f:c,i=0;i<o;i++)if(n[i]!=t[i])return n[i]>t[i]^a?1:-1;return f==c?0:f>c^a?1:-1}function _(e,r,n,t){if(e<r||e>n||e!==h(e))throw Error(w+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function D(e){var r=e.c.length-1;return A(e.e/v)==r&&e.c[r]%2!=0}function P(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function B(e,r,n){var t,o;if(r<0){for(o=n+".";++r;o+=n);e=o+e}else if(++r>(t=e.length)){for(o=n,r-=t;--r;o+=n);e+=o}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}f=function e(r){var div,n,t,o,f,L,x,U,I,T,C=Z.prototype={constructor:Z,toString:null,valueOf:null},M=new Z(1),G=20,k=4,F=-7,j=21,$=-1e7,z=1e7,H=!1,V=1,W=0,J={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},X="0123456789abcdefghijklmnopqrstuvwxyz",Y=!0;function Z(e,b){var r,o,f,l,i,w,d,O,y=this;if(!(y instanceof Z))return new Z(e,b);if(null==b){if(e&&!0===e._isBigNumber)return y.s=e.s,void(!e.c||e.e>z?y.c=y.e=null:e.e<$?y.c=[y.e=0]:(y.e=e.e,y.c=e.c.slice()));if((w="number"==typeof e)&&0*e==0){if(y.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,i=e;i>=10;i/=10,l++);return void(l>z?y.c=y.e=null:(y.e=l,y.c=[e]))}O=String(e)}else{if(!c.test(O=String(e)))return t(y,O,w);y.s=45==O.charCodeAt(0)?(O=O.slice(1),-1):1}(l=O.indexOf("."))>-1&&(O=O.replace(".","")),(i=O.search(/e/i))>0?(l<0&&(l=i),l+=+O.slice(i+1),O=O.substring(0,i)):l<0&&(l=O.length)}else{if(_(b,2,X.length,"Base"),10==b&&Y)return re(y=new Z(e),G+y.e+1,k);if(O=String(e),w="number"==typeof e){if(0*e!=0)return t(y,O,w,b);if(y.s=1/e<0?(O=O.slice(1),-1):1,Z.DEBUG&&O.replace(/^0\.0*|\./,"").length>15)throw Error(m+e)}else y.s=45===O.charCodeAt(0)?(O=O.slice(1),-1):1;for(r=X.slice(0,b),l=i=0,d=O.length;i<d;i++)if(r.indexOf(o=O.charAt(i))<0){if("."==o){if(i>l){l=d;continue}}else if(!f&&(O==O.toUpperCase()&&(O=O.toLowerCase())||O==O.toLowerCase()&&(O=O.toUpperCase()))){f=!0,i=-1,l=0;continue}return t(y,String(e),w,b)}w=!1,(l=(O=n(O,b,10,y.s)).indexOf("."))>-1?O=O.replace(".",""):l=O.length}for(i=0;48===O.charCodeAt(i);i++);for(d=O.length;48===O.charCodeAt(--d););if(O=O.slice(i,++d)){if(d-=i,w&&Z.DEBUG&&d>15&&(e>N||e!==h(e)))throw Error(m+y.s*e);if((l=l-i-1)>z)y.c=y.e=null;else if(l<$)y.c=[y.e=0];else{if(y.e=l,y.c=[],i=(l+1)%v,l<0&&(i+=v),i<d){for(i&&y.c.push(+O.slice(0,i)),d-=v;i<d;)y.c.push(+O.slice(i,i+=v));i=v-(O=O.slice(i)).length}else i-=d;for(;i--;O+="0");y.c.push(+O)}}else y.c=[y.e=0]}function K(e,i,r,n){var t,o,f,c,l;if(null==r?r=k:_(r,0,8),!e.c)return e.toString();if(t=e.c[0],f=e.e,null==i)l=S(e.c),l=1==n||2==n&&(f<=F||f>=j)?P(l,f):B(l,f,"0");else if(o=(e=re(new Z(e),i,r)).e,c=(l=S(e.c)).length,1==n||2==n&&(i<=o||o<=F)){for(;c<i;l+="0",c++);l=P(l,o)}else if(i-=f,l=B(l,o,"0"),o+1>c){if(--i>0)for(l+=".";i--;l+="0");}else if((i+=o-c)>0)for(o+1==c&&(l+=".");i--;l+="0");return e.s<0&&t?"-"+l:l}function Q(e,r){for(var n,t,i=1,o=new Z(e[0]);i<e.length;i++)(!(t=new Z(e[i])).s||(n=R(o,t))===r||0===n&&o.s===r)&&(o=t);return o}function ee(e,r,n){for(var i=1,t=r.length;!r[--t];r.pop());for(t=r[0];t>=10;t/=10,i++);return(n=i+n*v-1)>z?e.c=e.e=null:n<$?e.c=[e.e=0]:(e.e=n,e.c=r),e}function re(e,r,n,t){var o,i,f,c,w,m,N,y=e.c,E=O;if(y){e:{for(o=1,c=y[0];c>=10;c/=10,o++);if((i=r-o)<0)i+=v,f=r,w=y[m=0],N=h(w/E[o-f-1]%10);else if((m=l((i+1)/v))>=y.length){if(!t)break e;for(;y.length<=m;y.push(0));w=N=0,o=1,f=(i%=v)-v+1}else{for(w=c=y[m],o=1;c>=10;c/=10,o++);N=(f=(i%=v)-v+o)<0?0:h(w/E[o-f-1]%10)}if(t=t||r<0||null!=y[m+1]||(f<0?w:w%E[o-f-1]),t=n<4?(N||t)&&(0==n||n==(e.s<0?3:2)):N>5||5==N&&(4==n||t||6==n&&(i>0?f>0?w/E[o-f]:0:y[m-1])%10&1||n==(e.s<0?8:7)),r<1||!y[0])return y.length=0,t?(r-=e.e+1,y[0]=E[(v-r%v)%v],e.e=-r||0):y[0]=e.e=0,e;if(0==i?(y.length=m,c=1,m--):(y.length=m+1,c=E[v-i],y[m]=f>0?h(w/E[o-f]%E[f])*c:0),t)for(;;){if(0==m){for(i=1,f=y[0];f>=10;f/=10,i++);for(f=y[0]+=c,c=1;f>=10;f/=10,c++);i!=c&&(e.e++,y[0]==d&&(y[0]=1));break}if(y[m]+=c,y[m]!=d)break;y[m--]=0,c=1}for(i=y.length;0===y[--i];y.pop());}e.e>z?e.c=e.e=null:e.e<$&&(e.c=[e.e=0])}return e}function ne(e){var r,n=e.e;return null===n?e.toString():(r=S(e.c),r=n<=F||n>=j?P(r,n):B(r,n,"0"),e.s<0?"-"+r:r)}return Z.clone=e,Z.ROUND_UP=0,Z.ROUND_DOWN=1,Z.ROUND_CEIL=2,Z.ROUND_FLOOR=3,Z.ROUND_HALF_UP=4,Z.ROUND_HALF_DOWN=5,Z.ROUND_HALF_EVEN=6,Z.ROUND_HALF_CEIL=7,Z.ROUND_HALF_FLOOR=8,Z.EUCLID=9,Z.config=Z.set=function(e){var p,r;if(null!=e){if("object"!=typeof e)throw Error(w+"Object expected: "+e);if(e.hasOwnProperty(p="DECIMAL_PLACES")&&(_(r=e[p],0,E,p),G=r),e.hasOwnProperty(p="ROUNDING_MODE")&&(_(r=e[p],0,8,p),k=r),e.hasOwnProperty(p="EXPONENTIAL_AT")&&((r=e[p])&&r.pop?(_(r[0],-E,0,p),_(r[1],0,E,p),F=r[0],j=r[1]):(_(r,-E,E,p),F=-(j=r<0?-r:r))),e.hasOwnProperty(p="RANGE"))if((r=e[p])&&r.pop)_(r[0],-E,-1,p),_(r[1],1,E,p),$=r[0],z=r[1];else{if(_(r,-E,E,p),!r)throw Error(w+p+" cannot be zero: "+r);$=-(z=r<0?-r:r)}if(e.hasOwnProperty(p="CRYPTO")){if((r=e[p])!==!!r)throw Error(w+p+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw H=!r,Error(w+"crypto unavailable");H=r}else H=r}if(e.hasOwnProperty(p="MODULO_MODE")&&(_(r=e[p],0,9,p),V=r),e.hasOwnProperty(p="POW_PRECISION")&&(_(r=e[p],0,E,p),W=r),e.hasOwnProperty(p="FORMAT")){if("object"!=typeof(r=e[p]))throw Error(w+p+" not an object: "+r);J=r}if(e.hasOwnProperty(p="ALPHABET")){if("string"!=typeof(r=e[p])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(w+p+" invalid: "+r);Y="0123456789"==r.slice(0,10),X=r}}return{DECIMAL_PLACES:G,ROUNDING_MODE:k,EXPONENTIAL_AT:[F,j],RANGE:[$,z],CRYPTO:H,MODULO_MODE:V,POW_PRECISION:W,FORMAT:J,ALPHABET:X}},Z.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!Z.DEBUG)return!0;var i,r,n=e.c,t=e.e,s=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===s||-1===s)&&t>=-E&&t<=E&&t===h(t)){if(0===n[0]){if(0===t&&1===n.length)return!0;break e}if((i=(t+1)%v)<1&&(i+=v),String(n[0]).length==i){for(i=0;i<n.length;i++)if((r=n[i])<0||r>=d||r!==h(r))break e;if(0!==r)return!0}}}else if(null===n&&null===t&&(null===s||1===s||-1===s))return!0;throw Error(w+"Invalid BigNumber: "+e)},Z.maximum=Z.max=function(){return Q(arguments,-1)},Z.minimum=Z.min=function(){return Q(arguments,1)},Z.random=(o=9007199254740992,f=Math.random()*o&2097151?function(){return h(Math.random()*o)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var a,b,r,n,t,i=0,o=[],c=new Z(M);if(null==e?e=G:_(e,0,E),n=l(e/v),H)if(crypto.getRandomValues){for(a=crypto.getRandomValues(new Uint32Array(n*=2));i<n;)(t=131072*a[i]+(a[i+1]>>>11))>=9e15?(b=crypto.getRandomValues(new Uint32Array(2)),a[i]=b[0],a[i+1]=b[1]):(o.push(t%1e14),i+=2);i=n/2}else{if(!crypto.randomBytes)throw H=!1,Error(w+"crypto unavailable");for(a=crypto.randomBytes(n*=7);i<n;)(t=281474976710656*(31&a[i])+1099511627776*a[i+1]+4294967296*a[i+2]+16777216*a[i+3]+(a[i+4]<<16)+(a[i+5]<<8)+a[i+6])>=9e15?crypto.randomBytes(7).copy(a,i):(o.push(t%1e14),i+=7);i=n/7}if(!H)for(;i<n;)(t=f())<9e15&&(o[i++]=t%1e14);for(n=o[--i],e%=v,n&&e&&(t=O[v-e],o[i]=h(n/t)*t);0===o[i];o.pop(),i--);if(i<0)o=[r=0];else{for(r=-1;0===o[0];o.splice(0,1),r-=v);for(i=1,t=o[0];t>=10;t/=10,i++);i<v&&(r-=v-i)}return c.e=r,c.c=o,c}),Z.sum=function(){for(var i=1,e=arguments,r=new Z(e[0]);i<e.length;)r=r.plus(e[i++]);return r},n=function(){var e="0123456789";function r(e,r,n,t){for(var o,f,c=[0],i=0,l=e.length;i<l;){for(f=c.length;f--;c[f]*=r);for(c[0]+=t.indexOf(e.charAt(i++)),o=0;o<c.length;o++)c[o]>n-1&&(null==c[o+1]&&(c[o+1]=0),c[o+1]+=c[o]/n|0,c[o]%=n)}return c.reverse()}return function(n,t,o,f,c){var l,h,w,m,d,v,N,O,i=n.indexOf("."),y=G,E=k;for(i>=0&&(m=W,W=0,n=n.replace(".",""),v=(O=new Z(t)).pow(n.length-i),W=m,O.c=r(B(S(v.c),v.e,"0"),10,o,e),O.e=O.c.length),w=m=(N=r(n,t,o,c?(l=X,e):(l=e,X))).length;0==N[--m];N.pop());if(!N[0])return l.charAt(0);if(i<0?--w:(v.c=N,v.e=w,v.s=f,N=(v=div(v,O,y,E,o)).c,d=v.r,w=v.e),i=N[h=w+y+1],m=o/2,d=d||h<0||null!=N[h+1],d=E<4?(null!=i||d)&&(0==E||E==(v.s<0?3:2)):i>m||i==m&&(4==E||d||6==E&&1&N[h-1]||E==(v.s<0?8:7)),h<1||!N[0])n=d?B(l.charAt(1),-y,l.charAt(0)):l.charAt(0);else{if(N.length=h,d)for(--o;++N[--h]>o;)N[h]=0,h||(++w,N=[1].concat(N));for(m=N.length;!N[--m];);for(i=0,n="";i<=m;n+=l.charAt(N[i++]));n=B(n,w,l.charAt(0))}return n}}(),div=function(){function e(e,r,base){var n,t,o,f,c=0,i=e.length,l=r%y,h=r/y|0;for(e=e.slice();i--;)c=((t=l*(o=e[i]%y)+(n=h*o+(f=e[i]/y|0)*l)%y*y+c)/base|0)+(n/y|0)+h*f,e[i]=t%base;return c&&(e=[c].concat(e)),e}function r(a,b,e,r){var i,n;if(e!=r)n=e>r?1:-1;else for(i=n=0;i<e;i++)if(a[i]!=b[i]){n=a[i]>b[i]?1:-1;break}return n}function n(a,b,e,base){for(var i=0;e--;)a[e]-=i,i=a[e]<b[e]?1:0,a[e]=i*base+a[e]-b[e];for(;!a[0]&&a.length>1;a.splice(0,1));}return function(t,o,f,c,base){var l,w,i,m,N,O,y,q,E,S,R,_,D,P,B,L,x,s=t.s==o.s?1:-1,U=t.c,I=o.c;if(!(U&&U[0]&&I&&I[0]))return new Z(t.s&&o.s&&(U?!I||U[0]!=I[0]:I)?U&&0==U[0]||!I?0*s:s/0:NaN);for(E=(q=new Z(s)).c=[],s=f+(w=t.e-o.e)+1,base||(base=d,w=A(t.e/v)-A(o.e/v),s=s/v|0),i=0;I[i]==(U[i]||0);i++);if(I[i]>(U[i]||0)&&w--,s<0)E.push(1),m=!0;else{for(P=U.length,L=I.length,i=0,s+=2,(N=h(base/(I[0]+1)))>1&&(I=e(I,N,base),U=e(U,N,base),L=I.length,P=U.length),D=L,R=(S=U.slice(0,L)).length;R<L;S[R++]=0);x=I.slice(),x=[0].concat(x),B=I[0],I[1]>=base/2&&B++;do{if(N=0,(l=r(I,S,L,R))<0){if(_=S[0],L!=R&&(_=_*base+(S[1]||0)),(N=h(_/B))>1)for(N>=base&&(N=base-1),y=(O=e(I,N,base)).length,R=S.length;1==r(O,S,y,R);)N--,n(O,L<y?x:I,y,base),y=O.length,l=1;else 0==N&&(l=N=1),y=(O=I.slice()).length;if(y<R&&(O=[0].concat(O)),n(S,O,R,base),R=S.length,-1==l)for(;r(I,S,L,R)<1;)N++,n(S,L<R?x:I,R,base),R=S.length}else 0===l&&(N++,S=[0]);E[i++]=N,S[0]?S[R++]=U[D]||0:(S=[U[D]],R=1)}while((D++<P||null!=S[0])&&s--);m=null!=S[0],E[0]||E.splice(0,1)}if(base==d){for(i=1,s=E[0];s>=10;s/=10,i++);re(q,f+(q.e=i+w*v-1)+1,c,m)}else q.e=w,q.r=+m;return q}}(),L=/^(-?)0([xbo])(?=\w[\w.]*$)/i,x=/^([^.]+)\.$/,U=/^\.([^.]+)$/,I=/^-?(Infinity|NaN)$/,T=/^\s*\+(?=[\w.])|^\s+|\s+$/g,t=function(e,r,n,b){var base,s=n?r:r.replace(T,"");if(I.test(s))e.s=isNaN(s)?null:s<0?-1:1;else{if(!n&&(s=s.replace(L,(function(e,r,n){return base="x"==(n=n.toLowerCase())?16:"b"==n?2:8,b&&b!=base?e:r})),b&&(base=b,s=s.replace(x,"$1").replace(U,"0.$1")),r!=s))return new Z(s,base);if(Z.DEBUG)throw Error(w+"Not a"+(b?" base "+b:"")+" number: "+r);e.s=null}e.c=e.e=null},C.absoluteValue=C.abs=function(){var e=new Z(this);return e.s<0&&(e.s=1),e},C.comparedTo=function(e,b){return R(this,new Z(e,b))},C.decimalPlaces=C.dp=function(e,r){var n,t,o,f=this;if(null!=e)return _(e,0,E),null==r?r=k:_(r,0,8),re(new Z(f),e+f.e+1,r);if(!(n=f.c))return null;if(t=((o=n.length-1)-A(this.e/v))*v,o=n[o])for(;o%10==0;o/=10,t--);return t<0&&(t=0),t},C.dividedBy=C.div=function(e,b){return div(this,new Z(e,b),G,k)},C.dividedToIntegerBy=C.idiv=function(e,b){return div(this,new Z(e,b),0,1)},C.exponentiatedBy=C.pow=function(e,r){var n,t,i,o,f,c,m,d,N=this;if((e=new Z(e)).c&&!e.isInteger())throw Error(w+"Exponent not an integer: "+ne(e));if(null!=r&&(r=new Z(r)),f=e.e>14,!N.c||!N.c[0]||1==N.c[0]&&!N.e&&1==N.c.length||!e.c||!e.c[0])return d=new Z(Math.pow(+ne(N),f?e.s*(2-D(e)):+ne(e))),r?d.mod(r):d;if(c=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new Z(NaN);(t=!c&&N.isInteger()&&r.isInteger())&&(N=N.mod(r))}else{if(e.e>9&&(N.e>0||N.e<-1||(0==N.e?N.c[0]>1||f&&N.c[1]>=24e7:N.c[0]<8e13||f&&N.c[0]<=9999975e7)))return o=N.s<0&&D(e)?-0:0,N.e>-1&&(o=1/o),new Z(c?1/o:o);W&&(o=l(W/v+2))}for(f?(n=new Z(.5),c&&(e.s=1),m=D(e)):m=(i=Math.abs(+ne(e)))%2,d=new Z(M);;){if(m){if(!(d=d.times(N)).c)break;o?d.c.length>o&&(d.c.length=o):t&&(d=d.mod(r))}if(i){if(0===(i=h(i/2)))break;m=i%2}else if(re(e=e.times(n),e.e+1,1),e.e>14)m=D(e);else{if(0===(i=+ne(e)))break;m=i%2}N=N.times(N),o?N.c&&N.c.length>o&&(N.c.length=o):t&&(N=N.mod(r))}return t?d:(c&&(d=M.div(d)),r?d.mod(r):o?re(d,W,k,undefined):d)},C.integerValue=function(e){var r=new Z(this);return null==e?e=k:_(e,0,8),re(r,r.e+1,e)},C.isEqualTo=C.eq=function(e,b){return 0===R(this,new Z(e,b))},C.isFinite=function(){return!!this.c},C.isGreaterThan=C.gt=function(e,b){return R(this,new Z(e,b))>0},C.isGreaterThanOrEqualTo=C.gte=function(e,b){return 1===(b=R(this,new Z(e,b)))||0===b},C.isInteger=function(){return!!this.c&&A(this.e/v)>this.c.length-2},C.isLessThan=C.lt=function(e,b){return R(this,new Z(e,b))<0},C.isLessThanOrEqualTo=C.lte=function(e,b){return-1===(b=R(this,new Z(e,b)))||0===b},C.isNaN=function(){return!this.s},C.isNegative=function(){return this.s<0},C.isPositive=function(){return this.s>0},C.isZero=function(){return!!this.c&&0==this.c[0]},C.minus=function(e,b){var i,r,n,t,o=this,a=o.s;if(b=(e=new Z(e,b)).s,!a||!b)return new Z(NaN);if(a!=b)return e.s=-b,o.plus(e);var f=o.e/v,c=e.e/v,l=o.c,h=e.c;if(!f||!c){if(!l||!h)return l?(e.s=-b,e):new Z(h?o:NaN);if(!l[0]||!h[0])return h[0]?(e.s=-b,e):new Z(l[0]?o:3==k?-0:0)}if(f=A(f),c=A(c),l=l.slice(),a=f-c){for((t=a<0)?(a=-a,n=l):(c=f,n=h),n.reverse(),b=a;b--;n.push(0));n.reverse()}else for(r=(t=(a=l.length)<(b=h.length))?a:b,a=b=0;b<r;b++)if(l[b]!=h[b]){t=l[b]<h[b];break}if(t&&(n=l,l=h,h=n,e.s=-e.s),(b=(r=h.length)-(i=l.length))>0)for(;b--;l[i++]=0);for(b=d-1;r>a;){if(l[--r]<h[r]){for(i=r;i&&!l[--i];l[i]=b);--l[i],l[r]+=d}l[r]-=h[r]}for(;0==l[0];l.splice(0,1),--c);return l[0]?ee(e,l,c):(e.s=3==k?-1:1,e.c=[e.e=0],e)},C.modulo=C.mod=function(e,b){var q,s,r=this;return e=new Z(e,b),!r.c||!e.s||e.c&&!e.c[0]?new Z(NaN):!e.c||r.c&&!r.c[0]?new Z(r):(9==V?(s=e.s,e.s=1,q=div(r,e,0,3),e.s=s,q.s*=s):q=div(r,e,0,V),(e=r.minus(q.times(e))).c[0]||1!=V||(e.s=r.s),e)},C.multipliedBy=C.times=function(e,b){var r,n,i,t,o,f,c,l,h,w,m,N,O,base,E,S=this,R=S.c,_=(e=new Z(e,b)).c;if(!(R&&_&&R[0]&&_[0]))return!S.s||!e.s||R&&!R[0]&&!_||_&&!_[0]&&!R?e.c=e.e=e.s=null:(e.s*=S.s,R&&_?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=A(S.e/v)+A(e.e/v),e.s*=S.s,(c=R.length)<(w=_.length)&&(O=R,R=_,_=O,i=c,c=w,w=i),i=c+w,O=[];i--;O.push(0));for(base=d,E=y,i=w;--i>=0;){for(r=0,m=_[i]%E,N=_[i]/E|0,t=i+(o=c);t>i;)r=((l=m*(l=R[--o]%E)+(f=N*l+(h=R[o]/E|0)*m)%E*E+O[t]+r)/base|0)+(f/E|0)+N*h,O[t--]=l%base;O[t]=r}return r?++n:O.splice(0,1),ee(e,O,n)},C.negated=function(){var e=new Z(this);return e.s=-e.s||null,e},C.plus=function(e,b){var r,n=this,a=n.s;if(b=(e=new Z(e,b)).s,!a||!b)return new Z(NaN);if(a!=b)return e.s=-b,n.minus(e);var t=n.e/v,o=e.e/v,f=n.c,c=e.c;if(!t||!o){if(!f||!c)return new Z(a/0);if(!f[0]||!c[0])return c[0]?e:new Z(f[0]?n:0*a)}if(t=A(t),o=A(o),f=f.slice(),a=t-o){for(a>0?(o=t,r=c):(a=-a,r=f),r.reverse();a--;r.push(0));r.reverse()}for((a=f.length)-(b=c.length)<0&&(r=c,c=f,f=r,b=a),a=0;b;)a=(f[--b]=f[b]+c[b]+a)/d|0,f[b]=d===f[b]?0:f[b]%d;return a&&(f=[a].concat(f),++o),ee(e,f,o)},C.precision=C.sd=function(e,r){var n,t,o,f=this;if(null!=e&&e!==!!e)return _(e,1,E),null==r?r=k:_(r,0,8),re(new Z(f),e,r);if(!(n=f.c))return null;if(t=(o=n.length-1)*v+1,o=n[o]){for(;o%10==0;o/=10,t--);for(o=n[0];o>=10;o/=10,t++);}return e&&f.e+1>t&&(t=f.e+1),t},C.shiftedBy=function(e){return _(e,-9007199254740991,N),this.times("1e"+e)},C.squareRoot=C.sqrt=function(){var e,r,n,t,o,f=this,c=f.c,s=f.s,l=f.e,h=G+4,w=new Z("0.5");if(1!==s||!c||!c[0])return new Z(!s||s<0&&(!c||c[0])?NaN:c?f:1/0);if(0==(s=Math.sqrt(+ne(f)))||s==1/0?(((r=S(c)).length+l)%2==0&&(r+="0"),s=Math.sqrt(+r),l=A((l+1)/2)-(l<0||l%2),n=new Z(r=s==1/0?"5e"+l:(r=s.toExponential()).slice(0,r.indexOf("e")+1)+l)):n=new Z(s+""),n.c[0])for((s=(l=n.e)+h)<3&&(s=0);;)if(o=n,n=w.times(o.plus(div(f,o,h,1))),S(o.c).slice(0,s)===(r=S(n.c)).slice(0,s)){if(n.e<l&&--s,"9999"!=(r=r.slice(s-3,s+1))&&(t||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(re(n,n.e+G+2,1),e=!n.times(n).eq(f));break}if(!t&&(re(o,o.e+G+2,0),o.times(o).eq(f))){n=o;break}h+=4,s+=4,t=1}return re(n,n.e+G+1,k,e)},C.toExponential=function(e,r){return null!=e&&(_(e,0,E),e++),K(this,e,r,1)},C.toFixed=function(e,r){return null!=e&&(_(e,0,E),e=e+this.e+1),K(this,e,r)},C.toFormat=function(e,r,n){var t,o=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=J;else if("object"!=typeof n)throw Error(w+"Argument not an object: "+n);if(t=o.toFixed(e,r),o.c){var i,f=t.split("."),c=+n.groupSize,l=+n.secondaryGroupSize,h=n.groupSeparator||"",m=f[0],d=f[1],v=o.s<0,N=v?m.slice(1):m,O=N.length;if(l&&(i=c,c=l,l=i,O-=i),c>0&&O>0){for(i=O%c||c,m=N.substr(0,i);i<O;i+=c)m+=h+N.substr(i,c);l>0&&(m+=h+N.slice(i)),v&&(m="-"+m)}t=d?m+(n.decimalSeparator||"")+((l=+n.fractionGroupSize)?d.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):d):m}return(n.prefix||"")+t+(n.suffix||"")},C.toFraction=function(e){var r,n,t,o,f,c,l,h,m,q,d,s,N=this,y=N.c;if(null!=e&&(!(l=new Z(e)).isInteger()&&(l.c||1!==l.s)||l.lt(M)))throw Error(w+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+ne(l));if(!y)return new Z(N);for(r=new Z(M),m=n=new Z(M),t=h=new Z(M),s=S(y),f=r.e=s.length-N.e-1,r.c[0]=O[(c=f%v)<0?v+c:c],e=!e||l.comparedTo(r)>0?f>0?r:m:l,c=z,z=1/0,l=new Z(s),h.c[0]=0;q=div(l,r,0,1),1!=(o=n.plus(q.times(t))).comparedTo(e);)n=t,t=o,m=h.plus(q.times(o=m)),h=o,r=l.minus(q.times(o=r)),l=o;return o=div(e.minus(n),t,0,1),h=h.plus(o.times(m)),n=n.plus(o.times(t)),h.s=m.s=N.s,d=div(m,t,f*=2,k).minus(N).abs().comparedTo(div(h,n,f,k).minus(N).abs())<1?[m,t]:[h,n],z=c,d},C.toNumber=function(){return+ne(this)},C.toPrecision=function(e,r){return null!=e&&_(e,1,E),K(this,e,r,2)},C.toString=function(b){var e,r=this,s=r.s,t=r.e;return null===t?s?(e="Infinity",s<0&&(e="-"+e)):e="NaN":(null==b?e=t<=F||t>=j?P(S(r.c),t):B(S(r.c),t,"0"):10===b&&Y?e=B(S((r=re(new Z(r),G+t+1,k)).c),r.e,"0"):(_(b,2,X.length,"Base"),e=n(B(S(r.c),t,"0"),10,b,s,!0)),s<0&&r.c[0]&&(e="-"+e)),e},C.valueOf=C.toJSON=function(){return ne(this)},C._isBigNumber=!0,null!=r&&Z.set(r),Z}(),f.default=f.BigNumber=f,void 0===(t=function(){return f}.call(r,n,r,e))||(e.exports=t)}()}}]);