goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30207 = arguments.length;
switch (G__30207) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30208 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30208 = (function (f,blockable,meta30209){
this.f = f;
this.blockable = blockable;
this.meta30209 = meta30209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30210,meta30209__$1){
var self__ = this;
var _30210__$1 = this;
return (new cljs.core.async.t_cljs$core$async30208(self__.f,self__.blockable,meta30209__$1));
}));

(cljs.core.async.t_cljs$core$async30208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30210){
var self__ = this;
var _30210__$1 = this;
return self__.meta30209;
}));

(cljs.core.async.t_cljs$core$async30208.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30208.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30208.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30209","meta30209",928436287,null)], null);
}));

(cljs.core.async.t_cljs$core$async30208.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30208.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30208");

(cljs.core.async.t_cljs$core$async30208.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30208");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30208.
 */
cljs.core.async.__GT_t_cljs$core$async30208 = (function cljs$core$async$__GT_t_cljs$core$async30208(f__$1,blockable__$1,meta30209){
return (new cljs.core.async.t_cljs$core$async30208(f__$1,blockable__$1,meta30209));
});

}

return (new cljs.core.async.t_cljs$core$async30208(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30213 = arguments.length;
switch (G__30213) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30215 = arguments.length;
switch (G__30215) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30217 = arguments.length;
switch (G__30217) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32753 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32753) : fn1.call(null,val_32753));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32753) : fn1.call(null,val_32753));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30236 = arguments.length;
switch (G__30236) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___32756 = n;
var x_32758 = (0);
while(true){
if((x_32758 < n__4741__auto___32756)){
(a[x_32758] = x_32758);

var G__32759 = (x_32758 + (1));
x_32758 = G__32759;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30252 = (function (flag,meta30254){
this.flag = flag;
this.meta30254 = meta30254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30255,meta30254__$1){
var self__ = this;
var _30255__$1 = this;
return (new cljs.core.async.t_cljs$core$async30252(self__.flag,meta30254__$1));
}));

(cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30255){
var self__ = this;
var _30255__$1 = this;
return self__.meta30254;
}));

(cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30254","meta30254",881504943,null)], null);
}));

(cljs.core.async.t_cljs$core$async30252.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30252");

(cljs.core.async.t_cljs$core$async30252.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30252");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30252.
 */
cljs.core.async.__GT_t_cljs$core$async30252 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30252(flag__$1,meta30254){
return (new cljs.core.async.t_cljs$core$async30252(flag__$1,meta30254));
});

}

return (new cljs.core.async.t_cljs$core$async30252(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30314 = (function (flag,cb,meta30315){
this.flag = flag;
this.cb = cb;
this.meta30315 = meta30315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30316,meta30315__$1){
var self__ = this;
var _30316__$1 = this;
return (new cljs.core.async.t_cljs$core$async30314(self__.flag,self__.cb,meta30315__$1));
}));

(cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30316){
var self__ = this;
var _30316__$1 = this;
return self__.meta30315;
}));

(cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30315","meta30315",-399857570,null)], null);
}));

(cljs.core.async.t_cljs$core$async30314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30314");

(cljs.core.async.t_cljs$core$async30314.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async30314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30314.
 */
cljs.core.async.__GT_t_cljs$core$async30314 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30314(flag__$1,cb__$1,meta30315){
return (new cljs.core.async.t_cljs$core$async30314(flag__$1,cb__$1,meta30315));
});

}

