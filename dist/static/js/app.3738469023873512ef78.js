webpackJsonp([1],{0:function(t,e){},"3L5W":function(t,e){},"6qYP":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.0ede20a.png"},CuRo:function(t,e){},Didw:function(t,e,n){t.exports=n.p+"static/img/login.b210195.jpg"},Evs9:function(t,e){},ExwQ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"user",function(){return ut}),n.d(a,"isAuth",function(){return dt}),n.d(a,"isAdmin",function(){return pt}),n.d(a,"isUser",function(){return mt}),n.d(a,"isGuest",function(){return gt});var i={};n.d(i,"getUser",function(){return ft}),n.d(i,"login",function(){return ht}),n.d(i,"signUp",function(){return vt}),n.d(i,"signOut",function(){return _t});n("e0XP");var o=n("7+uW"),s=n("/IwO"),r=n.n(s),c=n("5hVS"),l=n.n(c),u=n("Dd8w"),d=n.n(u),p=n("NYxO"),m=n("7Otq"),g=n.n(m),f=n("Sesd"),h=n.n(f),v=[{name:"Home",url:"/home",icon:"fa fa-map-marker"},{name:"Profile",url:"/profile",icon:"fa fa-user"},{name:"Scanner",url:"/scanner",icon:"fa fa-list"}],_={data:function(){return{logo:g.a,avatar:h.a,menu:v,showMenu:!1}},computed:d()({},Object(p.c)({user:"user",isAuth:"isAuth"}),{showTopMenu:function(){switch(this.$route.name){case"profile":case"signUp":case"login":return!1;default:return!0}},showBottomMenu:function(){switch(this.$route.name){case"signUp":case"login":return!1;default:return!0}}}),methods:{toggleMenu:function(){this.showMenu=!this.showMenu}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isAuth?n("div",[t.showTopMenu?n("div",{class:[t.showMenu?"wrapper-opened":"wrapper-closed"]},[n("div",{class:[t.showMenu?"toggle-wrapper-opened":"toggle-wrapper-closed"],on:{click:t.toggleMenu}}),t._v(" "),n("div",{class:[t.showMenu?"toggle-bg-opened":"toggle-bg-closed"]}),t._v(" "),n("div",{staticClass:"var-navbar",class:[t.showMenu?"navbar-shrinked":""]},[n("img",{staticClass:"var-navbar__logo",attrs:{src:t.logo}}),t._v(" "),n("div",{staticClass:"var-navbar__logo-container",on:{click:t.toggleMenu}},[n("img",{staticClass:"image",attrs:{src:t.avatar}})]),t._v(" "),n("div",{staticClass:"menu-closed",class:[t.showMenu?"menu-opened":""]},[n("ul",{staticClass:"menu-ul"},[n("li",{on:{click:t.toggleMenu}},[n("router-link",{attrs:{to:{name:"profile",params:{type:"balance"}}}},[n("i",{staticClass:"fa fa-money"})])],1),t._v(" "),n("li",{on:{click:t.toggleMenu}},[n("router-link",{attrs:{to:{name:"profile",params:{type:"transactions"}}}},[n("i",{staticClass:"fa fa-exchange"})])],1)])])])]):t._e(),t._v(" "),t.showBottomMenu?n("div",{staticClass:"bottom-tabs"},t._l(t.menu,function(e,a){return n("router-link",{key:a,attrs:{to:e.url}},[n("i",{class:[e.icon]}),t._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[t._v("\n        "+t._s(e.name)+"\n      ")])])})):t._e()]):t._e()},staticRenderFns:[]},k={name:"app",components:{VarNavBar:n("VU/8")(_,b,!1,function(t){n("nF9r")},"data-v-44e701e1",null).exports},computed:d()({},Object(p.c)({isAuth:"isAuth"}),{parsePadding:function(){switch(this.$route.name){case"test":return"padding-top: 10px;";case"login":case"signUp":case"profile":return"padding-top: 0px;";default:return"padding-top: 55px;"}}})},C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.parsePadding,attrs:{id:"app"}},[e("var-nav-bar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},w=n("VU/8")(k,C,!1,function(t){n("t7yp")},null,null).exports,y=n("/ocq"),U=n("Didw"),M=n.n(U),E={data:function(){return{image:M.a}},name:"authHeader",computed:{getBackground:function(){return"background-image:"+this.getLinear+", url("+this.image+");"+this.getBgPos},getLinear:function(){return"-webkit-linear-gradient(90deg, rgba(44, 44, 44, 0.2), rgba(224, 23, 3, 0.6))"},getBgPos:function(){return"background-size:cover;background-position: center center;"}}},A={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"page-header-image",style:this.getBackground})},staticRenderFns:[]},S=n("VU/8")(E,A,!1,function(t){n("ExwQ")},"data-v-e89f163e",null).exports,T={name:"VarInput",data:function(){return{inputValue:""}},props:{icon:{type:String,default:"times"},placeholder:{type:String,default:"Login"},inputVal:{type:Function},name:{type:String,default:"input"},type:{type:String,default:"text"}},computed:{parseIcon:function(){return"fa fa-"+this.icon}},methods:{maskedInput:function(t){this.inputValue=t.target.value,this.$emit("inputVal",this.inputValue,this.name)}}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"var-input-group"},[e("input",{staticClass:"var-input-group__input",attrs:{placeholder:this.placeholder,autocomplete:"off",name:this.name,type:this.type},on:{input:this.maskedInput}}),this._v(" "),e("span",{staticClass:"var-input-group__addon"},[e("i",{class:this.parseIcon})])])])},staticRenderFns:[]},R=n("VU/8")(T,I,!1,function(t){n("t2Go")},"data-v-3d132b3e",null).exports,P={email:{placeholder:"Email",icon:"user",type:"email"},password:{placeholder:"Password",icon:"lock",type:"password"}},x={name:"login",data:function(){return{image:M.a,loginParams:P,form:{email:"",password:""}}},computed:d()({},Object(p.c)({isAuth:"isAuth"})),watch:{isAuth:function(){this.isAuth&&this.$router.push({path:"/home"})}},components:{VarInput:R,authBg:S},methods:d()({},Object(p.b)({handleLogin:"login"}),{userInput:function(t,e){switch(e){case"email":this.form.email=t;break;case"password":this.form.password=t}},login:function(){var t=this.form;this.handleLogin({form:t})}})},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("auth-bg"),t._v(" "),a("div",{staticClass:"login"},[a("img",{staticClass:"login__image",attrs:{src:n("7Otq")}}),t._v(" "),t._l(t.loginParams,function(e,n){return a("div",{key:n},[a("var-input",{attrs:{icon:e.icon,placeholder:e.placeholder,name:n,type:e.type},on:{inputVal:t.userInput}})],1)}),t._v(" "),a("div",{staticClass:"login-middle"},[a("button",{staticClass:"login-middle__btn",on:{click:t.login,enter:t.login}},[t._v("\n        Login\n    ")])]),t._v(" "),a("div",{staticClass:"login__links"},[a("router-link",{attrs:{to:"signUp"}},[t._v("Create account")]),t._v(" "),a("router-link",{attrs:{to:"signUp"}},[t._v("Need help?")])],1),t._v(" "),t._m(0)],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-bottom"},[e("p",{staticClass:"login-bottom__copyright"},[this._v("\n        ©2017 By "),e("a",[this._v("Sullivan")]),this._v(" & "),e("a",[this._v("Nakamura")])])])}]},V=n("VU/8")(x,O,!1,function(t){n("Evs9")},"data-v-2a2dc2aa",null).exports,B={email:{placeholder:"Email",icon:"user",type:"text"},name:{placeholder:"Name",icon:"user",type:"text"},password:{placeholder:"Password",icon:"lock",type:"password"}},N={name:"login",data:function(){return{image:M.a,signUpParams:B,form:{email:"",name:"",password:""}}},computed:d()({},Object(p.c)({isAuth:"isAuth"})),watch:{isAuth:function(){this.isAuth&&this.$router.push({path:"/home"})}},components:{VarInput:R,authBg:S},methods:d()({},Object(p.b)({handleSignUp:"signUp"}),{userInput:function(t,e){switch(e){case"email":this.form.email=t;break;case"name":this.form.name=t;break;case"password":this.form.password=t}},signUp:function(){var t=this.form;this.handleSignUp({form:t})},mounted:function(){this.image}})},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("auth-bg"),t._v(" "),a("div",{staticClass:"login"},[a("img",{staticClass:"login__image",attrs:{src:n("7Otq")}}),t._v(" "),t._l(t.signUpParams,function(e,n){return a("div",{key:n},[a("var-input",{attrs:{icon:e.icon,placeholder:e.placeholder,name:n,type:e.type},on:{inputVal:t.userInput}})],1)}),t._v(" "),a("div",{staticClass:"login-middle"},[a("button",{staticClass:"login-middle__btn",on:{click:t.signUp}},[t._v("Sign Up")])]),t._v(" "),a("div",{staticClass:"login__links"},[a("router-link",{attrs:{to:"login"}},[t._v("Have an account?")]),t._v(" "),a("router-link",{attrs:{to:"signUp"}},[t._v("Need help?")])],1),t._v(" "),t._m(0)],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-bottom"},[e("p",{staticClass:"login-bottom__copyright"},[this._v("\n        ©2017 By "),e("a",[this._v("Sullivan")]),this._v(" & "),e("a",[this._v("Nakamura")])])])}]},L=n("VU/8")(N,$,!1,function(t){n("iirR")},"data-v-0befceb7",null).exports,G={zoom:15,center:[121.5273285,31.21515044],lng:0,lat:0,loaded:!1},D={props:["text"],template:'<i class="fa fa-jpy"></i>'},F={contentRender:function(t,e){return t(D,{class:"hong-bao-"+e.$attrs.hType,props:{text:"!"}})}},j={fillColor:"#f96332",strokeColor:"#f96332",fillOpacity:"0.6"},z={some_id_1:{id:"some_id_1",position:[121.5273285,31.21515044],visible:!0,amount:"45元",hType:"hot"},some_id_2:{id:"some_id_2",position:[121.5273386,31.22286044],visible:!0,amount:"123元",hType:"cold"},some_id_3:{id:"some_id_3",position:[121.5289585,31.21595944],visible:!0,amount:"45元",hType:"cold"},some_id_4:{id:"some_id_4",position:[121.5219585,31.21599944],visible:!0,amount:"45元",hType:"cold"},some_id_5:{id:"some_id_5",position:[121.5283386,31.22486044],visible:!0,amount:"45元",hType:"hot"}},W={circle_1:{id:"c_id_1",center:[121.5273285,31.21515044],radius:500},circle_2:{id:"c_id_2",center:[121.5274285,31.22411044],radius:300}},q=new s.AMapManager,H={name:"var-map",data:function(){var t=this;return{mapConfig:G,markConfig:F,circleConfig:j,marks:z,circles:W,amapManager:q,infoContent:"",markerPosition:[121.5273386,31.21916044],visibleInfo:!1,plugin:["ToolBar",{pName:"MapType",defaultType:0}],markerEvents:{events:{click:function(e){t.markerPosition=[],t.markerPosition.push(e.lnglat.lng),t.markerPosition.push(e.lnglat.lat),t.infoContent=t.marks[e.target.G.vid].amount,t.visibleInfo="hot"===t.marks[e.target.G.vid].hType}}},circleEvents:{events:{click:function(){console.log("click polygon")}}},events:{moveend:function(){var e=t.amapManager.getMap().getCenter();t.mapConfig.center=[e.getLng(),e.getLat()]},zoomchange:function(){t.mapConfig.zoom=t.amapManager.getMap().getZoom()},click:function(t){console.log("map clicked",t)}}}},watch:{visibleInfo:function(){},markerPosition:function(){}},methods:{changePosition:function(){var t=this.markers[0].position;this.markers[0].position=[t[0]+.002,t[1]-.002]},chnageDraggle:function(){var t=this.markers[0].draggable;this.markers[0].draggable=!t},addZoom:function(){this.mapConfig.zoom++},subZoom:function(){this.mapConfig.zoom--},changeCenter:function(){this.mapConfig.center=[this.mapConfig.center[0]+.1,this.mapConfig.center[1]+.1]}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"amap-page-container"},[n("el-amap",{staticStyle:{height:"100%!important",overflow:"hidden"},attrs:{vid:"amap-vue",center:t.mapConfig.center,zoom:t.mapConfig.zoom,"amap-manager":t.amapManager,plugin:t.plugin,events:t.events}},[t._l(t.marks,function(e,a){return n("el-amap-marker",{key:e.id,attrs:{vid:a,position:e.position,visible:e.visible,draggable:!1,amount:e.amount,hType:e.hType,"content-render":t.markConfig.contentRender,events:t.markerEvents.events}})}),t._v(" "),n("el-amap-info-window",{attrs:{position:t.markerPosition,content:t.infoContent,visible:t.visibleInfo}}),t._v(" "),t._l(t.circles,function(e,a){return n("el-amap-circle",{key:e.id,attrs:{center:e.center,radius:e.radius,events:t.circleEvents.events,fillOpacity:t.circleConfig.fillOpacity,fillColor:t.circleConfig.fillColor,strokeColor:t.circleConfig.strokeColor}})})],2)],1)},staticRenderFns:[]},Y={components:{VarMap:n("VU/8")(H,Z,!1,function(t){n("PA0y")},null,null).exports}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"map-container"},[e("var-map")],1)},staticRenderFns:[]},Q=n("VU/8")(Y,K,!1,function(t){n("xWoV")},"data-v-aebfbee6",null).exports,X=[{date:"11 Dec",time:"17:28",amount:"15",id:"987439065423521234",type:"input",source:"Wechat"},{date:"12 Dec",time:"15:12",amount:"200",id:"312412412423523523",type:"withdraw",source:"Bank card"},{date:"21 Dec",time:"17:00",amount:"20",id:"312412412423523523",type:"input",source:"Bank card"}],J={data:function(){return{avatar:h.a,transactions:X,activeTab:"balance"}},watch:{actTab:function(){}},computed:d()({},Object(p.c)({user:"user"}),{actTab:function(){var t=this.$route.params.type;this.activeTab=t||"balance"},getBackground:function(){return"background-image:"+this.getLinear+", url("+this.avatar+");"+this.getBgPos},getLinear:function(){return"-webkit-linear-gradient(rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8))"},getBgPos:function(){return"background-size:cover;background-position: center center;padding-top: 20px;height: auto;"}}),methods:{choseTab:function(t){"balance"===t?this.activeTab="balance":"transactions"===t&&(this.activeTab="transactions")}},mounted:function(){this.activeTab}},tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"var-profile-wrapper"},[t.user?n("div",{staticClass:"var-profile",style:t.getBackground},[n("div",{staticClass:"var-profile__avatar-container"},[n("img",{staticClass:"image",attrs:{src:t.avatar}})]),t._v(" "),n("h3",{staticClass:"name"},[t._v("\n      "+t._s(t.user.name)+"\n    ")]),t._v(" "),n("div",{staticClass:"var-tabs"},[n("h5",{staticClass:"var-tabs__tab",class:["balance"===t.activeTab?"active-tab":""],on:{click:function(e){t.choseTab("balance")}}},[t._v("\n        Balance\n      ")]),t._v(" "),n("h5",{staticClass:"var-tabs__tab",class:["transactions"===t.activeTab?"active-tab":""],on:{click:function(e){t.choseTab("transactions")}}},[t._v("\n        Transactions\n      ")])])]):t._e(),t._v(" "),"balance"===t.activeTab?n("div",{staticClass:"profile-tab balance"},[n("h2",{staticClass:"amount"},[t._v("324")])]):t._e(),t._v(" "),"transactions"===t.activeTab?n("div",{staticClass:"profile-tab"},t._l(t.transactions,function(e,a){return n("div",{key:a,staticClass:"single-transaction"},[n("div",{staticClass:"single-transaction__header"},[t._v("\n        "+t._s(e.date)+" "+t._s(e.time)+"\n      ")]),t._v(" "),n("div",{staticClass:"single-transaction__body"},[n("div",{staticClass:"top"},["input"===e.type?n("i",{staticClass:"fa fa-level-up",staticStyle:{color:"green"}}):t._e(),t._v(" "),"withdraw"===e.type?n("i",{staticClass:"fa fa-level-down",staticStyle:{color:"red"}}):t._e(),t._v("\n          from "+t._s(e.source)+"\n        ")]),t._v(" "),n("div",{staticClass:"middle"},[n("div",{staticClass:"date"},[n("b",[t._v(t._s(e.type)+" from "+t._s(e.source))]),t._v(" "),n("p",[t._v(t._s(e.date)+" "+t._s(e.time))])]),t._v(" "),n("h2",{staticClass:"amount"},[t._v(t._s(e.amount))])])])])})):t._e()])},staticRenderFns:[]},et=n("VU/8")(J,tt,!1,function(t){n("6qYP")},"data-v-7622c6ea",null).exports,nt={computed:{marker:function(){return this.$store.getters.marker}},components:{arMarker:{props:["marker"],data:function(){return{img:""}},template:'\n        <a-scene embedded arjs=\'trackingMethod: best;\'>\n          <a-anchor hit-testing-enabled=\'true\'>\n            <a-plane\n              src="4"\n              id="marker"\n              position="0 0.5 0"\n              segments-height="1500" geometry="width: 2; height: 4;"\n            />\n          </a-anchor>\n          <a-camera-static/>\n        </a-scene>',watch:{marker:function(){var t=document.getElementById("marker");t.attributes[0].value=this.marker.poster,console.log(t.attributes[0].value)}},mounted:function(){document.body.insertBefore(this.$el,document.body.firstChild);this.$store.dispatch("getMarker","-L0eMUf7HvIivTYm1rBb")}}}},at={render:function(){var t=this.$createElement,e=this._self._c||t;return this.marker?e("ar-marker",{attrs:{marker:this.marker}}):this._e()},staticRenderFns:[]},it=n("VU/8")(nt,at,!1,function(t){n("NZN/")},null,null).exports;o.default.use(y.a);var ot,st=new y.a({routes:[{path:"/login",name:"login",component:V},{path:"/signUp",name:"signUp",component:L},{path:"/home",name:"home",component:Q,meta:{mustAuth:!0}},{path:"/profile",name:"profile",component:et,meta:{mustAuth:!0}},{path:"/scanner",name:"scanner",component:it,meta:{mustAuth:!0}},{path:"*",name:"Redirect",redirect:"/home"}]}),rt=n("bOdI"),ct=n.n(rt),lt=(ot={},ct()(ot,"USER_LOGIN",function(t,e){console.log(e),t.login=e}),ct()(ot,"SET_LOGIN_USER_UID",function(t,e){t.login_user_uid=e}),ct()(ot,"UPDATE_CREDS",function(t,e){console.log(e),t.credentials=d()({},e)}),ct()(ot,"USER",function(t,e){t.user=e;var n=e.uid;localStorage.setItem("uid",n)}),ct()(ot,"LOGIN_MODEL",function(t,e){t.signupModel=!1,t.loginModel=e}),ct()(ot,"USER_SIGNOUT",function(t){t.login=!1,t.loginModel=!1,t.signupModel=!1,t.user={},localStorage.removeItem("uid")}),ot),ut=function(t){return t.user},dt=function(t){if(t.login)return!0;return localStorage.getItem("uid")},pt=function(t){return 999===t.user.role},mt=function(t){return 10===t.user.role},gt=function(t){return 0===t.user.role},ft=function(t){var e=t.commit;t.dispatch;wilddog.auth().onAuthStateChanged(function(t){var n=wilddog.auth().currentUser;if(n){var a=n.uid;e("SET_LOGIN_USER_UID",a);wilddog.sync().ref().child("users").child(a).once("value").then(function(t){var a=t.val();return a?(e("USER",a),e("USER_LOGIN",!0),d()({},n,a)):n})}else e("USER_SIGNOUT")})},ht=function(t,e){var n=t.commit,a=(t.state,t.rootState,e.form),i=a.email,o=a.password;wilddog.auth().signInWithEmailAndPassword(i,o).then(function(t){var e=d()({},t);n("USER",e),n("USER_LOGIN",!0)}).catch(function(t){console.log(t)})},vt=function(t,e){t.commit,t.state;var n=e.form,a=n.email,i=n.password,o=n.name;wilddog.auth().createUserWithEmailAndPassword(a,i).then(function(t){wilddog.sync().ref("users").child(t.uid).set({email:a,name:o,uid:t.uid,created_at:Date.now()}).then(function(){console.log("User created")})}).catch(function(t){console.log(t)})},_t=function(t){var e=t.commit;wilddog.auth().signOut(function(){e("USER_SIGNOUT"),e("SET_LOGIN_USER_UID","")})},bt={state:{},getters:{},mutations:{},actions:{}},kt={marker:{}},Ct={marker:function(){return kt.marker}},wt=ct()({},"GET_MARKER",function(t,e){var n=e.marker;kt.marker=n}),yt={state:kt,getters:Ct,actions:{getMarker:function(t,e){var n=t.commit;t.getters;wilddog.sync().ref().child("points").child(e).once("value").then(function(t){var e=t.val();n("GET_MARKER",{marker:e})}).catch(function(t){console.log("err",t)})}},mutations:wt};o.default.use(p.a);var Ut=new p.a.Store({state:{credentials:{email:"",password:""},user:{name:"",email:"",photoUrl:"",uid:"",created_at:""},role:0,loadingUser:!0,login:!1,loginModel:!1,signupModel:!1},getters:a,mutations:lt,actions:i,modules:{uix:bt,marker:yt},strict:!0});n("CuRo"),n("3L5W");o.default.use(r.a),r.a.initAMapApiLoader({key:"28966b6be8e4fa0e4c4f4c9b4bf8d3ce",plugin:["AMap.Autocomplete","AMap.PlaceSearch","AMap.Scale","AMap.OverView","AMap.ToolBar","AMap.MapType","AMap.PolyEditor","AMap.CircleEditor","Autocomplete","PlaceSearch","Scale","OverView","ToolBar","MapType","PolyEditor","AMap.CircleEditor"]}),o.default.config.productionTip=!1;l.a.initializeApp({syncURL:"https://wd4505314210dtebdx.wilddogio.com/",authDomain:"wd4505314210dtebdx.wilddog.com"}),st.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.mustAuth})&&(console.warn("AUTH:",Ut.getters.isAuth),Ut.getters.isAuth?n():n("/login")),n()}),o.default.config.ignoredElements=["a-scene","a-marker","a-box","a-camera-static","a-plane","a-anchor"],new o.default({el:"#app",router:st,store:Ut,template:"<App/>",components:{App:w},created:function(){this.$store.dispatch("getUser")}})},"NZN/":function(t,e){},PA0y:function(t,e){},Sesd:function(t,e,n){t.exports=n.p+"static/img/ryan.f217f34.jpg"},e0XP:function(t,e){},iirR:function(t,e){},nF9r:function(t,e){},t2Go:function(t,e){},t7yp:function(t,e){},xWoV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3738469023873512ef78.js.map