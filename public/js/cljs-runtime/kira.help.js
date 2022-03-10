goog.provide('kira.help');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$crypto_js$index=shadow.js.require("module$node_modules$crypto_js$index", {});
kira.help.show_edit_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("false");
kira.help.file_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
kira.help.edit_content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
kira.help.update_content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
kira.help.handleGetData = (function kira$help$handleGetData(response){
var map__26673 = response;
var map__26673__$1 = cljs.core.__destructure_map(map__26673);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26673__$1,new cljs.core.Keyword(null,"file_name","file_name",2030201601));
var contentts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26673__$1,new cljs.core.Keyword(null,"file_content","file_content",869441289));
kira.help.name_fvals = module$node_modules$crypto_js$index.enc.Base64.parse(name);

kira.help.name_fval_finals = module$node_modules$crypto_js$index.enc.Utf8.stringify(kira.help.name_fvals);

kira.help.content_fvals = module$node_modules$crypto_js$index.enc.Base64.parse(contentts);

kira.help.content_fval_finals = module$node_modules$crypto_js$index.enc.Utf8.stringify(kira.help.content_fvals);

cljs.core.reset_BANG_(kira.help.file_name,kira.help.name_fval_finals);

cljs.core.reset_BANG_(kira.help.edit_content,kira.help.content_fval_finals);

return cljs.core.reset_BANG_(kira.help.update_content,kira.help.content_fval_finals);
});
kira.help.GetAPIData = (function kira$help$GetAPIData(){
kira.help.postid = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, ["file_id",cljs.core.deref(kira.secapp.editid_content)], null)], null);

return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://127.0.0.1:3000/get-file-content",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"body","body",-2049205669),kira.help.postid,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),kira.help.handleGetData,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),kira.dashboard.error_handler], null)], 0));
});
kira.help.handler2 = (function kira$help$handler2(response){
return cljs.core.reset_BANG_(kira.help.message,cljs.core.str.cljs$core$IFn$_invoke$arity$1(response.msg));
});
kira.help.updateData = (function kira$help$updateData(payload){
cljs.core.reset_BANG_(kira.help.edit_content,cljs.core.deref(kira.help.update_content));

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(kira.secapp.editid_content),cljs.core.deref(kira.help.file_name),cljs.core.deref(kira.help.update_content)], null),payload], null);

kira.help.name_content_fval = module$node_modules$crypto_js$index.enc.Utf8.parse(cljs.core.deref(kira.help.file_name));

kira.help.name_content_fval_final = module$node_modules$crypto_js$index.enc.Base64.stringify(kira.help.name_content_fval);

kira.help.content_to_edit_fval = module$node_modules$crypto_js$index.enc.Utf8.parse(cljs.core.deref(kira.help.update_content));

kira.help.content_to_edit_fval_final = module$node_modules$crypto_js$index.enc.Base64.stringify(kira.help.content_to_edit_fval);

kira.help.requestPostData = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, ["file_id",cljs.core.deref(kira.secapp.editid_content),"file_name",kira.help.name_content_fval_final,"file_content",kira.help.content_to_edit_fval_final], null)], null);

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://127.0.0.1:3000/update-file",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"body","body",-2049205669),kira.help.requestPostData,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler2","handler2",-206148248),kira.help.handler2,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),kira.dashboard.error_handler], null)], 0));

