!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}([function(t,e,n){"use strict";e.__esModule=!0,e.extend=s,e.indexOf=function(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!i.test(t))return t;return t.replace(o,a)},e.isEmpty=function(t){return!t&&0!==t||!(!u(t)||0!==t.length)},e.createFrame=function(t){var e=s({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,i=/[&<>"'`=]/;function a(t){return r[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var c=Object.prototype.toString;e.toString=c;var l=function(t){return"function"==typeof t};l(/x/)&&(e.isFunction=l=function(t){return"function"==typeof t&&"[object Function]"===c.call(t)}),e.isFunction=l;var u=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===c.call(t)};e.isArray=u},function(t,e,n){"use strict";e.__esModule=!0;var r=["description","fileName","lineNumber","message","name","number","stack"];function o(t,e){var n=e&&e.loc,i=void 0,a=void 0;n&&(t+=" - "+(i=n.start.line)+":"+(a=n.start.column));for(var s=Error.prototype.constructor.call(this,t),c=0;c<r.length;c++)this[r[c]]=s[r[c]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{n&&(this.lineNumber=i,Object.defineProperty?Object.defineProperty(this,"column",{value:a,enumerable:!0}):this.column=a)}catch(t){}}o.prototype=new Error,e.default=o,t.exports=e.default},function(t,e,n){var r=n(11);t.exports=(r.default||r).template({compiler:[7,">= 4.0.0"],main:function(t,e,n,r,o){var i,a=null!=e?e:t.nullContext||{},s=n.helperMissing,c=t.escapeExpression;return'<li class="note-list__item" data-id="'+c("function"==typeof(i=null!=(i=n.id||(null!=e?e.id:e))?i:s)?i.call(a,{name:"id",hash:{},data:o}):i)+'">\n    <div class="note">\n        <div class="note__content">\n            <h2 class="note__title">'+c("function"==typeof(i=null!=(i=n.title||(null!=e?e.title:e))?i:s)?i.call(a,{name:"title",hash:{},data:o}):i)+'</h2>\n            <p class="note__body">'+c("function"==typeof(i=null!=(i=n.body||(null!=e?e.body:e))?i:s)?i.call(a,{name:"body",hash:{},data:o}):i)+'</p>\n        </div>\n        <footer class="note__footer">\n            <section class="note__section">\n                <button class="action" data-action="decrease-priority">\n                    <i class="material-icons action__icon">expand_more</i>\n                </button>\n                <button class="action" data-action="increase-priority">\n                    <i class="material-icons action__icon">expand_less</i>\n                </button>\n                <span class="note__priority">Priority: '+c("function"==typeof(i=null!=(i=n.priority||(null!=e?e.priority:e))?i:s)?i.call(a,{name:"priority",hash:{},data:o}):i)+'</span>\n            </section>\n            <section class="note__section">\n                <button class="action" data-action="edit-note">\n                    <i class="material-icons action__icon">edit</i>\n                </button>\n                <button class="action" data-action="delete-note">\n                    <i class="material-icons action__icon">delete</i>\n                </button>\n            </section>\n        </footer>\n    </div>\n</li>'},useData:!0})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=l;var o=n(0),i=r(n(1)),a=n(13),s=n(21),c=r(n(23));e.VERSION="4.1.2";e.COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function l(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},a.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}l.prototype={constructor:l,logger:c.default,log:c.default.log,registerHelper:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple helpers");o.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===o.toString.call(t))o.extend(this.partials,t);else{if(void 0===e)throw new i.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===o.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple decorators");o.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]}};var u=c.default.log;e.log=u,e.createFrame=o.createFrame,e.logger=c.default},function(t,e,n){},function(t,e,n){var r=n(6);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(8)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(7)(!1)).push([t.i,'@-webkit-keyframes fadeinup{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadeinup{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fadeoutdown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes fadeoutdown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@-webkit-keyframes ripple{0%{-webkit-transform:scale(0) translateY(-45%) translateX(13%);transform:scale(0) translateY(-45%) translateX(13%)}to{-webkit-transform:scale(1) translateY(-45%) translateX(13%);transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{-webkit-transform:scale(0) translateY(-45%) translateX(13%);transform:scale(0) translateY(-45%) translateX(13%)}to{-webkit-transform:scale(1) translateY(-45%) translateX(13%);transform:scale(1) translateY(-45%) translateX(13%)}}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.notyf__icon--error:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;bottom:-100%;-webkit-animation:fadeinup .3s ease-in forwards;animation:fadeinup .3s ease-in forwards;box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 13px;border-radius:2px;margin-top:12px;max-width:300px;-webkit-transform:translateY(25%);transform:translateY(25%)}.notyf__toast--disappear{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation:fadeoutdown .3s forwards;animation:fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:fadeoutdown .3s forwards;animation:fadeoutdown .3s forwards;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__ripple{height:400px;width:400px;position:absolute;-webkit-transform-origin:bottom right;transform-origin:bottom right;right:0;top:0;border-radius:50%;-webkit-transform:scale(0) translateY(-51%) translateX(13%);transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:flex;align-items:center;padding-top:20px;padding-bottom:20px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:fadeinup .3s forwards;animation:fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:fadeinup .3s forwards;animation:fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf{position:fixed;bottom:20px;right:30px;color:#fff;z-index:9999;display:flex;flex-direction:column;align-items:flex-end}@media only screen and (max-width:480px){.notyf{bottom:0;left:0;right:0;align-items:normal}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;box-shadow:0 -2px 7px 0 rgba(0,0,0,.13)}}',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,u=[],f=n(9);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),h(t,e),e}function y(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=c||(c=v(e)),r=_.bind(null,n,a,!1),o=_.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function _(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t){t.exports={}},function(t,e,n){t.exports=n(12).default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var i=o(n(3)),a=r(n(24)),s=r(n(1)),c=o(n(0)),l=o(n(25)),u=r(n(26));function f(){var t=new i.HandlebarsEnvironment;return c.extend(t,i),t.SafeString=a.default,t.Exception=s.default,t.Utils=c,t.escapeExpression=c.escapeExpression,t.VM=l,t.template=function(e){return l.template(e,t)},t}var d=f();d.create=f,u.default(d),d.default=d,e.default=d,t.exports=e.default},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){o.default(t),i.default(t),a.default(t),s.default(t),c.default(t),l.default(t),u.default(t)};var o=r(n(14)),i=r(n(15)),a=r(n(16)),s=r(n(17)),c=r(n(18)),l=r(n(19)),u=r(n(20))},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("blockHelperMissing",function(e,n){var o=n.inverse,i=n.fn;if(!0===e)return i(this);if(!1===e||null==e)return o(this);if(r.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):o(this);if(n.data&&n.ids){var a=r.createFrame(n.data);a.contextPath=r.appendContextPath(n.data.contextPath,n.name),n={data:a}}return i(e,n)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(0),i=n(1),a=(r=i)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("each",function(t,e){if(!e)throw new a.default("Must pass iterator to #each");var n=e.fn,r=e.inverse,i=0,s="",c=void 0,l=void 0;function u(e,r,i){c&&(c.key=e,c.index=r,c.first=0===r,c.last=!!i,l&&(c.contextPath=l+e)),s+=n(t[e],{data:c,blockParams:o.blockParams([t[e],e],[l+e,null])})}if(e.data&&e.ids&&(l=o.appendContextPath(e.data.contextPath,e.ids[0])+"."),o.isFunction(t)&&(t=t.call(this)),e.data&&(c=o.createFrame(e.data)),t&&"object"==typeof t)if(o.isArray(t))for(var f=t.length;i<f;i++)i in t&&u(i,i,i===t.length-1);else{var d=void 0;for(var p in t)t.hasOwnProperty(p)&&(void 0!==d&&u(d,i-1),d=p,i++);void 0!==d&&u(d,i-1,!0)}return 0===i&&(s=r(this)),s})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r,o=n(1),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("if",function(t,e){return r.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||r.isEmpty(t)?e.inverse(this):e.fn(this)}),t.registerHelper("unless",function(e,n){return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",function(){for(var e=[void 0],n=arguments[arguments.length-1],r=0;r<arguments.length-1;r++)e.push(arguments[r]);var o=1;null!=n.hash.level?o=n.hash.level:n.data&&null!=n.data.level&&(o=n.data.level),e[0]=o,t.log.apply(t,e)})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",function(t,e){return t?"constructor"!==e||t.propertyIsEnumerable(e)?t[e]:void 0:t})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerHelper("with",function(t,e){r.isFunction(t)&&(t=t.call(this));var n=e.fn;if(r.isEmpty(t))return e.inverse(this);var o=e.data;return e.data&&e.ids&&((o=r.createFrame(e.data)).contextPath=r.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:o,blockParams:r.blockParams([t],[o&&o.contextPath])})})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){i.default(t)};var r,o=n(22),i=(r=o)&&r.__esModule?r:{default:r}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0);e.default=function(t){t.registerDecorator("inline",function(t,e,n,o){var i=t;return e.partials||(e.partials={},i=function(o,i){var a=n.partials;n.partials=r.extend({},a,e.partials);var s=t(o,i);return n.partials=a,s}),e.partials[o.args[0]]=o.fn,i})},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var r=n(0),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=r.indexOf(o.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=o.lookupLevel(t),"undefined"!=typeof console&&o.lookupLevel(o.level)<=t){var e=o.methodMap[t];console[e]||(e="log");for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];console[e].apply(console,r)}}};e.default=o,t.exports=e.default},function(t,e,n){"use strict";function r(t){this.string=t}e.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},e.default=r,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=s.COMPILER_REVISION;if(e!==n){if(e<n){var r=s.REVISION_CHANGES[n],o=s.REVISION_CHANGES[e];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+o+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")}},e.template=function(t,e){if(!e)throw new a.default("No environment passed to template");if(!t||!t.main)throw new a.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n={strict:function(t,e){if(!(e in t))throw new a.default('"'+e+'" not defined in '+t);return t[e]},lookup:function(t,e){for(var n=t.length,r=0;r<n;r++)if(t[r]&&null!=t[r][e])return t[r][e]},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:o.escapeExpression,invokePartial:function(n,r,i){i.hash&&(r=o.extend({},r,i.hash),i.ids&&(i.ids[0]=!0));n=e.VM.resolvePartial.call(this,n,r,i);var s=e.VM.invokePartial.call(this,n,r,i);null==s&&e.compile&&(i.partials[i.name]=e.compile(n,t.compilerOptions,e),s=i.partials[i.name](r,i));if(null!=s){if(i.indent){for(var c=s.split("\n"),l=0,u=c.length;l<u&&(c[l]||l+1!==u);l++)c[l]=i.indent+c[l];s=c.join("\n")}return s}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,r,o){var i=this.programs[t],a=this.fn(t);return e||o||r||n?i=c(this,t,a,e,n,r,o):i||(i=this.programs[t]=c(this,t,a)),i},data:function(t,e){for(;t&&e--;)t=t._parent;return t},merge:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=o.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function r(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=o.data;r._setup(o),!o.partial&&t.useData&&(i=function(t,e){e&&"root"in e||((e=e?s.createFrame(e):{}).root=t);return e}(e,i));var a=void 0,c=t.useBlockParams?[]:void 0;function l(e){return""+t.main(n,e,n.helpers,n.partials,i,c,a)}return t.useDepths&&(a=o.depths?e!=o.depths[0]?[e].concat(o.depths):o.depths:[e]),(l=u(t.main,l,n,o.depths||[],i,c))(e,o)}return r.isTop=!0,r._setup=function(r){r.partial?(n.helpers=r.helpers,n.partials=r.partials,n.decorators=r.decorators):(n.helpers=n.merge(r.helpers,e.helpers),t.usePartial&&(n.partials=n.merge(r.partials,e.partials)),(t.usePartial||t.useDecorators)&&(n.decorators=n.merge(r.decorators,e.decorators)))},r._child=function(e,r,o,i){if(t.useBlockParams&&!o)throw new a.default("must pass block params");if(t.useDepths&&!i)throw new a.default("must pass parent depths");return c(n,e,t[e],r,0,o,i)},r},e.wrapProgram=c,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var r=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==l&&function(){n.data=s.createFrame(n.data);var t=n.fn;i=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=r,t(e,n)},t.partials&&(n.partials=o.extend({},n.partials,t.partials))}();void 0===t&&i&&(t=i);if(void 0===t)throw new a.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=l;var r,o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),a=(r=i)&&r.__esModule?r:{default:r},s=n(3);function c(t,e,n,r,o,i,a){function s(e){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;return!a||e==a[0]||e===t.nullContext&&null===a[0]||(s=[e].concat(a)),n(t,e,t.helpers,t.partials,o.data||r,i&&[o.blockParams].concat(i),s)}return(s=u(n,s,t,a,r,i)).program=e,s.depth=a?a.length:0,s.blockParams=o||0,s}function l(){return""}function u(t,e,n,r,i,a){if(t.decorator){var s={};e=t.decorator(e,s,n,r&&r[0],i,a,r),o.extend(e,s)}return e}},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,r=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=r),t}},t.exports=e.default}).call(this,n(27))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);n(4);var r,o,i,a,s,c,l=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},d=(r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],o=function(){function t(e){var n=e.targetModal,r=e.triggers,o=void 0===r?[]:r,i=e.onShow,a=void 0===i?function(){}:i,s=e.onClose,c=void 0===s?function(){}:s,u=e.openTrigger,d=void 0===u?"data-micromodal-trigger":u,p=e.closeTrigger,h=void 0===p?"data-micromodal-close":p,m=e.disableScroll,v=void 0!==m&&m,y=e.disableFocus,g=void 0!==y&&y,b=e.awaitCloseAnimation,w=void 0!==b&&b,_=e.debugMode,x=void 0!==_&&_;l(this,t),this.modal=document.getElementById(n),this.config={debugMode:x,disableScroll:v,openTrigger:d,closeTrigger:h,onShow:a,onClose:c,awaitCloseAnimation:w,disableFocus:g},o.length>0&&this.registerTriggers.apply(this,f(o)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return u(t,[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];n.filter(Boolean).forEach(function(e){e.addEventListener("click",function(){return t.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal)}},{key:"closeModal",value:function(){var t=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function e(){t.classList.remove("is-open"),t.removeEventListener("animationend",e,!1)},!1):t.classList.remove("is-open")}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:"",height:""});break;case"disable":Object.assign(e.style,{overflow:"hidden",height:"100vh"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){t.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),t.preventDefault())}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.maintainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(r);return Array.apply(void 0,f(t))}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var t=this.getFocusableNodes();t.length&&t[0].focus()}}},{key:"maintainFocus",value:function(t){var e=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var n=e.indexOf(document.activeElement);t.shiftKey&&0===n&&(e[e.length-1].focus(),t.preventDefault()),t.shiftKey||n!==e.length-1||(e[0].focus(),t.preventDefault())}else e[0].focus()}}]),t}(),i=null,a=function(t){if(!document.getElementById(t))return console.warn("MicroModal v0.3.2: ❗Seems like you have missed %c'"+t+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+t+'"></div>'),!1},s=function(t,e){if(function(t){if(t.length<=0)console.warn("MicroModal v0.3.2: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>')}(t),!e)return!0;for(var n in e)a(n);return!0},{init:function(t){var e=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),n=[].concat(f(document.querySelectorAll("["+e.openTrigger+"]"))),r=function(t,e){var n=[];return t.forEach(function(t){var r=t.attributes[e].value;void 0===n[r]&&(n[r]=[]),n[r].push(t)}),n}(n,e.openTrigger);if(!0!==e.debugMode||!1!==s(n,r))for(var i in r){var a=r[i];e.targetModal=i,e.triggers=[].concat(f(a)),new o(e)}},show:function(t,e){var n=e||{};n.targetModal=t,!0===n.debugMode&&!1===a(t)||(i=new o(n)).showModal()},close:function(t){t?i.closeModalById(t):i.closeModal()}}),p=function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},h=function(){return function(t){this.options=t}}();!function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove"}(c||(c={}));var m=function(){function t(){this.notifications=[]}return t.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,c.Add,this.notifications)},t.prototype.splice=function(t,e){var n=this.notifications.splice(t,e)[0];this.updateFn(n,c.Remove,this.notifications)},t.prototype.indexOf=function(t){return this.notifications.indexOf(t)},t.prototype.onupdate=function(t){this.updateFn=t},t}(),v={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0},y=function(){function t(){this.notifications=[];var t=document.createDocumentFragment(),e=this._createHTLMElement({tagName:"div",className:"notyf"});t.appendChild(e),document.body.appendChild(t),this.container=e,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return t.prototype.update=function(t,e){e===c.Add?this.addNotification(t):e===c.Remove&&this.removeNotification(t)},t.prototype.removeNotification=function(t){var e,n,r=this,o=this._popRenderedNotification(t);o&&((e=o.node).classList.add("notyf__toast--disappear"),e.addEventListener(this.animationEndEventName,n=function(t){t.target===e&&(e.removeEventListener(r.animationEndEventName,n),r.container.removeChild(e))}))},t.prototype.addNotification=function(t){var e=this._renderNotification(t);this.notifications.push({notification:t,node:e}),this._announce(t.options.message||"Notification")},t.prototype._renderNotification=function(t){var e=this._buildNotificationCard(t),n=t.options.className;return n&&e.classList.add(n),this.container.appendChild(e),e},t.prototype._popRenderedNotification=function(t){for(var e=-1,n=0;n<this.notifications.length&&e<0;n++)this.notifications[n].notification===t&&(e=n);if(-1!==e)return this.notifications.splice(e,1)[0]},t.prototype._buildNotificationCard=function(t){var e=t.options,n=e.icon,r=this._createHTLMElement({tagName:"div",className:"notyf__toast"}),o=this._createHTLMElement({tagName:"div",className:"notyf__ripple"}),i=this._createHTLMElement({tagName:"div",className:"notyf__wrapper"}),a=this._createHTLMElement({tagName:"div",className:"notyf__message"});a.innerHTML=e.message||"";var s=e.backgroundColor;if(n&&"object"==typeof n){var c=this._createHTLMElement({tagName:"div",className:"notyf__icon"}),l=this._createHTLMElement({tagName:n.tagName||"i",className:n.className,text:n.text});s&&(l.style.color=s),c.appendChild(l),i.appendChild(c)}return i.appendChild(a),r.appendChild(i),s&&(e.ripple?(o.style.backgroundColor=s,r.appendChild(o)):r.style.backgroundColor=s),r},t.prototype._createHTLMElement=function(t){var e=t.tagName,n=t.className,r=t.text,o=document.createElement(e);return n&&(o.className=n),o.textContent=r||null,o},t.prototype._createA11yContainer=function(){var t=this._createHTLMElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},t.prototype._announce=function(t){var e=this;this.a11yContainer.textContent="",setTimeout(function(){e.a11yContainer.textContent=t},100)},t.prototype._getAnimationEndEventName=function(){var t,e=document.createElement("_fake"),n={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in n)if(void 0!==e.style[t])return n[t];return"animationend"},t}(),g=function(){function t(t){var e=this;this.notifications=new m,this.view=new y;var n=this.registerTypes(t);this.options=p({},v,t),this.options.types=n,this.notifications.onupdate(function(t,n){e.view.update(t,n)})}return t.prototype.error=function(t){var e=this.normalizeOptions("error",t);this.open(e)},t.prototype.success=function(t){var e=this.normalizeOptions("success",t);this.open(e)},t.prototype.open=function(t){var e=this.options.types.find(function(e){return e.type===t.type})||{},n=p({},e,t);n.ripple=void 0===n.ripple?this.options.ripple:n.ripple;var r=new h(n);this._pushNotification(r)},t.prototype._pushNotification=function(t){var e=this;this.notifications.push(t);var n=t.options.duration||this.options.duration;setTimeout(function(){var n=e.notifications.indexOf(t);e.notifications.splice(n,1)},n)},t.prototype.normalizeOptions=function(t,e){var n={type:t};return"string"==typeof e?n.message=e:"object"==typeof e&&(n=p({},n,e)),n},t.prototype.registerTypes=function(t){var e=(t&&t.types||[]).slice();return v.types.map(function(t){var n=e.findIndex(function(e){return e.type===t.type}),r=-1!==n?e.splice(n,1)[0]:{};return p({},t,r)}).concat(e)},t}(),b=(n(5),"Low"),w={noteList:document.querySelector(".note-list"),form:document.querySelector(".note-editor"),list:document.querySelector(".note-list"),search:document.querySelector(".search-form"),btnMicroModal:document.querySelector("button[data-action='open-editor']")},_="http://localhost:3000/notes";function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(10);var k=n(2),E=n.n(k);new g;function M(t){w.noteList.innerHTML="";var e=t.map(function(t){return E()(t)}).join("");w.noteList.insertAdjacentHTML("beforeend",e)}var N=new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,"findNoteById",function(t){var e=this;return new Promise(function(n,r){setTimeout(function(){n(e.notes.find(function(e){return e.id===t}))},0)})}),x(this,"filterNotesByQuery",function(t){return Promise.resolve(this.notes.filter(function(e){return e.body.toLowerCase().includes(t.toLowerCase())}))}),x(this,"getNotes",function(){var t=this;return fetch(_).then(function(t){if(t.ok)return t.json();throw new Error("Error while fetching"+t.statusText)}).then(function(e){return t.notes=e,t.notes})}),x(this,"saveNote",function(t,e){var n=this;return function(t){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(_,e).then(function(t){if(t.ok)return t.json();throw new Error("Error while fetching"+t.statusText)})}({title:t,body:e,priority:b}).then(function(t){return n.notes.push(t),t})}),x(this,"updateNoteContent",function(t,e){var n=this;return function(t,e){var n={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return fetch("".concat(_,"/").concat(t),n).then(function(t){if(t.ok)return t.json();throw new Error("Error while fetching"+t.statusText)})}(t,e).then(function(t){return n.notes=n.notes.map(function(e){e.id,t.id}),t})}),x(this,"deleteNote",function(t){var e=this;return function(t){return fetch("".concat(_,"/").concat(t),{method:"DELETE"}).then(function(t){if(t.ok)return t.json();throw new Error("Error while fetching"+t.statusText)})}(t).then(function(){return e.notes=e.notes.filter(function(e){return e.id!==t}),t})})};N.getNotes().then(function(t){N.notes=t,M(N.notes)});var C=new g;d.init(),w.form.addEventListener("submit",function(t){t.preventDefault();var e=document.querySelector(".note-editor input"),n=document.querySelector(".note-editor textarea");if(""===e.value||""===n.value)return void C.error("Необходимо заполнить все поля!");N.saveNote(e.value,n.value).then(function(t){!function(t){w.noteList.insertAdjacentHTML("beforeend",E()(t))}(t),C.success("Заметка успешно добавленна!")}).catch(function(t){C.error("Заметка не добавлена!!!")}),d.close("note-editor-modal"),w.form.reset()}),w.list.addEventListener("click",function(t){var e=t.target;event.preventDefault();var n=e.textContent;if("I"!==e.nodeName||"delete"!==n)return;var r=e.closest("li");N.deleteNote(r.dataset.id).then(function(){N.getNotes().then(function(t){M(t),C.success("Заметка успешно удалена!")})}).catch(function(t){C.error("Что то пошло не так!! Заметка не добавлена!!!")})}),w.search.addEventListener("input",function(t){var e=t.target;N.filterNotesByQuery(e.value).then(function(t){M(t)})}),w.search.addEventListener("submit",function(t){t.preventDefault()}),w.btnMicroModal.addEventListener("click",function(){d.show("note-editor-modal")})}]);
//# sourceMappingURL=bundle.js.map