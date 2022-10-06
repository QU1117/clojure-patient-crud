goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20137){
var map__20138 = p__20137;
var map__20138__$1 = cljs.core.__destructure_map(map__20138);
var m = map__20138__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20138__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20138__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20142_20355 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20143_20356 = null;
var count__20144_20357 = (0);
var i__20145_20358 = (0);
while(true){
if((i__20145_20358 < count__20144_20357)){
var f_20359 = chunk__20143_20356.cljs$core$IIndexed$_nth$arity$2(null,i__20145_20358);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20359], 0));


var G__20360 = seq__20142_20355;
var G__20361 = chunk__20143_20356;
var G__20362 = count__20144_20357;
var G__20363 = (i__20145_20358 + (1));
seq__20142_20355 = G__20360;
chunk__20143_20356 = G__20361;
count__20144_20357 = G__20362;
i__20145_20358 = G__20363;
continue;
} else {
var temp__5804__auto___20364 = cljs.core.seq(seq__20142_20355);
if(temp__5804__auto___20364){
var seq__20142_20365__$1 = temp__5804__auto___20364;
if(cljs.core.chunked_seq_QMARK_(seq__20142_20365__$1)){
var c__5568__auto___20366 = cljs.core.chunk_first(seq__20142_20365__$1);
var G__20367 = cljs.core.chunk_rest(seq__20142_20365__$1);
var G__20368 = c__5568__auto___20366;
var G__20369 = cljs.core.count(c__5568__auto___20366);
var G__20370 = (0);
seq__20142_20355 = G__20367;
chunk__20143_20356 = G__20368;
count__20144_20357 = G__20369;
i__20145_20358 = G__20370;
continue;
} else {
var f_20371 = cljs.core.first(seq__20142_20365__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20371], 0));


var G__20378 = cljs.core.next(seq__20142_20365__$1);
var G__20379 = null;
var G__20380 = (0);
var G__20381 = (0);
seq__20142_20355 = G__20378;
chunk__20143_20356 = G__20379;
count__20144_20357 = G__20380;
i__20145_20358 = G__20381;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20382 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20382], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20382)))?cljs.core.second(arglists_20382):arglists_20382)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20152_20384 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20153_20385 = null;
var count__20154_20386 = (0);
var i__20155_20387 = (0);
while(true){
if((i__20155_20387 < count__20154_20386)){
var vec__20167_20388 = chunk__20153_20385.cljs$core$IIndexed$_nth$arity$2(null,i__20155_20387);
var name_20389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20167_20388,(0),null);
var map__20170_20390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20167_20388,(1),null);
var map__20170_20391__$1 = cljs.core.__destructure_map(map__20170_20390);
var doc_20392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170_20391__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20170_20391__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20389], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20393], 0));

if(cljs.core.truth_(doc_20392)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20392], 0));
} else {
}


var G__20394 = seq__20152_20384;
var G__20395 = chunk__20153_20385;
var G__20396 = count__20154_20386;
var G__20397 = (i__20155_20387 + (1));
seq__20152_20384 = G__20394;
chunk__20153_20385 = G__20395;
count__20154_20386 = G__20396;
i__20155_20387 = G__20397;
continue;
} else {
var temp__5804__auto___20398 = cljs.core.seq(seq__20152_20384);
if(temp__5804__auto___20398){
var seq__20152_20399__$1 = temp__5804__auto___20398;
if(cljs.core.chunked_seq_QMARK_(seq__20152_20399__$1)){
var c__5568__auto___20400 = cljs.core.chunk_first(seq__20152_20399__$1);
var G__20401 = cljs.core.chunk_rest(seq__20152_20399__$1);
var G__20402 = c__5568__auto___20400;
var G__20403 = cljs.core.count(c__5568__auto___20400);
var G__20404 = (0);
seq__20152_20384 = G__20401;
chunk__20153_20385 = G__20402;
count__20154_20386 = G__20403;
i__20155_20387 = G__20404;
continue;
} else {
var vec__20171_20406 = cljs.core.first(seq__20152_20399__$1);
var name_20407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171_20406,(0),null);
var map__20174_20408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20171_20406,(1),null);
var map__20174_20409__$1 = cljs.core.__destructure_map(map__20174_20408);
var doc_20410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20174_20409__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20174_20409__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20407], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20411], 0));

if(cljs.core.truth_(doc_20410)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20410], 0));
} else {
}


var G__20412 = cljs.core.next(seq__20152_20399__$1);
var G__20413 = null;
var G__20414 = (0);
var G__20415 = (0);
seq__20152_20384 = G__20412;
chunk__20153_20385 = G__20413;
count__20154_20386 = G__20414;
i__20155_20387 = G__20415;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20196 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20197 = null;
var count__20198 = (0);
var i__20199 = (0);
while(true){
if((i__20199 < count__20198)){
var role = chunk__20197.cljs$core$IIndexed$_nth$arity$2(null,i__20199);
var temp__5804__auto___20416__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20416__$1)){
var spec_20417 = temp__5804__auto___20416__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20417)], 0));
} else {
}


