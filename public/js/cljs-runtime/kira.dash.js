goog.provide('kira.dash');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
kira.dash.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
kira.dash.message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
kira.dash.welcome_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
kira.dash.file_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
kira.dash.error_message = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
if((typeof kira !== 'undefined') && (typeof kira.dash !== 'undefined') && (typeof kira.dash.root_el !== 'undefined')){
} else {
kira.dash.root_el = document.getElementById("root");
}
kira.dash.secapp = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["secapp"], null),(function (){
return kira.secapp.root;
}))));
kira.dash.help = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["help"], null),(function (){
return kira.help.root;
}))));
if((typeof kira !== 'undefined') && (typeof kira.dash !== 'undefined') && (typeof kira.dash.timer !== 'undefined')){
} else {
kira.dash.timer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((new Date()));
}
if((typeof kira !== 'undefined') && (typeof kira.dash !== 'undefined') && (typeof kira.dash.time_updater !== 'undefined')){
} else {
kira.dash.time_updater = setInterval((function (){
return cljs.core.reset_BANG_(kira.dash.timer,(new Date()));
}),(1000));
}
kira.dash.clock = (function kira$dash$clock(){
var time_str = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(kira.dash.timer).toTimeString()," "));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#fff"], null)], null),time_str], null);
});
kira.dash.error_handler = (function kira$dash$error_handler(p__26563){
var map__26564 = p__26563;
var map__26564__$1 = cljs.core.__destructure_map(map__26564);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26564__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26564__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
kira.dash.handle_data = (function kira$dash$handle_data(response){
return cljs.core.reset_BANG_(kira.dash.file_data,response);
});
kira.dash.get_files = (function kira$dash$get_files(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://127.0.0.1:3000/get-all-file-details",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),kira.dash.handle_data,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),kira.dash.error_handler], null)], 0));
});
kira.dash.handler = (function kira$dash$handler(response){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"secapp","secapp",1059158248));

return kira.dash.get_files();
});
kira.dash.verify_credentials = (function kira$dash$verify_credentials(payload){
var vec__26565 = payload;
var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26565,(0),null);
var password = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26565,(1),null);
if((((username === "")) || ((password === "")))){
return cljs.core.reset_BANG_(kira.dash.message,"Please provide the User-Id and Password.");
} else {
cljs.core.reset_BANG_(kira.dash.message,"Authenticating...");

cljs.core.reset_BANG_(kira.dash.welcome_message,username);

var c__26234__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26235__auto__ = (function (){var switch__26149__auto__ = (function (state_26592){
var state_val_26593 = (state_26592[(1)]);
if((state_val_26593 === (1))){
var inst_26568 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_26569 = [new cljs.core.Keyword(null,"user_id","user_id",993497112),new cljs.core.Keyword(null,"user_pass","user_pass",517039555)];
var inst_26570 = [username,password];
var inst_26571 = cljs.core.PersistentHashMap.fromArrays(inst_26569,inst_26570);
var inst_26572 = [inst_26571];
var inst_26573 = cljs.core.PersistentHashMap.fromArrays(inst_26568,inst_26572);
var inst_26574 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("http://127.0.0.1:3000/authenticate-user",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26573], 0));
var state_26592__$1 = state_26592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26592__$1,(2),inst_26574);
} else {
if((state_val_26593 === (2))){
var inst_26576 = (state_26592[(2)]);
var inst_26577 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_26576);
var inst_26578 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26577], 0));
var inst_26579 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26576);
var inst_26580 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_26579], 0));
var inst_26581 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_26576);
var inst_26582 = kira.dash.x = inst_26581;
var inst_26583 = cljs.core.reset_BANG_(kira.dash.message,"");
var inst_26584 = (kira.dash.x === (1));
var state_26592__$1 = (function (){var statearr_26594 = state_26592;
(statearr_26594[(7)] = inst_26580);

(statearr_26594[(8)] = inst_26583);

(statearr_26594[(9)] = inst_26578);

(statearr_26594[(10)] = inst_26582);

return statearr_26594;
})();
if(cljs.core.truth_(inst_26584)){
var statearr_26595_26663 = state_26592__$1;
(statearr_26595_26663[(1)] = (3));

} else {
var statearr_26596_26664 = state_26592__$1;
(statearr_26596_26664[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (3))){
var inst_26586 = kira.dash.handler(kira.dash.x);
var state_26592__$1 = state_26592;
var statearr_26597_26665 = state_26592__$1;
(statearr_26597_26665[(2)] = inst_26586);

(statearr_26597_26665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (4))){
var inst_26588 = cljs.core.reset_BANG_(kira.dash.message,"Incorrect credentials");
var state_26592__$1 = state_26592;
var statearr_26598_26666 = state_26592__$1;
(statearr_26598_26666[(2)] = inst_26588);

(statearr_26598_26666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26593 === (5))){
var inst_26590 = (state_26592[(2)]);
var state_26592__$1 = state_26592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26592__$1,inst_26590);
} else {
return null;
}
}
}
}
}
});
return (function() {
var kira$dash$verify_credentials_$_state_machine__26150__auto__ = null;
var kira$dash$verify_credentials_$_state_machine__26150__auto____0 = (function (){
var statearr_26599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26599[(0)] = kira$dash$verify_credentials_$_state_machine__26150__auto__);

(statearr_26599[(1)] = (1));

return statearr_26599;
});
var kira$dash$verify_credentials_$_state_machine__26150__auto____1 = (function (state_26592){
while(true){
var ret_value__26151__auto__ = (function (){try{while(true){
var result__26152__auto__ = switch__26149__auto__(state_26592);
if(cljs.core.keyword_identical_QMARK_(result__26152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26152__auto__;
}
break;
}
}catch (e26600){var ex__26153__auto__ = e26600;
var statearr_26601_26667 = state_26592;
(statearr_26601_26667[(2)] = ex__26153__auto__);


if(cljs.core.seq((state_26592[(4)]))){
var statearr_26602_26668 = state_26592;
(statearr_26602_26668[(1)] = cljs.core.first((state_26592[(4)])));

} else {
throw ex__26153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26669 = state_26592;
state_26592 = G__26669;
continue;
} else {
return ret_value__26151__auto__;
}
break;
}
});
kira$dash$verify_credentials_$_state_machine__26150__auto__ = function(state_26592){
switch(arguments.length){
case 0:
return kira$dash$verify_credentials_$_state_machine__26150__auto____0.call(this);
case 1:
return kira$dash$verify_credentials_$_state_machine__26150__auto____1.call(this,state_26592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kira$dash$verify_credentials_$_state_machine__26150__auto__.cljs$core$IFn$_invoke$arity$0 = kira$dash$verify_credentials_$_state_machine__26150__auto____0;
kira$dash$verify_credentials_$_state_machine__26150__auto__.cljs$core$IFn$_invoke$arity$1 = kira$dash$verify_credentials_$_state_machine__26150__auto____1;
return kira$dash$verify_credentials_$_state_machine__26150__auto__;
})()
})();
var state__26236__auto__ = (function (){var statearr_26603 = f__26235__auto__();
(statearr_26603[(6)] = c__26234__auto__);

return statearr_26603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26236__auto__);
}));

return c__26234__auto__;
}
});
kira.dash.event_queue = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26234__auto___26670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26235__auto__ = (function (){var switch__26149__auto__ = (function (state_26638){
var state_val_26639 = (state_26638[(1)]);
if((state_val_26639 === (7))){
var inst_26624 = (kira.dash.edit_text.cljs$core$IFn$_invoke$arity$0 ? kira.dash.edit_text.cljs$core$IFn$_invoke$arity$0() : kira.dash.edit_text.call(null));
var state_26638__$1 = state_26638;
var statearr_26640_26671 = state_26638__$1;
(statearr_26640_26671[(2)] = inst_26624);

(statearr_26640_26671[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (1))){
var state_26638__$1 = state_26638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26638__$1,(2),kira.dash.event_queue);
} else {
if((state_val_26639 === (4))){
var inst_26636 = (state_26638[(2)]);
var state_26638__$1 = state_26638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26638__$1,inst_26636);
} else {
if((state_val_26639 === (6))){
var inst_26621 = (state_26638[(7)]);
var inst_26622 = kira.dash.verify_credentials(inst_26621);
var state_26638__$1 = state_26638;
var statearr_26641_26672 = state_26638__$1;
(statearr_26641_26672[(2)] = inst_26622);

(statearr_26641_26672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (3))){
var inst_26615 = (state_26638[(8)]);
var inst_26620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26615,(0),null);
var inst_26621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26615,(1),null);
var state_26638__$1 = (function (){var statearr_26642 = state_26638;
(statearr_26642[(7)] = inst_26621);

return statearr_26642;
})();
var G__26643_26673 = inst_26620;
var G__26643_26674__$1 = (((G__26643_26673 instanceof cljs.core.Keyword))?G__26643_26673.fqn:null);
switch (G__26643_26674__$1) {
case "login":
var statearr_26644_26676 = state_26638__$1;
(statearr_26644_26676[(1)] = (6));


break;
case "edit-text":
var statearr_26645_26677 = state_26638__$1;
(statearr_26645_26677[(1)] = (7));


break;
case "sanupdate":
var statearr_26646_26678 = state_26638__$1;
(statearr_26646_26678[(1)] = (8));


break;
case "sanrefresh":
var statearr_26647_26679 = state_26638__$1;
(statearr_26647_26679[(1)] = (9));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26643_26674__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (2))){
var inst_26612 = (state_26638[(2)]);
var inst_26613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26612,(0),null);
var inst_26614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26612,(1),null);
var inst_26615 = inst_26612;
var state_26638__$1 = (function (){var statearr_26648 = state_26638;
(statearr_26648[(9)] = inst_26614);

(statearr_26648[(10)] = inst_26613);

(statearr_26648[(8)] = inst_26615);

return statearr_26648;
})();
var statearr_26649_26680 = state_26638__$1;
(statearr_26649_26680[(2)] = null);

(statearr_26649_26680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (9))){
var inst_26628 = (kira.dash.san_refreshdata.cljs$core$IFn$_invoke$arity$0 ? kira.dash.san_refreshdata.cljs$core$IFn$_invoke$arity$0() : kira.dash.san_refreshdata.call(null));
var state_26638__$1 = state_26638;
var statearr_26650_26681 = state_26638__$1;
(statearr_26650_26681[(2)] = inst_26628);

(statearr_26650_26681[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (5))){
var inst_26631 = (state_26638[(2)]);
var state_26638__$1 = (function (){var statearr_26651 = state_26638;
(statearr_26651[(11)] = inst_26631);

return statearr_26651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26638__$1,(10),kira.dash.event_queue);
} else {
if((state_val_26639 === (10))){
var inst_26633 = (state_26638[(2)]);
var inst_26615 = inst_26633;
var state_26638__$1 = (function (){var statearr_26652 = state_26638;
(statearr_26652[(8)] = inst_26615);

return statearr_26652;
})();
var statearr_26653_26682 = state_26638__$1;
(statearr_26653_26682[(2)] = null);

(statearr_26653_26682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (8))){
var inst_26626 = (kira.dash.san_update.cljs$core$IFn$_invoke$arity$0 ? kira.dash.san_update.cljs$core$IFn$_invoke$arity$0() : kira.dash.san_update.call(null));
var state_26638__$1 = state_26638;
var statearr_26654_26684 = state_26638__$1;
(statearr_26654_26684[(2)] = inst_26626);

(statearr_26654_26684[(1)] = (5));


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
}
}
}
});
return (function() {
var kira$dash$state_machine__26150__auto__ = null;
var kira$dash$state_machine__26150__auto____0 = (function (){
var statearr_26655 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26655[(0)] = kira$dash$state_machine__26150__auto__);

(statearr_26655[(1)] = (1));

return statearr_26655;
});
var kira$dash$state_machine__26150__auto____1 = (function (state_26638){
while(true){
var ret_value__26151__auto__ = (function (){try{while(true){
var result__26152__auto__ = switch__26149__auto__(state_26638);
if(cljs.core.keyword_identical_QMARK_(result__26152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26152__auto__;
}
break;
}
}catch (e26656){var ex__26153__auto__ = e26656;
var statearr_26657_26688 = state_26638;
(statearr_26657_26688[(2)] = ex__26153__auto__);


if(cljs.core.seq((state_26638[(4)]))){
var statearr_26658_26689 = state_26638;
(statearr_26658_26689[(1)] = cljs.core.first((state_26638[(4)])));

} else {
throw ex__26153__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26690 = state_26638;
state_26638 = G__26690;
continue;
} else {
return ret_value__26151__auto__;
}
break;
}
});
kira$dash$state_machine__26150__auto__ = function(state_26638){
switch(arguments.length){
case 0:
return kira$dash$state_machine__26150__auto____0.call(this);
case 1:
return kira$dash$state_machine__26150__auto____1.call(this,state_26638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kira$dash$state_machine__26150__auto__.cljs$core$IFn$_invoke$arity$0 = kira$dash$state_machine__26150__auto____0;
kira$dash$state_machine__26150__auto__.cljs$core$IFn$_invoke$arity$1 = kira$dash$state_machine__26150__auto____1;
return kira$dash$state_machine__26150__auto__;
})()
})();
var state__26236__auto__ = (function (){var statearr_26659 = f__26235__auto__();
(statearr_26659[(6)] = c__26234__auto___26670);

return statearr_26659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26236__auto__);
}));

kira.dash.input_box = (function kira$dash$input_box(type,label,var$){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-box","div.input-box",-1300611342),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26660_SHARP_){
return cljs.core.reset_BANG_(var$,p1__26660_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),type], null)], null)], null);
});
kira.dash.login_box = (function kira$dash$login_box(){
var username = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dash.input_box,"text","Username: ",username], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dash.input_box,"password","Password: ",password], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-blue.hover:bg-teal-400","button.btn-blue.hover:bg-teal-400",2058250481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(kira.dash.event_queue,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(username),cljs.core.deref(password)], null)], null));
})], null),"Submit"], null)], null);
});
kira.dash.welcome = (function kira$dash$welcome(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-2xl.font-bold","h1.text-2xl.font-bold",1199387009),"Welcome to Clojure"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dash.login_box], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(kira.dash.message)], null)], null)], null)], null);
});
kira.dash.root = (function kira$dash$root(){
var map__26661 = cljs.core.deref(kira.env.app_state);
var map__26661__$1 = cljs.core.__destructure_map(map__26661);
var state = map__26661__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26661__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react$index.Suspense,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading ..."], null))], null),(function (){var G__26662 = page;
var G__26662__$1 = (((G__26662 instanceof cljs.core.Keyword))?G__26662.fqn:null);
switch (G__26662__$1) {
case "secapp":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.dash.secapp,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "help":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.dash.help,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "welcome":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dash.welcome,cljs.core.PersistentArrayMap.EMPTY], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dash.welcome,cljs.core.PersistentArrayMap.EMPTY], null)], null);

}
})()], null)], null);
});
kira.dash.start = (function kira$dash$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dash.root], null),kira.dash.root_el);
});
kira.dash.init = (function kira$dash$init(){
return kira.dash.start();
});

//# sourceMappingURL=kira.dash.js.map
