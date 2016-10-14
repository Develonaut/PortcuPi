function navInit(e){var t=this,n=t.querySelector("[data-role=nav]"),r=t.querySelector("[data-role=sticky_nav]"),o=_.throttle(handleStickyNav.bind(r,n),150);t.addEventListener("scroll",o),checkMetaFile.apply(r,[n]),handleStickyNav.apply(r,[n])}function checkMetaFile(e){var t=this,n=e,r=t.querySelector("[data-role=my_meta]");sticky_nav_meta_button=n.querySelector("[data-role=my_meta]"),"undefined"!=typeof Storage&&(console.log("HTML5 Storage available"),metaFile?(console.log("metaFile exists:"+metaFile),sticky_nav_meta_button.classList.remove("disabled"),r.classList.remove("disabled")):console.log("No current metaFile"))}function handleStickyNav(e){var t=this,n=e,r={top:window.pageYOffset,bottom:window.pageYOffset+window.innerHeight,width:window.innerWidth},o=n.offsetTop+n.offsetHeight,i=t.offsetHeight,a=o-r.top,u=i-r.top,c=a,l=o;r.width<=713&&(c=u,l=i),0>=c&&t.classList.add("appear"),c===l&&t.classList.remove("appear")}function initGamePage(e){var t=this,n=t.querySelector("[data-role=mod]"),r=n.querySelector("[data-role=download]"),o=n.querySelector(".box-art"),i=n.querySelectorAll("[data-role=box_art]");r.addEventListener("click",createDownloadLink),addImageConstraints(i,o)}function addImageConstraints(e,t){e[0].offsetHeight&&e[0].offsetWidth?(t.style.overflow="hidden",Array.prototype.forEach.call(e,function(n,r){t.style.minHeight=e[0].offsetHeight+"px",t.style.minWidth=e[0].offsetWidth+"px",e[r].style.minHeight=e[0].offsetHeight+"px",e[r].style.minWidth=e[0].offsetWidth+"px"})):_.delay(addImageConstraints.bind(null,e,t),200)}function makeTextFile(){var e=this,t=e.getAttribute("data-game-name"),n=metaFile,r=t,o=new Blob([r],{type:"text/plain"});return null!==n&&(console.log("there already was a file stored"),window.URL.revokeObjectURL(n)),n=window.URL.createObjectURL(o),localStorage.setItem("metaFile",r),n}function createDownloadLink(e){self=this,self.href=makeTextFile.call(self,e)}(function(){function e(e){function t(t,n,r,o,i,a){for(;i>=0&&a>i;i+=e){var u=o?o[i]:i;r=n(r,t[u],u,t)}return r}return function(n,r,o,i){r=b(r,i,4);var a=!_(n)&&y.keys(n),u=(a||n).length,c=e>0?0:u-1;return arguments.length<3&&(o=n[a?a[c]:c],c+=e),t(n,r,o,a,c,u)}}function t(e){return function(t,n,r){n=w(n,r);for(var o=j(t),i=e>0?0:o-1;i>=0&&o>i;i+=e)if(n(t[i],i,t))return i;return-1}}function n(e,t,n){return function(r,o,i){var a=0,u=j(r);if("number"==typeof i)e>0?a=i>=0?i:Math.max(i+u,a):u=i>=0?Math.min(i+1,u):i+u+1;else if(n&&i&&u)return i=n(r,o),r[i]===o?i:-1;if(o!==o)return i=t(s.call(r,a,u),y.isNaN),i>=0?i+a:-1;for(i=e>0?a:u-1;i>=0&&u>i;i+=e)if(r[i]===o)return i;return-1}}function r(e,t){var n=T.length,r=e.constructor,o=y.isFunction(r)&&r.prototype||u,i="constructor";for(y.has(e,i)&&!y.contains(t,i)&&t.push(i);n--;)i=T[n],i in e&&e[i]!==o[i]&&!y.contains(t,i)&&t.push(i)}var o=this,i=o._,a=Array.prototype,u=Object.prototype,c=Function.prototype,l=a.push,s=a.slice,f=u.toString,p=u.hasOwnProperty,d=Array.isArray,h=Object.keys,m=c.bind,v=Object.create,g=function(){},y=function(e){return e instanceof y?e:this instanceof y?void(this._wrapped=e):new y(e)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=y),exports._=y):o._=y,y.VERSION="1.8.3";var b=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)};case 4:return function(n,r,o,i){return e.call(t,n,r,o,i)}}return function(){return e.apply(t,arguments)}},w=function(e,t,n){return null==e?y.identity:y.isFunction(e)?b(e,t,n):y.isObject(e)?y.matcher(e):y.property(e)};y.iteratee=function(e,t){return w(e,t,1/0)};var x=function(e,t){return function(n){var r=arguments.length;if(2>r||null==n)return n;for(var o=1;r>o;o++)for(var i=arguments[o],a=e(i),u=a.length,c=0;u>c;c++){var l=a[c];t&&void 0!==n[l]||(n[l]=i[l])}return n}},S=function(e){if(!y.isObject(e))return{};if(v)return v(e);g.prototype=e;var t=new g;return g.prototype=null,t},k=function(e){return function(t){return null==t?void 0:t[e]}},E=Math.pow(2,53)-1,j=k("length"),_=function(e){var t=j(e);return"number"==typeof t&&t>=0&&E>=t};y.each=y.forEach=function(e,t,n){t=b(t,n);var r,o;if(_(e))for(r=0,o=e.length;o>r;r++)t(e[r],r,e);else{var i=y.keys(e);for(r=0,o=i.length;o>r;r++)t(e[i[r]],i[r],e)}return e},y.map=y.collect=function(e,t,n){t=w(t,n);for(var r=!_(e)&&y.keys(e),o=(r||e).length,i=Array(o),a=0;o>a;a++){var u=r?r[a]:a;i[a]=t(e[u],u,e)}return i},y.reduce=y.foldl=y.inject=e(1),y.reduceRight=y.foldr=e(-1),y.find=y.detect=function(e,t,n){var r;return r=_(e)?y.findIndex(e,t,n):y.findKey(e,t,n),void 0!==r&&-1!==r?e[r]:void 0},y.filter=y.select=function(e,t,n){var r=[];return t=w(t,n),y.each(e,function(e,n,o){t(e,n,o)&&r.push(e)}),r},y.reject=function(e,t,n){return y.filter(e,y.negate(w(t)),n)},y.every=y.all=function(e,t,n){t=w(t,n);for(var r=!_(e)&&y.keys(e),o=(r||e).length,i=0;o>i;i++){var a=r?r[i]:i;if(!t(e[a],a,e))return!1}return!0},y.some=y.any=function(e,t,n){t=w(t,n);for(var r=!_(e)&&y.keys(e),o=(r||e).length,i=0;o>i;i++){var a=r?r[i]:i;if(t(e[a],a,e))return!0}return!1},y.contains=y.includes=y.include=function(e,t,n,r){return _(e)||(e=y.values(e)),("number"!=typeof n||r)&&(n=0),y.indexOf(e,t,n)>=0},y.invoke=function(e,t){var n=s.call(arguments,2),r=y.isFunction(t);return y.map(e,function(e){var o=r?t:e[t];return null==o?o:o.apply(e,n)})},y.pluck=function(e,t){return y.map(e,y.property(t))},y.where=function(e,t){return y.filter(e,y.matcher(t))},y.findWhere=function(e,t){return y.find(e,y.matcher(t))},y.max=function(e,t,n){var r,o,i=-1/0,a=-1/0;if(null==t&&null!=e){e=_(e)?e:y.values(e);for(var u=0,c=e.length;c>u;u++)r=e[u],r>i&&(i=r)}else t=w(t,n),y.each(e,function(e,n,r){o=t(e,n,r),(o>a||o===-1/0&&i===-1/0)&&(i=e,a=o)});return i},y.min=function(e,t,n){var r,o,i=1/0,a=1/0;if(null==t&&null!=e){e=_(e)?e:y.values(e);for(var u=0,c=e.length;c>u;u++)r=e[u],i>r&&(i=r)}else t=w(t,n),y.each(e,function(e,n,r){o=t(e,n,r),(a>o||1/0===o&&1/0===i)&&(i=e,a=o)});return i},y.shuffle=function(e){for(var t,n=_(e)?e:y.values(e),r=n.length,o=Array(r),i=0;r>i;i++)t=y.random(0,i),t!==i&&(o[i]=o[t]),o[t]=n[i];return o},y.sample=function(e,t,n){return null==t||n?(_(e)||(e=y.values(e)),e[y.random(e.length-1)]):y.shuffle(e).slice(0,Math.max(0,t))},y.sortBy=function(e,t,n){return t=w(t,n),y.pluck(y.map(e,function(e,n,r){return{value:e,index:n,criteria:t(e,n,r)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(r>n||void 0===r)return-1}return e.index-t.index}),"value")};var C=function(e){return function(t,n,r){var o={};return n=w(n,r),y.each(t,function(r,i){var a=n(r,i,t);e(o,r,a)}),o}};y.groupBy=C(function(e,t,n){y.has(e,n)?e[n].push(t):e[n]=[t]}),y.indexBy=C(function(e,t,n){e[n]=t}),y.countBy=C(function(e,t,n){y.has(e,n)?e[n]++:e[n]=1}),y.toArray=function(e){return e?y.isArray(e)?s.call(e):_(e)?y.map(e,y.identity):y.values(e):[]},y.size=function(e){return null==e?0:_(e)?e.length:y.keys(e).length},y.partition=function(e,t,n){t=w(t,n);var r=[],o=[];return y.each(e,function(e,n,i){(t(e,n,i)?r:o).push(e)}),[r,o]},y.first=y.head=y.take=function(e,t,n){return null==e?void 0:null==t||n?e[0]:y.initial(e,e.length-t)},y.initial=function(e,t,n){return s.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},y.last=function(e,t,n){return null==e?void 0:null==t||n?e[e.length-1]:y.rest(e,Math.max(0,e.length-t))},y.rest=y.tail=y.drop=function(e,t,n){return s.call(e,null==t||n?1:t)},y.compact=function(e){return y.filter(e,y.identity)};var A=function(e,t,n,r){for(var o=[],i=0,a=r||0,u=j(e);u>a;a++){var c=e[a];if(_(c)&&(y.isArray(c)||y.isArguments(c))){t||(c=A(c,t,n));var l=0,s=c.length;for(o.length+=s;s>l;)o[i++]=c[l++]}else n||(o[i++]=c)}return o};y.flatten=function(e,t){return A(e,t,!1)},y.without=function(e){return y.difference(e,s.call(arguments,1))},y.uniq=y.unique=function(e,t,n,r){y.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=w(n,r));for(var o=[],i=[],a=0,u=j(e);u>a;a++){var c=e[a],l=n?n(c,a,e):c;t?(a&&i===l||o.push(c),i=l):n?y.contains(i,l)||(i.push(l),o.push(c)):y.contains(o,c)||o.push(c)}return o},y.union=function(){return y.uniq(A(arguments,!0,!0))},y.intersection=function(e){for(var t=[],n=arguments.length,r=0,o=j(e);o>r;r++){var i=e[r];if(!y.contains(t,i)){for(var a=1;n>a&&y.contains(arguments[a],i);a++);a===n&&t.push(i)}}return t},y.difference=function(e){var t=A(arguments,!0,!0,1);return y.filter(e,function(e){return!y.contains(t,e)})},y.zip=function(){return y.unzip(arguments)},y.unzip=function(e){for(var t=e&&y.max(e,j).length||0,n=Array(t),r=0;t>r;r++)n[r]=y.pluck(e,r);return n},y.object=function(e,t){for(var n={},r=0,o=j(e);o>r;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},y.findIndex=t(1),y.findLastIndex=t(-1),y.sortedIndex=function(e,t,n,r){n=w(n,r,1);for(var o=n(t),i=0,a=j(e);a>i;){var u=Math.floor((i+a)/2);n(e[u])<o?i=u+1:a=u}return i},y.indexOf=n(1,y.findIndex,y.sortedIndex),y.lastIndexOf=n(-1,y.findLastIndex),y.range=function(e,t,n){null==t&&(t=e||0,e=0),n=n||1;for(var r=Math.max(Math.ceil((t-e)/n),0),o=Array(r),i=0;r>i;i++,e+=n)o[i]=e;return o};var O=function(e,t,n,r,o){if(!(r instanceof t))return e.apply(n,o);var i=S(e.prototype),a=e.apply(i,o);return y.isObject(a)?a:i};y.bind=function(e,t){if(m&&e.bind===m)return m.apply(e,s.call(arguments,1));if(!y.isFunction(e))throw new TypeError("Bind must be called on a function");var n=s.call(arguments,2),r=function(){return O(e,r,t,this,n.concat(s.call(arguments)))};return r},y.partial=function(e){var t=s.call(arguments,1),n=function(){for(var r=0,o=t.length,i=Array(o),a=0;o>a;a++)i[a]=t[a]===y?arguments[r++]:t[a];for(;r<arguments.length;)i.push(arguments[r++]);return O(e,n,this,this,i)};return n},y.bindAll=function(e){var t,n,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)n=arguments[t],e[n]=y.bind(e[n],e);return e},y.memoize=function(e,t){var n=function(r){var o=n.cache,i=""+(t?t.apply(this,arguments):r);return y.has(o,i)||(o[i]=e.apply(this,arguments)),o[i]};return n.cache={},n},y.delay=function(e,t){var n=s.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},y.defer=y.partial(y.delay,y,1),y.throttle=function(e,t,n){var r,o,i,a=null,u=0;n||(n={});var c=function(){u=n.leading===!1?0:y.now(),a=null,i=e.apply(r,o),a||(r=o=null)};return function(){var l=y.now();u||n.leading!==!1||(u=l);var s=t-(l-u);return r=this,o=arguments,0>=s||s>t?(a&&(clearTimeout(a),a=null),u=l,i=e.apply(r,o),a||(r=o=null)):a||n.trailing===!1||(a=setTimeout(c,s)),i}},y.debounce=function(e,t,n){var r,o,i,a,u,c=function(){var l=y.now()-a;t>l&&l>=0?r=setTimeout(c,t-l):(r=null,n||(u=e.apply(i,o),r||(i=o=null)))};return function(){i=this,o=arguments,a=y.now();var l=n&&!r;return r||(r=setTimeout(c,t)),l&&(u=e.apply(i,o),i=o=null),u}},y.wrap=function(e,t){return y.partial(t,e)},y.negate=function(e){return function(){return!e.apply(this,arguments)}},y.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},y.after=function(e,t){return function(){return--e<1?t.apply(this,arguments):void 0}},y.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),1>=e&&(t=null),n}},y.once=y.partial(y.before,2);var F=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];y.keys=function(e){if(!y.isObject(e))return[];if(h)return h(e);var t=[];for(var n in e)y.has(e,n)&&t.push(n);return F&&r(e,t),t},y.allKeys=function(e){if(!y.isObject(e))return[];var t=[];for(var n in e)t.push(n);return F&&r(e,t),t},y.values=function(e){for(var t=y.keys(e),n=t.length,r=Array(n),o=0;n>o;o++)r[o]=e[t[o]];return r},y.mapObject=function(e,t,n){t=w(t,n);for(var r,o=y.keys(e),i=o.length,a={},u=0;i>u;u++)r=o[u],a[r]=t(e[r],r,e);return a},y.pairs=function(e){for(var t=y.keys(e),n=t.length,r=Array(n),o=0;n>o;o++)r[o]=[t[o],e[t[o]]];return r},y.invert=function(e){for(var t={},n=y.keys(e),r=0,o=n.length;o>r;r++)t[e[n[r]]]=n[r];return t},y.functions=y.methods=function(e){var t=[];for(var n in e)y.isFunction(e[n])&&t.push(n);return t.sort()},y.extend=x(y.allKeys),y.extendOwn=y.assign=x(y.keys),y.findKey=function(e,t,n){t=w(t,n);for(var r,o=y.keys(e),i=0,a=o.length;a>i;i++)if(r=o[i],t(e[r],r,e))return r},y.pick=function(e,t,n){var r,o,i={},a=e;if(null==a)return i;y.isFunction(t)?(o=y.allKeys(a),r=b(t,n)):(o=A(arguments,!1,!1,1),r=function(e,t,n){return t in n},a=Object(a));for(var u=0,c=o.length;c>u;u++){var l=o[u],s=a[l];r(s,l,a)&&(i[l]=s)}return i},y.omit=function(e,t,n){if(y.isFunction(t))t=y.negate(t);else{var r=y.map(A(arguments,!1,!1,1),String);t=function(e,t){return!y.contains(r,t)}}return y.pick(e,t,n)},y.defaults=x(y.allKeys,!0),y.create=function(e,t){var n=S(e);return t&&y.extendOwn(n,t),n},y.clone=function(e){return y.isObject(e)?y.isArray(e)?e.slice():y.extend({},e):e},y.tap=function(e,t){return t(e),e},y.isMatch=function(e,t){var n=y.keys(t),r=n.length;if(null==e)return!r;for(var o=Object(e),i=0;r>i;i++){var a=n[i];if(t[a]!==o[a]||!(a in o))return!1}return!0};var M=function(e,t,n,r){if(e===t)return 0!==e||1/e===1/t;if(null==e||null==t)return e===t;e instanceof y&&(e=e._wrapped),t instanceof y&&(t=t._wrapped);var o=f.call(e);if(o!==f.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!==+e?+t!==+t:0===+e?1/+e===1/t:+e===+t;case"[object Date]":case"[object Boolean]":return+e===+t}var i="[object Array]"===o;if(!i){if("object"!=typeof e||"object"!=typeof t)return!1;var a=e.constructor,u=t.constructor;if(a!==u&&!(y.isFunction(a)&&a instanceof a&&y.isFunction(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1}n=n||[],r=r||[];for(var c=n.length;c--;)if(n[c]===e)return r[c]===t;if(n.push(e),r.push(t),i){if(c=e.length,c!==t.length)return!1;for(;c--;)if(!M(e[c],t[c],n,r))return!1}else{var l,s=y.keys(e);if(c=s.length,y.keys(t).length!==c)return!1;for(;c--;)if(l=s[c],!y.has(t,l)||!M(e[l],t[l],n,r))return!1}return n.pop(),r.pop(),!0};y.isEqual=function(e,t){return M(e,t)},y.isEmpty=function(e){return null==e?!0:_(e)&&(y.isArray(e)||y.isString(e)||y.isArguments(e))?0===e.length:0===y.keys(e).length},y.isElement=function(e){return!(!e||1!==e.nodeType)},y.isArray=d||function(e){return"[object Array]"===f.call(e)},y.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},y.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(e){y["is"+e]=function(t){return f.call(t)==="[object "+e+"]"}}),y.isArguments(arguments)||(y.isArguments=function(e){return y.has(e,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(y.isFunction=function(e){return"function"==typeof e||!1}),y.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},y.isNaN=function(e){return y.isNumber(e)&&e!==+e},y.isBoolean=function(e){return e===!0||e===!1||"[object Boolean]"===f.call(e)},y.isNull=function(e){return null===e},y.isUndefined=function(e){return void 0===e},y.has=function(e,t){return null!=e&&p.call(e,t)},y.noConflict=function(){return o._=i,this},y.identity=function(e){return e},y.constant=function(e){return function(){return e}},y.noop=function(){},y.property=k,y.propertyOf=function(e){return null==e?function(){}:function(t){return e[t]}},y.matcher=y.matches=function(e){return e=y.extendOwn({},e),function(t){return y.isMatch(t,e)}},y.times=function(e,t,n){var r=Array(Math.max(0,e));t=b(t,n,1);for(var o=0;e>o;o++)r[o]=t(o);return r},y.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},y.now=Date.now||function(){return(new Date).getTime()};var N={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},L=y.invert(N),I=function(e){var t=function(t){return e[t]},n="(?:"+y.keys(e).join("|")+")",r=RegExp(n),o=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(o,t):e}};y.escape=I(N),y.unescape=I(L),y.result=function(e,t,n){var r=null==e?void 0:e[t];return void 0===r&&(r=n),y.isFunction(r)?r.call(e):r};var P=0;y.uniqueId=function(e){var t=++P+"";return e?e+t:t},y.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},z=/\\|'|\r|\n|\u2028|\u2029/g,R=function(e){return"\\"+B[e]};y.template=function(e,t,n){!t&&n&&(t=n),t=y.defaults({},t,y.templateSettings);var r=RegExp([(t.escape||D).source,(t.interpolate||D).source,(t.evaluate||D).source].join("|")+"|$","g"),o=0,i="__p+='";e.replace(r,function(t,n,r,a,u){return i+=e.slice(o,u).replace(z,R),o=u+t.length,n?i+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(u){throw u.source=i,u}var c=function(e){return a.call(this,e,y)},l=t.variable||"obj";return c.source="function("+l+"){\n"+i+"}",c},y.chain=function(e){var t=y(e);return t._chain=!0,t};var q=function(e,t){return e._chain?y(t).chain():t};y.mixin=function(e){y.each(y.functions(e),function(t){var n=y[t]=e[t];y.prototype[t]=function(){var e=[this._wrapped];return l.apply(e,arguments),q(this,n.apply(y,e))}})},y.mixin(y),y.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=a[e];y.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],q(this,n)}}),y.each(["concat","join","slice"],function(e){var t=a[e];y.prototype[e]=function(){return q(this,t.apply(this._wrapped,arguments))}}),y.prototype.value=function(){return this._wrapped},y.prototype.valueOf=y.prototype.toJSON=y.prototype.value,y.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return y})}).call(this),window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function o(e,t){return r(x.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&g[o]!==n)return"pfx"==t?o:!0}return!1}function c(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?u(o,t):(o=(e+" "+E.join(r+" ")+r).split(" "),c(o,t,n))}function s(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)A[n[r]]=n[r]in y;return A.list&&(A.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),A}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r=0,o,i,a,u=e.length;u>r;r++)y.setAttribute("type",i=e[r]),o="text"!==y.type,o&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&y.style.WebkitAppearance!==n?(h.appendChild(y),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,h.removeChild(y)):/^(search|tel)$/.test(i)||(o=/^(url|email)$/.test(i)?y.checkValidity&&y.checkValidity()===!1:y.value!=b)),C[e[r]]=!!o;return C}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f="2.8.3",p={},d=!0,h=t.documentElement,m="modernizr",v=t.createElement(m),g=v.style,y=t.createElement("input"),b=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",k=S.split(" "),E=S.toLowerCase().split(" "),j={svg:"http://www.w3.org/2000/svg"},_={},C={},A={},O=[],F=O.slice,T,M=function(e,n,r,o){var i,a,u,c,l=t.createElement("div"),s=t.body,f=s||t.createElement("body");if(parseInt(r,10))for(;r--;)u=t.createElement("div"),u.id=o?o[r]:m+(r+1),l.appendChild(u);return i=["&#173;",'<style id="s',m,'">',e,"</style>"].join(""),l.id=m,(s?l:f).innerHTML+=i,f.appendChild(l),s||(f.style.background="",f.style.overflow="hidden",c=h.style.overflow,h.style.overflow="hidden",h.appendChild(f)),a=n(l,e),s?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),h.style.overflow=c),!!a},N=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return M("@media "+t+" { #"+m+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},L=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),I={}.hasOwnProperty,P;P=i(I,"undefined")||i(I.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return I.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=F.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(F.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(F.call(arguments)))};return r}),_.flexbox=function(){return l("flexWrap")},_.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},_.canvastext=function(){return!!p.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},_.webgl=function(){return!!e.WebGLRenderingContext},_.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:M(["@media (",x.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},_.geolocation=function(){return"geolocation"in navigator},_.postmessage=function(){return!!e.postMessage},_.websqldatabase=function(){return!!e.openDatabase},_.indexedDB=function(){return!!l("indexedDB",e)},_.hashchange=function(){return L("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},_.history=function(){return!!e.history&&!!history.pushState},_.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},_.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},_.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(g.backgroundColor,"rgba")},_.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(g.backgroundColor,"rgba")||a(g.backgroundColor,"hsla")},_.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(g.background)},_.backgroundsize=function(){return l("backgroundSize")},_.borderimage=function(){return l("borderImage")},_.borderradius=function(){return l("borderRadius")},_.boxshadow=function(){return l("boxShadow")},_.textshadow=function(){return""===t.createElement("div").style.textShadow},_.opacity=function(){return o("opacity:.55"),/^0.55$/.test(g.opacity)},_.cssanimations=function(){return l("animationName")},_.csscolumns=function(){return l("columnCount")},_.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+x.join(n+e)).slice(0,-e.length)),a(g.backgroundImage,"gradient")},_.cssreflections=function(){return l("boxReflect")},_.csstransforms=function(){return!!l("transform")},_.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in h.style&&M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},_.csstransitions=function(){return l("transition")},_.fontface=function(){var e;return M('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},_.generatedcontent=function(){var e;return M(["#",m,"{font:0/0 a}#",m,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},_.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},_.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},_.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(e){return!1}},_.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(e){return!1}},_.webworkers=function(){return!!e.Worker},_.applicationcache=function(){return!!e.applicationCache},_.svg=function(){return!!t.createElementNS&&!!t.createElementNS(j.svg,"svg").createSVGRect},_.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==j.svg},_.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(j.svg,"animate")))},_.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(j.svg,"clipPath")))};for(var D in _)P(_,D)&&(T=D.toLowerCase(),p[T]=_[D](),O.push((p[T]?"":"no-")+T));return p.input||s(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)P(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof d&&d&&(h.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),v=y=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},m++,e[h]=m,v[m]=t),t}function i(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,u=r(),c=u.length;c>a;a++)i.createElement(u[a]);return i}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=o(e);return y.shivCSS&&!d&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||u(e,r),e}var l="3.7.0",s=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d,h="_html5shiv",m=0,v={},g;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",d="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){d=!0,g=!0}}();var y={elements:s.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:s.shivCSS!==!1,supportsUnknownElements:g,shivMethods:s.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:a};e.html5=y,c(t)}(this,t),p._version=f,p._prefixes=x,p._domPrefixes=E,p._cssomPrefixes=k,p.mq=N,p.hasEvent=L,p.testProp=function(e){return u([e])},p.testAllProps=l,p.testStyles=M,p.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(d?" js "+O.join(" "):""),p}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==h.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=m.shift();v=1,e?e.t?p(function(){("c"==e.t?C.injectCss:C.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):v=0}function c(e,n,r,o,i,c,l){function s(t){if(!h&&a(f.readyState)&&(w.r=h=1,!v&&u(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&p(function(){b.removeChild(f)},50);for(var r in E[n])E[n].hasOwnProperty(r)&&E[n][r].onload()}}var l=l||C.errorTimeout,f=t.createElement(e),h=0,g=0,w={t:r,s:n,e:i,a:c,x:l};1===E[n]&&(g=1,E[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){s.call(this,g)},m.splice(o,0,w),"img"!=e&&(g||2===E[n]?(b.insertBefore(f,y?null:d),p(s,l)):E[n].push(f))}function l(e,t,n,r,i){return v=0,t=t||"j",o(e)?c("c"==t?x:w,e,t,this.i++,n,r,i):(m.splice(this.i++,0,e),1==m.length&&u()),this}function s(){var e=C;return e.loader={load:l,i:0},e}var f=t.documentElement,p=e.setTimeout,d=t.getElementsByTagName("script")[0],h={}.toString,m=[],v=0,g="MozAppearance"in f.style,y=g&&!!t.createRange().compareNode,b=y?f:d.parentNode,f=e.opera&&"[object Opera]"==h.call(e.opera),f=!!t.attachEvent&&!f,w=g?"object":f?"script":"img",x=f?"script":w,S=Array.isArray||function(e){return"[object Array]"==h.call(e)},k=[],E={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},_,C;C=function(e){function t(e){var e=e.split("!"),t=k.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},o,i,a;for(i=0;r>i;i++)a=e[i].split("="),(o=j[a.shift()])&&(n=o(n,a));for(i=0;t>i;i++)n=k[i](n);return n}function a(e,o,i,a,u){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,o,i,a,u):(E[c.url]?c.noexec=!0:E[c.url]=1,i.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(o)||r(l))&&i.load(function(){s(),o&&o(c.origUrl,u,a),l&&l(c.origUrl,u,a),E[c.url]=2})))}function u(e,t){function n(e,n){if(e){if(o(e))n||(l=function(){var e=[].slice.call(arguments);s.apply(this,e),f()}),a(e,l,t,0,u);else if(Object(e)===e)for(d in p=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(d)&&(!n&&!--p&&(r(l)?l=function(){var e=[].slice.call(arguments);s.apply(this,e),f()}:l[d]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(s[d])),a(e[d],l,t,d,u))}else!n&&f()}var u=!!e.test,c=e.load||e.both,l=e.callback||i,s=l,f=e.complete||i,p,d;n(u?e.yep:e.nope,!!c),c&&n(c)}var c,l,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(S(e))for(c=0;c<e.length;c++)l=e[c],o(l)?a(l,0,f,0):S(l)?C(l):Object(l)===l&&u(l,f);else Object(e)===e&&u(e,f)},C.addPrefix=function(e,t){
j[e]=t},C.addFilter=function(e){k.push(e)},C.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",_=function(){t.removeEventListener("DOMContentLoaded",_,0),t.readyState="complete"},0)),e.yepnope=s(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,o,c,l){var s=t.createElement("script"),f,h,o=o||C.errorTimeout;s.src=e;for(h in r)s.setAttribute(h,r[h]);n=l?u:n||i,s.onreadystatechange=s.onload=function(){!f&&a(s.readyState)&&(f=1,n(),s.onload=s.onreadystatechange=null)},p(function(){f||(f=1,n(1))},o),c?s.onload():d.parentNode.insertBefore(s,d)},e.yepnope.injectCss=function(e,n,r,o,a,c){var o=t.createElement("link"),l,n=c?u:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(d.parentNode.insertBefore(o,d),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};var metaFile=localStorage.getItem("metaFile");document.addEventListener("DOMContentLoaded",navInit.bind(document)),document.addEventListener("DOMContentLoaded",initGamePage.bind(document));
//# sourceMappingURL=./game-min.js.map