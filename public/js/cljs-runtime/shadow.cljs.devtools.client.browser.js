goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36179 = arguments.length;
var i__4865__auto___36180 = (0);
while(true){
if((i__4865__auto___36180 < len__4864__auto___36179)){
args__4870__auto__.push((arguments[i__4865__auto___36180]));

var G__36181 = (i__4865__auto___36180 + (1));
i__4865__auto___36180 = G__36181;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35774){
var G__35775 = cljs.core.first(seq35774);
var seq35774__$1 = cljs.core.next(seq35774);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35775,seq35774__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35776 = cljs.core.seq(sources);
var chunk__35777 = null;
var count__35778 = (0);
var i__35779 = (0);
while(true){
if((i__35779 < count__35778)){
var map__35784 = chunk__35777.cljs$core$IIndexed$_nth$arity$2(null,i__35779);
var map__35784__$1 = cljs.core.__destructure_map(map__35784);
var src = map__35784__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35784__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35785){var e_36182 = e35785;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36182);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36182.message)].join('')));
}

var G__36183 = seq__35776;
var G__36184 = chunk__35777;
var G__36185 = count__35778;
var G__36186 = (i__35779 + (1));
seq__35776 = G__36183;
chunk__35777 = G__36184;
count__35778 = G__36185;
i__35779 = G__36186;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35776);
if(temp__5753__auto__){
var seq__35776__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35776__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35776__$1);
var G__36187 = cljs.core.chunk_rest(seq__35776__$1);
var G__36188 = c__4679__auto__;
var G__36189 = cljs.core.count(c__4679__auto__);
var G__36190 = (0);
seq__35776 = G__36187;
chunk__35777 = G__36188;
count__35778 = G__36189;
i__35779 = G__36190;
continue;
} else {
var map__35786 = cljs.core.first(seq__35776__$1);
var map__35786__$1 = cljs.core.__destructure_map(map__35786);
var src = map__35786__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35786__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35787){var e_36191 = e35787;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36191);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36191.message)].join('')));
}

var G__36192 = cljs.core.next(seq__35776__$1);
var G__36193 = null;
var G__36194 = (0);
var G__36195 = (0);
seq__35776 = G__36192;
chunk__35777 = G__36193;
count__35778 = G__36194;
i__35779 = G__36195;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35788 = cljs.core.seq(js_requires);
var chunk__35789 = null;
var count__35790 = (0);
var i__35791 = (0);
while(true){
if((i__35791 < count__35790)){
var js_ns = chunk__35789.cljs$core$IIndexed$_nth$arity$2(null,i__35791);
var require_str_36196 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36196);


var G__36197 = seq__35788;
var G__36198 = chunk__35789;
var G__36199 = count__35790;
var G__36200 = (i__35791 + (1));
seq__35788 = G__36197;
chunk__35789 = G__36198;
count__35790 = G__36199;
i__35791 = G__36200;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35788);
if(temp__5753__auto__){
var seq__35788__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35788__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35788__$1);
var G__36201 = cljs.core.chunk_rest(seq__35788__$1);
var G__36202 = c__4679__auto__;
var G__36203 = cljs.core.count(c__4679__auto__);
var G__36204 = (0);
seq__35788 = G__36201;
chunk__35789 = G__36202;
count__35790 = G__36203;
i__35791 = G__36204;
continue;
} else {
var js_ns = cljs.core.first(seq__35788__$1);
var require_str_36205 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36205);


