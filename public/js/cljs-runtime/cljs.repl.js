goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34808){
var map__34810 = p__34808;
var map__34810__$1 = cljs.core.__destructure_map(map__34810);
var m = map__34810__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34810__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34814_35045 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34815_35046 = null;
var count__34816_35047 = (0);
var i__34817_35048 = (0);
while(true){
if((i__34817_35048 < count__34816_35047)){
var f_35049 = chunk__34815_35046.cljs$core$IIndexed$_nth$arity$2(null,i__34817_35048);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35049], 0));


var G__35054 = seq__34814_35045;
var G__35055 = chunk__34815_35046;
var G__35056 = count__34816_35047;
var G__35057 = (i__34817_35048 + (1));
seq__34814_35045 = G__35054;
chunk__34815_35046 = G__35055;
count__34816_35047 = G__35056;
i__34817_35048 = G__35057;
continue;
} else {
var temp__5753__auto___35058 = cljs.core.seq(seq__34814_35045);
if(temp__5753__auto___35058){
var seq__34814_35059__$1 = temp__5753__auto___35058;
if(cljs.core.chunked_seq_QMARK_(seq__34814_35059__$1)){
var c__4679__auto___35060 = cljs.core.chunk_first(seq__34814_35059__$1);
var G__35061 = cljs.core.chunk_rest(seq__34814_35059__$1);
var G__35062 = c__4679__auto___35060;
var G__35063 = cljs.core.count(c__4679__auto___35060);
var G__35064 = (0);
seq__34814_35045 = G__35061;
chunk__34815_35046 = G__35062;
count__34816_35047 = G__35063;
i__34817_35048 = G__35064;
continue;
} else {
var f_35065 = cljs.core.first(seq__34814_35059__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35065], 0));


var G__35066 = cljs.core.next(seq__34814_35059__$1);
var G__35067 = null;
var G__35068 = (0);
var G__35069 = (0);
seq__34814_35045 = G__35066;
chunk__34815_35046 = G__35067;
count__34816_35047 = G__35068;
i__34817_35048 = G__35069;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35070 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35070], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35070)))?cljs.core.second(arglists_35070):arglists_35070)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34824_35073 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34825_35074 = null;
var count__34826_35075 = (0);
var i__34827_35076 = (0);
while(true){
if((i__34827_35076 < count__34826_35075)){
var vec__34841_35077 = chunk__34825_35074.cljs$core$IIndexed$_nth$arity$2(null,i__34827_35076);
var name_35078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34841_35077,(0),null);
var map__34844_35079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34841_35077,(1),null);
var map__34844_35080__$1 = cljs.core.__destructure_map(map__34844_35079);
var doc_35081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34844_35080__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34844_35080__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35078], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35082], 0));

if(cljs.core.truth_(doc_35081)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35081], 0));
} else {
}


var G__35087 = seq__34824_35073;
var G__35088 = chunk__34825_35074;
var G__35089 = count__34826_35075;
var G__35090 = (i__34827_35076 + (1));
seq__34824_35073 = G__35087;
chunk__34825_35074 = G__35088;
count__34826_35075 = G__35089;
i__34827_35076 = G__35090;
continue;
} else {
var temp__5753__auto___35091 = cljs.core.seq(seq__34824_35073);
if(temp__5753__auto___35091){
var seq__34824_35092__$1 = temp__5753__auto___35091;
if(cljs.core.chunked_seq_QMARK_(seq__34824_35092__$1)){
var c__4679__auto___35093 = cljs.core.chunk_first(seq__34824_35092__$1);
var G__35094 = cljs.core.chunk_rest(seq__34824_35092__$1);
var G__35095 = c__4679__auto___35093;
var G__35096 = cljs.core.count(c__4679__auto___35093);
var G__35097 = (0);
seq__34824_35073 = G__35094;
chunk__34825_35074 = G__35095;
count__34826_35075 = G__35096;
i__34827_35076 = G__35097;
continue;
} else {
var vec__34848_35098 = cljs.core.first(seq__34824_35092__$1);
var name_35099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848_35098,(0),null);
var map__34851_35100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34848_35098,(1),null);
var map__34851_35101__$1 = cljs.core.__destructure_map(map__34851_35100);
var doc_35102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34851_35101__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34851_35101__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35099], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35103], 0));

if(cljs.core.truth_(doc_35102)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35102], 0));
} else {
}


var G__35104 = cljs.core.next(seq__34824_35092__$1);
var G__35105 = null;
var G__35106 = (0);
var G__35107 = (0);
seq__34824_35073 = G__35104;
chunk__34825_35074 = G__35105;
count__34826_35075 = G__35106;
i__34827_35076 = G__35107;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34862 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34863 = null;
var count__34864 = (0);
var i__34865 = (0);
while(true){
if((i__34865 < count__34864)){
var role = chunk__34863.cljs$core$IIndexed$_nth$arity$2(null,i__34865);
var temp__5753__auto___35108__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35108__$1)){
var spec_35109 = temp__5753__auto___35108__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35109)], 0));
} else {
}


