(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"25XM":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/01/authorize-iap-by-nodejs",function(){return t("m2Al")}])},m2Al:function(e,a,t){"use strict";t.r(a);var c=t("o0o1"),n=t.n(c),o=t("HaE+"),s=t("q1tI"),p=t.n(s),r=t("Yp5c"),m=t("wx14"),b=t("Ff2n"),l=t("7ljp"),j=(p.a.createElement,{}),O="wrapper";function N(e){var a=e.components,t=Object(b.a)(e,["components"]);return Object(l.a)(O,Object(m.a)({},j,t,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"Because ",Object(l.a)("a",Object(m.a)({parentName:"p"},{href:"https://cloud.google.com/iap/docs/authentication-howto#authenticating_from_a_service_account"}),"Google's official document")," doesn't explain how to do it in Node.js, it was difficult for me to access Cloud IAP-protected GAE resources from Node.js."),Object(l.a)("p",null,"In short, I could do that by following ",Object(l.a)("a",Object(m.a)({parentName:"p"},{href:"https://github.com/googleapis/google-auth-library-nodejs/blob/d3fb55e0a710/samples/iap.js"}),"this example"),". In this blog post, I'll leave a record of what I learned on the way there."),Object(l.a)("h2",null,"What is Cloud IAP"),Object(l.a)("p",null,Object(l.a)("a",Object(m.a)({parentName:"p"},{href:"https://cloud.google.com/iap/"}),"Cloud Identity-Aware Proxy")," (Cloud IAP) is a service of Google Cloud Platform that provides authentication to resources on GCP."),Object(l.a)("p",null,"Because only authenticated requests reach an app behind Cloud IAP, you don't need to implement authentication to the app by yourself."),Object(l.a)("p",null,"With Cloud IAP, you can authorize only the users linked to a specific G Suite account. So it's especially useful when creating a company internal system."),Object(l.a)("h2",null,"Information required for authentication"),Object(l.a)("p",null,"To let Cloud IAP authenticate your request, three pieces of information are required:"),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},"Client ID for OAuth2 authentication in Cloud IAP"),Object(l.a)("li",{parentName:"ol"},"Service account email address"),Object(l.a)("li",{parentName:"ol"},"Service account private key")),Object(l.a)("p",null,"If you give them to GCP, it's pretty intuitive that GCP can check"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},"What you're trying to access"),Object(l.a)("li",{parentName:"ul"},"Who is accessing the site and is it him?"),Object(l.a)("li",{parentName:"ul"},"Does he have access to it?")),Object(l.a)("p",null,"You will also obviously need to set up permissions on your service account in advance."),Object(l.a)("h3",null,"Authenticate with Node.js"),Object(l.a)("p",null,'First of all, you need to create a service account and add it to the "IAP-secured Web App User". While creating the account, you can obtain its Client ID.'),Object(l.a)("blockquote",null,Object(l.a)("ol",Object(m.a)({parentName:"blockquote"},{start:2}),Object(l.a)("li",{parentName:"ol"},"Service account email address."),Object(l.a)("li",{parentName:"ol"},"Service account private key"))),Object(l.a)("p",null,"They are included in the JSON file that you can download when you issue a key on the service account page. Make sure that you don't git commit your private key because you should never spill it to the outside world. This is necessary regardless of the programming language."),Object(l.a)("p",null,"Then, we can use ",Object(l.a)("a",Object(m.a)({parentName:"p"},{href:"https://npmjs.com/package/google-auth-library"}),"google-auth-library")," to authenticate with Node.js."),Object(l.a)("p",null,"The google-auth-library automatically creates a client based on our environment, but in this case, we'll create a ",Object(l.a)("inlineCode",{parentName:"p"},"JWT")," instance by ourself:"),Object(l.a)("pre",{className:"language-js"},Object(l.a)("code",Object(m.a)({parentName:"pre"},{className:"language-js"}),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"JWT")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token function"}),"require"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token string"}),'"google-auth-library"'),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," client ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"new")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token class-name"}),"JWT"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  email",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"SERVICE_ACCOUNT_EMAIL"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),","),"  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token comment"}),"// 2."),"\n  key",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"SERVICE_ACCOUNT_PRIVATE_KEY"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),","),"  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token comment"}),"// 3."),"\n  additionalClaims",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    target_audience",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"OAUTH2CLIENT_ID"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),","),"  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token comment"}),"// 1."),"\n  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n")),Object(l.a)("p",null,"As you can see, the ",Object(l.a)("inlineCode",{parentName:"p"},"client")," has the three information described above."),Object(l.a)("p",null,"To access a resource, we need to get an access token and assemble an ",Object(l.a)("inlineCode",{parentName:"p"},"Authorization")," header, and there is a handy method called ",Object(l.a)("inlineCode",{parentName:"p"},"getRequestHeaders()"),"."),Object(l.a)("pre",{className:"language-js"},Object(l.a)("code",Object(m.a)({parentName:"pre"},{className:"language-js"}),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token comment"}),"// URL of resource protected by Cloud IAP"),"\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," url ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token string"}),'"http://example.appspot.com/path/to/endpoint"'),"\n\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token comment"}),"// { Authorization: 'Bearer <access_token_value>' }"),"\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," headers ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"await")," client",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token method function property-access"}),"getRequestHeaders"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),"url",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n")),Object(l.a)("p",null,"If you are using ",Object(l.a)("a",Object(m.a)({parentName:"p"},{href:"https://npmjs.com/package/axios"}),"axios"),", you can use the ",Object(l.a)("inlineCode",{parentName:"p"},"url")," and ",Object(l.a)("inlineCode",{parentName:"p"},"headers")," as:"),Object(l.a)("pre",{className:"language-js"},Object(l.a)("code",Object(m.a)({parentName:"pre"},{className:"language-js"}),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," axios ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token function"}),"require"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token string"}),'"axios"'),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\naxios",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token method function property-access"}),"request"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{")," url",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),",")," headers ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n")),Object(l.a)("p",null,"However, this is quite common, so ",Object(l.a)("inlineCode",{parentName:"p"},"client")," provides a method to send a request which internally uses gaxios that is compatible with axios."),Object(l.a)("pre",{className:"language-js"},Object(l.a)("code",Object(m.a)({parentName:"pre"},{className:"language-js"}),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token comment"}),"// Almost same as the sample code using axios above."),"\nclient",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token method function property-access"}),"request"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{")," url ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n")),Object(l.a)("p",null,"Consequently, you can access a resource protected by Cloud IAP as follows:"),Object(l.a)("pre",{className:"language-js"},Object(l.a)("code",Object(m.a)({parentName:"pre"},{className:"language-js"}),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"JWT")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token function"}),"require"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token string"}),'"google-auth-library"'),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"OAUTH2_CLIENT_ID")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token string"}),'"..."'),"\n\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token comment"}),"// Downloaded credentials JSON file."),"\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," credentials ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token function"}),"require"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token string"}),'"./service-account-credentials.json"'),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"SERVICE_ACCOUNT_EMAIL")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," credentials",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token property-access"}),"client_email"),"\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"SERVICE_ACCOUNT_PRIVATE_KEY")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," credentials",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token property-access"}),"private_key"),"\n\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"async")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"function")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token function"}),"main"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," client ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"new")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token class-name"}),"JWT"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    email",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"SERVICE_ACCOUNT_EMAIL"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    key",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"SERVICE_ACCOUNT_PRIVATE_KEY"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    additionalClaims",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      target_audience",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token constant"}),"OAUTH2_CLIENT_ID"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," url ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token string"}),'"http://example.appspot.com"'),"\n  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"const")," result ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token keyword"}),"await")," client",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token method function property-access"}),"request"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"{")," url ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n  ",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token console class-name"}),"console"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token method function property-access"}),"log"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),"result",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token property-access"}),"data"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token function"}),"main"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token method function property-access"}),"catch"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token console class-name"}),"console"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token property-access"}),"error"),Object(l.a)("span",Object(m.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n")),Object(l.a)("h2",null,"References"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(m.a)({parentName:"li"},{href:"https://cloud.google.com/iap/docs/authentication-howto#authenticating_from_a_service_account"}),"Programmatic authentication \xa0|\xa0 Identity-Aware Proxy \xa0|\xa0 Google Cloud")),Object(l.a)("li",{parentName:"ul"},Object(l.a)("a",Object(m.a)({parentName:"li"},{href:"https://github.com/googleapis/google-auth-library-nodejs/blob/d3fb55e0a710/samples/iap.js"}),"google-auth-library-nodejs/iap.js at d3fb55e \xb7 googleapis/google-auth-library-nodejs"))))}N.isMDXComponent=!0;var u=p.a.createElement,i=function(e){var a=e.meta;return u(r.a,{meta:a},u(N,null))};i.getInitialProps=Object(o.a)(n.a.mark((function e(){var a,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t("n1xW"),c=a.entries,e.abrupt("return",{meta:c["blog/2019/01/authorize-iap-by-nodejs"]});case 2:case"end":return e.stop()}}),e)})));a.default=i}},[["25XM",0,1,4,2,3,5,6]]]);