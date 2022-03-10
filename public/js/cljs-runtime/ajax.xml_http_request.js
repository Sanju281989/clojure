goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__37725 = e.target.readyState;
var fexpr__37724 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__37724.cljs$core$IFn$_invoke$arity$1 ? fexpr__37724.cljs$core$IFn$_invoke$arity$1(G__37725) : fexpr__37724.call(null,G__37725));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37727,handler){
var map__37728 = p__37727;
var map__37728__$1 = cljs.core.__destructure_map(map__37728);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37728__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37728__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37728__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__37726_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__37726_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___37745 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___37745)){
var response_type_37746 = temp__5753__auto___37745;
(this$__$1.responseType = cljs.core.name(response_type_37746));
} else {
}

var seq__37729_37747 = cljs.core.seq(headers);
var chunk__37730_37748 = null;
var count__37731_37749 = (0);
var i__37732_37750 = (0);
while(true){
if((i__37732_37750 < count__37731_37749)){
var vec__37739_37751 = chunk__37730_37748.cljs$core$IIndexed$_nth$arity$2(null,i__37732_37750);
var k_37752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37739_37751,(0),null);
var v_37753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37739_37751,(1),null);
this$__$1.setRequestHeader(k_37752,v_37753);


var G__37754 = seq__37729_37747;
var G__37755 = chunk__37730_37748;
var G__37756 = count__37731_37749;
var G__37757 = (i__37732_37750 + (1));
seq__37729_37747 = G__37754;
chunk__37730_37748 = G__37755;
count__37731_37749 = G__37756;
i__37732_37750 = G__37757;
continue;
} else {
var temp__5753__auto___37758 = cljs.core.seq(seq__37729_37747);
if(temp__5753__auto___37758){
var seq__37729_37759__$1 = temp__5753__auto___37758;
if(cljs.core.chunked_seq_QMARK_(seq__37729_37759__$1)){
var c__4679__auto___37760 = cljs.core.chunk_first(seq__37729_37759__$1);
var G__37761 = cljs.core.chunk_rest(seq__37729_37759__$1);
var G__37762 = c__4679__auto___37760;
var G__37763 = cljs.core.count(c__4679__auto___37760);
var G__37764 = (0);
seq__37729_37747 = G__37761;
chunk__37730_37748 = G__37762;
count__37731_37749 = G__37763;
i__37732_37750 = G__37764;
continue;
} else {
var vec__37742_37765 = cljs.core.first(seq__37729_37759__$1);
var k_37766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742_37765,(0),null);
var v_37767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742_37765,(1),null);
this$__$1.setRequestHeader(k_37766,v_37767);


var G__37768 = cljs.core.next(seq__37729_37759__$1);
var G__37769 = null;
var G__37770 = (0);
var G__37771 = (0);
seq__37729_37747 = G__37768;
chunk__37730_37748 = G__37769;
count__37731_37749 = G__37770;
i__37732_37750 = G__37771;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4253__auto__ = body;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