return (new cljs.core.async.t_cljs$core$async30314(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30344_SHARP_){
var G__30390 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30344_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30390) : fret.call(null,G__30390));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30345_SHARP_){
var G__30391 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30345_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30391) : fret.call(null,G__30391));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32810 = (i + (1));
i = G__32810;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___32811 = arguments.length;
var i__4865__auto___32812 = (0);
while(true){
if((i__4865__auto___32812 < len__4864__auto___32811)){
args__4870__auto__.push((arguments[i__4865__auto___32812]));

var G__32813 = (i__4865__auto___32812 + (1));
i__4865__auto___32812 = G__32813;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30403){
var map__30404 = p__30403;
var map__30404__$1 = cljs.core.__destructure_map(map__30404);
var opts = map__30404__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30394){
var G__30396 = cljs.core.first(seq30394);
var seq30394__$1 = cljs.core.next(seq30394);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30396,seq30394__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30406 = arguments.length;
switch (G__30406) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30133__auto___32815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_30437){
var state_val_30438 = (state_30437[(1)]);
if((state_val_30438 === (7))){
var inst_30433 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30443_32817 = state_30437__$1;
(statearr_30443_32817[(2)] = inst_30433);

(statearr_30443_32817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (1))){
var state_30437__$1 = state_30437;
var statearr_30444_32818 = state_30437__$1;
(statearr_30444_32818[(2)] = null);

(statearr_30444_32818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (4))){
var inst_30413 = (state_30437[(7)]);
var inst_30413__$1 = (state_30437[(2)]);
var inst_30415 = (inst_30413__$1 == null);
var state_30437__$1 = (function (){var statearr_30454 = state_30437;
(statearr_30454[(7)] = inst_30413__$1);

return statearr_30454;
})();
if(cljs.core.truth_(inst_30415)){
var statearr_30455_32827 = state_30437__$1;
(statearr_30455_32827[(1)] = (5));

} else {
var statearr_30456_32828 = state_30437__$1;
(statearr_30456_32828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (13))){
var state_30437__$1 = state_30437;
var statearr_30461_32832 = state_30437__$1;
(statearr_30461_32832[(2)] = null);

(statearr_30461_32832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (6))){
var inst_30413 = (state_30437[(7)]);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30437__$1,(11),to,inst_30413);
} else {
if((state_val_30438 === (3))){
var inst_30435 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30437__$1,inst_30435);
} else {
if((state_val_30438 === (12))){
var state_30437__$1 = state_30437;
var statearr_30467_32841 = state_30437__$1;
(statearr_30467_32841[(2)] = null);

(statearr_30467_32841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (2))){
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30437__$1,(4),from);
} else {
if((state_val_30438 === (11))){
var inst_30426 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
if(cljs.core.truth_(inst_30426)){
var statearr_30469_32842 = state_30437__$1;
(statearr_30469_32842[(1)] = (12));

} else {
var statearr_30470_32843 = state_30437__$1;
(statearr_30470_32843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (9))){
var state_30437__$1 = state_30437;
var statearr_30473_32845 = state_30437__$1;
(statearr_30473_32845[(2)] = null);

(statearr_30473_32845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (5))){
var state_30437__$1 = state_30437;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30476_32846 = state_30437__$1;
(statearr_30476_32846[(1)] = (8));

} else {
var statearr_30477_32847 = state_30437__$1;
(statearr_30477_32847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (14))){
var inst_30431 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30482_32848 = state_30437__$1;
(statearr_30482_32848[(2)] = inst_30431);

(statearr_30482_32848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (10))){
var inst_30422 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30483_32849 = state_30437__$1;
(statearr_30483_32849[(2)] = inst_30422);

(statearr_30483_32849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (8))){
var inst_30419 = cljs.core.async.close_BANG_(to);
var state_30437__$1 = state_30437;
var statearr_30490_32851 = state_30437__$1;
(statearr_30490_32851[(2)] = inst_30419);

(statearr_30490_32851[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_30494 = [null,null,null,null,null,null,null,null];
(statearr_30494[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_30494[(1)] = (1));

return statearr_30494;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_30437){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30437);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30498){var ex__29805__auto__ = e30498;
var statearr_30499_32853 = state_30437;
(statearr_30499_32853[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30437[(4)]))){
var statearr_30500_32854 = state_30437;
(statearr_30500_32854[(1)] = cljs.core.first((state_30437[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32855 = state_30437;
state_30437 = G__32855;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_30437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_30437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_30503 = f__30134__auto__();
(statearr_30503[(6)] = c__30133__auto___32815);

return statearr_30503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30525){
var vec__30527 = p__30525;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30527,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30527,(1),null);
var job = vec__30527;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30133__auto___32858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_30534){
var state_val_30535 = (state_30534[(1)]);
if((state_val_30535 === (1))){
var state_30534__$1 = state_30534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30534__$1,(2),res,v);
} else {
if((state_val_30535 === (2))){
var inst_30531 = (state_30534[(2)]);
var inst_30532 = cljs.core.async.close_BANG_(res);
var state_30534__$1 = (function (){var statearr_30536 = state_30534;
(statearr_30536[(7)] = inst_30531);

return statearr_30536;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30534__$1,inst_30532);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0 = (function (){
var statearr_30538 = [null,null,null,null,null,null,null,null];
(statearr_30538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__);

(statearr_30538[(1)] = (1));

return statearr_30538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1 = (function (state_30534){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30534);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30539){var ex__29805__auto__ = e30539;
var statearr_30540_32859 = state_30534;
(statearr_30540_32859[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30534[(4)]))){
var statearr_30541_32860 = state_30534;
(statearr_30541_32860[(1)] = cljs.core.first((state_30534[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32861 = state_30534;
state_30534 = G__32861;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = function(state_30534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1.call(this,state_30534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_30546 = f__30134__auto__();
(statearr_30546[(6)] = c__30133__auto___32858);

return statearr_30546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30548){
var vec__30549 = p__30548;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30549,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30549,(1),null);
var job = vec__30549;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___32862 = n;
var __32863 = (0);
while(true){
if((__32863 < n__4741__auto___32862)){
var G__30552_32864 = type;
var G__30552_32865__$1 = (((G__30552_32864 instanceof cljs.core.Keyword))?G__30552_32864.fqn:null);
switch (G__30552_32865__$1) {
case "compute":
var c__30133__auto___32867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32863,c__30133__auto___32867,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async){
return (function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = ((function (__32863,c__30133__auto___32867,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async){
return (function (state_30569){
var state_val_30570 = (state_30569[(1)]);
if((state_val_30570 === (1))){
var state_30569__$1 = state_30569;
var statearr_30571_32868 = state_30569__$1;
(statearr_30571_32868[(2)] = null);

(statearr_30571_32868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (2))){
var state_30569__$1 = state_30569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30569__$1,(4),jobs);
} else {
if((state_val_30570 === (3))){
var inst_30567 = (state_30569[(2)]);
var state_30569__$1 = state_30569;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30569__$1,inst_30567);
} else {
if((state_val_30570 === (4))){
var inst_30559 = (state_30569[(2)]);
var inst_30560 = process(inst_30559);
var state_30569__$1 = state_30569;
if(cljs.core.truth_(inst_30560)){
var statearr_30575_32870 = state_30569__$1;
(statearr_30575_32870[(1)] = (5));

} else {
var statearr_30576_32872 = state_30569__$1;
(statearr_30576_32872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (5))){
var state_30569__$1 = state_30569;
var statearr_30577_32873 = state_30569__$1;
(statearr_30577_32873[(2)] = null);

(statearr_30577_32873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (6))){
var state_30569__$1 = state_30569;
var statearr_30581_32877 = state_30569__$1;
(statearr_30581_32877[(2)] = null);

(statearr_30581_32877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30570 === (7))){
var inst_30565 = (state_30569[(2)]);
var state_30569__$1 = state_30569;
var statearr_30582_32881 = state_30569__$1;
(statearr_30582_32881[(2)] = inst_30565);

(statearr_30582_32881[(1)] = (3));


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
});})(__32863,c__30133__auto___32867,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async))
;
return ((function (__32863,switch__29801__auto__,c__30133__auto___32867,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0 = (function (){
var statearr_30583 = [null,null,null,null,null,null,null];
(statearr_30583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__);

(statearr_30583[(1)] = (1));

return statearr_30583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1 = (function (state_30569){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30569);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30584){var ex__29805__auto__ = e30584;
var statearr_30585_32883 = state_30569;
(statearr_30585_32883[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30569[(4)]))){
var statearr_30586_32885 = state_30569;
(statearr_30586_32885[(1)] = cljs.core.first((state_30569[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32886 = state_30569;
state_30569 = G__32886;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = function(state_30569){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1.call(this,state_30569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__;
})()
;})(__32863,switch__29801__auto__,c__30133__auto___32867,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async))
})();
var state__30135__auto__ = (function (){var statearr_30587 = f__30134__auto__();
(statearr_30587[(6)] = c__30133__auto___32867);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
});})(__32863,c__30133__auto___32867,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async))
);


break;
case "async":
var c__30133__auto___32887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32863,c__30133__auto___32887,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async){
return (function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = ((function (__32863,c__30133__auto___32887,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async){
return (function (state_30614){
var state_val_30615 = (state_30614[(1)]);
if((state_val_30615 === (1))){
var state_30614__$1 = state_30614;
var statearr_30616_32888 = state_30614__$1;
(statearr_30616_32888[(2)] = null);

(statearr_30616_32888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (2))){
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30614__$1,(4),jobs);
} else {
if((state_val_30615 === (3))){
var inst_30612 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30614__$1,inst_30612);
} else {
if((state_val_30615 === (4))){
var inst_30590 = (state_30614[(2)]);
var inst_30591 = async(inst_30590);
var state_30614__$1 = state_30614;
if(cljs.core.truth_(inst_30591)){
var statearr_30617_32890 = state_30614__$1;
(statearr_30617_32890[(1)] = (5));

} else {
var statearr_30618_32891 = state_30614__$1;
(statearr_30618_32891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (5))){
var state_30614__$1 = state_30614;
var statearr_30619_32892 = state_30614__$1;
(statearr_30619_32892[(2)] = null);

(statearr_30619_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (6))){
var state_30614__$1 = state_30614;
var statearr_30620_32896 = state_30614__$1;
(statearr_30620_32896[(2)] = null);

(statearr_30620_32896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30615 === (7))){
var inst_30610 = (state_30614[(2)]);
var state_30614__$1 = state_30614;
var statearr_30621_32897 = state_30614__$1;
(statearr_30621_32897[(2)] = inst_30610);

(statearr_30621_32897[(1)] = (3));


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
});})(__32863,c__30133__auto___32887,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async))
;
return ((function (__32863,switch__29801__auto__,c__30133__auto___32887,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0 = (function (){
var statearr_30622 = [null,null,null,null,null,null,null];
(statearr_30622[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__);

(statearr_30622[(1)] = (1));

return statearr_30622;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1 = (function (state_30614){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30614);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30623){var ex__29805__auto__ = e30623;
var statearr_30624_32900 = state_30614;
(statearr_30624_32900[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30614[(4)]))){
var statearr_30625_32901 = state_30614;
(statearr_30625_32901[(1)] = cljs.core.first((state_30614[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32902 = state_30614;
state_30614 = G__32902;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = function(state_30614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1.call(this,state_30614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__;
})()
;})(__32863,switch__29801__auto__,c__30133__auto___32887,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async))
})();
var state__30135__auto__ = (function (){var statearr_30626 = f__30134__auto__();
(statearr_30626[(6)] = c__30133__auto___32887);

return statearr_30626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
});})(__32863,c__30133__auto___32887,G__30552_32864,G__30552_32865__$1,n__4741__auto___32862,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30552_32865__$1)].join('')));

}

var G__32903 = (__32863 + (1));
__32863 = G__32903;
continue;
} else {
}
break;
}

var c__30133__auto___32904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_30648){
var state_val_30649 = (state_30648[(1)]);
if((state_val_30649 === (7))){
var inst_30644 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
var statearr_30665_32905 = state_30648__$1;
(statearr_30665_32905[(2)] = inst_30644);

(statearr_30665_32905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (1))){
var state_30648__$1 = state_30648;
var statearr_30666_32906 = state_30648__$1;
(statearr_30666_32906[(2)] = null);

(statearr_30666_32906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (4))){
var inst_30629 = (state_30648[(7)]);
var inst_30629__$1 = (state_30648[(2)]);
var inst_30630 = (inst_30629__$1 == null);
var state_30648__$1 = (function (){var statearr_30667 = state_30648;
(statearr_30667[(7)] = inst_30629__$1);

return statearr_30667;
})();
if(cljs.core.truth_(inst_30630)){
var statearr_30668_32907 = state_30648__$1;
(statearr_30668_32907[(1)] = (5));

} else {
var statearr_30669_32908 = state_30648__$1;
(statearr_30669_32908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (6))){
var inst_30629 = (state_30648[(7)]);
var inst_30634 = (state_30648[(8)]);
var inst_30634__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30636 = [inst_30629,inst_30634__$1];
var inst_30637 = (new cljs.core.PersistentVector(null,2,(5),inst_30635,inst_30636,null));
var state_30648__$1 = (function (){var statearr_30672 = state_30648;
(statearr_30672[(8)] = inst_30634__$1);

return statearr_30672;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30648__$1,(8),jobs,inst_30637);
} else {
if((state_val_30649 === (3))){
var inst_30646 = (state_30648[(2)]);
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30648__$1,inst_30646);
} else {
if((state_val_30649 === (2))){
var state_30648__$1 = state_30648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30648__$1,(4),from);
} else {
if((state_val_30649 === (9))){
var inst_30641 = (state_30648[(2)]);
var state_30648__$1 = (function (){var statearr_30677 = state_30648;
(statearr_30677[(9)] = inst_30641);

return statearr_30677;
})();
var statearr_30678_32909 = state_30648__$1;
(statearr_30678_32909[(2)] = null);

(statearr_30678_32909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (5))){
var inst_30632 = cljs.core.async.close_BANG_(jobs);
var state_30648__$1 = state_30648;
var statearr_30679_33083 = state_30648__$1;
(statearr_30679_33083[(2)] = inst_30632);

(statearr_30679_33083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30649 === (8))){
var inst_30634 = (state_30648[(8)]);
var inst_30639 = (state_30648[(2)]);
var state_30648__$1 = (function (){var statearr_30683 = state_30648;
(statearr_30683[(10)] = inst_30639);

return statearr_30683;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30648__$1,(9),results,inst_30634);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0 = (function (){
var statearr_30697 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__);

(statearr_30697[(1)] = (1));

return statearr_30697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1 = (function (state_30648){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30648);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30698){var ex__29805__auto__ = e30698;
var statearr_30701_33090 = state_30648;
(statearr_30701_33090[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30648[(4)]))){
var statearr_30704_33091 = state_30648;
(statearr_30704_33091[(1)] = cljs.core.first((state_30648[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33092 = state_30648;
state_30648 = G__33092;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = function(state_30648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1.call(this,state_30648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_30706 = f__30134__auto__();
(statearr_30706[(6)] = c__30133__auto___32904);

return statearr_30706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


var c__30133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_30745){
var state_val_30746 = (state_30745[(1)]);
if((state_val_30746 === (7))){
var inst_30741 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30747_33094 = state_30745__$1;
(statearr_30747_33094[(2)] = inst_30741);

(statearr_30747_33094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (20))){
var state_30745__$1 = state_30745;
var statearr_30748_33095 = state_30745__$1;
(statearr_30748_33095[(2)] = null);

(statearr_30748_33095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (1))){
var state_30745__$1 = state_30745;
var statearr_30749_33099 = state_30745__$1;
(statearr_30749_33099[(2)] = null);

(statearr_30749_33099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (4))){
var inst_30710 = (state_30745[(7)]);
var inst_30710__$1 = (state_30745[(2)]);
var inst_30711 = (inst_30710__$1 == null);
var state_30745__$1 = (function (){var statearr_30750 = state_30745;
(statearr_30750[(7)] = inst_30710__$1);

return statearr_30750;
})();
if(cljs.core.truth_(inst_30711)){
var statearr_30751_33100 = state_30745__$1;
(statearr_30751_33100[(1)] = (5));

} else {
var statearr_30756_33101 = state_30745__$1;
(statearr_30756_33101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (15))){
var inst_30723 = (state_30745[(8)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30745__$1,(18),to,inst_30723);
} else {
if((state_val_30746 === (21))){
var inst_30736 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30757_33103 = state_30745__$1;
(statearr_30757_33103[(2)] = inst_30736);

(statearr_30757_33103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (13))){
var inst_30738 = (state_30745[(2)]);
var state_30745__$1 = (function (){var statearr_30758 = state_30745;
(statearr_30758[(9)] = inst_30738);

return statearr_30758;
})();
var statearr_30759_33104 = state_30745__$1;
(statearr_30759_33104[(2)] = null);

(statearr_30759_33104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (6))){
var inst_30710 = (state_30745[(7)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30745__$1,(11),inst_30710);
} else {
if((state_val_30746 === (17))){
var inst_30731 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
if(cljs.core.truth_(inst_30731)){
var statearr_30761_33108 = state_30745__$1;
(statearr_30761_33108[(1)] = (19));

} else {
var statearr_30765_33109 = state_30745__$1;
(statearr_30765_33109[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (3))){
var inst_30743 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30745__$1,inst_30743);
} else {
if((state_val_30746 === (12))){
var inst_30720 = (state_30745[(10)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30745__$1,(14),inst_30720);
} else {
if((state_val_30746 === (2))){
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30745__$1,(4),results);
} else {
if((state_val_30746 === (19))){
var state_30745__$1 = state_30745;
var statearr_30770_33114 = state_30745__$1;
(statearr_30770_33114[(2)] = null);

(statearr_30770_33114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (11))){
var inst_30720 = (state_30745[(2)]);
var state_30745__$1 = (function (){var statearr_30771 = state_30745;
(statearr_30771[(10)] = inst_30720);

return statearr_30771;
})();
var statearr_30772_33115 = state_30745__$1;
(statearr_30772_33115[(2)] = null);

(statearr_30772_33115[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (9))){
var state_30745__$1 = state_30745;
var statearr_30774_33121 = state_30745__$1;
(statearr_30774_33121[(2)] = null);

(statearr_30774_33121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (5))){
var state_30745__$1 = state_30745;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30776_33125 = state_30745__$1;
(statearr_30776_33125[(1)] = (8));

} else {
var statearr_30777_33126 = state_30745__$1;
(statearr_30777_33126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (14))){
var inst_30725 = (state_30745[(11)]);
var inst_30723 = (state_30745[(8)]);
var inst_30723__$1 = (state_30745[(2)]);
var inst_30724 = (inst_30723__$1 == null);
var inst_30725__$1 = cljs.core.not(inst_30724);
var state_30745__$1 = (function (){var statearr_30778 = state_30745;
(statearr_30778[(11)] = inst_30725__$1);

(statearr_30778[(8)] = inst_30723__$1);

return statearr_30778;
})();
if(inst_30725__$1){
var statearr_30779_33136 = state_30745__$1;
(statearr_30779_33136[(1)] = (15));

} else {
var statearr_30782_33137 = state_30745__$1;
(statearr_30782_33137[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (16))){
var inst_30725 = (state_30745[(11)]);
var state_30745__$1 = state_30745;
var statearr_30785_33138 = state_30745__$1;
(statearr_30785_33138[(2)] = inst_30725);

(statearr_30785_33138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (10))){
var inst_30717 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30791_33143 = state_30745__$1;
(statearr_30791_33143[(2)] = inst_30717);

(statearr_30791_33143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (18))){
var inst_30728 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30792_33148 = state_30745__$1;
(statearr_30792_33148[(2)] = inst_30728);

(statearr_30792_33148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (8))){
var inst_30714 = cljs.core.async.close_BANG_(to);
var state_30745__$1 = state_30745;
var statearr_30793_33151 = state_30745__$1;
(statearr_30793_33151[(2)] = inst_30714);

(statearr_30793_33151[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0 = (function (){
var statearr_30794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30794[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__);

(statearr_30794[(1)] = (1));

return statearr_30794;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1 = (function (state_30745){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30745);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30795){var ex__29805__auto__ = e30795;
var statearr_30796_33155 = state_30745;
(statearr_30796_33155[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30745[(4)]))){
var statearr_30798_33156 = state_30745;
(statearr_30798_33156[(1)] = cljs.core.first((state_30745[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33160 = state_30745;
state_30745 = G__33160;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__ = function(state_30745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1.call(this,state_30745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29802__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_30800 = f__30134__auto__();
(statearr_30800[(6)] = c__30133__auto__);

return statearr_30800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));

return c__30133__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30802 = arguments.length;
switch (G__30802) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30806 = arguments.length;
switch (G__30806) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__30812 = arguments.length;
switch (G__30812) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30133__auto___33171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_30851){
var state_val_30852 = (state_30851[(1)]);
if((state_val_30852 === (7))){
var inst_30844 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30857_33172 = state_30851__$1;
(statearr_30857_33172[(2)] = inst_30844);

(statearr_30857_33172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (1))){
var state_30851__$1 = state_30851;
var statearr_30858_33182 = state_30851__$1;
(statearr_30858_33182[(2)] = null);

(statearr_30858_33182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (4))){
var inst_30819 = (state_30851[(7)]);
var inst_30819__$1 = (state_30851[(2)]);
var inst_30820 = (inst_30819__$1 == null);
var state_30851__$1 = (function (){var statearr_30859 = state_30851;
(statearr_30859[(7)] = inst_30819__$1);

return statearr_30859;
})();
if(cljs.core.truth_(inst_30820)){
var statearr_30860_33208 = state_30851__$1;
(statearr_30860_33208[(1)] = (5));

} else {
var statearr_30861_33209 = state_30851__$1;
(statearr_30861_33209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (13))){
var state_30851__$1 = state_30851;
var statearr_30862_33212 = state_30851__$1;
(statearr_30862_33212[(2)] = null);

(statearr_30862_33212[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (6))){
var inst_30819 = (state_30851[(7)]);
var inst_30826 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_30819) : p.call(null,inst_30819));
var state_30851__$1 = state_30851;
if(cljs.core.truth_(inst_30826)){
var statearr_30863_33215 = state_30851__$1;
(statearr_30863_33215[(1)] = (9));

} else {
var statearr_30864_33224 = state_30851__$1;
(statearr_30864_33224[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (3))){
var inst_30846 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30851__$1,inst_30846);
} else {
if((state_val_30852 === (12))){
var state_30851__$1 = state_30851;
var statearr_30865_33283 = state_30851__$1;
(statearr_30865_33283[(2)] = null);

(statearr_30865_33283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (2))){
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30851__$1,(4),ch);
} else {
if((state_val_30852 === (11))){
var inst_30819 = (state_30851[(7)]);
var inst_30831 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30851__$1,(8),inst_30831,inst_30819);
} else {
if((state_val_30852 === (9))){
var state_30851__$1 = state_30851;
var statearr_30870_33284 = state_30851__$1;
(statearr_30870_33284[(2)] = tc);

(statearr_30870_33284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (5))){
var inst_30822 = cljs.core.async.close_BANG_(tc);
var inst_30823 = cljs.core.async.close_BANG_(fc);
var state_30851__$1 = (function (){var statearr_30871 = state_30851;
(statearr_30871[(8)] = inst_30822);

return statearr_30871;
})();
var statearr_30872_33353 = state_30851__$1;
(statearr_30872_33353[(2)] = inst_30823);

(statearr_30872_33353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (14))){
var inst_30842 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30873_33354 = state_30851__$1;
(statearr_30873_33354[(2)] = inst_30842);

(statearr_30873_33354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (10))){
var state_30851__$1 = state_30851;
var statearr_30874_33355 = state_30851__$1;
(statearr_30874_33355[(2)] = fc);

(statearr_30874_33355[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (8))){
var inst_30833 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
if(cljs.core.truth_(inst_30833)){
var statearr_30875_33356 = state_30851__$1;
(statearr_30875_33356[(1)] = (12));

} else {
var statearr_30876_33357 = state_30851__$1;
(statearr_30876_33357[(1)] = (13));

}

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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_30877 = [null,null,null,null,null,null,null,null,null];
(statearr_30877[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_30877[(1)] = (1));

return statearr_30877;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_30851){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30851);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30878){var ex__29805__auto__ = e30878;
var statearr_30879_33358 = state_30851;
(statearr_30879_33358[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30851[(4)]))){
var statearr_30880_33359 = state_30851;
(statearr_30880_33359[(1)] = cljs.core.first((state_30851[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33360 = state_30851;
state_30851 = G__33360;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_30851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_30851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_30887 = f__30134__auto__();
(statearr_30887[(6)] = c__30133__auto___33171);

return statearr_30887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_30909){
var state_val_30910 = (state_30909[(1)]);
if((state_val_30910 === (7))){
var inst_30905 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30911_33361 = state_30909__$1;
(statearr_30911_33361[(2)] = inst_30905);

(statearr_30911_33361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (1))){
var inst_30888 = init;
var inst_30889 = inst_30888;
var state_30909__$1 = (function (){var statearr_30912 = state_30909;
(statearr_30912[(7)] = inst_30889);

return statearr_30912;
})();
var statearr_30913_33362 = state_30909__$1;
(statearr_30913_33362[(2)] = null);

(statearr_30913_33362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (4))){
var inst_30892 = (state_30909[(8)]);
var inst_30892__$1 = (state_30909[(2)]);
var inst_30893 = (inst_30892__$1 == null);
var state_30909__$1 = (function (){var statearr_30914 = state_30909;
(statearr_30914[(8)] = inst_30892__$1);

return statearr_30914;
})();
if(cljs.core.truth_(inst_30893)){
var statearr_30915_33373 = state_30909__$1;
(statearr_30915_33373[(1)] = (5));

} else {
var statearr_30916_33374 = state_30909__$1;
(statearr_30916_33374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (6))){
var inst_30889 = (state_30909[(7)]);
var inst_30892 = (state_30909[(8)]);
var inst_30896 = (state_30909[(9)]);
var inst_30896__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_30889,inst_30892) : f.call(null,inst_30889,inst_30892));
var inst_30897 = cljs.core.reduced_QMARK_(inst_30896__$1);
var state_30909__$1 = (function (){var statearr_30917 = state_30909;
(statearr_30917[(9)] = inst_30896__$1);

return statearr_30917;
})();
if(inst_30897){
var statearr_30918_33375 = state_30909__$1;
(statearr_30918_33375[(1)] = (8));

} else {
var statearr_30919_33376 = state_30909__$1;
(statearr_30919_33376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (3))){
var inst_30907 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30909__$1,inst_30907);
} else {
if((state_val_30910 === (2))){
var state_30909__$1 = state_30909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30909__$1,(4),ch);
} else {
if((state_val_30910 === (9))){
var inst_30896 = (state_30909[(9)]);
var inst_30889 = inst_30896;
var state_30909__$1 = (function (){var statearr_30920 = state_30909;
(statearr_30920[(7)] = inst_30889);

return statearr_30920;
})();
var statearr_30921_33380 = state_30909__$1;
(statearr_30921_33380[(2)] = null);

(statearr_30921_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (5))){
var inst_30889 = (state_30909[(7)]);
var state_30909__$1 = state_30909;
var statearr_30922_33381 = state_30909__$1;
(statearr_30922_33381[(2)] = inst_30889);

(statearr_30922_33381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (10))){
var inst_30903 = (state_30909[(2)]);
var state_30909__$1 = state_30909;
var statearr_30923_33382 = state_30909__$1;
(statearr_30923_33382[(2)] = inst_30903);

(statearr_30923_33382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30910 === (8))){
var inst_30896 = (state_30909[(9)]);
var inst_30899 = cljs.core.deref(inst_30896);
var state_30909__$1 = state_30909;
var statearr_30925_33513 = state_30909__$1;
(statearr_30925_33513[(2)] = inst_30899);

(statearr_30925_33513[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__29802__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29802__auto____0 = (function (){
var statearr_30932 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30932[(0)] = cljs$core$async$reduce_$_state_machine__29802__auto__);

(statearr_30932[(1)] = (1));

return statearr_30932;
});
var cljs$core$async$reduce_$_state_machine__29802__auto____1 = (function (state_30909){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30909);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30933){var ex__29805__auto__ = e30933;
var statearr_30934_33514 = state_30909;
(statearr_30934_33514[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30909[(4)]))){
var statearr_30935_33515 = state_30909;
(statearr_30935_33515[(1)] = cljs.core.first((state_30909[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33521 = state_30909;
state_30909 = G__33521;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29802__auto__ = function(state_30909){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29802__auto____1.call(this,state_30909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29802__auto____0;
cljs$core$async$reduce_$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29802__auto____1;
return cljs$core$async$reduce_$_state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_30936 = f__30134__auto__();
(statearr_30936[(6)] = c__30133__auto__);

return statearr_30936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));

return c__30133__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_30948){
var state_val_30949 = (state_30948[(1)]);
if((state_val_30949 === (1))){
var inst_30943 = cljs.core.async.reduce(f__$1,init,ch);
var state_30948__$1 = state_30948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30948__$1,(2),inst_30943);
} else {
if((state_val_30949 === (2))){
var inst_30945 = (state_30948[(2)]);
var inst_30946 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_30945) : f__$1.call(null,inst_30945));
var state_30948__$1 = state_30948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30948__$1,inst_30946);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__29802__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29802__auto____0 = (function (){
var statearr_30962 = [null,null,null,null,null,null,null];
(statearr_30962[(0)] = cljs$core$async$transduce_$_state_machine__29802__auto__);

(statearr_30962[(1)] = (1));

return statearr_30962;
});
var cljs$core$async$transduce_$_state_machine__29802__auto____1 = (function (state_30948){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_30948);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e30963){var ex__29805__auto__ = e30963;
var statearr_30964_33527 = state_30948;
(statearr_30964_33527[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_30948[(4)]))){
var statearr_30965_33529 = state_30948;
(statearr_30965_33529[(1)] = cljs.core.first((state_30948[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33530 = state_30948;
state_30948 = G__33530;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29802__auto__ = function(state_30948){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29802__auto____1.call(this,state_30948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29802__auto____0;
cljs$core$async$transduce_$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29802__auto____1;
return cljs$core$async$transduce_$_state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_30966 = f__30134__auto__();
(statearr_30966[(6)] = c__30133__auto__);

return statearr_30966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));

return c__30133__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__30968 = arguments.length;
switch (G__30968) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_31000){
var state_val_31001 = (state_31000[(1)]);
if((state_val_31001 === (7))){
var inst_30981 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
var statearr_31002_33535 = state_31000__$1;
(statearr_31002_33535[(2)] = inst_30981);

(statearr_31002_33535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (1))){
var inst_30969 = cljs.core.seq(coll);
var inst_30973 = inst_30969;
var state_31000__$1 = (function (){var statearr_31003 = state_31000;
(statearr_31003[(7)] = inst_30973);

return statearr_31003;
})();
var statearr_31004_33536 = state_31000__$1;
(statearr_31004_33536[(2)] = null);

(statearr_31004_33536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (4))){
var inst_30973 = (state_31000[(7)]);
var inst_30979 = cljs.core.first(inst_30973);
var state_31000__$1 = state_31000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31000__$1,(7),ch,inst_30979);
} else {
if((state_val_31001 === (13))){
var inst_30994 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
var statearr_31005_33537 = state_31000__$1;
(statearr_31005_33537[(2)] = inst_30994);

(statearr_31005_33537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (6))){
var inst_30984 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
if(cljs.core.truth_(inst_30984)){
var statearr_31006_33538 = state_31000__$1;
(statearr_31006_33538[(1)] = (8));

} else {
var statearr_31007_33539 = state_31000__$1;
(statearr_31007_33539[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (3))){
var inst_30998 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31000__$1,inst_30998);
} else {
if((state_val_31001 === (12))){
var state_31000__$1 = state_31000;
var statearr_31009_33540 = state_31000__$1;
(statearr_31009_33540[(2)] = null);

(statearr_31009_33540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (2))){
var inst_30973 = (state_31000[(7)]);
var state_31000__$1 = state_31000;
if(cljs.core.truth_(inst_30973)){
var statearr_31010_33541 = state_31000__$1;
(statearr_31010_33541[(1)] = (4));

} else {
var statearr_31011_33542 = state_31000__$1;
(statearr_31011_33542[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (11))){
var inst_30991 = cljs.core.async.close_BANG_(ch);
var state_31000__$1 = state_31000;
var statearr_31012_33543 = state_31000__$1;
(statearr_31012_33543[(2)] = inst_30991);

(statearr_31012_33543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (9))){
var state_31000__$1 = state_31000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31013_33544 = state_31000__$1;
(statearr_31013_33544[(1)] = (11));

} else {
var statearr_31014_33545 = state_31000__$1;
(statearr_31014_33545[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (5))){
var inst_30973 = (state_31000[(7)]);
var state_31000__$1 = state_31000;
var statearr_31015_33546 = state_31000__$1;
(statearr_31015_33546[(2)] = inst_30973);

(statearr_31015_33546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (10))){
var inst_30996 = (state_31000[(2)]);
var state_31000__$1 = state_31000;
var statearr_31016_33547 = state_31000__$1;
(statearr_31016_33547[(2)] = inst_30996);

(statearr_31016_33547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31001 === (8))){
var inst_30973 = (state_31000[(7)]);
var inst_30987 = cljs.core.next(inst_30973);
var inst_30973__$1 = inst_30987;
var state_31000__$1 = (function (){var statearr_31017 = state_31000;
(statearr_31017[(7)] = inst_30973__$1);

return statearr_31017;
})();
var statearr_31018_33548 = state_31000__$1;
(statearr_31018_33548[(2)] = null);

(statearr_31018_33548[(1)] = (2));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_31020 = [null,null,null,null,null,null,null,null];
(statearr_31020[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_31020[(1)] = (1));

return statearr_31020;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_31000){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_31000);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e31021){var ex__29805__auto__ = e31021;
var statearr_31022_33550 = state_31000;
(statearr_31022_33550[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_31000[(4)]))){
var statearr_31023_33551 = state_31000;
(statearr_31023_33551[(1)] = cljs.core.first((state_31000[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33553 = state_31000;
state_31000 = G__33553;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_31000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_31000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_31025 = f__30134__auto__();
(statearr_31025[(6)] = c__30133__auto__);

return statearr_31025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));

return c__30133__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31029 = arguments.length;
switch (G__31029) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33563 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33563(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33564 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33564(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33569 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33569(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33571 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33571(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31055 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31055 = (function (ch,cs,meta31056){
this.ch = ch;
this.cs = cs;
this.meta31056 = meta31056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31057,meta31056__$1){
var self__ = this;
var _31057__$1 = this;
return (new cljs.core.async.t_cljs$core$async31055(self__.ch,self__.cs,meta31056__$1));
}));

(cljs.core.async.t_cljs$core$async31055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31057){
var self__ = this;
var _31057__$1 = this;
return self__.meta31056;
}));

(cljs.core.async.t_cljs$core$async31055.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31055.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31055.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31055.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31055.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31055.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31056","meta31056",466075088,null)], null);
}));

(cljs.core.async.t_cljs$core$async31055.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31055.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31055");

(cljs.core.async.t_cljs$core$async31055.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31055");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31055.
 */
cljs.core.async.__GT_t_cljs$core$async31055 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31055(ch__$1,cs__$1,meta31056){
return (new cljs.core.async.t_cljs$core$async31055(ch__$1,cs__$1,meta31056));
});

}

return (new cljs.core.async.t_cljs$core$async31055(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30133__auto___33575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_31218){
var state_val_31219 = (state_31218[(1)]);
if((state_val_31219 === (7))){
var inst_31214 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31220_33576 = state_31218__$1;
(statearr_31220_33576[(2)] = inst_31214);

(statearr_31220_33576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (20))){
var inst_31093 = (state_31218[(7)]);
var inst_31109 = cljs.core.first(inst_31093);
var inst_31110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31109,(0),null);
var inst_31111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31109,(1),null);
var state_31218__$1 = (function (){var statearr_31221 = state_31218;
(statearr_31221[(8)] = inst_31110);

return statearr_31221;
})();
if(cljs.core.truth_(inst_31111)){
var statearr_31222_33579 = state_31218__$1;
(statearr_31222_33579[(1)] = (22));

} else {
var statearr_31223_33581 = state_31218__$1;
(statearr_31223_33581[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (27))){
var inst_31143 = (state_31218[(9)]);
var inst_31062 = (state_31218[(10)]);
var inst_31148 = (state_31218[(11)]);
var inst_31141 = (state_31218[(12)]);
var inst_31148__$1 = cljs.core._nth(inst_31141,inst_31143);
var inst_31149 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31148__$1,inst_31062,done);
var state_31218__$1 = (function (){var statearr_31226 = state_31218;
(statearr_31226[(11)] = inst_31148__$1);

return statearr_31226;
})();
if(cljs.core.truth_(inst_31149)){
var statearr_31227_33587 = state_31218__$1;
(statearr_31227_33587[(1)] = (30));

} else {
var statearr_31228_33588 = state_31218__$1;
(statearr_31228_33588[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (1))){
var state_31218__$1 = state_31218;
var statearr_31230_33593 = state_31218__$1;
(statearr_31230_33593[(2)] = null);

(statearr_31230_33593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (24))){
var inst_31093 = (state_31218[(7)]);
var inst_31118 = (state_31218[(2)]);
var inst_31119 = cljs.core.next(inst_31093);
var inst_31071 = inst_31119;
var inst_31072 = null;
var inst_31073 = (0);
var inst_31074 = (0);
var state_31218__$1 = (function (){var statearr_31232 = state_31218;
(statearr_31232[(13)] = inst_31118);

(statearr_31232[(14)] = inst_31072);

(statearr_31232[(15)] = inst_31071);

(statearr_31232[(16)] = inst_31074);

(statearr_31232[(17)] = inst_31073);

return statearr_31232;
})();
var statearr_31233_33600 = state_31218__$1;
(statearr_31233_33600[(2)] = null);

(statearr_31233_33600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (39))){
var state_31218__$1 = state_31218;
var statearr_31237_33605 = state_31218__$1;
(statearr_31237_33605[(2)] = null);

(statearr_31237_33605[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (4))){
var inst_31062 = (state_31218[(10)]);
var inst_31062__$1 = (state_31218[(2)]);
var inst_31063 = (inst_31062__$1 == null);
var state_31218__$1 = (function (){var statearr_31238 = state_31218;
(statearr_31238[(10)] = inst_31062__$1);

return statearr_31238;
})();
if(cljs.core.truth_(inst_31063)){
var statearr_31239_33610 = state_31218__$1;
(statearr_31239_33610[(1)] = (5));

} else {
var statearr_31240_33615 = state_31218__$1;
(statearr_31240_33615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (15))){
var inst_31072 = (state_31218[(14)]);
var inst_31071 = (state_31218[(15)]);
var inst_31074 = (state_31218[(16)]);
var inst_31073 = (state_31218[(17)]);
var inst_31089 = (state_31218[(2)]);
var inst_31090 = (inst_31074 + (1));
var tmp31234 = inst_31072;
var tmp31235 = inst_31071;
var tmp31236 = inst_31073;
var inst_31071__$1 = tmp31235;
var inst_31072__$1 = tmp31234;
var inst_31073__$1 = tmp31236;
var inst_31074__$1 = inst_31090;
var state_31218__$1 = (function (){var statearr_31249 = state_31218;
(statearr_31249[(14)] = inst_31072__$1);

(statearr_31249[(15)] = inst_31071__$1);

(statearr_31249[(18)] = inst_31089);

(statearr_31249[(16)] = inst_31074__$1);

(statearr_31249[(17)] = inst_31073__$1);

return statearr_31249;
})();
var statearr_31261_33624 = state_31218__$1;
(statearr_31261_33624[(2)] = null);

(statearr_31261_33624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (21))){
var inst_31122 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31269_33629 = state_31218__$1;
(statearr_31269_33629[(2)] = inst_31122);

(statearr_31269_33629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (31))){
var inst_31148 = (state_31218[(11)]);
var inst_31154 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31148);
var state_31218__$1 = state_31218;
var statearr_31270_34029 = state_31218__$1;
(statearr_31270_34029[(2)] = inst_31154);

(statearr_31270_34029[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (32))){
var inst_31140 = (state_31218[(19)]);
var inst_31143 = (state_31218[(9)]);
var inst_31141 = (state_31218[(12)]);
var inst_31142 = (state_31218[(20)]);
var inst_31156 = (state_31218[(2)]);
var inst_31157 = (inst_31143 + (1));
var tmp31266 = inst_31140;
var tmp31267 = inst_31141;
var tmp31268 = inst_31142;
var inst_31140__$1 = tmp31266;
var inst_31141__$1 = tmp31267;
var inst_31142__$1 = tmp31268;
var inst_31143__$1 = inst_31157;
var state_31218__$1 = (function (){var statearr_31271 = state_31218;
(statearr_31271[(19)] = inst_31140__$1);

(statearr_31271[(9)] = inst_31143__$1);

(statearr_31271[(21)] = inst_31156);

(statearr_31271[(12)] = inst_31141__$1);

(statearr_31271[(20)] = inst_31142__$1);

return statearr_31271;
})();
var statearr_31277_34030 = state_31218__$1;
(statearr_31277_34030[(2)] = null);

(statearr_31277_34030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (40))){
var inst_31181 = (state_31218[(22)]);
var inst_31187 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31181);
var state_31218__$1 = state_31218;
var statearr_31302_34031 = state_31218__$1;
(statearr_31302_34031[(2)] = inst_31187);

(statearr_31302_34031[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (33))){
var inst_31162 = (state_31218[(23)]);
var inst_31165 = cljs.core.chunked_seq_QMARK_(inst_31162);
var state_31218__$1 = state_31218;
if(inst_31165){
var statearr_31303_34032 = state_31218__$1;
(statearr_31303_34032[(1)] = (36));

} else {
var statearr_31304_34033 = state_31218__$1;
(statearr_31304_34033[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (13))){
var inst_31083 = (state_31218[(24)]);
var inst_31086 = cljs.core.async.close_BANG_(inst_31083);
var state_31218__$1 = state_31218;
var statearr_31308_34034 = state_31218__$1;
(statearr_31308_34034[(2)] = inst_31086);

(statearr_31308_34034[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (22))){
var inst_31110 = (state_31218[(8)]);
var inst_31115 = cljs.core.async.close_BANG_(inst_31110);
var state_31218__$1 = state_31218;
var statearr_31309_34035 = state_31218__$1;
(statearr_31309_34035[(2)] = inst_31115);

(statearr_31309_34035[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (36))){
var inst_31162 = (state_31218[(23)]);
var inst_31167 = cljs.core.chunk_first(inst_31162);
var inst_31172 = cljs.core.chunk_rest(inst_31162);
var inst_31173 = cljs.core.count(inst_31167);
var inst_31140 = inst_31172;
var inst_31141 = inst_31167;
var inst_31142 = inst_31173;
var inst_31143 = (0);
var state_31218__$1 = (function (){var statearr_31310 = state_31218;
(statearr_31310[(19)] = inst_31140);

(statearr_31310[(9)] = inst_31143);

(statearr_31310[(12)] = inst_31141);

(statearr_31310[(20)] = inst_31142);

return statearr_31310;
})();
var statearr_31318_34036 = state_31218__$1;
(statearr_31318_34036[(2)] = null);

(statearr_31318_34036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (41))){
var inst_31162 = (state_31218[(23)]);
var inst_31189 = (state_31218[(2)]);
var inst_31190 = cljs.core.next(inst_31162);
var inst_31140 = inst_31190;
var inst_31141 = null;
var inst_31142 = (0);
var inst_31143 = (0);
var state_31218__$1 = (function (){var statearr_31336 = state_31218;
(statearr_31336[(19)] = inst_31140);

(statearr_31336[(9)] = inst_31143);

(statearr_31336[(25)] = inst_31189);

(statearr_31336[(12)] = inst_31141);

(statearr_31336[(20)] = inst_31142);

return statearr_31336;
})();
var statearr_31337_34037 = state_31218__$1;
(statearr_31337_34037[(2)] = null);

(statearr_31337_34037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (43))){
var state_31218__$1 = state_31218;
var statearr_31338_34038 = state_31218__$1;
(statearr_31338_34038[(2)] = null);

(statearr_31338_34038[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (29))){
var inst_31202 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31349_34039 = state_31218__$1;
(statearr_31349_34039[(2)] = inst_31202);

(statearr_31349_34039[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (44))){
var inst_31211 = (state_31218[(2)]);
var state_31218__$1 = (function (){var statearr_31361 = state_31218;
(statearr_31361[(26)] = inst_31211);

return statearr_31361;
})();
var statearr_31377_34040 = state_31218__$1;
(statearr_31377_34040[(2)] = null);

(statearr_31377_34040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (6))){
var inst_31132 = (state_31218[(27)]);
var inst_31131 = cljs.core.deref(cs);
var inst_31132__$1 = cljs.core.keys(inst_31131);
var inst_31133 = cljs.core.count(inst_31132__$1);
var inst_31134 = cljs.core.reset_BANG_(dctr,inst_31133);
var inst_31139 = cljs.core.seq(inst_31132__$1);
var inst_31140 = inst_31139;
var inst_31141 = null;
var inst_31142 = (0);
var inst_31143 = (0);
var state_31218__$1 = (function (){var statearr_31391 = state_31218;
(statearr_31391[(19)] = inst_31140);

(statearr_31391[(9)] = inst_31143);

(statearr_31391[(27)] = inst_31132__$1);

(statearr_31391[(28)] = inst_31134);

(statearr_31391[(12)] = inst_31141);

(statearr_31391[(20)] = inst_31142);

return statearr_31391;
})();
var statearr_31392_34041 = state_31218__$1;
(statearr_31392_34041[(2)] = null);

(statearr_31392_34041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (28))){
var inst_31162 = (state_31218[(23)]);
var inst_31140 = (state_31218[(19)]);
var inst_31162__$1 = cljs.core.seq(inst_31140);
var state_31218__$1 = (function (){var statearr_31393 = state_31218;
(statearr_31393[(23)] = inst_31162__$1);

return statearr_31393;
})();
if(inst_31162__$1){
var statearr_31394_34046 = state_31218__$1;
(statearr_31394_34046[(1)] = (33));

} else {
var statearr_31397_34047 = state_31218__$1;
(statearr_31397_34047[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (25))){
var inst_31143 = (state_31218[(9)]);
var inst_31142 = (state_31218[(20)]);
var inst_31145 = (inst_31143 < inst_31142);
var inst_31146 = inst_31145;
var state_31218__$1 = state_31218;
if(cljs.core.truth_(inst_31146)){
var statearr_31398_34048 = state_31218__$1;
(statearr_31398_34048[(1)] = (27));

} else {
var statearr_31399_34049 = state_31218__$1;
(statearr_31399_34049[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (34))){
var state_31218__$1 = state_31218;
var statearr_31401_34050 = state_31218__$1;
(statearr_31401_34050[(2)] = null);

(statearr_31401_34050[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (17))){
var state_31218__$1 = state_31218;
var statearr_31405_34051 = state_31218__$1;
(statearr_31405_34051[(2)] = null);

(statearr_31405_34051[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (3))){
var inst_31216 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31218__$1,inst_31216);
} else {
if((state_val_31219 === (12))){
var inst_31127 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31406_34052 = state_31218__$1;
(statearr_31406_34052[(2)] = inst_31127);

(statearr_31406_34052[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (2))){
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31218__$1,(4),ch);
} else {
if((state_val_31219 === (23))){
var state_31218__$1 = state_31218;
var statearr_31420_34053 = state_31218__$1;
(statearr_31420_34053[(2)] = null);

(statearr_31420_34053[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (35))){
var inst_31200 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31507_34054 = state_31218__$1;
(statearr_31507_34054[(2)] = inst_31200);

(statearr_31507_34054[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (19))){
var inst_31093 = (state_31218[(7)]);
var inst_31097 = cljs.core.chunk_first(inst_31093);
var inst_31098 = cljs.core.chunk_rest(inst_31093);
var inst_31099 = cljs.core.count(inst_31097);
var inst_31071 = inst_31098;
var inst_31072 = inst_31097;
var inst_31073 = inst_31099;
var inst_31074 = (0);
var state_31218__$1 = (function (){var statearr_31511 = state_31218;
(statearr_31511[(14)] = inst_31072);

(statearr_31511[(15)] = inst_31071);

(statearr_31511[(16)] = inst_31074);

(statearr_31511[(17)] = inst_31073);

return statearr_31511;
})();
var statearr_31512_34055 = state_31218__$1;
(statearr_31512_34055[(2)] = null);

(statearr_31512_34055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (11))){
var inst_31071 = (state_31218[(15)]);
var inst_31093 = (state_31218[(7)]);
var inst_31093__$1 = cljs.core.seq(inst_31071);
var state_31218__$1 = (function (){var statearr_31521 = state_31218;
(statearr_31521[(7)] = inst_31093__$1);

return statearr_31521;
})();
if(inst_31093__$1){
var statearr_31522_34059 = state_31218__$1;
(statearr_31522_34059[(1)] = (16));

} else {
var statearr_31523_34060 = state_31218__$1;
(statearr_31523_34060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (9))){
var inst_31129 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31524_34061 = state_31218__$1;
(statearr_31524_34061[(2)] = inst_31129);

(statearr_31524_34061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (5))){
var inst_31069 = cljs.core.deref(cs);
var inst_31070 = cljs.core.seq(inst_31069);
var inst_31071 = inst_31070;
var inst_31072 = null;
var inst_31073 = (0);
var inst_31074 = (0);
var state_31218__$1 = (function (){var statearr_31525 = state_31218;
(statearr_31525[(14)] = inst_31072);

(statearr_31525[(15)] = inst_31071);

(statearr_31525[(16)] = inst_31074);

(statearr_31525[(17)] = inst_31073);

return statearr_31525;
})();
var statearr_31526_34062 = state_31218__$1;
(statearr_31526_34062[(2)] = null);

(statearr_31526_34062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (14))){
var state_31218__$1 = state_31218;
var statearr_31527_34063 = state_31218__$1;
(statearr_31527_34063[(2)] = null);

(statearr_31527_34063[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (45))){
var inst_31208 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31528_34064 = state_31218__$1;
(statearr_31528_34064[(2)] = inst_31208);

(statearr_31528_34064[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (26))){
var inst_31132 = (state_31218[(27)]);
var inst_31204 = (state_31218[(2)]);
var inst_31205 = cljs.core.seq(inst_31132);
var state_31218__$1 = (function (){var statearr_31529 = state_31218;
(statearr_31529[(29)] = inst_31204);

return statearr_31529;
})();
if(inst_31205){
var statearr_31530_34065 = state_31218__$1;
(statearr_31530_34065[(1)] = (42));

} else {
var statearr_31531_34066 = state_31218__$1;
(statearr_31531_34066[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (16))){
var inst_31093 = (state_31218[(7)]);
var inst_31095 = cljs.core.chunked_seq_QMARK_(inst_31093);
var state_31218__$1 = state_31218;
if(inst_31095){
var statearr_31532_34069 = state_31218__$1;
(statearr_31532_34069[(1)] = (19));

} else {
var statearr_31533_34071 = state_31218__$1;
(statearr_31533_34071[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (38))){
var inst_31197 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31534_34072 = state_31218__$1;
(statearr_31534_34072[(2)] = inst_31197);

(statearr_31534_34072[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (30))){
var state_31218__$1 = state_31218;
var statearr_31535_34077 = state_31218__$1;
(statearr_31535_34077[(2)] = null);

(statearr_31535_34077[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (10))){
var inst_31072 = (state_31218[(14)]);
var inst_31074 = (state_31218[(16)]);
var inst_31082 = cljs.core._nth(inst_31072,inst_31074);
var inst_31083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31082,(0),null);
var inst_31084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31082,(1),null);
var state_31218__$1 = (function (){var statearr_31536 = state_31218;
(statearr_31536[(24)] = inst_31083);

return statearr_31536;
})();
if(cljs.core.truth_(inst_31084)){
var statearr_31537_34082 = state_31218__$1;
(statearr_31537_34082[(1)] = (13));

} else {
var statearr_31538_34085 = state_31218__$1;
(statearr_31538_34085[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (18))){
var inst_31125 = (state_31218[(2)]);
var state_31218__$1 = state_31218;
var statearr_31543_34089 = state_31218__$1;
(statearr_31543_34089[(2)] = inst_31125);

(statearr_31543_34089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (42))){
var state_31218__$1 = state_31218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31218__$1,(45),dchan);
} else {
if((state_val_31219 === (37))){
var inst_31162 = (state_31218[(23)]);
var inst_31181 = (state_31218[(22)]);
var inst_31062 = (state_31218[(10)]);
var inst_31181__$1 = cljs.core.first(inst_31162);
var inst_31183 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31181__$1,inst_31062,done);
var state_31218__$1 = (function (){var statearr_31549 = state_31218;
(statearr_31549[(22)] = inst_31181__$1);

return statearr_31549;
})();
if(cljs.core.truth_(inst_31183)){
var statearr_31550_34090 = state_31218__$1;
(statearr_31550_34090[(1)] = (39));

} else {
var statearr_31551_34094 = state_31218__$1;
(statearr_31551_34094[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31219 === (8))){
var inst_31074 = (state_31218[(16)]);
var inst_31073 = (state_31218[(17)]);
var inst_31076 = (inst_31074 < inst_31073);
var inst_31077 = inst_31076;
var state_31218__$1 = state_31218;
if(cljs.core.truth_(inst_31077)){
var statearr_31556_34095 = state_31218__$1;
(statearr_31556_34095[(1)] = (10));

} else {
var statearr_31557_34096 = state_31218__$1;
(statearr_31557_34096[(1)] = (11));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__29802__auto__ = null;
var cljs$core$async$mult_$_state_machine__29802__auto____0 = (function (){
var statearr_31558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31558[(0)] = cljs$core$async$mult_$_state_machine__29802__auto__);

(statearr_31558[(1)] = (1));

return statearr_31558;
});
var cljs$core$async$mult_$_state_machine__29802__auto____1 = (function (state_31218){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_31218);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e31559){var ex__29805__auto__ = e31559;
var statearr_31560_34098 = state_31218;
(statearr_31560_34098[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_31218[(4)]))){
var statearr_31561_34099 = state_31218;
(statearr_31561_34099[(1)] = cljs.core.first((state_31218[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34101 = state_31218;
state_31218 = G__34101;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29802__auto__ = function(state_31218){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29802__auto____1.call(this,state_31218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29802__auto____0;
cljs$core$async$mult_$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29802__auto____1;
return cljs$core$async$mult_$_state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_31562 = f__30134__auto__();
(statearr_31562[(6)] = c__30133__auto___33575);

return statearr_31562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31564 = arguments.length;
switch (G__31564) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34106 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34106(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34107 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34107(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34108 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34108(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34109 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34109(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34111 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34111(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34115 = arguments.length;
var i__4865__auto___34116 = (0);
while(true){
if((i__4865__auto___34116 < len__4864__auto___34115)){
args__4870__auto__.push((arguments[i__4865__auto___34116]));

var G__34117 = (i__4865__auto___34116 + (1));
i__4865__auto___34116 = G__34117;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31580){
var map__31581 = p__31580;
var map__31581__$1 = cljs.core.__destructure_map(map__31581);
var opts = map__31581__$1;
var statearr_31582_34118 = state;
(statearr_31582_34118[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31583_34119 = state;
(statearr_31583_34119[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31584_34120 = state;
(statearr_31584_34120[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31576){
var G__31577 = cljs.core.first(seq31576);
var seq31576__$1 = cljs.core.next(seq31576);
var G__31578 = cljs.core.first(seq31576__$1);
var seq31576__$2 = cljs.core.next(seq31576__$1);
var G__31579 = cljs.core.first(seq31576__$2);
var seq31576__$3 = cljs.core.next(seq31576__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31577,G__31578,G__31579,seq31576__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31607 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31607 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31608){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31608 = meta31608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31609,meta31608__$1){
var self__ = this;
var _31609__$1 = this;
return (new cljs.core.async.t_cljs$core$async31607(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31608__$1));
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31609){
var self__ = this;
var _31609__$1 = this;
return self__.meta31608;
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31607.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31608","meta31608",-1216968277,null)], null);
}));

(cljs.core.async.t_cljs$core$async31607.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31607");

(cljs.core.async.t_cljs$core$async31607.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31607");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31607.
 */
cljs.core.async.__GT_t_cljs$core$async31607 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31607(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31608){
return (new cljs.core.async.t_cljs$core$async31607(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31608));
});

}

return (new cljs.core.async.t_cljs$core$async31607(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30133__auto___34495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_31706){
var state_val_31707 = (state_31706[(1)]);
if((state_val_31707 === (7))){
var inst_31666 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31666)){
var statearr_31708_34496 = state_31706__$1;
(statearr_31708_34496[(1)] = (8));

} else {
var statearr_31709_34497 = state_31706__$1;
(statearr_31709_34497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (20))){
var inst_31656 = (state_31706[(7)]);
var state_31706__$1 = state_31706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31706__$1,(23),out,inst_31656);
} else {
if((state_val_31707 === (1))){
var inst_31639 = calc_state();
var inst_31640 = cljs.core.__destructure_map(inst_31639);
var inst_31641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31640,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31640,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31640,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31644 = inst_31639;
var state_31706__$1 = (function (){var statearr_31710 = state_31706;
(statearr_31710[(8)] = inst_31644);

(statearr_31710[(9)] = inst_31641);

(statearr_31710[(10)] = inst_31642);

(statearr_31710[(11)] = inst_31643);

return statearr_31710;
})();
var statearr_31711_34498 = state_31706__$1;
(statearr_31711_34498[(2)] = null);

(statearr_31711_34498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (24))){
var inst_31647 = (state_31706[(12)]);
var inst_31644 = inst_31647;
var state_31706__$1 = (function (){var statearr_31712 = state_31706;
(statearr_31712[(8)] = inst_31644);

return statearr_31712;
})();
var statearr_31713_34499 = state_31706__$1;
(statearr_31713_34499[(2)] = null);

(statearr_31713_34499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (4))){
var inst_31659 = (state_31706[(13)]);
var inst_31656 = (state_31706[(7)]);
var inst_31655 = (state_31706[(2)]);
var inst_31656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31655,(0),null);
var inst_31657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31655,(1),null);
var inst_31659__$1 = (inst_31656__$1 == null);
var state_31706__$1 = (function (){var statearr_31714 = state_31706;
(statearr_31714[(14)] = inst_31657);

(statearr_31714[(13)] = inst_31659__$1);

(statearr_31714[(7)] = inst_31656__$1);

return statearr_31714;
})();
if(cljs.core.truth_(inst_31659__$1)){
var statearr_31715_34500 = state_31706__$1;
(statearr_31715_34500[(1)] = (5));

} else {
var statearr_31716_34501 = state_31706__$1;
(statearr_31716_34501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (15))){
var inst_31648 = (state_31706[(15)]);
var inst_31680 = (state_31706[(16)]);
var inst_31680__$1 = cljs.core.empty_QMARK_(inst_31648);
var state_31706__$1 = (function (){var statearr_31717 = state_31706;
(statearr_31717[(16)] = inst_31680__$1);

return statearr_31717;
})();
if(inst_31680__$1){
var statearr_31718_34502 = state_31706__$1;
(statearr_31718_34502[(1)] = (17));

} else {
var statearr_31719_34503 = state_31706__$1;
(statearr_31719_34503[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (21))){
var inst_31647 = (state_31706[(12)]);
var inst_31644 = inst_31647;
var state_31706__$1 = (function (){var statearr_31720 = state_31706;
(statearr_31720[(8)] = inst_31644);

return statearr_31720;
})();
var statearr_31721_34505 = state_31706__$1;
(statearr_31721_34505[(2)] = null);

(statearr_31721_34505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (13))){
var inst_31673 = (state_31706[(2)]);
var inst_31674 = calc_state();
var inst_31644 = inst_31674;
var state_31706__$1 = (function (){var statearr_31722 = state_31706;
(statearr_31722[(8)] = inst_31644);

(statearr_31722[(17)] = inst_31673);

return statearr_31722;
})();
var statearr_31723_34509 = state_31706__$1;
(statearr_31723_34509[(2)] = null);

(statearr_31723_34509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (22))){
var inst_31700 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31724_34510 = state_31706__$1;
(statearr_31724_34510[(2)] = inst_31700);

(statearr_31724_34510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (6))){
var inst_31657 = (state_31706[(14)]);
var inst_31663 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31657,change);
var state_31706__$1 = state_31706;
var statearr_31725_34511 = state_31706__$1;
(statearr_31725_34511[(2)] = inst_31663);

(statearr_31725_34511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (25))){
var state_31706__$1 = state_31706;
var statearr_31726_34512 = state_31706__$1;
(statearr_31726_34512[(2)] = null);

(statearr_31726_34512[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (17))){
var inst_31657 = (state_31706[(14)]);
var inst_31649 = (state_31706[(18)]);
var inst_31682 = (inst_31649.cljs$core$IFn$_invoke$arity$1 ? inst_31649.cljs$core$IFn$_invoke$arity$1(inst_31657) : inst_31649.call(null,inst_31657));
var inst_31683 = cljs.core.not(inst_31682);
var state_31706__$1 = state_31706;
var statearr_31727_34513 = state_31706__$1;
(statearr_31727_34513[(2)] = inst_31683);

(statearr_31727_34513[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (3))){
var inst_31704 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31706__$1,inst_31704);
} else {
if((state_val_31707 === (12))){
var state_31706__$1 = state_31706;
var statearr_31728_34514 = state_31706__$1;
(statearr_31728_34514[(2)] = null);

(statearr_31728_34514[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (2))){
var inst_31644 = (state_31706[(8)]);
var inst_31647 = (state_31706[(12)]);
var inst_31647__$1 = cljs.core.__destructure_map(inst_31644);
var inst_31648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31647__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31647__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31647__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31706__$1 = (function (){var statearr_31729 = state_31706;
(statearr_31729[(18)] = inst_31649);

(statearr_31729[(12)] = inst_31647__$1);

(statearr_31729[(15)] = inst_31648);

return statearr_31729;
})();
return cljs.core.async.ioc_alts_BANG_(state_31706__$1,(4),inst_31650);
} else {
if((state_val_31707 === (23))){
var inst_31691 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31691)){
var statearr_31730_34523 = state_31706__$1;
(statearr_31730_34523[(1)] = (24));

} else {
var statearr_31731_34527 = state_31706__$1;
(statearr_31731_34527[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (19))){
var inst_31686 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31732_34532 = state_31706__$1;
(statearr_31732_34532[(2)] = inst_31686);

(statearr_31732_34532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (11))){
var inst_31657 = (state_31706[(14)]);
var inst_31670 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31657);
var state_31706__$1 = state_31706;
var statearr_31733_34536 = state_31706__$1;
(statearr_31733_34536[(2)] = inst_31670);

(statearr_31733_34536[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (9))){
var inst_31657 = (state_31706[(14)]);
var inst_31677 = (state_31706[(19)]);
var inst_31648 = (state_31706[(15)]);
var inst_31677__$1 = (inst_31648.cljs$core$IFn$_invoke$arity$1 ? inst_31648.cljs$core$IFn$_invoke$arity$1(inst_31657) : inst_31648.call(null,inst_31657));
var state_31706__$1 = (function (){var statearr_31734 = state_31706;
(statearr_31734[(19)] = inst_31677__$1);

return statearr_31734;
})();
if(cljs.core.truth_(inst_31677__$1)){
var statearr_31735_34546 = state_31706__$1;
(statearr_31735_34546[(1)] = (14));

} else {
var statearr_31736_34547 = state_31706__$1;
(statearr_31736_34547[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (5))){
var inst_31659 = (state_31706[(13)]);
var state_31706__$1 = state_31706;
var statearr_31737_34553 = state_31706__$1;
(statearr_31737_34553[(2)] = inst_31659);

(statearr_31737_34553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (14))){
var inst_31677 = (state_31706[(19)]);
var state_31706__$1 = state_31706;
var statearr_31738_34560 = state_31706__$1;
(statearr_31738_34560[(2)] = inst_31677);

(statearr_31738_34560[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (26))){
var inst_31696 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31739_34566 = state_31706__$1;
(statearr_31739_34566[(2)] = inst_31696);

(statearr_31739_34566[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (16))){
var inst_31688 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31688)){
var statearr_31740_34568 = state_31706__$1;
(statearr_31740_34568[(1)] = (20));

} else {
var statearr_31741_34569 = state_31706__$1;
(statearr_31741_34569[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (10))){
var inst_31702 = (state_31706[(2)]);
var state_31706__$1 = state_31706;
var statearr_31742_34570 = state_31706__$1;
(statearr_31742_34570[(2)] = inst_31702);

(statearr_31742_34570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (18))){
var inst_31680 = (state_31706[(16)]);
var state_31706__$1 = state_31706;
var statearr_31743_34571 = state_31706__$1;
(statearr_31743_34571[(2)] = inst_31680);

(statearr_31743_34571[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31707 === (8))){
var inst_31656 = (state_31706[(7)]);
var inst_31668 = (inst_31656 == null);
var state_31706__$1 = state_31706;
if(cljs.core.truth_(inst_31668)){
var statearr_31744_34572 = state_31706__$1;
(statearr_31744_34572[(1)] = (11));

} else {
var statearr_31745_34573 = state_31706__$1;
(statearr_31745_34573[(1)] = (12));

}

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__29802__auto__ = null;
var cljs$core$async$mix_$_state_machine__29802__auto____0 = (function (){
var statearr_31746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31746[(0)] = cljs$core$async$mix_$_state_machine__29802__auto__);

(statearr_31746[(1)] = (1));

return statearr_31746;
});
var cljs$core$async$mix_$_state_machine__29802__auto____1 = (function (state_31706){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_31706);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e31747){var ex__29805__auto__ = e31747;
var statearr_31748_34584 = state_31706;
(statearr_31748_34584[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_31706[(4)]))){
var statearr_31749_34586 = state_31706;
(statearr_31749_34586[(1)] = cljs.core.first((state_31706[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34588 = state_31706;
state_31706 = G__34588;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29802__auto__ = function(state_31706){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29802__auto____1.call(this,state_31706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29802__auto____0;
cljs$core$async$mix_$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29802__auto____1;
return cljs$core$async$mix_$_state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_31750 = f__30134__auto__();
(statearr_31750[(6)] = c__30133__auto___34495);

return statearr_31750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34600 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34600(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34619 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34619(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34621 = (function() {
var G__34622 = null;
var G__34622__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34622__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34622 = function(p,v){
switch(arguments.length){
case 1:
return G__34622__1.call(this,p);
case 2:
return G__34622__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34622.cljs$core$IFn$_invoke$arity$1 = G__34622__1;
G__34622.cljs$core$IFn$_invoke$arity$2 = G__34622__2;
return G__34622;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31775 = arguments.length;
switch (G__31775) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34621(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34621(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31801 = arguments.length;
switch (G__31801) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31790_SHARP_){
if(cljs.core.truth_((p1__31790_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31790_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31790_SHARP_.call(null,topic)))){
return p1__31790_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31790_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31824 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31825){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31825 = meta31825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31826,meta31825__$1){
var self__ = this;
var _31826__$1 = this;
return (new cljs.core.async.t_cljs$core$async31824(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31825__$1));
}));

(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31826){
var self__ = this;
var _31826__$1 = this;
return self__.meta31825;
}));

(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31824.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31825","meta31825",232311677,null)], null);
}));

(cljs.core.async.t_cljs$core$async31824.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31824");

(cljs.core.async.t_cljs$core$async31824.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async31824");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31824.
 */
cljs.core.async.__GT_t_cljs$core$async31824 = (function cljs$core$async$__GT_t_cljs$core$async31824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31825){
return (new cljs.core.async.t_cljs$core$async31824(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31825));
});

}

return (new cljs.core.async.t_cljs$core$async31824(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30133__auto___34706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_31939){
var state_val_31940 = (state_31939[(1)]);
if((state_val_31940 === (7))){
var inst_31933 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31945_34707 = state_31939__$1;
(statearr_31945_34707[(2)] = inst_31933);

(statearr_31945_34707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (20))){
var state_31939__$1 = state_31939;
var statearr_31948_34715 = state_31939__$1;
(statearr_31948_34715[(2)] = null);

(statearr_31948_34715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (1))){
var state_31939__$1 = state_31939;
var statearr_31953_34719 = state_31939__$1;
(statearr_31953_34719[(2)] = null);

(statearr_31953_34719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (24))){
var inst_31915 = (state_31939[(7)]);
var inst_31924 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31915);
var state_31939__$1 = state_31939;
var statearr_31956_34728 = state_31939__$1;
(statearr_31956_34728[(2)] = inst_31924);

(statearr_31956_34728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (4))){
var inst_31864 = (state_31939[(8)]);
var inst_31864__$1 = (state_31939[(2)]);
var inst_31865 = (inst_31864__$1 == null);
var state_31939__$1 = (function (){var statearr_31957 = state_31939;
(statearr_31957[(8)] = inst_31864__$1);

return statearr_31957;
})();
if(cljs.core.truth_(inst_31865)){
var statearr_31958_34793 = state_31939__$1;
(statearr_31958_34793[(1)] = (5));

} else {
var statearr_31959_34794 = state_31939__$1;
(statearr_31959_34794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (15))){
var inst_31909 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31960_34795 = state_31939__$1;
(statearr_31960_34795[(2)] = inst_31909);

(statearr_31960_34795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (21))){
var inst_31929 = (state_31939[(2)]);
var state_31939__$1 = (function (){var statearr_31961 = state_31939;
(statearr_31961[(9)] = inst_31929);

return statearr_31961;
})();
var statearr_31962_34796 = state_31939__$1;
(statearr_31962_34796[(2)] = null);

(statearr_31962_34796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (13))){
var inst_31888 = (state_31939[(10)]);
var inst_31890 = cljs.core.chunked_seq_QMARK_(inst_31888);
var state_31939__$1 = state_31939;
if(inst_31890){
var statearr_31963_34797 = state_31939__$1;
(statearr_31963_34797[(1)] = (16));

} else {
var statearr_31964_34798 = state_31939__$1;
(statearr_31964_34798[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (22))){
var inst_31921 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
if(cljs.core.truth_(inst_31921)){
var statearr_31965_34799 = state_31939__$1;
(statearr_31965_34799[(1)] = (23));

} else {
var statearr_31966_34800 = state_31939__$1;
(statearr_31966_34800[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (6))){
var inst_31864 = (state_31939[(8)]);
var inst_31915 = (state_31939[(7)]);
var inst_31917 = (state_31939[(11)]);
var inst_31915__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31864) : topic_fn.call(null,inst_31864));
var inst_31916 = cljs.core.deref(mults);
var inst_31917__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31916,inst_31915__$1);
var state_31939__$1 = (function (){var statearr_31967 = state_31939;
(statearr_31967[(7)] = inst_31915__$1);

(statearr_31967[(11)] = inst_31917__$1);

return statearr_31967;
})();
if(cljs.core.truth_(inst_31917__$1)){
var statearr_31968_34801 = state_31939__$1;
(statearr_31968_34801[(1)] = (19));

} else {
var statearr_31969_34802 = state_31939__$1;
(statearr_31969_34802[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (25))){
var inst_31926 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31970_34803 = state_31939__$1;
(statearr_31970_34803[(2)] = inst_31926);

(statearr_31970_34803[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (17))){
var inst_31888 = (state_31939[(10)]);
var inst_31898 = cljs.core.first(inst_31888);
var inst_31899 = cljs.core.async.muxch_STAR_(inst_31898);
var inst_31900 = cljs.core.async.close_BANG_(inst_31899);
var inst_31901 = cljs.core.next(inst_31888);
var inst_31874 = inst_31901;
var inst_31875 = null;
var inst_31876 = (0);
var inst_31877 = (0);
var state_31939__$1 = (function (){var statearr_31971 = state_31939;
(statearr_31971[(12)] = inst_31900);

(statearr_31971[(13)] = inst_31875);

(statearr_31971[(14)] = inst_31877);

(statearr_31971[(15)] = inst_31874);

(statearr_31971[(16)] = inst_31876);

return statearr_31971;
})();
var statearr_31972_34804 = state_31939__$1;
(statearr_31972_34804[(2)] = null);

(statearr_31972_34804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (3))){
var inst_31935 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31939__$1,inst_31935);
} else {
if((state_val_31940 === (12))){
var inst_31911 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31973_34805 = state_31939__$1;
(statearr_31973_34805[(2)] = inst_31911);

(statearr_31973_34805[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (2))){
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31939__$1,(4),ch);
} else {
if((state_val_31940 === (23))){
var state_31939__$1 = state_31939;
var statearr_31974_34806 = state_31939__$1;
(statearr_31974_34806[(2)] = null);

(statearr_31974_34806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (19))){
var inst_31864 = (state_31939[(8)]);
var inst_31917 = (state_31939[(11)]);
var inst_31919 = cljs.core.async.muxch_STAR_(inst_31917);
var state_31939__$1 = state_31939;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31939__$1,(22),inst_31919,inst_31864);
} else {
if((state_val_31940 === (11))){
var inst_31888 = (state_31939[(10)]);
var inst_31874 = (state_31939[(15)]);
var inst_31888__$1 = cljs.core.seq(inst_31874);
var state_31939__$1 = (function (){var statearr_31975 = state_31939;
(statearr_31975[(10)] = inst_31888__$1);

return statearr_31975;
})();
if(inst_31888__$1){
var statearr_31976_34807 = state_31939__$1;
(statearr_31976_34807[(1)] = (13));

} else {
var statearr_31978_34809 = state_31939__$1;
(statearr_31978_34809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (9))){
var inst_31913 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31979_34811 = state_31939__$1;
(statearr_31979_34811[(2)] = inst_31913);

(statearr_31979_34811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (5))){
var inst_31871 = cljs.core.deref(mults);
var inst_31872 = cljs.core.vals(inst_31871);
var inst_31873 = cljs.core.seq(inst_31872);
var inst_31874 = inst_31873;
var inst_31875 = null;
var inst_31876 = (0);
var inst_31877 = (0);
var state_31939__$1 = (function (){var statearr_31981 = state_31939;
(statearr_31981[(13)] = inst_31875);

(statearr_31981[(14)] = inst_31877);

(statearr_31981[(15)] = inst_31874);

(statearr_31981[(16)] = inst_31876);

return statearr_31981;
})();
var statearr_31982_34812 = state_31939__$1;
(statearr_31982_34812[(2)] = null);

(statearr_31982_34812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (14))){
var state_31939__$1 = state_31939;
var statearr_31986_34813 = state_31939__$1;
(statearr_31986_34813[(2)] = null);

(statearr_31986_34813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (16))){
var inst_31888 = (state_31939[(10)]);
var inst_31892 = cljs.core.chunk_first(inst_31888);
var inst_31893 = cljs.core.chunk_rest(inst_31888);
var inst_31894 = cljs.core.count(inst_31892);
var inst_31874 = inst_31893;
var inst_31875 = inst_31892;
var inst_31876 = inst_31894;
var inst_31877 = (0);
var state_31939__$1 = (function (){var statearr_31987 = state_31939;
(statearr_31987[(13)] = inst_31875);

(statearr_31987[(14)] = inst_31877);

(statearr_31987[(15)] = inst_31874);

(statearr_31987[(16)] = inst_31876);

return statearr_31987;
})();
var statearr_31988_34818 = state_31939__$1;
(statearr_31988_34818[(2)] = null);

(statearr_31988_34818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (10))){
var inst_31875 = (state_31939[(13)]);
var inst_31877 = (state_31939[(14)]);
var inst_31874 = (state_31939[(15)]);
var inst_31876 = (state_31939[(16)]);
var inst_31882 = cljs.core._nth(inst_31875,inst_31877);
var inst_31883 = cljs.core.async.muxch_STAR_(inst_31882);
var inst_31884 = cljs.core.async.close_BANG_(inst_31883);
var inst_31885 = (inst_31877 + (1));
var tmp31983 = inst_31875;
var tmp31984 = inst_31874;
var tmp31985 = inst_31876;
var inst_31874__$1 = tmp31984;
var inst_31875__$1 = tmp31983;
var inst_31876__$1 = tmp31985;
var inst_31877__$1 = inst_31885;
var state_31939__$1 = (function (){var statearr_31989 = state_31939;
(statearr_31989[(13)] = inst_31875__$1);

(statearr_31989[(17)] = inst_31884);

(statearr_31989[(14)] = inst_31877__$1);

(statearr_31989[(15)] = inst_31874__$1);

(statearr_31989[(16)] = inst_31876__$1);

return statearr_31989;
})();
var statearr_31990_34819 = state_31939__$1;
(statearr_31990_34819[(2)] = null);

(statearr_31990_34819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (18))){
var inst_31904 = (state_31939[(2)]);
var state_31939__$1 = state_31939;
var statearr_31991_34820 = state_31939__$1;
(statearr_31991_34820[(2)] = inst_31904);

(statearr_31991_34820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31940 === (8))){
var inst_31877 = (state_31939[(14)]);
var inst_31876 = (state_31939[(16)]);
var inst_31879 = (inst_31877 < inst_31876);
var inst_31880 = inst_31879;
var state_31939__$1 = state_31939;
if(cljs.core.truth_(inst_31880)){
var statearr_31992_34821 = state_31939__$1;
(statearr_31992_34821[(1)] = (10));

} else {
var statearr_31993_34822 = state_31939__$1;
(statearr_31993_34822[(1)] = (11));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_31994 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31994[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_31994[(1)] = (1));

return statearr_31994;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_31939){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_31939);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e31995){var ex__29805__auto__ = e31995;
var statearr_31996_34823 = state_31939;
(statearr_31996_34823[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_31939[(4)]))){
var statearr_31997_34828 = state_31939;
(statearr_31997_34828[(1)] = cljs.core.first((state_31939[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34829 = state_31939;
state_31939 = G__34829;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_31939){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_31939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_31998 = f__30134__auto__();
(statearr_31998[(6)] = c__30133__auto___34706);

return statearr_31998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32000 = arguments.length;
switch (G__32000) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32002 = arguments.length;
switch (G__32002) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32004 = arguments.length;
switch (G__32004) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30133__auto___34845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_32047){
var state_val_32048 = (state_32047[(1)]);
if((state_val_32048 === (7))){
var state_32047__$1 = state_32047;
var statearr_32049_34846 = state_32047__$1;
(statearr_32049_34846[(2)] = null);

(statearr_32049_34846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (1))){
var state_32047__$1 = state_32047;
var statearr_32050_34847 = state_32047__$1;
(statearr_32050_34847[(2)] = null);

(statearr_32050_34847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (4))){
var inst_32007 = (state_32047[(7)]);
var inst_32008 = (state_32047[(8)]);
var inst_32010 = (inst_32008 < inst_32007);
var state_32047__$1 = state_32047;
if(cljs.core.truth_(inst_32010)){
var statearr_32055_34852 = state_32047__$1;
(statearr_32055_34852[(1)] = (6));

} else {
var statearr_32056_34853 = state_32047__$1;
(statearr_32056_34853[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (15))){
var inst_32033 = (state_32047[(9)]);
var inst_32038 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32033);
var state_32047__$1 = state_32047;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32047__$1,(17),out,inst_32038);
} else {
if((state_val_32048 === (13))){
var inst_32033 = (state_32047[(9)]);
var inst_32033__$1 = (state_32047[(2)]);
var inst_32034 = cljs.core.some(cljs.core.nil_QMARK_,inst_32033__$1);
var state_32047__$1 = (function (){var statearr_32066 = state_32047;
(statearr_32066[(9)] = inst_32033__$1);

return statearr_32066;
})();
if(cljs.core.truth_(inst_32034)){
var statearr_32067_34854 = state_32047__$1;
(statearr_32067_34854[(1)] = (14));

} else {
var statearr_32070_34855 = state_32047__$1;
(statearr_32070_34855[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (6))){
var state_32047__$1 = state_32047;
var statearr_32071_34856 = state_32047__$1;
(statearr_32071_34856[(2)] = null);

(statearr_32071_34856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (17))){
var inst_32040 = (state_32047[(2)]);
var state_32047__$1 = (function (){var statearr_32084 = state_32047;
(statearr_32084[(10)] = inst_32040);

return statearr_32084;
})();
var statearr_32085_34857 = state_32047__$1;
(statearr_32085_34857[(2)] = null);

(statearr_32085_34857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (3))){
var inst_32045 = (state_32047[(2)]);
var state_32047__$1 = state_32047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32047__$1,inst_32045);
} else {
if((state_val_32048 === (12))){
var _ = (function (){var statearr_32087 = state_32047;
(statearr_32087[(4)] = cljs.core.rest((state_32047[(4)])));

return statearr_32087;
})();
var state_32047__$1 = state_32047;
var ex32083 = (state_32047__$1[(2)]);
var statearr_32088_34858 = state_32047__$1;
(statearr_32088_34858[(5)] = ex32083);


if((ex32083 instanceof Object)){
var statearr_32089_34859 = state_32047__$1;
(statearr_32089_34859[(1)] = (11));

(statearr_32089_34859[(5)] = null);

} else {
throw ex32083;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (2))){
var inst_32006 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32007 = cnt;
var inst_32008 = (0);
var state_32047__$1 = (function (){var statearr_32091 = state_32047;
(statearr_32091[(7)] = inst_32007);

(statearr_32091[(8)] = inst_32008);

(statearr_32091[(11)] = inst_32006);

return statearr_32091;
})();
var statearr_32092_34860 = state_32047__$1;
(statearr_32092_34860[(2)] = null);

(statearr_32092_34860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (11))){
var inst_32012 = (state_32047[(2)]);
var inst_32013 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32047__$1 = (function (){var statearr_32093 = state_32047;
(statearr_32093[(12)] = inst_32012);

return statearr_32093;
})();
var statearr_32094_34861 = state_32047__$1;
(statearr_32094_34861[(2)] = inst_32013);

(statearr_32094_34861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (9))){
var inst_32008 = (state_32047[(8)]);
var _ = (function (){var statearr_32096 = state_32047;
(statearr_32096[(4)] = cljs.core.cons((12),(state_32047[(4)])));

return statearr_32096;
})();
var inst_32019 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32008) : chs__$1.call(null,inst_32008));
var inst_32020 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32008) : done.call(null,inst_32008));
var inst_32021 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32019,inst_32020);
var ___$1 = (function (){var statearr_32097 = state_32047;
(statearr_32097[(4)] = cljs.core.rest((state_32047[(4)])));

return statearr_32097;
})();
var state_32047__$1 = state_32047;
var statearr_32098_34866 = state_32047__$1;
(statearr_32098_34866[(2)] = inst_32021);

(statearr_32098_34866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (5))){
var inst_32031 = (state_32047[(2)]);
var state_32047__$1 = (function (){var statearr_32107 = state_32047;
(statearr_32107[(13)] = inst_32031);

return statearr_32107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32047__$1,(13),dchan);
} else {
if((state_val_32048 === (14))){
var inst_32036 = cljs.core.async.close_BANG_(out);
var state_32047__$1 = state_32047;
var statearr_32112_34867 = state_32047__$1;
(statearr_32112_34867[(2)] = inst_32036);

(statearr_32112_34867[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (16))){
var inst_32043 = (state_32047[(2)]);
var state_32047__$1 = state_32047;
var statearr_32113_34868 = state_32047__$1;
(statearr_32113_34868[(2)] = inst_32043);

(statearr_32113_34868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (10))){
var inst_32008 = (state_32047[(8)]);
var inst_32024 = (state_32047[(2)]);
var inst_32025 = (inst_32008 + (1));
var inst_32008__$1 = inst_32025;
var state_32047__$1 = (function (){var statearr_32114 = state_32047;
(statearr_32114[(14)] = inst_32024);

(statearr_32114[(8)] = inst_32008__$1);

return statearr_32114;
})();
var statearr_32115_34869 = state_32047__$1;
(statearr_32115_34869[(2)] = null);

(statearr_32115_34869[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32048 === (8))){
var inst_32029 = (state_32047[(2)]);
var state_32047__$1 = state_32047;
var statearr_32116_34870 = state_32047__$1;
(statearr_32116_34870[(2)] = inst_32029);

(statearr_32116_34870[(1)] = (5));


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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_32117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32117[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_32117[(1)] = (1));

return statearr_32117;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_32047){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_32047);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e32118){var ex__29805__auto__ = e32118;
var statearr_32119_34871 = state_32047;
(statearr_32119_34871[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_32047[(4)]))){
var statearr_32120_34872 = state_32047;
(statearr_32120_34872[(1)] = cljs.core.first((state_32047[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34873 = state_32047;
state_32047 = G__34873;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_32047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_32047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_32121 = f__30134__auto__();
(statearr_32121[(6)] = c__30133__auto___34845);

return statearr_32121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32124 = arguments.length;
switch (G__32124) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30133__auto___34875 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_32156){
var state_val_32157 = (state_32156[(1)]);
if((state_val_32157 === (7))){
var inst_32135 = (state_32156[(7)]);
var inst_32136 = (state_32156[(8)]);
var inst_32135__$1 = (state_32156[(2)]);
var inst_32136__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32135__$1,(0),null);
var inst_32137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32135__$1,(1),null);
var inst_32138 = (inst_32136__$1 == null);
var state_32156__$1 = (function (){var statearr_32159 = state_32156;
(statearr_32159[(9)] = inst_32137);

(statearr_32159[(7)] = inst_32135__$1);

(statearr_32159[(8)] = inst_32136__$1);

return statearr_32159;
})();
if(cljs.core.truth_(inst_32138)){
var statearr_32160_34876 = state_32156__$1;
(statearr_32160_34876[(1)] = (8));

} else {
var statearr_32161_34877 = state_32156__$1;
(statearr_32161_34877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (1))){
var inst_32125 = cljs.core.vec(chs);
var inst_32126 = inst_32125;
var state_32156__$1 = (function (){var statearr_32162 = state_32156;
(statearr_32162[(10)] = inst_32126);

return statearr_32162;
})();
var statearr_32163_34878 = state_32156__$1;
(statearr_32163_34878[(2)] = null);

(statearr_32163_34878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (4))){
var inst_32126 = (state_32156[(10)]);
var state_32156__$1 = state_32156;
return cljs.core.async.ioc_alts_BANG_(state_32156__$1,(7),inst_32126);
} else {
if((state_val_32157 === (6))){
var inst_32152 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32164_34879 = state_32156__$1;
(statearr_32164_34879[(2)] = inst_32152);

(statearr_32164_34879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (3))){
var inst_32154 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32156__$1,inst_32154);
} else {
if((state_val_32157 === (2))){
var inst_32126 = (state_32156[(10)]);
var inst_32128 = cljs.core.count(inst_32126);
var inst_32129 = (inst_32128 > (0));
var state_32156__$1 = state_32156;
if(cljs.core.truth_(inst_32129)){
var statearr_32166_35168 = state_32156__$1;
(statearr_32166_35168[(1)] = (4));

} else {
var statearr_32167_35169 = state_32156__$1;
(statearr_32167_35169[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (11))){
var inst_32126 = (state_32156[(10)]);
var inst_32145 = (state_32156[(2)]);
var tmp32165 = inst_32126;
var inst_32126__$1 = tmp32165;
var state_32156__$1 = (function (){var statearr_32168 = state_32156;
(statearr_32168[(10)] = inst_32126__$1);

(statearr_32168[(11)] = inst_32145);

return statearr_32168;
})();
var statearr_32169_35170 = state_32156__$1;
(statearr_32169_35170[(2)] = null);

(statearr_32169_35170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (9))){
var inst_32136 = (state_32156[(8)]);
var state_32156__$1 = state_32156;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32156__$1,(11),out,inst_32136);
} else {
if((state_val_32157 === (5))){
var inst_32150 = cljs.core.async.close_BANG_(out);
var state_32156__$1 = state_32156;
var statearr_32170_35171 = state_32156__$1;
(statearr_32170_35171[(2)] = inst_32150);

(statearr_32170_35171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (10))){
var inst_32148 = (state_32156[(2)]);
var state_32156__$1 = state_32156;
var statearr_32171_35172 = state_32156__$1;
(statearr_32171_35172[(2)] = inst_32148);

(statearr_32171_35172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32157 === (8))){
var inst_32137 = (state_32156[(9)]);
var inst_32126 = (state_32156[(10)]);
var inst_32135 = (state_32156[(7)]);
var inst_32136 = (state_32156[(8)]);
var inst_32140 = (function (){var cs = inst_32126;
var vec__32131 = inst_32135;
var v = inst_32136;
var c = inst_32137;
return (function (p1__32122_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32122_SHARP_);
});
})();
var inst_32141 = cljs.core.filterv(inst_32140,inst_32126);
var inst_32126__$1 = inst_32141;
var state_32156__$1 = (function (){var statearr_32172 = state_32156;
(statearr_32172[(10)] = inst_32126__$1);

return statearr_32172;
})();
var statearr_32173_35174 = state_32156__$1;
(statearr_32173_35174[(2)] = null);

(statearr_32173_35174[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_32174 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32174[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_32174[(1)] = (1));

return statearr_32174;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_32156){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_32156);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e32175){var ex__29805__auto__ = e32175;
var statearr_32176_35175 = state_32156;
(statearr_32176_35175[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_32156[(4)]))){
var statearr_32177_35177 = state_32156;
(statearr_32177_35177[(1)] = cljs.core.first((state_32156[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35178 = state_32156;
state_32156 = G__35178;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_32156){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_32156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_32178 = f__30134__auto__();
(statearr_32178[(6)] = c__30133__auto___34875);

return statearr_32178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32237 = arguments.length;
switch (G__32237) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30133__auto___35180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_32264){
var state_val_32265 = (state_32264[(1)]);
if((state_val_32265 === (7))){
var inst_32245 = (state_32264[(7)]);
var inst_32245__$1 = (state_32264[(2)]);
var inst_32246 = (inst_32245__$1 == null);
var inst_32247 = cljs.core.not(inst_32246);
var state_32264__$1 = (function (){var statearr_32266 = state_32264;
(statearr_32266[(7)] = inst_32245__$1);

return statearr_32266;
})();
if(inst_32247){
var statearr_32267_35181 = state_32264__$1;
(statearr_32267_35181[(1)] = (8));

} else {
var statearr_32268_35182 = state_32264__$1;
(statearr_32268_35182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (1))){
var inst_32240 = (0);
var state_32264__$1 = (function (){var statearr_32269 = state_32264;
(statearr_32269[(8)] = inst_32240);

return statearr_32269;
})();
var statearr_32286_35183 = state_32264__$1;
(statearr_32286_35183[(2)] = null);

(statearr_32286_35183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (4))){
var state_32264__$1 = state_32264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32264__$1,(7),ch);
} else {
if((state_val_32265 === (6))){
var inst_32258 = (state_32264[(2)]);
var state_32264__$1 = state_32264;
var statearr_32295_35184 = state_32264__$1;
(statearr_32295_35184[(2)] = inst_32258);

(statearr_32295_35184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (3))){
var inst_32260 = (state_32264[(2)]);
var inst_32261 = cljs.core.async.close_BANG_(out);
var state_32264__$1 = (function (){var statearr_32296 = state_32264;
(statearr_32296[(9)] = inst_32260);

return statearr_32296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32264__$1,inst_32261);
} else {
if((state_val_32265 === (2))){
var inst_32240 = (state_32264[(8)]);
var inst_32242 = (inst_32240 < n);
var state_32264__$1 = state_32264;
if(cljs.core.truth_(inst_32242)){
var statearr_32297_35185 = state_32264__$1;
(statearr_32297_35185[(1)] = (4));

} else {
var statearr_32298_35186 = state_32264__$1;
(statearr_32298_35186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (11))){
var inst_32240 = (state_32264[(8)]);
var inst_32250 = (state_32264[(2)]);
var inst_32251 = (inst_32240 + (1));
var inst_32240__$1 = inst_32251;
var state_32264__$1 = (function (){var statearr_32299 = state_32264;
(statearr_32299[(8)] = inst_32240__$1);

(statearr_32299[(10)] = inst_32250);

return statearr_32299;
})();
var statearr_32300_35187 = state_32264__$1;
(statearr_32300_35187[(2)] = null);

(statearr_32300_35187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (9))){
var state_32264__$1 = state_32264;
var statearr_32301_35188 = state_32264__$1;
(statearr_32301_35188[(2)] = null);

(statearr_32301_35188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (5))){
var state_32264__$1 = state_32264;
var statearr_32302_35189 = state_32264__$1;
(statearr_32302_35189[(2)] = null);

(statearr_32302_35189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (10))){
var inst_32255 = (state_32264[(2)]);
var state_32264__$1 = state_32264;
var statearr_32303_35190 = state_32264__$1;
(statearr_32303_35190[(2)] = inst_32255);

(statearr_32303_35190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32265 === (8))){
var inst_32245 = (state_32264[(7)]);
var state_32264__$1 = state_32264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32264__$1,(11),out,inst_32245);
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
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_32304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32304[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_32304[(1)] = (1));

return statearr_32304;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_32264){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_32264);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e32305){var ex__29805__auto__ = e32305;
var statearr_32314_35200 = state_32264;
(statearr_32314_35200[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_32264[(4)]))){
var statearr_32319_35201 = state_32264;
(statearr_32319_35201[(1)] = cljs.core.first((state_32264[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35202 = state_32264;
state_32264 = G__35202;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_32264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_32264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_32328 = f__30134__auto__();
(statearr_32328[(6)] = c__30133__auto___35180);

return statearr_32328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32330 = (function (f,ch,meta32331){
this.f = f;
this.ch = ch;
this.meta32331 = meta32331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32332,meta32331__$1){
var self__ = this;
var _32332__$1 = this;
return (new cljs.core.async.t_cljs$core$async32330(self__.f,self__.ch,meta32331__$1));
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32332){
var self__ = this;
var _32332__$1 = this;
return self__.meta32331;
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32333 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32333 = (function (f,ch,meta32331,_,fn1,meta32334){
this.f = f;
this.ch = ch;
this.meta32331 = meta32331;
this._ = _;
this.fn1 = fn1;
this.meta32334 = meta32334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32335,meta32334__$1){
var self__ = this;
var _32335__$1 = this;
return (new cljs.core.async.t_cljs$core$async32333(self__.f,self__.ch,self__.meta32331,self__._,self__.fn1,meta32334__$1));
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32335){
var self__ = this;
var _32335__$1 = this;
return self__.meta32334;
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32329_SHARP_){
var G__32336 = (((p1__32329_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32329_SHARP_) : self__.f.call(null,p1__32329_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32336) : f1.call(null,G__32336));
});
}));

(cljs.core.async.t_cljs$core$async32333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32331","meta32331",-11646946,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32330","cljs.core.async/t_cljs$core$async32330",2049243588,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32334","meta32334",-931752991,null)], null);
}));

(cljs.core.async.t_cljs$core$async32333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32333");

(cljs.core.async.t_cljs$core$async32333.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32333.
 */
cljs.core.async.__GT_t_cljs$core$async32333 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32333(f__$1,ch__$1,meta32331__$1,___$2,fn1__$1,meta32334){
return (new cljs.core.async.t_cljs$core$async32333(f__$1,ch__$1,meta32331__$1,___$2,fn1__$1,meta32334));
});

}

return (new cljs.core.async.t_cljs$core$async32333(self__.f,self__.ch,self__.meta32331,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32337 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32337) : self__.f.call(null,G__32337));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32331","meta32331",-11646946,null)], null);
}));

(cljs.core.async.t_cljs$core$async32330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32330");

(cljs.core.async.t_cljs$core$async32330.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32330.
 */
cljs.core.async.__GT_t_cljs$core$async32330 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32330(f__$1,ch__$1,meta32331){
return (new cljs.core.async.t_cljs$core$async32330(f__$1,ch__$1,meta32331));
});

}

return (new cljs.core.async.t_cljs$core$async32330(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32338 = (function (f,ch,meta32339){
this.f = f;
this.ch = ch;
this.meta32339 = meta32339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32340,meta32339__$1){
var self__ = this;
var _32340__$1 = this;
return (new cljs.core.async.t_cljs$core$async32338(self__.f,self__.ch,meta32339__$1));
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32340){
var self__ = this;
var _32340__$1 = this;
return self__.meta32339;
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32339","meta32339",360571425,null)], null);
}));

(cljs.core.async.t_cljs$core$async32338.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32338");

(cljs.core.async.t_cljs$core$async32338.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32338");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32338.
 */
cljs.core.async.__GT_t_cljs$core$async32338 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32338(f__$1,ch__$1,meta32339){
return (new cljs.core.async.t_cljs$core$async32338(f__$1,ch__$1,meta32339));
});

}

return (new cljs.core.async.t_cljs$core$async32338(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32349 = (function (p,ch,meta32350){
this.p = p;
this.ch = ch;
this.meta32350 = meta32350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32351,meta32350__$1){
var self__ = this;
var _32351__$1 = this;
return (new cljs.core.async.t_cljs$core$async32349(self__.p,self__.ch,meta32350__$1));
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32351){
var self__ = this;
var _32351__$1 = this;
return self__.meta32350;
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32349.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32349.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32350","meta32350",2098952999,null)], null);
}));

(cljs.core.async.t_cljs$core$async32349.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32349");

(cljs.core.async.t_cljs$core$async32349.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32349");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32349.
 */
cljs.core.async.__GT_t_cljs$core$async32349 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32349(p__$1,ch__$1,meta32350){
return (new cljs.core.async.t_cljs$core$async32349(p__$1,ch__$1,meta32350));
});

}

return (new cljs.core.async.t_cljs$core$async32349(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32360 = arguments.length;
switch (G__32360) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30133__auto___35223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_32381){
var state_val_32382 = (state_32381[(1)]);
if((state_val_32382 === (7))){
var inst_32377 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
var statearr_32383_35224 = state_32381__$1;
(statearr_32383_35224[(2)] = inst_32377);

(statearr_32383_35224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (1))){
var state_32381__$1 = state_32381;
var statearr_32384_35225 = state_32381__$1;
(statearr_32384_35225[(2)] = null);

(statearr_32384_35225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (4))){
var inst_32363 = (state_32381[(7)]);
var inst_32363__$1 = (state_32381[(2)]);
var inst_32364 = (inst_32363__$1 == null);
var state_32381__$1 = (function (){var statearr_32385 = state_32381;
(statearr_32385[(7)] = inst_32363__$1);

return statearr_32385;
})();
if(cljs.core.truth_(inst_32364)){
var statearr_32386_35226 = state_32381__$1;
(statearr_32386_35226[(1)] = (5));

} else {
var statearr_32387_35227 = state_32381__$1;
(statearr_32387_35227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (6))){
var inst_32363 = (state_32381[(7)]);
var inst_32368 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32363) : p.call(null,inst_32363));
var state_32381__$1 = state_32381;
if(cljs.core.truth_(inst_32368)){
var statearr_32388_35228 = state_32381__$1;
(statearr_32388_35228[(1)] = (8));

} else {
var statearr_32389_35229 = state_32381__$1;
(statearr_32389_35229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (3))){
var inst_32379 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32381__$1,inst_32379);
} else {
if((state_val_32382 === (2))){
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32381__$1,(4),ch);
} else {
if((state_val_32382 === (11))){
var inst_32371 = (state_32381[(2)]);
var state_32381__$1 = state_32381;
var statearr_32390_35230 = state_32381__$1;
(statearr_32390_35230[(2)] = inst_32371);

(statearr_32390_35230[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (9))){
var state_32381__$1 = state_32381;
var statearr_32391_35231 = state_32381__$1;
(statearr_32391_35231[(2)] = null);

(statearr_32391_35231[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (5))){
var inst_32366 = cljs.core.async.close_BANG_(out);
var state_32381__$1 = state_32381;
var statearr_32392_35232 = state_32381__$1;
(statearr_32392_35232[(2)] = inst_32366);

(statearr_32392_35232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (10))){
var inst_32374 = (state_32381[(2)]);
var state_32381__$1 = (function (){var statearr_32393 = state_32381;
(statearr_32393[(8)] = inst_32374);

return statearr_32393;
})();
var statearr_32394_35233 = state_32381__$1;
(statearr_32394_35233[(2)] = null);

(statearr_32394_35233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32382 === (8))){
var inst_32363 = (state_32381[(7)]);
var state_32381__$1 = state_32381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32381__$1,(11),out,inst_32363);
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
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_32395 = [null,null,null,null,null,null,null,null,null];
(statearr_32395[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_32395[(1)] = (1));

return statearr_32395;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_32381){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_32381);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e32396){var ex__29805__auto__ = e32396;
var statearr_32397_35234 = state_32381;
(statearr_32397_35234[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_32381[(4)]))){
var statearr_32398_35235 = state_32381;
(statearr_32398_35235[(1)] = cljs.core.first((state_32381[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35236 = state_32381;
state_32381 = G__35236;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_32381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_32381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_32399 = f__30134__auto__();
(statearr_32399[(6)] = c__30133__auto___35223);

return statearr_32399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32401 = arguments.length;
switch (G__32401) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30133__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_32463){
var state_val_32464 = (state_32463[(1)]);
if((state_val_32464 === (7))){
var inst_32459 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32465_35241 = state_32463__$1;
(statearr_32465_35241[(2)] = inst_32459);

(statearr_32465_35241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (20))){
var inst_32429 = (state_32463[(7)]);
var inst_32440 = (state_32463[(2)]);
var inst_32441 = cljs.core.next(inst_32429);
var inst_32415 = inst_32441;
var inst_32416 = null;
var inst_32417 = (0);
var inst_32418 = (0);
var state_32463__$1 = (function (){var statearr_32466 = state_32463;
(statearr_32466[(8)] = inst_32417);

(statearr_32466[(9)] = inst_32416);

(statearr_32466[(10)] = inst_32418);

(statearr_32466[(11)] = inst_32440);

(statearr_32466[(12)] = inst_32415);

return statearr_32466;
})();
var statearr_32467_35242 = state_32463__$1;
(statearr_32467_35242[(2)] = null);

(statearr_32467_35242[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (1))){
var state_32463__$1 = state_32463;
var statearr_32468_35243 = state_32463__$1;
(statearr_32468_35243[(2)] = null);

(statearr_32468_35243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (4))){
var inst_32404 = (state_32463[(13)]);
var inst_32404__$1 = (state_32463[(2)]);
var inst_32405 = (inst_32404__$1 == null);
var state_32463__$1 = (function (){var statearr_32469 = state_32463;
(statearr_32469[(13)] = inst_32404__$1);

return statearr_32469;
})();
if(cljs.core.truth_(inst_32405)){
var statearr_32470_35244 = state_32463__$1;
(statearr_32470_35244[(1)] = (5));

} else {
var statearr_32471_35245 = state_32463__$1;
(statearr_32471_35245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (15))){
var state_32463__$1 = state_32463;
var statearr_32475_35246 = state_32463__$1;
(statearr_32475_35246[(2)] = null);

(statearr_32475_35246[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (21))){
var state_32463__$1 = state_32463;
var statearr_32476_35248 = state_32463__$1;
(statearr_32476_35248[(2)] = null);

(statearr_32476_35248[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (13))){
var inst_32417 = (state_32463[(8)]);
var inst_32416 = (state_32463[(9)]);
var inst_32418 = (state_32463[(10)]);
var inst_32415 = (state_32463[(12)]);
var inst_32425 = (state_32463[(2)]);
var inst_32426 = (inst_32418 + (1));
var tmp32472 = inst_32417;
var tmp32473 = inst_32416;
var tmp32474 = inst_32415;
var inst_32415__$1 = tmp32474;
var inst_32416__$1 = tmp32473;
var inst_32417__$1 = tmp32472;
var inst_32418__$1 = inst_32426;
var state_32463__$1 = (function (){var statearr_32477 = state_32463;
(statearr_32477[(8)] = inst_32417__$1);

(statearr_32477[(9)] = inst_32416__$1);

(statearr_32477[(10)] = inst_32418__$1);

(statearr_32477[(12)] = inst_32415__$1);

(statearr_32477[(14)] = inst_32425);

return statearr_32477;
})();
var statearr_32478_35249 = state_32463__$1;
(statearr_32478_35249[(2)] = null);

(statearr_32478_35249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (22))){
var state_32463__$1 = state_32463;
var statearr_32479_35250 = state_32463__$1;
(statearr_32479_35250[(2)] = null);

(statearr_32479_35250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (6))){
var inst_32404 = (state_32463[(13)]);
var inst_32413 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32404) : f.call(null,inst_32404));
var inst_32414 = cljs.core.seq(inst_32413);
var inst_32415 = inst_32414;
var inst_32416 = null;
var inst_32417 = (0);
var inst_32418 = (0);
var state_32463__$1 = (function (){var statearr_32480 = state_32463;
(statearr_32480[(8)] = inst_32417);

(statearr_32480[(9)] = inst_32416);

(statearr_32480[(10)] = inst_32418);

(statearr_32480[(12)] = inst_32415);

return statearr_32480;
})();
var statearr_32481_35251 = state_32463__$1;
(statearr_32481_35251[(2)] = null);

(statearr_32481_35251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (17))){
var inst_32429 = (state_32463[(7)]);
var inst_32433 = cljs.core.chunk_first(inst_32429);
var inst_32434 = cljs.core.chunk_rest(inst_32429);
var inst_32435 = cljs.core.count(inst_32433);
var inst_32415 = inst_32434;
var inst_32416 = inst_32433;
var inst_32417 = inst_32435;
var inst_32418 = (0);
var state_32463__$1 = (function (){var statearr_32482 = state_32463;
(statearr_32482[(8)] = inst_32417);

(statearr_32482[(9)] = inst_32416);

(statearr_32482[(10)] = inst_32418);

(statearr_32482[(12)] = inst_32415);

return statearr_32482;
})();
var statearr_32483_35252 = state_32463__$1;
(statearr_32483_35252[(2)] = null);

(statearr_32483_35252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (3))){
var inst_32461 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32463__$1,inst_32461);
} else {
if((state_val_32464 === (12))){
var inst_32449 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32484_35253 = state_32463__$1;
(statearr_32484_35253[(2)] = inst_32449);

(statearr_32484_35253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (2))){
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32463__$1,(4),in$);
} else {
if((state_val_32464 === (23))){
var inst_32457 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32485_35254 = state_32463__$1;
(statearr_32485_35254[(2)] = inst_32457);

(statearr_32485_35254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (19))){
var inst_32444 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32486_35255 = state_32463__$1;
(statearr_32486_35255[(2)] = inst_32444);

(statearr_32486_35255[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (11))){
var inst_32415 = (state_32463[(12)]);
var inst_32429 = (state_32463[(7)]);
var inst_32429__$1 = cljs.core.seq(inst_32415);
var state_32463__$1 = (function (){var statearr_32487 = state_32463;
(statearr_32487[(7)] = inst_32429__$1);

return statearr_32487;
})();
if(inst_32429__$1){
var statearr_32488_35256 = state_32463__$1;
(statearr_32488_35256[(1)] = (14));

} else {
var statearr_32489_35257 = state_32463__$1;
(statearr_32489_35257[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (9))){
var inst_32451 = (state_32463[(2)]);
var inst_32452 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32463__$1 = (function (){var statearr_32490 = state_32463;
(statearr_32490[(15)] = inst_32451);

return statearr_32490;
})();
if(cljs.core.truth_(inst_32452)){
var statearr_32491_35258 = state_32463__$1;
(statearr_32491_35258[(1)] = (21));

} else {
var statearr_32492_35262 = state_32463__$1;
(statearr_32492_35262[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (5))){
var inst_32407 = cljs.core.async.close_BANG_(out);
var state_32463__$1 = state_32463;
var statearr_32493_35263 = state_32463__$1;
(statearr_32493_35263[(2)] = inst_32407);

(statearr_32493_35263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (14))){
var inst_32429 = (state_32463[(7)]);
var inst_32431 = cljs.core.chunked_seq_QMARK_(inst_32429);
var state_32463__$1 = state_32463;
if(inst_32431){
var statearr_32494_35264 = state_32463__$1;
(statearr_32494_35264[(1)] = (17));

} else {
var statearr_32495_35266 = state_32463__$1;
(statearr_32495_35266[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (16))){
var inst_32447 = (state_32463[(2)]);
var state_32463__$1 = state_32463;
var statearr_32496_35269 = state_32463__$1;
(statearr_32496_35269[(2)] = inst_32447);

(statearr_32496_35269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32464 === (10))){
var inst_32416 = (state_32463[(9)]);
var inst_32418 = (state_32463[(10)]);
var inst_32423 = cljs.core._nth(inst_32416,inst_32418);
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32463__$1,(13),out,inst_32423);
} else {
if((state_val_32464 === (18))){
var inst_32429 = (state_32463[(7)]);
var inst_32438 = cljs.core.first(inst_32429);
var state_32463__$1 = state_32463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32463__$1,(20),out,inst_32438);
} else {
if((state_val_32464 === (8))){
var inst_32417 = (state_32463[(8)]);
var inst_32418 = (state_32463[(10)]);
var inst_32420 = (inst_32418 < inst_32417);
var inst_32421 = inst_32420;
var state_32463__$1 = state_32463;
if(cljs.core.truth_(inst_32421)){
var statearr_32497_35273 = state_32463__$1;
(statearr_32497_35273[(1)] = (10));

} else {
var statearr_32498_35274 = state_32463__$1;
(statearr_32498_35274[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29802__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29802__auto____0 = (function (){
var statearr_32499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32499[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29802__auto__);

(statearr_32499[(1)] = (1));

return statearr_32499;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29802__auto____1 = (function (state_32463){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_32463);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e32500){var ex__29805__auto__ = e32500;
var statearr_32501_35275 = state_32463;
(statearr_32501_35275[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_32463[(4)]))){
var statearr_32502_35276 = state_32463;
(statearr_32502_35276[(1)] = cljs.core.first((state_32463[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35277 = state_32463;
state_32463 = G__35277;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29802__auto__ = function(state_32463){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29802__auto____1.call(this,state_32463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29802__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29802__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_32503 = f__30134__auto__();
(statearr_32503[(6)] = c__30133__auto__);

return statearr_32503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));

return c__30133__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32505 = arguments.length;
switch (G__32505) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32507 = arguments.length;
switch (G__32507) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32509 = arguments.length;
switch (G__32509) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30133__auto___35281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_32533){
var state_val_32534 = (state_32533[(1)]);
if((state_val_32534 === (7))){
var inst_32528 = (state_32533[(2)]);
var state_32533__$1 = state_32533;
var statearr_32535_35282 = state_32533__$1;
(statearr_32535_35282[(2)] = inst_32528);

(statearr_32535_35282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (1))){
var inst_32510 = null;
var state_32533__$1 = (function (){var statearr_32536 = state_32533;
(statearr_32536[(7)] = inst_32510);

return statearr_32536;
})();
var statearr_32537_35283 = state_32533__$1;
(statearr_32537_35283[(2)] = null);

(statearr_32537_35283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (4))){
var inst_32513 = (state_32533[(8)]);
var inst_32513__$1 = (state_32533[(2)]);
var inst_32514 = (inst_32513__$1 == null);
var inst_32515 = cljs.core.not(inst_32514);
var state_32533__$1 = (function (){var statearr_32538 = state_32533;
(statearr_32538[(8)] = inst_32513__$1);

return statearr_32538;
})();
if(inst_32515){
var statearr_32539_35284 = state_32533__$1;
(statearr_32539_35284[(1)] = (5));

} else {
var statearr_32540_35285 = state_32533__$1;
(statearr_32540_35285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (6))){
var state_32533__$1 = state_32533;
var statearr_32541_35286 = state_32533__$1;
(statearr_32541_35286[(2)] = null);

(statearr_32541_35286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (3))){
var inst_32530 = (state_32533[(2)]);
var inst_32531 = cljs.core.async.close_BANG_(out);
var state_32533__$1 = (function (){var statearr_32542 = state_32533;
(statearr_32542[(9)] = inst_32530);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32533__$1,inst_32531);
} else {
if((state_val_32534 === (2))){
var state_32533__$1 = state_32533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32533__$1,(4),ch);
} else {
if((state_val_32534 === (11))){
var inst_32513 = (state_32533[(8)]);
var inst_32522 = (state_32533[(2)]);
var inst_32510 = inst_32513;
var state_32533__$1 = (function (){var statearr_32543 = state_32533;
(statearr_32543[(10)] = inst_32522);

(statearr_32543[(7)] = inst_32510);

return statearr_32543;
})();
var statearr_32544_35287 = state_32533__$1;
(statearr_32544_35287[(2)] = null);

(statearr_32544_35287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (9))){
var inst_32513 = (state_32533[(8)]);
var state_32533__$1 = state_32533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32533__$1,(11),out,inst_32513);
} else {
if((state_val_32534 === (5))){
var inst_32510 = (state_32533[(7)]);
var inst_32513 = (state_32533[(8)]);
var inst_32517 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32513,inst_32510);
var state_32533__$1 = state_32533;
if(inst_32517){
var statearr_32546_35288 = state_32533__$1;
(statearr_32546_35288[(1)] = (8));

} else {
var statearr_32547_35289 = state_32533__$1;
(statearr_32547_35289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (10))){
var inst_32525 = (state_32533[(2)]);
var state_32533__$1 = state_32533;
var statearr_32548_35290 = state_32533__$1;
(statearr_32548_35290[(2)] = inst_32525);

(statearr_32548_35290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32534 === (8))){
var inst_32510 = (state_32533[(7)]);
var tmp32545 = inst_32510;
var inst_32510__$1 = tmp32545;
var state_32533__$1 = (function (){var statearr_32549 = state_32533;
(statearr_32549[(7)] = inst_32510__$1);

return statearr_32549;
})();
var statearr_32550_35291 = state_32533__$1;
(statearr_32550_35291[(2)] = null);

(statearr_32550_35291[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_32551 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32551[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_32551[(1)] = (1));

return statearr_32551;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_32533){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_32533);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e32552){var ex__29805__auto__ = e32552;
var statearr_32553_35292 = state_32533;
(statearr_32553_35292[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_32533[(4)]))){
var statearr_32554_35293 = state_32533;
(statearr_32554_35293[(1)] = cljs.core.first((state_32533[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35294 = state_32533;
state_32533 = G__35294;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_32533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_32533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_32556 = f__30134__auto__();
(statearr_32556[(6)] = c__30133__auto___35281);

return statearr_32556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32558 = arguments.length;
switch (G__32558) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30133__auto___35296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_32597){
var state_val_32598 = (state_32597[(1)]);
if((state_val_32598 === (7))){
var inst_32593 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32599_35297 = state_32597__$1;
(statearr_32599_35297[(2)] = inst_32593);

(statearr_32599_35297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (1))){
var inst_32559 = (new Array(n));
var inst_32560 = inst_32559;
var inst_32561 = (0);
var state_32597__$1 = (function (){var statearr_32600 = state_32597;
(statearr_32600[(7)] = inst_32560);

(statearr_32600[(8)] = inst_32561);

return statearr_32600;
})();
var statearr_32601_35298 = state_32597__$1;
(statearr_32601_35298[(2)] = null);

(statearr_32601_35298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (4))){
var inst_32565 = (state_32597[(9)]);
var inst_32565__$1 = (state_32597[(2)]);
var inst_32566 = (inst_32565__$1 == null);
var inst_32567 = cljs.core.not(inst_32566);
var state_32597__$1 = (function (){var statearr_32602 = state_32597;
(statearr_32602[(9)] = inst_32565__$1);

return statearr_32602;
})();
if(inst_32567){
var statearr_32603_35302 = state_32597__$1;
(statearr_32603_35302[(1)] = (5));

} else {
var statearr_32604_35303 = state_32597__$1;
(statearr_32604_35303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (15))){
var inst_32587 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32605_35304 = state_32597__$1;
(statearr_32605_35304[(2)] = inst_32587);

(statearr_32605_35304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (13))){
var state_32597__$1 = state_32597;
var statearr_32606_35305 = state_32597__$1;
(statearr_32606_35305[(2)] = null);

(statearr_32606_35305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (6))){
var inst_32561 = (state_32597[(8)]);
var inst_32583 = (inst_32561 > (0));
var state_32597__$1 = state_32597;
if(cljs.core.truth_(inst_32583)){
var statearr_32607_35306 = state_32597__$1;
(statearr_32607_35306[(1)] = (12));

} else {
var statearr_32608_35307 = state_32597__$1;
(statearr_32608_35307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (3))){
var inst_32595 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32597__$1,inst_32595);
} else {
if((state_val_32598 === (12))){
var inst_32560 = (state_32597[(7)]);
var inst_32585 = cljs.core.vec(inst_32560);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32597__$1,(15),out,inst_32585);
} else {
if((state_val_32598 === (2))){
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32597__$1,(4),ch);
} else {
if((state_val_32598 === (11))){
var inst_32577 = (state_32597[(2)]);
var inst_32578 = (new Array(n));
var inst_32560 = inst_32578;
var inst_32561 = (0);
var state_32597__$1 = (function (){var statearr_32609 = state_32597;
(statearr_32609[(7)] = inst_32560);

(statearr_32609[(10)] = inst_32577);

(statearr_32609[(8)] = inst_32561);

return statearr_32609;
})();
var statearr_32610_35308 = state_32597__$1;
(statearr_32610_35308[(2)] = null);

(statearr_32610_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (9))){
var inst_32560 = (state_32597[(7)]);
var inst_32575 = cljs.core.vec(inst_32560);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32597__$1,(11),out,inst_32575);
} else {
if((state_val_32598 === (5))){
var inst_32560 = (state_32597[(7)]);
var inst_32565 = (state_32597[(9)]);
var inst_32561 = (state_32597[(8)]);
var inst_32570 = (state_32597[(11)]);
var inst_32569 = (inst_32560[inst_32561] = inst_32565);
var inst_32570__$1 = (inst_32561 + (1));
var inst_32571 = (inst_32570__$1 < n);
var state_32597__$1 = (function (){var statearr_32613 = state_32597;
(statearr_32613[(12)] = inst_32569);

(statearr_32613[(11)] = inst_32570__$1);

return statearr_32613;
})();
if(cljs.core.truth_(inst_32571)){
var statearr_32614_35309 = state_32597__$1;
(statearr_32614_35309[(1)] = (8));

} else {
var statearr_32615_35310 = state_32597__$1;
(statearr_32615_35310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (14))){
var inst_32590 = (state_32597[(2)]);
var inst_32591 = cljs.core.async.close_BANG_(out);
var state_32597__$1 = (function (){var statearr_32618 = state_32597;
(statearr_32618[(13)] = inst_32590);

return statearr_32618;
})();
var statearr_32619_35311 = state_32597__$1;
(statearr_32619_35311[(2)] = inst_32591);

(statearr_32619_35311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (10))){
var inst_32581 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32620_35312 = state_32597__$1;
(statearr_32620_35312[(2)] = inst_32581);

(statearr_32620_35312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (8))){
var inst_32560 = (state_32597[(7)]);
var inst_32570 = (state_32597[(11)]);
var tmp32617 = inst_32560;
var inst_32560__$1 = tmp32617;
var inst_32561 = inst_32570;
var state_32597__$1 = (function (){var statearr_32622 = state_32597;
(statearr_32622[(7)] = inst_32560__$1);

(statearr_32622[(8)] = inst_32561);

return statearr_32622;
})();
var statearr_32623_35316 = state_32597__$1;
(statearr_32623_35316[(2)] = null);

(statearr_32623_35316[(1)] = (2));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_32624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32624[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_32624[(1)] = (1));

return statearr_32624;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_32597){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_32597);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e32625){var ex__29805__auto__ = e32625;
var statearr_32626_35317 = state_32597;
(statearr_32626_35317[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_32597[(4)]))){
var statearr_32627_35318 = state_32597;
(statearr_32627_35318[(1)] = cljs.core.first((state_32597[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35319 = state_32597;
state_32597 = G__35319;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_32597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_32597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_32629 = f__30134__auto__();
(statearr_32629[(6)] = c__30133__auto___35296);

return statearr_32629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32631 = arguments.length;
switch (G__32631) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30133__auto___35321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_32686){
var state_val_32687 = (state_32686[(1)]);
if((state_val_32687 === (7))){
var inst_32682 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32689_35322 = state_32686__$1;
(statearr_32689_35322[(2)] = inst_32682);

(statearr_32689_35322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (1))){
var inst_32641 = [];
var inst_32642 = inst_32641;
var inst_32643 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32686__$1 = (function (){var statearr_32690 = state_32686;
(statearr_32690[(7)] = inst_32642);

(statearr_32690[(8)] = inst_32643);

return statearr_32690;
})();
var statearr_32691_35323 = state_32686__$1;
(statearr_32691_35323[(2)] = null);

(statearr_32691_35323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (4))){
var inst_32646 = (state_32686[(9)]);
var inst_32646__$1 = (state_32686[(2)]);
var inst_32648 = (inst_32646__$1 == null);
var inst_32649 = cljs.core.not(inst_32648);
var state_32686__$1 = (function (){var statearr_32692 = state_32686;
(statearr_32692[(9)] = inst_32646__$1);

return statearr_32692;
})();
if(inst_32649){
var statearr_32693_35324 = state_32686__$1;
(statearr_32693_35324[(1)] = (5));

} else {
var statearr_32694_35325 = state_32686__$1;
(statearr_32694_35325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (15))){
var inst_32642 = (state_32686[(7)]);
var inst_32674 = cljs.core.vec(inst_32642);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32686__$1,(18),out,inst_32674);
} else {
if((state_val_32687 === (13))){
var inst_32669 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32695_35326 = state_32686__$1;
(statearr_32695_35326[(2)] = inst_32669);

(statearr_32695_35326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (6))){
var inst_32642 = (state_32686[(7)]);
var inst_32671 = inst_32642.length;
var inst_32672 = (inst_32671 > (0));
var state_32686__$1 = state_32686;
if(cljs.core.truth_(inst_32672)){
var statearr_32697_35327 = state_32686__$1;
(statearr_32697_35327[(1)] = (15));

} else {
var statearr_32698_35328 = state_32686__$1;
(statearr_32698_35328[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (17))){
var inst_32679 = (state_32686[(2)]);
var inst_32680 = cljs.core.async.close_BANG_(out);
var state_32686__$1 = (function (){var statearr_32699 = state_32686;
(statearr_32699[(10)] = inst_32679);

return statearr_32699;
})();
var statearr_32700_35329 = state_32686__$1;
(statearr_32700_35329[(2)] = inst_32680);

(statearr_32700_35329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (3))){
var inst_32684 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32686__$1,inst_32684);
} else {
if((state_val_32687 === (12))){
var inst_32642 = (state_32686[(7)]);
var inst_32662 = cljs.core.vec(inst_32642);
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32686__$1,(14),out,inst_32662);
} else {
if((state_val_32687 === (2))){
var state_32686__$1 = state_32686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32686__$1,(4),ch);
} else {
if((state_val_32687 === (11))){
var inst_32642 = (state_32686[(7)]);
var inst_32646 = (state_32686[(9)]);
var inst_32651 = (state_32686[(11)]);
var inst_32659 = inst_32642.push(inst_32646);
var tmp32701 = inst_32642;
var inst_32642__$1 = tmp32701;
var inst_32643 = inst_32651;
var state_32686__$1 = (function (){var statearr_32702 = state_32686;
(statearr_32702[(12)] = inst_32659);

(statearr_32702[(7)] = inst_32642__$1);

(statearr_32702[(8)] = inst_32643);

return statearr_32702;
})();
var statearr_32703_35330 = state_32686__$1;
(statearr_32703_35330[(2)] = null);

(statearr_32703_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (9))){
var inst_32643 = (state_32686[(8)]);
var inst_32655 = cljs.core.keyword_identical_QMARK_(inst_32643,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32686__$1 = state_32686;
var statearr_32704_35331 = state_32686__$1;
(statearr_32704_35331[(2)] = inst_32655);

(statearr_32704_35331[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (5))){
var inst_32652 = (state_32686[(13)]);
var inst_32646 = (state_32686[(9)]);
var inst_32643 = (state_32686[(8)]);
var inst_32651 = (state_32686[(11)]);
var inst_32651__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32646) : f.call(null,inst_32646));
var inst_32652__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32651__$1,inst_32643);
var state_32686__$1 = (function (){var statearr_32705 = state_32686;
(statearr_32705[(13)] = inst_32652__$1);

(statearr_32705[(11)] = inst_32651__$1);

return statearr_32705;
})();
if(inst_32652__$1){
var statearr_32706_35332 = state_32686__$1;
(statearr_32706_35332[(1)] = (8));

} else {
var statearr_32707_35333 = state_32686__$1;
(statearr_32707_35333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (14))){
var inst_32646 = (state_32686[(9)]);
var inst_32651 = (state_32686[(11)]);
var inst_32664 = (state_32686[(2)]);
var inst_32665 = [];
var inst_32666 = inst_32665.push(inst_32646);
var inst_32642 = inst_32665;
var inst_32643 = inst_32651;
var state_32686__$1 = (function (){var statearr_32709 = state_32686;
(statearr_32709[(14)] = inst_32664);

(statearr_32709[(15)] = inst_32666);

(statearr_32709[(7)] = inst_32642);

(statearr_32709[(8)] = inst_32643);

return statearr_32709;
})();
var statearr_32710_35334 = state_32686__$1;
(statearr_32710_35334[(2)] = null);

(statearr_32710_35334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (16))){
var state_32686__$1 = state_32686;
var statearr_32711_35335 = state_32686__$1;
(statearr_32711_35335[(2)] = null);

(statearr_32711_35335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (10))){
var inst_32657 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
if(cljs.core.truth_(inst_32657)){
var statearr_32712_35336 = state_32686__$1;
(statearr_32712_35336[(1)] = (11));

} else {
var statearr_32713_35337 = state_32686__$1;
(statearr_32713_35337[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (18))){
var inst_32676 = (state_32686[(2)]);
var state_32686__$1 = state_32686;
var statearr_32714_35338 = state_32686__$1;
(statearr_32714_35338[(2)] = inst_32676);

(statearr_32714_35338[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32687 === (8))){
var inst_32652 = (state_32686[(13)]);
var state_32686__$1 = state_32686;
var statearr_32715_35339 = state_32686__$1;
(statearr_32715_35339[(2)] = inst_32652);

(statearr_32715_35339[(1)] = (10));


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
var cljs$core$async$state_machine__29802__auto__ = null;
var cljs$core$async$state_machine__29802__auto____0 = (function (){
var statearr_32716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32716[(0)] = cljs$core$async$state_machine__29802__auto__);

(statearr_32716[(1)] = (1));

return statearr_32716;
});
var cljs$core$async$state_machine__29802__auto____1 = (function (state_32686){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_32686);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e32717){var ex__29805__auto__ = e32717;
var statearr_32718_35340 = state_32686;
(statearr_32718_35340[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_32686[(4)]))){
var statearr_32719_35341 = state_32686;
(statearr_32719_35341[(1)] = cljs.core.first((state_32686[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35342 = state_32686;
state_32686 = G__35342;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
cljs$core$async$state_machine__29802__auto__ = function(state_32686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29802__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29802__auto____1.call(this,state_32686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29802__auto____0;
cljs$core$async$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29802__auto____1;
return cljs$core$async$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_32721 = f__30134__auto__();
(statearr_32721[(6)] = c__30133__auto___35321);

return statearr_32721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
