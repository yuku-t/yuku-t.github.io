(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{19:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(9),c=t.n(r),s=t(7),m=t.n(s),o=t(16),p=t(4),i=t.n(p),u=t(1),E=t.n(u),d=t(3),f=(t(61),function(e){return l.a.createElement("aside",{className:i()("widget mb-4",e.className)},l.a.createElement("h1",{className:"title font-weight-bold"},e.title),e.children)}),h=(t(62),function(e){return e||"https://yuku.takahashi.coffee".concat(d.a)}),N=Object(o.withRouter)(function(e){return l.a.createElement("div",{className:"blogpage container"},l.a.createElement(c.a,null,l.a.createElement("title",null,e.meta.title," - ",d.c),l.a.createElement("meta",{name:"description",content:e.meta.description}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"twitter:creator",content:"@yuku_t"}),l.a.createElement("meta",{property:"fb:app_id",content:d.b}),l.a.createElement("meta",{property:"og:title",content:"".concat(e.meta.title," - ").concat(d.c)}),l.a.createElement("meta",{property:"og:type",content:"article"}),l.a.createElement("meta",{property:"og:url",content:"https://yuku.takahashi.coffee".concat(e.router.pathname)}),l.a.createElement("meta",{property:"og:image",content:h()}),l.a.createElement("meta",{property:"og:description",content:e.meta.description}),l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/themes/prism.min.css"}),l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"})),l.a.createElement("div",{className:"row"},l.a.createElement("main",{className:i()("col-xl-8",e.className)},l.a.createElement("article",{itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.a.createElement("meta",{itemProp:"author",content:"Yuku Takahashi"}),l.a.createElement("meta",{itemProp:"datePublished",content:e.meta.publishedAt}),e.meta.modifiedAt&&l.a.createElement("meta",{itemProp:"dateModified",content:e.meta.modifiedAt}),l.a.createElement("meta",{itemProp:"image",content:h()}),l.a.createElement("header",{className:"mb-4 header"},l.a.createElement("h1",{className:"headline",itemProp:"headline"},e.meta.title),l.a.createElement("ul",{className:"list-inline text-dark font-weight-light"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fas fa-calendar-day fa-fw"}),l.a.createElement("span",{className:"ml-1"},E()(e.meta.publishedAt).format("YYYY-MM-DD HH:mm"))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("i",{className:"fas fa-tags fa-fw"}),e.meta.tags.map(function(e,a){return[a>0?",":null,l.a.createElement("span",{key:a,className:"ml-1"},e)]})))),l.a.createElement("section",{className:"mb-4 body",itemProp:"articleBody"},e.children))),l.a.createElement("div",{className:"col-xl-4"},l.a.createElement("div",{className:"pl-xl-2"},l.a.createElement(f,{title:"About Me"},l.a.createElement("div",null,l.a.createElement("img",{src:d.a,alt:"avatar",className:"avatar rounded-circle mb-4 mx-auto d-block"}),l.a.createElement("p",null,"Increments 社最初の従業員として Qiita を開発したり CTO やったりしていました。現在有給消化中。",l.a.createElement(m.a,{href:"/about"},l.a.createElement("a",{href:"/about"},"もっと読む"))))),l.a.createElement(f,{title:"Follow"},l.a.createElement("ul",{className:"list-inline icons"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://twitter.com/yuku_t"},l.a.createElement("span",{className:"fa-stack fa-lg"},l.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),l.a.createElement("i",{className:"fab fa-twitter fa-stack-1x fa-inverse"})))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://github.com/yuku"},l.a.createElement("span",{className:"fa-stack fa-lg"},l.a.createElement("i",{className:"fas fa-circle fa-stack-2x"}),l.a.createElement("i",{className:"fab fa-github fa-stack-1x fa-inverse"}))))))))))});t(63);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,a){return!a||"object"!==b(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,a){return(_=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var g=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),k(this,v(a).apply(this,arguments))}var t,n,r;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&_(e,a)}(a,l.a.Component),t=a,(n=[{key:"componentDidMount",value:function(){if(this.props.meta.loadTwitterWidget){var e=document.createElement("script");e.async=!0,e.src="https://platform.twitter.com/widgets.js",e.charset="utf-8",document.body.appendChild(e)}}},{key:"render",value:function(){return l.a.createElement(N,{className:"mdx",meta:this.props.meta},this.props.children)}}])&&y(t.prototype,n),r&&y(t,r),a}(),x=(t(64),function(e){return l.a.createElement(N,{className:"notebook",meta:e.meta},e.children)});t.d(a,"a",function(){return g}),t.d(a,"b",function(){return x})},385:function(e,a,t){__NEXT_REGISTER_PAGE("/blog/2019/01/hello-pyspark",function(){return e.exports=t(397),{page:e.exports.default}})},397:function(e,a,t){"use strict";t.r(a);var n=t(12),l=t.n(n),r=t(0),c=t.n(r),s=t(19),m=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"cell border-box-sizing text_cell rendered"},c.a.createElement("div",{className:"prompt input_prompt"}),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"text_cell_render border-box-sizing rendered_html"},c.a.createElement("p",null,c.a.createElement("a",{href:"https://spark.apache.org"},"Apatch Spark")," は JVM 上に実装されたオープンソースの分散処理プログラミング環境で、",c.a.createElement("a",{href:"http://fortune.com/2015/09/25/apache-spark-survey/"},"近年急速な盛り上がりを見せています"),"。 今後 ",c.a.createElement("a",{href:"https://spark.apache.org/docs/latest/api/python/index.html"},"pyspark")," を通じて Spark を使う予定なので、試しに触ってみたいのですが、いかんせん JVM に慣れていないこともあって Spark のインストールから始めると大変です。"),c.a.createElement("p",null,"そこでこの記事では Docker を使って Spark と pyspark の環境を構築します。"),c.a.createElement("h2",{id:"環境を用意する"},"環境を用意する",c.a.createElement("a",{className:"anchor-link",href:"#環境を用意する"},"¶")),c.a.createElement("p",null,"Jupyter Lab が公開している ",c.a.createElement("a",{href:"https://hub.docker.com/r/jupyter/pyspark-notebook/"},"jupyter/pyspark-notebook")," というズバリな Docker イメージがあるのでこれを使います。さしあたり現時点で公開されている最新版（",c.a.createElement("code",null,"87210526f381"),"）を指定する docker-compose.yml を用意しました:"),c.a.createElement("div",{className:"highlight"},c.a.createElement("pre",null,c.a.createElement("span",null),c.a.createElement("span",{className:"nt"},"version"),c.a.createElement("span",{className:"p"},":")," ",c.a.createElement("span",{className:"s"},'"3"'),"\n",c.a.createElement("span",{className:"nt"},"services"),c.a.createElement("span",{className:"p"},":"),"\n","  ",c.a.createElement("span",{className:"nt"},"notebook"),c.a.createElement("span",{className:"p"},":"),"\n","    ",c.a.createElement("span",{className:"nt"},"image"),c.a.createElement("span",{className:"p"},":")," ",c.a.createElement("span",{className:"l l-Scalar l-Scalar-Plain"},"jupyter/pyspark-notebook:87210526f381"),"\n","    ",c.a.createElement("span",{className:"nt"},"working_dir"),c.a.createElement("span",{className:"p"},":")," ",c.a.createElement("span",{className:"l l-Scalar l-Scalar-Plain"},"/app/notebooks"),"\n","    ",c.a.createElement("span",{className:"nt"},"ports"),c.a.createElement("span",{className:"p"},":"),"\n","      ",c.a.createElement("span",{className:"p p-Indicator"},"-")," ",c.a.createElement("span",{className:"l l-Scalar l-Scalar-Plain"},"8888:8888"),"\n","    ",c.a.createElement("span",{className:"nt"},"volumes"),c.a.createElement("span",{className:"p"},":"),"\n","      ",c.a.createElement("span",{className:"p p-Indicator"},"-")," ",c.a.createElement("span",{className:"l l-Scalar l-Scalar-Plain"},"./notebooks:/app/notebooks"),"\n","      ",c.a.createElement("span",{className:"p p-Indicator"},"-")," ",c.a.createElement("span",{className:"l l-Scalar l-Scalar-Plain"},"./data:/app/data"),"\n")),c.a.createElement("p",null,"2 つのディレクトリをマウントしています:"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"./notebooks")," - Jupyter Notebook を保存するディレクトリ。作った Notebook を Docker の外に持ち出す目的でマウントしています。"),c.a.createElement("li",null,c.a.createElement("code",null,"./data")," - 分析用のデータを格納するディレクトリです。今回の記事では使っていませんが、 CSV ファイルなどをここにおいて Jupyter から触れるようにします。")),c.a.createElement("p",null,"用意ができたら ",c.a.createElement("code",null,"docker-compse up")," を実行して起動します。すると何やらログが表示される中に URL が表示されるので、その URL にアクセスすれば pyspark が使える Jupyter Notebook が表示されます。簡単ですね。")))),c.a.createElement("div",{className:"cell border-box-sizing code_cell rendered"},c.a.createElement("div",{className:"input"},c.a.createElement("div",{className:"prompt input_prompt"},"In [1]:"),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"input_area"},c.a.createElement("div",{className:" highlight hl-ipython3"},c.a.createElement("pre",null,c.a.createElement("span",null),c.a.createElement("span",{className:"kn"},"import")," ",c.a.createElement("span",{className:"nn"},"pyspark"),"\n",c.a.createElement("span",{className:"n"},"pyspark"),c.a.createElement("span",{className:"o"},"."),c.a.createElement("span",{className:"n"},"version"),c.a.createElement("span",{className:"o"},"."),c.a.createElement("span",{className:"n"},"__version__"),"\n"))))),c.a.createElement("div",{className:"output_wrapper"},c.a.createElement("div",{className:"output"},c.a.createElement("div",{className:"output_area"},c.a.createElement("div",{className:"prompt output_prompt"},"Out[1]:"),c.a.createElement("div",{className:"output_text output_subarea output_execute_result"},c.a.createElement("pre",null,"'2.4.0'")))))),c.a.createElement("div",{className:"cell border-box-sizing text_cell rendered"},c.a.createElement("div",{className:"prompt input_prompt"}),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"text_cell_render border-box-sizing rendered_html"},c.a.createElement("p",null,"ちなみにこの記事はまさにこうして起動した Jupyter Notebook を使って書かれています。"),c.a.createElement("h2",{id:"Spark-クラスタを起動する"},"Spark クラスタを起動する",c.a.createElement("a",{className:"anchor-link",href:"#Spark-クラスタを起動する"},"¶")),c.a.createElement("p",null,"Spark は通常クラスタを作って分散処理を行いますが、開発段階からクラスタを作るのは大変なので ",c.a.createElement("a",{href:"https://jaceklaskowski.gitbooks.io/mastering-apache-spark/spark-local.html"},"local mode")," が用意されています。"),c.a.createElement("p",null,"pyspark から local mode で Spark を起動するには ",c.a.createElement("a",{href:"https://spark.apache.org/docs/latest/api/python/pyspark.html#pyspark.SparkContext"},c.a.createElement("code",null,"pyspark.SparkContext"))," を実行します:")))),c.a.createElement("div",{className:"cell border-box-sizing code_cell rendered"},c.a.createElement("div",{className:"input"},c.a.createElement("div",{className:"prompt input_prompt"},"In [2]:"),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"input_area"},c.a.createElement("div",{className:" highlight hl-ipython3"},c.a.createElement("pre",null,c.a.createElement("span",null),c.a.createElement("span",{className:"n"},"sc")," ",c.a.createElement("span",{className:"o"},"=")," ",c.a.createElement("span",{className:"n"},"pyspark"),c.a.createElement("span",{className:"o"},"."),c.a.createElement("span",{className:"n"},"SparkContext"),c.a.createElement("span",{className:"p"},"("),c.a.createElement("span",{className:"s1"},"'local[*]'"),c.a.createElement("span",{className:"p"},")"),"\n")))))),c.a.createElement("div",{className:"cell border-box-sizing text_cell rendered"},c.a.createElement("div",{className:"prompt input_prompt"}),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"text_cell_render border-box-sizing rendered_html"},c.a.createElement("p",null,"渡している文字列は利用可能スレッド数を意味していて:"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"local")," - 1 スレッドのみ使う"),c.a.createElement("li",null,c.a.createElement("code",null,"local[n]")," - ",c.a.createElement("code",null,"n")," スレッド使う（",c.a.createElement("code",null,"n")," は実際には数字が入る）"),c.a.createElement("li",null,c.a.createElement("code",null,"local[*]")," - JVM で使えるプロセッサーの数だけスレッドを使う（内部では ",c.a.createElement("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runtime.html#availableProcessors--"},c.a.createElement("code",null,"Runtime.getRuntime.availableProcessors()"))," を使っているらしい）")),c.a.createElement("p",null,"ということを表しています。一般的には ",c.a.createElement("code",null,"local[*]")," が使われるようです。"),c.a.createElement("p",null,"試しに 0 から 10 までの数字の合計を計算してみます。")))),c.a.createElement("div",{className:"cell border-box-sizing code_cell rendered"},c.a.createElement("div",{className:"input"},c.a.createElement("div",{className:"prompt input_prompt"},"In [3]:"),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"input_area"},c.a.createElement("div",{className:" highlight hl-ipython3"},c.a.createElement("pre",null,c.a.createElement("span",null),c.a.createElement("span",{className:"n"},"rdd")," ",c.a.createElement("span",{className:"o"},"=")," ",c.a.createElement("span",{className:"n"},"sc"),c.a.createElement("span",{className:"o"},"."),c.a.createElement("span",{className:"n"},"parallelize"),c.a.createElement("span",{className:"p"},"("),c.a.createElement("span",{className:"nb"},"range"),c.a.createElement("span",{className:"p"},"("),c.a.createElement("span",{className:"mi"},"10"),c.a.createElement("span",{className:"p"},"))"),"\n",c.a.createElement("span",{className:"n"},"rdd"),c.a.createElement("span",{className:"o"},"."),c.a.createElement("span",{className:"n"},"sum"),c.a.createElement("span",{className:"p"},"()"),"\n"))))),c.a.createElement("div",{className:"output_wrapper"},c.a.createElement("div",{className:"output"},c.a.createElement("div",{className:"output_area"},c.a.createElement("div",{className:"prompt output_prompt"},"Out[3]:"),c.a.createElement("div",{className:"output_text output_subarea output_execute_result"},c.a.createElement("pre",null,"45")))))),c.a.createElement("div",{className:"cell border-box-sizing text_cell rendered"},c.a.createElement("div",{className:"prompt input_prompt"}),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"text_cell_render border-box-sizing rendered_html"},c.a.createElement("p",null,"使い終わったら停止します。")))),c.a.createElement("div",{className:"cell border-box-sizing code_cell rendered"},c.a.createElement("div",{className:"input"},c.a.createElement("div",{className:"prompt input_prompt"},"In [4]:"),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"input_area"},c.a.createElement("div",{className:" highlight hl-ipython3"},c.a.createElement("pre",null,c.a.createElement("span",null),c.a.createElement("span",{className:"n"},"sc"),c.a.createElement("span",{className:"o"},"."),c.a.createElement("span",{className:"n"},"stop"),c.a.createElement("span",{className:"p"},"()"),"\n")))))),c.a.createElement("div",{className:"cell border-box-sizing text_cell rendered"},c.a.createElement("div",{className:"prompt input_prompt"}),c.a.createElement("div",{className:"inner_cell"},c.a.createElement("div",{className:"text_cell_render border-box-sizing rendered_html"},c.a.createElement("h2",{id:"おわりに"},"おわりに",c.a.createElement("a",{className:"anchor-link",href:"#おわりに"},"¶")),c.a.createElement("p",null,"この記事では Docker を使って pyspark 環境を作り、実際に Spark クラスタを起動してみました。Spark のことはまだまだ全然分かりませんが少しずつできることを増やしていこうと思います。"),c.a.createElement("h2",{id:"参考"},"参考",c.a.createElement("a",{className:"anchor-link",href:"#参考"},"¶")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://hub.docker.com/r/jupyter/pyspark-notebook/"},"jupyter/pyspark-notebook - Docker Hub")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://jupyter-docker-stacks.readthedocs.io/en/latest/using/specifics.html#apache-spark"},"Image Specifics — docker-stacks latest documentation")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://spark.apache.org/docs/latest/api/python/pyspark.html"},"pyspark package — PySpark 2.4.0 documentation")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://blog.sicara.com/get-started-pyspark-jupyter-guide-tutorial-ae2fe84f594f"},"Get Started with PySpark and Jupyter Notebook in 3 Minutes")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://jaceklaskowski.gitbooks.io/mastering-apache-spark/spark-local.html"},"Spark local (pseudo-cluster) · Mastering Apache Spark")))))))};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,a,t,n,l,r,c){try{var s=e[r](c),m=s.value}catch(e){return void t(e)}s.done?a(m):Promise.resolve(m).then(n,l)}function i(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,a){return!a||"object"!==o(a)&&"function"!=typeof a?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):a}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,a){return(d=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}t.d(a,"default",function(){return f});var f=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),u(this,E(a).apply(this,arguments))}var n,r,o;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&d(e,a)}(a,c.a.Component),n=a,r=[{key:"render",value:function(){return c.a.createElement(s.b,{meta:this.props.meta},c.a.createElement(m,null))}}],o=[{key:"getInitialProps",value:function(){var e,a=(e=l.a.mark(function e(){var a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t(47),n=a.entries,e.abrupt("return",{meta:n["blog/2019/01/hello-pyspark"]});case 2:case"end":return e.stop()}},e,this)}),function(){var a=this,t=arguments;return new Promise(function(n,l){var r=e.apply(a,t);function c(e){p(r,n,l,c,s,"next",e)}function s(e){p(r,n,l,c,s,"throw",e)}c(void 0)})});return function(){return a.apply(this,arguments)}}()}],r&&i(n.prototype,r),o&&i(n,o),a}()}},[[385,1,0,2]]]);