var G__35110 = seq__34862;
var G__35111 = chunk__34863;
var G__35112 = count__34864;
var G__35113 = (i__34865 + (1));
seq__34862 = G__35110;
chunk__34863 = G__35111;
count__34864 = G__35112;
i__34865 = G__35113;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__34862);
if(temp__5753__auto____$1){
var seq__34862__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34862__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34862__$1);
var G__35115 = cljs.core.chunk_rest(seq__34862__$1);
var G__35116 = c__4679__auto__;
var G__35117 = cljs.core.count(c__4679__auto__);
var G__35118 = (0);
seq__34862 = G__35115;
chunk__34863 = G__35116;
count__34864 = G__35117;
i__34865 = G__35118;
continue;
} else {
var role = cljs.core.first(seq__34862__$1);
var temp__5753__auto___35119__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35119__$2)){
var spec_35120 = temp__5753__auto___35119__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35120)], 0));
} else {
}


var G__35122 = cljs.core.next(seq__34862__$1);
var G__35123 = null;
var G__35124 = (0);
var G__35125 = (0);
seq__34862 = G__35122;
chunk__34863 = G__35123;
count__34864 = G__35124;
i__34865 = G__35125;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35127 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35128 = cljs.core.ex_cause(t);
via = G__35127;
t = G__35128;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34888 = datafied_throwable;
var map__34888__$1 = cljs.core.__destructure_map(map__34888);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34888__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34888__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34888__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34889 = cljs.core.last(via);
var map__34889__$1 = cljs.core.__destructure_map(map__34889);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34889__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34890 = data;
var map__34890__$1 = cljs.core.__destructure_map(map__34890);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34890__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34890__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34890__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34891 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34891__$1 = cljs.core.__destructure_map(map__34891);
var top_data = map__34891__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34891__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34893 = phase;
var G__34893__$1 = (((G__34893 instanceof cljs.core.Keyword))?G__34893.fqn:null);
switch (G__34893__$1) {
case "read-source":
var map__34894 = data;
var map__34894__$1 = cljs.core.__destructure_map(map__34894);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34894__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34895 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34895__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34895,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34895);
var G__34895__$2 = (cljs.core.truth_((function (){var fexpr__34896 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34896.cljs$core$IFn$_invoke$arity$1 ? fexpr__34896.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34896.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34895__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34895__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34895__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34895__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34897 = top_data;
var G__34897__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34897,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34897);
var G__34897__$2 = (cljs.core.truth_((function (){var fexpr__34898 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34898.cljs$core$IFn$_invoke$arity$1 ? fexpr__34898.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34898.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34897__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34897__$1);
var G__34897__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34897__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34897__$2);
var G__34897__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34897__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34897__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34897__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34897__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34899 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899,(3),null);
var G__34902 = top_data;
var G__34902__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34902,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34902);
var G__34902__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34902__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34902__$1);
var G__34902__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34902__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34902__$2);
var G__34902__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34902__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34902__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34902__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34902__$4;
}

break;
case "execution":
var vec__34903 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34903,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34886_SHARP_){
var or__4253__auto__ = (p1__34886_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__34906 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34906.cljs$core$IFn$_invoke$arity$1 ? fexpr__34906.cljs$core$IFn$_invoke$arity$1(p1__34886_SHARP_) : fexpr__34906.call(null,p1__34886_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__34909 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34909__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34909,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34909);
var G__34909__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34909__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34909__$1);
var G__34909__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34909__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34909__$2);
var G__34909__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34909__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34909__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34909__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34909__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34893__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34913){
var map__34914 = p__34913;
var map__34914__$1 = cljs.core.__destructure_map(map__34914);
var triage_data = map__34914__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34914__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34917 = phase;
var G__34917__$1 = (((G__34917 instanceof cljs.core.Keyword))?G__34917.fqn:null);
switch (G__34917__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34918 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34919 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34920 = loc;
var G__34921 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34922_35154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34923_35155 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34924_35156 = true;
var _STAR_print_fn_STAR__temp_val__34925_35157 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34924_35156);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34925_35157);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34911_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34911_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34923_35155);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34922_35154);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34918,G__34919,G__34920,G__34921) : format.call(null,G__34918,G__34919,G__34920,G__34921));

break;
case "macroexpansion":
var G__34934 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34935 = cause_type;
var G__34936 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34937 = loc;
var G__34938 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34934,G__34935,G__34936,G__34937,G__34938) : format.call(null,G__34934,G__34935,G__34936,G__34937,G__34938));

break;
case "compile-syntax-check":
var G__34948 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34949 = cause_type;
var G__34950 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34951 = loc;
var G__34952 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34948,G__34949,G__34950,G__34951,G__34952) : format.call(null,G__34948,G__34949,G__34950,G__34951,G__34952));

break;
case "compilation":
var G__34953 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34954 = cause_type;
var G__34955 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34956 = loc;
var G__34957 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34953,G__34954,G__34955,G__34956,G__34957) : format.call(null,G__34953,G__34954,G__34955,G__34956,G__34957));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34965 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34966 = symbol;
var G__34967 = loc;
var G__34968 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34969_35158 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34970_35159 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34971_35160 = true;
var _STAR_print_fn_STAR__temp_val__34972_35161 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34971_35160);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34972_35161);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34912_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34912_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34970_35159);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34969_35158);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34965,G__34966,G__34967,G__34968) : format.call(null,G__34965,G__34966,G__34967,G__34968));
} else {
var G__34987 = "Execution error%s at %s(%s).\n%s\n";
var G__34988 = cause_type;
var G__34989 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34990 = loc;
var G__34991 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34987,G__34988,G__34989,G__34990,G__34991) : format.call(null,G__34987,G__34988,G__34989,G__34990,G__34991));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34917__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
