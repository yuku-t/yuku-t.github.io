(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{393:function(e,t,n){__NEXT_REGISTER_PAGE("/blog/2019/01/twitter-card-and-ogp",function(){return e.exports=n(404),{page:e.exports.default}})},404:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=n(0),c=n.n(a),p=n(5),i=n(1);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,m(t).call(this,e))).layout=null,n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,c.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components;l(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",components:t},c.a.createElement(i.MDXTag,{name:"p",components:t},"Commit: ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/yuku/yuku.github.io/commit/5fe34e4bee6893000c88db02e353c3ae69400876"}},"yuku/yuku.github.io@",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"a"},"5fe34e4"))),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://ogp.me/"}},"Open Graph protocol (OGP)")," と ",c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started"}},"Twitter Card")," に対応して Twitter や Facebook でブログ記事の URL が共有されたときにリッチスニペットが表示されるようにしました。"),c.a.createElement("blockquote",{className:"twitter-tweet","data-lang":"ja"},c.a.createElement("p",{lang:"ja",dir:"ltr"},"ブログ書いてみた",c.a.createElement("a",{href:"https://t.co/Gehy21W69V"},"https://t.co/Gehy21W69V")),"— ゆうく (@yuku_t) ",c.a.createElement("a",{href:"https://twitter.com/yuku_t/status/1082265069449240578?ref_src=twsrc%5Etfw"},"2019年1月7日")),c.a.createElement(i.MDXTag,{name:"p",components:t},"開発時はそれぞれのリンク先のドキュメントを参照しつつ実装し、 Facebook と Twitter が用意しているデバッガーを使って動作確認をします:"),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://cards-dev.twitter.com/validator"}},"Card Validator | Twitter Developers")),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://developers.facebook.com/tools/debug/sharing/"}},"シェアデバッガー - 開発者向け Facebook"))),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developers.facebook.com/docs/sharing/webmasters"}},"Facebook の仕様"),"として ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"fb:app_id")," が求められたので、新しく本ブログ用のプロジェクトを Facebook に作り、その ID を登録しました。 Web 上の古い情報によると昔は ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"fb:admins")," などもサポートされていましたが、現在は ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"fb:app_id")," に一本化されたようです。"))}}])&&s(n.prototype,r),o&&s(n,o),t}();function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,o,a,c){try{var p=e[a](c),i=p.value}catch(e){return void n(e)}p.done?t(i):Promise.resolve(i).then(r,o)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return O});var O=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,v(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,c.a.Component),r=t,a=[{key:"render",value:function(){return c.a.createElement(p.a,{meta:this.props.meta},c.a.createElement(y,null))}}],i=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(){var t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(18),r=t.entries,e.abrupt("return",{meta:r["blog/2019/01/twitter-card-and-ogp"]});case 2:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function c(e){d(a,r,o,c,p,"next",e)}function p(e){d(a,r,o,c,p,"throw",e)}c(void 0)})});return function(){return t.apply(this,arguments)}}()}],a&&g(r.prototype,a),i&&g(r,i),t}()}},[[393,1,0,2]]]);