var G__36206 = cljs.core.next(seq__35788__$1);
var G__36207 = null;
var G__36208 = (0);
var G__36209 = (0);
seq__35788 = G__36206;
chunk__35789 = G__36207;
count__35790 = G__36208;
i__35791 = G__36209;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35793){
var map__35794 = p__35793;
var map__35794__$1 = cljs.core.__destructure_map(map__35794);
var msg = map__35794__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35794__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35795(s__35796){
return (new cljs.core.LazySeq(null,(function (){
var s__35796__$1 = s__35796;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35796__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35801 = cljs.core.first(xs__6308__auto__);
var map__35801__$1 = cljs.core.__destructure_map(map__35801);
var src = map__35801__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__35796__$1,map__35801,map__35801__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35794,map__35794__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35795_$_iter__35797(s__35798){
return (new cljs.core.LazySeq(null,((function (s__35796__$1,map__35801,map__35801__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35794,map__35794__$1,msg,info,reload_info){
return (function (){
var s__35798__$1 = s__35798;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35798__$1);
if(temp__5753__auto____$1){
var s__35798__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35798__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__35798__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__35800 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__35799 = (0);
while(true){
if((i__35799 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__35799);
cljs.core.chunk_append(b__35800,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36210 = (i__35799 + (1));
i__35799 = G__36210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35800),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35795_$_iter__35797(cljs.core.chunk_rest(s__35798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35800),null);
}
} else {
var warning = cljs.core.first(s__35798__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35795_$_iter__35797(cljs.core.rest(s__35798__$2)));
}
} else {
return null;
}
break;
}
});})(s__35796__$1,map__35801,map__35801__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35794,map__35794__$1,msg,info,reload_info))
,null,null));
});})(s__35796__$1,map__35801,map__35801__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35794,map__35794__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35795(cljs.core.rest(s__35796__$1)));
} else {
var G__36211 = cljs.core.rest(s__35796__$1);
s__35796__$1 = G__36211;
continue;
}
} else {
var G__36212 = cljs.core.rest(s__35796__$1);
s__35796__$1 = G__36212;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35802_36213 = cljs.core.seq(warnings);
var chunk__35803_36214 = null;
var count__35804_36215 = (0);
var i__35805_36216 = (0);
while(true){
if((i__35805_36216 < count__35804_36215)){
var map__35808_36217 = chunk__35803_36214.cljs$core$IIndexed$_nth$arity$2(null,i__35805_36216);
var map__35808_36218__$1 = cljs.core.__destructure_map(map__35808_36217);
var w_36219 = map__35808_36218__$1;
var msg_36220__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35808_36218__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35808_36218__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35808_36218__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35808_36218__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36223)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36221),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36222),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36220__$1)].join(''));


var G__36224 = seq__35802_36213;
var G__36225 = chunk__35803_36214;
var G__36226 = count__35804_36215;
var G__36227 = (i__35805_36216 + (1));
seq__35802_36213 = G__36224;
chunk__35803_36214 = G__36225;
count__35804_36215 = G__36226;
i__35805_36216 = G__36227;
continue;
} else {
var temp__5753__auto___36228 = cljs.core.seq(seq__35802_36213);
if(temp__5753__auto___36228){
var seq__35802_36229__$1 = temp__5753__auto___36228;
if(cljs.core.chunked_seq_QMARK_(seq__35802_36229__$1)){
var c__4679__auto___36230 = cljs.core.chunk_first(seq__35802_36229__$1);
var G__36231 = cljs.core.chunk_rest(seq__35802_36229__$1);
var G__36232 = c__4679__auto___36230;
var G__36233 = cljs.core.count(c__4679__auto___36230);
var G__36234 = (0);
seq__35802_36213 = G__36231;
chunk__35803_36214 = G__36232;
count__35804_36215 = G__36233;
i__35805_36216 = G__36234;
continue;
} else {
var map__35809_36235 = cljs.core.first(seq__35802_36229__$1);
var map__35809_36236__$1 = cljs.core.__destructure_map(map__35809_36235);
var w_36237 = map__35809_36236__$1;
var msg_36238__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809_36236__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809_36236__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809_36236__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35809_36236__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36241)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36239),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36240),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36238__$1)].join(''));


