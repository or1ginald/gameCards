(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{12:function(e,t,n){e.exports={contentCard:"cards_contentCard__3XXzU",textarea:"cards_textarea__2-SAh",buttons:"cards_buttons__10cGS",btn:"cards_btn__3vefF"}},14:function(e,t,n){e.exports={nav:"Navigation_nav__3CXyF",wrap:"Navigation_wrap__3J-xK",listItem:"Navigation_listItem__2wBIY",navElement:"Navigation_navElement__3VPMA",p:"Navigation_p__3EbMI",navList:"Navigation_navList__FK_Ih"}},16:function(e,t,n){e.exports={tableSidebar:"tableSidebar_tableSidebar__2Smyo",buttonsContainer:"tableSidebar_buttonsContainer__fQj3x",header3:"tableSidebar_header3__2O_h0",pickBlock:"tableSidebar_pickBlock__1IgQE"}},17:function(e,t,n){e.exports={mainContainer:"Page_error_404_mainContainer__Bsswf",linkContainer:"Page_error_404_linkContainer__22GLI"}},19:function(e,t,n){e.exports={app:"App_app__1kX79",preloaderWrap:"App_preloaderWrap__3Dkxz",layout:"App_layout__1LipR",main:"App_main__3ZkGI"}},26:function(e,t,n){e.exports={inputWrap:"CustomInputText_inputWrap__1SUXE",input:"CustomInputText_input__3cd74"}},27:function(e,t,n){e.exports={letterImg:"ConfirmPassword_letterImg__3UhNI",errorImg:"ConfirmPassword_errorImg__1CPVm",heading:"ConfirmPassword_heading__35OWf"}},28:function(e,t,n){e.exports={table:"TableGrid_table__31DLv",btns:"TableGrid_btns__3IOTp",header3:"TableGrid_header3__2xkcE",searchInputSection:"TableGrid_searchInputSection__8uiK6",inputSearch:"TableGrid_inputSearch__qCm1c",textArea:"TableGrid_textArea__2Mb6Y",wrapper:"TableGrid_wrapper__3cbQU",rightBlock:"TableGrid_rightBlock__3P3-D"}},38:function(e,t,n){e.exports={rememberMeInput:"Login_rememberMeInput__2wEHP"}},4:function(e,t,n){e.exports={mainContainer:"Common_mainContainer__1YbqG",contentWrap:"Common_contentWrap__3cz03",content:"Common_content__2nJCL",btn:"Common_btn__3a_wE",inputEmail:"Common_inputEmail__3iLZ5",inputPassword:"Common_inputPassword__yLVis",inputCentering:"Common_inputCentering__1z1RO",avatar:"Common_avatar__1e9FW"}},40:function(e,t,n){e.exports={loader:"Preloader_loader__3R_QX"}},41:function(e,t,n){e.exports={btns:"Registrations_btns__17Wql"}},42:function(e,t,n){e.exports={range:"Range_range__3HDfO"}},43:function(e,t,n){e.exports={button:"CustomButton_button__1kKFn"}},49:function(e,t,n){},7:function(e,t,n){e.exports={wrapper:"Table_wrapper__2oJSk",btns:"Table_btns__3lGSd",wrap:"Table_wrap__1vyDk",rightBlock:"Table_rightBlock__1yX5h",decks:"Table_decks__1RT47",element:"Table_element__3yp2c",elementPart:"Table_elementPart__2gjva",tableCaption:"Table_tableCaption__uPa1x",captionElement:"Table_captionElement__1Jtlm",btn:"Table_btn__182RP",searchInputSection:"Table_searchInputSection__UbmZC",inputSearch:"Table_inputSearch__2W4-b",textArea:"Table_textArea__2rCMa",elementPartOne:"Table_elementPartOne__1B9jO",elementPartTwo:"Table_elementPartTwo__37-gV",elementPartThree:"Table_elementPartThree__1PRlU",elementPartFour:"Table_elementPartFour__WC-lW"}},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a,c,r=n(1),i=n.n(r),s=n(22),o=n.n(s),l=(n(49),n(5)),d=n(8),u=n(6),j=n(3),b=n(19),O=n.n(b),p=n(14),h=n.n(p),m=n(26),_=n.n(m),f=n(0),x=Object(r.memo)((function(e){var t=e.placeholder,n=e.typeInput,a=e.className,c=e.value,r=e.onChange,i=e.name;return Object(f.jsx)("div",{className:_.a.inputWrap,children:Object(f.jsx)("input",{size:40,type:n,name:i,value:c,onChange:r,placeholder:t,className:null!==a&&void 0!==a?a:_.a.input,autoComplete:"off",spellCheck:!1,"aria-autocomplete":"list"})})})),v=n(38),g=n.n(v);!function(e){e.REGISTRATION="/registration",e.LOGIN="/login",e.PROFILE="/profile",e.CONFIRM_PASSWORD="/confirmPassword/*",e.POPUP="/popup",e.CREATE_NEW_PASSWORD="/createNewPassword/:token",e.PAGE_404="/*",e.CARDS="/cards",e.CARD="/card"}(a||(a={})),function(e){e.idle="idle",e.loading="loading",e.succeeded="succeeded",e.failed="failed"}(c||(c={}));var C=l.c,S=function(e){var t=Object(r.useState)(e),n=Object(u.a)(t,2),a=n[0],c=n[1];return{value:a,handleValue:function(e){return c(e.target.value)},resetValue:function(){return c(e)}}},N=n(13),T=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},k=function(e){return/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e)},E=function(e,t){var n=t-e+1;return Array.from({length:n},(function(t,n){return n+e}))},P="...",A=n(2),R=n(39),w=n.n(R).a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),I=function(e){return w.get("cards/card?cardsPack_id=".concat(e))},y=function(e){return w.delete("cards/card?id=".concat(e))},D={errorValidation:null,errorNetwork:null},G=function(e){return{type:"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE",errorValidation:e}},U=function(e){return{type:"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE",errorNetwork:e}},F={profile:{_id:null,avatar:null,name:"",email:"",publicCardPacksCount:null,created:null,updated:null,isAdmin:null,verified:null,rememberMe:null,error:null}},L=function(e){return{type:"SET_USER_PROFILE",profile:e}},W=function(e){return w.post("auth/login",e)},M=function(){return w.delete("auth/me",{})},V=function(){return w.post("auth/me")},z=function(e){return w.post("auth/register",e)},B={isAuth:!1,error:null},K=function(e){return{type:"LOGIN/SET_AUTH_LOGIN_DATA",isAuth:e}},H={status:c.idle,error:null,isInitialized:!1},Z=function(e){return{type:"APP/SET_STATUS",status:e}},q={cards:[],answer:"",question:"",cardsTotalCount:5,grade:5,shots:1,maxGrade:5,minGrade:3,page:1,pageCount:4,packUserId:""},X=function(e){return w.post("auth/forgot",e)},J=function(e){return w.post("auth/set-new-password",e)},Q=function(e){return e.login.isAuth},$=function(e){return e.app.isInitialized},Y=function(e){return e.app.status},ee=function(e){return e.errorMessage.errorNetwork},te=function(e){return e.errorMessage.errorValidation},ne=n(4),ae=n.n(ne),ce=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],s=S(""),o=s.value,b=s.handleValue,O=s.resetValue,p=S(""),h=p.value,m=p.handleValue,_=p.resetValue,v=Object(l.b)(),N=C(Q),E=C(Y),P=C(te),A=C(ee);return N?Object(f.jsx)(j.a,{to:a.PROFILE}):Object(f.jsx)("div",{className:ae.a.mainContainer,children:"loading"===E?Object(f.jsx)(le,{}):Object(f.jsx)("div",{className:ae.a.content,children:Object(f.jsxs)("div",{className:ae.a.contentWrap,children:[Object(f.jsx)("h2",{children:" Login "}),P&&Object(f.jsxs)("span",{style:{color:"red"},children:[" ",P," "]}),A&&Object(f.jsxs)("span",{style:{color:"red"},children:[" ",A," "]}),Object(f.jsx)(x,{onChange:b,value:o,placeholder:"Email",typeInput:"text"}),Object(f.jsx)(x,{placeholder:"password",typeInput:"password",value:h,onChange:m}),Object(f.jsxs)("div",{className:g.a.rememberMeInput,children:["remember me",Object(f.jsx)("input",{type:"checkbox",checked:n,onChange:function(e){return i(e.currentTarget.checked)}})]}),Object(f.jsx)("div",{children:Object(f.jsx)(d.b,{to:a.CONFIRM_PASSWORD,children:" Forgot password "})}),Object(f.jsx)("div",{style:{minWidth:"50px"},children:Object(f.jsx)(Le,{title:"Sign In",onClick:function(){if(!k(h)||!T(o))return v(G("invalid data ;-(")),void setTimeout((function(){v(G(""))}),2e3);var e;k(h)&&T(o)&&(v((e={email:o,password:h,rememberMe:n},function(t){t(Z(c.loading)),W(e).then((function(e){t(K(!0)),t(L(e.data)),t(Z(c.succeeded))})).catch((function(e){t(Z(c.succeeded));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(U(n)),setTimeout((function(){t(U(""))}),2e3)})).finally((function(){t(Z(c.idle))}))})),O(""),_(""),v(Z(c.succeeded)))}})}),Object(f.jsx)("p",{children:" Do not have an account? "}),Object(f.jsx)(d.b,{to:a.REGISTRATION,children:" Sign Up "})]})})})},re=n.p+"static/media/avatar.4f216192.png",ie=n(40),se=n.n(ie),oe=n.p+"static/media/preloader1.9c1d25d2.gif",le=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:se.a.loader,src:oe,alt:"preloader"})})},de=function(){var e=Object(l.c)((function(e){return e.profilePage})),t=Object(l.b)(),n=C(Q),i=C(Y),s=e.profile.avatar,o=Object(r.useState)(e.profile.name),b=Object(u.a)(o,2),O=b[0],p=b[1],h=Object(r.useState)(e.profile.email),m=Object(u.a)(h,2),_=m[0],x=m[1],v=Object(r.useState)(!1),g=Object(u.a)(v,2),S=g[0],N=g[1],T=function(){return N(!0)},k=function(){N(!1)};return n?Object(f.jsx)("div",{className:ae.a.mainContainer,children:"loading"===i?Object(f.jsx)(le,{}):Object(f.jsxs)("div",{className:ae.a.content,children:[Object(f.jsx)("h2",{children:" Profile "}),Object(f.jsx)("img",{alt:"avatar_image",className:ae.a.avatar,src:null!==s?s:re}),Object(f.jsx)("input",{type:"file",className:ae.a.avatar,onChange:function(e){e.target.files}}),n?Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:ae.a.btn,onClick:function(){t((function(e){e(Z(c.loading)),M().then((function(){e(K(!1)),e(L(null)),e({type:"LOGIN/SET_ERROR_MESSAGE",error:""}),e(Z(c.idle))}))}))},children:"Log out"})}):Object(f.jsx)(d.c,{to:a.LOGIN,children:"Login"}),Object(f.jsx)("br",{}),S?Object(f.jsx)("input",{name:"name",value:O,onChange:function(e){p(e.currentTarget.value)},onBlur:k}):Object(f.jsx)("span",{onDoubleClick:T,children:O}),Object(f.jsx)("br",{}),S?Object(f.jsx)("input",{name:"email",value:_,onChange:function(e){x(e.currentTarget.value)},onBlur:k}):Object(f.jsx)("span",{onDoubleClick:T,children:_}),Object(f.jsx)("br",{})]})}):Object(f.jsx)(j.a,{to:a.LOGIN})},ue={isFetching:!1,isSignUp:!1},je=function(e){return{type:"REGISTRATION/IS_FETCHING",isFetching:e}},be=n(41),Oe=n.n(be),pe=function(e){var t=e.email,n=e.handleEmail,a=e.errorValid,c=e.errorNetwork,r=e.password,i=e.confirmPassword,s=e.handlePassword,o=e.handleConfirmPassword,l=e.onSendButtonClick,d=e.onCancelButtonClick,u=e.isFetching;return Object(f.jsx)("div",{className:ae.a.mainContainer,children:Object(f.jsx)("div",{className:ae.a.content,children:Object(f.jsxs)("div",{className:ae.a.contentWrap,children:[Object(f.jsx)("h2",{children:"Registration"}),Object(f.jsxs)("span",{style:{color:"red"},children:[" ",a," "]}),Object(f.jsxs)("span",{style:{color:"red"},children:[" ",c," "]}),Object(f.jsx)(x,{placeholder:"Email",typeInput:"email",onChange:n,value:t,name:"user[email]"}),Object(f.jsx)(x,{placeholder:"Password",typeInput:"password",onChange:s,value:r,name:"user[password]"}),Object(f.jsx)(x,{placeholder:"Confirm Password",typeInput:"password",onChange:o,value:i,name:"user[password]"}),Object(f.jsx)("p",{children:" Have fun! "}),Object(f.jsxs)("div",{className:Oe.a.btns,children:[Object(f.jsx)(Le,{title:"Cancel",onClick:d}),Object(f.jsx)(Le,{title:"Create",onClick:l,disabled:u})]})]})})})},he=function(){var e=S(""),t=e.value,n=e.handleValue,r=e.resetValue,i=S(""),s=i.value,o=i.handleValue,d=i.resetValue,u=S(""),b=u.value,O=u.handleValue,p=u.resetValue,h=Object(l.c)((function(e){return e.signUp.isFetching})),m=Object(l.c)((function(e){return e.signUp.isSignUp})),_=C(te),x=C(ee),v=Object(l.b)(),g={email:t,password:s};return m?Object(f.jsx)(j.a,{to:a.LOGIN}):Object(f.jsx)(pe,{email:t,password:s,confirmPassword:b,handleEmail:n,handlePassword:o,handleConfirmPassword:O,isFetching:h,onSendButtonClick:function(){var e;s===b&&null!==s&&null!==b&&k(s)&&T(t)||(v(G("invalid data ;-(")),setTimeout((function(){v(G(""))}),1e3)),k(s)&&T(t)&&(v((e=g,function(t){t(je(!0)),t(Z(c.loading)),z(e).then((function(){t({type:"REGISTRATION/IS_SIGNUP_SUCCESSFUL",isSignUpSuccessful:!0}),t(Z(c.succeeded))})).catch((function(e){t(Z(c.succeeded));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(U(n)),setTimeout((function(){t(U(""))}),2e3)})).finally((function(){t(je(!1))}))})),d(""),r(""),p(""))},onCancelButtonClick:function(){r(""),d(""),p("")},errorValid:_,errorNetwork:x})},me=[{id:1,title:"registration",link:a.REGISTRATION},{id:2,title:"login",link:a.LOGIN},{id:3,title:"profile",link:a.PROFILE},{id:4,title:"confirmPassword",link:a.CONFIRM_PASSWORD},{id:5,title:"popup",link:a.POPUP},{id:6,title:"createNewPassword",link:a.CREATE_NEW_PASSWORD},{id:7,title:"cards",link:a.CARDS},{id:8,title:"page404",link:a.PAGE_404}],_e=function(){return Object(f.jsx)("div",{className:h.a.nav,children:Object(f.jsx)("div",{className:h.a.wrap,children:Object(f.jsx)("div",{className:h.a.navList,children:me.map((function(e){var t=e.id,n=e.title,a=e.link;return Object(f.jsx)(d.c,{className:h.a.listItem,to:a,children:Object(f.jsx)("div",{className:h.a.navElement,children:n})},t)}))})})})},fe=function(e,t){return w.get("cards/pack",{params:{page:e,pageCount:t}})},xe=function(e){return w.post("cards/pack",{cardsPack:e})},ve=function(e){return w.delete("cards/pack/?id=".concat(e))},ge=function(e){return w.put("cards/pack",{cardsPack:e})},Ce={cardPacks:[],cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,page:1,pageCount:10},Se=function(e){return{type:"FETCH_DECKS",payload:e}},Ne=function(){return function(e,t){var n=t().decks,a=n.page,r=n.pageCount;e(Z(c.loading)),fe(a,r).then((function(t){e(Se(t.data)),e(Z(c.succeeded))})).catch((function(t){e(Z(c.succeeded));var n=t.response?t.response.data.error:"".concat(t.message,", more details in the console");e(U(n))}))}},Te=n(16),ke=n.n(Te),Ee=(n(75),function(e){var t=e.onPageChange,n=e.totalCount,a=e.siblingCount,c=void 0===a?1:a,i=e.currentPage,s=e.pageSize,o=function(e){var t=e.totalCount,n=e.pageSize,a=e.siblingCount,c=void 0===a?1:a,i=e.currentPage;return Object(r.useMemo)((function(){var e=Math.ceil(t/n);if(c+5>=e)return E(1,e);var a=Math.max(i-c,1),r=Math.min(i+c,e),s=a>2,o=r<e-2,l=1,d=e;if(!s&&o){var u=E(1,3+2*c);return[].concat(Object(N.a)(u),[P,e])}if(s&&!o){var j=E(e-(3+2*c)+1,e);return[l,P].concat(Object(N.a)(j))}if(s&&o){var b=E(a,r);return[l,P].concat(Object(N.a)(b),[P,d])}}),[t,n,c,i])}({currentPage:i,totalCount:n,siblingCount:c,pageSize:s});if(0===i||o.length<2)return null;var l=o[o.length-1],d=1===i?"pagination-item disabled":"pagination-item",u=i===l?"pagination-item disabled":"pagination-item";return Object(f.jsxs)("ul",{className:"pagination-container",children:[Object(f.jsx)("li",{className:d,onClick:function(){t(i-1)},children:Object(f.jsx)("div",{className:"arrow left"})}),o.map((function(e){if(e===P)return Object(f.jsx)("li",{className:"pagination-item dots",children:"\u2026"},e+Math.random().toString());var n=e===i?"pagination-item selected":"pagination-item";return Object(f.jsx)("li",{className:n,onClick:function(){return t(e)},children:e},e)})),Object(f.jsx)("li",{className:u,onClick:function(){t(i+1)},children:Object(f.jsx)("div",{className:"arrow right"})})]})}),Pe=i.a.memo((function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(e.value),o=Object(u.a)(s,2),d=o[0],j=o[1],b=Object(l.b)();return a?Object(f.jsx)("textarea",{value:d,onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onBlur:function(){b(function(e,t){return function(n){n(Z(c.loading)),ge({_id:t}).then((function(){n(function(e,t){return{type:"UPDATE_DECK",title:e,id:t}}(e,t)),n(Z(c.succeeded))})).catch((function(e){n(Z(c.succeeded));var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(U(t))}))}}(d,e.id)),i(!1)}}):Object(f.jsx)("span",{onDoubleClick:function(){i(!0),j(e.value)},children:e.value})})),Ae=n(7),Re=n.n(Ae),we=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(l.b)(),s=C(ee),o=C(Y),j=C((function(e){return e.decks.cardPacks})),b=C((function(e){return e.decks.cardPacksTotalCount})),O=C((function(e){return e.decks.page})),p=C((function(e){return e.decks.pageCount}));Object(r.useEffect)((function(){i(Ne())}),[i,O]);var h=function(e){i(function(e){return function(t){t(Z(c.loading)),ve(e).then((function(){t(function(e){return{type:"REMOVE_DECK",id:e}}(e)),t(Z(c.succeeded))})).catch((function(e){t(Z(c.succeeded));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(U(n))}))}}(e)),i(U(""))};return Object(f.jsxs)("div",{className:Re.a.wrap,children:[Object(f.jsxs)("div",{className:Re.a.wrapper,children:[Object(f.jsx)(Ge,{}),"loading"===o?Object(f.jsx)(le,{}):Object(f.jsx)("div",{className:Re.a.rightBlock,children:Object(f.jsxs)("div",{className:Re.a.decks,children:[Object(f.jsx)("h3",{style:{fontSize:"1.1em"},children:" Packs list "}),Object(f.jsxs)("div",{className:Re.a.searchInputSection,children:[Object(f.jsx)("input",{className:Re.a.inputSearch,id:"decks",placeholder:"Search",type:"search"}),Object(f.jsx)("textarea",{className:Re.a.textArea,placeholder:"name pack",value:n,onChange:function(e){a(e.currentTarget.value)}}),Object(f.jsx)("button",{className:ae.a.btn,onClick:function(){var e;i((e={name:n},function(t){t(Z(c.loading)),xe(e).then((function(e){var n=e.data.newCardsPack;t(function(e){return{type:"ADD_DECK",deck:e}}(n)),t(Z(c.succeeded))})).catch((function(e){t(Z(c.succeeded));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(U(n))}))})),a("")},children:"Add new pack"})]}),Object(f.jsxs)("div",{className:Re.a.tableCommon,children:[Object(f.jsxs)("div",{className:Re.a.element,children:[Object(f.jsx)("div",{className:Re.a.elementPartOne,style:{fontSize:"16px"},children:"Name"}),Object(f.jsx)("div",{className:Re.a.elementPartTwo,style:{fontSize:"16px"},children:"CardsCount"}),Object(f.jsx)("div",{className:Re.a.elementPartThree,style:{fontSize:"16px"},children:"Updated"}),Object(f.jsx)("div",{className:Re.a.elementPartFour,style:{fontSize:"16px"},children:"Created by"})]}),Object(f.jsxs)("div",{className:Re.a.tableRow,children:[s&&Object(f.jsxs)("span",{style:{color:"red"},children:[" ",s," "]}),j.map((function(e){return Object(f.jsxs)("div",{className:Re.a.element,children:[Object(f.jsx)("div",{className:Re.a.elementPartOne,children:Object(f.jsx)(Pe,{value:e.name,id:e._id})}),Object(f.jsx)("div",{className:Re.a.elementPartTwo,children:e.cardsCount}),Object(f.jsx)("div",{className:Re.a.elementPartThree,children:e.updated}),Object(f.jsx)("div",{className:Re.a.elementPartFour,children:e.user_name}),Object(f.jsx)("button",{className:Re.a.btn,children:"update"}),Object(f.jsx)("button",{className:Re.a.btn,onClick:function(){return h(e._id)},children:"delete"}),Object(f.jsx)(d.b,{to:"/cards/".concat(e._id),children:"cards"})]},1e5*Math.random())}))]})]})]})})]}),Object(f.jsx)(Ee,{currentPage:O,totalCount:b,pageSize:p,onPageChange:function(e){return i({type:"SET_CURRENT_PAGE",pageNumber:e})}})]})},Ie=n(42),ye=n.n(Ie),De=function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),n=t[0],a=t[1];return Object(f.jsxs)("div",{children:[n,Object(f.jsx)("input",{type:"range",onChange:function(e){a(+e.currentTarget.value)},value:n,className:ye.a.range})]})},Ge=i.a.memo((function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.decks.cardPacks})).filter((function(e){return"samutic40@gmail.com"===e.user_name}));return Object(f.jsxs)("div",{className:ke.a.tableSidebar,children:[Object(f.jsxs)("div",{className:ke.a.pickBlock,children:[Object(f.jsx)("h3",{className:ke.a.header3,children:"Show cards packs"}),Object(f.jsxs)("div",{className:ke.a.buttonsContainer,children:[Object(f.jsx)(Le,{title:"My",onClick:function(){e(Se({cardPacksTotalCount:0,maxCardsCount:0,minCardsCount:0,page:0,pageCount:0,cardPacks:t}))}}),Object(f.jsx)(Le,{title:"All",onClick:function(){e(Ne())}})]})]}),Object(f.jsxs)("div",{className:ke.a.pickBlock,children:[Object(f.jsx)("div",{children:"Number of cards"}),Object(f.jsx)(De,{})]})]})})),Ue=n(43),Fe=n.n(Ue),Le=i.a.memo((function(e){var t=e.onClick,n=e.title,a=e.disabled;return Object(f.jsx)("button",{className:Fe.a.button,onClick:function(){t()},disabled:a,children:n})})),We=n.p+"static/media/error404.688fee4d.gif",Me=n(17),Ve=n.n(Me),ze=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:Ve.a.mainContainer,children:[Object(f.jsx)("div",{className:Ve.a.imagine,children:Object(f.jsx)("img",{src:We,alt:"error404",className:Ve.a.page_404})}),Object(f.jsxs)("div",{className:Ve.a.linkContainer,children:[" ",Object(f.jsx)(d.b,{to:"/profile",className:Ve.a.link,children:"Back to home"})]})]})})},Be=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],i=S(""),s=i.value,o=i.handleValue,b=i.resetValue,O=Object(l.b)(),p=C(te),h=C(ee),m=C(Y),_={email:s,from:"test-front-admin <samutic40@gmail.com>",message:"<div style='background-color: #ffd500; \npadding: 15px; \nborder-color: #ff9900; \nwidth: 250px;\nheight: 30px'> \npassword recovery link: <a href='https://or1ginald.github.io/gameCards/#/createNewPassword/$token$'> recovery link </a></div>"};return n?Object(f.jsx)(j.a,{to:"/popup"}):Object(f.jsx)("div",{className:ae.a.mainContainer,children:"loading"===m?Object(f.jsx)(le,{}):Object(f.jsx)("div",{className:ae.a.content,children:Object(f.jsxs)("div",{className:ae.a.contentWrap,children:[Object(f.jsx)("h2",{children:"Forgot your password?"}),p&&Object(f.jsxs)("span",{style:{color:"red"},children:[" ",p," "]}),h&&Object(f.jsxs)("span",{style:{color:"red"},children:[" ",h," "]}),Object(f.jsx)("div",{className:ae.a.inputCentering,children:Object(f.jsx)(x,{placeholder:"Email",typeInput:"email",onChange:o,value:s})}),Object(f.jsx)("p",{children:" Enter your email and we will send you further instructions"}),Object(f.jsx)("div",{children:Object(f.jsx)(Le,{title:"Send instructions",onClick:function(){T(s)?(O(function(e,t){return function(n){n(Z(c.loading)),X(e).then((function(){t(!0),n(Z(c.succeeded))})).catch((function(e){n(Z(c.succeeded));var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(U(t)),setTimeout((function(){n(U(""))}),2e3)}))}}(_,a)),b("")):(O(G("invalid email ;-(")),setTimeout((function(){O(G(""))}),2e3))}})}),Object(f.jsx)("span",{children:"Did you remember your password?"}),Object(f.jsx)(d.b,{to:"/login",children:" Try logging in "})]})})})},Ke=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],s=S(""),o=s.value,d=s.handleValue,b=s.resetValue,O=Object(l.b)(),p=C(te),h=C(ee),m=C(Y),_=Object(j.h)().token,v={password:o,resetPasswordToken:_};return n?Object(f.jsx)(j.a,{to:a.LOGIN}):Object(f.jsx)("div",{className:ae.a.mainContainer,children:m===c.loading?Object(f.jsx)(le,{}):Object(f.jsx)("div",{className:ae.a.content,children:Object(f.jsxs)("div",{className:ae.a.contentWrap,children:[Object(f.jsx)("h2",{children:"Create new password"}),p&&Object(f.jsxs)("span",{style:{color:"red"},children:[" ",p," "]}),h&&Object(f.jsxs)("span",{style:{color:"red"},children:[" ",h," "]}),Object(f.jsx)("div",{className:ae.a.inputCentering,children:Object(f.jsx)(x,{placeholder:"Password",typeInput:"password",onChange:d,value:o})}),Object(f.jsx)("p",{children:" Create new password and we will send you further instructions to email"}),Object(f.jsx)("div",{children:Object(f.jsx)(Le,{title:"Create new password",onClick:function(){k(o)?(O(Z(c.loading)),O(function(e,t){return function(n){J(e).then((function(){t(!0)})).catch((function(e){var t=e.response?e.response.data.error:"".concat(e.message,", more details in the console");n(U(t)),setTimeout((function(){n(U(""))}),2e3)}))}}(v,i)),O(Z(c.succeeded)),b()):(O(G("invalid password ;-(")),setTimeout((function(){O(G(""))}),2e3))}})})]})})})},He=n.p+"static/media/letter.3761fe05.png",Ze=n(27),qe=n.n(Ze),Xe=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:ae.a.mainContainer,children:Object(f.jsxs)("div",{className:ae.a.content,children:[Object(f.jsx)("img",{className:qe.a.letterImg,src:He,alt:"letter"}),Object(f.jsxs)("div",{className:ae.a.contentWrap,children:[Object(f.jsx)("h2",{className:qe.a.heading,children:"Check Email"}),Object(f.jsx)("p",{children:"We have sent the Email with instructions to your email "})]})]})})})},Je=n(28),Qe=n.n(Je),$e=n(12),Ye=n.n($e),et=function(){var e=C(ee),t=C((function(e){return e.cards.cards}));console.log("cards",t);var n=Object(l.b)(),i=Object(j.g)(),s=Object(j.h)().cardsPack_id,o=function(e){n(function(e){return function(t){t(Z(c.loading)),y(e).then((function(){t(function(e){return{type:"CARDS/REMOVE_CARD",_id:e}}(e)),t(Z(c.succeeded))})).catch((function(e){t(Z(c.succeeded));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(U(n))}))}}(e)),n(U(""))};return Object(r.useEffect)((function(){var e;n((e=s,function(t){t(Z(c.loading)),I(e).then((function(e){t({type:"CARDS/SET_DATA_CARDS",cards:e.data.cards}),t(Z(c.succeeded))})).catch((function(e){t(Z(c.succeeded));var n=e.response?e.response.data.error:"".concat(e.message,", more details in the console");t(U(n)),setTimeout((function(){t(U(""))}),2e3)})).finally((function(){t(Z(c.idle))}))}))}),[s]),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{className:Ye.a.btn,onClick:function(){i(a.CARD)},children:"Add new card"}),Object(f.jsxs)("table",{className:Qe.a.table,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Question"}),Object(f.jsx)("th",{children:"Answer"}),Object(f.jsx)("th",{children:"Last Updated"}),Object(f.jsx)("th",{children:"Created"}),Object(f.jsx)("th",{children:"Actions"})]})}),Object(f.jsx)("tbody",{children:t.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.question}),Object(f.jsx)("td",{children:e.answer}),Object(f.jsx)("td",{children:e.updated}),Object(f.jsx)("td",{children:e.created}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:Qe.a.btns,children:[Object(f.jsx)(Le,{title:"delete",onClick:function(){return o(e._id)}}),Object(f.jsx)(Le,{title:"update",onClick:function(){}})]})})]},1e5*Math.random())}))})]}),e&&Object(f.jsxs)("span",{style:{color:"red"},children:[" ",e," "]})]})},tt=function(){var e=S(""),t=e.value,n=e.handleValue,r=S(""),i=r.value,s=r.handleValue,o=Object(j.g)(),l=C(Y);return Object(f.jsx)("div",{className:ae.a.mainContainer,children:l===c.loading?Object(f.jsx)(le,{}):Object(f.jsx)("div",{className:Ye.a.contentCard,children:Object(f.jsxs)("div",{className:ae.a.contentWrap,children:[Object(f.jsx)("h2",{children:" Card "}),Object(f.jsxs)("div",{className:Ye.a.container,children:[Object(f.jsx)("textarea",{className:Ye.a.textarea,placeholder:"Question",value:t,onChange:n}),Object(f.jsx)("textarea",{className:Ye.a.textarea,placeholder:"Answer",value:i,onChange:s})]}),Object(f.jsxs)("div",{className:Ye.a.buttons,children:[Object(f.jsx)("button",{className:Ye.a.btn,onClick:function(){o(a.CARDS)},children:"Cancel"}),Object(f.jsx)("button",{className:Ye.a.btn,onClick:function(){},children:"Add card"})]})]})})})},nt=function(){return Object(f.jsx)("div",{children:Object(f.jsx)(we,{})})},at=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],i=C($),s=Object(l.b)();if(Object(r.useEffect)((function(){s((function(e){V().then((function(t){e(K(!0)),e(L(t.data))})).finally((function(){e({type:"APP/SET_IS_INITIALIZED",isInitialized:!0})}))}))}),[s]),!i)return Object(f.jsx)("div",{className:O.a.preloaderWrap,children:Object(f.jsx)(le,{})});return Object(f.jsx)("div",{className:O.a.app,children:Object(f.jsxs)("div",{className:O.a.layout,children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:ae.a.btn,onClick:function(){c(!n)},children:"Show menu"})}),n?Object(f.jsx)(_e,{}):Object(f.jsx)("div",{className:h.a.nav}),Object(f.jsx)("div",{className:O.a.main,children:Object(f.jsxs)(j.d,{children:[Object(f.jsx)(j.b,{path:a.LOGIN,element:Object(f.jsx)(ce,{})}),Object(f.jsx)(j.b,{path:a.REGISTRATION,element:Object(f.jsx)(he,{})}),Object(f.jsx)(j.b,{path:a.PROFILE,element:Object(f.jsx)(de,{})}),Object(f.jsx)(j.b,{path:a.PAGE_404,element:Object(f.jsx)(ze,{})}),Object(f.jsx)(j.b,{path:a.CONFIRM_PASSWORD,element:Object(f.jsx)(Be,{})}),Object(f.jsx)(j.b,{path:a.POPUP,element:Object(f.jsx)(Xe,{})}),Object(f.jsx)(j.b,{path:a.CREATE_NEW_PASSWORD,element:Object(f.jsx)(Ke,{})}),Object(f.jsx)(j.b,{path:a.CARDS,element:Object(f.jsx)(et,{}),children:Object(f.jsx)(j.b,{path:":cardsPack_id",element:Object(f.jsx)(et,{})})}),Object(f.jsx)(j.b,{path:a.CARD,element:Object(f.jsx)(tt,{})}),Object(f.jsx)(j.b,{path:"/",element:Object(f.jsx)(nt,{})})]})})]})})},ct=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},rt=n(23),it=n(44),st=Object(rt.b)({cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARDS/SET_DATA_CARDS":return Object(A.a)(Object(A.a)({},e),{},{cards:t.cards});case"CARDS/REMOVE_CARD":return Object(A.a)(Object(A.a)({},e),{},{cards:e.cards.filter((function(e){return e._id!==t._id}))});case"CARDS/ADD_CARD":return Object(A.a)(Object(A.a)({},e),{},{cards:[t.card].concat(Object(N.a)(e.cards))});case"CARDS/UPDATE_CARD":return Object(A.a)(Object(A.a)({},e),{},{cards:e.cards.map((function(e){return e._id===t.dataUpdate._id?Object(A.a)(Object(A.a)({},e),{},{question:t.dataUpdate.question,answer:t.dataUpdate.answer}):e}))});default:return e}},signUp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION/IS_FETCHING":return Object(A.a)(Object(A.a)({},e),{},{isFetching:t.isFetching});case"REGISTRATION/IS_SIGNUP_SUCCESSFUL":return Object(A.a)(Object(A.a)({},e),{},{isSignUp:t.isSignUpSuccessful});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_AUTH_LOGIN_DATA":return Object(A.a)(Object(A.a)({},e),{},{isAuth:t.isAuth});case"LOGIN/SET_ERROR_MESSAGE":return Object(A.a)(Object(A.a)({},e),{},{error:t.error});default:return e}},profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(A.a)(Object(A.a)({},e),t.payload);case"SET_USER_PROFILE":return Object(A.a)(Object(A.a)({},e),{},{profile:Object(A.a)(Object(A.a)({},e.profile),t.profile)});case"LOGOUT_USER_PROFILE":return Object(A.a)(Object(A.a)({},e),{},{profile:{_id:null,avatar:null,name:"",email:"",publicCardPacksCount:null,created:null,updated:null,isAdmin:null,verified:null,rememberMe:null,error:null}});default:return e}},errorMessage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT_PASSWORD/SET_VALIDATION_ERROR_MESSAGE":return Object(A.a)(Object(A.a)({},e),{},{errorValidation:t.errorValidation});case"FORGOT_PASSWORD/SET_NETWORK_ERROR_MESSAGE":return Object(A.a)(Object(A.a)({},e),{},{errorNetwork:t.errorNetwork});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_STATUS":return Object(A.a)(Object(A.a)({},e),{},{status:t.status});case"APP/SET_ERROR":return Object(A.a)(Object(A.a)({},e),{},{error:t.error});case"APP/SET_IS_INITIALIZED":return Object(A.a)(Object(A.a)({},e),{},{isInitialized:t.isInitialized});default:return Object(A.a)({},e)}},decks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DECKS":return Object(A.a)(Object(A.a)({},e),t.payload);case"REMOVE_DECK":return Object(A.a)(Object(A.a)({},e),{},{cardPacks:e.cardPacks.filter((function(e){return e._id!==t.id}))});case"ADD_DECK":return Object(A.a)(Object(A.a)({},e),{},{cardPacks:[t.deck].concat(Object(N.a)(e.cardPacks))});case"UPDATE_DECK":return Object(A.a)(Object(A.a)({},e),{},{cardPacks:e.cardPacks.map((function(e){return e._id===t.id?Object(A.a)(Object(A.a)({},e),{},{name:t.title}):e}))});case"SET_CURRENT_PAGE":return Object(A.a)(Object(A.a)({},e),{},{page:t.pageNumber});default:return e}}}),ot=Object(rt.c)(st,Object(rt.a)(it.a));window.store=ot,o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(d.a,{children:Object(f.jsx)(l.a,{store:ot,children:Object(f.jsx)(at,{})})})}),document.getElementById("root")),ct()}},[[76,1,2]]]);
//# sourceMappingURL=main.4e702882.chunk.js.map