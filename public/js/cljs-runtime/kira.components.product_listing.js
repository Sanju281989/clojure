goog.provide('kira.components.product_listing');
kira.components.product_listing.root = (function kira$components$product_listing$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Product Listing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4652__auto__ = (function kira$components$product_listing$root_$_iter__26534(s__26535){
return (new cljs.core.LazySeq(null,(function (){
var s__26535__$1 = s__26535;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__26535__$1);
if(temp__5753__auto__){
var s__26535__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26535__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__26535__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__26537 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__26536 = (0);
while(true){
if((i__26536 < size__4651__auto__)){
var map__26539 = cljs.core._nth(c__4650__auto__,i__26536);
var map__26539__$1 = cljs.core.__destructure_map(map__26539);
var product = map__26539__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26539__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26539__$1,new cljs.core.Keyword(null,"title","title",636505583));
cljs.core.chunk_append(b__26537,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26536,map__26539,map__26539__$1,product,id,title,c__4650__auto__,size__4651__auto__,b__26537,s__26535__$2,temp__5753__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"product-detail","product-detail",-1140703171),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"product","product",1363474257),product], 0));
});})(i__26536,map__26539,map__26539__$1,product,id,title,c__4650__auto__,size__4651__auto__,b__26537,s__26535__$2,temp__5753__auto__))
], null),title], null)], null));

var G__26541 = (i__26536 + (1));
i__26536 = G__26541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26537),kira$components$product_listing$root_$_iter__26534(cljs.core.chunk_rest(s__26535__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26537),null);
}
} else {
var map__26540 = cljs.core.first(s__26535__$2);
var map__26540__$1 = cljs.core.__destructure_map(map__26540);
var product = map__26540__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26540__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26540__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26540,map__26540__$1,product,id,title,s__26535__$2,temp__5753__auto__){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"product-detail","product-detail",-1140703171),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"product","product",1363474257),product], 0));
});})(map__26540,map__26540__$1,product,id,title,s__26535__$2,temp__5753__auto__))
], null),title], null)], null),kira$components$product_listing$root_$_iter__26534(cljs.core.rest(s__26535__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Foo"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),"Bar"], null)], null));
})()], null)], null);
});

//# sourceMappingURL=kira.components.product_listing.js.map
