(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{GtyO:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2019/01/deploy-app-engine-from-circleci",function(){return t("PC13")}])},PC13:function(e,a,t){"use strict";t.r(a);var n=t("o0o1"),o=t.n(n),l=t("HaE+"),c=t("q1tI"),i=t.n(c),r=t("Yp5c"),u=t("wx14"),p=t("Ff2n"),s=t("7ljp"),d=(i.a.createElement,{}),b="wrapper";function m(e){var a=e.components,t=Object(p.a)(e,["components"]);return Object(s.a)(b,Object(u.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(s.a)("p",null,"I have implemented continuous delivery of Google AppEngine applications using CircleCI:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"Deploy to staging on pushing to ",Object(s.a)("inlineCode",{parentName:"li"},"master")," branch."),Object(s.a)("li",{parentName:"ul"},"Deploy to production on pushing a tag matching ",Object(s.a)("inlineCode",{parentName:"li"},"/^v\\d+\\.\\d+\\.\\d+$/"),".")),Object(s.a)("p",null,"This configuration is quite useful and I'm sure I'll have a chance to reuse it. In this article I describe the implementation details."),Object(s.a)("h2",null,"Create a Service Account"),Object(s.a)("p",null,"At first, I created a service account that will be used to authenticate Cloud SDK in CircleCI:"),Object(s.a)("ol",null,Object(s.a)("li",{parentName:"ol"},"Create a new account at ",Object(s.a)("a",Object(u.a)({parentName:"li"},{href:"https://console.cloud.google.com/iam-admin/serviceaccounts"}),"Service Accounts")," of Google Cloud Platform Console:",Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},'Named "circleci" to make it easy to guess what is\'s for.'),Object(s.a)("li",{parentName:"ul"},"Created a key and download it in JSON."))),Object(s.a)("li",{parentName:"ol"},"Attach roles to the created service account at ",Object(s.a)("a",Object(u.a)({parentName:"li"},{href:"https://console.cloud.google.com/iam-admin/iam"}),"IAM")," page:",Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},"App Engine Deployer (",Object(s.a)("inlineCode",{parentName:"li"},"appengine.deployer"),")"),Object(s.a)("li",{parentName:"ul"},"App Engine Service Admin (",Object(s.a)("inlineCode",{parentName:"li"},"appengine.serviceAdmin"),")"),Object(s.a)("li",{parentName:"ul"},"Cloud Build Editor (",Object(s.a)("inlineCode",{parentName:"li"},"cloudbuild.builds.editor"),")"),Object(s.a)("li",{parentName:"ul"},"Storage Object Creator (",Object(s.a)("inlineCode",{parentName:"li"},"storage.objectCreator"),")"),Object(s.a)("li",{parentName:"ul"},"Storage Object Viewer (",Object(s.a)("inlineCode",{parentName:"li"},"storage.objectViewer"),")")))),Object(s.a)("p",null,"Note that it may take a few minutes for the results to be reflected."),Object(s.a)("p",null,"When you create a new GCP project, a ",Object(s.a)("inlineCode",{parentName:"p"},"xxx@cloudbuild.gserviceaccount.com")," service account which has a Cloud Build Service Account role is created. You also need to attach the following role to the service account:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},"Storage Object Viewer")),Object(s.a)("h2",null,"Configure CircleCI"),Object(s.a)("p",null,"My GAE application uses ",Object(s.a)("inlineCode",{parentName:"p"},"nodejs10")," runtime. I added following npm run scripts:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("inlineCode",{parentName:"li"},"npm run test"),Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},"Run tests"))),Object(s.a)("li",{parentName:"ul"},Object(s.a)("inlineCode",{parentName:"li"},"npm run build"),Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},"Build project and put artifacts to the ",Object(s.a)("inlineCode",{parentName:"li"},"/build")," directory.")))),Object(s.a)("p",null,"And I implemented CD using those scripts."),Object(s.a)("h3",null,"Cloud SDK"),Object(s.a)("p",null,"I use ",Object(s.a)("a",Object(u.a)({parentName:"p"},{href:"https://hub.docker.com/r/google/cloud-sdk/"}),"google/cloud-sdk")," image which was described in ",Object(s.a)("a",Object(u.a)({parentName:"p"},{href:"/blog/2019/01/google-cloud-sdk-in-docker"}),"How to Use Google Cloud SDK Using Docker"),":"),Object(s.a)("p",null,"Set the downloaded JSON key as ",Object(s.a)("inlineCode",{parentName:"p"},"GCLOUD_SERVICE_KEY")," environment variable, then do following command to authenticate Cloud SDK:"),Object(s.a)("pre",{className:"language-bash"},Object(s.a)("code",Object(u.a)({parentName:"pre"},{className:"language-bash"}),Object(s.a)("span",Object(u.a)({parentName:"code"},{className:"token builtin class-name"}),"echo")," ",Object(s.a)("span",Object(u.a)({parentName:"code"},{className:"token variable"}),"$GCLOUD_SERVICE_KEY")," ",Object(s.a)("span",Object(u.a)({parentName:"code"},{className:"token operator"}),"|")," gcloud auth activate-service-account --key-file",Object(s.a)("span",Object(u.a)({parentName:"code"},{className:"token operator"}),"="),"-\n")),Object(s.a)("h3",null,"workspace"),Object(s.a)("p",null,"Build artifacts (generated by ",Object(s.a)("inlineCode",{parentName:"p"},"npm run build"),") are required to deploy."),Object(s.a)("p",null,"Node.js is required to run ",Object(s.a)("inlineCode",{parentName:"p"},"npm")," command but the google/cloud-sdk image does not contain Node.js runtime. There are some way to solve this problem:"),Object(s.a)("ol",null,Object(s.a)("li",{parentName:"ol"},"Create a Docker image with both Node.js and Cloud SDK and use it."),Object(s.a)("li",{parentName:"ol"},"Store build artifacts somewhere and use it in the Cloud SDK container.")),Object(s.a)("p",null,"I started by 1. but finally found that ",Object(s.a)("a",Object(u.a)({parentName:"p"},{href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"}),"I can use workspaces to share files across jobs")," so adopted 2."),Object(s.a)("h3",null,"Deploy"),Object(s.a)("p",null,Object(s.a)("inlineCode",{parentName:"p"},"gcloud app deploy")," command deploys your application to GAE. I used the following options:"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("inlineCode",{parentName:"li"},"--version"),Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},"Give the version name."),Object(s.a)("li",{parentName:"ul"},"You can replace an existing version by specifing the same version name."))),Object(s.a)("li",{parentName:"ul"},Object(s.a)("inlineCode",{parentName:"li"},"--no-promote"),Object(s.a)("ul",{parentName:"li"},Object(s.a)("li",{parentName:"ul"},"Don't route traffic to the newly created version after deployment.")))),Object(s.a)("h2",null,"Conclusion"),Object(s.a)("p",null,"You may think it's hard to set up continuous delivery in the early stages of a project. However, from a medium- to long-term perspective, I think these efforts are worthwhile."),Object(s.a)("h2",null,"References"),Object(s.a)("ul",null,Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",Object(u.a)({parentName:"li"},{href:"https://circleci.com/docs/2.0/google-auth/"}),"Authorizing the Google Cloud SDK - CircleCI")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",Object(u.a)({parentName:"li"},{href:"https://cloud.google.com/sdk/docs/authorizing#authorizing_with_a_service_account"}),"Authorizing Cloud SDK tools \xa0|\xa0 Cloud SDK Documentation \xa0|\xa0 Google Cloud")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",Object(u.a)({parentName:"li"},{href:"https://circleci.com/docs/2.0/workflows/#using-workspaces-to-share-data-among-jobs"}),"Using Workflows to Schedule Jobs - CircleCI")),Object(s.a)("li",{parentName:"ul"},Object(s.a)("a",Object(u.a)({parentName:"li"},{href:"https://cloud.google.com/sdk/gcloud/reference/app/deploy"}),"gcloud app deploy \xa0|\xa0 Cloud SDK \xa0|\xa0 Google Cloud"))))}m.isMDXComponent=!0;var j=i.a.createElement,O=function(e){var a=e.meta;return j(r.a,{meta:a},j(m,null))};O.getInitialProps=Object(l.a)(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t("n1xW"),n=a.entries,e.abrupt("return",{meta:n["blog/2019/01/deploy-app-engine-from-circleci"]});case 2:case"end":return e.stop()}}),e)})));a.default=O}},[["GtyO",0,1,3,2,4,5,6]]]);