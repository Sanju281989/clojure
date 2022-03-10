goog.provide('kira.dashboard');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
kira.dashboard.message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
if((typeof kira !== 'undefined') && (typeof kira.dashboard !== 'undefined') && (typeof kira.dashboard.root_el !== 'undefined')){
} else {
kira.dashboard.root_el = document.getElementById("root");
}
kira.dashboard.secapp = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["secapp"], null),(function (){
return kira.secapp.rootts;
}))));
kira.dashboard.help = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help"], null),(function (){
return kira.help.rootdd;
}))));
kira.dashboard.add2 = (function kira$dashboard$add2(){
return ((2) + (2));
});
kira.dashboard.welcome_dsd = (function kira$dashboard$welcome_dsd(var_args){
var G__26558 = arguments.length;
switch (G__26558) {
case 1:
return kira.dashboard.welcome_dsd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return kira.dashboard.welcome_dsd.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(kira.dashboard.welcome_dsd.cljs$core$IFn$_invoke$arity$1 = (function (abc){
if((typeof kira !== 'undefined') && (typeof kira.dashboard !== 'undefined') && (typeof kira.dashboard.welcome_message !== 'undefined')){
return null;
} else {
return (
kira.dashboard.welcome_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(abc))
;
}
}));

(kira.dashboard.welcome_dsd.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-lg.font-bold.text-right","h1.text-lg.font-bold.text-right",176064255),"Welcome",cljs.core._PLUS_," ",cljs.core._PLUS_,cljs.core.deref(kira.dashboard.welcome_message)], null);
}));

(kira.dashboard.welcome_dsd.cljs$lang$maxFixedArity = 1);

kira.dashboard.clock = (function kira$dashboard$clock(){
var timer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new Date()));
var time_updater = setInterval((function (){
return cljs.core.reset_BANG_(timer,(new Date()));
}),(1000));
var time_str = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(timer).toTimeString()," "));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null),time_str], null);
});
kira.dashboard.error_handler = (function kira$dashboard$error_handler(p__26559){
var map__26560 = p__26559;
var map__26560__$1 = cljs.core.__destructure_map(map__26560);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26560__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26560__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
kira.dashboard.verify_handler = (function kira$dashboard$verify_handler(response){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.login.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"secapp","secapp",1059158248));
});
kira.dashboard.verify_credentials = (function kira$dashboard$verify_credentials(payload){
var vec__26561 = payload;
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26561,(1),null);
if((((username === "")) || ((password === "")))){
return cljs.core.reset_BANG_(kira.dashboard.message,"Please provide the User-Id and Password.");
} else {
cljs.core.reset_BANG_(kira.dashboard.message,"Authenticating...");

var c__26228__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26229__auto__ = (function (){var switch__26143__auto__ = (function (state_26585){
var state_val_26586 = (state_26585[(1)]);
if((state_val_26586 === (1))){
var inst_26564 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_26565 = [new cljs.core.Keyword(null,"user_id","user_id",993497112),new cljs.core.Keyword(null,"user_pass","user_pass",517039555)];
var inst_26566 = [username,password];
var inst_26567 = cljs.core.PersistentHashMap.fromArrays(inst_26565,inst_26566);
var inst_26568 = [inst_26567];
var inst_26569 = cljs.core.PersistentHashMap.fromArrays(inst_26564,inst_26568);
var inst_26570 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("http://127.0.0.1:3000/authenticate-user",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26569], 0));
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26585__$1,(2),inst_26570);
} else {
if((state_val_26586 === (2))){
var inst_26572 = (state_26585[(2)]);
var inst_26573 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26572);
var inst_26574 = kira.dashboard.x = inst_26573;
var inst_26575 = cljs.core.reset_BANG_(kira.dashboard.message,"");
var inst_26576 = (kira.dashboard.x === (1));
var state_26585__$1 = (function (){var statearr_26587 = state_26585;
(statearr_26587[(7)] = inst_26575);

(statearr_26587[(8)] = inst_26574);

return statearr_26587;
})();
if(cljs.core.truth_(inst_26576)){
var statearr_26588_26654 = state_26585__$1;
(statearr_26588_26654[(1)] = (3));

} else {
var statearr_26589_26655 = state_26585__$1;
(statearr_26589_26655[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (3))){
var inst_26578 = kira.dashboard.verify_handler(kira.dashboard.x);
var inst_26579 = kira.dashboard.welcome_dsd.cljs$core$IFn$_invoke$arity$1(username);
var state_26585__$1 = (function (){var statearr_26590 = state_26585;
(statearr_26590[(9)] = inst_26578);

return statearr_26590;
})();
var statearr_26591_26656 = state_26585__$1;
(statearr_26591_26656[(2)] = inst_26579);

(statearr_26591_26656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (4))){
var inst_26581 = cljs.core.reset_BANG_(kira.dashboard.message,"Incorrect credentials");
var state_26585__$1 = state_26585;
var statearr_26592_26657 = state_26585__$1;
(statearr_26592_26657[(2)] = inst_26581);

(statearr_26592_26657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26586 === (5))){
var inst_26583 = (state_26585[(2)]);
var state_26585__$1 = state_26585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26585__$1,inst_26583);
} else {
return null;
}
}
}
}
}
});
return (function() {
var kira$dashboard$verify_credentials_$_state_machine__26144__auto__ = null;
var kira$dashboard$verify_credentials_$_state_machine__26144__auto____0 = (function (){
var statearr_26593 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26593[(0)] = kira$dashboard$verify_credentials_$_state_machine__26144__auto__);

(statearr_26593[(1)] = (1));

return statearr_26593;
});
var kira$dashboard$verify_credentials_$_state_machine__26144__auto____1 = (function (state_26585){
while(true){
var ret_value__26145__auto__ = (function (){try{while(true){
var result__26146__auto__ = switch__26143__auto__(state_26585);
if(cljs.core.keyword_identical_QMARK_(result__26146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26146__auto__;
}
break;
}
}catch (e26594){var ex__26147__auto__ = e26594;
var statearr_26595_26659 = state_26585;
(statearr_26595_26659[(2)] = ex__26147__auto__);


if(cljs.core.seq((state_26585[(4)]))){
var statearr_26596_26660 = state_26585;
(statearr_26596_26660[(1)] = cljs.core.first((state_26585[(4)])));

} else {
throw ex__26147__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26661 = state_26585;
state_26585 = G__26661;
continue;
} else {
return ret_value__26145__auto__;
}
break;
}
});
kira$dashboard$verify_credentials_$_state_machine__26144__auto__ = function(state_26585){
switch(arguments.length){
case 0:
return kira$dashboard$verify_credentials_$_state_machine__26144__auto____0.call(this);
case 1:
return kira$dashboard$verify_credentials_$_state_machine__26144__auto____1.call(this,state_26585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kira$dashboard$verify_credentials_$_state_machine__26144__auto__.cljs$core$IFn$_invoke$arity$0 = kira$dashboard$verify_credentials_$_state_machine__26144__auto____0;
kira$dashboard$verify_credentials_$_state_machine__26144__auto__.cljs$core$IFn$_invoke$arity$1 = kira$dashboard$verify_credentials_$_state_machine__26144__auto____1;
return kira$dashboard$verify_credentials_$_state_machine__26144__auto__;
})()
})();
var state__26230__auto__ = (function (){var statearr_26597 = f__26229__auto__();
(statearr_26597[(6)] = c__26228__auto__);

return statearr_26597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26230__auto__);
}));

return c__26228__auto__;
}
});
kira.dashboard.event_queue = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26228__auto___26662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26229__auto__ = (function (){var switch__26143__auto__ = (function (state_26626){
var state_val_26627 = (state_26626[(1)]);
if((state_val_26627 === (1))){
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26626__$1,(2),kira.dashboard.event_queue);
} else {
if((state_val_26627 === (2))){
var inst_26606 = (state_26626[(2)]);
var inst_26607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26606,(0),null);
var inst_26608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26606,(1),null);
var inst_26609 = inst_26606;
var state_26626__$1 = (function (){var statearr_26628 = state_26626;
(statearr_26628[(7)] = inst_26607);

(statearr_26628[(8)] = inst_26609);

(statearr_26628[(9)] = inst_26608);

return statearr_26628;
})();
var statearr_26629_26663 = state_26626__$1;
(statearr_26629_26663[(2)] = null);

(statearr_26629_26663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (3))){
var inst_26609 = (state_26626[(8)]);
var inst_26614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26609,(0),null);
var inst_26615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26609,(1),null);
var state_26626__$1 = (function (){var statearr_26630 = state_26626;
(statearr_26630[(10)] = inst_26615);

return statearr_26630;
})();
var G__26631_26664 = inst_26614;
var G__26631_26665__$1 = (((G__26631_26664 instanceof cljs.core.Keyword))?G__26631_26664.fqn:null);
switch (G__26631_26665__$1) {
case "login":
var statearr_26632_26667 = state_26626__$1;
(statearr_26632_26667[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26631_26665__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (4))){
var inst_26624 = (state_26626[(2)]);
var state_26626__$1 = state_26626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26626__$1,inst_26624);
} else {
if((state_val_26627 === (5))){
var inst_26619 = (state_26626[(2)]);
var state_26626__$1 = (function (){var statearr_26633 = state_26626;
(statearr_26633[(11)] = inst_26619);

return statearr_26633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26626__$1,(7),kira.dashboard.event_queue);
} else {
if((state_val_26627 === (6))){
var inst_26615 = (state_26626[(10)]);
var inst_26616 = kira.dashboard.verify_credentials(inst_26615);
var state_26626__$1 = state_26626;
var statearr_26634_26668 = state_26626__$1;
(statearr_26634_26668[(2)] = inst_26616);

(statearr_26634_26668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26627 === (7))){
var inst_26621 = (state_26626[(2)]);
var inst_26609 = inst_26621;
var state_26626__$1 = (function (){var statearr_26635 = state_26626;
(statearr_26635[(8)] = inst_26609);

return statearr_26635;
})();
var statearr_26636_26669 = state_26626__$1;
(statearr_26636_26669[(2)] = null);

(statearr_26636_26669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var kira$dashboard$state_machine__26144__auto__ = null;
var kira$dashboard$state_machine__26144__auto____0 = (function (){
var statearr_26637 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26637[(0)] = kira$dashboard$state_machine__26144__auto__);

(statearr_26637[(1)] = (1));

return statearr_26637;
});
var kira$dashboard$state_machine__26144__auto____1 = (function (state_26626){
while(true){
var ret_value__26145__auto__ = (function (){try{while(true){
var result__26146__auto__ = switch__26143__auto__(state_26626);
if(cljs.core.keyword_identical_QMARK_(result__26146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26146__auto__;
}
break;
}
}catch (e26638){var ex__26147__auto__ = e26638;
var statearr_26639_26670 = state_26626;
(statearr_26639_26670[(2)] = ex__26147__auto__);


if(cljs.core.seq((state_26626[(4)]))){
var statearr_26640_26671 = state_26626;
(statearr_26640_26671[(1)] = cljs.core.first((state_26626[(4)])));

} else {
throw ex__26147__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26672 = state_26626;
state_26626 = G__26672;
continue;
} else {
return ret_value__26145__auto__;
}
break;
}
});
kira$dashboard$state_machine__26144__auto__ = function(state_26626){
switch(arguments.length){
case 0:
return kira$dashboard$state_machine__26144__auto____0.call(this);
case 1:
return kira$dashboard$state_machine__26144__auto____1.call(this,state_26626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kira$dashboard$state_machine__26144__auto__.cljs$core$IFn$_invoke$arity$0 = kira$dashboard$state_machine__26144__auto____0;
kira$dashboard$state_machine__26144__auto__.cljs$core$IFn$_invoke$arity$1 = kira$dashboard$state_machine__26144__auto____1;
return kira$dashboard$state_machine__26144__auto__;
})()
})();
var state__26230__auto__ = (function (){var statearr_26641 = f__26229__auto__();
(statearr_26641[(6)] = c__26228__auto___26662);

return statearr_26641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26230__auto__);
}));

kira.dashboard.input_box = (function kira$dashboard$input_box(type,label,var$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-box","div.input-box",-1300611342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26642_SHARP_){
return cljs.core.reset_BANG_(var$,p1__26642_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),type], null)], null)], null);
});
kira.dashboard.login_form = (function kira$dashboard$login_form(){
var username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dashboard.input_box,"text","Username: ",username], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dashboard.input_box,"password","Password: ",password], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-blue.hover:bg-teal-400","button.btn-blue.hover:bg-teal-400",2058250481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(kira.dashboard.event_queue,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(username),cljs.core.deref(password)], null)], null));
})], null),"Submit"], null)], null);
});
kira.dashboard.welcome = (function kira$dashboard$welcome(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-2xl.font-bold","h1.text-2xl.font-bold",1199387009),"Welcome to Clojure"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dashboard.login_form], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(kira.dashboard.message)], null)], null)], null)], null);
});
kira.dashboard.root = (function kira$dashboard$root(){
var map__26643 = cljs.core.deref(kira.login.app_state);
var map__26643__$1 = cljs.core.__destructure_map(map__26643);
var state = map__26643__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26643__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react$index.Suspense,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading ..."], null))], null),(function (){var G__26644 = page;
var G__26644__$1 = (((G__26644 instanceof cljs.core.Keyword))?G__26644.fqn:null);
switch (G__26644__$1) {
case "secapp":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.dashboard.secapp,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "help":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.dashboard.help,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "welcome":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dashboard.welcome,cljs.core.PersistentArrayMap.EMPTY], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unknown page?"], null)], null);

}
})()], null)], null);
});
kira.dashboard.start = (function kira$dashboard$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dashboard.root], null),kira.dashboard.root_el);
});
kira.dashboard.init = (function kira$dashboard$init(){
return kira.dashboard.start();
});

//# sourceMappingURL=kira.dashboard.js.map