return cljs.core.reset_BANG_(kira.help.show_edit_text,"false");
});
kira.help.cancelUpdate = (function kira$help$cancelUpdate(){
cljs.core.reset_BANG_(kira.help.show_edit_text,"false");

return cljs.core.reset_BANG_(kira.help.update_content,cljs.core.deref(kira.help.edit_content));
});
kira.help.event_queue = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__26228__auto___26725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26229__auto__ = (function (){var switch__26143__auto__ = (function (state_26706){
var state_val_26707 = (state_26706[(1)]);
if((state_val_26707 === (1))){
var state_26706__$1 = state_26706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26706__$1,(2),kira.help.event_queue);
} else {
if((state_val_26707 === (2))){
var inst_26684 = (state_26706[(2)]);
var inst_26685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26684,(0),null);
var inst_26686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26684,(1),null);
var inst_26687 = inst_26684;
var state_26706__$1 = (function (){var statearr_26708 = state_26706;
(statearr_26708[(7)] = inst_26686);

(statearr_26708[(8)] = inst_26685);

(statearr_26708[(9)] = inst_26687);

return statearr_26708;
})();
var statearr_26709_26726 = state_26706__$1;
(statearr_26709_26726[(2)] = null);

(statearr_26709_26726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (3))){
var inst_26687 = (state_26706[(9)]);
var inst_26692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26687,(0),null);
var inst_26693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26687,(1),null);
var state_26706__$1 = (function (){var statearr_26710 = state_26706;
(statearr_26710[(10)] = inst_26693);

return statearr_26710;
})();
var G__26711_26727 = inst_26692;
var G__26711_26728__$1 = (((G__26711_26727 instanceof cljs.core.Keyword))?G__26711_26727.fqn:null);
switch (G__26711_26728__$1) {
case "updateData":
var statearr_26712_26730 = state_26706__$1;
(statearr_26712_26730[(1)] = (6));


break;
case "cancelUpdate":
var statearr_26713_26731 = state_26706__$1;
(statearr_26713_26731[(1)] = (7));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26711_26728__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (4))){
var inst_26704 = (state_26706[(2)]);
var state_26706__$1 = state_26706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26706__$1,inst_26704);
} else {
if((state_val_26707 === (5))){
var inst_26699 = (state_26706[(2)]);
var state_26706__$1 = (function (){var statearr_26714 = state_26706;
(statearr_26714[(11)] = inst_26699);

return statearr_26714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26706__$1,(8),kira.help.event_queue);
} else {
if((state_val_26707 === (6))){
var inst_26694 = kira.help.updateData();
var state_26706__$1 = state_26706;
var statearr_26715_26732 = state_26706__$1;
(statearr_26715_26732[(2)] = inst_26694);

(statearr_26715_26732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (7))){
var inst_26696 = kira.help.cancelUpdate();
var state_26706__$1 = state_26706;
var statearr_26716_26733 = state_26706__$1;
(statearr_26716_26733[(2)] = inst_26696);

(statearr_26716_26733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26707 === (8))){
var inst_26701 = (state_26706[(2)]);
var inst_26687 = inst_26701;
var state_26706__$1 = (function (){var statearr_26717 = state_26706;
(statearr_26717[(9)] = inst_26687);

return statearr_26717;
})();
var statearr_26718_26734 = state_26706__$1;
(statearr_26718_26734[(2)] = null);

(statearr_26718_26734[(1)] = (3));


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
});
return (function() {
var kira$help$state_machine__26144__auto__ = null;
var kira$help$state_machine__26144__auto____0 = (function (){
var statearr_26719 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26719[(0)] = kira$help$state_machine__26144__auto__);

(statearr_26719[(1)] = (1));

return statearr_26719;
});
var kira$help$state_machine__26144__auto____1 = (function (state_26706){
while(true){
var ret_value__26145__auto__ = (function (){try{while(true){
var result__26146__auto__ = switch__26143__auto__(state_26706);
if(cljs.core.keyword_identical_QMARK_(result__26146__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26146__auto__;
}
break;
}
}catch (e26720){var ex__26147__auto__ = e26720;
var statearr_26721_26735 = state_26706;
(statearr_26721_26735[(2)] = ex__26147__auto__);


if(cljs.core.seq((state_26706[(4)]))){
var statearr_26722_26736 = state_26706;
(statearr_26722_26736[(1)] = cljs.core.first((state_26706[(4)])));

} else {
throw ex__26147__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26145__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26737 = state_26706;
state_26706 = G__26737;
continue;
} else {
return ret_value__26145__auto__;
}
break;
}
});
kira$help$state_machine__26144__auto__ = function(state_26706){
switch(arguments.length){
case 0:
return kira$help$state_machine__26144__auto____0.call(this);
case 1:
return kira$help$state_machine__26144__auto____1.call(this,state_26706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kira$help$state_machine__26144__auto__.cljs$core$IFn$_invoke$arity$0 = kira$help$state_machine__26144__auto____0;
kira$help$state_machine__26144__auto__.cljs$core$IFn$_invoke$arity$1 = kira$help$state_machine__26144__auto____1;
return kira$help$state_machine__26144__auto__;
})()
})();
var state__26230__auto__ = (function (){var statearr_26723 = f__26229__auto__();
(statearr_26723[(6)] = c__26228__auto___26725);

return statearr_26723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26230__auto__);
}));

kira.help.pageRefreshData = (function kira$help$pageRefreshData(){
cljs.core.reset_BANG_(kira.help.show_edit_text,"false");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.login.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"secapp","secapp",1059158248));
});
kira.help.navbar = (function kira$help$navbar(){
kira.help.GetAPIData();

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.bg-black.w-full.text-white.p-2.mb-2","div.flex.bg-black.w-full.text-white.p-2.mb-2",55680580),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2 mt-4 mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.m-2.px-3.py-2.border-2","a.m-2.px-3.py-2.border-2",1293984708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#home",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return kira.help.pageRefreshData();
})], null),"HOME"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/2"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3/5 mt-4 float-left"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dashboard.welcome_dsd], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/5 mt-4 float-left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-lg.font-bold.text-center","h1.text-lg.font-bold.text-center",-1500300809),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.dashboard.clock], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/5 mt-4 float-left"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.m-2.px-3.py-2.border-2","a.m-2.px-3.py-2.border-2",1293984708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.login.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"welcome","welcome",-578152123));
})], null),"LOGOUT"], null)], null)], null)], null)], null);
});
kira.help.buttonComponent = (function kira$help$buttonComponent(){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.deref(kira.help.show_edit_text))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-blue.hover:bg-teal-400","button.btn-blue.hover:bg-teal-400",2058250481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(kira.help.show_edit_text,"true");
})], null),"Edit Text"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-blue.hover:bg-teal-400","button.btn-blue.hover:bg-teal-400",2058250481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return kira.help.updateData();
})], null),"Update"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn-blue.hover:bg-teal-400","button.btn-blue.hover:bg-teal-400",2058250481),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return kira.help.cancelUpdate();
})], null),"Cancel"], null)], null);
}
});
});
kira.help.rootdd = (function kira$help$rootdd(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.help.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",cljs.core.deref(kira.help.show_edit_text)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.font-bold.text-left.cust-heading","h5.font-bold.text-left.cust-heading",649550114),"File Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.text-left.cust-heading","h5.text-left.cust-heading",-570418547),cljs.core.deref(kira.help.file_name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.font-bold.text-left.cust-heading","h5.font-bold.text-left.cust-heading",649550114),"Edit Content:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.border-2.san-textareass","div.border-2.san-textareass",1054898160),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),"readOnly"], null),cljs.core.deref(kira.help.edit_content)], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",cljs.core.deref(kira.help.show_edit_text)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.font-bold.text-left.cust-heading","h5.font-bold.text-left.cust-heading",649550114),"Update Content:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.border-2.san-textarea","textarea.border-2.san-textarea",-1123086315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__26724_SHARP_){
return cljs.core.reset_BANG_(kira.help.update_content,p1__26724_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(kira.help.update_content)], null)], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.help.buttonComponent], null)], null)], null);
});

//# sourceMappingURL=kira.help.js.map
