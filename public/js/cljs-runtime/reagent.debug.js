goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36028__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36029__i = 0, G__36029__a = new Array(arguments.length -  0);
while (G__36029__i < G__36029__a.length) {G__36029__a[G__36029__i] = arguments[G__36029__i + 0]; ++G__36029__i;}
  args = new cljs.core.IndexedSeq(G__36029__a,0,null);
} 
return G__36028__delegate.call(this,args);};
G__36028.cljs$lang$maxFixedArity = 0;
G__36028.cljs$lang$applyTo = (function (arglist__36030){
var args = cljs.core.seq(arglist__36030);
return G__36028__delegate(args);
});
G__36028.cljs$core$IFn$_invoke$arity$variadic = G__36028__delegate;
return G__36028;
})()
);

(o.error = (function() { 
var G__36031__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36031 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36033__i = 0, G__36033__a = new Array(arguments.length -  0);
while (G__36033__i < G__36033__a.length) {G__36033__a[G__36033__i] = arguments[G__36033__i + 0]; ++G__36033__i;}
  args = new cljs.core.IndexedSeq(G__36033__a,0,null);
} 
return G__36031__delegate.call(this,args);};
G__36031.cljs$lang$maxFixedArity = 0;
G__36031.cljs$lang$applyTo = (function (arglist__36034){
var args = cljs.core.seq(arglist__36034);
return G__36031__delegate(args);
});
G__36031.cljs$core$IFn$_invoke$arity$variadic = G__36031__delegate;
return G__36031;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
