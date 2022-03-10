goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33510 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33510(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33511 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33511(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32749 = coll;
var G__32750 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32749,G__32750) : shadow.dom.lazy_native_coll_seq.call(null,G__32749,G__32750));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32764 = arguments.length;
switch (G__32764) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32766 = arguments.length;
switch (G__32766) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32768 = arguments.length;
switch (G__32768) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32771 = arguments.length;
switch (G__32771) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32774 = arguments.length;
switch (G__32774) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32777 = arguments.length;
switch (G__32777) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32782){if((e32782 instanceof Object)){
var e = e32782;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32782;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32783 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32784 = null;
var count__32785 = (0);
var i__32786 = (0);
while(true){
if((i__32786 < count__32785)){
var el = chunk__32784.cljs$core$IIndexed$_nth$arity$2(null,i__32786);
var handler_33582__$1 = ((function (seq__32783,chunk__32784,count__32785,i__32786,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32783,chunk__32784,count__32785,i__32786,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33582__$1);


var G__33583 = seq__32783;
var G__33584 = chunk__32784;
var G__33585 = count__32785;
var G__33586 = (i__32786 + (1));
seq__32783 = G__33583;
chunk__32784 = G__33584;
count__32785 = G__33585;
i__32786 = G__33586;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32783);
if(temp__5753__auto__){
var seq__32783__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32783__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32783__$1);
var G__33589 = cljs.core.chunk_rest(seq__32783__$1);
var G__33590 = c__4679__auto__;
var G__33591 = cljs.core.count(c__4679__auto__);
var G__33592 = (0);
seq__32783 = G__33589;
chunk__32784 = G__33590;
count__32785 = G__33591;
i__32786 = G__33592;
continue;
} else {
var el = cljs.core.first(seq__32783__$1);
var handler_33594__$1 = ((function (seq__32783,chunk__32784,count__32785,i__32786,el,seq__32783__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32783,chunk__32784,count__32785,i__32786,el,seq__32783__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33594__$1);


var G__33595 = cljs.core.next(seq__32783__$1);
var G__33596 = null;
var G__33597 = (0);
var G__33598 = (0);
seq__32783 = G__33595;
chunk__32784 = G__33596;
count__32785 = G__33597;
i__32786 = G__33598;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32789 = arguments.length;
switch (G__32789) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32792 = cljs.core.seq(events);
var chunk__32793 = null;
var count__32794 = (0);
var i__32795 = (0);
while(true){
if((i__32795 < count__32794)){
var vec__32802 = chunk__32793.cljs$core$IIndexed$_nth$arity$2(null,i__32795);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32802,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33601 = seq__32792;
var G__33602 = chunk__32793;
var G__33603 = count__32794;
var G__33604 = (i__32795 + (1));
seq__32792 = G__33601;
chunk__32793 = G__33602;
count__32794 = G__33603;
i__32795 = G__33604;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32792);
if(temp__5753__auto__){
var seq__32792__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32792__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32792__$1);
var G__33606 = cljs.core.chunk_rest(seq__32792__$1);
var G__33607 = c__4679__auto__;
var G__33608 = cljs.core.count(c__4679__auto__);
var G__33609 = (0);
seq__32792 = G__33606;
chunk__32793 = G__33607;
count__32794 = G__33608;
i__32795 = G__33609;
continue;
} else {
var vec__32806 = cljs.core.first(seq__32792__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32806,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33611 = cljs.core.next(seq__32792__$1);
var G__33612 = null;
var G__33613 = (0);
var G__33614 = (0);
seq__32792 = G__33611;
chunk__32793 = G__33612;
count__32794 = G__33613;
i__32795 = G__33614;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32819 = cljs.core.seq(styles);
var chunk__32820 = null;
var count__32821 = (0);
var i__32822 = (0);
while(true){
if((i__32822 < count__32821)){
var vec__32833 = chunk__32820.cljs$core$IIndexed$_nth$arity$2(null,i__32822);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32833,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33616 = seq__32819;
var G__33617 = chunk__32820;
var G__33618 = count__32821;
var G__33619 = (i__32822 + (1));
seq__32819 = G__33616;
chunk__32820 = G__33617;
count__32821 = G__33618;
i__32822 = G__33619;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32819);
if(temp__5753__auto__){
var seq__32819__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32819__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32819__$1);
var G__33620 = cljs.core.chunk_rest(seq__32819__$1);
var G__33621 = c__4679__auto__;
var G__33622 = cljs.core.count(c__4679__auto__);
var G__33623 = (0);
seq__32819 = G__33620;
chunk__32820 = G__33621;
count__32821 = G__33622;
i__32822 = G__33623;
continue;
} else {
var vec__32836 = cljs.core.first(seq__32819__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32836,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33625 = cljs.core.next(seq__32819__$1);
var G__33626 = null;
var G__33627 = (0);
var G__33628 = (0);
seq__32819 = G__33625;
chunk__32820 = G__33626;
count__32821 = G__33627;
i__32822 = G__33628;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32840_33630 = key;
var G__32840_33631__$1 = (((G__32840_33630 instanceof cljs.core.Keyword))?G__32840_33630.fqn:null);
switch (G__32840_33631__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33633 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_33633,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_33633,"aria-");
}
})())){
el.setAttribute(ks_33633,value);
} else {
(el[ks_33633] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32869){
var map__32871 = p__32869;
var map__32871__$1 = cljs.core.__destructure_map(map__32871);
var props = map__32871__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32871__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32874 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32874,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32874,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32874,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32879 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32879,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32879;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32884 = arguments.length;
switch (G__32884) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32889){
var vec__32893 = p__32889;
var seq__32894 = cljs.core.seq(vec__32893);
var first__32895 = cljs.core.first(seq__32894);
var seq__32894__$1 = cljs.core.next(seq__32894);
var nn = first__32895;
var first__32895__$1 = cljs.core.first(seq__32894__$1);
var seq__32894__$2 = cljs.core.next(seq__32894__$1);
var np = first__32895__$1;
var nc = seq__32894__$2;
var node = vec__32893;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32898 = nn;
var G__32899 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32898,G__32899) : create_fn.call(null,G__32898,G__32899));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32910 = nn;
var G__32911 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32910,G__32911) : create_fn.call(null,G__32910,G__32911));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32912 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32912,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32912,(1),null);
var seq__32915_33635 = cljs.core.seq(node_children);
var chunk__32916_33636 = null;
var count__32917_33637 = (0);
var i__32918_33638 = (0);
while(true){
if((i__32918_33638 < count__32917_33637)){
var child_struct_33639 = chunk__32916_33636.cljs$core$IIndexed$_nth$arity$2(null,i__32918_33638);
var children_33640 = shadow.dom.dom_node(child_struct_33639);
if(cljs.core.seq_QMARK_(children_33640)){
var seq__32934_33641 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33640));
var chunk__32936_33642 = null;
var count__32937_33643 = (0);
var i__32938_33644 = (0);
while(true){
if((i__32938_33644 < count__32937_33643)){
var child_33645 = chunk__32936_33642.cljs$core$IIndexed$_nth$arity$2(null,i__32938_33644);
if(cljs.core.truth_(child_33645)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33645);


var G__33646 = seq__32934_33641;
var G__33647 = chunk__32936_33642;
var G__33648 = count__32937_33643;
var G__33649 = (i__32938_33644 + (1));
seq__32934_33641 = G__33646;
chunk__32936_33642 = G__33647;
count__32937_33643 = G__33648;
i__32938_33644 = G__33649;
continue;
} else {
var G__33650 = seq__32934_33641;
var G__33651 = chunk__32936_33642;
var G__33652 = count__32937_33643;
var G__33653 = (i__32938_33644 + (1));
seq__32934_33641 = G__33650;
chunk__32936_33642 = G__33651;
count__32937_33643 = G__33652;
i__32938_33644 = G__33653;
continue;
}
} else {
var temp__5753__auto___33654 = cljs.core.seq(seq__32934_33641);
if(temp__5753__auto___33654){
var seq__32934_33655__$1 = temp__5753__auto___33654;
if(cljs.core.chunked_seq_QMARK_(seq__32934_33655__$1)){
var c__4679__auto___33656 = cljs.core.chunk_first(seq__32934_33655__$1);
var G__33657 = cljs.core.chunk_rest(seq__32934_33655__$1);
var G__33658 = c__4679__auto___33656;
var G__33659 = cljs.core.count(c__4679__auto___33656);
var G__33660 = (0);
seq__32934_33641 = G__33657;
chunk__32936_33642 = G__33658;
count__32937_33643 = G__33659;
i__32938_33644 = G__33660;
continue;
} else {
var child_33661 = cljs.core.first(seq__32934_33655__$1);
if(cljs.core.truth_(child_33661)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33661);


var G__33662 = cljs.core.next(seq__32934_33655__$1);
var G__33663 = null;
var G__33664 = (0);
var G__33665 = (0);
seq__32934_33641 = G__33662;
chunk__32936_33642 = G__33663;
count__32937_33643 = G__33664;
i__32938_33644 = G__33665;
continue;
} else {
var G__33666 = cljs.core.next(seq__32934_33655__$1);
var G__33667 = null;
var G__33668 = (0);
var G__33669 = (0);
seq__32934_33641 = G__33666;
chunk__32936_33642 = G__33667;
count__32937_33643 = G__33668;
i__32938_33644 = G__33669;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33640);
}


var G__33670 = seq__32915_33635;
var G__33671 = chunk__32916_33636;
var G__33672 = count__32917_33637;
var G__33673 = (i__32918_33638 + (1));
seq__32915_33635 = G__33670;
chunk__32916_33636 = G__33671;
count__32917_33637 = G__33672;
i__32918_33638 = G__33673;
continue;
} else {
var temp__5753__auto___33674 = cljs.core.seq(seq__32915_33635);
if(temp__5753__auto___33674){
var seq__32915_33675__$1 = temp__5753__auto___33674;
if(cljs.core.chunked_seq_QMARK_(seq__32915_33675__$1)){
var c__4679__auto___33676 = cljs.core.chunk_first(seq__32915_33675__$1);
var G__33677 = cljs.core.chunk_rest(seq__32915_33675__$1);
var G__33678 = c__4679__auto___33676;
var G__33679 = cljs.core.count(c__4679__auto___33676);
var G__33680 = (0);
seq__32915_33635 = G__33677;
chunk__32916_33636 = G__33678;
count__32917_33637 = G__33679;
i__32918_33638 = G__33680;
continue;
} else {
var child_struct_33681 = cljs.core.first(seq__32915_33675__$1);
var children_33682 = shadow.dom.dom_node(child_struct_33681);
if(cljs.core.seq_QMARK_(children_33682)){
var seq__32947_33683 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33682));
var chunk__32949_33684 = null;
var count__32950_33685 = (0);
var i__32951_33686 = (0);
while(true){
if((i__32951_33686 < count__32950_33685)){
var child_33687 = chunk__32949_33684.cljs$core$IIndexed$_nth$arity$2(null,i__32951_33686);
if(cljs.core.truth_(child_33687)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33687);


var G__33688 = seq__32947_33683;
var G__33689 = chunk__32949_33684;
var G__33690 = count__32950_33685;
var G__33691 = (i__32951_33686 + (1));
seq__32947_33683 = G__33688;
chunk__32949_33684 = G__33689;
count__32950_33685 = G__33690;
i__32951_33686 = G__33691;
continue;
} else {
var G__33692 = seq__32947_33683;
var G__33693 = chunk__32949_33684;
var G__33694 = count__32950_33685;
var G__33695 = (i__32951_33686 + (1));
seq__32947_33683 = G__33692;
chunk__32949_33684 = G__33693;
count__32950_33685 = G__33694;
i__32951_33686 = G__33695;
continue;
}
} else {
var temp__5753__auto___33696__$1 = cljs.core.seq(seq__32947_33683);
if(temp__5753__auto___33696__$1){
var seq__32947_33697__$1 = temp__5753__auto___33696__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32947_33697__$1)){
var c__4679__auto___33698 = cljs.core.chunk_first(seq__32947_33697__$1);
var G__33699 = cljs.core.chunk_rest(seq__32947_33697__$1);
var G__33700 = c__4679__auto___33698;
var G__33701 = cljs.core.count(c__4679__auto___33698);
var G__33702 = (0);
seq__32947_33683 = G__33699;
chunk__32949_33684 = G__33700;
count__32950_33685 = G__33701;
i__32951_33686 = G__33702;
continue;
} else {
var child_33703 = cljs.core.first(seq__32947_33697__$1);
if(cljs.core.truth_(child_33703)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33703);


var G__33704 = cljs.core.next(seq__32947_33697__$1);
var G__33705 = null;
var G__33706 = (0);
var G__33707 = (0);
seq__32947_33683 = G__33704;
chunk__32949_33684 = G__33705;
count__32950_33685 = G__33706;
i__32951_33686 = G__33707;
continue;
} else {
var G__33708 = cljs.core.next(seq__32947_33697__$1);
var G__33709 = null;
var G__33710 = (0);
var G__33711 = (0);
seq__32947_33683 = G__33708;
chunk__32949_33684 = G__33709;
count__32950_33685 = G__33710;
i__32951_33686 = G__33711;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33682);
}


var G__33716 = cljs.core.next(seq__32915_33675__$1);
var G__33717 = null;
var G__33718 = (0);
var G__33719 = (0);
seq__32915_33635 = G__33716;
chunk__32916_33636 = G__33717;
count__32917_33637 = G__33718;
i__32918_33638 = G__33719;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32988 = cljs.core.seq(node);
var chunk__32989 = null;
var count__32990 = (0);
var i__32991 = (0);
while(true){
if((i__32991 < count__32990)){
var n = chunk__32989.cljs$core$IIndexed$_nth$arity$2(null,i__32991);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33733 = seq__32988;
var G__33734 = chunk__32989;
var G__33735 = count__32990;
var G__33736 = (i__32991 + (1));
seq__32988 = G__33733;
chunk__32989 = G__33734;
count__32990 = G__33735;
i__32991 = G__33736;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32988);
if(temp__5753__auto__){
var seq__32988__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32988__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__32988__$1);
var G__33741 = cljs.core.chunk_rest(seq__32988__$1);
var G__33742 = c__4679__auto__;
var G__33743 = cljs.core.count(c__4679__auto__);
var G__33744 = (0);
seq__32988 = G__33741;
chunk__32989 = G__33742;
count__32990 = G__33743;
i__32991 = G__33744;
continue;
} else {
var n = cljs.core.first(seq__32988__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33745 = cljs.core.next(seq__32988__$1);
var G__33746 = null;
var G__33747 = (0);
var G__33748 = (0);
seq__32988 = G__33745;
chunk__32989 = G__33746;
count__32990 = G__33747;
i__32991 = G__33748;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33017 = arguments.length;
switch (G__33017) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33027 = arguments.length;
switch (G__33027) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33041 = arguments.length;
switch (G__33041) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33752 = arguments.length;
var i__4865__auto___33753 = (0);
while(true){
if((i__4865__auto___33753 < len__4864__auto___33752)){
args__4870__auto__.push((arguments[i__4865__auto___33753]));

var G__33754 = (i__4865__auto___33753 + (1));
i__4865__auto___33753 = G__33754;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33045_33758 = cljs.core.seq(nodes);
var chunk__33046_33759 = null;
var count__33047_33760 = (0);
var i__33048_33761 = (0);
while(true){
if((i__33048_33761 < count__33047_33760)){
var node_33762 = chunk__33046_33759.cljs$core$IIndexed$_nth$arity$2(null,i__33048_33761);
fragment.appendChild(shadow.dom._to_dom(node_33762));


var G__33763 = seq__33045_33758;
var G__33764 = chunk__33046_33759;
var G__33765 = count__33047_33760;
var G__33766 = (i__33048_33761 + (1));
seq__33045_33758 = G__33763;
chunk__33046_33759 = G__33764;
count__33047_33760 = G__33765;
i__33048_33761 = G__33766;
continue;
} else {
var temp__5753__auto___33767 = cljs.core.seq(seq__33045_33758);
if(temp__5753__auto___33767){
var seq__33045_33768__$1 = temp__5753__auto___33767;
if(cljs.core.chunked_seq_QMARK_(seq__33045_33768__$1)){
var c__4679__auto___33769 = cljs.core.chunk_first(seq__33045_33768__$1);
var G__33770 = cljs.core.chunk_rest(seq__33045_33768__$1);
var G__33771 = c__4679__auto___33769;
var G__33772 = cljs.core.count(c__4679__auto___33769);
var G__33773 = (0);
seq__33045_33758 = G__33770;
chunk__33046_33759 = G__33771;
count__33047_33760 = G__33772;
i__33048_33761 = G__33773;
continue;
} else {
var node_33774 = cljs.core.first(seq__33045_33768__$1);
fragment.appendChild(shadow.dom._to_dom(node_33774));


var G__33775 = cljs.core.next(seq__33045_33768__$1);
var G__33776 = null;
var G__33777 = (0);
var G__33778 = (0);
seq__33045_33758 = G__33775;
chunk__33046_33759 = G__33776;
count__33047_33760 = G__33777;
i__33048_33761 = G__33778;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33044){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33044));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33051_33779 = cljs.core.seq(scripts);
var chunk__33052_33780 = null;
var count__33053_33781 = (0);
var i__33054_33782 = (0);
while(true){
if((i__33054_33782 < count__33053_33781)){
var vec__33061_33783 = chunk__33052_33780.cljs$core$IIndexed$_nth$arity$2(null,i__33054_33782);
var script_tag_33784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33061_33783,(0),null);
var script_body_33785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33061_33783,(1),null);
eval(script_body_33785);


var G__33786 = seq__33051_33779;
var G__33787 = chunk__33052_33780;
var G__33788 = count__33053_33781;
var G__33789 = (i__33054_33782 + (1));
seq__33051_33779 = G__33786;
chunk__33052_33780 = G__33787;
count__33053_33781 = G__33788;
i__33054_33782 = G__33789;
continue;
} else {
var temp__5753__auto___33790 = cljs.core.seq(seq__33051_33779);
if(temp__5753__auto___33790){
var seq__33051_33791__$1 = temp__5753__auto___33790;
if(cljs.core.chunked_seq_QMARK_(seq__33051_33791__$1)){
var c__4679__auto___33792 = cljs.core.chunk_first(seq__33051_33791__$1);
var G__33793 = cljs.core.chunk_rest(seq__33051_33791__$1);
var G__33794 = c__4679__auto___33792;
var G__33795 = cljs.core.count(c__4679__auto___33792);
var G__33796 = (0);
seq__33051_33779 = G__33793;
chunk__33052_33780 = G__33794;
count__33053_33781 = G__33795;
i__33054_33782 = G__33796;
continue;
} else {
var vec__33064_33797 = cljs.core.first(seq__33051_33791__$1);
var script_tag_33798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33064_33797,(0),null);
var script_body_33799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33064_33797,(1),null);
eval(script_body_33799);


var G__33800 = cljs.core.next(seq__33051_33791__$1);
var G__33801 = null;
var G__33802 = (0);
var G__33803 = (0);
seq__33051_33779 = G__33800;
chunk__33052_33780 = G__33801;
count__33053_33781 = G__33802;
i__33054_33782 = G__33803;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33072){
var vec__33073 = p__33072;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33073,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33073,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33089 = arguments.length;
switch (G__33089) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33116 = cljs.core.seq(style_keys);
var chunk__33118 = null;
var count__33119 = (0);
var i__33120 = (0);
while(true){
if((i__33120 < count__33119)){
var it = chunk__33118.cljs$core$IIndexed$_nth$arity$2(null,i__33120);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33805 = seq__33116;
var G__33806 = chunk__33118;
var G__33807 = count__33119;
var G__33808 = (i__33120 + (1));
seq__33116 = G__33805;
chunk__33118 = G__33806;
count__33119 = G__33807;
i__33120 = G__33808;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33116);
if(temp__5753__auto__){
var seq__33116__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33116__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33116__$1);
var G__33809 = cljs.core.chunk_rest(seq__33116__$1);
var G__33810 = c__4679__auto__;
var G__33811 = cljs.core.count(c__4679__auto__);
var G__33812 = (0);
seq__33116 = G__33809;
chunk__33118 = G__33810;
count__33119 = G__33811;
i__33120 = G__33812;
continue;
} else {
var it = cljs.core.first(seq__33116__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33813 = cljs.core.next(seq__33116__$1);
var G__33814 = null;
var G__33815 = (0);
var G__33816 = (0);
seq__33116 = G__33813;
chunk__33118 = G__33814;
count__33119 = G__33815;
i__33120 = G__33816;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33145,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33159 = k33145;
var G__33159__$1 = (((G__33159 instanceof cljs.core.Keyword))?G__33159.fqn:null);
switch (G__33159__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33145,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33164){
var vec__33165 = p__33164;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33165,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33165,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33144){
var self__ = this;
var G__33144__$1 = this;
return (new cljs.core.RecordIter((0),G__33144__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33146,other33147){
var self__ = this;
var this33146__$1 = this;
return (((!((other33147 == null)))) && ((((this33146__$1.constructor === other33147.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33146__$1.x,other33147.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33146__$1.y,other33147.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33146__$1.__extmap,other33147.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33145){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33246 = k33145;
var G__33246__$1 = (((G__33246 instanceof cljs.core.Keyword))?G__33246.fqn:null);
switch (G__33246__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33145);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33144){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33254 = cljs.core.keyword_identical_QMARK_;
var expr__33255 = k__4511__auto__;
if(cljs.core.truth_((pred__33254.cljs$core$IFn$_invoke$arity$2 ? pred__33254.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33255) : pred__33254.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33255)))){
return (new shadow.dom.Coordinate(G__33144,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33254.cljs$core$IFn$_invoke$arity$2 ? pred__33254.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33255) : pred__33254.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33255)))){
return (new shadow.dom.Coordinate(self__.x,G__33144,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33144),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33144){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33144,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33153){
var extmap__4542__auto__ = (function (){var G__33272 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33153,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33153)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33272);
} else {
return G__33272;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33153),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33153),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k33274,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__33278 = k33274;
var G__33278__$1 = (((G__33278 instanceof cljs.core.Keyword))?G__33278.fqn:null);
switch (G__33278__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33274,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__33279){
var vec__33280 = p__33279;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33280,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33280,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33273){
var self__ = this;
var G__33273__$1 = this;
return (new cljs.core.RecordIter((0),G__33273__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33275,other33276){
var self__ = this;
var this33275__$1 = this;
return (((!((other33276 == null)))) && ((((this33275__$1.constructor === other33276.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33275__$1.w,other33276.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33275__$1.h,other33276.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33275__$1.__extmap,other33276.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k33274){
var self__ = this;
var this__4509__auto____$1 = this;
var G__33290 = k33274;
var G__33290__$1 = (((G__33290 instanceof cljs.core.Keyword))?G__33290.fqn:null);
switch (G__33290__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k33274);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__33273){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__33291 = cljs.core.keyword_identical_QMARK_;
var expr__33292 = k__4511__auto__;
if(cljs.core.truth_((pred__33291.cljs$core$IFn$_invoke$arity$2 ? pred__33291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__33292) : pred__33291.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__33292)))){
return (new shadow.dom.Size(G__33273,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33291.cljs$core$IFn$_invoke$arity$2 ? pred__33291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__33292) : pred__33291.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__33292)))){
return (new shadow.dom.Size(self__.w,G__33273,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__33273),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__33273){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33273,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33277){
var extmap__4542__auto__ = (function (){var G__33306 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33277,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33277)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33306);
} else {
return G__33306;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33277),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33277),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__33872 = (i + (1));
var G__33873 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33872;
ret = G__33873;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33340){
var vec__33341 = p__33340;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33341,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33875 = ps;
var G__33876 = (i + (1));
el__$1 = G__33875;
i = G__33876;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33363 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33363,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33363,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33363,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33366_33877 = cljs.core.seq(props);
var chunk__33367_33878 = null;
var count__33368_33879 = (0);
var i__33369_33880 = (0);
while(true){
if((i__33369_33880 < count__33368_33879)){
var vec__33383_33881 = chunk__33367_33878.cljs$core$IIndexed$_nth$arity$2(null,i__33369_33880);
var k_33882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33383_33881,(0),null);
var v_33883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33383_33881,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_33882);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33882),v_33883);


var G__33884 = seq__33366_33877;
var G__33885 = chunk__33367_33878;
var G__33886 = count__33368_33879;
var G__33887 = (i__33369_33880 + (1));
seq__33366_33877 = G__33884;
chunk__33367_33878 = G__33885;
count__33368_33879 = G__33886;
i__33369_33880 = G__33887;
continue;
} else {
var temp__5753__auto___33888 = cljs.core.seq(seq__33366_33877);
if(temp__5753__auto___33888){
var seq__33366_33889__$1 = temp__5753__auto___33888;
if(cljs.core.chunked_seq_QMARK_(seq__33366_33889__$1)){
var c__4679__auto___33890 = cljs.core.chunk_first(seq__33366_33889__$1);
var G__33891 = cljs.core.chunk_rest(seq__33366_33889__$1);
var G__33892 = c__4679__auto___33890;
var G__33893 = cljs.core.count(c__4679__auto___33890);
var G__33894 = (0);
seq__33366_33877 = G__33891;
chunk__33367_33878 = G__33892;
count__33368_33879 = G__33893;
i__33369_33880 = G__33894;
continue;
} else {
var vec__33386_33895 = cljs.core.first(seq__33366_33889__$1);
var k_33896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33386_33895,(0),null);
var v_33897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33386_33895,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_33896);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33896),v_33897);


var G__33898 = cljs.core.next(seq__33366_33889__$1);
var G__33899 = null;
var G__33900 = (0);
var G__33901 = (0);
seq__33366_33877 = G__33898;
chunk__33367_33878 = G__33899;
count__33368_33879 = G__33900;
i__33369_33880 = G__33901;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33393 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33393,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33393,(1),null);
var seq__33397_33902 = cljs.core.seq(node_children);
var chunk__33399_33903 = null;
var count__33400_33904 = (0);
var i__33401_33905 = (0);
while(true){
if((i__33401_33905 < count__33400_33904)){
var child_struct_33906 = chunk__33399_33903.cljs$core$IIndexed$_nth$arity$2(null,i__33401_33905);
if((!((child_struct_33906 == null)))){
if(typeof child_struct_33906 === 'string'){
var text_33907 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33907),child_struct_33906].join(''));
} else {
var children_33908 = shadow.dom.svg_node(child_struct_33906);
if(cljs.core.seq_QMARK_(children_33908)){
var seq__33420_33909 = cljs.core.seq(children_33908);
var chunk__33422_33910 = null;
var count__33423_33911 = (0);
var i__33424_33912 = (0);
while(true){
if((i__33424_33912 < count__33423_33911)){
var child_33913 = chunk__33422_33910.cljs$core$IIndexed$_nth$arity$2(null,i__33424_33912);
if(cljs.core.truth_(child_33913)){
node.appendChild(child_33913);


var G__33914 = seq__33420_33909;
var G__33915 = chunk__33422_33910;
var G__33916 = count__33423_33911;
var G__33917 = (i__33424_33912 + (1));
seq__33420_33909 = G__33914;
chunk__33422_33910 = G__33915;
count__33423_33911 = G__33916;
i__33424_33912 = G__33917;
continue;
} else {
var G__33918 = seq__33420_33909;
var G__33919 = chunk__33422_33910;
var G__33920 = count__33423_33911;
var G__33921 = (i__33424_33912 + (1));
seq__33420_33909 = G__33918;
chunk__33422_33910 = G__33919;
count__33423_33911 = G__33920;
i__33424_33912 = G__33921;
continue;
}
} else {
var temp__5753__auto___33922 = cljs.core.seq(seq__33420_33909);
if(temp__5753__auto___33922){
var seq__33420_33923__$1 = temp__5753__auto___33922;
if(cljs.core.chunked_seq_QMARK_(seq__33420_33923__$1)){
var c__4679__auto___33924 = cljs.core.chunk_first(seq__33420_33923__$1);
var G__33925 = cljs.core.chunk_rest(seq__33420_33923__$1);
var G__33926 = c__4679__auto___33924;
var G__33927 = cljs.core.count(c__4679__auto___33924);
var G__33928 = (0);
seq__33420_33909 = G__33925;
chunk__33422_33910 = G__33926;
count__33423_33911 = G__33927;
i__33424_33912 = G__33928;
continue;
} else {
var child_33929 = cljs.core.first(seq__33420_33923__$1);
if(cljs.core.truth_(child_33929)){
node.appendChild(child_33929);


var G__33930 = cljs.core.next(seq__33420_33923__$1);
var G__33931 = null;
var G__33932 = (0);
var G__33933 = (0);
seq__33420_33909 = G__33930;
chunk__33422_33910 = G__33931;
count__33423_33911 = G__33932;
i__33424_33912 = G__33933;
continue;
} else {
var G__33934 = cljs.core.next(seq__33420_33923__$1);
var G__33935 = null;
var G__33936 = (0);
var G__33937 = (0);
seq__33420_33909 = G__33934;
chunk__33422_33910 = G__33935;
count__33423_33911 = G__33936;
i__33424_33912 = G__33937;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33908);
}
}


var G__33938 = seq__33397_33902;
var G__33939 = chunk__33399_33903;
var G__33940 = count__33400_33904;
var G__33941 = (i__33401_33905 + (1));
seq__33397_33902 = G__33938;
chunk__33399_33903 = G__33939;
count__33400_33904 = G__33940;
i__33401_33905 = G__33941;
continue;
} else {
var G__33942 = seq__33397_33902;
var G__33943 = chunk__33399_33903;
var G__33944 = count__33400_33904;
var G__33945 = (i__33401_33905 + (1));
seq__33397_33902 = G__33942;
chunk__33399_33903 = G__33943;
count__33400_33904 = G__33944;
i__33401_33905 = G__33945;
continue;
}
} else {
var temp__5753__auto___33946 = cljs.core.seq(seq__33397_33902);
if(temp__5753__auto___33946){
var seq__33397_33947__$1 = temp__5753__auto___33946;
if(cljs.core.chunked_seq_QMARK_(seq__33397_33947__$1)){
var c__4679__auto___33948 = cljs.core.chunk_first(seq__33397_33947__$1);
var G__33949 = cljs.core.chunk_rest(seq__33397_33947__$1);
var G__33950 = c__4679__auto___33948;
var G__33951 = cljs.core.count(c__4679__auto___33948);
var G__33952 = (0);
seq__33397_33902 = G__33949;
chunk__33399_33903 = G__33950;
count__33400_33904 = G__33951;
i__33401_33905 = G__33952;
continue;
} else {
var child_struct_33953 = cljs.core.first(seq__33397_33947__$1);
if((!((child_struct_33953 == null)))){
if(typeof child_struct_33953 === 'string'){
var text_33954 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33954),child_struct_33953].join(''));
} else {
var children_33955 = shadow.dom.svg_node(child_struct_33953);
if(cljs.core.seq_QMARK_(children_33955)){
var seq__33437_33956 = cljs.core.seq(children_33955);
var chunk__33439_33957 = null;
var count__33440_33958 = (0);
var i__33441_33959 = (0);
while(true){
if((i__33441_33959 < count__33440_33958)){
var child_33960 = chunk__33439_33957.cljs$core$IIndexed$_nth$arity$2(null,i__33441_33959);
if(cljs.core.truth_(child_33960)){
node.appendChild(child_33960);


var G__33961 = seq__33437_33956;
var G__33962 = chunk__33439_33957;
var G__33963 = count__33440_33958;
var G__33964 = (i__33441_33959 + (1));
seq__33437_33956 = G__33961;
chunk__33439_33957 = G__33962;
count__33440_33958 = G__33963;
i__33441_33959 = G__33964;
continue;
} else {
var G__33965 = seq__33437_33956;
var G__33966 = chunk__33439_33957;
var G__33967 = count__33440_33958;
var G__33968 = (i__33441_33959 + (1));
seq__33437_33956 = G__33965;
chunk__33439_33957 = G__33966;
count__33440_33958 = G__33967;
i__33441_33959 = G__33968;
continue;
}
} else {
var temp__5753__auto___33969__$1 = cljs.core.seq(seq__33437_33956);
if(temp__5753__auto___33969__$1){
var seq__33437_33970__$1 = temp__5753__auto___33969__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33437_33970__$1)){
var c__4679__auto___33971 = cljs.core.chunk_first(seq__33437_33970__$1);
var G__33972 = cljs.core.chunk_rest(seq__33437_33970__$1);
var G__33973 = c__4679__auto___33971;
var G__33974 = cljs.core.count(c__4679__auto___33971);
var G__33975 = (0);
seq__33437_33956 = G__33972;
chunk__33439_33957 = G__33973;
count__33440_33958 = G__33974;
i__33441_33959 = G__33975;
continue;
} else {
var child_33976 = cljs.core.first(seq__33437_33970__$1);
if(cljs.core.truth_(child_33976)){
node.appendChild(child_33976);


var G__33977 = cljs.core.next(seq__33437_33970__$1);
var G__33978 = null;
var G__33979 = (0);
var G__33980 = (0);
seq__33437_33956 = G__33977;
chunk__33439_33957 = G__33978;
count__33440_33958 = G__33979;
i__33441_33959 = G__33980;
continue;
} else {
var G__33981 = cljs.core.next(seq__33437_33970__$1);
var G__33982 = null;
var G__33983 = (0);
var G__33984 = (0);
seq__33437_33956 = G__33981;
chunk__33439_33957 = G__33982;
count__33440_33958 = G__33983;
i__33441_33959 = G__33984;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33955);
}
}


var G__33985 = cljs.core.next(seq__33397_33947__$1);
var G__33986 = null;
var G__33987 = (0);
var G__33988 = (0);
seq__33397_33902 = G__33985;
chunk__33399_33903 = G__33986;
count__33400_33904 = G__33987;
i__33401_33905 = G__33988;
continue;
} else {
var G__33989 = cljs.core.next(seq__33397_33947__$1);
var G__33990 = null;
var G__33991 = (0);
var G__33992 = (0);
seq__33397_33902 = G__33989;
chunk__33399_33903 = G__33990;
count__33400_33904 = G__33991;
i__33401_33905 = G__33992;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33999 = arguments.length;
var i__4865__auto___34000 = (0);
while(true){
if((i__4865__auto___34000 < len__4864__auto___33999)){
args__4870__auto__.push((arguments[i__4865__auto___34000]));

var G__34001 = (i__4865__auto___34000 + (1));
i__4865__auto___34000 = G__34001;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33472){
var G__33473 = cljs.core.first(seq33472);
var seq33472__$1 = cljs.core.next(seq33472);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33473,seq33472__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33482 = arguments.length;
switch (G__33482) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__30133__auto___34012 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30134__auto__ = (function (){var switch__29801__auto__ = (function (state_33491){
var state_val_33492 = (state_33491[(1)]);
if((state_val_33492 === (1))){
var state_33491__$1 = state_33491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33491__$1,(2),once_or_cleanup);
} else {
if((state_val_33492 === (2))){
var inst_33488 = (state_33491[(2)]);
var inst_33489 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33491__$1 = (function (){var statearr_33495 = state_33491;
(statearr_33495[(7)] = inst_33488);

return statearr_33495;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33491__$1,inst_33489);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__29802__auto__ = null;
var shadow$dom$state_machine__29802__auto____0 = (function (){
var statearr_33496 = [null,null,null,null,null,null,null,null];
(statearr_33496[(0)] = shadow$dom$state_machine__29802__auto__);

(statearr_33496[(1)] = (1));

return statearr_33496;
});
var shadow$dom$state_machine__29802__auto____1 = (function (state_33491){
while(true){
var ret_value__29803__auto__ = (function (){try{while(true){
var result__29804__auto__ = switch__29801__auto__(state_33491);
if(cljs.core.keyword_identical_QMARK_(result__29804__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29804__auto__;
}
break;
}
}catch (e33498){var ex__29805__auto__ = e33498;
var statearr_33500_34014 = state_33491;
(statearr_33500_34014[(2)] = ex__29805__auto__);


if(cljs.core.seq((state_33491[(4)]))){
var statearr_33501_34015 = state_33491;
(statearr_33501_34015[(1)] = cljs.core.first((state_33491[(4)])));

} else {
throw ex__29805__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__29803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34016 = state_33491;
state_33491 = G__34016;
continue;
} else {
return ret_value__29803__auto__;
}
break;
}
});
shadow$dom$state_machine__29802__auto__ = function(state_33491){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__29802__auto____0.call(this);
case 1:
return shadow$dom$state_machine__29802__auto____1.call(this,state_33491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__29802__auto____0;
shadow$dom$state_machine__29802__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__29802__auto____1;
return shadow$dom$state_machine__29802__auto__;
})()
})();
var state__30135__auto__ = (function (){var statearr_33502 = f__30134__auto__();
(statearr_33502[(6)] = c__30133__auto___34012);

return statearr_33502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30135__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
