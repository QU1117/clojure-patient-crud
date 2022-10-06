goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18196 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18196(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18197 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18197(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17538 = coll;
var G__17539 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17538,G__17539) : shadow.dom.lazy_native_coll_seq.call(null,G__17538,G__17539));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__17569 = arguments.length;
switch (G__17569) {
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
var G__17578 = arguments.length;
switch (G__17578) {
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
var G__17590 = arguments.length;
switch (G__17590) {
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
var G__17597 = arguments.length;
switch (G__17597) {
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
var G__17608 = arguments.length;
switch (G__17608) {
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
var G__17621 = arguments.length;
switch (G__17621) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17631){if((e17631 instanceof Object)){
var e = e17631;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17631;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17639 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17640 = null;
var count__17641 = (0);
var i__17642 = (0);
while(true){
if((i__17642 < count__17641)){
var el = chunk__17640.cljs$core$IIndexed$_nth$arity$2(null,i__17642);
var handler_18204__$1 = ((function (seq__17639,chunk__17640,count__17641,i__17642,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17639,chunk__17640,count__17641,i__17642,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18204__$1);


var G__18205 = seq__17639;
var G__18206 = chunk__17640;
var G__18207 = count__17641;
var G__18208 = (i__17642 + (1));
seq__17639 = G__18205;
chunk__17640 = G__18206;
count__17641 = G__18207;
i__17642 = G__18208;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17639);
if(temp__5804__auto__){
var seq__17639__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17639__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17639__$1);
var G__18209 = cljs.core.chunk_rest(seq__17639__$1);
var G__18210 = c__5568__auto__;
var G__18211 = cljs.core.count(c__5568__auto__);
var G__18212 = (0);
seq__17639 = G__18209;
chunk__17640 = G__18210;
count__17641 = G__18211;
i__17642 = G__18212;
continue;
} else {
var el = cljs.core.first(seq__17639__$1);
var handler_18213__$1 = ((function (seq__17639,chunk__17640,count__17641,i__17642,el,seq__17639__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17639,chunk__17640,count__17641,i__17642,el,seq__17639__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18213__$1);


var G__18215 = cljs.core.next(seq__17639__$1);
var G__18216 = null;
var G__18217 = (0);
var G__18218 = (0);
seq__17639 = G__18215;
chunk__17640 = G__18216;
count__17641 = G__18217;
i__17642 = G__18218;
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
var G__17662 = arguments.length;
switch (G__17662) {
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
var seq__17667 = cljs.core.seq(events);
var chunk__17668 = null;
var count__17669 = (0);
var i__17670 = (0);
while(true){
if((i__17670 < count__17669)){
var vec__17681 = chunk__17668.cljs$core$IIndexed$_nth$arity$2(null,i__17670);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17681,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17681,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18221 = seq__17667;
var G__18222 = chunk__17668;
var G__18223 = count__17669;
var G__18224 = (i__17670 + (1));
seq__17667 = G__18221;
chunk__17668 = G__18222;
count__17669 = G__18223;
i__17670 = G__18224;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17667);
if(temp__5804__auto__){
var seq__17667__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17667__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17667__$1);
var G__18225 = cljs.core.chunk_rest(seq__17667__$1);
var G__18226 = c__5568__auto__;
var G__18227 = cljs.core.count(c__5568__auto__);
var G__18228 = (0);
seq__17667 = G__18225;
chunk__17668 = G__18226;
count__17669 = G__18227;
i__17670 = G__18228;
continue;
} else {
var vec__17687 = cljs.core.first(seq__17667__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17687,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18229 = cljs.core.next(seq__17667__$1);
var G__18230 = null;
var G__18231 = (0);
var G__18232 = (0);
seq__17667 = G__18229;
chunk__17668 = G__18230;
count__17669 = G__18231;
i__17670 = G__18232;
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
var seq__17694 = cljs.core.seq(styles);
var chunk__17695 = null;
var count__17696 = (0);
var i__17697 = (0);
while(true){
if((i__17697 < count__17696)){
var vec__17712 = chunk__17695.cljs$core$IIndexed$_nth$arity$2(null,i__17697);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17712,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17712,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18236 = seq__17694;
var G__18237 = chunk__17695;
var G__18238 = count__17696;
var G__18239 = (i__17697 + (1));
seq__17694 = G__18236;
chunk__17695 = G__18237;
count__17696 = G__18238;
i__17697 = G__18239;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17694);
if(temp__5804__auto__){
var seq__17694__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17694__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17694__$1);
var G__18240 = cljs.core.chunk_rest(seq__17694__$1);
var G__18241 = c__5568__auto__;
var G__18242 = cljs.core.count(c__5568__auto__);
var G__18243 = (0);
seq__17694 = G__18240;
chunk__17695 = G__18241;
count__17696 = G__18242;
i__17697 = G__18243;
continue;
} else {
var vec__17717 = cljs.core.first(seq__17694__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17717,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18244 = cljs.core.next(seq__17694__$1);
var G__18245 = null;
var G__18246 = (0);
var G__18247 = (0);
seq__17694 = G__18244;
chunk__17695 = G__18245;
count__17696 = G__18246;
i__17697 = G__18247;
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
var G__17725_18248 = key;
var G__17725_18249__$1 = (((G__17725_18248 instanceof cljs.core.Keyword))?G__17725_18248.fqn:null);
switch (G__17725_18249__$1) {
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
var ks_18255 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18255,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18255,"aria-");
}
})())){
el.setAttribute(ks_18255,value);
} else {
(el[ks_18255] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17755){
var map__17756 = p__17755;
var map__17756__$1 = cljs.core.__destructure_map(map__17756);
var props = map__17756__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17756__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17757 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17757,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17757,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17757,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17763 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17763,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17763;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17767 = arguments.length;
switch (G__17767) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17771){
var vec__17773 = p__17771;
var seq__17774 = cljs.core.seq(vec__17773);
var first__17775 = cljs.core.first(seq__17774);
var seq__17774__$1 = cljs.core.next(seq__17774);
var nn = first__17775;
var first__17775__$1 = cljs.core.first(seq__17774__$1);
var seq__17774__$2 = cljs.core.next(seq__17774__$1);
var np = first__17775__$1;
var nc = seq__17774__$2;
var node = vec__17773;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17777 = nn;
var G__17778 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17777,G__17778) : create_fn.call(null,G__17777,G__17778));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17781 = nn;
var G__17782 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17781,G__17782) : create_fn.call(null,G__17781,G__17782));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17786 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17786,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17786,(1),null);
var seq__17789_18269 = cljs.core.seq(node_children);
var chunk__17790_18270 = null;
var count__17791_18271 = (0);
var i__17792_18272 = (0);
while(true){
if((i__17792_18272 < count__17791_18271)){
var child_struct_18273 = chunk__17790_18270.cljs$core$IIndexed$_nth$arity$2(null,i__17792_18272);
var children_18274 = shadow.dom.dom_node(child_struct_18273);
if(cljs.core.seq_QMARK_(children_18274)){
var seq__17820_18275 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18274));
var chunk__17822_18276 = null;
var count__17823_18277 = (0);
var i__17824_18278 = (0);
while(true){
if((i__17824_18278 < count__17823_18277)){
var child_18279 = chunk__17822_18276.cljs$core$IIndexed$_nth$arity$2(null,i__17824_18278);
if(cljs.core.truth_(child_18279)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18279);


var G__18280 = seq__17820_18275;
var G__18281 = chunk__17822_18276;
var G__18282 = count__17823_18277;
var G__18283 = (i__17824_18278 + (1));
seq__17820_18275 = G__18280;
chunk__17822_18276 = G__18281;
count__17823_18277 = G__18282;
i__17824_18278 = G__18283;
continue;
} else {
var G__18284 = seq__17820_18275;
var G__18285 = chunk__17822_18276;
var G__18286 = count__17823_18277;
var G__18287 = (i__17824_18278 + (1));
seq__17820_18275 = G__18284;
chunk__17822_18276 = G__18285;
count__17823_18277 = G__18286;
i__17824_18278 = G__18287;
continue;
}
} else {
var temp__5804__auto___18288 = cljs.core.seq(seq__17820_18275);
if(temp__5804__auto___18288){
var seq__17820_18289__$1 = temp__5804__auto___18288;
if(cljs.core.chunked_seq_QMARK_(seq__17820_18289__$1)){
var c__5568__auto___18290 = cljs.core.chunk_first(seq__17820_18289__$1);
var G__18291 = cljs.core.chunk_rest(seq__17820_18289__$1);
var G__18292 = c__5568__auto___18290;
var G__18293 = cljs.core.count(c__5568__auto___18290);
var G__18294 = (0);
seq__17820_18275 = G__18291;
chunk__17822_18276 = G__18292;
count__17823_18277 = G__18293;
i__17824_18278 = G__18294;
continue;
} else {
var child_18295 = cljs.core.first(seq__17820_18289__$1);
if(cljs.core.truth_(child_18295)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18295);


var G__18296 = cljs.core.next(seq__17820_18289__$1);
var G__18297 = null;
var G__18298 = (0);
var G__18299 = (0);
seq__17820_18275 = G__18296;
chunk__17822_18276 = G__18297;
count__17823_18277 = G__18298;
i__17824_18278 = G__18299;
continue;
} else {
var G__18300 = cljs.core.next(seq__17820_18289__$1);
var G__18301 = null;
var G__18302 = (0);
var G__18303 = (0);
seq__17820_18275 = G__18300;
chunk__17822_18276 = G__18301;
count__17823_18277 = G__18302;
i__17824_18278 = G__18303;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18274);
}


var G__18304 = seq__17789_18269;
var G__18305 = chunk__17790_18270;
var G__18306 = count__17791_18271;
var G__18307 = (i__17792_18272 + (1));
seq__17789_18269 = G__18304;
chunk__17790_18270 = G__18305;
count__17791_18271 = G__18306;
i__17792_18272 = G__18307;
continue;
} else {
var temp__5804__auto___18308 = cljs.core.seq(seq__17789_18269);
if(temp__5804__auto___18308){
var seq__17789_18309__$1 = temp__5804__auto___18308;
if(cljs.core.chunked_seq_QMARK_(seq__17789_18309__$1)){
var c__5568__auto___18310 = cljs.core.chunk_first(seq__17789_18309__$1);
var G__18311 = cljs.core.chunk_rest(seq__17789_18309__$1);
var G__18312 = c__5568__auto___18310;
var G__18313 = cljs.core.count(c__5568__auto___18310);
var G__18314 = (0);
seq__17789_18269 = G__18311;
chunk__17790_18270 = G__18312;
count__17791_18271 = G__18313;
i__17792_18272 = G__18314;
continue;
} else {
var child_struct_18315 = cljs.core.first(seq__17789_18309__$1);
var children_18316 = shadow.dom.dom_node(child_struct_18315);
if(cljs.core.seq_QMARK_(children_18316)){
var seq__17842_18317 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18316));
var chunk__17844_18318 = null;
var count__17845_18319 = (0);
var i__17846_18320 = (0);
while(true){
if((i__17846_18320 < count__17845_18319)){
var child_18321 = chunk__17844_18318.cljs$core$IIndexed$_nth$arity$2(null,i__17846_18320);
if(cljs.core.truth_(child_18321)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18321);


var G__18322 = seq__17842_18317;
var G__18323 = chunk__17844_18318;
var G__18324 = count__17845_18319;
var G__18325 = (i__17846_18320 + (1));
seq__17842_18317 = G__18322;
chunk__17844_18318 = G__18323;
count__17845_18319 = G__18324;
i__17846_18320 = G__18325;
continue;
} else {
var G__18326 = seq__17842_18317;
var G__18327 = chunk__17844_18318;
var G__18328 = count__17845_18319;
var G__18329 = (i__17846_18320 + (1));
seq__17842_18317 = G__18326;
chunk__17844_18318 = G__18327;
count__17845_18319 = G__18328;
i__17846_18320 = G__18329;
continue;
}
} else {
var temp__5804__auto___18337__$1 = cljs.core.seq(seq__17842_18317);
if(temp__5804__auto___18337__$1){
var seq__17842_18338__$1 = temp__5804__auto___18337__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17842_18338__$1)){
var c__5568__auto___18339 = cljs.core.chunk_first(seq__17842_18338__$1);
var G__18340 = cljs.core.chunk_rest(seq__17842_18338__$1);
var G__18341 = c__5568__auto___18339;
var G__18342 = cljs.core.count(c__5568__auto___18339);
var G__18343 = (0);
seq__17842_18317 = G__18340;
chunk__17844_18318 = G__18341;
count__17845_18319 = G__18342;
i__17846_18320 = G__18343;
continue;
} else {
var child_18344 = cljs.core.first(seq__17842_18338__$1);
if(cljs.core.truth_(child_18344)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18344);


var G__18345 = cljs.core.next(seq__17842_18338__$1);
var G__18346 = null;
var G__18347 = (0);
var G__18348 = (0);
seq__17842_18317 = G__18345;
chunk__17844_18318 = G__18346;
count__17845_18319 = G__18347;
i__17846_18320 = G__18348;
continue;
} else {
var G__18349 = cljs.core.next(seq__17842_18338__$1);
var G__18350 = null;
var G__18351 = (0);
var G__18352 = (0);
seq__17842_18317 = G__18349;
chunk__17844_18318 = G__18350;
count__17845_18319 = G__18351;
i__17846_18320 = G__18352;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18316);
}


var G__18353 = cljs.core.next(seq__17789_18309__$1);
var G__18354 = null;
var G__18355 = (0);
var G__18356 = (0);
seq__17789_18269 = G__18353;
chunk__17790_18270 = G__18354;
count__17791_18271 = G__18355;
i__17792_18272 = G__18356;
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
var seq__17858 = cljs.core.seq(node);
var chunk__17859 = null;
var count__17860 = (0);
var i__17861 = (0);
while(true){
if((i__17861 < count__17860)){
var n = chunk__17859.cljs$core$IIndexed$_nth$arity$2(null,i__17861);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18360 = seq__17858;
var G__18361 = chunk__17859;
var G__18362 = count__17860;
var G__18363 = (i__17861 + (1));
seq__17858 = G__18360;
chunk__17859 = G__18361;
count__17860 = G__18362;
i__17861 = G__18363;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17858);
if(temp__5804__auto__){
var seq__17858__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17858__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17858__$1);
var G__18364 = cljs.core.chunk_rest(seq__17858__$1);
var G__18365 = c__5568__auto__;
var G__18366 = cljs.core.count(c__5568__auto__);
var G__18367 = (0);
seq__17858 = G__18364;
chunk__17859 = G__18365;
count__17860 = G__18366;
i__17861 = G__18367;
continue;
} else {
var n = cljs.core.first(seq__17858__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18368 = cljs.core.next(seq__17858__$1);
var G__18369 = null;
var G__18370 = (0);
var G__18371 = (0);
seq__17858 = G__18368;
chunk__17859 = G__18369;
count__17860 = G__18370;
i__17861 = G__18371;
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
var G__17879 = arguments.length;
switch (G__17879) {
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
var G__17885 = arguments.length;
switch (G__17885) {
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
var G__17899 = arguments.length;
switch (G__17899) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___18378 = arguments.length;
var i__5770__auto___18379 = (0);
while(true){
if((i__5770__auto___18379 < len__5769__auto___18378)){
args__5775__auto__.push((arguments[i__5770__auto___18379]));

var G__18380 = (i__5770__auto___18379 + (1));
i__5770__auto___18379 = G__18380;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17918_18381 = cljs.core.seq(nodes);
var chunk__17919_18382 = null;
var count__17920_18383 = (0);
var i__17921_18384 = (0);
while(true){
if((i__17921_18384 < count__17920_18383)){
var node_18385 = chunk__17919_18382.cljs$core$IIndexed$_nth$arity$2(null,i__17921_18384);
fragment.appendChild(shadow.dom._to_dom(node_18385));


var G__18386 = seq__17918_18381;
var G__18387 = chunk__17919_18382;
var G__18388 = count__17920_18383;
var G__18389 = (i__17921_18384 + (1));
seq__17918_18381 = G__18386;
chunk__17919_18382 = G__18387;
count__17920_18383 = G__18388;
i__17921_18384 = G__18389;
continue;
} else {
var temp__5804__auto___18390 = cljs.core.seq(seq__17918_18381);
if(temp__5804__auto___18390){
var seq__17918_18391__$1 = temp__5804__auto___18390;
if(cljs.core.chunked_seq_QMARK_(seq__17918_18391__$1)){
var c__5568__auto___18392 = cljs.core.chunk_first(seq__17918_18391__$1);
var G__18393 = cljs.core.chunk_rest(seq__17918_18391__$1);
var G__18394 = c__5568__auto___18392;
var G__18395 = cljs.core.count(c__5568__auto___18392);
var G__18396 = (0);
seq__17918_18381 = G__18393;
chunk__17919_18382 = G__18394;
count__17920_18383 = G__18395;
i__17921_18384 = G__18396;
continue;
} else {
var node_18397 = cljs.core.first(seq__17918_18391__$1);
fragment.appendChild(shadow.dom._to_dom(node_18397));


var G__18398 = cljs.core.next(seq__17918_18391__$1);
var G__18399 = null;
var G__18400 = (0);
var G__18401 = (0);
seq__17918_18381 = G__18398;
chunk__17919_18382 = G__18399;
count__17920_18383 = G__18400;
i__17921_18384 = G__18401;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17914){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17914));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17933_18402 = cljs.core.seq(scripts);
var chunk__17934_18403 = null;
var count__17935_18404 = (0);
var i__17936_18405 = (0);
while(true){
if((i__17936_18405 < count__17935_18404)){
var vec__17950_18406 = chunk__17934_18403.cljs$core$IIndexed$_nth$arity$2(null,i__17936_18405);
var script_tag_18407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17950_18406,(0),null);
var script_body_18408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17950_18406,(1),null);
eval(script_body_18408);


var G__18409 = seq__17933_18402;
var G__18410 = chunk__17934_18403;
var G__18411 = count__17935_18404;
var G__18412 = (i__17936_18405 + (1));
seq__17933_18402 = G__18409;
chunk__17934_18403 = G__18410;
count__17935_18404 = G__18411;
i__17936_18405 = G__18412;
continue;
} else {
var temp__5804__auto___18413 = cljs.core.seq(seq__17933_18402);
if(temp__5804__auto___18413){
var seq__17933_18414__$1 = temp__5804__auto___18413;
if(cljs.core.chunked_seq_QMARK_(seq__17933_18414__$1)){
var c__5568__auto___18415 = cljs.core.chunk_first(seq__17933_18414__$1);
var G__18416 = cljs.core.chunk_rest(seq__17933_18414__$1);
var G__18417 = c__5568__auto___18415;
var G__18418 = cljs.core.count(c__5568__auto___18415);
var G__18419 = (0);
seq__17933_18402 = G__18416;
chunk__17934_18403 = G__18417;
count__17935_18404 = G__18418;
i__17936_18405 = G__18419;
continue;
} else {
var vec__17954_18420 = cljs.core.first(seq__17933_18414__$1);
var script_tag_18421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17954_18420,(0),null);
var script_body_18422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17954_18420,(1),null);
eval(script_body_18422);


var G__18423 = cljs.core.next(seq__17933_18414__$1);
var G__18424 = null;
var G__18425 = (0);
var G__18426 = (0);
seq__17933_18402 = G__18423;
chunk__17934_18403 = G__18424;
count__17935_18404 = G__18425;
i__17936_18405 = G__18426;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17960){
var vec__17961 = p__17960;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17961,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17961,(1),null);
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
var G__17975 = arguments.length;
switch (G__17975) {
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
var seq__17981 = cljs.core.seq(style_keys);
var chunk__17982 = null;
var count__17983 = (0);
var i__17984 = (0);
while(true){
if((i__17984 < count__17983)){
var it = chunk__17982.cljs$core$IIndexed$_nth$arity$2(null,i__17984);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18439 = seq__17981;
var G__18440 = chunk__17982;
var G__18441 = count__17983;
var G__18442 = (i__17984 + (1));
seq__17981 = G__18439;
chunk__17982 = G__18440;
count__17983 = G__18441;
i__17984 = G__18442;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17981);
if(temp__5804__auto__){
var seq__17981__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17981__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17981__$1);
var G__18443 = cljs.core.chunk_rest(seq__17981__$1);
var G__18444 = c__5568__auto__;
var G__18445 = cljs.core.count(c__5568__auto__);
var G__18446 = (0);
seq__17981 = G__18443;
chunk__17982 = G__18444;
count__17983 = G__18445;
i__17984 = G__18446;
continue;
} else {
var it = cljs.core.first(seq__17981__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18447 = cljs.core.next(seq__17981__$1);
var G__18448 = null;
var G__18449 = (0);
var G__18450 = (0);
seq__17981 = G__18447;
chunk__17982 = G__18448;
count__17983 = G__18449;
i__17984 = G__18450;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17987,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18000 = k17987;
var G__18000__$1 = (((G__18000 instanceof cljs.core.Keyword))?G__18000.fqn:null);
switch (G__18000__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17987,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18003){
var vec__18005 = p__18003;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18005,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17986){
var self__ = this;
var G__17986__$1 = this;
return (new cljs.core.RecordIter((0),G__17986__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17988,other17989){
var self__ = this;
var this17988__$1 = this;
return (((!((other17989 == null)))) && ((((this17988__$1.constructor === other17989.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17988__$1.x,other17989.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17988__$1.y,other17989.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17988__$1.__extmap,other17989.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17987){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18024 = k17987;
var G__18024__$1 = (((G__18024 instanceof cljs.core.Keyword))?G__18024.fqn:null);
switch (G__18024__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17987);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17986){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18028 = cljs.core.keyword_identical_QMARK_;
var expr__18029 = k__5352__auto__;
if(cljs.core.truth_((pred__18028.cljs$core$IFn$_invoke$arity$2 ? pred__18028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18029) : pred__18028.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18029)))){
return (new shadow.dom.Coordinate(G__17986,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18028.cljs$core$IFn$_invoke$arity$2 ? pred__18028.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18029) : pred__18028.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18029)))){
return (new shadow.dom.Coordinate(self__.x,G__17986,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17986),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17986){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17986,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17991){
var extmap__5385__auto__ = (function (){var G__18043 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17991,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17991)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18043);
} else {
return G__18043;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17991),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17991),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18053,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18062 = k18053;
var G__18062__$1 = (((G__18062 instanceof cljs.core.Keyword))?G__18062.fqn:null);
switch (G__18062__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18053,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18065){
var vec__18067 = p__18065;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18067,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18067,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18052){
var self__ = this;
var G__18052__$1 = this;
return (new cljs.core.RecordIter((0),G__18052__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18054,other18055){
var self__ = this;
var this18054__$1 = this;
return (((!((other18055 == null)))) && ((((this18054__$1.constructor === other18055.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18054__$1.w,other18055.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18054__$1.h,other18055.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18054__$1.__extmap,other18055.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18053){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18090 = k18053;
var G__18090__$1 = (((G__18090 instanceof cljs.core.Keyword))?G__18090.fqn:null);
switch (G__18090__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18053);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18052){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18093 = cljs.core.keyword_identical_QMARK_;
var expr__18094 = k__5352__auto__;
if(cljs.core.truth_((pred__18093.cljs$core$IFn$_invoke$arity$2 ? pred__18093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18094) : pred__18093.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18094)))){
return (new shadow.dom.Size(G__18052,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18093.cljs$core$IFn$_invoke$arity$2 ? pred__18093.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18094) : pred__18093.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18094)))){
return (new shadow.dom.Size(self__.w,G__18052,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18052),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18052){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18052,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18056){
var extmap__5385__auto__ = (function (){var G__18105 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18056,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18056)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18105);
} else {
return G__18105;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18056),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18056),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18484 = (i + (1));
var G__18485 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18484;
ret = G__18485;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18121){
var vec__18122 = p__18121;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18122,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18126 = arguments.length;
switch (G__18126) {
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
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__18491 = ps;
var G__18492 = (i + (1));
el__$1 = G__18491;
i = G__18492;
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
var vec__18127 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18127,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18130_18493 = cljs.core.seq(props);
var chunk__18131_18494 = null;
var count__18132_18495 = (0);
var i__18133_18496 = (0);
while(true){
if((i__18133_18496 < count__18132_18495)){
var vec__18140_18497 = chunk__18131_18494.cljs$core$IIndexed$_nth$arity$2(null,i__18133_18496);
var k_18498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18140_18497,(0),null);
var v_18499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18140_18497,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18498);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18498),v_18499);


var G__18500 = seq__18130_18493;
var G__18501 = chunk__18131_18494;
var G__18502 = count__18132_18495;
var G__18503 = (i__18133_18496 + (1));
seq__18130_18493 = G__18500;
chunk__18131_18494 = G__18501;
count__18132_18495 = G__18502;
i__18133_18496 = G__18503;
continue;
} else {
var temp__5804__auto___18504 = cljs.core.seq(seq__18130_18493);
if(temp__5804__auto___18504){
var seq__18130_18505__$1 = temp__5804__auto___18504;
if(cljs.core.chunked_seq_QMARK_(seq__18130_18505__$1)){
var c__5568__auto___18506 = cljs.core.chunk_first(seq__18130_18505__$1);
var G__18507 = cljs.core.chunk_rest(seq__18130_18505__$1);
var G__18508 = c__5568__auto___18506;
var G__18509 = cljs.core.count(c__5568__auto___18506);
var G__18510 = (0);
seq__18130_18493 = G__18507;
chunk__18131_18494 = G__18508;
count__18132_18495 = G__18509;
i__18133_18496 = G__18510;
continue;
} else {
var vec__18143_18511 = cljs.core.first(seq__18130_18505__$1);
var k_18512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143_18511,(0),null);
var v_18513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18143_18511,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18512);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18512),v_18513);


var G__18514 = cljs.core.next(seq__18130_18505__$1);
var G__18515 = null;
var G__18516 = (0);
var G__18517 = (0);
seq__18130_18493 = G__18514;
chunk__18131_18494 = G__18515;
count__18132_18495 = G__18516;
i__18133_18496 = G__18517;
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
var vec__18147 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(1),null);
var seq__18150_18519 = cljs.core.seq(node_children);
var chunk__18152_18520 = null;
var count__18153_18521 = (0);
var i__18154_18522 = (0);
while(true){
if((i__18154_18522 < count__18153_18521)){
var child_struct_18523 = chunk__18152_18520.cljs$core$IIndexed$_nth$arity$2(null,i__18154_18522);
if((!((child_struct_18523 == null)))){
if(typeof child_struct_18523 === 'string'){
var text_18524 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18524),child_struct_18523].join(''));
} else {
var children_18525 = shadow.dom.svg_node(child_struct_18523);
if(cljs.core.seq_QMARK_(children_18525)){
var seq__18168_18526 = cljs.core.seq(children_18525);
var chunk__18170_18527 = null;
var count__18171_18528 = (0);
var i__18172_18529 = (0);
while(true){
if((i__18172_18529 < count__18171_18528)){
var child_18531 = chunk__18170_18527.cljs$core$IIndexed$_nth$arity$2(null,i__18172_18529);
if(cljs.core.truth_(child_18531)){
node.appendChild(child_18531);


var G__18532 = seq__18168_18526;
var G__18533 = chunk__18170_18527;
var G__18534 = count__18171_18528;
var G__18535 = (i__18172_18529 + (1));
seq__18168_18526 = G__18532;
chunk__18170_18527 = G__18533;
count__18171_18528 = G__18534;
i__18172_18529 = G__18535;
continue;
} else {
var G__18536 = seq__18168_18526;
var G__18537 = chunk__18170_18527;
var G__18538 = count__18171_18528;
var G__18539 = (i__18172_18529 + (1));
seq__18168_18526 = G__18536;
chunk__18170_18527 = G__18537;
count__18171_18528 = G__18538;
i__18172_18529 = G__18539;
continue;
}
} else {
var temp__5804__auto___18540 = cljs.core.seq(seq__18168_18526);
if(temp__5804__auto___18540){
var seq__18168_18541__$1 = temp__5804__auto___18540;
if(cljs.core.chunked_seq_QMARK_(seq__18168_18541__$1)){
var c__5568__auto___18542 = cljs.core.chunk_first(seq__18168_18541__$1);
var G__18543 = cljs.core.chunk_rest(seq__18168_18541__$1);
var G__18544 = c__5568__auto___18542;
var G__18545 = cljs.core.count(c__5568__auto___18542);
var G__18546 = (0);
seq__18168_18526 = G__18543;
chunk__18170_18527 = G__18544;
count__18171_18528 = G__18545;
i__18172_18529 = G__18546;
continue;
} else {
var child_18547 = cljs.core.first(seq__18168_18541__$1);
if(cljs.core.truth_(child_18547)){
node.appendChild(child_18547);


var G__18548 = cljs.core.next(seq__18168_18541__$1);
var G__18549 = null;
var G__18550 = (0);
var G__18551 = (0);
seq__18168_18526 = G__18548;
chunk__18170_18527 = G__18549;
count__18171_18528 = G__18550;
i__18172_18529 = G__18551;
continue;
} else {
var G__18552 = cljs.core.next(seq__18168_18541__$1);
var G__18553 = null;
var G__18554 = (0);
var G__18555 = (0);
seq__18168_18526 = G__18552;
chunk__18170_18527 = G__18553;
count__18171_18528 = G__18554;
i__18172_18529 = G__18555;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18525);
}
}


var G__18556 = seq__18150_18519;
var G__18557 = chunk__18152_18520;
var G__18558 = count__18153_18521;
var G__18559 = (i__18154_18522 + (1));
seq__18150_18519 = G__18556;
chunk__18152_18520 = G__18557;
count__18153_18521 = G__18558;
i__18154_18522 = G__18559;
continue;
} else {
var G__18560 = seq__18150_18519;
var G__18561 = chunk__18152_18520;
var G__18562 = count__18153_18521;
var G__18563 = (i__18154_18522 + (1));
seq__18150_18519 = G__18560;
chunk__18152_18520 = G__18561;
count__18153_18521 = G__18562;
i__18154_18522 = G__18563;
continue;
}
} else {
var temp__5804__auto___18564 = cljs.core.seq(seq__18150_18519);
if(temp__5804__auto___18564){
var seq__18150_18565__$1 = temp__5804__auto___18564;
if(cljs.core.chunked_seq_QMARK_(seq__18150_18565__$1)){
var c__5568__auto___18566 = cljs.core.chunk_first(seq__18150_18565__$1);
var G__18567 = cljs.core.chunk_rest(seq__18150_18565__$1);
var G__18568 = c__5568__auto___18566;
var G__18569 = cljs.core.count(c__5568__auto___18566);
var G__18570 = (0);
seq__18150_18519 = G__18567;
chunk__18152_18520 = G__18568;
count__18153_18521 = G__18569;
i__18154_18522 = G__18570;
continue;
} else {
var child_struct_18571 = cljs.core.first(seq__18150_18565__$1);
if((!((child_struct_18571 == null)))){
if(typeof child_struct_18571 === 'string'){
var text_18572 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18572),child_struct_18571].join(''));
} else {
var children_18573 = shadow.dom.svg_node(child_struct_18571);
if(cljs.core.seq_QMARK_(children_18573)){
var seq__18174_18574 = cljs.core.seq(children_18573);
var chunk__18176_18575 = null;
var count__18177_18576 = (0);
var i__18178_18577 = (0);
while(true){
if((i__18178_18577 < count__18177_18576)){
var child_18578 = chunk__18176_18575.cljs$core$IIndexed$_nth$arity$2(null,i__18178_18577);
if(cljs.core.truth_(child_18578)){
node.appendChild(child_18578);


var G__18579 = seq__18174_18574;
var G__18580 = chunk__18176_18575;
var G__18581 = count__18177_18576;
var G__18582 = (i__18178_18577 + (1));
seq__18174_18574 = G__18579;
chunk__18176_18575 = G__18580;
count__18177_18576 = G__18581;
i__18178_18577 = G__18582;
continue;
} else {
var G__18583 = seq__18174_18574;
var G__18584 = chunk__18176_18575;
var G__18585 = count__18177_18576;
var G__18586 = (i__18178_18577 + (1));
seq__18174_18574 = G__18583;
chunk__18176_18575 = G__18584;
count__18177_18576 = G__18585;
i__18178_18577 = G__18586;
continue;
}
} else {
var temp__5804__auto___18587__$1 = cljs.core.seq(seq__18174_18574);
if(temp__5804__auto___18587__$1){
var seq__18174_18588__$1 = temp__5804__auto___18587__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18174_18588__$1)){
var c__5568__auto___18589 = cljs.core.chunk_first(seq__18174_18588__$1);
var G__18590 = cljs.core.chunk_rest(seq__18174_18588__$1);
var G__18591 = c__5568__auto___18589;
var G__18592 = cljs.core.count(c__5568__auto___18589);
var G__18593 = (0);
seq__18174_18574 = G__18590;
chunk__18176_18575 = G__18591;
count__18177_18576 = G__18592;
i__18178_18577 = G__18593;
continue;
} else {
var child_18594 = cljs.core.first(seq__18174_18588__$1);
if(cljs.core.truth_(child_18594)){
node.appendChild(child_18594);


var G__18595 = cljs.core.next(seq__18174_18588__$1);
var G__18596 = null;
var G__18597 = (0);
var G__18598 = (0);
seq__18174_18574 = G__18595;
chunk__18176_18575 = G__18596;
count__18177_18576 = G__18597;
i__18178_18577 = G__18598;
continue;
} else {
var G__18599 = cljs.core.next(seq__18174_18588__$1);
var G__18600 = null;
var G__18601 = (0);
var G__18602 = (0);
seq__18174_18574 = G__18599;
chunk__18176_18575 = G__18600;
count__18177_18576 = G__18601;
i__18178_18577 = G__18602;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18573);
}
}


var G__18603 = cljs.core.next(seq__18150_18565__$1);
var G__18604 = null;
var G__18605 = (0);
var G__18606 = (0);
seq__18150_18519 = G__18603;
chunk__18152_18520 = G__18604;
count__18153_18521 = G__18605;
i__18154_18522 = G__18606;
continue;
} else {
var G__18607 = cljs.core.next(seq__18150_18565__$1);
var G__18608 = null;
var G__18609 = (0);
var G__18610 = (0);
seq__18150_18519 = G__18607;
chunk__18152_18520 = G__18608;
count__18153_18521 = G__18609;
i__18154_18522 = G__18610;
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
var args__5775__auto__ = [];
var len__5769__auto___18611 = arguments.length;
var i__5770__auto___18612 = (0);
while(true){
if((i__5770__auto___18612 < len__5769__auto___18611)){
args__5775__auto__.push((arguments[i__5770__auto___18612]));

var G__18613 = (i__5770__auto___18612 + (1));
i__5770__auto___18612 = G__18613;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18180){
var G__18181 = cljs.core.first(seq18180);
var seq18180__$1 = cljs.core.next(seq18180);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18181,seq18180__$1);
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
var G__18183 = arguments.length;
switch (G__18183) {
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

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__15713__auto___18615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_18188){
var state_val_18189 = (state_18188[(1)]);
if((state_val_18189 === (1))){
var state_18188__$1 = state_18188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18188__$1,(2),once_or_cleanup);
} else {
if((state_val_18189 === (2))){
var inst_18185 = (state_18188[(2)]);
var inst_18186 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18188__$1 = (function (){var statearr_18190 = state_18188;
(statearr_18190[(7)] = inst_18185);

return statearr_18190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18188__$1,inst_18186);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__15553__auto__ = null;
var shadow$dom$state_machine__15553__auto____0 = (function (){
var statearr_18191 = [null,null,null,null,null,null,null,null];
(statearr_18191[(0)] = shadow$dom$state_machine__15553__auto__);

(statearr_18191[(1)] = (1));

return statearr_18191;
});
var shadow$dom$state_machine__15553__auto____1 = (function (state_18188){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_18188);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e18192){var ex__15556__auto__ = e18192;
var statearr_18193_18621 = state_18188;
(statearr_18193_18621[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_18188[(4)]))){
var statearr_18194_18622 = state_18188;
(statearr_18194_18622[(1)] = cljs.core.first((state_18188[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18623 = state_18188;
state_18188 = G__18623;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
shadow$dom$state_machine__15553__auto__ = function(state_18188){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__15553__auto____0.call(this);
case 1:
return shadow$dom$state_machine__15553__auto____1.call(this,state_18188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__15553__auto____0;
shadow$dom$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__15553__auto____1;
return shadow$dom$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_18195 = f__15714__auto__();
(statearr_18195[(6)] = c__15713__auto___18615);

return statearr_18195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
