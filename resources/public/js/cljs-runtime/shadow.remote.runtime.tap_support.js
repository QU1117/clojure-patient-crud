goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20589,p__20590){
var map__20592 = p__20589;
var map__20592__$1 = cljs.core.__destructure_map(map__20592);
var svc = map__20592__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20592__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20592__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20592__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20593 = p__20590;
var map__20593__$1 = cljs.core.__destructure_map(map__20593);
var msg = map__20593__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20593__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20599,p__20600){
var map__20601 = p__20599;
var map__20601__$1 = cljs.core.__destructure_map(map__20601);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20601__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20602 = p__20600;
var map__20602__$1 = cljs.core.__destructure_map(map__20602);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20602__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20607,p__20608){
var map__20609 = p__20607;
var map__20609__$1 = cljs.core.__destructure_map(map__20609);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20609__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20610 = p__20608;
var map__20610__$1 = cljs.core.__destructure_map(map__20610);
var msg = map__20610__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20610__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20613,tid){
var map__20614 = p__20613;
var map__20614__$1 = cljs.core.__destructure_map(map__20614);
var svc = map__20614__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20614__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20619 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20620 = null;
var count__20621 = (0);
var i__20622 = (0);
while(true){
if((i__20622 < count__20621)){
var vec__20637 = chunk__20620.cljs$core$IIndexed$_nth$arity$2(null,i__20622);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20637,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20637,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20650 = seq__20619;
var G__20651 = chunk__20620;
var G__20652 = count__20621;
var G__20653 = (i__20622 + (1));
seq__20619 = G__20650;
chunk__20620 = G__20651;
count__20621 = G__20652;
i__20622 = G__20653;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20619);
if(temp__5804__auto__){
var seq__20619__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20619__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20619__$1);
var G__20654 = cljs.core.chunk_rest(seq__20619__$1);
var G__20655 = c__5568__auto__;
var G__20656 = cljs.core.count(c__5568__auto__);
var G__20657 = (0);
seq__20619 = G__20654;
chunk__20620 = G__20655;
count__20621 = G__20656;
i__20622 = G__20657;
continue;
} else {
var vec__20640 = cljs.core.first(seq__20619__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20640,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20640,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20658 = cljs.core.next(seq__20619__$1);
var G__20659 = null;
var G__20660 = (0);
var G__20661 = (0);
seq__20619 = G__20658;
chunk__20620 = G__20659;
count__20621 = G__20660;
i__20622 = G__20661;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20615_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20615_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20616_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20616_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20617_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20617_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20618_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20618_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20648){
var map__20649 = p__20648;
var map__20649__$1 = cljs.core.__destructure_map(map__20649);
var svc = map__20649__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20649__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20649__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
