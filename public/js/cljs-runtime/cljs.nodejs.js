goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__37817__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__37817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37818__i = 0, G__37818__a = new Array(arguments.length -  0);
while (G__37818__i < G__37818__a.length) {G__37818__a[G__37818__i] = arguments[G__37818__i + 0]; ++G__37818__i;}
  args = new cljs.core.IndexedSeq(G__37818__a,0,null);
} 
return G__37817__delegate.call(this,args);};
G__37817.cljs$lang$maxFixedArity = 0;
G__37817.cljs$lang$applyTo = (function (arglist__37819){
var args = cljs.core.seq(arglist__37819);
return G__37817__delegate(args);
});
G__37817.cljs$core$IFn$_invoke$arity$variadic = G__37817__delegate;
return G__37817;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__37820__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__37820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37821__i = 0, G__37821__a = new Array(arguments.length -  0);
while (G__37821__i < G__37821__a.length) {G__37821__a[G__37821__i] = arguments[G__37821__i + 0]; ++G__37821__i;}
  args = new cljs.core.IndexedSeq(G__37821__a,0,null);
} 
return G__37820__delegate.call(this,args);};
G__37820.cljs$lang$maxFixedArity = 0;
G__37820.cljs$lang$applyTo = (function (arglist__37822){
var args = cljs.core.seq(arglist__37822);
return G__37820__delegate(args);
});
G__37820.cljs$core$IFn$_invoke$arity$variadic = G__37820__delegate;
return G__37820;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map
