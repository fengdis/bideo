Function&&Function.prototype&&Function.prototype.bind&&(/MSIE ([6789]|10)/.test(navigator.userAgent)||(window.__twttr&&window.__twttr.widgets&&window.__twttr.widgets.loaded&&window.twttr.widgets.load&&window.twttr.widgets.load(),window.__twttr&&window.__twttr.widgets&&window.__twttr.widgets.init||function(t){function e(e){for(var n,i,o=e[0],s=e[1],a=0,c=[];a<o.length;a++)i=o[a],r[i]&&c.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(u&&u(e);c.length;)c.shift()()}var n={},r={2:0};function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,i){n=r[t]=[e,i]});e.push(n[2]=o);var s,a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(t){return i.p+"js/"+({0:"grid~moment~timeline~tweet",1:"moment~timeline~tweet",3:"dm_button",4:"button",5:"grid",6:"moment",7:"periscope_on_air",8:"timeline",9:"tweet"}[t]||t)+"."+{0:"e6c6c9e1c7f05a1ab5b34fc90a421fbc",1:"50bff1a04f1f37b6a41fa15859518e07",3:"d94bf01a218e83f1c167fc604c7cf0f3",4:"e96bb6acc0f8bda511c0c46a84ee18e4",5:"f25f2aad2251388739a584f6655bde0a",6:"054a65d5b3bab1beba3d1b4174a420f2",7:"bf2ff9598cfb6c3f040a5aa4ec24fe72",8:"a08df08384cf9c219dd21d7e6d8351c0",9:"3171caf60f847a5709d3f5593f45d0d5"}[t]+".js"}(t),s=function(e){u.onerror=u.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+i+": "+o+")");s.type=i,s.request=o,n[1](s)}r[t]=void 0}};var c=setTimeout(function(){s({type:"timeout",target:u})},12e4);u.onerror=u.onload=s,a.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://platform.twitter.com/",i.oe=function(t){throw console.error(t),t};var o=window.__twttrll=window.__twttrll||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var a=0;a<o.length;a++)e(o[a]);var u=s;i(i.s=93)}([function(t,e,n){var r=n(1);function i(t,e){var n;for(n in t)t.hasOwnProperty&&!t.hasOwnProperty(n)||e(n,t[n]);return t}function o(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function s(t){return t===Object(t)}function a(t){var e;if(!s(t))return!1;if(Object.keys)return!Object.keys(t).length;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}function u(t){return t?Array.prototype.slice.call(t):[]}t.exports={aug:function(t){return u(arguments).slice(1).forEach(function(e){i(e,function(e,n){t[e]=n})}),t},async:function(t,e){r.setTimeout(function(){t.call(e||null)},0)},compact:function t(e){return i(e,function(n,r){s(r)&&(t(r),a(r)&&delete e[n]),void 0!==r&&null!==r&&""!==r||delete e[n]}),e},contains:function(t,e){return!(!t||!t.indexOf)&&t.indexOf(e)>-1},forIn:i,isObject:s,isEmptyObject:a,toType:o,isType:function(t,e){return t==o(e)},toRealArray:u}},function(t,e){t.exports=window},function(t,e,n){var r=n(6);t.exports=function(){var t=this;this.promise=new r(function(e,n){t.resolve=e,t.reject=n})}},function(t,e,n){var r=n(15),i=/(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i,o=/(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,s=/^http(s?):\/\/(\w+\.)*twitter\.com([:/]|$)/i,a=/^http(s?):\/\/pbs\.twimg\.com\//,u=/^#?([^.,<>!\s/#\-()'"]+)$/,c=/twitter\.com(?::\d{2,4})?\/intent\/(\w+)/,d=/^https?:\/\/(?:www\.)?twitter\.com\/\w+\/timelines\/(\d+)/i,f=/^https?:\/\/(?:www\.)?twitter\.com\/i\/moments\/(\d+)/i,l=/^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/(?:likes|favorites)/i,h=/^https?:\/\/(?:www\.)?twitter\.com\/(\w+)\/lists\/([\w-]+)/i,p=/^https?:\/\/(?:www\.)?twitter\.com\/i\/live\/(\d+)/i,m=/^https?:\/\/syndication\.twitter\.com\/settings/i,v=/^https?:\/\/(localhost|platform)\.twitter\.com(?::\d+)?\/widgets\/widget_iframe\.(.+)/i,g=/^https?:\/\/(?:www\.)?twitter\.com\/search\?q=(\w+)/i;function w(t){return"string"==typeof t&&i.test(t)&&RegExp.$1.length<=20}function y(t){if(w(t))return RegExp.$1}function b(t,e){var n=r.decodeURL(t);if(e=e||!1,n.screen_name=y(t),n.screen_name)return r.url("https://twitter.com/intent/"+(e?"follow":"user"),n)}function _(t){return"string"==typeof t&&u.test(t)}function E(t){return"string"==typeof t&&o.test(t)}t.exports={isHashTag:_,hashTag:function(t,e){if(e=void 0===e||e,_(t))return(e?"#":"")+RegExp.$1},isScreenName:w,screenName:y,isStatus:E,status:function(t){return E(t)&&RegExp.$1},intentForProfileURL:b,intentForFollowURL:function(t){return b(t,!0)},isTwitterURL:function(t){return s.test(t)},isTwimgURL:function(t){return a.test(t)},isIntentURL:function(t){return c.test(t)},isSettingsURL:function(t){return m.test(t)},isWidgetIframeURL:function(t){return v.test(t)},isSearchUrl:function(t){return g.test(t)},regexen:{profile:i},momentId:function(t){return f.test(t)&&RegExp.$1},collectionId:function(t){return d.test(t)&&RegExp.$1},intentType:function(t){return c.test(t)&&RegExp.$1},likesScreenName:function(t){return l.test(t)&&RegExp.$1},listScreenNameAndSlug:function(t){return!!h.test(t)&&{ownerScreenName:RegExp.$1,slug:RegExp.$2}},eventId:function(t){return p.test(t)&&RegExp.$1}}},function(t,e,n){var r=n(0),i=[!0,1,"1","on","ON","true","TRUE","yes","YES"],o=[!1,0,"0","off","OFF","false","FALSE","no","NO"];function s(t){return void 0!==t&&null!==t&&""!==t}function a(t){return c(t)&&t%1==0}function u(t){return c(t)&&!a(t)}function c(t){return s(t)&&!isNaN(t)}function d(t){return r.contains(o,t)}function f(t){return r.contains(i,t)}t.exports={hasValue:s,isInt:a,isFloat:u,isNumber:c,isString:function(t){return"string"===r.toType(t)},isArray:function(t){return s(t)&&"array"==r.toType(t)},isTruthValue:f,isFalseValue:d,asInt:function(t){if(a(t))return parseInt(t,10)},asFloat:function(t){if(u(t))return t},asNumber:function(t){if(c(t))return t},asBoolean:function(t){return!(!s(t)||!f(t)&&(d(t)||!t))}}},function(t,e){t.exports=document},function(t,e,n){var r=n(1),i=n(21),o=n(45);i.hasPromiseSupport()||(r.Promise=o),t.exports=r.Promise},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=Array.prototype.slice.call(arguments,2);return function(){var i=r.toRealArray(arguments);return t.apply(e,n.concat(i))}}},function(t,e){t.exports=location},function(t,e,n){var r=n(47);t.exports=new r("__twttr")},function(t,e,n){var r=n(0),i=/\b([\w-_]+)\b/g;function o(t){return new RegExp("\\b"+t+"\\b","g")}function s(t,e){t.classList?t.classList.add(e):o(e).test(t.className)||(t.className+=" "+e)}function a(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(o(e)," ")}function u(t,e){return t.classList?t.classList.contains(e):r.contains(c(t),e)}function c(t){return r.toRealArray(t.classList?t.classList:t.className.match(i))}t.exports={add:s,remove:a,replace:function(t,e,n){if(t.classList&&u(t,e))return a(t,e),void s(t,n);t.className=t.className.replace(o(e),n)},toggle:function(t,e,n){return void 0===n&&t.classList&&t.classList.toggle?t.classList.toggle(e,n):(n?s(t,e):a(t,e),n)},present:u,list:c}},function(t,e,n){var r=n(18),i=n(4),o=n(15),s=n(0),a=n(118);t.exports=function(t){var e=t.href&&t.href.split("?")[1],n=e?o.decode(e):{},u={lang:a(t),width:t.getAttribute("data-width")||t.getAttribute("width"),height:t.getAttribute("data-height")||t.getAttribute("height"),related:t.getAttribute("data-related"),partner:t.getAttribute("data-partner")};return i.asBoolean(t.getAttribute("data-dnt"))&&r.setOn(),s.forIn(u,function(t,e){var r=n[t];n[t]=i.hasValue(r)?r:e}),s.compact(n)}},function(t,e,n){var r=n(82),i=n(23);t.exports=function(){var t="data-twitter-extracted-"+i.generate();return function(e,n){return r(e,n).filter(function(e){return!e.hasAttribute(t)}).map(function(e){return e.setAttribute(t,"true"),e})}}},function(t,e){function n(t,e,n,r,i,o){this.factory=t,this.Sandbox=e,this.srcEl=o,this.targetEl=i,this.parameters=r,this.className=n}n.prototype.destroy=function(){this.srcEl=this.targetEl=null},t.exports=n},function(t,e,n){var r=n(6),i=n(49),o=n(18),s=n(4),a=n(0);t.exports=function(t,e,n){var u;return t=t||[],e=e||{},u="ƒ("+t.join(", ")+", target, [options]);",function(){var c,d,f,l,h=Array.prototype.slice.apply(arguments,[0,t.length]),p=Array.prototype.slice.apply(arguments,[t.length]);return p.forEach(function(t){t&&(t.nodeType!==Node.ELEMENT_NODE?a.isType("function",t)?c=t:a.isType("object",t)&&(d=t):f=t)}),h.length!==t.length||0===p.length?(c&&a.async(function(){c(!1)}),r.reject(new Error("Not enough parameters. Expected: "+u))):f?(d=a.aug({},d||{},e),t.forEach(function(t){d[t]=h.shift()}),s.asBoolean(d.dnt)&&o.setOn(),l=i.addWidget(n(d,f)),c&&l.then(c,function(){c(!1)}),l):(c&&a.async(function(){c(!1)}),r.reject(new Error("No target element specified. Expected: "+u)))}}},function(t,e,n){var r=n(4),i=n(0);function o(t){return encodeURIComponent(t).replace(/\+/g,"%2B").replace(/'/g,"%27")}function s(t){return decodeURIComponent(t)}function a(t){var e=[];return i.forIn(t,function(t,n){var s=o(t);i.isType("array",n)||(n=[n]),n.forEach(function(t){r.hasValue(t)&&e.push(s+"="+o(t))})}),e.sort().join("&")}function u(t){var e={};return t?(t.split("&").forEach(function(t){var n=t.split("="),r=s(n[0]),o=s(n[1]);if(2==n.length){if(!i.isType("array",e[r]))return r in e?(e[r]=[e[r]],void e[r].push(o)):void(e[r]=o);e[r].push(o)}}),e):{}}t.exports={url:function(t,e){return a(e).length>0?i.contains(t,"?")?t+"&"+a(e):t+"?"+a(e):t},decodeURL:function(t){var e=t&&t.split("?");return 2==e.length?u(e[1]):{}},decode:u,encode:a,encodePart:o,decodePart:s}},function(t,e,n){var r=n(101),i=n(2),o=n(0);function s(t,e){return function(){try{e.resolve(t.call(this))}catch(t){e.reject(t)}}}t.exports={sync:function(t,e){t.call(e)},read:function(t,e){var n=new i;return r.read(s(t,n),e),n.promise},write:function(t,e){var n=new i;return r.write(s(t,n),e),n.promise},defer:function(t,e,n){var a=new i;return o.isType("function",t)&&(n=e,e=t,t=1),r.defer(t,s(e,a),n),a.promise}}},function(t,e,n){var r=n(9),i=function(){return r.get("backendHost")||"https://cdn.syndication.twimg.com"},o=function(){return r.get("settingsSvcHost")||"https://syndication.twitter.com"};function s(t,e){var n=[t];return e.forEach(function(t){n.push(function(t){var e=(t||"").toString(),n="/"===e.slice(0,1)?1:0,r=function(t){return"/"===t.slice(-1)}(e)?-1:void 0;return e.slice(n,r)}(t))}),n.join("/")}t.exports={cookieConsent:function(t){var e=t||[];return e.unshift("cookie/consent"),s(o(),e)},eventVideo:function(t){var e=t||[];return e.unshift("video/event"),s(i(),e)},grid:function(t){var e=t||[];return e.unshift("grid/collection"),s(i(),e)},moment:function(t){var e=t||[];return e.unshift("moments"),s(i(),e)},settings:function(t){var e=t||[];return e.unshift("settings"),s(o(),e)},timeline:function(t){var e=t||[];return e.unshift("timeline"),s(i(),e)},tweetBatch:function(t){var e=t||[];return e.unshift("tweets.json"),s(i(),e)},video:function(t){var e=t||[];return e.unshift("widgets/video"),s(i(),e)}}},function(t,e,n){var r=n(5),i=n(8),o=n(35),s=n(80),a=n(4),u=n(32),c=!1,d=/https?:\/\/([^/]+).*/i;t.exports={setOn:function(){c=!0},enabled:function(t,e){return!!(c||a.asBoolean(u.val("dnt"))||s.isUrlSensitive(e||i.host)||o.isFramed()&&s.isUrlSensitive(o.rootDocumentLocation())||(t=d.test(t||r.referrer)&&RegExp.$1)&&s.isUrlSensitive(t))}}},function(t,e,n){var r=n(8),i=n(1),o=n(0),s={},a=o.contains(r.href,"tw_debug=true");function u(){}function c(){}function d(){return i.performance&&+i.performance.now()||+new Date}function f(t,e){if(i.console&&i.console[t])switch(e.length){case 1:i.console[t](e[0]);break;case 2:i.console[t](e[0],e[1]);break;case 3:i.console[t](e[0],e[1],e[2]);break;case 4:i.console[t](e[0],e[1],e[2],e[3]);break;case 5:i.console[t](e[0],e[1],e[2],e[3],e[4]);break;default:0!==e.length&&i.console.warn&&i.console.warn("too many params passed to logger."+t)}}t.exports={devError:u,devInfo:c,devObject:function(t,e){},publicError:function(){f("error",o.toRealArray(arguments))},publicLog:function(){f("info",o.toRealArray(arguments))},time:function(t){a&&(s[t]=d())},timeEnd:function(t){a&&s[t]&&(d(),s[t])}}},function(t,e,n){var r=n(25),i=n(109);t.exports=r.build([i])},function(t,e,n){var r=n(5),i=n(19),o=n(94),s=n(1),a=n(0),u=o.userAgent;function c(t){return/(Trident|MSIE|Edge[/ ]?\d)/.test(t=t||u)}t.exports={retina:function(t){return(t=t||s).devicePixelRatio?t.devicePixelRatio>=1.5:!!t.matchMedia&&t.matchMedia("only screen and (min-resolution: 144dpi)").matches},anyIE:c,ie9:function(t){return/MSIE 9/.test(t=t||u)},ie10:function(t){return/MSIE 10/.test(t=t||u)},ios:function(t){return/(iPad|iPhone|iPod)/.test(t=t||u)},android:function(t){return/^Mozilla\/5\.0 \(Linux; (U; )?Android/.test(t=t||u)},canPostMessage:function(t,e){return t=t||s,e=e||u,t.postMessage&&!(c(e)&&t.opener)},touch:function(t,e,n){return t=t||s,e=e||o,n=n||u,"ontouchstart"in t||/Opera Mini/.test(n)||e.msMaxTouchPoints>0},cssTransitions:function(){var t=r.body.style;return void 0!==t.transition||void 0!==t.webkitTransition||void 0!==t.mozTransition||void 0!==t.oTransition||void 0!==t.msTransition},hasPromiseSupport:function(){return!!(s.Promise&&s.Promise.resolve&&s.Promise.reject&&s.Promise.all&&s.Promise.race&&(new s.Promise(function(e){t=e}),a.isType("function",t)));var t},hasIntersectionObserverSupport:function(){return!!s.IntersectionObserver},hasPerformanceInformation:function(){return s.performance&&s.performance.getEntriesByType},hasLocalStorageSupport:function(){try{return s.localStorage.setItem("local_storage_support_test","true"),void 0!==s.localStorage}catch(t){return i.devError("window.localStorage is not supported:",t),!1}}}},function(t,e,n){var r=n(6),i=n(2);function o(t,e){return t.then(e,e)}function s(t){return t instanceof r}t.exports={always:o,allResolved:function(t){var e;return void 0===t?r.reject(new Error("undefined is not an object")):Array.isArray(t)?(e=t.length)?new r(function(n,r){var i=0,o=[];function a(){(i+=1)===e&&(0===o.length?r():n(o))}function u(t){o.push(t),a()}t.forEach(function(t){s(t)?t.then(u,a):u(t)})}):r.resolve([]):r.reject(new Error("Type error"))},some:function(t){var e;return e=(t=t||[]).length,t=t.filter(s),e?e!==t.length?r.reject("non-Promise passed to .some"):new r(function(e,n){var r=0;function i(){(r+=1)===t.length&&n()}t.forEach(function(t){t.then(e,i)})}):r.reject("no promises passed to .some")},isPromise:s,allSettled:function(t){function e(){}return r.all((t||[]).map(function(t){return o(t,e)}))},timeout:function(t,e){var n=new i;return setTimeout(function(){n.reject(new Error("Promise timed out"))},e),t.then(function(t){n.resolve(t)},function(t){n.reject(t)}),n.promise}}},function(t,e){var n="i",r=0,i=0;t.exports={generate:function(){return n+String(+new Date)+Math.floor(1e5*Math.random())+r++},deterministic:function(){return n+String(i++)}}},function(t,e,n){var r=n(46),i=n(48),o=n(0);t.exports=o.aug(r.get("events")||{},i.Emitter)},function(t,e,n){var r=n(37),i=n(106),o=n(7);(r=Object.create(r)).build=o(r.build,null,i),t.exports=r},function(t,e,n){var r=n(37),i=n(38),o=n(7);(r=Object.create(r)).build=o(r.build,null,i),t.exports=r},function(t,e,n){var r=n(75),i=n(74),o=n(76),s=n(8),a=n(69),u=n(72),c=n(18),d=n(4),f=n(23),l=n(0);function h(t){if(!t||!t.headers)throw new Error("unexpected response schema");return{html:t.body,config:t.config,pollInterval:1e3*parseInt(t.headers.xPolling,10)||null,maxCursorPosition:t.headers.maxPosition,minCursorPosition:t.headers.minPosition}}function p(t){if(t&&t.headers)throw new Error(t.headers.status);throw t instanceof Error?t:new Error(t)}t.exports=function(t){t.params({instanceId:{required:!0,fallback:f.deterministic},lang:{required:!0,transform:a.matchLanguage,fallback:"en"},tweetLimit:{transform:d.asInt}}),t.defineProperty("endpoint",{get:function(){throw new Error("endpoint not specified")}}),t.defineProperty("pollEndpoint",{get:function(){return this.endpoint}}),t.define("cbId",function(t){var e=t?"_new":"_old";return"tl_"+this.params.instanceId+"_"+this.id+e}),t.define("queryParams",function(){return{lang:this.params.lang,tz:u.getTimezoneOffset(),t:r(),domain:s.host,tweet_limit:this.params.tweetLimit,dnt:c.enabled()}}),t.define("fetch",function(){return i.fetch(this.endpoint,this.queryParams(),o,this.cbId()).then(h,p)}),t.define("poll",function(t,e){var n,r;return n={since_id:(t=t||{}).sinceId,max_id:t.maxId,min_position:t.minPosition,max_position:t.maxPosition},r=l.aug(this.queryParams(),n),i.fetch(this.pollEndpoint,r,o,this.cbId(e)).then(h,p)})}},function(t,e,n){var r=n(48).makeEmitter();t.exports={emitter:r,START:"start",ALL_WIDGETS_RENDER_START:"all_widgets_render_start",ALL_WIDGETS_RENDER_END:"all_widgets_render_end",ALL_WIDGETS_AND_IMAGES_LOADED:"all_widgets_and_images_loaded"}},function(t,e,n){var r=n(5),i=n(0);t.exports=function(t,e,n){var o;if(n=n||r,t=t||{},e=e||{},t.name){try{o=n.createElement('<iframe name="'+t.name+'"></iframe>')}catch(e){(o=n.createElement("iframe")).name=t.name}delete t.name}else o=n.createElement("iframe");return t.id&&(o.id=t.id,delete t.id),o.allowtransparency="true",o.scrolling="no",o.setAttribute("frameBorder",0),o.setAttribute("allowTransparency",!0),i.forIn(t,function(t,e){o.setAttribute(t,e)}),i.forIn(e,function(t,e){o.style[t]=e}),o}},function(t,e,n){var r=n(1).JSON;t.exports={stringify:r.stringify||r.encode,parse:r.parse||r.decode}},function(t,e,n){var r=n(0),i=n(40);t.exports={closest:function t(e,n,o){var s;if(n)return o=o||n&&n.ownerDocument,s=r.isType("function",e)?e:function(t){return function(e){return!!e.tagName&&i(e,t)}}(e),n===o?s(n)?n:void 0:s(n)?n:t(s,n.parentNode,o)}}},function(t,e,n){var r,i=n(5);function o(t){var e,n,o,s=0;for(r={},e=(t=t||i).getElementsByTagName("meta");e[s];s++){if(n=e[s],/^twitter:/.test(n.getAttribute("name")))o=n.getAttribute("name").replace(/^twitter:/,"");else{if(!/^twitter:/.test(n.getAttribute("property")))continue;o=n.getAttribute("property").replace(/^twitter:/,"")}r[o]=n.getAttribute("content")||n.getAttribute("value")}}o(),t.exports={init:o,val:function(t){return r[t]}}},function(t,e,n){var r=n(5),i=n(30),o=n(18),s=n(0),a=n(41),u=n(9),c=n(3),d=n(31),f=a.version,l=u.get("clientEventEndpoint")||"https://syndication.twitter.com/i/jot",h=1;function p(t){return s.aug({client:"tfw"},t||{})}function m(t,e,n){return e=e||{},s.aug({},e,{_category_:t,triggered_on:e.triggered_on||+new Date,dnt:o.enabled(n)})}t.exports={extractTermsFromDOM:function t(e,n){var r;return n=n||{},e&&e.nodeType===Node.ELEMENT_NODE?((r=e.getAttribute("data-scribe"))&&r.split(" ").forEach(function(t){var e=t.trim().split(":"),r=e[0],i=e[1];r&&i&&!n[r]&&(n[r]=i)}),t(e.parentNode,n)):n},clickEventElement:function(t){var e=d.closest("[data-expanded-url]",t),n=e&&e.getAttribute("data-expanded-url");return n&&c.isTwitterURL(n)?"twitter_url":"url"},flattenClientEventPayload:function(t,e){return s.aug({},e,{event_namespace:t})},formatGenericEventData:m,formatClientEventData:function(t,e,n){var i=t&&t.widget_origin||r.referrer;return(t=m("tfw_client_event",t,i)).client_version=f,t.format_version=void 0!==n?n:1,e||(t.widget_origin=i),t},formatClientEventNamespace:p,formatTweetAssociation:function(t,e){var n={};return(e=e||{}).association_namespace=p(t),n[h]=e,n},noticeSeen:function(t){return"notice"===t.element&&"seen"===t.action},splitLogEntry:function(t){var e,n,r,i,o;return t.item_ids&&t.item_ids.length>1?(e=Math.floor(t.item_ids.length/2),n=t.item_ids.slice(0,e),r={},i=t.item_ids.slice(e),o={},n.forEach(function(e){r[e]=t.item_details[e]}),i.forEach(function(e){o[e]=t.item_details[e]}),[s.aug({},t,{item_ids:n,item_details:r}),s.aug({},t,{item_ids:i,item_details:o})]):[t]},stringify:function(t){var e,n=Array.prototype.toJSON;return delete Array.prototype.toJSON,e=i.stringify(t),n&&(Array.prototype.toJSON=n),e},AUDIENCE_ENDPOINT:"https://syndication.twitter.com/i/jot/syndication",CLIENT_EVENT_ENDPOINT:l,RUFOUS_REDIRECT:"https://platform.twitter.com/jot.html"}},function(t,e,n){var r=n(10),i={},o=-1,s={};function a(t){var e=t.getAttribute("data-twitter-event-id");return e||(t.setAttribute("data-twitter-event-id",++o),o)}function u(t,e,n){var r=0,i=t&&t.length||0;for(r=0;r<i;r++)if(t[r].call(e,n,e),n.ceaseImmediately)return!1}function c(t,e,n){for(var i=n||t.target||t.srcElement,o=r.list(i).map(function(t){return"."+t}).concat(i.tagName),s=0,a=o.length;s<a;s++)if(!1===u(e[o[s]],i,t))return;t.cease||i!==this&&c.call(this,t,e,i.parentElement||i.parentNode)}function d(t,e,n,r){function i(r){c.call(t,r,n[e])}!function(t,e,n,r){t.id&&(s[t.id]=s[t.id]||[],s[t.id].push({el:t,listener:e,type:n,rootId:r}))}(t,i,e,r),t.addEventListener(e,i,!1)}function f(t){t&&t.preventDefault?t.preventDefault():t.returnValue=!1}function l(t){t&&(t.cease=!0)&&t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}t.exports={stop:function(t){return l(t),f(t),!1},stopPropagation:l,stopImmediatePropagation:function(t){t&&(t.ceaseImmediately=!0,l(t),t.stopImmediatePropagation())},preventDefault:f,delegate:function(t,e,n,r){var o=a(t);i[o]=i[o]||{},i[o][e]||(i[o][e]={},d(t,e,i[o],o)),i[o][e][n]=i[o][e][n]||[],i[o][e][n].push(r)},simulate:function(t,e,n){var r=a(e),o=i[r]&&i[r];c.call(e,{target:n},o[t])},removeDelegatesForWidget:function(t){var e=s[t];e&&(e.forEach(function(t){t.el.removeEventListener(t.type,t.listener,!1),delete i[t.rootId]}),delete s[t])}}},function(t,e,n){var r=n(8),i=n(79),o=n(0),s=i.getCanonicalURL()||r.href,a=s;t.exports={isFramed:function(){return s!==a},rootDocumentLocation:function(t){return t&&o.isType("string",t)&&(s=t),s},currentDocumentLocation:function(){return a}}},function(t,e,n){var r=n(78),i=n(103),o=n(81),s=n(33),a=new(n(111))(function(t){var e,n,a;if(0!==t.length){if(u(t))return c(t);e=r(t,function(t){return s.noticeSeen(t.input.namespace)}),n=e.true,a=e.false,n&&n.length>0&&(n=n.slice(0,1),o.canFlushOneItem(n[0])||(n[0].input.data.message=""),c(n)),a&&(u(a)?c:function(t){i.init(),t.forEach(function(t){var e=t.input.namespace,n=t.input.data,r=t.input.offsite,o=t.input.version;i.clientEvent(e,n,r,o)}),i.flush().then(function(){t.forEach(function(t){t.taskDoneDeferred.resolve()})},function(){t.forEach(function(t){t.taskDoneDeferred.reject()})})})(a)}});function u(t){return 1===t.length&&o.canFlushOneItem(t[0])}function c(t){t.forEach(function(t){var e=t.input.namespace,n=t.input.data,r=t.input.offsite,i=t.input.version;o.clientEvent(e,n,r,i),t.taskDoneDeferred.resolve()})}t.exports={scribe:function(t,e,n,r){return a.add({namespace:t,data:e,offsite:n,version:r})},pause:function(){a.pause()},resume:function(){a.resume()}}},function(t,e,n){var r=n(104),i=n(105),o=n(0);t.exports={couple:function(){return o.toRealArray(arguments)},build:function(t,e,n){var o=new t;return(e=i(r(e||[]))).forEach(function(t){t.call(null,o)}),o.build(n)}}},function(t,e,n){var r=n(107),i=n(0),o=n(39);function s(){this.Component=this.factory(),this._adviceArgs=[],this._lastArgs=[]}i.aug(s.prototype,{factory:o,build:function(t){var e=this;return this.Component,i.aug(this.Component.prototype.boundParams,t),this._adviceArgs.concat(this._lastArgs).forEach(function(t){(function(t,e,n){var r=this[e];if(!r)throw new Error(e+" does not exist");this[e]=t(r,n)}).apply(e.Component.prototype,t)}),delete this._lastArgs,delete this._adviceArgs,this.Component},params:function(t){var e=this.Component.prototype.paramConfigs;t=t||{},this.Component.prototype.paramConfigs=i.aug({},t,e)},define:function(t,e){if(t in this.Component.prototype)throw new Error(t+" has previously been defined");this.override(t,e)},defineStatic:function(t,e){this.Component[t]=e},override:function(t,e){this.Component.prototype[t]=e},defineProperty:function(t,e){if(t in this.Component.prototype)throw new Error(t+" has previously been defined");this.overrideProperty(t,e)},overrideProperty:function(t,e){var n=i.aug({configurable:!0},e);Object.defineProperty(this.Component.prototype,t,n)},before:function(t,e){this._adviceArgs.push([r.before,t,e])},after:function(t,e){this._adviceArgs.push([r.after,t,e])},around:function(t,e){this._adviceArgs.push([r.around,t,e])},last:function(t,e){this._lastArgs.push([r.after,t,e])}}),t.exports=s},function(t,e,n){var r=n(0);function i(){return!0}function o(t){return t}t.exports=function(){function t(t){var e=this;t=t||{},this.params=Object.keys(this.paramConfigs).reduce(function(n,s){var a=[],u=e.boundParams,c=e.paramConfigs[s],d=c.validate||i,f=c.transform||o;if(s in u&&a.push(u[s]),s in t&&a.push(t[s]),a="fallback"in c?a.concat(c.fallback):a,n[s]=function(t,e,n){var i=null;return t.some(function(t){if(t=r.isType("function",t)?t():t,e(t))return i=n(t),!0}),i}(a,d,f),c.required&&null==n[s])throw new Error(s+" is a required parameter");return n},{}),this.initialize()}return r.aug(t.prototype,{paramConfigs:{},boundParams:{},initialize:function(){}}),t}},function(t,e,n){var r=n(1).HTMLElement,i=r.prototype.matches||r.prototype.matchesSelector||r.prototype.webkitMatchesSelector||r.prototype.mozMatchesSelector||r.prototype.msMatchesSelector||r.prototype.oMatchesSelector;t.exports=function(t,e){if(i)return i.call(t,e)}},function(t){t.exports={version:"2deec1d:1548887070531"}},function(t,e,n){var r,i=n(10),o=n(5),s=n(1),a=n(32),u=n(50),c=n(4),d=n(23),f="csptest";t.exports={inlineStyle:function(){var t=f+d.generate(),e=o.createElement("div"),n=o.createElement("style"),l="."+t+" { visibility: hidden; }";return!!o.body&&(c.asBoolean(a.val("widgets:csp"))&&(r=!1),void 0!==r?r:(e.style.display="none",i.add(e,t),n.type="text/css",n.appendChild(o.createTextNode(l)),o.body.appendChild(n),o.body.appendChild(e),r="hidden"===s.getComputedStyle(e).visibility,u(e),u(n),r))}}},function(t,e,n){var r=n(1);t.exports=function(t,e,n){var i,o=0;return n=n||null,function s(){var a=n||this,u=arguments,c=+new Date;if(r.clearTimeout(i),c-o>e)return o=c,void t.apply(a,u);i=r.setTimeout(function(){s.apply(a,u)},e)}}},function(t,e){t.exports=function(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height}}},function(t,e,n){}