var G__36242 = cljs.core.next(seq__35802_36229__$1);
var G__36243 = null;
var G__36244 = (0);
var G__36245 = (0);
seq__35802_36213 = G__36242;
chunk__35803_36214 = G__36243;
count__35804_36215 = G__36244;
i__35805_36216 = G__36245;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35792_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35792_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35810){
var map__35811 = p__35810;
var map__35811__$1 = cljs.core.__destructure_map(map__35811);
var msg = map__35811__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35811__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35811__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__35812 = cljs.core.seq(updates);
var chunk__35814 = null;
var count__35815 = (0);
var i__35816 = (0);
while(true){
if((i__35816 < count__35815)){
var path = chunk__35814.cljs$core$IIndexed$_nth$arity$2(null,i__35816);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36009_36246 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36013_36247 = null;
var count__36014_36248 = (0);
var i__36015_36249 = (0);
while(true){
if((i__36015_36249 < count__36014_36248)){
var node_36250 = chunk__36013_36247.cljs$core$IIndexed$_nth$arity$2(null,i__36015_36249);
if(cljs.core.not(node_36250.shadow$old)){
var path_match_36251 = shadow.cljs.devtools.client.browser.match_paths(node_36250.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36251)){
var new_link_36252 = (function (){var G__36047 = node_36250.cloneNode(true);
G__36047.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36251),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36047;
})();
(node_36250.shadow$old = true);

(new_link_36252.onload = ((function (seq__36009_36246,chunk__36013_36247,count__36014_36248,i__36015_36249,seq__35812,chunk__35814,count__35815,i__35816,new_link_36252,path_match_36251,node_36250,path,map__35811,map__35811__$1,msg,updates,reload_info){
return (function (e){
var seq__36048_36253 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36050_36254 = null;
var count__36051_36255 = (0);
var i__36052_36256 = (0);
while(true){
if((i__36052_36256 < count__36051_36255)){
var map__36056_36257 = chunk__36050_36254.cljs$core$IIndexed$_nth$arity$2(null,i__36052_36256);
var map__36056_36258__$1 = cljs.core.__destructure_map(map__36056_36257);
var task_36259 = map__36056_36258__$1;
var fn_str_36260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36056_36258__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36056_36258__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36262 = goog.getObjectByName(fn_str_36260,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36261)].join(''));

(fn_obj_36262.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36262.cljs$core$IFn$_invoke$arity$2(path,new_link_36252) : fn_obj_36262.call(null,path,new_link_36252));


var G__36263 = seq__36048_36253;
var G__36264 = chunk__36050_36254;
var G__36265 = count__36051_36255;
var G__36266 = (i__36052_36256 + (1));
seq__36048_36253 = G__36263;
chunk__36050_36254 = G__36264;
count__36051_36255 = G__36265;
i__36052_36256 = G__36266;
continue;
} else {
var temp__5753__auto___36267 = cljs.core.seq(seq__36048_36253);
if(temp__5753__auto___36267){
var seq__36048_36268__$1 = temp__5753__auto___36267;
if(cljs.core.chunked_seq_QMARK_(seq__36048_36268__$1)){
var c__4679__auto___36269 = cljs.core.chunk_first(seq__36048_36268__$1);
var G__36270 = cljs.core.chunk_rest(seq__36048_36268__$1);
var G__36271 = c__4679__auto___36269;
var G__36272 = cljs.core.count(c__4679__auto___36269);
var G__36273 = (0);
seq__36048_36253 = G__36270;
chunk__36050_36254 = G__36271;
count__36051_36255 = G__36272;
i__36052_36256 = G__36273;
continue;
} else {
var map__36057_36274 = cljs.core.first(seq__36048_36268__$1);
var map__36057_36275__$1 = cljs.core.__destructure_map(map__36057_36274);
var task_36276 = map__36057_36275__$1;
var fn_str_36277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36057_36275__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36057_36275__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36279 = goog.getObjectByName(fn_str_36277,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36278)].join(''));

(fn_obj_36279.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36279.cljs$core$IFn$_invoke$arity$2(path,new_link_36252) : fn_obj_36279.call(null,path,new_link_36252));


var G__36280 = cljs.core.next(seq__36048_36268__$1);
var G__36281 = null;
var G__36282 = (0);
var G__36283 = (0);
seq__36048_36253 = G__36280;
chunk__36050_36254 = G__36281;
count__36051_36255 = G__36282;
i__36052_36256 = G__36283;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36250);
});})(seq__36009_36246,chunk__36013_36247,count__36014_36248,i__36015_36249,seq__35812,chunk__35814,count__35815,i__35816,new_link_36252,path_match_36251,node_36250,path,map__35811,map__35811__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36251], 0));

goog.dom.insertSiblingAfter(new_link_36252,node_36250);


var G__36284 = seq__36009_36246;
var G__36285 = chunk__36013_36247;
var G__36286 = count__36014_36248;
var G__36287 = (i__36015_36249 + (1));
seq__36009_36246 = G__36284;
chunk__36013_36247 = G__36285;
count__36014_36248 = G__36286;
i__36015_36249 = G__36287;
continue;
} else {
var G__36288 = seq__36009_36246;
var G__36289 = chunk__36013_36247;
var G__36290 = count__36014_36248;
var G__36291 = (i__36015_36249 + (1));
seq__36009_36246 = G__36288;
chunk__36013_36247 = G__36289;
count__36014_36248 = G__36290;
i__36015_36249 = G__36291;
continue;
}
} else {
var G__36292 = seq__36009_36246;
var G__36293 = chunk__36013_36247;
var G__36294 = count__36014_36248;
var G__36295 = (i__36015_36249 + (1));
seq__36009_36246 = G__36292;
chunk__36013_36247 = G__36293;
count__36014_36248 = G__36294;
i__36015_36249 = G__36295;
continue;
}
} else {
var temp__5753__auto___36296 = cljs.core.seq(seq__36009_36246);
if(temp__5753__auto___36296){
var seq__36009_36297__$1 = temp__5753__auto___36296;
if(cljs.core.chunked_seq_QMARK_(seq__36009_36297__$1)){
var c__4679__auto___36298 = cljs.core.chunk_first(seq__36009_36297__$1);
var G__36299 = cljs.core.chunk_rest(seq__36009_36297__$1);
var G__36300 = c__4679__auto___36298;
var G__36301 = cljs.core.count(c__4679__auto___36298);
var G__36302 = (0);
seq__36009_36246 = G__36299;
chunk__36013_36247 = G__36300;
count__36014_36248 = G__36301;
i__36015_36249 = G__36302;
continue;
} else {
var node_36303 = cljs.core.first(seq__36009_36297__$1);
if(cljs.core.not(node_36303.shadow$old)){
var path_match_36304 = shadow.cljs.devtools.client.browser.match_paths(node_36303.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36304)){
var new_link_36305 = (function (){var G__36058 = node_36303.cloneNode(true);
G__36058.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36304),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36058;
})();
(node_36303.shadow$old = true);

(new_link_36305.onload = ((function (seq__36009_36246,chunk__36013_36247,count__36014_36248,i__36015_36249,seq__35812,chunk__35814,count__35815,i__35816,new_link_36305,path_match_36304,node_36303,seq__36009_36297__$1,temp__5753__auto___36296,path,map__35811,map__35811__$1,msg,updates,reload_info){
return (function (e){
var seq__36059_36306 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36061_36307 = null;
var count__36062_36308 = (0);
var i__36063_36309 = (0);
while(true){
if((i__36063_36309 < count__36062_36308)){
var map__36067_36310 = chunk__36061_36307.cljs$core$IIndexed$_nth$arity$2(null,i__36063_36309);
var map__36067_36311__$1 = cljs.core.__destructure_map(map__36067_36310);
var task_36312 = map__36067_36311__$1;
var fn_str_36313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067_36311__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36067_36311__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36315 = goog.getObjectByName(fn_str_36313,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36314)].join(''));

(fn_obj_36315.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36315.cljs$core$IFn$_invoke$arity$2(path,new_link_36305) : fn_obj_36315.call(null,path,new_link_36305));


var G__36316 = seq__36059_36306;
var G__36317 = chunk__36061_36307;
var G__36318 = count__36062_36308;
var G__36319 = (i__36063_36309 + (1));
seq__36059_36306 = G__36316;
chunk__36061_36307 = G__36317;
count__36062_36308 = G__36318;
i__36063_36309 = G__36319;
continue;
} else {
var temp__5753__auto___36320__$1 = cljs.core.seq(seq__36059_36306);
if(temp__5753__auto___36320__$1){
var seq__36059_36321__$1 = temp__5753__auto___36320__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36059_36321__$1)){
var c__4679__auto___36322 = cljs.core.chunk_first(seq__36059_36321__$1);
var G__36323 = cljs.core.chunk_rest(seq__36059_36321__$1);
var G__36324 = c__4679__auto___36322;
var G__36325 = cljs.core.count(c__4679__auto___36322);
var G__36326 = (0);
seq__36059_36306 = G__36323;
chunk__36061_36307 = G__36324;
count__36062_36308 = G__36325;
i__36063_36309 = G__36326;
continue;
} else {
var map__36068_36327 = cljs.core.first(seq__36059_36321__$1);
var map__36068_36328__$1 = cljs.core.__destructure_map(map__36068_36327);
var task_36329 = map__36068_36328__$1;
var fn_str_36330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36068_36328__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36068_36328__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36332 = goog.getObjectByName(fn_str_36330,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36331)].join(''));

(fn_obj_36332.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36332.cljs$core$IFn$_invoke$arity$2(path,new_link_36305) : fn_obj_36332.call(null,path,new_link_36305));


var G__36333 = cljs.core.next(seq__36059_36321__$1);
var G__36334 = null;
var G__36335 = (0);
var G__36336 = (0);
seq__36059_36306 = G__36333;
chunk__36061_36307 = G__36334;
count__36062_36308 = G__36335;
i__36063_36309 = G__36336;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36303);
});})(seq__36009_36246,chunk__36013_36247,count__36014_36248,i__36015_36249,seq__35812,chunk__35814,count__35815,i__35816,new_link_36305,path_match_36304,node_36303,seq__36009_36297__$1,temp__5753__auto___36296,path,map__35811,map__35811__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36304], 0));

goog.dom.insertSiblingAfter(new_link_36305,node_36303);


var G__36337 = cljs.core.next(seq__36009_36297__$1);
var G__36338 = null;
var G__36339 = (0);
var G__36340 = (0);
seq__36009_36246 = G__36337;
chunk__36013_36247 = G__36338;
count__36014_36248 = G__36339;
i__36015_36249 = G__36340;
continue;
} else {
var G__36341 = cljs.core.next(seq__36009_36297__$1);
var G__36342 = null;
var G__36343 = (0);
var G__36344 = (0);
seq__36009_36246 = G__36341;
chunk__36013_36247 = G__36342;
count__36014_36248 = G__36343;
i__36015_36249 = G__36344;
continue;
}
} else {
var G__36345 = cljs.core.next(seq__36009_36297__$1);
var G__36346 = null;
var G__36347 = (0);
var G__36348 = (0);
seq__36009_36246 = G__36345;
chunk__36013_36247 = G__36346;
count__36014_36248 = G__36347;
i__36015_36249 = G__36348;
continue;
}
}
} else {
}
}
break;
}


