(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{NPAK:function(n,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/01/hello-ipynb",function(){var n=e("pmiQ");return{page:n.default||n}}])},pmiQ:function(n,a,e){"use strict";e.r(a);var t=e("ln6h"),o=e.n(t),s=e("O40h"),p=e("q1tI"),l=e.n(p),c=e("Yp5c"),r=l.a.createElement,u=function(){return r("div",{className:"nb-notebook"},r("div",{className:"nb-worksheet"},r("div",{className:"nb-cell nb-markdown-cell"},r("p",null,"Commit: ",r("a",{href:"https://github.com/yuku/yuku.github.io/commit/1c18e263dcc3ca54c0061ccda57b4bca8ba9f9fd"},"yuku/yuku.github.io@",r("code",null,"1c18e26"))),r("p",null,"\u30d6\u30ed\u30b0\u3067 Jupyter Notebook \u3092\u8868\u793a\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002\u4eca\u5f8c\u6a5f\u68b0\u5b66\u7fd2\u3084\u30c7\u30fc\u30bf\u5206\u6790\u306e\u30ed\u30b0\u306a\u3069\u3092\u516c\u958b\u3059\u308b\u306e\u306b\u4f7f\u3063\u3066\u3044\u3053\u3046\u3068\u601d\u3044\u307e\u3059 \ud83d\udcaa\ud83c\udffc")),r("div",{className:"nb-cell nb-code-cell"},r("div",{className:"nb-input","data-prompt-number":1},r("pre",{className:"language-python"},r("code",{className:"language-python","data-language":"python"},r("span",{className:"token keyword"},"print"),r("span",{className:"token punctuation"},"("),r("span",{className:"token string"},'"Hello world"'),r("span",{className:"token punctuation"},")")))),r("div",{className:"nb-output","data-prompt-number":1},r("pre",{className:"nb-stdout"},"Hello world","\n"))),r("div",{className:"nb-cell nb-markdown-cell"},r("p",null,"\u4ee5\u964d\u5b9f\u88c5\u306e\u8a73\u7d30\u306a\u3069\u3092\u5099\u5fd8\u9332\u3068\u3057\u3066\u6b8b\u3057\u307e\u3059\u3002"),r("h2",null,"Next.js \u3067 ipynb \u30d5\u30a1\u30a4\u30eb\u3092\u8868\u793a\u3059\u308b"),r("p",null,"\u5927\u304d\u304f\u5206\u3051\u3066 2 \u3064\u306e\u51e6\u7406\u304c\u5fc5\u8981\u3067\u3059:"),r("ol",null,r("li",null,"Webpack \u3092\u4f7f\u3063\u3066 ipynb \u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u3081\u308b\u3088\u3046\u306b\u3059\u308b"),r("li",null,"\u8aad\u307f\u8fbc\u3093\u3060 ipynb \u3092 React Component \u306b\u3059\u308b")),r("h3",null,"ipynb \u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u3081\u308b\u3088\u3046\u306b\u3059\u308b"),r("p",null,"Next.js \u306f\u30d5\u30a1\u30a4\u30eb\u306e\u89e3\u6c7a\u306b Webpack \u3092\u4f7f\u3063\u3066\u3044\u308b\u306e\u3067 ",r("a",{href:"https://www.npmjs.com/package/ipynb-loader"},"ipynb-loader")," \u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e loader \u306f\u5185\u90e8\u7684\u3067 ",r("a",{href:"https://github.com/jupyter/nbconvert"},"jupyter/nbconvert")," \u3092\u547c\u3073\u51fa\u3057\u3001\u305d\u306e\u7d50\u679c\u3092\u8fd4\u3059\u3060\u3051\u306e\u3082\u306e\u3067\u3059\u3002 jupyter/nbconvert \u306f ipynb \u30d5\u30a1\u30a4\u30eb\u3092 HTML \u3084 Markdown \u306a\u3069\u306b\u5909\u63db\u3059\u308b\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"),r("p",null,"ipynb-loader \u3082\u3068\u3044 jupyter/nbconvert \u3092\u4f7f\u3046\u306b\u3042\u305f\u3063\u3066 HTML \u3067\u51fa\u529b\u3059\u308b\u306e\u304b\u3001\u305d\u308c\u3068\u3082 Markdown \u3067\u51fa\u529b\u3059\u308b\u306e\u304b\u3001\u3068\u3044\u3046\u70b9\u304c\u554f\u984c\u306b\u306a\u308a\u307e\u3057\u305f\u3002"),r("p",null,"HTML \u3067\u51fa\u529b\u3059\u308b\u5834\u5408 Jupyter Notebook \u7279\u6709\u306e ",r("code",null,"In [1]")," \u3068\u3044\u3046\u30d7\u30ed\u30f3\u30d7\u30c8\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u304c\u3001\u305d\u306e\u4e00\u65b9\u3067 LaTex \u8a18\u6cd5\u306a\u3069\u4e00\u90e8\u306e\u6a5f\u80fd\u3092\u4f7f\u3046\u3053\u3068\u304c\u96e3\u3057\u304f\u306a\u308a\u307e\u3059\u3002",r("sup",{id:"fnref-1"},r("a",{href:"#fn-1",className:"footnote-ref"},"1"))),r("p",null,"Markdown \u3068\u3057\u3066\u51fa\u529b\u3059\u308b\u5834\u5408 MDX \u3068\u540c\u3058\u51e6\u7406\u304c\u3067\u304d\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u306a\u3093\u306a\u3089 Jupyter Notebook \u304c\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u3088\u3046\u306a Markdown \u8a18\u6cd5\u3082\u4f7f\u3048\u308b\u3088\u3046\u306b\u306a\u308b\u70b9\u304c\u30e1\u30ea\u30c3\u30c8\u3067\u3059\u304c\u3001\u5165\u529b\u3068\u51fa\u529b\u306e\u5bfe\u5fdc\u95a2\u4fc2\u304c\u5931\u308f\u308c\u3066\u3057\u307e\u3046\u306e\u3067 Jupyter Notebook \u3092\u8868\u793a\u3057\u3066\u3044\u308b\u611f\u304c\u5931\u308f\u308c\u3066\u3057\u307e\u3044\u307e\u3059\u3002"),r("p",null,"\u7d50\u5c40 ipynb \u5f62\u5f0f\u3067\u30d6\u30ed\u30b0\u3092\u66f8\u304d\u305f\u3044\u3068\u304d\u3068\u3044\u3046\u306e\u306f\u3001\u5165\u529b\u3068\u51fa\u529b\u306e\u5bfe\u5fdc\u3092\u660e\u793a\u3057\u305f\u3044\u3068\u304d\u3067\u3001\u4f8b\u3048\u3070 LaTex \u3092\u4f7f\u3044\u305f\u3044\u306e\u3067\u3042\u308c\u3070 MDX \u5f62\u5f0f\u3067\u66f8\u3051\u3070\u3044\u3044\u3068\u3044\u3046\u7d50\u8ad6\u306b\u9054\u3057\u3001 HTML \u3067\u53d7\u3051\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),r("h3",null,"React Component \u306b\u3059\u308b"),r("p",null,"Next.js \u306f React Component \u3092 import \u3059\u308b\u3053\u3068\u3092\u671f\u5f85\u3059\u308b\u306e\u3067\u3001 Webpack \u306e\u7acb\u5834\u3067\u3044\u3048\u3070 React Component \u3092 export \u3059\u308b\u3088\u3046\u306a\u6587\u5b57\u5217\u3092\u751f\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),r("p",null,"React Component \u3092\u6587\u5b57\u5217\u3068\u3057\u3066\u8868\u73fe\u3059\u308b\u306b\u306f JSX \u304c\u4fbf\u5229\u3067\u3059\u3002\u6b8b\u5ff5\u306a\u304c\u3089\u3053\u306e\u76ee\u7684\u3092\u9054\u6210\u3067\u304d\u308b Webpack loader \u304c\u898b\u3064\u304b\u3089\u306a\u304b\u3063\u305f\u306e\u3067\u3001  facebook \u304c\u516c\u958b\u3057\u3066\u3044\u308b ",r("a",{href:"https://www.npmjs.com/package/htmltojsx"},"htmltojsx")," \u3068\u3044\u3046 npm \u30d1\u30c3\u30b1\u30fc\u30b8\u3092\u4f7f\u3063\u3066\u81ea\u5206\u3067\u5b9f\u88c5\u3057\u307e\u3057\u305f:"),r("pre",{className:"language-javascript"},r("code",{className:"language-javascript"},r("span",{className:"token keyword"},"const")," ",r("span",{className:"token maybe-class-name"},"HTMLtoJSX")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token function"},"require"),r("span",{className:"token punctuation"},"("),r("span",{className:"token string"},'"htmltojsx"'),r("span",{className:"token punctuation"},")"),"\n",r("span",{className:"token keyword"},"const")," converter ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token keyword"},"new")," ",r("span",{className:"token class-name"},"HTMLtoJSX"),r("span",{className:"token punctuation"},"("),r("span",{className:"token punctuation"},"{")," createClass",r("span",{className:"token punctuation"},":")," ",r("span",{className:"token boolean"},"false")," ",r("span",{className:"token punctuation"},"}"),r("span",{className:"token punctuation"},")"),"\n","\n","module",r("span",{className:"token punctuation"},"."),r("span",{className:"token method-variable function-variable method function property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token keyword"},"function")," ",r("span",{className:"token punctuation"},"("),r("span",{className:"token parameter"},"content"),r("span",{className:"token punctuation"},")")," ",r("span",{className:"token punctuation"},"{"),"\n","  ",r("span",{className:"token comment"},"// content \u306b\u306f ipynb-loader \u304c\u8fd4\u3057\u305f HTML \u304c\u5165\u3063\u3066\u3044\u308b"),"\n","  ",r("span",{className:"token keyword"},"return")," ",r("span",{className:"token template-string"},r("span",{className:"token template-punctuation string"},"`"),r("span",{className:"token string"},"\n","  ",'import React from "react"',"\n","  ","export default () => "),r("span",{className:"token interpolation"},r("span",{className:"token interpolation-punctuation punctuation"},"$","{"),"converter",r("span",{className:"token punctuation"},"."),r("span",{className:"token method function property-access"},"convert"),r("span",{className:"token punctuation"},"("),"content",r("span",{className:"token punctuation"},")"),r("span",{className:"token interpolation-punctuation punctuation"},"}")),r("span",{className:"token string"},"\n","  "),r("span",{className:"token template-punctuation string"},"`")),"\n",r("span",{className:"token punctuation"},"}"),"\n")),r("h2",null,"\u305d\u306e\u4ed6"),r("ul",null,r("li",null,"\u3053\u308c\u307e\u3067 MDX \u30d5\u30a1\u30a4\u30eb\u306b\u8a18\u8ff0\u3057\u305f\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u96c6\u3081\u305f\u30e1\u30bf\u30c7\u30fc\u30bf\uff08entries.ts\uff09\u3092\u4f5c\u3063\u3066\u3044\u307e\u3057\u305f\u304c\u3001 ipynb \u306b\u306f\u305d\u3046\u3044\u3063\u305f\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u3082\u305f\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u7d50\u5c40 entries.ts \u3092\u81ea\u52d5\u751f\u6210\u3059\u308b\u306e\u3092\u8ae6\u3081\u3066\u624b\u52d5\u3067\u7ba1\u7406\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u305f\u3002"),r("li",null,"ipynb \u304b\u3089 HTML \u3092\u751f\u6210\u3059\u308b\u306e\u306b jupyter/nbconvert \u3092\u4f7f\u3046\u3088\u3046\u306b\u3057\u305f\u305b\u3044\u3067\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3\u304c\u7121\u99c4\u306b\u8907\u96d1\u306b\u306a\u3063\u3066\u3057\u307e\u3044\u3001\u81ea\u52d5\u30c7\u30d7\u30ed\u30a4\u3092\u7dad\u6301\u3059\u308b\u305f\u3081\u306b Travis CI \u304b\u3089 CircleCI \u306b\u4e57\u308a\u63db\u3048\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3057\u305f\u3002 ipynb \u306f\u6240\u8a6e JSON \u306a\u306e\u3067 JavaScript \u3067\u518d\u5b9f\u88c5\u3057\u3066\u3082\u3044\u3044\u304b\u3082\u77e5\u308c\u307e\u305b\u3093\u3002\u305d\u306e\u5834\u5408 Markdown \u3092 HTML \u306b\u5909\u63db\u3059\u308b\u90e8\u5206\u3092 MDX \u3068\u5171\u901a\u5316\u3067\u304d\u305d\u3046\u3067\u3059\u3002")),r("h2",null,"\u304a\u308f\u308a\u306b"),r("p",null,"\u6b21\u306e\u4ed5\u4e8b\u3067\u306f pyspark \u3068\u304b\u4f7f\u3063\u3066\u304c\u3093\u304c\u3093\u30c7\u30fc\u30bf\u5206\u6790\u306a\u3069\u3092\u3084\u308b\u4e88\u5b9a\u306a\u306e\u3067\u3001\u305d\u306e\u904e\u7a0b\u3067\u5f97\u305f\u77e5\u898b\u3092\u3053\u306e\u6a5f\u80fd\u3092\u4f7f\u3063\u3066\u30d6\u30ed\u30b0\u306b\u516c\u958b\u3057\u3066\u3044\u304d\u305f\u3044\u3067\u3059\u3002"),r("p",null,"\u4f59\u8ac7\u3068\u3057\u3066\u3001\u4eca\u56de\u521d\u3081\u3066 Webpack loader \u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u305f\u304c\u3001\u601d\u3063\u305f\u3088\u308a\u7c21\u5358\u3060\u3063\u305f\u3068\u3044\u3046\u5370\u8c61\u3067\u3059\u3002\u4eca\u56de\u306e\u5b9f\u88c5\u3092\u901a\u3058\u3066\u56f3\u3089\u305a\u3082 Webpack \u305d\u306e\u3082\u306e\u306b\u5bfe\u3059\u308b\u7406\u89e3\u3082\u3060\u3044\u3076\u6df1\u307e\u3063\u305f\u6c17\u304c\u3059\u308b\u306e\u3067\u3001 Webpack \u4f55\u3084\u3063\u3066\u308b\u304b\u5206\u304b\u3089\u3093\u306a\u30fc\u3068\u3044\u3046\u4eba\u3082\u4e00\u5ea6\u66f8\u3044\u3066\u307f\u308b\u3068\u3044\u3044\u304b\u3082\u77e5\u308c\u307e\u305b\u3093\u3002"),r("div",{className:"footnotes"},r("hr",null),r("ol",null,r("li",{id:"fn-1"},"Jupyter Notebook \u3067\u306f LaTex \u8a18\u6cd5\u306e\u5b9f\u88c5\u306b MathJax \u3092\u4f7f\u3063\u3066\u3044\u307e\u3059\u304c\u3001\u3053\u306e\u30d6\u30ed\u30b0\u3067\u306f\u6975\u529b\u30d6\u30e9\u30a6\u30b6\u4e0a\u3067\u306f JS\u3092\u8d70\u3089\u305b\u306a\u3044\u65b9\u91dd\u306b\u3057\u3066\u3044\u308b\u305f\u3081\u3002 MDX \u3067\u306f ",r("a",{href:"https://www.npmjs.com/package/remark-math"},"remark-math")," \u3068 ",r("a",{href:"https://www.npmjs.com/package/rehype-katex"},"rehype-katex")," \u3092\u4f7f\u3063\u3066\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002",r("a",{href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))))},m=l.a.createElement,i=function(n){var a=n.meta;return m(c.b,{meta:a},m(u,null))};i.getInitialProps=Object(s.a)(o.a.mark(function n(){var a,t;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a=e("n1xW"),t=a.entries,n.abrupt("return",{meta:t["blog/2019/01/hello-ipynb"]});case 2:case"end":return n.stop()}},n)}));a.default=i}},[["NPAK",1,0]]]);