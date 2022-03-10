goog.provide('demo.app');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof demo !== 'undefined') && (typeof demo.app !== 'undefined') && (typeof demo.app.root_el !== 'undefined')){
} else {
demo.app.root_el = document.getElementById("root");
}
demo.app.product_detail = demo.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["product-detail"], null),(function (){
return demo.components.product_detail.root;
}))));
demo.app.product_listing = demo.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["product-listing"], null),(function (){
return demo.components.product_listing.root;
}))));
demo.app.sign_in = demo.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sign-in"], null),(function (){
return demo.components.sign_in.root;
}))));
demo.app.sign_up = demo.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sign-up"], null),(function (){
return demo.components.sign_up.root;
}))));
demo.app.account_overview = demo.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["account-overview"], null),(function (){
return demo.components.account_overview.root;
}))));
demo.app.welcome = (function demo$app$welcome(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to my Shop!"], null);
});
demo.app.nav = (function demo$app$nav(){
var map__36918 = cljs.core.deref(demo.env.app_state);
var map__36918__$1 = cljs.core.__destructure_map(map__36918);
var state = map__36918__$1;
var signed_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36918__$1,new cljs.core.Keyword(null,"signed-in","signed-in",1370654736));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#ss",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"welcome","welcome",-578152123));
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"product-listing","product-listing",-64748089));
})], null),"Product Listing"], null)], null),(cljs.core.truth_(signed_in)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"account-overview","account-overview",-363593031));
})], null),"My Account"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"sign-in","sign-in",552534406));
})], null),"Sign In"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(demo.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688));
})], null),"Sign Up"], null)], null)], null))], null);
});
demo.app.root = (function demo$app$root(){
var map__36919 = cljs.core.deref(demo.env.app_state);
var map__36919__$1 = cljs.core.__destructure_map(map__36919);
var state = map__36919__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36919__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Shop Example"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.app.nav,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react$index.Suspense,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading ..."], null))], null),(function (){var G__36920 = page;
var G__36920__$1 = (((G__36920 instanceof cljs.core.Keyword))?G__36920.fqn:null);
switch (G__36920__$1) {
case "product-listing":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),demo.app.product_listing], null);

break;
case "product-detail":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),demo.app.product_detail,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "sign-in":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),demo.app.sign_in,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "sign-up":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),demo.app.sign_up,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),"foo"], null)], null);

break;
case "account-overview":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),demo.app.account_overview,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "welcome":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.app.welcome,cljs.core.PersistentArrayMap.EMPTY], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Unknown page?"], null);

}
})()], null)], null);
});
demo.app.start = (function demo$app$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.app.root], null),demo.app.root_el);
});
demo.app.init = (function demo$app$init(){
return demo.app.start();
});

//# sourceMappingURL=demo.app.js.map
