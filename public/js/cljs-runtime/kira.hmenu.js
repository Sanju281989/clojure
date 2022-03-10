goog.provide('kira.hmenu');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
kira.hmenu.srefreshdata = (function kira$hmenu$srefreshdata(){
kira.dash.get_files();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),kira.hmenu.seapp);
});
kira.hmenu.navbar = (function kira$hmenu$navbar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.bg-black.w-full.text-white.p-2.mb-2","div.flex.bg-black.w-full.text-white.p-2.mb-2",55680580),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.m-2.px-3.py-2.border-2","a.m-2.px-3.py-2.border-2",1293984708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#home",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return kira.hmenu.srefreshdata();
})], null),"HOME"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.m-2.px-3.py-2.border-2","a.m-2.px-3.py-2.border-2",1293984708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"welcome","welcome",-578152123));
})], null),"LOGOUT"], null)], null);
});

//# sourceMappingURL=kira.hmenu.js.map