var G__36349 = seq__35812;
var G__36350 = chunk__35814;
var G__36351 = count__35815;
var G__36352 = (i__35816 + (1));
seq__35812 = G__36349;
chunk__35814 = G__36350;
count__35815 = G__36351;
i__35816 = G__36352;
continue;
} else {
var G__36353 = seq__35812;
var G__36354 = chunk__35814;
var G__36355 = count__35815;
var G__36356 = (i__35816 + (1));
seq__35812 = G__36353;
chunk__35814 = G__36354;
count__35815 = G__36355;
i__35816 = G__36356;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35812);
if(temp__5753__auto__){
var seq__35812__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35812__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35812__$1);
var G__36357 = cljs.core.chunk_rest(seq__35812__$1);
var G__36358 = c__4679__auto__;
var G__36359 = cljs.core.count(c__4679__auto__);
var G__36360 = (0);
seq__35812 = G__36357;
chunk__35814 = G__36358;
count__35815 = G__36359;
i__35816 = G__36360;
continue;
} else {
var path = cljs.core.first(seq__35812__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36069_36361 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36073_36362 = null;
var count__36074_36363 = (0);
var i__36075_36364 = (0);
while(true){
if((i__36075_36364 < count__36074_36363)){
var node_36365 = chunk__36073_36362.cljs$core$IIndexed$_nth$arity$2(null,i__36075_36364);
if(cljs.core.not(node_36365.shadow$old)){
var path_match_36366 = shadow.cljs.devtools.client.browser.match_paths(node_36365.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36366)){
var new_link_36367 = (function (){var G__36116 = node_36365.cloneNode(true);
G__36116.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36366),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36116;
})();
(node_36365.shadow$old = true);

(new_link_36367.onload = ((function (seq__36069_36361,chunk__36073_36362,count__36074_36363,i__36075_36364,seq__35812,chunk__35814,count__35815,i__35816,new_link_36367,path_match_36366,node_36365,path,seq__35812__$1,temp__5753__auto__,map__35811,map__35811__$1,msg,updates,reload_info){
return (function (e){
var seq__36117_36368 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36119_36369 = null;
var count__36120_36370 = (0);
var i__36121_36371 = (0);
while(true){
if((i__36121_36371 < count__36120_36370)){
var map__36133_36372 = chunk__36119_36369.cljs$core$IIndexed$_nth$arity$2(null,i__36121_36371);
var map__36133_36373__$1 = cljs.core.__destructure_map(map__36133_36372);
var task_36374 = map__36133_36373__$1;
var fn_str_36375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133_36373__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36133_36373__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36377 = goog.getObjectByName(fn_str_36375,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36376)].join(''));

(fn_obj_36377.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36377.cljs$core$IFn$_invoke$arity$2(path,new_link_36367) : fn_obj_36377.call(null,path,new_link_36367));


var G__36378 = seq__36117_36368;
var G__36379 = chunk__36119_36369;
var G__36380 = count__36120_36370;
var G__36381 = (i__36121_36371 + (1));
seq__36117_36368 = G__36378;
chunk__36119_36369 = G__36379;
count__36120_36370 = G__36380;
i__36121_36371 = G__36381;
continue;
} else {
var temp__5753__auto___36382__$1 = cljs.core.seq(seq__36117_36368);
if(temp__5753__auto___36382__$1){
var seq__36117_36383__$1 = temp__5753__auto___36382__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36117_36383__$1)){
var c__4679__auto___36384 = cljs.core.chunk_first(seq__36117_36383__$1);
var G__36385 = cljs.core.chunk_rest(seq__36117_36383__$1);
var G__36386 = c__4679__auto___36384;
var G__36387 = cljs.core.count(c__4679__auto___36384);
var G__36388 = (0);
seq__36117_36368 = G__36385;
chunk__36119_36369 = G__36386;
count__36120_36370 = G__36387;
i__36121_36371 = G__36388;
continue;
} else {
var map__36138_36389 = cljs.core.first(seq__36117_36383__$1);
var map__36138_36390__$1 = cljs.core.__destructure_map(map__36138_36389);
var task_36391 = map__36138_36390__$1;
var fn_str_36392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138_36390__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138_36390__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36394 = goog.getObjectByName(fn_str_36392,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36393)].join(''));

(fn_obj_36394.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36394.cljs$core$IFn$_invoke$arity$2(path,new_link_36367) : fn_obj_36394.call(null,path,new_link_36367));


var G__36395 = cljs.core.next(seq__36117_36383__$1);
var G__36396 = null;
var G__36397 = (0);
var G__36398 = (0);
seq__36117_36368 = G__36395;
chunk__36119_36369 = G__36396;
count__36120_36370 = G__36397;
i__36121_36371 = G__36398;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36365);
});})(seq__36069_36361,chunk__36073_36362,count__36074_36363,i__36075_36364,seq__35812,chunk__35814,count__35815,i__35816,new_link_36367,path_match_36366,node_36365,path,seq__35812__$1,temp__5753__auto__,map__35811,map__35811__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36366], 0));

goog.dom.insertSiblingAfter(new_link_36367,node_36365);


var G__36399 = seq__36069_36361;
var G__36400 = chunk__36073_36362;
var G__36401 = count__36074_36363;
var G__36402 = (i__36075_36364 + (1));
seq__36069_36361 = G__36399;
chunk__36073_36362 = G__36400;
count__36074_36363 = G__36401;
i__36075_36364 = G__36402;
continue;
} else {
var G__36403 = seq__36069_36361;
var G__36404 = chunk__36073_36362;
var G__36405 = count__36074_36363;
var G__36406 = (i__36075_36364 + (1));
seq__36069_36361 = G__36403;
chunk__36073_36362 = G__36404;
count__36074_36363 = G__36405;
i__36075_36364 = G__36406;
continue;
}
} else {
var G__36407 = seq__36069_36361;
var G__36408 = chunk__36073_36362;
var G__36409 = count__36074_36363;
var G__36410 = (i__36075_36364 + (1));
seq__36069_36361 = G__36407;
chunk__36073_36362 = G__36408;
count__36074_36363 = G__36409;
i__36075_36364 = G__36410;
continue;
}
} else {
var temp__5753__auto___36411__$1 = cljs.core.seq(seq__36069_36361);
if(temp__5753__auto___36411__$1){
var seq__36069_36412__$1 = temp__5753__auto___36411__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36069_36412__$1)){
var c__4679__auto___36413 = cljs.core.chunk_first(seq__36069_36412__$1);
var G__36414 = cljs.core.chunk_rest(seq__36069_36412__$1);
var G__36415 = c__4679__auto___36413;
var G__36416 = cljs.core.count(c__4679__auto___36413);
var G__36417 = (0);
seq__36069_36361 = G__36414;
chunk__36073_36362 = G__36415;
count__36074_36363 = G__36416;
i__36075_36364 = G__36417;
continue;
} else {
var node_36418 = cljs.core.first(seq__36069_36412__$1);
if(cljs.core.not(node_36418.shadow$old)){
var path_match_36419 = shadow.cljs.devtools.client.browser.match_paths(node_36418.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36419)){
var new_link_36420 = (function (){var G__36143 = node_36418.cloneNode(true);
G__36143.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36419),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36143;
})();
(node_36418.shadow$old = true);

(new_link_36420.onload = ((function (seq__36069_36361,chunk__36073_36362,count__36074_36363,i__36075_36364,seq__35812,chunk__35814,count__35815,i__35816,new_link_36420,path_match_36419,node_36418,seq__36069_36412__$1,temp__5753__auto___36411__$1,path,seq__35812__$1,temp__5753__auto__,map__35811,map__35811__$1,msg,updates,reload_info){
return (function (e){
var seq__36144_36423 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36146_36424 = null;
var count__36147_36425 = (0);
var i__36148_36426 = (0);
while(true){
if((i__36148_36426 < count__36147_36425)){
var map__36152_36427 = chunk__36146_36424.cljs$core$IIndexed$_nth$arity$2(null,i__36148_36426);
var map__36152_36428__$1 = cljs.core.__destructure_map(map__36152_36427);
var task_36429 = map__36152_36428__$1;
var fn_str_36430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36152_36428__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36152_36428__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36432 = goog.getObjectByName(fn_str_36430,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36431)].join(''));

(fn_obj_36432.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36432.cljs$core$IFn$_invoke$arity$2(path,new_link_36420) : fn_obj_36432.call(null,path,new_link_36420));


var G__36433 = seq__36144_36423;
var G__36434 = chunk__36146_36424;
var G__36435 = count__36147_36425;
var G__36436 = (i__36148_36426 + (1));
seq__36144_36423 = G__36433;
chunk__36146_36424 = G__36434;
count__36147_36425 = G__36435;
i__36148_36426 = G__36436;
continue;
} else {
var temp__5753__auto___36437__$2 = cljs.core.seq(seq__36144_36423);
if(temp__5753__auto___36437__$2){
var seq__36144_36438__$1 = temp__5753__auto___36437__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36144_36438__$1)){
var c__4679__auto___36439 = cljs.core.chunk_first(seq__36144_36438__$1);
var G__36440 = cljs.core.chunk_rest(seq__36144_36438__$1);
var G__36441 = c__4679__auto___36439;
var G__36442 = cljs.core.count(c__4679__auto___36439);
var G__36443 = (0);
seq__36144_36423 = G__36440;
chunk__36146_36424 = G__36441;
count__36147_36425 = G__36442;
i__36148_36426 = G__36443;
continue;
} else {
var map__36153_36444 = cljs.core.first(seq__36144_36438__$1);
var map__36153_36445__$1 = cljs.core.__destructure_map(map__36153_36444);
var task_36446 = map__36153_36445__$1;
var fn_str_36447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36153_36445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36153_36445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36449 = goog.getObjectByName(fn_str_36447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36448)].join(''));

(fn_obj_36449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36449.cljs$core$IFn$_invoke$arity$2(path,new_link_36420) : fn_obj_36449.call(null,path,new_link_36420));


var G__36450 = cljs.core.next(seq__36144_36438__$1);
var G__36451 = null;
var G__36452 = (0);
var G__36453 = (0);
seq__36144_36423 = G__36450;
chunk__36146_36424 = G__36451;
count__36147_36425 = G__36452;
i__36148_36426 = G__36453;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36418);
});})(seq__36069_36361,chunk__36073_36362,count__36074_36363,i__36075_36364,seq__35812,chunk__35814,count__35815,i__35816,new_link_36420,path_match_36419,node_36418,seq__36069_36412__$1,temp__5753__auto___36411__$1,path,seq__35812__$1,temp__5753__auto__,map__35811,map__35811__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36419], 0));

