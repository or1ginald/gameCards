(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navigation_nav__3CXyF",wrap:"Navigation_wrap__3J-xK",listItem:"Navigation_listItem__2wBIY",navElement:"Navigation_navElement__3VPMA",p:"Navigation_p__3EbMI",navList:"Navigation_navList__FK_Ih"}},15:function(e,t,n){e.exports={letterImg:"ConfirmPassword_letterImg__3UhNI",errorImg:"ConfirmPassword_errorImg__1CPVm",heading:"ConfirmPassword_heading__35OWf"}},16:function(e,t,n){e.exports={mainContainer:"Page_error_404_mainContainer__Bsswf",linkContainer:"Page_error_404_linkContainer__22GLI"}},2:function(e,t,n){e.exports={mainContainer:"Common_mainContainer__1YbqG",contentWrap:"Common_contentWrap__3cz03",content:"Common_content__2nJCL",btn:"Common_btn__3a_wE",inputEmail:"Common_inputEmail__3iLZ5",inputPassword:"Common_inputPassword__yLVis",inputCentering:"Common_inputCentering__1z1RO"}},20:function(e,t,n){e.exports={app:"App_app__1kX79",layout:"App_layout__1LipR",main:"App_main__3ZkGI"}},24:function(e,t,n){e.exports={superInput:"CustomInputText_superInput__1rT3h",input:"CustomInputText_input__3cd74",errorInput:"CustomInputText_errorInput__1Hzuo",error:"CustomInputText_error__zMENZ",inputWrap:"CustomInputText_inputWrap__1SUXE"}},36:function(e,t,n){e.exports={loader:"Preloader_loader__3R_QX"}},37:function(e,t,n){e.exports={rememberMeInput:"Login_rememberMeInput__2wEHP"}},38:function(e,t,n){e.exports={btns:"Registrations_btns__17Wql"}},39:function(e,t,n){e.exports={range:"Range_range__3HDfO"}},45:function(e,t,n){},7:function(e,t,n){e.exports={wrapper:"Table_wrapper__2oJSk",leftBlock:"Table_leftBlock__2T92C",btns:"Table_btns__3lGSd",rightBlock:"Table_rightBlock__1yX5h",decks:"Table_decks__1RT47",element:"Table_element__3yp2c",elementPart:"Table_elementPart__2gjva",tableCaption:"Table_tableCaption__uPa1x",captionElement:"Table_captionElement__1Jtlm",btn:"Table_btn__182RP",searchInputSection:"Table_searchInputSection__UbmZC",inputSearch:"Table_inputSearch__2W4-b"}},71:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n.n(c),s=n(19),i=n.n(s),o=(n(45),n(5)),l=n(8),d=n(6),u=n(3),j=n(20),b=n.n(j),O=n.p+"static/media/error404.688fee4d.gif",p=n(16),h=n.n(p),m=n(0),_=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:h.a.mainContainer,children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:O,alt:"error404",className:h.a.page_404})}),Object(m.jsxs)("div",{className:h.a.linkContainer,children:[" ",Object(m.jsx)(l.b,{to:"/profile",className:h.a.link,children:"Back to home"})]})]})})},x=n(12),f=n.n(x),v=o.c,g=function(e){var t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1];return{value:a,handleValue:function(e){return r(e.target.value)},resetValue:function(){return r(e)}}},N={},S=n(4),E=n(35),I=n.n(E).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),C=function(e){return I.post("auth/login",e)},R=function(){return I.delete("auth/me",{})},T=function(){return I.post("auth/me")},w=function(e){return I.post("auth/register",e)},P={status:"idle",error:null,isInitialized:!1},A=function(e){return{type:"APP/SET_STATUS",status:e}},y={isAuth:!1,error:null},k=function(e){return{type:"LOGIN/SET_AUTH_LOGIN_DATA",isAuth:e}},G=function(e){return{type:"LOGIN/SET_ERROR_MESSAGE",error:e}},L={_id:null,avatar:null,name:null,email:null,rememberMe:!1},F=function(e){return e.login.isAuth},W=function(e){return e.login.error},U=function(e){return e.app.isInitialized},D=function(e){return e.app.status},M=n(24),V=n.n(M),z=Object(c.memo)((function(e){var t=e.placeholder,n=e.typeInput,a=void 0===n?"text":n,c=e.className,r=e.value,s=e.onChange,i=e.name;return Object(m.jsx)("div",{className:V.a.inputWrap,children:Object(m.jsx)("input",{type:a,name:i,value:r,onChange:s,placeholder:t,className:null!==c&&void 0!==c?c:V.a.input,autoComplete:"off",spellCheck:!1,"aria-autocomplete":"list"})})})),B=n(36),H=n.n(B),Z=n.p+"static/media/preloader1.9c1d25d2.gif",K=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:H.a.loader,src:Z,alt:"preloader"})})},J=n(37),X=n.n(J);!function(e){e.REGISTRATION="/registration",e.LOGIN="/login",e.PROFILE="/profile",e.CONFIRM_PASSWORD="/confirmPassword/*",e.POPUP="/popup",e.CREATE_NEW_PASSWORD="/createNewPassword",e.PAGE_404="/*"}(a||(a={}));var Y=n(2),$=n.n(Y),q=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=g(""),i=s.value,j=s.handleValue,b=g(""),O=b.value,p=b.handleValue,h=Object(o.b)(),_=v(F),x=v(W),f=v(D);return _?Object(m.jsx)(u.a,{to:a.PROFILE}):Object(m.jsx)("div",{className:$.a.mainContainer,children:"loading"===f?Object(m.jsx)(K,{}):Object(m.jsx)("div",{className:$.a.content,children:Object(m.jsxs)("div",{className:$.a.contentWrap,children:[Object(m.jsx)("h2",{children:" Login "}),Object(m.jsx)(z,{onChange:j,value:i,placeholder:"Email",typeInput:"text"}),Object(m.jsx)(z,{placeholder:"password",typeInput:"password",value:O,onChange:p}),x?Object(m.jsxs)("div",{style:{color:"red",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"},children:[" ",x," "]}):"",Object(m.jsxs)("div",{className:X.a.rememberMeInput,children:["remember me",Object(m.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){return r(e.currentTarget.checked)}})]}),Object(m.jsx)("div",{children:Object(m.jsx)(l.b,{to:a.CONFIRM_PASSWORD,children:" Forgot password "})}),Object(m.jsx)("button",{onClick:function(){var e;h((e={email:i,password:O,rememberMe:n},function(t){t(A("loading")),C(e).then((function(){t(k(!0)),t(A("succeeded"))})).catch((function(e){var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(G(n)),t(A("failed"))})).finally((function(){t(A("idle"))}))}))},className:$.a.btn,children:"Sign In"}),Object(m.jsx)("p",{children:" Do not have an account? "}),Object(m.jsx)(l.b,{to:a.REGISTRATION,children:" Sign Up "})]})})})},Q=function(){var e=v(F),t=v(D),n=Object(o.b)();return e?Object(m.jsx)("div",{className:$.a.mainContainer,children:"loading"===t?Object(m.jsx)(K,{}):Object(m.jsxs)("div",{className:$.a.content,children:[Object(m.jsx)("h2",{children:" Profile "}),e?Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:$.a.btn,onClick:function(){n((function(e){e(A("loading")),R().then((function(){e(k(!1)),e(G("")),e(A("idle"))}))}))},children:"Log out"})}):Object(m.jsx)(l.c,{to:a.LOGIN,children:"Login"})]})}):Object(m.jsx)(u.a,{to:a.LOGIN})},ee=function(e){return I.post("auth/forgot",e)},te=function(e){return I.post("auth/set-new-password",e)},ne={isFetching:!1,error:null,isSignUp:!1},ae=function(e){return{type:"REGISTRATION/IS_FETCHING",isFetching:e}},ce=function(e){return{type:"RECOVERY/ERROR",payload:{error:e}}},re=n(38),se=n.n(re),ie=function(e){var t=e.email,n=e.handleEmail,a=e.error,c=e.password,r=e.handlePassword,s=e.handleConfirmPassword,i=e.onSendButtonClick,o=e.isFetching;return Object(m.jsx)("div",{className:$.a.mainContainer,children:Object(m.jsx)("div",{className:$.a.content,children:Object(m.jsxs)("div",{className:$.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Registration"}),Object(m.jsx)("span",{children:a}),Object(m.jsx)(z,{placeholder:"Email",typeInput:"email",onChange:n,value:t,name:"user[email]"}),Object(m.jsx)(z,{placeholder:"Password",typeInput:"password",onChange:r,value:c,name:"user[password]"}),Object(m.jsx)(z,{placeholder:"Confirm Password",typeInput:"password",onChange:s,value:c,name:"user[password]"}),Object(m.jsx)("p",{children:" Have fun! "}),Object(m.jsxs)("div",{className:se.a.btns,children:[Object(m.jsx)("button",{className:$.a.btn,children:"Cancel"}),Object(m.jsx)("button",{className:$.a.btn,onClick:i,disabled:o,children:"Create"})]})]})})})},oe=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},le=function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e)},de=function(){var e=g(""),t=e.value,n=e.handleValue,c=g(""),r=c.value,s=c.handleValue,i=g(""),l=i.value,d=i.handleValue,j=Object(o.c)((function(e){return e.signUp.error})),b=Object(o.c)((function(e){return e.signUp.isFetching})),O=Object(o.c)((function(e){return e.signUp.isSignUp})),p=Object(o.b)(),h={email:t,password:r};return O?Object(m.jsx)(u.a,{to:a.LOGIN}):Object(m.jsx)(ie,{email:t,handleEmail:n,password:r,handlePassword:s,handleConfirmPassword:d,isFetching:b,onSendButtonClick:function(){var e;r!==l&&p(ce(j)),le(r)&&oe(t)&&p((e=h,function(t){t(ae(!0)),w(e).then((function(){t({type:"REGISTRATION/IS_SIGNUP_SUCCESSFUL",isSignUpSuccessful:!0})})).catch((function(e){t(ce(e.response.data.error))})).finally((function(){t(ae(!1))}))}))},error:j})},ue=[{id:1,title:"registration",link:a.REGISTRATION},{id:2,title:"login",link:a.LOGIN},{id:3,title:"profile",link:a.PROFILE},{id:4,title:"confirmPassword",link:a.CONFIRM_PASSWORD},{id:5,title:"popup",link:a.POPUP},{id:6,title:"createNewPassword",link:a.CREATE_NEW_PASSWORD},{id:7,title:"page404",link:a.PAGE_404}],je=function(){return Object(m.jsx)("div",{className:f.a.nav,children:Object(m.jsx)("div",{className:f.a.wrap,children:Object(m.jsx)("div",{className:f.a.navList,children:ue.map((function(e){var t=e.id,n=e.title,a=e.link;return Object(m.jsx)(l.c,{className:f.a.listItem,to:a,children:Object(m.jsx)("div",{className:f.a.navElement,children:n})},t)}))})})})},be={errorValidation:null,errorNetwork:null},Oe=function(e){return{type:"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE",errorValidation:e}},pe=function(e){return{type:"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE",errorNetwork:e}},he=function(e){return e.errorMessage.errorNetwork},me=function(e){return e.errorMessage.errorValidation},_e=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(d.a)(r,2),i=s[0],j=s[1],b=Object(o.b)(),O=v(me),p=v(he),h=v(D),_={email:i,from:"test-front-admin <samutic40@gmail.com>",message:"<div style='background-color: #ffd500; \npadding: 15px; \nborder-color: #ff9900; \nwidth: 250px;\nheight: 30px'> \npassword recovery link: <a href='https://Or1ginald.github.io/gameCards/#/createNewPassword/$token$'> recovery link </a></div>"};return n?Object(m.jsx)(u.a,{to:"/popup"}):Object(m.jsx)("div",{className:$.a.mainContainer,children:"loading"===h?Object(m.jsx)(K,{}):Object(m.jsx)("div",{className:$.a.content,children:Object(m.jsxs)("div",{className:$.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Forgot your password?"}),O&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),p&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",p," "]}),Object(m.jsx)("div",{className:$.a.inputCentering,children:Object(m.jsx)("input",{placeholder:"Email",type:"email",className:$.a.inputEmail,onChange:function(e){j(e.currentTarget.value),b(Oe("")),b(pe(""))}})}),Object(m.jsx)("p",{children:" Enter your email and we will send you further instructions"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:$.a.btn,onClick:function(){oe(i)?(b(function(e,t){return function(n){n(A("loading")),ee(e).then((function(){t(!0),n(A("succeeded"))})).catch((function(e){n(A("succeeded"));var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(pe(t))}))}}(_,a)),j("")):b(Oe("invalid email ;-("))},children:"send instructions"})}),Object(m.jsx)("span",{children:"Did you remember your password?"}),Object(m.jsx)(l.b,{to:"/login",children:" Try logging in "})]})})})},xe=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(d.a)(r,2),i=s[0],l=s[1],j=Object(o.b)(),b=v(me),O=v(he),p=v(D),h=Object(u.f)().pathname.split("/"),_=h[h.length-1],x={password:i,resetPasswordToken:_};return n?Object(m.jsx)(u.a,{to:"/login"}):Object(m.jsx)("div",{className:$.a.mainContainer,children:"loading"===p?Object(m.jsx)(K,{}):Object(m.jsx)("div",{className:$.a.content,children:Object(m.jsxs)("div",{className:$.a.contentWrap,children:[Object(m.jsx)("h2",{children:"Create new password"}),b&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",b," "]}),O&&Object(m.jsxs)("span",{style:{color:"red"},children:[" ",O," "]}),Object(m.jsx)("div",{className:$.a.inputCentering,children:Object(m.jsx)("input",{placeholder:"Password",type:"password",className:$.a.inputPassword,onChange:function(e){l(e.currentTarget.value),j(Oe("")),j(pe(""))}})}),Object(m.jsx)("p",{children:" Create new password and we will send you further instructions to email"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:$.a.btn,onClick:function(){le(i)?(j(A("loading")),j(function(e,t){return function(n){te(e).then((function(){t(!0)})).catch((function(e){var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(pe(t))}))}}(x,a)),j(A("succeeded")),l("")):j(Oe("invalid password ;-("))},children:"Create new password"})})]})})})},fe=n.p+"static/media/letter.3761fe05.png",ve=n(15),ge=n.n(ve),Ne=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:$.a.mainContainer,children:Object(m.jsxs)("div",{className:$.a.content,children:[Object(m.jsx)("img",{className:ge.a.letterImg,src:fe,alt:"letter"}),Object(m.jsxs)("div",{className:$.a.contentWrap,children:[Object(m.jsx)("h2",{className:ge.a.heading,children:"Check Email"}),Object(m.jsx)("p",{children:"We have sent the Email with instructions to your email "})]})]})})})},Se=(n.p,n(25)),Ee=function(){return I.get("cards/pack")},Ie=[],Ce=n(39),Re=n.n(Ce),Te=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(m.jsxs)("div",{children:[n,Object(m.jsx)("input",{type:"range",onChange:function(e){a(+e.currentTarget.value)},value:n,className:Re.a.range})]})},we=n(7),Pe=n.n(we),Ae=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e((function(e){Ee().then((function(t){console.log(t.data),e({type:"FETCH_DECKS",decks:t.data.cardPacks})})).catch((function(e){console.log(e.data)}))}))}),[e]);var t=Object(o.c)((function(e){return e.decks}));return Object(m.jsxs)("div",{className:Pe.a.wrapper,children:[Object(m.jsxs)("div",{className:Pe.a.leftBlock,children:[Object(m.jsxs)("div",{className:Pe.a.btns,children:[Object(m.jsx)("button",{className:$.a.btn,children:"My"}),Object(m.jsx)("button",{className:$.a.btn,children:"All"})]}),Object(m.jsx)("span",{children:"Number of cards"}),Object(m.jsx)(Te,{})]}),Object(m.jsx)("div",{className:Pe.a.rightBlock,children:Object(m.jsxs)("div",{className:Pe.a.decks,children:[Object(m.jsx)("span",{children:" Packs list "}),Object(m.jsxs)("div",{className:Pe.a.searchInputSection,children:[Object(m.jsx)("input",{className:Pe.a.inputSearch,id:"decks",placeholder:"Search",type:"search"}),Object(m.jsx)("button",{className:$.a.btn,children:"Add new pack"})]}),Object(m.jsxs)("div",{className:Pe.a.tableCommon,children:[Object(m.jsxs)("div",{className:Pe.a.tableCaption,children:[Object(m.jsx)("div",{className:Pe.a.captionElement,children:"Name"}),Object(m.jsx)("div",{className:Pe.a.captionElement,children:"CardsCount"}),Object(m.jsx)("div",{className:Pe.a.captionElement,children:"Updated"})]}),Object(m.jsx)("div",{className:Pe.a.tableRow,children:t.map((function(e){return Object(m.jsxs)("div",{className:Pe.a.element,children:[Object(m.jsx)("div",{className:Pe.a.elementPart,children:e.name}),Object(m.jsx)("div",{className:Pe.a.elementPart,children:e.cardsCount}),Object(m.jsx)("div",{className:Pe.a.elementPart,children:e.updated}),Object(m.jsx)("button",{className:Pe.a.btn,children:"update"}),Object(m.jsx)("button",{className:Pe.a.btn,children:"delete"})]},1e5*Math.random())}))})]})]})})]})},ye=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(Ae,{})})},ke=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],r=t[1],s=v(U),i=Object(o.b)();if(Object(c.useEffect)((function(){i((function(e){T().then((function(){e(k(!0))})).finally((function(){e({type:"APP/SET_IS_INITIALIZED",isInitialized:!0})}))}))}),[]),!s)return Object(m.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(m.jsx)(K,{})});return Object(m.jsx)("div",{className:b.a.app,children:Object(m.jsxs)("div",{className:b.a.layout,children:[Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:$.a.btn,onClick:function(){r(!n)},children:"Show menu"})}),!0===n?Object(m.jsx)(je,{}):Object(m.jsx)("div",{className:f.a.nav}),Object(m.jsx)("div",{className:b.a.main,children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{path:a.LOGIN,element:Object(m.jsx)(q,{})}),Object(m.jsx)(u.b,{path:a.REGISTRATION,element:Object(m.jsx)(de,{})}),Object(m.jsx)(u.b,{path:a.PROFILE,element:Object(m.jsx)(Q,{})}),Object(m.jsx)(u.b,{path:"/*",element:Object(m.jsx)(_,{})}),Object(m.jsx)(u.b,{path:a.CONFIRM_PASSWORD,element:Object(m.jsx)(_e,{})}),Object(m.jsx)(u.b,{path:a.POPUP,element:Object(m.jsx)(Ne,{})}),Object(m.jsx)(u.b,{path:a.CREATE_NEW_PASSWORD,element:Object(m.jsx)(xe,{})}),Object(m.jsx)(u.b,{path:"/",element:Object(m.jsx)(ye,{})})]})})]})})},Ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},Le=n(21),Fe=n(40),We=Object(Le.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return t.type,e},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION/IS_FETCHING":return Object(S.a)(Object(S.a)({},e),{},{isFetching:t.isFetching});case"RECOVERY/ERROR":return Object(S.a)(Object(S.a)({},e),{},{error:t.payload.error});case"REGISTRATION/IS_SIGNUP_SUCCESSFUL":return Object(S.a)(Object(S.a)({},e),{},{isSignUp:t.isSignUpSuccessful});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_AUTH_LOGIN_DATA":return Object(S.a)(Object(S.a)({},e),{},{isAuth:t.isAuth});case"LOGIN/SET_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{error:t.error});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return"SET_USER_DATA"===t.type?Object(S.a)(Object(S.a)({},e),t.payload):e},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{errorValidation:t.errorValidation});case"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE":return Object(S.a)(Object(S.a)({},e),{},{errorNetwork:t.errorNetwork});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(S.a)(Object(S.a)({},e),{},{status:t.status});case"APP/SET_ERROR":return Object(S.a)(Object(S.a)({},e),{},{error:t.error});case"APP/SET_IS_INITIALIZED":return Object(S.a)(Object(S.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(S.a)({},e)}},decks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DECKS":return[].concat(Object(Se.a)(e),Object(Se.a)(t.decks));case"REMOVE_DECK":return e.filter((function(e){return e._id!==t.id}));default:return e}}}),Ue=Object(Le.c)(We,Object(Le.a)(Fe.a));window.store=Ue,i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(l.a,{children:Object(m.jsx)(o.a,{store:Ue,children:Object(m.jsx)(ke,{})})})}),document.getElementById("root")),Ge()}},[[71,1,2]]]);
//# sourceMappingURL=main.8504c94d.chunk.js.map