var G__20418 = seq__20196;
var G__20419 = chunk__20197;
var G__20420 = count__20198;
var G__20421 = (i__20199 + (1));
seq__20196 = G__20418;
chunk__20197 = G__20419;
count__20198 = G__20420;
i__20199 = G__20421;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20196);
if(temp__5804__auto____$1){
var seq__20196__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20196__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20196__$1);
var G__20422 = cljs.core.chunk_rest(seq__20196__$1);
var G__20423 = c__5568__auto__;
var G__20424 = cljs.core.count(c__5568__auto__);
var G__20425 = (0);
seq__20196 = G__20422;
chunk__20197 = G__20423;
count__20198 = G__20424;
i__20199 = G__20425;
continue;
} else {
var role = cljs.core.first(seq__20196__$1);
var temp__5804__auto___20427__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20427__$2)){
var spec_20428 = temp__5804__auto___20427__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20428)], 0));
} else {
}


var G__20433 = cljs.core.next(seq__20196__$1);
var G__20434 = null;
var G__20435 = (0);
var G__20436 = (0);
seq__20196 = G__20433;
chunk__20197 = G__20434;
count__20198 = G__20435;
i__20199 = G__20436;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20437 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20438 = cljs.core.ex_cause(t);
via = G__20437;
t = G__20438;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20282 = datafied_throwable;
var map__20282__$1 = cljs.core.__destructure_map(map__20282);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20282__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20282__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20282__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20283 = cljs.core.last(via);
var map__20283__$1 = cljs.core.__destructure_map(map__20283);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20283__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20283__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20283__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20284 = data;
var map__20284__$1 = cljs.core.__destructure_map(map__20284);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20284__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20284__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20284__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20285 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20285__$1 = cljs.core.__destructure_map(map__20285);
var top_data = map__20285__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20286 = phase;
var G__20286__$1 = (((G__20286 instanceof cljs.core.Keyword))?G__20286.fqn:null);
switch (G__20286__$1) {
case "read-source":
var map__20287 = data;
var map__20287__$1 = cljs.core.__destructure_map(map__20287);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20287__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20287__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20288 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20288__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20288,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20288);
var G__20288__$2 = (cljs.core.truth_((function (){var fexpr__20289 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20289.cljs$core$IFn$_invoke$arity$1 ? fexpr__20289.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20289.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20288__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20288__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20288__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20288__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20290 = top_data;
var G__20290__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20290,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20290);
var G__20290__$2 = (cljs.core.truth_((function (){var fexpr__20295 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20295.cljs$core$IFn$_invoke$arity$1 ? fexpr__20295.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20295.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20290__$1);
var G__20290__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20290__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20290__$2);
var G__20290__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20290__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20290__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20290__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20290__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20296 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20296,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20296,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20296,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20296,(3),null);
var G__20301 = top_data;
var G__20301__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20301,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20301);
var G__20301__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20301__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20301__$1);
var G__20301__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20301__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20301__$2);
var G__20301__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20301__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20301__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20301__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20301__$4;
}

break;
case "execution":
var vec__20304 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20304,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20304,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20304,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20304,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20280_SHARP_){
var or__5045__auto__ = (p1__20280_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20307 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20307.cljs$core$IFn$_invoke$arity$1 ? fexpr__20307.cljs$core$IFn$_invoke$arity$1(p1__20280_SHARP_) : fexpr__20307.call(null,p1__20280_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20308 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20308__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20308,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20308);
var G__20308__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20308__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20308__$1);
var G__20308__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20308__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20308__$2);
var G__20308__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20308__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20308__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20308__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20308__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20286__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20311){
var map__20312 = p__20311;
var map__20312__$1 = cljs.core.__destructure_map(map__20312);
var triage_data = map__20312__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20312__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20314 = phase;
var G__20314__$1 = (((G__20314 instanceof cljs.core.Keyword))?G__20314.fqn:null);
switch (G__20314__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20315 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20316 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20317 = loc;
var G__20318 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20319_20453 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20320_20454 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20321_20455 = true;
var _STAR_print_fn_STAR__temp_val__20322_20456 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20321_20455);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20322_20456);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20309_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20309_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20320_20454);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20319_20453);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20315,G__20316,G__20317,G__20318) : format.call(null,G__20315,G__20316,G__20317,G__20318));

break;
case "macroexpansion":
var G__20324 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20325 = cause_type;
var G__20326 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20327 = loc;
var G__20328 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20324,G__20325,G__20326,G__20327,G__20328) : format.call(null,G__20324,G__20325,G__20326,G__20327,G__20328));

break;
case "compile-syntax-check":
var G__20329 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20330 = cause_type;
var G__20331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20332 = loc;
var G__20333 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20329,G__20330,G__20331,G__20332,G__20333) : format.call(null,G__20329,G__20330,G__20331,G__20332,G__20333));

break;
case "compilation":
var G__20334 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20335 = cause_type;
var G__20336 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20337 = loc;
var G__20338 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20334,G__20335,G__20336,G__20337,G__20338) : format.call(null,G__20334,G__20335,G__20336,G__20337,G__20338));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20339 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20340 = symbol;
var G__20341 = loc;
var G__20342 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20343_20460 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20344_20461 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20345_20462 = true;
var _STAR_print_fn_STAR__temp_val__20346_20463 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20345_20462);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20346_20463);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20310_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20310_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20344_20461);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20343_20460);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20339,G__20340,G__20341,G__20342) : format.call(null,G__20339,G__20340,G__20341,G__20342));
} else {
var G__20347 = "Execution error%s at %s(%s).\n%s\n";
var G__20348 = cause_type;
var G__20349 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20350 = loc;
var G__20351 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20347,G__20348,G__20349,G__20350,G__20351) : format.call(null,G__20347,G__20348,G__20349,G__20350,G__20351));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20314__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