goog.dom.insertSiblingAfter(new_link_36420,node_36418);


var G__36454 = cljs.core.next(seq__36069_36412__$1);
var G__36455 = null;
var G__36456 = (0);
var G__36457 = (0);
seq__36069_36361 = G__36454;
chunk__36073_36362 = G__36455;
count__36074_36363 = G__36456;
i__36075_36364 = G__36457;
continue;
} else {
var G__36458 = cljs.core.next(seq__36069_36412__$1);
var G__36459 = null;
var G__36460 = (0);
var G__36461 = (0);
seq__36069_36361 = G__36458;
chunk__36073_36362 = G__36459;
count__36074_36363 = G__36460;
i__36075_36364 = G__36461;
continue;
}
} else {
var G__36462 = cljs.core.next(seq__36069_36412__$1);
var G__36463 = null;
var G__36464 = (0);
var G__36465 = (0);
seq__36069_36361 = G__36462;
chunk__36073_36362 = G__36463;
count__36074_36363 = G__36464;
i__36075_36364 = G__36465;
continue;
}
}
} else {
}
}
break;
}


var G__36466 = cljs.core.next(seq__35812__$1);
var G__36467 = null;
var G__36468 = (0);
var G__36469 = (0);
seq__35812 = G__36466;
chunk__35814 = G__36467;
count__35815 = G__36468;
i__35816 = G__36469;
continue;
} else {
var G__36470 = cljs.core.next(seq__35812__$1);
var G__36471 = null;
var G__36472 = (0);
var G__36473 = (0);
seq__35812 = G__36470;
chunk__35814 = G__36471;
count__35815 = G__36472;
i__35816 = G__36473;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36157){
var map__36158 = p__36157;
var map__36158__$1 = cljs.core.__destructure_map(map__36158);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36158__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36161){
var map__36162 = p__36161;
var map__36162__$1 = cljs.core.__destructure_map(map__36162);
var _ = map__36162__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36162__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36163,done,error){
var map__36164 = p__36163;
var map__36164__$1 = cljs.core.__destructure_map(map__36164);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36165,done,error){
var map__36166 = p__36165;
var map__36166__$1 = cljs.core.__destructure_map(map__36166);
var msg = map__36166__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36166__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36166__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36166__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36167){
var map__36168 = p__36167;
var map__36168__$1 = cljs.core.__destructure_map(map__36168);
var src = map__36168__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36168__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36169 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36169) : done.call(null,G__36169));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36170){
var map__36171 = p__36170;
var map__36171__$1 = cljs.core.__destructure_map(map__36171);
var msg__$1 = map__36171__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36172){var ex = e36172;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36173){
var map__36174 = p__36173;
var map__36174__$1 = cljs.core.__destructure_map(map__36174);
var env = map__36174__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36174__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36175){
var map__36176 = p__36175;
var map__36176__$1 = cljs.core.__destructure_map(map__36176);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36176__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36177){
var map__36178 = p__36177;
var map__36178__$1 = cljs.core.__destructure_map(map__36178);
var svc = map__36178__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36178__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
