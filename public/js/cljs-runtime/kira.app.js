goog.provide('kira.app');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof kira !== 'undefined') && (typeof kira.app !== 'undefined') && (typeof kira.app.root_el !== 'undefined')){
} else {
kira.app.root_el = document.getElementById("root");
}
kira.app.product_detail = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["product-detail"], null),(function (){
return kira.components.product_detail.root;
}))));
kira.app.product_listing = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["product-listing"], null),(function (){
return kira.components.product_listing.root;
}))));
kira.app.sign_in = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sign-in"], null),(function (){
return kira.components.sign_in.root;
}))));
kira.app.sign_up = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sign-up"], null),(function (){
return kira.components.sign_up.root;
}))));
kira.app.account_overview = kira.util.lazy_component_STAR_((new shadow.lazy.Loadable(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["account-overview"], null),(function (){
return kira.components.account_overview.root;
}))));
kira.app.welcome = (function kira$app$welcome(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to my Shop!"], null);
});
kira.app.nav = (function kira$app$nav(){
var map__26496 = cljs.core.deref(kira.env.app_state);
var map__26496__$1 = cljs.core.__destructure_map(map__26496);
var state = map__26496__$1;
var signed_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26496__$1,new cljs.core.Keyword(null,"signed-in","signed-in",1370654736));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"home",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"welcome","welcome",-578152123));
})], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"product-list",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"product-listing","product-listing",-64748089));
})], null),"Product Listing"], null)], null),(cljs.core.truth_(signed_in)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"my-account",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"account-overview","account-overview",-363593031));
})], null),"My Account"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"sign-in","sign-in",552534406));
})], null),"Sign In"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kira.env.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"sign-up","sign-up",-1190725688));
})], null),"Sign Up"], null)], null)], null))], null);
});
kira.app.root = (function kira$app$root(){
var map__26497 = cljs.core.deref(kira.env.app_state);
var map__26497__$1 = cljs.core.__destructure_map(map__26497);
var state = map__26497__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26497__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Shop Example"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.app.nav,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react$index.Suspense,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fallback","fallback",761637929),reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading ..."], null))], null),(function (){var G__26498 = page;
var G__26498__$1 = (((G__26498 instanceof cljs.core.Keyword))?G__26498.fqn:null);
switch (G__26498__$1) {
case "product-listing":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.app.product_listing], null);

break;
case "product-detail":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.app.product_detail,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "sign-in":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.app.sign_in,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "sign-up":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.app.sign_up,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),"foo"], null)], null);

break;
case "account-overview":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),kira.app.account_overview,cljs.core.PersistentArrayMap.EMPTY], null);

break;
case "welcome":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.app.welcome,cljs.core.PersistentArrayMap.EMPTY], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Unknown page?"], null);

}
})()], null)], null);
});
kira.app.start = (function kira$app$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kira.app.root], null),kira.app.root_el);
});
kira.app.init = (function kira$app$init(){
return kira.app.start();
});

//# sourceMappingURL=kira.app.js.map
