(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0b+E":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"initialize",function(){return R}),n.d(r,"ga",function(){return B}),n.d(r,"set",function(){return J}),n.d(r,"send",function(){return G}),n.d(r,"pageview",function(){return U}),n.d(r,"modalview",function(){return Z}),n.d(r,"timing",function(){return K}),n.d(r,"event",function(){return Y}),n.d(r,"exception",function(){return $}),n.d(r,"plugin",function(){return H}),n.d(r,"outboundLink",function(){return V}),n.d(r,"testModeAPI",function(){return X}),n.d(r,"default",function(){return Q});var o=n("q1tI"),i=n.n(o),a=n("17x9"),c=n.n(a);function u(e){console.warn("[react-ga]",e)}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h="_blank",m=1,b=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=this,o=(e=p(t)).call.apply(e,[this].concat(a)),n=!o||"object"!==s(o)&&"function"!==typeof o?d(r):o,y(d(n),"handleClick",function(e){var r=n.props,o=r.target,i=r.eventLabel,a=r.to,c=r.onClick,u=r.trackerNames,s={label:i},l=o!==h,f=!(e.ctrlKey||e.shiftKey||e.metaKey||e.button===m);l&&f?(e.preventDefault(),t.trackLink(s,function(){window.location.href=a},u)):t.trackLink(s,function(){},u),c&&c(e)}),n}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.to,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){y(e,t,n[t])})}return e}({},l(e,["to"]),{href:t,onClick:this.handleClick});return this.props.target===h&&(n.rel="noopener noreferrer"),delete n.eventLabel,i.a.createElement("a",n)}}])&&f(n.prototype,r),a&&f(n,a),t}();function v(e){return e.replace(/^\s+|\s+$/g,"")}y(b,"trackLink",function(){u("ga tracking not enabled")}),y(b,"propTypes",{eventLabel:c.a.string.isRequired,target:c.a.string,to:c.a.string,onClick:c.a.func,trackerNames:c.a.arrayOf(c.a.string)}),y(b,"defaultProps",{target:null,to:null,onClick:null,trackerNames:null});var w=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var C="REDACTED (Potential Email Address)";function O(e,t){return function(e){return/[^@]+@[^@]+/.test(e)}(e)?(u("This arg looks like an email address, redacting."),C):t?v(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(w)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}):e}var k=function(e){var t,n,r,o,i,a,c,u="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?u=e.gaAddress:e&&e.debug&&(u="https://www.google-analytics.com/analytics_debug.js"),t=window,n=document,r="script",o=u,i="ga",t.GoogleAnalyticsObject=i,t.ga=t.ga||function(){(t.ga.q=t.ga.q||[]).push(arguments)},t.ga.l=1*new Date,a=n.createElement(r),c=n.getElementsByTagName(r)[0],a.async=1,a.src=o,c.parentNode.insertBefore(a,c)};function x(e){console.info("[react-ga]",e)}var j=[],F={calls:j,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];j.push([].concat(t))},resetCalls:function(){j.length=0}};function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){return(S="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var N="undefined"===typeof window||"undefined"===typeof document,_=!1,T=!0,q=!1,I=!0,D=function(){var e;return q?F.ga.apply(F,arguments):!N&&(window.ga?(e=window).ga.apply(e,arguments):u("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function L(e){return O(e,T)}function z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"===typeof D){if("string"!==typeof o)return void u("ga command must be a string");!I&&Array.isArray(e)||D.apply(void 0,n),Array.isArray(e)&&e.forEach(function(e){D.apply(void 0,E(["".concat(e,".").concat(o)].concat(n.slice(1))))})}}function M(e,t){e?(t&&(t.debug&&!0===t.debug&&(_=!0),!1===t.titleCase&&(T=!1)),t&&t.gaOptions?D("create",e,t.gaOptions):D("create",e,"auto")):u("gaTrackingID is required in initialize()")}function R(e,t){if(t&&!0===t.testMode)q=!0;else{if(N)return!1;t&&!0===t.standardImplementation||k(t)}return I=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,Array.isArray(e)?e.forEach(function(e){"object"===S(e)?M(e.trackingId,e):u("All configs must be an object")}):M(e,t),!0}function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(D.apply(void 0,t),_&&(x("called ga('arguments');"),x("with arguments: ".concat(JSON.stringify(t))))),window.ga}function J(e,t){e?"object"===S(e)?(0===Object.keys(e).length&&u("empty `fieldsObject` given to .set()"),z(t,"set",e),_&&(x("called ga('set', fieldsObject);"),x("with fieldsObject: ".concat(JSON.stringify(e))))):u("Expected `fieldsObject` arg to be an Object"):u("`fieldsObject` is required in .set()")}function G(e,t){z(t,"send",e),_&&(x("called ga('send', fieldObject);"),x("with fieldObject: ".concat(JSON.stringify(e))),x("with trackers: ".concat(JSON.stringify(t))))}function U(e,t,n){if(e){var r=v(e);if(""!==r){var o={};if(n&&(o.title=n),z(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){A(e,t,n[t])})}return e}({hitType:"pageview",page:r},o)),_){x("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),x("with path: ".concat(r).concat(i))}}else u("path cannot be an empty string in .pageview()")}else u("path is required in .pageview()")}function Z(e,t){if(e){var n,r="/"===(n=v(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);z(t,"send","pageview",o),_&&(x("called ga('send', 'pageview', path);"),x("with path: ".concat(o)))}else u("modalName cannot be an empty string or a single / in .modalview()")}else u("modalName is required in .modalview(modalName)")}function K(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&r&&"number"===typeof r){var a={hitType:"timing",timingCategory:L(t),timingVar:L(n),timingValue:r};o&&(a.timingLabel=L(o)),G(a,i)}else u("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,c=P(e,["category","action","label","value","nonInteraction","transport"]),s=arguments.length>1?arguments[1]:void 0;if(t&&n){var l={hitType:"event",eventCategory:L(t),eventAction:L(n)};r&&(l.eventLabel=L(r)),"undefined"!==typeof o&&("number"!==typeof o?u("Expected `args.value` arg to be a Number."):l.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?u("`args.nonInteraction` must be a boolean."):l.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?u("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&u("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),l.transport=a)),Object.keys(c).filter(function(e){return"dimension"===e.substr(0,"dimension".length)}).forEach(function(e){l[e]=c[e]}),Object.keys(c).filter(function(e){return"metric"===e.substr(0,"metric".length)}).forEach(function(e){l[e]=c[e]}),G(l,s)}else u("args.category AND args.action are required in event()")}function $(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=L(n)),"undefined"!==typeof r&&("boolean"!==typeof r?u("`args.fatal` must be a boolean."):o.exFatal=r),G(o,t)}var H={require:function(e,t){if(e){var n=v(e);if(""!==n)if(t){if("object"!==S(t))return void u("Expected `options` arg to be an Object");0===Object.keys(t).length&&u("Empty `options` given to .require()"),B("require",n,t),_&&x("called ga('require', '".concat(n,"', ").concat(JSON.stringify(t)))}else B("require",n),_&&x("called ga('require', '".concat(n,"');"));else u("`name` cannot be an empty string in .require()")}else u("`name` is required in .require()")},execute:function(e,t){var n,r;if(1===(arguments.length<=2?0:arguments.length-2)?n=arguments.length<=2?void 0:arguments[2]:(r=arguments.length<=2?void 0:arguments[2],n=arguments.length<=3?void 0:arguments[3]),"string"!==typeof e)u("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)u("Expected `action` arg to be a String.");else{var o="".concat(e,":").concat(t);n=n||null,r&&n?(B(o,r,n),_&&(x("called ga('".concat(o,"');")),x('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(B(o,n),_&&(x("called ga('".concat(o,"');")),x("with payload: ".concat(JSON.stringify(n))))):(B(o),_&&x("called ga('".concat(o,"');")))}}};function V(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:L(e.label)},o=!1,i=setTimeout(function(){o=!0,t()},250);r.hitCallback=function(){clearTimeout(i),o||t()},G(r,n)}else u("args.label is required in outboundLink()");else u("hitCallback function is required")}var X=F,Q={initialize:R,ga:B,set:J,send:G,pageview:U,modalview:Z,timing:K,event:Y,exception:$,plugin:H,outboundLink:V,testModeAPI:F};function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"initialize",function(){return ee}),n.d(t,"ga",function(){return te}),n.d(t,"set",function(){return ne}),n.d(t,"send",function(){return re}),n.d(t,"pageview",function(){return oe}),n.d(t,"modalview",function(){return ie}),n.d(t,"timing",function(){return ae}),n.d(t,"event",function(){return ce}),n.d(t,"exception",function(){return ue}),n.d(t,"plugin",function(){return se}),n.d(t,"outboundLink",function(){return le}),n.d(t,"testModeAPI",function(){return fe}),n.d(t,"OutboundLink",function(){return pe});var ee=R,te=B,ne=J,re=G,oe=U,ie=Z,ae=K,ce=Y,ue=$,se=H,le=V,fe=X;b.origTrackLink=b.trackLink,b.trackLink=V;var pe=b;t.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){W(e,t,n[t])})}return e}({},r,{OutboundLink:pe})},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("cha2");return{page:e.default||e}}])},"7Ycq":function(e,t,n){e.exports=n("D7Rg")},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),a=n("/+P4"),c=n("N9n2"),u=n("ln6h"),s=n("KI45");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var l=s(n("htGi")),f=s(n("+oT+")),p=s(n("q1tI")),d=s(n("17x9")),g=n("Bu4q");t.AppInitialProps=g.AppInitialProps;var y=n("nOHt");function h(e){return m.apply(this,arguments)}function m(){return(m=(0,f.default)(u.mark(function e(t){var n,r,o;return u.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,g.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var b=function(e){function t(){return r(this,t),i(this,a(t).apply(this,arguments))}return c(t,e),o(t,[{key:"getChildContext",value:function(){return{router:(0,y.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=v(t);return p.default.createElement(n,(0,l.default)({},r,{url:o}))}}]),t}(p.default.Component);function v(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=b,b.childContextTypes={router:d.default.object},b.origGetInitialProps=h,b.getInitialProps=h},D7Rg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("q1tI"),o=a(n("UBBO")),i=a(n("qocf"));function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e,t){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).localhost,a=void 0===n?"localhost":n;return function(n){var d=function(d){function g(){var e,t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}(this,(e=s(g)).call.apply(e,[this].concat(r))),p(f(f(t)),"state",{analytics:void 0}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(g,r.Component),function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(g,[{key:"componentDidMount",value:function(){var n=function(e){return location.hostname===e}(a)?i:o;n.init(e),n.pageview();var r=t.onRouteChangeComplete;t.onRouteChangeComplete=function(){"function"==typeof r&&r(),n.pageview()},this.setState({analytics:n})}},{key:"render",value:function(){return(0,r.createElement)(n,function(e){for(var t=1;t<arguments.length;t++){var n=null==arguments[t]?{}:arguments[t],r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}({},this.props,{analytics:this.state.analytics}))}}]),g}();return n.getInitialProps&&(d.getInitialProps=n.getInitialProps),d}}},FGiv:function(e,t){var n=1e3,r=60*n,o=60*r,i=24*o,a=7*i,c=365.25*i;function u(e,t,n,r){var o=t>=1.5*n;return Math.round(e/n)+" "+r+(o?"s":"")}e.exports=function(e,t){t=t||{};var s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var u=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return u*c;case"weeks":case"week":case"w":return u*a;case"days":case"day":case"d":return u*i;case"hours":case"hour":case"hrs":case"hr":case"h":return u*o;case"minutes":case"minute":case"mins":case"min":case"m":return u*r;case"seconds":case"second":case"secs":case"sec":case"s":return u*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}(e);if("number"===s&&isFinite(e))return t.long?function(e){var t=Math.abs(e);if(t>=i)return u(e,t,i,"day");if(t>=o)return u(e,t,o,"hour");if(t>=r)return u(e,t,r,"minute");if(t>=n)return u(e,t,n,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=i)return Math.round(e/i)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=r)return Math.round(e/r)+"m";if(t>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},UBBO:function(e,t,n){"use strict";var r,o=(r=n("0b+E"))&&r.__esModule?r:{default:r};Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){i&&!window.GA_INITIALIZED&&e&&o.default.initialize(e)},t.pageview=function(){o.default.set({page:window.location.pathname}),o.default.pageview(window.location.pathname)},t.event=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";e&&t&&o.default.event({category:e,action:t})},t.exception=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];e&&o.default.exception({description:e,fatal:t})};var i="undefined"!=typeof window},cha2:function(e,t,n){"use strict";n.r(t);var r=n("hfKm"),o=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(e,r.key,r)}}var a=n("XVgq"),c=n.n(a),u=n("Z7t5"),s=n.n(u);function l(e){return(l="function"===typeof s.a&&"symbol"===typeof c.a?function(e){return typeof e}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":typeof e})(e)}function f(e){return(f="function"===typeof s.a&&"symbol"===l(c.a)?function(e){return l(e)}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":l(e)})(e)}function p(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=n("Bhuq"),g=n.n(d),y=n("TRZx"),h=n.n(y);function m(e){return(m=h.a?g.a:function(e){return e.__proto__||g()(e)})(e)}var b=n("SqZg"),v=n.n(b);function w(e,t){return(w=h.a||function(e,t){return e.__proto__=t,e})(e,t)}var C=n("q1tI"),O=n.n(C),k=n("8Bbg"),x=n.n(k),j=n("m/Pd"),F=n.n(j),P=n("nOHt"),A=n.n(P),S=n("7Ycq"),E=n.n(S),N=(n("q+Kr"),n("he5r")),_=n("TSYQ"),T=n.n(_),q=(n("d1Pv"),n("YFqc")),I=n.n(q),D=O.a.createElement,L=function(e){return D("nav",{className:T()("topbar-mobile d-flex justify-content-between",e.className)},D(I.a,{href:"/"},D("a",{href:"/",className:"brand"},N.c)),D("button",{className:"border-0 bg-transparent text-black-50",onClick:e.onClickToggler},D("i",{className:"fas fa-bars"})))},z=O.a.createElement,M=Object(P.withRouter)(function(e){return z("div",{className:T()("side-menu",e.className)},z("div",{className:"side-menu-inner"},z(I.a,{href:"/"},z("a",{href:"/",className:"brand"},N.c)),z("p",{className:"text-muted font-weight-light pt-1"},z("small",null,"Study hard, play harder.")),z("ul",{className:"list list-unstyled"},z("li",{className:T()({"font-weight-bold":"/"===e.router.pathname})},z(I.a,{href:"/"},z("a",{href:"/"},"Home"))),z("li",{className:T()({"font-weight-bold":"/about"===e.router.pathname})},z(I.a,{href:"/about"},z("a",{href:"/about"},"About"))),z("li",{className:T()({"font-weight-bold":"/resume"===e.router.pathname})},z(I.a,{href:"/resume"},z("a",{href:"/resume"},"Resume"))))))}),R=O.a.createElement,B=(new Date).getFullYear(),J=function(){return R("footer",{className:"text-center mt-4"},R("p",{className:"mb-0 text-dark"},R("small",null,"\xa9 Yuku Takahashi ",B," - This work is licensed under a"," ",R("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY-NC-SA 4.0 "))))},G=O.a.createElement;function U(e){var t=e.children,n=Object(C.useState)(!1),r=n[0],o=n[1],i=Object(C.useCallback)(function(){return o(!1)},[]),a=Object(C.useCallback)(function(){return o(!r)},[r]);return G("div",{className:T()("layout mx-md-auto d-md-flex",{expanded:r})},G(L,{className:"d-md-none py-4 px-3",onClickToggler:a}),G(M,{className:"d-md-block px-3 p-lg-5 py-4"}),G("div",{className:"flex-md-grow-1 bg-white px-sm-3 pt-lg-5 py-4 overflow-hidden",onClick:i},t,G(J,null)))}var Z=O.a.createElement,K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=v()(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,x.a),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return Z(O.a.Fragment,null,Z(F.a,null,Z("meta",{charSet:"utf-8"}),Z("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Z("title",null,N.c),Z("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/static/icons/apple-icon-57x57.png"}),Z("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/static/icons/apple-icon-60x60.png"}),Z("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/static/icons/apple-icon-72x72.png"}),Z("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/static/icons/apple-icon-76x76.png"}),Z("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/static/icons/apple-icon-114x114.png"}),Z("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/static/icons/apple-icon-120x120.png"}),Z("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/static/icons/apple-icon-144x144.png"}),Z("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/static/icons/apple-icon-152x152.png"}),Z("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/static/icons/apple-icon-180x180.png"}),Z("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/static/icons/android-icon-192x192.png"}),Z("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/static/icons/favicon-32x32.png"}),Z("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/static/icons/favicon-96x96.png"}),Z("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/static/icons/favicon-16x16.png"}),Z("link",{rel:"icon",href:"/static/icons/favicon.ico"}),Z("link",{rel:"manifest",href:"/static/config/manifest.json"}),Z("meta",{name:"msapplication-TileColor",content:"#00BCD4"}),Z("meta",{name:"msapplication-TileImage",content:"/static/icons/ms-icon-144x144.png"}),Z("meta",{name:"msapplication-config",content:"/static/config/browserconfig.xml"}),Z("meta",{name:"google-site-verification",content:"uoCr1A890A-K8B7GkFUvLlQ5ihZlFyR6gzvt4F-62u0"}),Z("link",{href:"https://fonts.googleapis.com/css?family=Noto+Sans+JP:300,400,700|Damion",rel:"stylesheet"}),Z("link",{rel:"alternate",type:"application/rss+xml",href:"/static/rss-feed.xml"})),Z(U,null,Z(t,n)))}}])&&i(n.prototype,r),o&&i(n,o),t}();t.default=E()("UA-4932407-15",A.a)(K)},gAL5:function(e,t,n){(function(r){t.log=function(...e){return"object"===typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(r++,"%c"===e&&(o=r))}),t.splice(o,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(n){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(n){}!e&&"undefined"!==typeof r&&"env"in r&&(e=r.env.DEBUG);return e},t.useColors=function(){if("undefined"!==typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=n("h/HK")(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}}).call(this,n("8oxB"))},"h/HK":function(e,t,n){e.exports=function(e){function t(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return r.colors[Math.abs(t)%r.colors.length]}function r(e){let n;function a(...e){if(!a.enabled)return;const t=a,o=Number(new Date),i=o-(n||o);t.diff=i,t.prev=n,t.curr=o,n=o,e[0]=r.coerce(e[0]),"string"!==typeof e[0]&&e.unshift("%O");let c=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,o)=>{if("%%"===n)return n;c++;const i=r.formatters[o];if("function"===typeof i){const r=e[c];n=i.call(t,r),e.splice(c,1),c--}return n}),r.formatArgs.call(t,e),(t.log||r.log).apply(t,e)}return a.namespace=e,a.enabled=r.enabled(e),a.useColors=r.useColors(),a.color=t(e),a.destroy=o,a.extend=i,"function"===typeof r.init&&r.init(a),r.instances.push(a),a}function o(){const e=r.instances.indexOf(this);return-1!==e&&(r.instances.splice(e,1),!0)}function i(e,t){const n=r(this.namespace+("undefined"===typeof t?":":t)+e);return n.log=this.log,n}function a(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return r.debug=r,r.default=r,r.coerce=function(e){return e instanceof Error?e.stack||e.message:e},r.disable=function(){const e=[...r.names.map(a),...r.skips.map(a).map(e=>"-"+e)].join(",");return r.enable(""),e},r.enable=function(e){let t;r.save(e),r.names=[],r.skips=[];const n=("string"===typeof e?e:"").split(/[\s,]+/),o=n.length;for(t=0;t<o;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")));for(t=0;t<r.instances.length;t++){const e=r.instances[t];e.enabled=r.enabled(e.namespace)}},r.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=r.skips.length;t<n;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;t<n;t++)if(r.names[t].test(e))return!0;return!1},r.humanize=n("FGiv"),Object.keys(e).forEach(t=>{r[t]=e[t]}),r.instances=[],r.names=[],r.skips=[],r.formatters={},r.selectColor=t,r.enable(r.load()),r}},qocf:function(e,t,n){"use strict";var r,o=(r=n("gAL5"))&&r.__esModule?r:{default:r};Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){i("Analytics init triggered for ".concat(e))},t.pageview=function(){i("Pageview triggered for ".concat(window.location.pathname))},t.event=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";i("Event for category ".concat(e," and action ").concat(t," triggered"))},t.exception=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];i("".concat(t?"Fatal exception":"Exception"," with description ").concat(e))};var i=(0,o.default)("analytics")}},[["74v/",1,0,2]]]);