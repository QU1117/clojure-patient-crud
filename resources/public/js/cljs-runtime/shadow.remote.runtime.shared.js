goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__19270,res){
var map__19271 = p__19270;
var map__19271__$1 = cljs.core.__destructure_map(map__19271);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19271__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19271__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__19272 = res;
var G__19272__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19272,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__19272);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19272__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__19272__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__19274 = arguments.length;
switch (G__19274) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__19275,msg,handlers,timeout_after_ms){
var map__19276 = p__19275;
var map__19276__$1 = cljs.core.__destructure_map(map__19276);
var runtime = map__19276__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19276__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19341 = arguments.length;
var i__5770__auto___19342 = (0);
while(true){
if((i__5770__auto___19342 < len__5769__auto___19341)){
args__5775__auto__.push((arguments[i__5770__auto___19342]));

var G__19343 = (i__5770__auto___19342 + (1));
i__5770__auto___19342 = G__19343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19280,ev,args){
var map__19281 = p__19280;
var map__19281__$1 = cljs.core.__destructure_map(map__19281);
var runtime = map__19281__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19281__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__19282 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19285 = null;
var count__19286 = (0);
var i__19287 = (0);
while(true){
if((i__19287 < count__19286)){
var ext = chunk__19285.cljs$core$IIndexed$_nth$arity$2(null,i__19287);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19344 = seq__19282;
var G__19345 = chunk__19285;
var G__19346 = count__19286;
var G__19347 = (i__19287 + (1));
seq__19282 = G__19344;
chunk__19285 = G__19345;
count__19286 = G__19346;
i__19287 = G__19347;
continue;
} else {
var G__19348 = seq__19282;
var G__19349 = chunk__19285;
var G__19350 = count__19286;
var G__19351 = (i__19287 + (1));
seq__19282 = G__19348;
chunk__19285 = G__19349;
count__19286 = G__19350;
i__19287 = G__19351;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19282);
if(temp__5804__auto__){
var seq__19282__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19282__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19282__$1);
var G__19352 = cljs.core.chunk_rest(seq__19282__$1);
var G__19353 = c__5568__auto__;
var G__19354 = cljs.core.count(c__5568__auto__);
var G__19355 = (0);
seq__19282 = G__19352;
chunk__19285 = G__19353;
count__19286 = G__19354;
i__19287 = G__19355;
continue;
} else {
var ext = cljs.core.first(seq__19282__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__19356 = cljs.core.next(seq__19282__$1);
var G__19357 = null;
var G__19358 = (0);
var G__19359 = (0);
seq__19282 = G__19356;
chunk__19285 = G__19357;
count__19286 = G__19358;
i__19287 = G__19359;
continue;
} else {
var G__19360 = cljs.core.next(seq__19282__$1);
var G__19361 = null;
var G__19362 = (0);
var G__19363 = (0);
seq__19282 = G__19360;
chunk__19285 = G__19361;
count__19286 = G__19362;
i__19287 = G__19363;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq19277){
var G__19278 = cljs.core.first(seq19277);
var seq19277__$1 = cljs.core.next(seq19277);
var G__19279 = cljs.core.first(seq19277__$1);
var seq19277__$2 = cljs.core.next(seq19277__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19278,G__19279,seq19277__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__19290,p__19291){
var map__19292 = p__19290;
var map__19292__$1 = cljs.core.__destructure_map(map__19292);
var runtime = map__19292__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19292__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19293 = p__19291;
var map__19293__$1 = cljs.core.__destructure_map(map__19293);
var msg = map__19293__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19293__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__19294 = cljs.core.deref(state_ref);
var map__19294__$1 = cljs.core.__destructure_map(map__19294);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19294__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19294__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__19295){
var map__19296 = p__19295;
var map__19296__$1 = cljs.core.__destructure_map(map__19296);
var runtime = map__19296__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19296__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__19297,msg){
var map__19298 = p__19297;
var map__19298__$1 = cljs.core.__destructure_map(map__19298);
var runtime = map__19298__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__19299,key,p__19300){
var map__19301 = p__19299;
var map__19301__$1 = cljs.core.__destructure_map(map__19301);
var state = map__19301__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19301__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__19302 = p__19300;
var map__19302__$1 = cljs.core.__destructure_map(map__19302);
var spec = map__19302__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19302__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__19304,key,spec){
var map__19305 = p__19304;
var map__19305__$1 = cljs.core.__destructure_map(map__19305);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19305__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__19306_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__19306_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__19307_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__19307_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__19308_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__19308_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__19309_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__19309_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__19310_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__19310_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__19311,key){
var map__19312 = p__19311;
var map__19312__$1 = cljs.core.__destructure_map(map__19312);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19312__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__19313,msg){
var map__19314 = p__19313;
var map__19314__$1 = cljs.core.__destructure_map(map__19314);
var runtime = map__19314__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19314__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__19315,p__19316){
var map__19317 = p__19315;
var map__19317__$1 = cljs.core.__destructure_map(map__19317);
var runtime = map__19317__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19317__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__19318 = p__19316;
var map__19318__$1 = cljs.core.__destructure_map(map__19318);
var msg = map__19318__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19318__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19318__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__19319 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__19321 = null;
var count__19322 = (0);
var i__19323 = (0);
while(true){
if((i__19323 < count__19322)){
var map__19331 = chunk__19321.cljs$core$IIndexed$_nth$arity$2(null,i__19323);
var map__19331__$1 = cljs.core.__destructure_map(map__19331);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19331__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19370 = seq__19319;
var G__19371 = chunk__19321;
var G__19372 = count__19322;
var G__19373 = (i__19323 + (1));
seq__19319 = G__19370;
chunk__19321 = G__19371;
count__19322 = G__19372;
i__19323 = G__19373;
continue;
} else {
var G__19374 = seq__19319;
var G__19375 = chunk__19321;
var G__19376 = count__19322;
var G__19377 = (i__19323 + (1));
seq__19319 = G__19374;
chunk__19321 = G__19375;
count__19322 = G__19376;
i__19323 = G__19377;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19319);
if(temp__5804__auto__){
var seq__19319__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19319__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19319__$1);
var G__19378 = cljs.core.chunk_rest(seq__19319__$1);
var G__19379 = c__5568__auto__;
var G__19380 = cljs.core.count(c__5568__auto__);
var G__19381 = (0);
seq__19319 = G__19378;
chunk__19321 = G__19379;
count__19322 = G__19380;
i__19323 = G__19381;
continue;
} else {
var map__19334 = cljs.core.first(seq__19319__$1);
var map__19334__$1 = cljs.core.__destructure_map(map__19334);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__19382 = cljs.core.next(seq__19319__$1);
var G__19383 = null;
var G__19384 = (0);
var G__19385 = (0);
seq__19319 = G__19382;
chunk__19321 = G__19383;
count__19322 = G__19384;
i__19323 = G__19385;
continue;
} else {
var G__19386 = cljs.core.next(seq__19319__$1);
var G__19387 = null;
var G__19388 = (0);
var G__19389 = (0);
seq__19319 = G__19386;
chunk__19321 = G__19387;
count__19322 = G__19388;
i__19323 = G__19389;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
