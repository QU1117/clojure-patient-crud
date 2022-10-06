goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15898 = arguments.length;
switch (G__15898) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15899 = (function (f,blockable,meta15900){
this.f = f;
this.blockable = blockable;
this.meta15900 = meta15900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15901,meta15900__$1){
var self__ = this;
var _15901__$1 = this;
return (new cljs.core.async.t_cljs$core$async15899(self__.f,self__.blockable,meta15900__$1));
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15901){
var self__ = this;
var _15901__$1 = this;
return self__.meta15900;
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15900","meta15900",-231304646,null)], null);
}));

(cljs.core.async.t_cljs$core$async15899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15899");

(cljs.core.async.t_cljs$core$async15899.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15899.
 */
cljs.core.async.__GT_t_cljs$core$async15899 = (function cljs$core$async$__GT_t_cljs$core$async15899(f__$1,blockable__$1,meta15900){
return (new cljs.core.async.t_cljs$core$async15899(f__$1,blockable__$1,meta15900));
});

}

return (new cljs.core.async.t_cljs$core$async15899(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15947 = arguments.length;
switch (G__15947) {
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
var G__15949 = arguments.length;
switch (G__15949) {
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
var G__15973 = arguments.length;
switch (G__15973) {
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
var val_17492 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17492) : fn1.call(null,val_17492));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17492) : fn1.call(null,val_17492));
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
var G__15975 = arguments.length;
switch (G__15975) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___17494 = n;
var x_17495 = (0);
while(true){
if((x_17495 < n__5636__auto___17494)){
(a[x_17495] = x_17495);

var G__17496 = (x_17495 + (1));
x_17495 = G__17496;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15976 = (function (flag,meta15977){
this.flag = flag;
this.meta15977 = meta15977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15978,meta15977__$1){
var self__ = this;
var _15978__$1 = this;
return (new cljs.core.async.t_cljs$core$async15976(self__.flag,meta15977__$1));
}));

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15978){
var self__ = this;
var _15978__$1 = this;
return self__.meta15977;
}));

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15977","meta15977",-1131326221,null)], null);
}));

(cljs.core.async.t_cljs$core$async15976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15976");

(cljs.core.async.t_cljs$core$async15976.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15976.
 */
cljs.core.async.__GT_t_cljs$core$async15976 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15976(flag__$1,meta15977){
return (new cljs.core.async.t_cljs$core$async15976(flag__$1,meta15977));
});

}

return (new cljs.core.async.t_cljs$core$async15976(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15979 = (function (flag,cb,meta15980){
this.flag = flag;
this.cb = cb;
this.meta15980 = meta15980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15981,meta15980__$1){
var self__ = this;
var _15981__$1 = this;
return (new cljs.core.async.t_cljs$core$async15979(self__.flag,self__.cb,meta15980__$1));
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15981){
var self__ = this;
var _15981__$1 = this;
return self__.meta15980;
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15980","meta15980",1309795538,null)], null);
}));

(cljs.core.async.t_cljs$core$async15979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15979");

(cljs.core.async.t_cljs$core$async15979.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15979.
 */
cljs.core.async.__GT_t_cljs$core$async15979 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15979(flag__$1,cb__$1,meta15980){
return (new cljs.core.async.t_cljs$core$async15979(flag__$1,cb__$1,meta15980));
});

}

return (new cljs.core.async.t_cljs$core$async15979(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__15982_SHARP_){
var G__15984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15982_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15984) : fret.call(null,G__15984));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15983_SHARP_){
var G__15985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15983_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15985) : fret.call(null,G__15985));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17499 = (i + (1));
i = G__17499;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___17500 = arguments.length;
var i__5770__auto___17501 = (0);
while(true){
if((i__5770__auto___17501 < len__5769__auto___17500)){
args__5775__auto__.push((arguments[i__5770__auto___17501]));

var G__17502 = (i__5770__auto___17501 + (1));
i__5770__auto___17501 = G__17502;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15988){
var map__15989 = p__15988;
var map__15989__$1 = cljs.core.__destructure_map(map__15989);
var opts = map__15989__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15986){
var G__15987 = cljs.core.first(seq15986);
var seq15986__$1 = cljs.core.next(seq15986);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15987,seq15986__$1);
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
var G__15991 = arguments.length;
switch (G__15991) {
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
var c__15713__auto___17504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16015){
var state_val_16016 = (state_16015[(1)]);
if((state_val_16016 === (7))){
var inst_16011 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
var statearr_16017_17505 = state_16015__$1;
(statearr_16017_17505[(2)] = inst_16011);

(statearr_16017_17505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (1))){
var state_16015__$1 = state_16015;
var statearr_16018_17506 = state_16015__$1;
(statearr_16018_17506[(2)] = null);

(statearr_16018_17506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (4))){
var inst_15994 = (state_16015[(7)]);
var inst_15994__$1 = (state_16015[(2)]);
var inst_15995 = (inst_15994__$1 == null);
var state_16015__$1 = (function (){var statearr_16019 = state_16015;
(statearr_16019[(7)] = inst_15994__$1);

return statearr_16019;
})();
if(cljs.core.truth_(inst_15995)){
var statearr_16020_17507 = state_16015__$1;
(statearr_16020_17507[(1)] = (5));

} else {
var statearr_16021_17508 = state_16015__$1;
(statearr_16021_17508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (13))){
var state_16015__$1 = state_16015;
var statearr_16022_17509 = state_16015__$1;
(statearr_16022_17509[(2)] = null);

(statearr_16022_17509[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (6))){
var inst_15994 = (state_16015[(7)]);
var state_16015__$1 = state_16015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16015__$1,(11),to,inst_15994);
} else {
if((state_val_16016 === (3))){
var inst_16013 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16015__$1,inst_16013);
} else {
if((state_val_16016 === (12))){
var state_16015__$1 = state_16015;
var statearr_16023_17510 = state_16015__$1;
(statearr_16023_17510[(2)] = null);

(statearr_16023_17510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (2))){
var state_16015__$1 = state_16015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16015__$1,(4),from);
} else {
if((state_val_16016 === (11))){
var inst_16004 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
if(cljs.core.truth_(inst_16004)){
var statearr_16024_17511 = state_16015__$1;
(statearr_16024_17511[(1)] = (12));

} else {
var statearr_16025_17512 = state_16015__$1;
(statearr_16025_17512[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (9))){
var state_16015__$1 = state_16015;
var statearr_16026_17513 = state_16015__$1;
(statearr_16026_17513[(2)] = null);

(statearr_16026_17513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (5))){
var state_16015__$1 = state_16015;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16027_17514 = state_16015__$1;
(statearr_16027_17514[(1)] = (8));

} else {
var statearr_16028_17515 = state_16015__$1;
(statearr_16028_17515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (14))){
var inst_16009 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
var statearr_16029_17516 = state_16015__$1;
(statearr_16029_17516[(2)] = inst_16009);

(statearr_16029_17516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (10))){
var inst_16001 = (state_16015[(2)]);
var state_16015__$1 = state_16015;
var statearr_16030_17517 = state_16015__$1;
(statearr_16030_17517[(2)] = inst_16001);

(statearr_16030_17517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16016 === (8))){
var inst_15998 = cljs.core.async.close_BANG_(to);
var state_16015__$1 = state_16015;
var statearr_16031_17518 = state_16015__$1;
(statearr_16031_17518[(2)] = inst_15998);

(statearr_16031_17518[(1)] = (10));


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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_16032 = [null,null,null,null,null,null,null,null];
(statearr_16032[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_16032[(1)] = (1));

return statearr_16032;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_16015){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16015);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16033){var ex__15556__auto__ = e16033;
var statearr_16034_17519 = state_16015;
(statearr_16034_17519[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16015[(4)]))){
var statearr_16035_17520 = state_16015;
(statearr_16035_17520[(1)] = cljs.core.first((state_16015[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17521 = state_16015;
state_16015 = G__17521;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_16015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_16015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16036 = f__15714__auto__();
(statearr_16036[(6)] = c__15713__auto___17504);

return statearr_16036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
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
var process__$1 = (function (p__16037){
var vec__16038 = p__16037;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16038,(1),null);
var job = vec__16038;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15713__auto___17522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16045){
var state_val_16046 = (state_16045[(1)]);
if((state_val_16046 === (1))){
var state_16045__$1 = state_16045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16045__$1,(2),res,v);
} else {
if((state_val_16046 === (2))){
var inst_16042 = (state_16045[(2)]);
var inst_16043 = cljs.core.async.close_BANG_(res);
var state_16045__$1 = (function (){var statearr_16047 = state_16045;
(statearr_16047[(7)] = inst_16042);

return statearr_16047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16045__$1,inst_16043);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0 = (function (){
var statearr_16048 = [null,null,null,null,null,null,null,null];
(statearr_16048[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__);

(statearr_16048[(1)] = (1));

return statearr_16048;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1 = (function (state_16045){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16045);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16049){var ex__15556__auto__ = e16049;
var statearr_16050_17523 = state_16045;
(statearr_16050_17523[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16045[(4)]))){
var statearr_16051_17524 = state_16045;
(statearr_16051_17524[(1)] = cljs.core.first((state_16045[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17525 = state_16045;
state_16045 = G__17525;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = function(state_16045){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1.call(this,state_16045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16052 = f__15714__auto__();
(statearr_16052[(6)] = c__15713__auto___17522);

return statearr_16052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16053){
var vec__16054 = p__16053;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16054,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16054,(1),null);
var job = vec__16054;
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
var n__5636__auto___17526 = n;
var __17527 = (0);
while(true){
if((__17527 < n__5636__auto___17526)){
var G__16057_17528 = type;
var G__16057_17529__$1 = (((G__16057_17528 instanceof cljs.core.Keyword))?G__16057_17528.fqn:null);
switch (G__16057_17529__$1) {
case "compute":
var c__15713__auto___17531 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17527,c__15713__auto___17531,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = ((function (__17527,c__15713__auto___17531,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function (state_16070){
var state_val_16071 = (state_16070[(1)]);
if((state_val_16071 === (1))){
var state_16070__$1 = state_16070;
var statearr_16072_17532 = state_16070__$1;
(statearr_16072_17532[(2)] = null);

(statearr_16072_17532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16071 === (2))){
var state_16070__$1 = state_16070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16070__$1,(4),jobs);
} else {
if((state_val_16071 === (3))){
var inst_16068 = (state_16070[(2)]);
var state_16070__$1 = state_16070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16070__$1,inst_16068);
} else {
if((state_val_16071 === (4))){
var inst_16060 = (state_16070[(2)]);
var inst_16061 = process__$1(inst_16060);
var state_16070__$1 = state_16070;
if(cljs.core.truth_(inst_16061)){
var statearr_16073_17533 = state_16070__$1;
(statearr_16073_17533[(1)] = (5));

} else {
var statearr_16074_17534 = state_16070__$1;
(statearr_16074_17534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16071 === (5))){
var state_16070__$1 = state_16070;
var statearr_16075_17535 = state_16070__$1;
(statearr_16075_17535[(2)] = null);

(statearr_16075_17535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16071 === (6))){
var state_16070__$1 = state_16070;
var statearr_16076_17536 = state_16070__$1;
(statearr_16076_17536[(2)] = null);

(statearr_16076_17536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16071 === (7))){
var inst_16066 = (state_16070[(2)]);
var state_16070__$1 = state_16070;
var statearr_16077_17537 = state_16070__$1;
(statearr_16077_17537[(2)] = inst_16066);

(statearr_16077_17537[(1)] = (3));


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
});})(__17527,c__15713__auto___17531,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
;
return ((function (__17527,switch__15552__auto__,c__15713__auto___17531,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0 = (function (){
var statearr_16078 = [null,null,null,null,null,null,null];
(statearr_16078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__);

(statearr_16078[(1)] = (1));

return statearr_16078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1 = (function (state_16070){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16070);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16079){var ex__15556__auto__ = e16079;
var statearr_16080_17540 = state_16070;
(statearr_16080_17540[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16070[(4)]))){
var statearr_16081_17541 = state_16070;
(statearr_16081_17541[(1)] = cljs.core.first((state_16070[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17542 = state_16070;
state_16070 = G__17542;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = function(state_16070){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1.call(this,state_16070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__;
})()
;})(__17527,switch__15552__auto__,c__15713__auto___17531,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
})();
var state__15715__auto__ = (function (){var statearr_16082 = f__15714__auto__();
(statearr_16082[(6)] = c__15713__auto___17531);

return statearr_16082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
});})(__17527,c__15713__auto___17531,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
);


break;
case "async":
var c__15713__auto___17543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17527,c__15713__auto___17543,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = ((function (__17527,c__15713__auto___17543,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function (state_16095){
var state_val_16096 = (state_16095[(1)]);
if((state_val_16096 === (1))){
var state_16095__$1 = state_16095;
var statearr_16097_17544 = state_16095__$1;
(statearr_16097_17544[(2)] = null);

(statearr_16097_17544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16096 === (2))){
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16095__$1,(4),jobs);
} else {
if((state_val_16096 === (3))){
var inst_16093 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16095__$1,inst_16093);
} else {
if((state_val_16096 === (4))){
var inst_16085 = (state_16095[(2)]);
var inst_16086 = async(inst_16085);
var state_16095__$1 = state_16095;
if(cljs.core.truth_(inst_16086)){
var statearr_16098_17545 = state_16095__$1;
(statearr_16098_17545[(1)] = (5));

} else {
var statearr_16099_17546 = state_16095__$1;
(statearr_16099_17546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16096 === (5))){
var state_16095__$1 = state_16095;
var statearr_16100_17547 = state_16095__$1;
(statearr_16100_17547[(2)] = null);

(statearr_16100_17547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16096 === (6))){
var state_16095__$1 = state_16095;
var statearr_16101_17548 = state_16095__$1;
(statearr_16101_17548[(2)] = null);

(statearr_16101_17548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16096 === (7))){
var inst_16091 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16102_17549 = state_16095__$1;
(statearr_16102_17549[(2)] = inst_16091);

(statearr_16102_17549[(1)] = (3));


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
});})(__17527,c__15713__auto___17543,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
;
return ((function (__17527,switch__15552__auto__,c__15713__auto___17543,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0 = (function (){
var statearr_16103 = [null,null,null,null,null,null,null];
(statearr_16103[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__);

(statearr_16103[(1)] = (1));

return statearr_16103;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1 = (function (state_16095){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16095);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16104){var ex__15556__auto__ = e16104;
var statearr_16105_17550 = state_16095;
(statearr_16105_17550[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16095[(4)]))){
var statearr_16106_17551 = state_16095;
(statearr_16106_17551[(1)] = cljs.core.first((state_16095[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17552 = state_16095;
state_16095 = G__17552;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = function(state_16095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1.call(this,state_16095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__;
})()
;})(__17527,switch__15552__auto__,c__15713__auto___17543,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
})();
var state__15715__auto__ = (function (){var statearr_16107 = f__15714__auto__();
(statearr_16107[(6)] = c__15713__auto___17543);

return statearr_16107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
});})(__17527,c__15713__auto___17543,G__16057_17528,G__16057_17529__$1,n__5636__auto___17526,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16057_17529__$1)].join('')));

}

var G__17553 = (__17527 + (1));
__17527 = G__17553;
continue;
} else {
}
break;
}

var c__15713__auto___17554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16129){
var state_val_16130 = (state_16129[(1)]);
if((state_val_16130 === (7))){
var inst_16125 = (state_16129[(2)]);
var state_16129__$1 = state_16129;
var statearr_16131_17555 = state_16129__$1;
(statearr_16131_17555[(2)] = inst_16125);

(statearr_16131_17555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16130 === (1))){
var state_16129__$1 = state_16129;
var statearr_16132_17556 = state_16129__$1;
(statearr_16132_17556[(2)] = null);

(statearr_16132_17556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16130 === (4))){
var inst_16110 = (state_16129[(7)]);
var inst_16110__$1 = (state_16129[(2)]);
var inst_16111 = (inst_16110__$1 == null);
var state_16129__$1 = (function (){var statearr_16133 = state_16129;
(statearr_16133[(7)] = inst_16110__$1);

return statearr_16133;
})();
if(cljs.core.truth_(inst_16111)){
var statearr_16134_17557 = state_16129__$1;
(statearr_16134_17557[(1)] = (5));

} else {
var statearr_16135_17558 = state_16129__$1;
(statearr_16135_17558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16130 === (6))){
var inst_16110 = (state_16129[(7)]);
var inst_16115 = (state_16129[(8)]);
var inst_16115__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16117 = [inst_16110,inst_16115__$1];
var inst_16118 = (new cljs.core.PersistentVector(null,2,(5),inst_16116,inst_16117,null));
var state_16129__$1 = (function (){var statearr_16136 = state_16129;
(statearr_16136[(8)] = inst_16115__$1);

return statearr_16136;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16129__$1,(8),jobs,inst_16118);
} else {
if((state_val_16130 === (3))){
var inst_16127 = (state_16129[(2)]);
var state_16129__$1 = state_16129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16129__$1,inst_16127);
} else {
if((state_val_16130 === (2))){
var state_16129__$1 = state_16129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16129__$1,(4),from);
} else {
if((state_val_16130 === (9))){
var inst_16122 = (state_16129[(2)]);
var state_16129__$1 = (function (){var statearr_16137 = state_16129;
(statearr_16137[(9)] = inst_16122);

return statearr_16137;
})();
var statearr_16138_17559 = state_16129__$1;
(statearr_16138_17559[(2)] = null);

(statearr_16138_17559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16130 === (5))){
var inst_16113 = cljs.core.async.close_BANG_(jobs);
var state_16129__$1 = state_16129;
var statearr_16139_17560 = state_16129__$1;
(statearr_16139_17560[(2)] = inst_16113);

(statearr_16139_17560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16130 === (8))){
var inst_16115 = (state_16129[(8)]);
var inst_16120 = (state_16129[(2)]);
var state_16129__$1 = (function (){var statearr_16140 = state_16129;
(statearr_16140[(10)] = inst_16120);

return statearr_16140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16129__$1,(9),results,inst_16115);
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
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0 = (function (){
var statearr_16141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16141[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__);

(statearr_16141[(1)] = (1));

return statearr_16141;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1 = (function (state_16129){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16129);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16142){var ex__15556__auto__ = e16142;
var statearr_16143_17562 = state_16129;
(statearr_16143_17562[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16129[(4)]))){
var statearr_16144_17563 = state_16129;
(statearr_16144_17563[(1)] = cljs.core.first((state_16129[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17564 = state_16129;
state_16129 = G__17564;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = function(state_16129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1.call(this,state_16129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16145 = f__15714__auto__();
(statearr_16145[(6)] = c__15713__auto___17554);

return statearr_16145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));


var c__15713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16183){
var state_val_16184 = (state_16183[(1)]);
if((state_val_16184 === (7))){
var inst_16179 = (state_16183[(2)]);
var state_16183__$1 = state_16183;
var statearr_16185_17565 = state_16183__$1;
(statearr_16185_17565[(2)] = inst_16179);

(statearr_16185_17565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (20))){
var state_16183__$1 = state_16183;
var statearr_16186_17566 = state_16183__$1;
(statearr_16186_17566[(2)] = null);

(statearr_16186_17566[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (1))){
var state_16183__$1 = state_16183;
var statearr_16187_17568 = state_16183__$1;
(statearr_16187_17568[(2)] = null);

(statearr_16187_17568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (4))){
var inst_16148 = (state_16183[(7)]);
var inst_16148__$1 = (state_16183[(2)]);
var inst_16149 = (inst_16148__$1 == null);
var state_16183__$1 = (function (){var statearr_16188 = state_16183;
(statearr_16188[(7)] = inst_16148__$1);

return statearr_16188;
})();
if(cljs.core.truth_(inst_16149)){
var statearr_16189_17570 = state_16183__$1;
(statearr_16189_17570[(1)] = (5));

} else {
var statearr_16190_17571 = state_16183__$1;
(statearr_16190_17571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (15))){
var inst_16161 = (state_16183[(8)]);
var state_16183__$1 = state_16183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16183__$1,(18),to,inst_16161);
} else {
if((state_val_16184 === (21))){
var inst_16174 = (state_16183[(2)]);
var state_16183__$1 = state_16183;
var statearr_16191_17572 = state_16183__$1;
(statearr_16191_17572[(2)] = inst_16174);

(statearr_16191_17572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (13))){
var inst_16176 = (state_16183[(2)]);
var state_16183__$1 = (function (){var statearr_16192 = state_16183;
(statearr_16192[(9)] = inst_16176);

return statearr_16192;
})();
var statearr_16193_17573 = state_16183__$1;
(statearr_16193_17573[(2)] = null);

(statearr_16193_17573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (6))){
var inst_16148 = (state_16183[(7)]);
var state_16183__$1 = state_16183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16183__$1,(11),inst_16148);
} else {
if((state_val_16184 === (17))){
var inst_16169 = (state_16183[(2)]);
var state_16183__$1 = state_16183;
if(cljs.core.truth_(inst_16169)){
var statearr_16194_17574 = state_16183__$1;
(statearr_16194_17574[(1)] = (19));

} else {
var statearr_16195_17575 = state_16183__$1;
(statearr_16195_17575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (3))){
var inst_16181 = (state_16183[(2)]);
var state_16183__$1 = state_16183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16183__$1,inst_16181);
} else {
if((state_val_16184 === (12))){
var inst_16158 = (state_16183[(10)]);
var state_16183__$1 = state_16183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16183__$1,(14),inst_16158);
} else {
if((state_val_16184 === (2))){
var state_16183__$1 = state_16183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16183__$1,(4),results);
} else {
if((state_val_16184 === (19))){
var state_16183__$1 = state_16183;
var statearr_16196_17577 = state_16183__$1;
(statearr_16196_17577[(2)] = null);

(statearr_16196_17577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (11))){
var inst_16158 = (state_16183[(2)]);
var state_16183__$1 = (function (){var statearr_16197 = state_16183;
(statearr_16197[(10)] = inst_16158);

return statearr_16197;
})();
var statearr_16198_17579 = state_16183__$1;
(statearr_16198_17579[(2)] = null);

(statearr_16198_17579[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (9))){
var state_16183__$1 = state_16183;
var statearr_16199_17580 = state_16183__$1;
(statearr_16199_17580[(2)] = null);

(statearr_16199_17580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (5))){
var state_16183__$1 = state_16183;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16200_17581 = state_16183__$1;
(statearr_16200_17581[(1)] = (8));

} else {
var statearr_16201_17582 = state_16183__$1;
(statearr_16201_17582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (14))){
var inst_16161 = (state_16183[(8)]);
var inst_16163 = (state_16183[(11)]);
var inst_16161__$1 = (state_16183[(2)]);
var inst_16162 = (inst_16161__$1 == null);
var inst_16163__$1 = cljs.core.not(inst_16162);
var state_16183__$1 = (function (){var statearr_16202 = state_16183;
(statearr_16202[(8)] = inst_16161__$1);

(statearr_16202[(11)] = inst_16163__$1);

return statearr_16202;
})();
if(inst_16163__$1){
var statearr_16203_17583 = state_16183__$1;
(statearr_16203_17583[(1)] = (15));

} else {
var statearr_16204_17584 = state_16183__$1;
(statearr_16204_17584[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (16))){
var inst_16163 = (state_16183[(11)]);
var state_16183__$1 = state_16183;
var statearr_16205_17585 = state_16183__$1;
(statearr_16205_17585[(2)] = inst_16163);

(statearr_16205_17585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (10))){
var inst_16155 = (state_16183[(2)]);
var state_16183__$1 = state_16183;
var statearr_16206_17586 = state_16183__$1;
(statearr_16206_17586[(2)] = inst_16155);

(statearr_16206_17586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (18))){
var inst_16166 = (state_16183[(2)]);
var state_16183__$1 = state_16183;
var statearr_16207_17587 = state_16183__$1;
(statearr_16207_17587[(2)] = inst_16166);

(statearr_16207_17587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16184 === (8))){
var inst_16152 = cljs.core.async.close_BANG_(to);
var state_16183__$1 = state_16183;
var statearr_16208_17589 = state_16183__$1;
(statearr_16208_17589[(2)] = inst_16152);

(statearr_16208_17589[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0 = (function (){
var statearr_16209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16209[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__);

(statearr_16209[(1)] = (1));

return statearr_16209;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1 = (function (state_16183){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16183);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16210){var ex__15556__auto__ = e16210;
var statearr_16211_17591 = state_16183;
(statearr_16211_17591[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16183[(4)]))){
var statearr_16212_17592 = state_16183;
(statearr_16212_17592[(1)] = cljs.core.first((state_16183[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17593 = state_16183;
state_16183 = G__17593;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__ = function(state_16183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1.call(this,state_16183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15553__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16213 = f__15714__auto__();
(statearr_16213[(6)] = c__15713__auto__);

return statearr_16213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));

return c__15713__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16215 = arguments.length;
switch (G__16215) {
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
var G__16217 = arguments.length;
switch (G__16217) {
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
var G__16219 = arguments.length;
switch (G__16219) {
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
var c__15713__auto___17599 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16245){
var state_val_16246 = (state_16245[(1)]);
if((state_val_16246 === (7))){
var inst_16241 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
var statearr_16247_17600 = state_16245__$1;
(statearr_16247_17600[(2)] = inst_16241);

(statearr_16247_17600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (1))){
var state_16245__$1 = state_16245;
var statearr_16248_17601 = state_16245__$1;
(statearr_16248_17601[(2)] = null);

(statearr_16248_17601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (4))){
var inst_16222 = (state_16245[(7)]);
var inst_16222__$1 = (state_16245[(2)]);
var inst_16223 = (inst_16222__$1 == null);
var state_16245__$1 = (function (){var statearr_16249 = state_16245;
(statearr_16249[(7)] = inst_16222__$1);

return statearr_16249;
})();
if(cljs.core.truth_(inst_16223)){
var statearr_16250_17602 = state_16245__$1;
(statearr_16250_17602[(1)] = (5));

} else {
var statearr_16251_17603 = state_16245__$1;
(statearr_16251_17603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (13))){
var state_16245__$1 = state_16245;
var statearr_16252_17604 = state_16245__$1;
(statearr_16252_17604[(2)] = null);

(statearr_16252_17604[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (6))){
var inst_16222 = (state_16245[(7)]);
var inst_16228 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16222) : p.call(null,inst_16222));
var state_16245__$1 = state_16245;
if(cljs.core.truth_(inst_16228)){
var statearr_16253_17605 = state_16245__$1;
(statearr_16253_17605[(1)] = (9));

} else {
var statearr_16254_17607 = state_16245__$1;
(statearr_16254_17607[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (3))){
var inst_16243 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16245__$1,inst_16243);
} else {
if((state_val_16246 === (12))){
var state_16245__$1 = state_16245;
var statearr_16255_17609 = state_16245__$1;
(statearr_16255_17609[(2)] = null);

(statearr_16255_17609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (2))){
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16245__$1,(4),ch);
} else {
if((state_val_16246 === (11))){
var inst_16222 = (state_16245[(7)]);
var inst_16232 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16245__$1,(8),inst_16232,inst_16222);
} else {
if((state_val_16246 === (9))){
var state_16245__$1 = state_16245;
var statearr_16256_17610 = state_16245__$1;
(statearr_16256_17610[(2)] = tc);

(statearr_16256_17610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (5))){
var inst_16225 = cljs.core.async.close_BANG_(tc);
var inst_16226 = cljs.core.async.close_BANG_(fc);
var state_16245__$1 = (function (){var statearr_16257 = state_16245;
(statearr_16257[(8)] = inst_16225);

return statearr_16257;
})();
var statearr_16258_17611 = state_16245__$1;
(statearr_16258_17611[(2)] = inst_16226);

(statearr_16258_17611[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (14))){
var inst_16239 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
var statearr_16259_17612 = state_16245__$1;
(statearr_16259_17612[(2)] = inst_16239);

(statearr_16259_17612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (10))){
var state_16245__$1 = state_16245;
var statearr_16260_17613 = state_16245__$1;
(statearr_16260_17613[(2)] = fc);

(statearr_16260_17613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (8))){
var inst_16234 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
if(cljs.core.truth_(inst_16234)){
var statearr_16261_17614 = state_16245__$1;
(statearr_16261_17614[(1)] = (12));

} else {
var statearr_16262_17615 = state_16245__$1;
(statearr_16262_17615[(1)] = (13));

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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_16263 = [null,null,null,null,null,null,null,null,null];
(statearr_16263[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_16263[(1)] = (1));

return statearr_16263;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_16245){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16245);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16264){var ex__15556__auto__ = e16264;
var statearr_16265_17616 = state_16245;
(statearr_16265_17616[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16245[(4)]))){
var statearr_16266_17617 = state_16245;
(statearr_16266_17617[(1)] = cljs.core.first((state_16245[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17618 = state_16245;
state_16245 = G__17618;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_16245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_16245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16267 = f__15714__auto__();
(statearr_16267[(6)] = c__15713__auto___17599);

return statearr_16267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
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
var c__15713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16289){
var state_val_16290 = (state_16289[(1)]);
if((state_val_16290 === (7))){
var inst_16285 = (state_16289[(2)]);
var state_16289__$1 = state_16289;
var statearr_16291_17620 = state_16289__$1;
(statearr_16291_17620[(2)] = inst_16285);

(statearr_16291_17620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16290 === (1))){
var inst_16268 = init;
var inst_16269 = inst_16268;
var state_16289__$1 = (function (){var statearr_16292 = state_16289;
(statearr_16292[(7)] = inst_16269);

return statearr_16292;
})();
var statearr_16293_17622 = state_16289__$1;
(statearr_16293_17622[(2)] = null);

(statearr_16293_17622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16290 === (4))){
var inst_16272 = (state_16289[(8)]);
var inst_16272__$1 = (state_16289[(2)]);
var inst_16273 = (inst_16272__$1 == null);
var state_16289__$1 = (function (){var statearr_16294 = state_16289;
(statearr_16294[(8)] = inst_16272__$1);

return statearr_16294;
})();
if(cljs.core.truth_(inst_16273)){
var statearr_16295_17623 = state_16289__$1;
(statearr_16295_17623[(1)] = (5));

} else {
var statearr_16296_17624 = state_16289__$1;
(statearr_16296_17624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16290 === (6))){
var inst_16272 = (state_16289[(8)]);
var inst_16276 = (state_16289[(9)]);
var inst_16269 = (state_16289[(7)]);
var inst_16276__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16269,inst_16272) : f.call(null,inst_16269,inst_16272));
var inst_16277 = cljs.core.reduced_QMARK_(inst_16276__$1);
var state_16289__$1 = (function (){var statearr_16297 = state_16289;
(statearr_16297[(9)] = inst_16276__$1);

return statearr_16297;
})();
if(inst_16277){
var statearr_16298_17625 = state_16289__$1;
(statearr_16298_17625[(1)] = (8));

} else {
var statearr_16299_17626 = state_16289__$1;
(statearr_16299_17626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16290 === (3))){
var inst_16287 = (state_16289[(2)]);
var state_16289__$1 = state_16289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16289__$1,inst_16287);
} else {
if((state_val_16290 === (2))){
var state_16289__$1 = state_16289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16289__$1,(4),ch);
} else {
if((state_val_16290 === (9))){
var inst_16276 = (state_16289[(9)]);
var inst_16269 = inst_16276;
var state_16289__$1 = (function (){var statearr_16300 = state_16289;
(statearr_16300[(7)] = inst_16269);

return statearr_16300;
})();
var statearr_16301_17627 = state_16289__$1;
(statearr_16301_17627[(2)] = null);

(statearr_16301_17627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16290 === (5))){
var inst_16269 = (state_16289[(7)]);
var state_16289__$1 = state_16289;
var statearr_16302_17628 = state_16289__$1;
(statearr_16302_17628[(2)] = inst_16269);

(statearr_16302_17628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16290 === (10))){
var inst_16283 = (state_16289[(2)]);
var state_16289__$1 = state_16289;
var statearr_16303_17629 = state_16289__$1;
(statearr_16303_17629[(2)] = inst_16283);

(statearr_16303_17629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16290 === (8))){
var inst_16276 = (state_16289[(9)]);
var inst_16279 = cljs.core.deref(inst_16276);
var state_16289__$1 = state_16289;
var statearr_16304_17630 = state_16289__$1;
(statearr_16304_17630[(2)] = inst_16279);

(statearr_16304_17630[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__15553__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15553__auto____0 = (function (){
var statearr_16305 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16305[(0)] = cljs$core$async$reduce_$_state_machine__15553__auto__);

(statearr_16305[(1)] = (1));

return statearr_16305;
});
var cljs$core$async$reduce_$_state_machine__15553__auto____1 = (function (state_16289){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16289);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16306){var ex__15556__auto__ = e16306;
var statearr_16307_17632 = state_16289;
(statearr_16307_17632[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16289[(4)]))){
var statearr_16308_17633 = state_16289;
(statearr_16308_17633[(1)] = cljs.core.first((state_16289[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17634 = state_16289;
state_16289 = G__17634;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15553__auto__ = function(state_16289){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15553__auto____1.call(this,state_16289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15553__auto____0;
cljs$core$async$reduce_$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15553__auto____1;
return cljs$core$async$reduce_$_state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16309 = f__15714__auto__();
(statearr_16309[(6)] = c__15713__auto__);

return statearr_16309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));

return c__15713__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16315){
var state_val_16316 = (state_16315[(1)]);
if((state_val_16316 === (1))){
var inst_16310 = cljs.core.async.reduce(f__$1,init,ch);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16315__$1,(2),inst_16310);
} else {
if((state_val_16316 === (2))){
var inst_16312 = (state_16315[(2)]);
var inst_16313 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16312) : f__$1.call(null,inst_16312));
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16315__$1,inst_16313);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15553__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15553__auto____0 = (function (){
var statearr_16317 = [null,null,null,null,null,null,null];
(statearr_16317[(0)] = cljs$core$async$transduce_$_state_machine__15553__auto__);

(statearr_16317[(1)] = (1));

return statearr_16317;
});
var cljs$core$async$transduce_$_state_machine__15553__auto____1 = (function (state_16315){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16315);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16318){var ex__15556__auto__ = e16318;
var statearr_16319_17635 = state_16315;
(statearr_16319_17635[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16315[(4)]))){
var statearr_16320_17636 = state_16315;
(statearr_16320_17636[(1)] = cljs.core.first((state_16315[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17637 = state_16315;
state_16315 = G__17637;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15553__auto__ = function(state_16315){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15553__auto____1.call(this,state_16315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15553__auto____0;
cljs$core$async$transduce_$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15553__auto____1;
return cljs$core$async$transduce_$_state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16321 = f__15714__auto__();
(statearr_16321[(6)] = c__15713__auto__);

return statearr_16321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));

return c__15713__auto__;
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
var G__16323 = arguments.length;
switch (G__16323) {
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
var c__15713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16348){
var state_val_16349 = (state_16348[(1)]);
if((state_val_16349 === (7))){
var inst_16330 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16350_17643 = state_16348__$1;
(statearr_16350_17643[(2)] = inst_16330);

(statearr_16350_17643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (1))){
var inst_16324 = cljs.core.seq(coll);
var inst_16325 = inst_16324;
var state_16348__$1 = (function (){var statearr_16351 = state_16348;
(statearr_16351[(7)] = inst_16325);

return statearr_16351;
})();
var statearr_16352_17644 = state_16348__$1;
(statearr_16352_17644[(2)] = null);

(statearr_16352_17644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (4))){
var inst_16325 = (state_16348[(7)]);
var inst_16328 = cljs.core.first(inst_16325);
var state_16348__$1 = state_16348;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16348__$1,(7),ch,inst_16328);
} else {
if((state_val_16349 === (13))){
var inst_16342 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16353_17645 = state_16348__$1;
(statearr_16353_17645[(2)] = inst_16342);

(statearr_16353_17645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (6))){
var inst_16333 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
if(cljs.core.truth_(inst_16333)){
var statearr_16354_17646 = state_16348__$1;
(statearr_16354_17646[(1)] = (8));

} else {
var statearr_16355_17647 = state_16348__$1;
(statearr_16355_17647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (3))){
var inst_16346 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16348__$1,inst_16346);
} else {
if((state_val_16349 === (12))){
var state_16348__$1 = state_16348;
var statearr_16356_17648 = state_16348__$1;
(statearr_16356_17648[(2)] = null);

(statearr_16356_17648[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (2))){
var inst_16325 = (state_16348[(7)]);
var state_16348__$1 = state_16348;
if(cljs.core.truth_(inst_16325)){
var statearr_16357_17649 = state_16348__$1;
(statearr_16357_17649[(1)] = (4));

} else {
var statearr_16358_17650 = state_16348__$1;
(statearr_16358_17650[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (11))){
var inst_16339 = cljs.core.async.close_BANG_(ch);
var state_16348__$1 = state_16348;
var statearr_16359_17651 = state_16348__$1;
(statearr_16359_17651[(2)] = inst_16339);

(statearr_16359_17651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (9))){
var state_16348__$1 = state_16348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16360_17652 = state_16348__$1;
(statearr_16360_17652[(1)] = (11));

} else {
var statearr_16361_17653 = state_16348__$1;
(statearr_16361_17653[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (5))){
var inst_16325 = (state_16348[(7)]);
var state_16348__$1 = state_16348;
var statearr_16362_17654 = state_16348__$1;
(statearr_16362_17654[(2)] = inst_16325);

(statearr_16362_17654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (10))){
var inst_16344 = (state_16348[(2)]);
var state_16348__$1 = state_16348;
var statearr_16363_17655 = state_16348__$1;
(statearr_16363_17655[(2)] = inst_16344);

(statearr_16363_17655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16349 === (8))){
var inst_16325 = (state_16348[(7)]);
var inst_16335 = cljs.core.next(inst_16325);
var inst_16325__$1 = inst_16335;
var state_16348__$1 = (function (){var statearr_16364 = state_16348;
(statearr_16364[(7)] = inst_16325__$1);

return statearr_16364;
})();
var statearr_16365_17656 = state_16348__$1;
(statearr_16365_17656[(2)] = null);

(statearr_16365_17656[(1)] = (2));


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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_16366 = [null,null,null,null,null,null,null,null];
(statearr_16366[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_16366[(1)] = (1));

return statearr_16366;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_16348){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16348);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16367){var ex__15556__auto__ = e16367;
var statearr_16368_17657 = state_16348;
(statearr_16368_17657[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16348[(4)]))){
var statearr_16369_17658 = state_16348;
(statearr_16369_17658[(1)] = cljs.core.first((state_16348[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17659 = state_16348;
state_16348 = G__17659;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_16348){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_16348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16370 = f__15714__auto__();
(statearr_16370[(6)] = c__15713__auto__);

return statearr_16370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));

return c__15713__auto__;
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
var G__16372 = arguments.length;
switch (G__16372) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17663 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17663(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17664 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17664(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17665 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17665(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17666 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17666(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16373 = (function (ch,cs,meta16374){
this.ch = ch;
this.cs = cs;
this.meta16374 = meta16374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16375,meta16374__$1){
var self__ = this;
var _16375__$1 = this;
return (new cljs.core.async.t_cljs$core$async16373(self__.ch,self__.cs,meta16374__$1));
}));

(cljs.core.async.t_cljs$core$async16373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16375){
var self__ = this;
var _16375__$1 = this;
return self__.meta16374;
}));

(cljs.core.async.t_cljs$core$async16373.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16373.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16373.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16373.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16373.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16374","meta16374",-688689385,null)], null);
}));

(cljs.core.async.t_cljs$core$async16373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16373");

(cljs.core.async.t_cljs$core$async16373.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16373.
 */
cljs.core.async.__GT_t_cljs$core$async16373 = (function cljs$core$async$mult_$___GT_t_cljs$core$async16373(ch__$1,cs__$1,meta16374){
return (new cljs.core.async.t_cljs$core$async16373(ch__$1,cs__$1,meta16374));
});

}

return (new cljs.core.async.t_cljs$core$async16373(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__15713__auto___17674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16508){
var state_val_16509 = (state_16508[(1)]);
if((state_val_16509 === (7))){
var inst_16504 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16510_17678 = state_16508__$1;
(statearr_16510_17678[(2)] = inst_16504);

(statearr_16510_17678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (20))){
var inst_16409 = (state_16508[(7)]);
var inst_16421 = cljs.core.first(inst_16409);
var inst_16422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16421,(0),null);
var inst_16423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16421,(1),null);
var state_16508__$1 = (function (){var statearr_16511 = state_16508;
(statearr_16511[(8)] = inst_16422);

return statearr_16511;
})();
if(cljs.core.truth_(inst_16423)){
var statearr_16512_17679 = state_16508__$1;
(statearr_16512_17679[(1)] = (22));

} else {
var statearr_16513_17680 = state_16508__$1;
(statearr_16513_17680[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (27))){
var inst_16453 = (state_16508[(9)]);
var inst_16451 = (state_16508[(10)]);
var inst_16458 = (state_16508[(11)]);
var inst_16378 = (state_16508[(12)]);
var inst_16458__$1 = cljs.core._nth(inst_16451,inst_16453);
var inst_16459 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16458__$1,inst_16378,done);
var state_16508__$1 = (function (){var statearr_16514 = state_16508;
(statearr_16514[(11)] = inst_16458__$1);

return statearr_16514;
})();
if(cljs.core.truth_(inst_16459)){
var statearr_16515_17684 = state_16508__$1;
(statearr_16515_17684[(1)] = (30));

} else {
var statearr_16516_17685 = state_16508__$1;
(statearr_16516_17685[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (1))){
var state_16508__$1 = state_16508;
var statearr_16517_17686 = state_16508__$1;
(statearr_16517_17686[(2)] = null);

(statearr_16517_17686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (24))){
var inst_16409 = (state_16508[(7)]);
var inst_16428 = (state_16508[(2)]);
var inst_16429 = cljs.core.next(inst_16409);
var inst_16387 = inst_16429;
var inst_16388 = null;
var inst_16389 = (0);
var inst_16390 = (0);
var state_16508__$1 = (function (){var statearr_16518 = state_16508;
(statearr_16518[(13)] = inst_16389);

(statearr_16518[(14)] = inst_16387);

(statearr_16518[(15)] = inst_16428);

(statearr_16518[(16)] = inst_16390);

(statearr_16518[(17)] = inst_16388);

return statearr_16518;
})();
var statearr_16519_17690 = state_16508__$1;
(statearr_16519_17690[(2)] = null);

(statearr_16519_17690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (39))){
var state_16508__$1 = state_16508;
var statearr_16523_17691 = state_16508__$1;
(statearr_16523_17691[(2)] = null);

(statearr_16523_17691[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (4))){
var inst_16378 = (state_16508[(12)]);
var inst_16378__$1 = (state_16508[(2)]);
var inst_16379 = (inst_16378__$1 == null);
var state_16508__$1 = (function (){var statearr_16524 = state_16508;
(statearr_16524[(12)] = inst_16378__$1);

return statearr_16524;
})();
if(cljs.core.truth_(inst_16379)){
var statearr_16525_17692 = state_16508__$1;
(statearr_16525_17692[(1)] = (5));

} else {
var statearr_16526_17693 = state_16508__$1;
(statearr_16526_17693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (15))){
var inst_16389 = (state_16508[(13)]);
var inst_16387 = (state_16508[(14)]);
var inst_16390 = (state_16508[(16)]);
var inst_16388 = (state_16508[(17)]);
var inst_16405 = (state_16508[(2)]);
var inst_16406 = (inst_16390 + (1));
var tmp16520 = inst_16389;
var tmp16521 = inst_16387;
var tmp16522 = inst_16388;
var inst_16387__$1 = tmp16521;
var inst_16388__$1 = tmp16522;
var inst_16389__$1 = tmp16520;
var inst_16390__$1 = inst_16406;
var state_16508__$1 = (function (){var statearr_16527 = state_16508;
(statearr_16527[(13)] = inst_16389__$1);

(statearr_16527[(14)] = inst_16387__$1);

(statearr_16527[(16)] = inst_16390__$1);

(statearr_16527[(18)] = inst_16405);

(statearr_16527[(17)] = inst_16388__$1);

return statearr_16527;
})();
var statearr_16528_17698 = state_16508__$1;
(statearr_16528_17698[(2)] = null);

(statearr_16528_17698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (21))){
var inst_16432 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16532_17702 = state_16508__$1;
(statearr_16532_17702[(2)] = inst_16432);

(statearr_16532_17702[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (31))){
var inst_16458 = (state_16508[(11)]);
var inst_16462 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16458);
var state_16508__$1 = state_16508;
var statearr_16533_17703 = state_16508__$1;
(statearr_16533_17703[(2)] = inst_16462);

(statearr_16533_17703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (32))){
var inst_16452 = (state_16508[(19)]);
var inst_16450 = (state_16508[(20)]);
var inst_16453 = (state_16508[(9)]);
var inst_16451 = (state_16508[(10)]);
var inst_16464 = (state_16508[(2)]);
var inst_16465 = (inst_16453 + (1));
var tmp16529 = inst_16452;
var tmp16530 = inst_16450;
var tmp16531 = inst_16451;
var inst_16450__$1 = tmp16530;
var inst_16451__$1 = tmp16531;
var inst_16452__$1 = tmp16529;
var inst_16453__$1 = inst_16465;
var state_16508__$1 = (function (){var statearr_16534 = state_16508;
(statearr_16534[(19)] = inst_16452__$1);

(statearr_16534[(20)] = inst_16450__$1);

(statearr_16534[(9)] = inst_16453__$1);

(statearr_16534[(10)] = inst_16451__$1);

(statearr_16534[(21)] = inst_16464);

return statearr_16534;
})();
var statearr_16535_17704 = state_16508__$1;
(statearr_16535_17704[(2)] = null);

(statearr_16535_17704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (40))){
var inst_16477 = (state_16508[(22)]);
var inst_16481 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16477);
var state_16508__$1 = state_16508;
var statearr_16536_17708 = state_16508__$1;
(statearr_16536_17708[(2)] = inst_16481);

(statearr_16536_17708[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (33))){
var inst_16468 = (state_16508[(23)]);
var inst_16470 = cljs.core.chunked_seq_QMARK_(inst_16468);
var state_16508__$1 = state_16508;
if(inst_16470){
var statearr_16537_17709 = state_16508__$1;
(statearr_16537_17709[(1)] = (36));

} else {
var statearr_16538_17710 = state_16508__$1;
(statearr_16538_17710[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (13))){
var inst_16399 = (state_16508[(24)]);
var inst_16402 = cljs.core.async.close_BANG_(inst_16399);
var state_16508__$1 = state_16508;
var statearr_16539_17711 = state_16508__$1;
(statearr_16539_17711[(2)] = inst_16402);

(statearr_16539_17711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (22))){
var inst_16422 = (state_16508[(8)]);
var inst_16425 = cljs.core.async.close_BANG_(inst_16422);
var state_16508__$1 = state_16508;
var statearr_16540_17715 = state_16508__$1;
(statearr_16540_17715[(2)] = inst_16425);

(statearr_16540_17715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (36))){
var inst_16468 = (state_16508[(23)]);
var inst_16472 = cljs.core.chunk_first(inst_16468);
var inst_16473 = cljs.core.chunk_rest(inst_16468);
var inst_16474 = cljs.core.count(inst_16472);
var inst_16450 = inst_16473;
var inst_16451 = inst_16472;
var inst_16452 = inst_16474;
var inst_16453 = (0);
var state_16508__$1 = (function (){var statearr_16541 = state_16508;
(statearr_16541[(19)] = inst_16452);

(statearr_16541[(20)] = inst_16450);

(statearr_16541[(9)] = inst_16453);

(statearr_16541[(10)] = inst_16451);

return statearr_16541;
})();
var statearr_16542_17716 = state_16508__$1;
(statearr_16542_17716[(2)] = null);

(statearr_16542_17716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (41))){
var inst_16468 = (state_16508[(23)]);
var inst_16483 = (state_16508[(2)]);
var inst_16484 = cljs.core.next(inst_16468);
var inst_16450 = inst_16484;
var inst_16451 = null;
var inst_16452 = (0);
var inst_16453 = (0);
var state_16508__$1 = (function (){var statearr_16543 = state_16508;
(statearr_16543[(19)] = inst_16452);

(statearr_16543[(20)] = inst_16450);

(statearr_16543[(9)] = inst_16453);

(statearr_16543[(10)] = inst_16451);

(statearr_16543[(25)] = inst_16483);

return statearr_16543;
})();
var statearr_16544_17720 = state_16508__$1;
(statearr_16544_17720[(2)] = null);

(statearr_16544_17720[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (43))){
var state_16508__$1 = state_16508;
var statearr_16545_17721 = state_16508__$1;
(statearr_16545_17721[(2)] = null);

(statearr_16545_17721[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (29))){
var inst_16492 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16546_17722 = state_16508__$1;
(statearr_16546_17722[(2)] = inst_16492);

(statearr_16546_17722[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (44))){
var inst_16501 = (state_16508[(2)]);
var state_16508__$1 = (function (){var statearr_16547 = state_16508;
(statearr_16547[(26)] = inst_16501);

return statearr_16547;
})();
var statearr_16548_17723 = state_16508__$1;
(statearr_16548_17723[(2)] = null);

(statearr_16548_17723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (6))){
var inst_16442 = (state_16508[(27)]);
var inst_16441 = cljs.core.deref(cs);
var inst_16442__$1 = cljs.core.keys(inst_16441);
var inst_16443 = cljs.core.count(inst_16442__$1);
var inst_16444 = cljs.core.reset_BANG_(dctr,inst_16443);
var inst_16449 = cljs.core.seq(inst_16442__$1);
var inst_16450 = inst_16449;
var inst_16451 = null;
var inst_16452 = (0);
var inst_16453 = (0);
var state_16508__$1 = (function (){var statearr_16549 = state_16508;
(statearr_16549[(19)] = inst_16452);

(statearr_16549[(27)] = inst_16442__$1);

(statearr_16549[(20)] = inst_16450);

(statearr_16549[(9)] = inst_16453);

(statearr_16549[(10)] = inst_16451);

(statearr_16549[(28)] = inst_16444);

return statearr_16549;
})();
var statearr_16550_17724 = state_16508__$1;
(statearr_16550_17724[(2)] = null);

(statearr_16550_17724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (28))){
var inst_16450 = (state_16508[(20)]);
var inst_16468 = (state_16508[(23)]);
var inst_16468__$1 = cljs.core.seq(inst_16450);
var state_16508__$1 = (function (){var statearr_16551 = state_16508;
(statearr_16551[(23)] = inst_16468__$1);

return statearr_16551;
})();
if(inst_16468__$1){
var statearr_16552_17726 = state_16508__$1;
(statearr_16552_17726[(1)] = (33));

} else {
var statearr_16553_17727 = state_16508__$1;
(statearr_16553_17727[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (25))){
var inst_16452 = (state_16508[(19)]);
var inst_16453 = (state_16508[(9)]);
var inst_16455 = (inst_16453 < inst_16452);
var inst_16456 = inst_16455;
var state_16508__$1 = state_16508;
if(cljs.core.truth_(inst_16456)){
var statearr_16554_17728 = state_16508__$1;
(statearr_16554_17728[(1)] = (27));

} else {
var statearr_16555_17729 = state_16508__$1;
(statearr_16555_17729[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (34))){
var state_16508__$1 = state_16508;
var statearr_16556_17730 = state_16508__$1;
(statearr_16556_17730[(2)] = null);

(statearr_16556_17730[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (17))){
var state_16508__$1 = state_16508;
var statearr_16557_17731 = state_16508__$1;
(statearr_16557_17731[(2)] = null);

(statearr_16557_17731[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (3))){
var inst_16506 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16508__$1,inst_16506);
} else {
if((state_val_16509 === (12))){
var inst_16437 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16558_17732 = state_16508__$1;
(statearr_16558_17732[(2)] = inst_16437);

(statearr_16558_17732[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (2))){
var state_16508__$1 = state_16508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16508__$1,(4),ch);
} else {
if((state_val_16509 === (23))){
var state_16508__$1 = state_16508;
var statearr_16559_17733 = state_16508__$1;
(statearr_16559_17733[(2)] = null);

(statearr_16559_17733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (35))){
var inst_16490 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16560_17734 = state_16508__$1;
(statearr_16560_17734[(2)] = inst_16490);

(statearr_16560_17734[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (19))){
var inst_16409 = (state_16508[(7)]);
var inst_16413 = cljs.core.chunk_first(inst_16409);
var inst_16414 = cljs.core.chunk_rest(inst_16409);
var inst_16415 = cljs.core.count(inst_16413);
var inst_16387 = inst_16414;
var inst_16388 = inst_16413;
var inst_16389 = inst_16415;
var inst_16390 = (0);
var state_16508__$1 = (function (){var statearr_16561 = state_16508;
(statearr_16561[(13)] = inst_16389);

(statearr_16561[(14)] = inst_16387);

(statearr_16561[(16)] = inst_16390);

(statearr_16561[(17)] = inst_16388);

return statearr_16561;
})();
var statearr_16562_17735 = state_16508__$1;
(statearr_16562_17735[(2)] = null);

(statearr_16562_17735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (11))){
var inst_16409 = (state_16508[(7)]);
var inst_16387 = (state_16508[(14)]);
var inst_16409__$1 = cljs.core.seq(inst_16387);
var state_16508__$1 = (function (){var statearr_16563 = state_16508;
(statearr_16563[(7)] = inst_16409__$1);

return statearr_16563;
})();
if(inst_16409__$1){
var statearr_16564_17736 = state_16508__$1;
(statearr_16564_17736[(1)] = (16));

} else {
var statearr_16565_17737 = state_16508__$1;
(statearr_16565_17737[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (9))){
var inst_16439 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16566_17738 = state_16508__$1;
(statearr_16566_17738[(2)] = inst_16439);

(statearr_16566_17738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (5))){
var inst_16385 = cljs.core.deref(cs);
var inst_16386 = cljs.core.seq(inst_16385);
var inst_16387 = inst_16386;
var inst_16388 = null;
var inst_16389 = (0);
var inst_16390 = (0);
var state_16508__$1 = (function (){var statearr_16567 = state_16508;
(statearr_16567[(13)] = inst_16389);

(statearr_16567[(14)] = inst_16387);

(statearr_16567[(16)] = inst_16390);

(statearr_16567[(17)] = inst_16388);

return statearr_16567;
})();
var statearr_16568_17739 = state_16508__$1;
(statearr_16568_17739[(2)] = null);

(statearr_16568_17739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (14))){
var state_16508__$1 = state_16508;
var statearr_16569_17740 = state_16508__$1;
(statearr_16569_17740[(2)] = null);

(statearr_16569_17740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (45))){
var inst_16498 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16570_17741 = state_16508__$1;
(statearr_16570_17741[(2)] = inst_16498);

(statearr_16570_17741[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (26))){
var inst_16442 = (state_16508[(27)]);
var inst_16494 = (state_16508[(2)]);
var inst_16495 = cljs.core.seq(inst_16442);
var state_16508__$1 = (function (){var statearr_16571 = state_16508;
(statearr_16571[(29)] = inst_16494);

return statearr_16571;
})();
if(inst_16495){
var statearr_16572_17742 = state_16508__$1;
(statearr_16572_17742[(1)] = (42));

} else {
var statearr_16573_17743 = state_16508__$1;
(statearr_16573_17743[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (16))){
var inst_16409 = (state_16508[(7)]);
var inst_16411 = cljs.core.chunked_seq_QMARK_(inst_16409);
var state_16508__$1 = state_16508;
if(inst_16411){
var statearr_16574_17744 = state_16508__$1;
(statearr_16574_17744[(1)] = (19));

} else {
var statearr_16575_17745 = state_16508__$1;
(statearr_16575_17745[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (38))){
var inst_16487 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16576_17746 = state_16508__$1;
(statearr_16576_17746[(2)] = inst_16487);

(statearr_16576_17746[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (30))){
var state_16508__$1 = state_16508;
var statearr_16577_17747 = state_16508__$1;
(statearr_16577_17747[(2)] = null);

(statearr_16577_17747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (10))){
var inst_16390 = (state_16508[(16)]);
var inst_16388 = (state_16508[(17)]);
var inst_16398 = cljs.core._nth(inst_16388,inst_16390);
var inst_16399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16398,(0),null);
var inst_16400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16398,(1),null);
var state_16508__$1 = (function (){var statearr_16578 = state_16508;
(statearr_16578[(24)] = inst_16399);

return statearr_16578;
})();
if(cljs.core.truth_(inst_16400)){
var statearr_16579_17748 = state_16508__$1;
(statearr_16579_17748[(1)] = (13));

} else {
var statearr_16580_17749 = state_16508__$1;
(statearr_16580_17749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (18))){
var inst_16435 = (state_16508[(2)]);
var state_16508__$1 = state_16508;
var statearr_16581_17750 = state_16508__$1;
(statearr_16581_17750[(2)] = inst_16435);

(statearr_16581_17750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (42))){
var state_16508__$1 = state_16508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16508__$1,(45),dchan);
} else {
if((state_val_16509 === (37))){
var inst_16477 = (state_16508[(22)]);
var inst_16378 = (state_16508[(12)]);
var inst_16468 = (state_16508[(23)]);
var inst_16477__$1 = cljs.core.first(inst_16468);
var inst_16478 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16477__$1,inst_16378,done);
var state_16508__$1 = (function (){var statearr_16582 = state_16508;
(statearr_16582[(22)] = inst_16477__$1);

return statearr_16582;
})();
if(cljs.core.truth_(inst_16478)){
var statearr_16583_17751 = state_16508__$1;
(statearr_16583_17751[(1)] = (39));

} else {
var statearr_16584_17752 = state_16508__$1;
(statearr_16584_17752[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16509 === (8))){
var inst_16389 = (state_16508[(13)]);
var inst_16390 = (state_16508[(16)]);
var inst_16392 = (inst_16390 < inst_16389);
var inst_16393 = inst_16392;
var state_16508__$1 = state_16508;
if(cljs.core.truth_(inst_16393)){
var statearr_16585_17753 = state_16508__$1;
(statearr_16585_17753[(1)] = (10));

} else {
var statearr_16586_17754 = state_16508__$1;
(statearr_16586_17754[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__15553__auto__ = null;
var cljs$core$async$mult_$_state_machine__15553__auto____0 = (function (){
var statearr_16587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16587[(0)] = cljs$core$async$mult_$_state_machine__15553__auto__);

(statearr_16587[(1)] = (1));

return statearr_16587;
});
var cljs$core$async$mult_$_state_machine__15553__auto____1 = (function (state_16508){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16508);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16588){var ex__15556__auto__ = e16588;
var statearr_16589_17760 = state_16508;
(statearr_16589_17760[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16508[(4)]))){
var statearr_16590_17761 = state_16508;
(statearr_16590_17761[(1)] = cljs.core.first((state_16508[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17762 = state_16508;
state_16508 = G__17762;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15553__auto__ = function(state_16508){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15553__auto____1.call(this,state_16508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15553__auto____0;
cljs$core$async$mult_$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15553__auto____1;
return cljs$core$async$mult_$_state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16591 = f__15714__auto__();
(statearr_16591[(6)] = c__15713__auto___17674);

return statearr_16591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
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
var G__16593 = arguments.length;
switch (G__16593) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_17766 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17766(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17768 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17768(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17769 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17769(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17770 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17770(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17772 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17772(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17776 = arguments.length;
var i__5770__auto___17779 = (0);
while(true){
if((i__5770__auto___17779 < len__5769__auto___17776)){
args__5775__auto__.push((arguments[i__5770__auto___17779]));

var G__17780 = (i__5770__auto___17779 + (1));
i__5770__auto___17779 = G__17780;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16598){
var map__16599 = p__16598;
var map__16599__$1 = cljs.core.__destructure_map(map__16599);
var opts = map__16599__$1;
var statearr_16600_17783 = state;
(statearr_16600_17783[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16601_17784 = state;
(statearr_16601_17784[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16602_17785 = state;
(statearr_16602_17785[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16594){
var G__16595 = cljs.core.first(seq16594);
var seq16594__$1 = cljs.core.next(seq16594);
var G__16596 = cljs.core.first(seq16594__$1);
var seq16594__$2 = cljs.core.next(seq16594__$1);
var G__16597 = cljs.core.first(seq16594__$2);
var seq16594__$3 = cljs.core.next(seq16594__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16595,G__16596,G__16597,seq16594__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16603 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16603 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16604){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16604 = meta16604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16605,meta16604__$1){
var self__ = this;
var _16605__$1 = this;
return (new cljs.core.async.t_cljs$core$async16603(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16604__$1));
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16605){
var self__ = this;
var _16605__$1 = this;
return self__.meta16604;
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16603.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16604","meta16604",-1910714254,null)], null);
}));

(cljs.core.async.t_cljs$core$async16603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16603");

(cljs.core.async.t_cljs$core$async16603.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16603.
 */
cljs.core.async.__GT_t_cljs$core$async16603 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16603(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16604){
return (new cljs.core.async.t_cljs$core$async16603(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16604));
});

}

return (new cljs.core.async.t_cljs$core$async16603(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15713__auto___17799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16673){
var state_val_16674 = (state_16673[(1)]);
if((state_val_16674 === (7))){
var inst_16633 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
if(cljs.core.truth_(inst_16633)){
var statearr_16675_17800 = state_16673__$1;
(statearr_16675_17800[(1)] = (8));

} else {
var statearr_16676_17801 = state_16673__$1;
(statearr_16676_17801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (20))){
var inst_16626 = (state_16673[(7)]);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16673__$1,(23),out,inst_16626);
} else {
if((state_val_16674 === (1))){
var inst_16609 = calc_state();
var inst_16610 = cljs.core.__destructure_map(inst_16609);
var inst_16611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16610,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16610,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16610,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16614 = inst_16609;
var state_16673__$1 = (function (){var statearr_16677 = state_16673;
(statearr_16677[(8)] = inst_16613);

(statearr_16677[(9)] = inst_16614);

(statearr_16677[(10)] = inst_16612);

(statearr_16677[(11)] = inst_16611);

return statearr_16677;
})();
var statearr_16678_17808 = state_16673__$1;
(statearr_16678_17808[(2)] = null);

(statearr_16678_17808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (24))){
var inst_16617 = (state_16673[(12)]);
var inst_16614 = inst_16617;
var state_16673__$1 = (function (){var statearr_16679 = state_16673;
(statearr_16679[(9)] = inst_16614);

return statearr_16679;
})();
var statearr_16680_17809 = state_16673__$1;
(statearr_16680_17809[(2)] = null);

(statearr_16680_17809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (4))){
var inst_16628 = (state_16673[(13)]);
var inst_16626 = (state_16673[(7)]);
var inst_16625 = (state_16673[(2)]);
var inst_16626__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16625,(0),null);
var inst_16627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16625,(1),null);
var inst_16628__$1 = (inst_16626__$1 == null);
var state_16673__$1 = (function (){var statearr_16681 = state_16673;
(statearr_16681[(13)] = inst_16628__$1);

(statearr_16681[(14)] = inst_16627);

(statearr_16681[(7)] = inst_16626__$1);

return statearr_16681;
})();
if(cljs.core.truth_(inst_16628__$1)){
var statearr_16682_17810 = state_16673__$1;
(statearr_16682_17810[(1)] = (5));

} else {
var statearr_16683_17811 = state_16673__$1;
(statearr_16683_17811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (15))){
var inst_16647 = (state_16673[(15)]);
var inst_16618 = (state_16673[(16)]);
var inst_16647__$1 = cljs.core.empty_QMARK_(inst_16618);
var state_16673__$1 = (function (){var statearr_16684 = state_16673;
(statearr_16684[(15)] = inst_16647__$1);

return statearr_16684;
})();
if(inst_16647__$1){
var statearr_16685_17812 = state_16673__$1;
(statearr_16685_17812[(1)] = (17));

} else {
var statearr_16686_17813 = state_16673__$1;
(statearr_16686_17813[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (21))){
var inst_16617 = (state_16673[(12)]);
var inst_16614 = inst_16617;
var state_16673__$1 = (function (){var statearr_16687 = state_16673;
(statearr_16687[(9)] = inst_16614);

return statearr_16687;
})();
var statearr_16688_17814 = state_16673__$1;
(statearr_16688_17814[(2)] = null);

(statearr_16688_17814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (13))){
var inst_16640 = (state_16673[(2)]);
var inst_16641 = calc_state();
var inst_16614 = inst_16641;
var state_16673__$1 = (function (){var statearr_16689 = state_16673;
(statearr_16689[(9)] = inst_16614);

(statearr_16689[(17)] = inst_16640);

return statearr_16689;
})();
var statearr_16690_17815 = state_16673__$1;
(statearr_16690_17815[(2)] = null);

(statearr_16690_17815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (22))){
var inst_16667 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16691_17816 = state_16673__$1;
(statearr_16691_17816[(2)] = inst_16667);

(statearr_16691_17816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (6))){
var inst_16627 = (state_16673[(14)]);
var inst_16631 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16627,change);
var state_16673__$1 = state_16673;
var statearr_16692_17817 = state_16673__$1;
(statearr_16692_17817[(2)] = inst_16631);

(statearr_16692_17817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (25))){
var state_16673__$1 = state_16673;
var statearr_16693_17818 = state_16673__$1;
(statearr_16693_17818[(2)] = null);

(statearr_16693_17818[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (17))){
var inst_16619 = (state_16673[(18)]);
var inst_16627 = (state_16673[(14)]);
var inst_16649 = (inst_16619.cljs$core$IFn$_invoke$arity$1 ? inst_16619.cljs$core$IFn$_invoke$arity$1(inst_16627) : inst_16619.call(null,inst_16627));
var inst_16650 = cljs.core.not(inst_16649);
var state_16673__$1 = state_16673;
var statearr_16694_17819 = state_16673__$1;
(statearr_16694_17819[(2)] = inst_16650);

(statearr_16694_17819[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (3))){
var inst_16671 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16673__$1,inst_16671);
} else {
if((state_val_16674 === (12))){
var state_16673__$1 = state_16673;
var statearr_16695_17826 = state_16673__$1;
(statearr_16695_17826[(2)] = null);

(statearr_16695_17826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (2))){
var inst_16614 = (state_16673[(9)]);
var inst_16617 = (state_16673[(12)]);
var inst_16617__$1 = cljs.core.__destructure_map(inst_16614);
var inst_16618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16617__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16617__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16617__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16673__$1 = (function (){var statearr_16696 = state_16673;
(statearr_16696[(18)] = inst_16619);

(statearr_16696[(16)] = inst_16618);

(statearr_16696[(12)] = inst_16617__$1);

return statearr_16696;
})();
return cljs.core.async.ioc_alts_BANG_(state_16673__$1,(4),inst_16620);
} else {
if((state_val_16674 === (23))){
var inst_16658 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
if(cljs.core.truth_(inst_16658)){
var statearr_16697_17827 = state_16673__$1;
(statearr_16697_17827[(1)] = (24));

} else {
var statearr_16698_17828 = state_16673__$1;
(statearr_16698_17828[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (19))){
var inst_16653 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16699_17829 = state_16673__$1;
(statearr_16699_17829[(2)] = inst_16653);

(statearr_16699_17829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (11))){
var inst_16627 = (state_16673[(14)]);
var inst_16637 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16627);
var state_16673__$1 = state_16673;
var statearr_16700_17830 = state_16673__$1;
(statearr_16700_17830[(2)] = inst_16637);

(statearr_16700_17830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (9))){
var inst_16644 = (state_16673[(19)]);
var inst_16627 = (state_16673[(14)]);
var inst_16618 = (state_16673[(16)]);
var inst_16644__$1 = (inst_16618.cljs$core$IFn$_invoke$arity$1 ? inst_16618.cljs$core$IFn$_invoke$arity$1(inst_16627) : inst_16618.call(null,inst_16627));
var state_16673__$1 = (function (){var statearr_16701 = state_16673;
(statearr_16701[(19)] = inst_16644__$1);

return statearr_16701;
})();
if(cljs.core.truth_(inst_16644__$1)){
var statearr_16702_17831 = state_16673__$1;
(statearr_16702_17831[(1)] = (14));

} else {
var statearr_16703_17832 = state_16673__$1;
(statearr_16703_17832[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (5))){
var inst_16628 = (state_16673[(13)]);
var state_16673__$1 = state_16673;
var statearr_16704_17833 = state_16673__$1;
(statearr_16704_17833[(2)] = inst_16628);

(statearr_16704_17833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (14))){
var inst_16644 = (state_16673[(19)]);
var state_16673__$1 = state_16673;
var statearr_16705_17834 = state_16673__$1;
(statearr_16705_17834[(2)] = inst_16644);

(statearr_16705_17834[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (26))){
var inst_16663 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16706_17835 = state_16673__$1;
(statearr_16706_17835[(2)] = inst_16663);

(statearr_16706_17835[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (16))){
var inst_16655 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
if(cljs.core.truth_(inst_16655)){
var statearr_16707_17836 = state_16673__$1;
(statearr_16707_17836[(1)] = (20));

} else {
var statearr_16708_17837 = state_16673__$1;
(statearr_16708_17837[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (10))){
var inst_16669 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16709_17838 = state_16673__$1;
(statearr_16709_17838[(2)] = inst_16669);

(statearr_16709_17838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (18))){
var inst_16647 = (state_16673[(15)]);
var state_16673__$1 = state_16673;
var statearr_16710_17839 = state_16673__$1;
(statearr_16710_17839[(2)] = inst_16647);

(statearr_16710_17839[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (8))){
var inst_16626 = (state_16673[(7)]);
var inst_16635 = (inst_16626 == null);
var state_16673__$1 = state_16673;
if(cljs.core.truth_(inst_16635)){
var statearr_16711_17840 = state_16673__$1;
(statearr_16711_17840[(1)] = (11));

} else {
var statearr_16712_17841 = state_16673__$1;
(statearr_16712_17841[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__15553__auto__ = null;
var cljs$core$async$mix_$_state_machine__15553__auto____0 = (function (){
var statearr_16713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16713[(0)] = cljs$core$async$mix_$_state_machine__15553__auto__);

(statearr_16713[(1)] = (1));

return statearr_16713;
});
var cljs$core$async$mix_$_state_machine__15553__auto____1 = (function (state_16673){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16673);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16714){var ex__15556__auto__ = e16714;
var statearr_16715_17848 = state_16673;
(statearr_16715_17848[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16673[(4)]))){
var statearr_16716_17849 = state_16673;
(statearr_16716_17849[(1)] = cljs.core.first((state_16673[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17850 = state_16673;
state_16673 = G__17850;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15553__auto__ = function(state_16673){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15553__auto____1.call(this,state_16673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15553__auto____0;
cljs$core$async$mix_$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15553__auto____1;
return cljs$core$async$mix_$_state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16717 = f__15714__auto__();
(statearr_16717[(6)] = c__15713__auto___17799);

return statearr_16717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_17851 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17851(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17852 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17852(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17853 = (function() {
var G__17854 = null;
var G__17854__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17854__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17854 = function(p,v){
switch(arguments.length){
case 1:
return G__17854__1.call(this,p);
case 2:
return G__17854__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17854.cljs$core$IFn$_invoke$arity$1 = G__17854__1;
G__17854.cljs$core$IFn$_invoke$arity$2 = G__17854__2;
return G__17854;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16719 = arguments.length;
switch (G__16719) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17853(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17853(p,v);
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
var G__16722 = arguments.length;
switch (G__16722) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16720_SHARP_){
if(cljs.core.truth_((p1__16720_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16720_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16720_SHARP_.call(null,topic)))){
return p1__16720_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16720_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16723 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16724){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16724 = meta16724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16725,meta16724__$1){
var self__ = this;
var _16725__$1 = this;
return (new cljs.core.async.t_cljs$core$async16723(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16724__$1));
}));

(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16725){
var self__ = this;
var _16725__$1 = this;
return self__.meta16724;
}));

(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16723.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16724","meta16724",-1397282417,null)], null);
}));

(cljs.core.async.t_cljs$core$async16723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16723");

(cljs.core.async.t_cljs$core$async16723.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16723.
 */
cljs.core.async.__GT_t_cljs$core$async16723 = (function cljs$core$async$__GT_t_cljs$core$async16723(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16724){
return (new cljs.core.async.t_cljs$core$async16723(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16724));
});

}

return (new cljs.core.async.t_cljs$core$async16723(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15713__auto___17862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16797){
var state_val_16798 = (state_16797[(1)]);
if((state_val_16798 === (7))){
var inst_16793 = (state_16797[(2)]);
var state_16797__$1 = state_16797;
var statearr_16799_17863 = state_16797__$1;
(statearr_16799_17863[(2)] = inst_16793);

(statearr_16799_17863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (20))){
var state_16797__$1 = state_16797;
var statearr_16800_17864 = state_16797__$1;
(statearr_16800_17864[(2)] = null);

(statearr_16800_17864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (1))){
var state_16797__$1 = state_16797;
var statearr_16801_17865 = state_16797__$1;
(statearr_16801_17865[(2)] = null);

(statearr_16801_17865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (24))){
var inst_16776 = (state_16797[(7)]);
var inst_16785 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16776);
var state_16797__$1 = state_16797;
var statearr_16802_17866 = state_16797__$1;
(statearr_16802_17866[(2)] = inst_16785);

(statearr_16802_17866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (4))){
var inst_16728 = (state_16797[(8)]);
var inst_16728__$1 = (state_16797[(2)]);
var inst_16729 = (inst_16728__$1 == null);
var state_16797__$1 = (function (){var statearr_16803 = state_16797;
(statearr_16803[(8)] = inst_16728__$1);

return statearr_16803;
})();
if(cljs.core.truth_(inst_16729)){
var statearr_16804_17867 = state_16797__$1;
(statearr_16804_17867[(1)] = (5));

} else {
var statearr_16805_17868 = state_16797__$1;
(statearr_16805_17868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (15))){
var inst_16770 = (state_16797[(2)]);
var state_16797__$1 = state_16797;
var statearr_16806_17869 = state_16797__$1;
(statearr_16806_17869[(2)] = inst_16770);

(statearr_16806_17869[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (21))){
var inst_16790 = (state_16797[(2)]);
var state_16797__$1 = (function (){var statearr_16807 = state_16797;
(statearr_16807[(9)] = inst_16790);

return statearr_16807;
})();
var statearr_16808_17870 = state_16797__$1;
(statearr_16808_17870[(2)] = null);

(statearr_16808_17870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (13))){
var inst_16752 = (state_16797[(10)]);
var inst_16754 = cljs.core.chunked_seq_QMARK_(inst_16752);
var state_16797__$1 = state_16797;
if(inst_16754){
var statearr_16809_17871 = state_16797__$1;
(statearr_16809_17871[(1)] = (16));

} else {
var statearr_16810_17872 = state_16797__$1;
(statearr_16810_17872[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (22))){
var inst_16782 = (state_16797[(2)]);
var state_16797__$1 = state_16797;
if(cljs.core.truth_(inst_16782)){
var statearr_16811_17873 = state_16797__$1;
(statearr_16811_17873[(1)] = (23));

} else {
var statearr_16812_17874 = state_16797__$1;
(statearr_16812_17874[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (6))){
var inst_16778 = (state_16797[(11)]);
var inst_16728 = (state_16797[(8)]);
var inst_16776 = (state_16797[(7)]);
var inst_16776__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16728) : topic_fn.call(null,inst_16728));
var inst_16777 = cljs.core.deref(mults);
var inst_16778__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16777,inst_16776__$1);
var state_16797__$1 = (function (){var statearr_16813 = state_16797;
(statearr_16813[(11)] = inst_16778__$1);

(statearr_16813[(7)] = inst_16776__$1);

return statearr_16813;
})();
if(cljs.core.truth_(inst_16778__$1)){
var statearr_16814_17875 = state_16797__$1;
(statearr_16814_17875[(1)] = (19));

} else {
var statearr_16815_17876 = state_16797__$1;
(statearr_16815_17876[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (25))){
var inst_16787 = (state_16797[(2)]);
var state_16797__$1 = state_16797;
var statearr_16816_17878 = state_16797__$1;
(statearr_16816_17878[(2)] = inst_16787);

(statearr_16816_17878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (17))){
var inst_16752 = (state_16797[(10)]);
var inst_16761 = cljs.core.first(inst_16752);
var inst_16762 = cljs.core.async.muxch_STAR_(inst_16761);
var inst_16763 = cljs.core.async.close_BANG_(inst_16762);
var inst_16764 = cljs.core.next(inst_16752);
var inst_16738 = inst_16764;
var inst_16739 = null;
var inst_16740 = (0);
var inst_16741 = (0);
var state_16797__$1 = (function (){var statearr_16817 = state_16797;
(statearr_16817[(12)] = inst_16741);

(statearr_16817[(13)] = inst_16740);

(statearr_16817[(14)] = inst_16739);

(statearr_16817[(15)] = inst_16738);

(statearr_16817[(16)] = inst_16763);

return statearr_16817;
})();
var statearr_16818_17880 = state_16797__$1;
(statearr_16818_17880[(2)] = null);

(statearr_16818_17880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (3))){
var inst_16795 = (state_16797[(2)]);
var state_16797__$1 = state_16797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16797__$1,inst_16795);
} else {
if((state_val_16798 === (12))){
var inst_16772 = (state_16797[(2)]);
var state_16797__$1 = state_16797;
var statearr_16819_17881 = state_16797__$1;
(statearr_16819_17881[(2)] = inst_16772);

(statearr_16819_17881[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (2))){
var state_16797__$1 = state_16797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16797__$1,(4),ch);
} else {
if((state_val_16798 === (23))){
var state_16797__$1 = state_16797;
var statearr_16820_17882 = state_16797__$1;
(statearr_16820_17882[(2)] = null);

(statearr_16820_17882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (19))){
var inst_16778 = (state_16797[(11)]);
var inst_16728 = (state_16797[(8)]);
var inst_16780 = cljs.core.async.muxch_STAR_(inst_16778);
var state_16797__$1 = state_16797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16797__$1,(22),inst_16780,inst_16728);
} else {
if((state_val_16798 === (11))){
var inst_16738 = (state_16797[(15)]);
var inst_16752 = (state_16797[(10)]);
var inst_16752__$1 = cljs.core.seq(inst_16738);
var state_16797__$1 = (function (){var statearr_16821 = state_16797;
(statearr_16821[(10)] = inst_16752__$1);

return statearr_16821;
})();
if(inst_16752__$1){
var statearr_16822_17884 = state_16797__$1;
(statearr_16822_17884[(1)] = (13));

} else {
var statearr_16823_17886 = state_16797__$1;
(statearr_16823_17886[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (9))){
var inst_16774 = (state_16797[(2)]);
var state_16797__$1 = state_16797;
var statearr_16824_17887 = state_16797__$1;
(statearr_16824_17887[(2)] = inst_16774);

(statearr_16824_17887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (5))){
var inst_16735 = cljs.core.deref(mults);
var inst_16736 = cljs.core.vals(inst_16735);
var inst_16737 = cljs.core.seq(inst_16736);
var inst_16738 = inst_16737;
var inst_16739 = null;
var inst_16740 = (0);
var inst_16741 = (0);
var state_16797__$1 = (function (){var statearr_16825 = state_16797;
(statearr_16825[(12)] = inst_16741);

(statearr_16825[(13)] = inst_16740);

(statearr_16825[(14)] = inst_16739);

(statearr_16825[(15)] = inst_16738);

return statearr_16825;
})();
var statearr_16826_17888 = state_16797__$1;
(statearr_16826_17888[(2)] = null);

(statearr_16826_17888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (14))){
var state_16797__$1 = state_16797;
var statearr_16830_17889 = state_16797__$1;
(statearr_16830_17889[(2)] = null);

(statearr_16830_17889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (16))){
var inst_16752 = (state_16797[(10)]);
var inst_16756 = cljs.core.chunk_first(inst_16752);
var inst_16757 = cljs.core.chunk_rest(inst_16752);
var inst_16758 = cljs.core.count(inst_16756);
var inst_16738 = inst_16757;
var inst_16739 = inst_16756;
var inst_16740 = inst_16758;
var inst_16741 = (0);
var state_16797__$1 = (function (){var statearr_16831 = state_16797;
(statearr_16831[(12)] = inst_16741);

(statearr_16831[(13)] = inst_16740);

(statearr_16831[(14)] = inst_16739);

(statearr_16831[(15)] = inst_16738);

return statearr_16831;
})();
var statearr_16832_17890 = state_16797__$1;
(statearr_16832_17890[(2)] = null);

(statearr_16832_17890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (10))){
var inst_16741 = (state_16797[(12)]);
var inst_16740 = (state_16797[(13)]);
var inst_16739 = (state_16797[(14)]);
var inst_16738 = (state_16797[(15)]);
var inst_16746 = cljs.core._nth(inst_16739,inst_16741);
var inst_16747 = cljs.core.async.muxch_STAR_(inst_16746);
var inst_16748 = cljs.core.async.close_BANG_(inst_16747);
var inst_16749 = (inst_16741 + (1));
var tmp16827 = inst_16740;
var tmp16828 = inst_16739;
var tmp16829 = inst_16738;
var inst_16738__$1 = tmp16829;
var inst_16739__$1 = tmp16828;
var inst_16740__$1 = tmp16827;
var inst_16741__$1 = inst_16749;
var state_16797__$1 = (function (){var statearr_16833 = state_16797;
(statearr_16833[(12)] = inst_16741__$1);

(statearr_16833[(13)] = inst_16740__$1);

(statearr_16833[(14)] = inst_16739__$1);

(statearr_16833[(15)] = inst_16738__$1);

(statearr_16833[(17)] = inst_16748);

return statearr_16833;
})();
var statearr_16834_17891 = state_16797__$1;
(statearr_16834_17891[(2)] = null);

(statearr_16834_17891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (18))){
var inst_16767 = (state_16797[(2)]);
var state_16797__$1 = state_16797;
var statearr_16835_17892 = state_16797__$1;
(statearr_16835_17892[(2)] = inst_16767);

(statearr_16835_17892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16798 === (8))){
var inst_16741 = (state_16797[(12)]);
var inst_16740 = (state_16797[(13)]);
var inst_16743 = (inst_16741 < inst_16740);
var inst_16744 = inst_16743;
var state_16797__$1 = state_16797;
if(cljs.core.truth_(inst_16744)){
var statearr_16836_17893 = state_16797__$1;
(statearr_16836_17893[(1)] = (10));

} else {
var statearr_16837_17894 = state_16797__$1;
(statearr_16837_17894[(1)] = (11));

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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_16838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16838[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_16838[(1)] = (1));

return statearr_16838;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_16797){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16797);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16839){var ex__15556__auto__ = e16839;
var statearr_16840_17895 = state_16797;
(statearr_16840_17895[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16797[(4)]))){
var statearr_16841_17896 = state_16797;
(statearr_16841_17896[(1)] = cljs.core.first((state_16797[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17898 = state_16797;
state_16797 = G__17898;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_16797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_16797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16842 = f__15714__auto__();
(statearr_16842[(6)] = c__15713__auto___17862);

return statearr_16842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
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
var G__16844 = arguments.length;
switch (G__16844) {
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
var G__16846 = arguments.length;
switch (G__16846) {
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
var G__16848 = arguments.length;
switch (G__16848) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15713__auto___17903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16891){
var state_val_16892 = (state_16891[(1)]);
if((state_val_16892 === (7))){
var state_16891__$1 = state_16891;
var statearr_16893_17904 = state_16891__$1;
(statearr_16893_17904[(2)] = null);

(statearr_16893_17904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (1))){
var state_16891__$1 = state_16891;
var statearr_16894_17905 = state_16891__$1;
(statearr_16894_17905[(2)] = null);

(statearr_16894_17905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (4))){
var inst_16851 = (state_16891[(7)]);
var inst_16852 = (state_16891[(8)]);
var inst_16854 = (inst_16852 < inst_16851);
var state_16891__$1 = state_16891;
if(cljs.core.truth_(inst_16854)){
var statearr_16895_17906 = state_16891__$1;
(statearr_16895_17906[(1)] = (6));

} else {
var statearr_16896_17907 = state_16891__$1;
(statearr_16896_17907[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (15))){
var inst_16877 = (state_16891[(9)]);
var inst_16882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16877);
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16891__$1,(17),out,inst_16882);
} else {
if((state_val_16892 === (13))){
var inst_16877 = (state_16891[(9)]);
var inst_16877__$1 = (state_16891[(2)]);
var inst_16878 = cljs.core.some(cljs.core.nil_QMARK_,inst_16877__$1);
var state_16891__$1 = (function (){var statearr_16897 = state_16891;
(statearr_16897[(9)] = inst_16877__$1);

return statearr_16897;
})();
if(cljs.core.truth_(inst_16878)){
var statearr_16898_17908 = state_16891__$1;
(statearr_16898_17908[(1)] = (14));

} else {
var statearr_16899_17909 = state_16891__$1;
(statearr_16899_17909[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (6))){
var state_16891__$1 = state_16891;
var statearr_16900_17910 = state_16891__$1;
(statearr_16900_17910[(2)] = null);

(statearr_16900_17910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (17))){
var inst_16884 = (state_16891[(2)]);
var state_16891__$1 = (function (){var statearr_16902 = state_16891;
(statearr_16902[(10)] = inst_16884);

return statearr_16902;
})();
var statearr_16903_17911 = state_16891__$1;
(statearr_16903_17911[(2)] = null);

(statearr_16903_17911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (3))){
var inst_16889 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16891__$1,inst_16889);
} else {
if((state_val_16892 === (12))){
var _ = (function (){var statearr_16904 = state_16891;
(statearr_16904[(4)] = cljs.core.rest((state_16891[(4)])));

return statearr_16904;
})();
var state_16891__$1 = state_16891;
var ex16901 = (state_16891__$1[(2)]);
var statearr_16905_17912 = state_16891__$1;
(statearr_16905_17912[(5)] = ex16901);


if((ex16901 instanceof Object)){
var statearr_16906_17913 = state_16891__$1;
(statearr_16906_17913[(1)] = (11));

(statearr_16906_17913[(5)] = null);

} else {
throw ex16901;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (2))){
var inst_16850 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16851 = cnt;
var inst_16852 = (0);
var state_16891__$1 = (function (){var statearr_16907 = state_16891;
(statearr_16907[(7)] = inst_16851);

(statearr_16907[(8)] = inst_16852);

(statearr_16907[(11)] = inst_16850);

return statearr_16907;
})();
var statearr_16908_17915 = state_16891__$1;
(statearr_16908_17915[(2)] = null);

(statearr_16908_17915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (11))){
var inst_16856 = (state_16891[(2)]);
var inst_16857 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16891__$1 = (function (){var statearr_16909 = state_16891;
(statearr_16909[(12)] = inst_16856);

return statearr_16909;
})();
var statearr_16910_17916 = state_16891__$1;
(statearr_16910_17916[(2)] = inst_16857);

(statearr_16910_17916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (9))){
var inst_16852 = (state_16891[(8)]);
var _ = (function (){var statearr_16911 = state_16891;
(statearr_16911[(4)] = cljs.core.cons((12),(state_16891[(4)])));

return statearr_16911;
})();
var inst_16863 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16852) : chs__$1.call(null,inst_16852));
var inst_16864 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16852) : done.call(null,inst_16852));
var inst_16865 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16863,inst_16864);
var ___$1 = (function (){var statearr_16912 = state_16891;
(statearr_16912[(4)] = cljs.core.rest((state_16891[(4)])));

return statearr_16912;
})();
var state_16891__$1 = state_16891;
var statearr_16913_17917 = state_16891__$1;
(statearr_16913_17917[(2)] = inst_16865);

(statearr_16913_17917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (5))){
var inst_16875 = (state_16891[(2)]);
var state_16891__$1 = (function (){var statearr_16914 = state_16891;
(statearr_16914[(13)] = inst_16875);

return statearr_16914;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16891__$1,(13),dchan);
} else {
if((state_val_16892 === (14))){
var inst_16880 = cljs.core.async.close_BANG_(out);
var state_16891__$1 = state_16891;
var statearr_16915_17922 = state_16891__$1;
(statearr_16915_17922[(2)] = inst_16880);

(statearr_16915_17922[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (16))){
var inst_16887 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
var statearr_16916_17923 = state_16891__$1;
(statearr_16916_17923[(2)] = inst_16887);

(statearr_16916_17923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (10))){
var inst_16852 = (state_16891[(8)]);
var inst_16868 = (state_16891[(2)]);
var inst_16869 = (inst_16852 + (1));
var inst_16852__$1 = inst_16869;
var state_16891__$1 = (function (){var statearr_16917 = state_16891;
(statearr_16917[(8)] = inst_16852__$1);

(statearr_16917[(14)] = inst_16868);

return statearr_16917;
})();
var statearr_16918_17924 = state_16891__$1;
(statearr_16918_17924[(2)] = null);

(statearr_16918_17924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (8))){
var inst_16873 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
var statearr_16919_17925 = state_16891__$1;
(statearr_16919_17925[(2)] = inst_16873);

(statearr_16919_17925[(1)] = (5));


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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_16920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16920[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_16920[(1)] = (1));

return statearr_16920;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_16891){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16891);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16921){var ex__15556__auto__ = e16921;
var statearr_16922_17926 = state_16891;
(statearr_16922_17926[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16891[(4)]))){
var statearr_16923_17927 = state_16891;
(statearr_16923_17927[(1)] = cljs.core.first((state_16891[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17928 = state_16891;
state_16891 = G__17928;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_16891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_16891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16924 = f__15714__auto__();
(statearr_16924[(6)] = c__15713__auto___17903);

return statearr_16924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));

}

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
var G__16927 = arguments.length;
switch (G__16927) {
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
var c__15713__auto___17930 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_16959){
var state_val_16960 = (state_16959[(1)]);
if((state_val_16960 === (7))){
var inst_16938 = (state_16959[(7)]);
var inst_16939 = (state_16959[(8)]);
var inst_16938__$1 = (state_16959[(2)]);
var inst_16939__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16938__$1,(0),null);
var inst_16940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16938__$1,(1),null);
var inst_16941 = (inst_16939__$1 == null);
var state_16959__$1 = (function (){var statearr_16961 = state_16959;
(statearr_16961[(7)] = inst_16938__$1);

(statearr_16961[(9)] = inst_16940);

(statearr_16961[(8)] = inst_16939__$1);

return statearr_16961;
})();
if(cljs.core.truth_(inst_16941)){
var statearr_16962_17931 = state_16959__$1;
(statearr_16962_17931[(1)] = (8));

} else {
var statearr_16963_17932 = state_16959__$1;
(statearr_16963_17932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16960 === (1))){
var inst_16928 = cljs.core.vec(chs);
var inst_16929 = inst_16928;
var state_16959__$1 = (function (){var statearr_16964 = state_16959;
(statearr_16964[(10)] = inst_16929);

return statearr_16964;
})();
var statearr_16965_17937 = state_16959__$1;
(statearr_16965_17937[(2)] = null);

(statearr_16965_17937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16960 === (4))){
var inst_16929 = (state_16959[(10)]);
var state_16959__$1 = state_16959;
return cljs.core.async.ioc_alts_BANG_(state_16959__$1,(7),inst_16929);
} else {
if((state_val_16960 === (6))){
var inst_16955 = (state_16959[(2)]);
var state_16959__$1 = state_16959;
var statearr_16966_17941 = state_16959__$1;
(statearr_16966_17941[(2)] = inst_16955);

(statearr_16966_17941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16960 === (3))){
var inst_16957 = (state_16959[(2)]);
var state_16959__$1 = state_16959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16959__$1,inst_16957);
} else {
if((state_val_16960 === (2))){
var inst_16929 = (state_16959[(10)]);
var inst_16931 = cljs.core.count(inst_16929);
var inst_16932 = (inst_16931 > (0));
var state_16959__$1 = state_16959;
if(cljs.core.truth_(inst_16932)){
var statearr_16972_17942 = state_16959__$1;
(statearr_16972_17942[(1)] = (4));

} else {
var statearr_16973_17943 = state_16959__$1;
(statearr_16973_17943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16960 === (11))){
var inst_16929 = (state_16959[(10)]);
var inst_16948 = (state_16959[(2)]);
var tmp16967 = inst_16929;
var inst_16929__$1 = tmp16967;
var state_16959__$1 = (function (){var statearr_16974 = state_16959;
(statearr_16974[(11)] = inst_16948);

(statearr_16974[(10)] = inst_16929__$1);

return statearr_16974;
})();
var statearr_16975_17947 = state_16959__$1;
(statearr_16975_17947[(2)] = null);

(statearr_16975_17947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16960 === (9))){
var inst_16939 = (state_16959[(8)]);
var state_16959__$1 = state_16959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16959__$1,(11),out,inst_16939);
} else {
if((state_val_16960 === (5))){
var inst_16953 = cljs.core.async.close_BANG_(out);
var state_16959__$1 = state_16959;
var statearr_16979_17948 = state_16959__$1;
(statearr_16979_17948[(2)] = inst_16953);

(statearr_16979_17948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16960 === (10))){
var inst_16951 = (state_16959[(2)]);
var state_16959__$1 = state_16959;
var statearr_16980_17949 = state_16959__$1;
(statearr_16980_17949[(2)] = inst_16951);

(statearr_16980_17949[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16960 === (8))){
var inst_16938 = (state_16959[(7)]);
var inst_16940 = (state_16959[(9)]);
var inst_16929 = (state_16959[(10)]);
var inst_16939 = (state_16959[(8)]);
var inst_16943 = (function (){var cs = inst_16929;
var vec__16934 = inst_16938;
var v = inst_16939;
var c = inst_16940;
return (function (p1__16925_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16925_SHARP_);
});
})();
var inst_16944 = cljs.core.filterv(inst_16943,inst_16929);
var inst_16929__$1 = inst_16944;
var state_16959__$1 = (function (){var statearr_16981 = state_16959;
(statearr_16981[(10)] = inst_16929__$1);

return statearr_16981;
})();
var statearr_16982_17953 = state_16959__$1;
(statearr_16982_17953[(2)] = null);

(statearr_16982_17953[(1)] = (2));


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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_16984 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16984[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_16984[(1)] = (1));

return statearr_16984;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_16959){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_16959);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e16986){var ex__15556__auto__ = e16986;
var statearr_16987_17957 = state_16959;
(statearr_16987_17957[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_16959[(4)]))){
var statearr_16988_17958 = state_16959;
(statearr_16988_17958[(1)] = cljs.core.first((state_16959[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17959 = state_16959;
state_16959 = G__17959;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_16959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_16959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_16989 = f__15714__auto__();
(statearr_16989[(6)] = c__15713__auto___17930);

return statearr_16989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
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
var G__16991 = arguments.length;
switch (G__16991) {
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
var c__15713__auto___17965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_17015){
var state_val_17016 = (state_17015[(1)]);
if((state_val_17016 === (7))){
var inst_16997 = (state_17015[(7)]);
var inst_16997__$1 = (state_17015[(2)]);
var inst_16998 = (inst_16997__$1 == null);
var inst_16999 = cljs.core.not(inst_16998);
var state_17015__$1 = (function (){var statearr_17017 = state_17015;
(statearr_17017[(7)] = inst_16997__$1);

return statearr_17017;
})();
if(inst_16999){
var statearr_17018_17966 = state_17015__$1;
(statearr_17018_17966[(1)] = (8));

} else {
var statearr_17019_17967 = state_17015__$1;
(statearr_17019_17967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (1))){
var inst_16992 = (0);
var state_17015__$1 = (function (){var statearr_17020 = state_17015;
(statearr_17020[(8)] = inst_16992);

return statearr_17020;
})();
var statearr_17021_17968 = state_17015__$1;
(statearr_17021_17968[(2)] = null);

(statearr_17021_17968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (4))){
var state_17015__$1 = state_17015;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17015__$1,(7),ch);
} else {
if((state_val_17016 === (6))){
var inst_17010 = (state_17015[(2)]);
var state_17015__$1 = state_17015;
var statearr_17022_17969 = state_17015__$1;
(statearr_17022_17969[(2)] = inst_17010);

(statearr_17022_17969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (3))){
var inst_17012 = (state_17015[(2)]);
var inst_17013 = cljs.core.async.close_BANG_(out);
var state_17015__$1 = (function (){var statearr_17023 = state_17015;
(statearr_17023[(9)] = inst_17012);

return statearr_17023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17015__$1,inst_17013);
} else {
if((state_val_17016 === (2))){
var inst_16992 = (state_17015[(8)]);
var inst_16994 = (inst_16992 < n);
var state_17015__$1 = state_17015;
if(cljs.core.truth_(inst_16994)){
var statearr_17024_17970 = state_17015__$1;
(statearr_17024_17970[(1)] = (4));

} else {
var statearr_17025_17971 = state_17015__$1;
(statearr_17025_17971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (11))){
var inst_16992 = (state_17015[(8)]);
var inst_17002 = (state_17015[(2)]);
var inst_17003 = (inst_16992 + (1));
var inst_16992__$1 = inst_17003;
var state_17015__$1 = (function (){var statearr_17027 = state_17015;
(statearr_17027[(10)] = inst_17002);

(statearr_17027[(8)] = inst_16992__$1);

return statearr_17027;
})();
var statearr_17028_17972 = state_17015__$1;
(statearr_17028_17972[(2)] = null);

(statearr_17028_17972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (9))){
var state_17015__$1 = state_17015;
var statearr_17030_17974 = state_17015__$1;
(statearr_17030_17974[(2)] = null);

(statearr_17030_17974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (5))){
var state_17015__$1 = state_17015;
var statearr_17031_17976 = state_17015__$1;
(statearr_17031_17976[(2)] = null);

(statearr_17031_17976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (10))){
var inst_17007 = (state_17015[(2)]);
var state_17015__$1 = state_17015;
var statearr_17033_17977 = state_17015__$1;
(statearr_17033_17977[(2)] = inst_17007);

(statearr_17033_17977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17016 === (8))){
var inst_16997 = (state_17015[(7)]);
var state_17015__$1 = state_17015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17015__$1,(11),out,inst_16997);
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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_17034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17034[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_17034[(1)] = (1));

return statearr_17034;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_17015){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_17015);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e17035){var ex__15556__auto__ = e17035;
var statearr_17036_17978 = state_17015;
(statearr_17036_17978[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_17015[(4)]))){
var statearr_17037_17979 = state_17015;
(statearr_17037_17979[(1)] = cljs.core.first((state_17015[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17980 = state_17015;
state_17015 = G__17980;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_17015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_17015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_17038 = f__15714__auto__();
(statearr_17038[(6)] = c__15713__auto___17965);

return statearr_17038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17041 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17041 = (function (f,ch,meta17042){
this.f = f;
this.ch = ch;
this.meta17042 = meta17042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17043,meta17042__$1){
var self__ = this;
var _17043__$1 = this;
return (new cljs.core.async.t_cljs$core$async17041(self__.f,self__.ch,meta17042__$1));
}));

(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17043){
var self__ = this;
var _17043__$1 = this;
return self__.meta17042;
}));

(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17046 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17046 = (function (f,ch,meta17042,_,fn1,meta17047){
this.f = f;
this.ch = ch;
this.meta17042 = meta17042;
this._ = _;
this.fn1 = fn1;
this.meta17047 = meta17047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17048,meta17047__$1){
var self__ = this;
var _17048__$1 = this;
return (new cljs.core.async.t_cljs$core$async17046(self__.f,self__.ch,self__.meta17042,self__._,self__.fn1,meta17047__$1));
}));

(cljs.core.async.t_cljs$core$async17046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17048){
var self__ = this;
var _17048__$1 = this;
return self__.meta17047;
}));

(cljs.core.async.t_cljs$core$async17046.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17039_SHARP_){
var G__17050 = (((p1__17039_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17039_SHARP_) : self__.f.call(null,p1__17039_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17050) : f1.call(null,G__17050));
});
}));

(cljs.core.async.t_cljs$core$async17046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17042","meta17042",2007253588,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17041","cljs.core.async/t_cljs$core$async17041",-863558343,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17047","meta17047",608216355,null)], null);
}));

(cljs.core.async.t_cljs$core$async17046.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17046");

(cljs.core.async.t_cljs$core$async17046.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17046");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17046.
 */
cljs.core.async.__GT_t_cljs$core$async17046 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17046(f__$1,ch__$1,meta17042__$1,___$2,fn1__$1,meta17047){
return (new cljs.core.async.t_cljs$core$async17046(f__$1,ch__$1,meta17042__$1,___$2,fn1__$1,meta17047));
});

}

return (new cljs.core.async.t_cljs$core$async17046(self__.f,self__.ch,self__.meta17042,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17053 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17053) : self__.f.call(null,G__17053));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17041.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17041.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17042","meta17042",2007253588,null)], null);
}));

(cljs.core.async.t_cljs$core$async17041.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17041");

(cljs.core.async.t_cljs$core$async17041.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17041");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17041.
 */
cljs.core.async.__GT_t_cljs$core$async17041 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17041(f__$1,ch__$1,meta17042){
return (new cljs.core.async.t_cljs$core$async17041(f__$1,ch__$1,meta17042));
});

}

return (new cljs.core.async.t_cljs$core$async17041(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17054 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17054 = (function (f,ch,meta17055){
this.f = f;
this.ch = ch;
this.meta17055 = meta17055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17056,meta17055__$1){
var self__ = this;
var _17056__$1 = this;
return (new cljs.core.async.t_cljs$core$async17054(self__.f,self__.ch,meta17055__$1));
}));

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17056){
var self__ = this;
var _17056__$1 = this;
return self__.meta17055;
}));

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17055","meta17055",453017073,null)], null);
}));

(cljs.core.async.t_cljs$core$async17054.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17054");

(cljs.core.async.t_cljs$core$async17054.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17054");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17054.
 */
cljs.core.async.__GT_t_cljs$core$async17054 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17054(f__$1,ch__$1,meta17055){
return (new cljs.core.async.t_cljs$core$async17054(f__$1,ch__$1,meta17055));
});

}

return (new cljs.core.async.t_cljs$core$async17054(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17058 = (function (p,ch,meta17059){
this.p = p;
this.ch = ch;
this.meta17059 = meta17059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17060,meta17059__$1){
var self__ = this;
var _17060__$1 = this;
return (new cljs.core.async.t_cljs$core$async17058(self__.p,self__.ch,meta17059__$1));
}));

(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17060){
var self__ = this;
var _17060__$1 = this;
return self__.meta17059;
}));

(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17058.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17059","meta17059",1908596492,null)], null);
}));

(cljs.core.async.t_cljs$core$async17058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17058");

(cljs.core.async.t_cljs$core$async17058.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17058.
 */
cljs.core.async.__GT_t_cljs$core$async17058 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17058(p__$1,ch__$1,meta17059){
return (new cljs.core.async.t_cljs$core$async17058(p__$1,ch__$1,meta17059));
});

}

return (new cljs.core.async.t_cljs$core$async17058(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17062 = arguments.length;
switch (G__17062) {
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
var c__15713__auto___17990 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_17083){
var state_val_17084 = (state_17083[(1)]);
if((state_val_17084 === (7))){
var inst_17079 = (state_17083[(2)]);
var state_17083__$1 = state_17083;
var statearr_17085_17992 = state_17083__$1;
(statearr_17085_17992[(2)] = inst_17079);

(statearr_17085_17992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17084 === (1))){
var state_17083__$1 = state_17083;
var statearr_17086_17993 = state_17083__$1;
(statearr_17086_17993[(2)] = null);

(statearr_17086_17993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17084 === (4))){
var inst_17065 = (state_17083[(7)]);
var inst_17065__$1 = (state_17083[(2)]);
var inst_17066 = (inst_17065__$1 == null);
var state_17083__$1 = (function (){var statearr_17087 = state_17083;
(statearr_17087[(7)] = inst_17065__$1);

return statearr_17087;
})();
if(cljs.core.truth_(inst_17066)){
var statearr_17088_17994 = state_17083__$1;
(statearr_17088_17994[(1)] = (5));

} else {
var statearr_17089_17995 = state_17083__$1;
(statearr_17089_17995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17084 === (6))){
var inst_17065 = (state_17083[(7)]);
var inst_17070 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17065) : p.call(null,inst_17065));
var state_17083__$1 = state_17083;
if(cljs.core.truth_(inst_17070)){
var statearr_17090_17996 = state_17083__$1;
(statearr_17090_17996[(1)] = (8));

} else {
var statearr_17091_17997 = state_17083__$1;
(statearr_17091_17997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17084 === (3))){
var inst_17081 = (state_17083[(2)]);
var state_17083__$1 = state_17083;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17083__$1,inst_17081);
} else {
if((state_val_17084 === (2))){
var state_17083__$1 = state_17083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17083__$1,(4),ch);
} else {
if((state_val_17084 === (11))){
var inst_17073 = (state_17083[(2)]);
var state_17083__$1 = state_17083;
var statearr_17092_17998 = state_17083__$1;
(statearr_17092_17998[(2)] = inst_17073);

(statearr_17092_17998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17084 === (9))){
var state_17083__$1 = state_17083;
var statearr_17093_17999 = state_17083__$1;
(statearr_17093_17999[(2)] = null);

(statearr_17093_17999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17084 === (5))){
var inst_17068 = cljs.core.async.close_BANG_(out);
var state_17083__$1 = state_17083;
var statearr_17094_18001 = state_17083__$1;
(statearr_17094_18001[(2)] = inst_17068);

(statearr_17094_18001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17084 === (10))){
var inst_17076 = (state_17083[(2)]);
var state_17083__$1 = (function (){var statearr_17095 = state_17083;
(statearr_17095[(8)] = inst_17076);

return statearr_17095;
})();
var statearr_17096_18002 = state_17083__$1;
(statearr_17096_18002[(2)] = null);

(statearr_17096_18002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17084 === (8))){
var inst_17065 = (state_17083[(7)]);
var state_17083__$1 = state_17083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17083__$1,(11),out,inst_17065);
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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_17097 = [null,null,null,null,null,null,null,null,null];
(statearr_17097[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_17097[(1)] = (1));

return statearr_17097;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_17083){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_17083);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e17098){var ex__15556__auto__ = e17098;
var statearr_17099_18004 = state_17083;
(statearr_17099_18004[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_17083[(4)]))){
var statearr_17100_18008 = state_17083;
(statearr_17100_18008[(1)] = cljs.core.first((state_17083[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18009 = state_17083;
state_17083 = G__18009;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_17083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_17083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_17101 = f__15714__auto__();
(statearr_17101[(6)] = c__15713__auto___17990);

return statearr_17101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17103 = arguments.length;
switch (G__17103) {
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
var c__15713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_17165){
var state_val_17166 = (state_17165[(1)]);
if((state_val_17166 === (7))){
var inst_17161 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17167_18011 = state_17165__$1;
(statearr_17167_18011[(2)] = inst_17161);

(statearr_17167_18011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (20))){
var inst_17131 = (state_17165[(7)]);
var inst_17142 = (state_17165[(2)]);
var inst_17143 = cljs.core.next(inst_17131);
var inst_17117 = inst_17143;
var inst_17118 = null;
var inst_17119 = (0);
var inst_17120 = (0);
var state_17165__$1 = (function (){var statearr_17168 = state_17165;
(statearr_17168[(8)] = inst_17120);

(statearr_17168[(9)] = inst_17117);

(statearr_17168[(10)] = inst_17119);

(statearr_17168[(11)] = inst_17118);

(statearr_17168[(12)] = inst_17142);

return statearr_17168;
})();
var statearr_17169_18012 = state_17165__$1;
(statearr_17169_18012[(2)] = null);

(statearr_17169_18012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (1))){
var state_17165__$1 = state_17165;
var statearr_17170_18013 = state_17165__$1;
(statearr_17170_18013[(2)] = null);

(statearr_17170_18013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (4))){
var inst_17106 = (state_17165[(13)]);
var inst_17106__$1 = (state_17165[(2)]);
var inst_17107 = (inst_17106__$1 == null);
var state_17165__$1 = (function (){var statearr_17171 = state_17165;
(statearr_17171[(13)] = inst_17106__$1);

return statearr_17171;
})();
if(cljs.core.truth_(inst_17107)){
var statearr_17172_18014 = state_17165__$1;
(statearr_17172_18014[(1)] = (5));

} else {
var statearr_17173_18015 = state_17165__$1;
(statearr_17173_18015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (15))){
var state_17165__$1 = state_17165;
var statearr_17177_18016 = state_17165__$1;
(statearr_17177_18016[(2)] = null);

(statearr_17177_18016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (21))){
var state_17165__$1 = state_17165;
var statearr_17178_18017 = state_17165__$1;
(statearr_17178_18017[(2)] = null);

(statearr_17178_18017[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (13))){
var inst_17120 = (state_17165[(8)]);
var inst_17117 = (state_17165[(9)]);
var inst_17119 = (state_17165[(10)]);
var inst_17118 = (state_17165[(11)]);
var inst_17127 = (state_17165[(2)]);
var inst_17128 = (inst_17120 + (1));
var tmp17174 = inst_17117;
var tmp17175 = inst_17119;
var tmp17176 = inst_17118;
var inst_17117__$1 = tmp17174;
var inst_17118__$1 = tmp17176;
var inst_17119__$1 = tmp17175;
var inst_17120__$1 = inst_17128;
var state_17165__$1 = (function (){var statearr_17181 = state_17165;
(statearr_17181[(8)] = inst_17120__$1);

(statearr_17181[(9)] = inst_17117__$1);

(statearr_17181[(10)] = inst_17119__$1);

(statearr_17181[(14)] = inst_17127);

(statearr_17181[(11)] = inst_17118__$1);

return statearr_17181;
})();
var statearr_17185_18018 = state_17165__$1;
(statearr_17185_18018[(2)] = null);

(statearr_17185_18018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (22))){
var state_17165__$1 = state_17165;
var statearr_17187_18019 = state_17165__$1;
(statearr_17187_18019[(2)] = null);

(statearr_17187_18019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (6))){
var inst_17106 = (state_17165[(13)]);
var inst_17115 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17106) : f.call(null,inst_17106));
var inst_17116 = cljs.core.seq(inst_17115);
var inst_17117 = inst_17116;
var inst_17118 = null;
var inst_17119 = (0);
var inst_17120 = (0);
var state_17165__$1 = (function (){var statearr_17188 = state_17165;
(statearr_17188[(8)] = inst_17120);

(statearr_17188[(9)] = inst_17117);

(statearr_17188[(10)] = inst_17119);

(statearr_17188[(11)] = inst_17118);

return statearr_17188;
})();
var statearr_17190_18020 = state_17165__$1;
(statearr_17190_18020[(2)] = null);

(statearr_17190_18020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (17))){
var inst_17131 = (state_17165[(7)]);
var inst_17135 = cljs.core.chunk_first(inst_17131);
var inst_17136 = cljs.core.chunk_rest(inst_17131);
var inst_17137 = cljs.core.count(inst_17135);
var inst_17117 = inst_17136;
var inst_17118 = inst_17135;
var inst_17119 = inst_17137;
var inst_17120 = (0);
var state_17165__$1 = (function (){var statearr_17194 = state_17165;
(statearr_17194[(8)] = inst_17120);

(statearr_17194[(9)] = inst_17117);

(statearr_17194[(10)] = inst_17119);

(statearr_17194[(11)] = inst_17118);

return statearr_17194;
})();
var statearr_17196_18021 = state_17165__$1;
(statearr_17196_18021[(2)] = null);

(statearr_17196_18021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (3))){
var inst_17163 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17165__$1,inst_17163);
} else {
if((state_val_17166 === (12))){
var inst_17151 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17203_18022 = state_17165__$1;
(statearr_17203_18022[(2)] = inst_17151);

(statearr_17203_18022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (2))){
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17165__$1,(4),in$);
} else {
if((state_val_17166 === (23))){
var inst_17159 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17206_18023 = state_17165__$1;
(statearr_17206_18023[(2)] = inst_17159);

(statearr_17206_18023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (19))){
var inst_17146 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17208_18025 = state_17165__$1;
(statearr_17208_18025[(2)] = inst_17146);

(statearr_17208_18025[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (11))){
var inst_17131 = (state_17165[(7)]);
var inst_17117 = (state_17165[(9)]);
var inst_17131__$1 = cljs.core.seq(inst_17117);
var state_17165__$1 = (function (){var statearr_17215 = state_17165;
(statearr_17215[(7)] = inst_17131__$1);

return statearr_17215;
})();
if(inst_17131__$1){
var statearr_17216_18026 = state_17165__$1;
(statearr_17216_18026[(1)] = (14));

} else {
var statearr_17218_18027 = state_17165__$1;
(statearr_17218_18027[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (9))){
var inst_17153 = (state_17165[(2)]);
var inst_17154 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17165__$1 = (function (){var statearr_17222 = state_17165;
(statearr_17222[(15)] = inst_17153);

return statearr_17222;
})();
if(cljs.core.truth_(inst_17154)){
var statearr_17225_18031 = state_17165__$1;
(statearr_17225_18031[(1)] = (21));

} else {
var statearr_17226_18032 = state_17165__$1;
(statearr_17226_18032[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (5))){
var inst_17109 = cljs.core.async.close_BANG_(out);
var state_17165__$1 = state_17165;
var statearr_17227_18033 = state_17165__$1;
(statearr_17227_18033[(2)] = inst_17109);

(statearr_17227_18033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (14))){
var inst_17131 = (state_17165[(7)]);
var inst_17133 = cljs.core.chunked_seq_QMARK_(inst_17131);
var state_17165__$1 = state_17165;
if(inst_17133){
var statearr_17229_18034 = state_17165__$1;
(statearr_17229_18034[(1)] = (17));

} else {
var statearr_17230_18035 = state_17165__$1;
(statearr_17230_18035[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (16))){
var inst_17149 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17235_18036 = state_17165__$1;
(statearr_17235_18036[(2)] = inst_17149);

(statearr_17235_18036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (10))){
var inst_17120 = (state_17165[(8)]);
var inst_17118 = (state_17165[(11)]);
var inst_17125 = cljs.core._nth(inst_17118,inst_17120);
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17165__$1,(13),out,inst_17125);
} else {
if((state_val_17166 === (18))){
var inst_17131 = (state_17165[(7)]);
var inst_17140 = cljs.core.first(inst_17131);
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17165__$1,(20),out,inst_17140);
} else {
if((state_val_17166 === (8))){
var inst_17120 = (state_17165[(8)]);
var inst_17119 = (state_17165[(10)]);
var inst_17122 = (inst_17120 < inst_17119);
var inst_17123 = inst_17122;
var state_17165__$1 = state_17165;
if(cljs.core.truth_(inst_17123)){
var statearr_17241_18037 = state_17165__$1;
(statearr_17241_18037[(1)] = (10));

} else {
var statearr_17242_18038 = state_17165__$1;
(statearr_17242_18038[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__15553__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15553__auto____0 = (function (){
var statearr_17245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17245[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15553__auto__);

(statearr_17245[(1)] = (1));

return statearr_17245;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15553__auto____1 = (function (state_17165){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_17165);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e17249){var ex__15556__auto__ = e17249;
var statearr_17250_18039 = state_17165;
(statearr_17250_18039[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_17165[(4)]))){
var statearr_17251_18040 = state_17165;
(statearr_17251_18040[(1)] = cljs.core.first((state_17165[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18041 = state_17165;
state_17165 = G__18041;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15553__auto__ = function(state_17165){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15553__auto____1.call(this,state_17165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15553__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15553__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_17252 = f__15714__auto__();
(statearr_17252[(6)] = c__15713__auto__);

return statearr_17252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));

return c__15713__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17255 = arguments.length;
switch (G__17255) {
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
var G__17266 = arguments.length;
switch (G__17266) {
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
var G__17268 = arguments.length;
switch (G__17268) {
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
var c__15713__auto___18046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_17292){
var state_val_17293 = (state_17292[(1)]);
if((state_val_17293 === (7))){
var inst_17287 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17294_18047 = state_17292__$1;
(statearr_17294_18047[(2)] = inst_17287);

(statearr_17294_18047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (1))){
var inst_17269 = null;
var state_17292__$1 = (function (){var statearr_17295 = state_17292;
(statearr_17295[(7)] = inst_17269);

return statearr_17295;
})();
var statearr_17296_18048 = state_17292__$1;
(statearr_17296_18048[(2)] = null);

(statearr_17296_18048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (4))){
var inst_17272 = (state_17292[(8)]);
var inst_17272__$1 = (state_17292[(2)]);
var inst_17273 = (inst_17272__$1 == null);
var inst_17274 = cljs.core.not(inst_17273);
var state_17292__$1 = (function (){var statearr_17297 = state_17292;
(statearr_17297[(8)] = inst_17272__$1);

return statearr_17297;
})();
if(inst_17274){
var statearr_17298_18049 = state_17292__$1;
(statearr_17298_18049[(1)] = (5));

} else {
var statearr_17299_18050 = state_17292__$1;
(statearr_17299_18050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (6))){
var state_17292__$1 = state_17292;
var statearr_17300_18051 = state_17292__$1;
(statearr_17300_18051[(2)] = null);

(statearr_17300_18051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (3))){
var inst_17289 = (state_17292[(2)]);
var inst_17290 = cljs.core.async.close_BANG_(out);
var state_17292__$1 = (function (){var statearr_17301 = state_17292;
(statearr_17301[(9)] = inst_17289);

return statearr_17301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17292__$1,inst_17290);
} else {
if((state_val_17293 === (2))){
var state_17292__$1 = state_17292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17292__$1,(4),ch);
} else {
if((state_val_17293 === (11))){
var inst_17272 = (state_17292[(8)]);
var inst_17281 = (state_17292[(2)]);
var inst_17269 = inst_17272;
var state_17292__$1 = (function (){var statearr_17303 = state_17292;
(statearr_17303[(10)] = inst_17281);

(statearr_17303[(7)] = inst_17269);

return statearr_17303;
})();
var statearr_17307_18057 = state_17292__$1;
(statearr_17307_18057[(2)] = null);

(statearr_17307_18057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (9))){
var inst_17272 = (state_17292[(8)]);
var state_17292__$1 = state_17292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17292__$1,(11),out,inst_17272);
} else {
if((state_val_17293 === (5))){
var inst_17272 = (state_17292[(8)]);
var inst_17269 = (state_17292[(7)]);
var inst_17276 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17272,inst_17269);
var state_17292__$1 = state_17292;
if(inst_17276){
var statearr_17309_18058 = state_17292__$1;
(statearr_17309_18058[(1)] = (8));

} else {
var statearr_17311_18059 = state_17292__$1;
(statearr_17311_18059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (10))){
var inst_17284 = (state_17292[(2)]);
var state_17292__$1 = state_17292;
var statearr_17312_18060 = state_17292__$1;
(statearr_17312_18060[(2)] = inst_17284);

(statearr_17312_18060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17293 === (8))){
var inst_17269 = (state_17292[(7)]);
var tmp17308 = inst_17269;
var inst_17269__$1 = tmp17308;
var state_17292__$1 = (function (){var statearr_17313 = state_17292;
(statearr_17313[(7)] = inst_17269__$1);

return statearr_17313;
})();
var statearr_17315_18061 = state_17292__$1;
(statearr_17315_18061[(2)] = null);

(statearr_17315_18061[(1)] = (2));


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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_17317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17317[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_17317[(1)] = (1));

return statearr_17317;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_17292){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_17292);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e17318){var ex__15556__auto__ = e17318;
var statearr_17319_18063 = state_17292;
(statearr_17319_18063[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_17292[(4)]))){
var statearr_17320_18064 = state_17292;
(statearr_17320_18064[(1)] = cljs.core.first((state_17292[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18066 = state_17292;
state_17292 = G__18066;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_17292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_17292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_17321 = f__15714__auto__();
(statearr_17321[(6)] = c__15713__auto___18046);

return statearr_17321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17324 = arguments.length;
switch (G__17324) {
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
var c__15713__auto___18071 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_17365){
var state_val_17366 = (state_17365[(1)]);
if((state_val_17366 === (7))){
var inst_17361 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
var statearr_17367_18072 = state_17365__$1;
(statearr_17367_18072[(2)] = inst_17361);

(statearr_17367_18072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (1))){
var inst_17328 = (new Array(n));
var inst_17329 = inst_17328;
var inst_17330 = (0);
var state_17365__$1 = (function (){var statearr_17368 = state_17365;
(statearr_17368[(7)] = inst_17329);

(statearr_17368[(8)] = inst_17330);

return statearr_17368;
})();
var statearr_17369_18073 = state_17365__$1;
(statearr_17369_18073[(2)] = null);

(statearr_17369_18073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (4))){
var inst_17333 = (state_17365[(9)]);
var inst_17333__$1 = (state_17365[(2)]);
var inst_17334 = (inst_17333__$1 == null);
var inst_17335 = cljs.core.not(inst_17334);
var state_17365__$1 = (function (){var statearr_17370 = state_17365;
(statearr_17370[(9)] = inst_17333__$1);

return statearr_17370;
})();
if(inst_17335){
var statearr_17371_18074 = state_17365__$1;
(statearr_17371_18074[(1)] = (5));

} else {
var statearr_17372_18075 = state_17365__$1;
(statearr_17372_18075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (15))){
var inst_17355 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
var statearr_17373_18076 = state_17365__$1;
(statearr_17373_18076[(2)] = inst_17355);

(statearr_17373_18076[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (13))){
var state_17365__$1 = state_17365;
var statearr_17374_18077 = state_17365__$1;
(statearr_17374_18077[(2)] = null);

(statearr_17374_18077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (6))){
var inst_17330 = (state_17365[(8)]);
var inst_17351 = (inst_17330 > (0));
var state_17365__$1 = state_17365;
if(cljs.core.truth_(inst_17351)){
var statearr_17375_18078 = state_17365__$1;
(statearr_17375_18078[(1)] = (12));

} else {
var statearr_17376_18079 = state_17365__$1;
(statearr_17376_18079[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (3))){
var inst_17363 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17365__$1,inst_17363);
} else {
if((state_val_17366 === (12))){
var inst_17329 = (state_17365[(7)]);
var inst_17353 = cljs.core.vec(inst_17329);
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17365__$1,(15),out,inst_17353);
} else {
if((state_val_17366 === (2))){
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17365__$1,(4),ch);
} else {
if((state_val_17366 === (11))){
var inst_17345 = (state_17365[(2)]);
var inst_17346 = (new Array(n));
var inst_17329 = inst_17346;
var inst_17330 = (0);
var state_17365__$1 = (function (){var statearr_17377 = state_17365;
(statearr_17377[(7)] = inst_17329);

(statearr_17377[(10)] = inst_17345);

(statearr_17377[(8)] = inst_17330);

return statearr_17377;
})();
var statearr_17378_18080 = state_17365__$1;
(statearr_17378_18080[(2)] = null);

(statearr_17378_18080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (9))){
var inst_17329 = (state_17365[(7)]);
var inst_17343 = cljs.core.vec(inst_17329);
var state_17365__$1 = state_17365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17365__$1,(11),out,inst_17343);
} else {
if((state_val_17366 === (5))){
var inst_17329 = (state_17365[(7)]);
var inst_17338 = (state_17365[(11)]);
var inst_17333 = (state_17365[(9)]);
var inst_17330 = (state_17365[(8)]);
var inst_17337 = (inst_17329[inst_17330] = inst_17333);
var inst_17338__$1 = (inst_17330 + (1));
var inst_17339 = (inst_17338__$1 < n);
var state_17365__$1 = (function (){var statearr_17379 = state_17365;
(statearr_17379[(11)] = inst_17338__$1);

(statearr_17379[(12)] = inst_17337);

return statearr_17379;
})();
if(cljs.core.truth_(inst_17339)){
var statearr_17380_18081 = state_17365__$1;
(statearr_17380_18081[(1)] = (8));

} else {
var statearr_17381_18082 = state_17365__$1;
(statearr_17381_18082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (14))){
var inst_17358 = (state_17365[(2)]);
var inst_17359 = cljs.core.async.close_BANG_(out);
var state_17365__$1 = (function (){var statearr_17383 = state_17365;
(statearr_17383[(13)] = inst_17358);

return statearr_17383;
})();
var statearr_17384_18083 = state_17365__$1;
(statearr_17384_18083[(2)] = inst_17359);

(statearr_17384_18083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (10))){
var inst_17349 = (state_17365[(2)]);
var state_17365__$1 = state_17365;
var statearr_17385_18084 = state_17365__$1;
(statearr_17385_18084[(2)] = inst_17349);

(statearr_17385_18084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17366 === (8))){
var inst_17329 = (state_17365[(7)]);
var inst_17338 = (state_17365[(11)]);
var tmp17382 = inst_17329;
var inst_17329__$1 = tmp17382;
var inst_17330 = inst_17338;
var state_17365__$1 = (function (){var statearr_17386 = state_17365;
(statearr_17386[(7)] = inst_17329__$1);

(statearr_17386[(8)] = inst_17330);

return statearr_17386;
})();
var statearr_17387_18085 = state_17365__$1;
(statearr_17387_18085[(2)] = null);

(statearr_17387_18085[(1)] = (2));


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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_17388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17388[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_17388[(1)] = (1));

return statearr_17388;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_17365){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_17365);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e17389){var ex__15556__auto__ = e17389;
var statearr_17390_18086 = state_17365;
(statearr_17390_18086[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_17365[(4)]))){
var statearr_17391_18087 = state_17365;
(statearr_17391_18087[(1)] = cljs.core.first((state_17365[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18088 = state_17365;
state_17365 = G__18088;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_17365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_17365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_17392 = f__15714__auto__();
(statearr_17392[(6)] = c__15713__auto___18071);

return statearr_17392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17394 = arguments.length;
switch (G__17394) {
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
var c__15713__auto___18091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15714__auto__ = (function (){var switch__15552__auto__ = (function (state_17439){
var state_val_17440 = (state_17439[(1)]);
if((state_val_17440 === (7))){
var inst_17435 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
var statearr_17441_18092 = state_17439__$1;
(statearr_17441_18092[(2)] = inst_17435);

(statearr_17441_18092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (1))){
var inst_17395 = [];
var inst_17396 = inst_17395;
var inst_17397 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17439__$1 = (function (){var statearr_17442 = state_17439;
(statearr_17442[(7)] = inst_17397);

(statearr_17442[(8)] = inst_17396);

return statearr_17442;
})();
var statearr_17443_18096 = state_17439__$1;
(statearr_17443_18096[(2)] = null);

(statearr_17443_18096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (4))){
var inst_17400 = (state_17439[(9)]);
var inst_17400__$1 = (state_17439[(2)]);
var inst_17401 = (inst_17400__$1 == null);
var inst_17402 = cljs.core.not(inst_17401);
var state_17439__$1 = (function (){var statearr_17444 = state_17439;
(statearr_17444[(9)] = inst_17400__$1);

return statearr_17444;
})();
if(inst_17402){
var statearr_17445_18097 = state_17439__$1;
(statearr_17445_18097[(1)] = (5));

} else {
var statearr_17446_18098 = state_17439__$1;
(statearr_17446_18098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (15))){
var inst_17396 = (state_17439[(8)]);
var inst_17427 = cljs.core.vec(inst_17396);
var state_17439__$1 = state_17439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17439__$1,(18),out,inst_17427);
} else {
if((state_val_17440 === (13))){
var inst_17422 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
var statearr_17447_18099 = state_17439__$1;
(statearr_17447_18099[(2)] = inst_17422);

(statearr_17447_18099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (6))){
var inst_17396 = (state_17439[(8)]);
var inst_17424 = inst_17396.length;
var inst_17425 = (inst_17424 > (0));
var state_17439__$1 = state_17439;
if(cljs.core.truth_(inst_17425)){
var statearr_17448_18100 = state_17439__$1;
(statearr_17448_18100[(1)] = (15));

} else {
var statearr_17449_18101 = state_17439__$1;
(statearr_17449_18101[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (17))){
var inst_17432 = (state_17439[(2)]);
var inst_17433 = cljs.core.async.close_BANG_(out);
var state_17439__$1 = (function (){var statearr_17450 = state_17439;
(statearr_17450[(10)] = inst_17432);

return statearr_17450;
})();
var statearr_17451_18102 = state_17439__$1;
(statearr_17451_18102[(2)] = inst_17433);

(statearr_17451_18102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (3))){
var inst_17437 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17439__$1,inst_17437);
} else {
if((state_val_17440 === (12))){
var inst_17396 = (state_17439[(8)]);
var inst_17415 = cljs.core.vec(inst_17396);
var state_17439__$1 = state_17439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17439__$1,(14),out,inst_17415);
} else {
if((state_val_17440 === (2))){
var state_17439__$1 = state_17439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17439__$1,(4),ch);
} else {
if((state_val_17440 === (11))){
var inst_17404 = (state_17439[(11)]);
var inst_17400 = (state_17439[(9)]);
var inst_17396 = (state_17439[(8)]);
var inst_17412 = inst_17396.push(inst_17400);
var tmp17452 = inst_17396;
var inst_17396__$1 = tmp17452;
var inst_17397 = inst_17404;
var state_17439__$1 = (function (){var statearr_17453 = state_17439;
(statearr_17453[(7)] = inst_17397);

(statearr_17453[(12)] = inst_17412);

(statearr_17453[(8)] = inst_17396__$1);

return statearr_17453;
})();
var statearr_17454_18103 = state_17439__$1;
(statearr_17454_18103[(2)] = null);

(statearr_17454_18103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (9))){
var inst_17397 = (state_17439[(7)]);
var inst_17408 = cljs.core.keyword_identical_QMARK_(inst_17397,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17439__$1 = state_17439;
var statearr_17455_18104 = state_17439__$1;
(statearr_17455_18104[(2)] = inst_17408);

(statearr_17455_18104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (5))){
var inst_17397 = (state_17439[(7)]);
var inst_17404 = (state_17439[(11)]);
var inst_17400 = (state_17439[(9)]);
var inst_17405 = (state_17439[(13)]);
var inst_17404__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17400) : f.call(null,inst_17400));
var inst_17405__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17404__$1,inst_17397);
var state_17439__$1 = (function (){var statearr_17456 = state_17439;
(statearr_17456[(11)] = inst_17404__$1);

(statearr_17456[(13)] = inst_17405__$1);

return statearr_17456;
})();
if(inst_17405__$1){
var statearr_17457_18106 = state_17439__$1;
(statearr_17457_18106[(1)] = (8));

} else {
var statearr_17458_18107 = state_17439__$1;
(statearr_17458_18107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (14))){
var inst_17404 = (state_17439[(11)]);
var inst_17400 = (state_17439[(9)]);
var inst_17417 = (state_17439[(2)]);
var inst_17418 = [];
var inst_17419 = inst_17418.push(inst_17400);
var inst_17396 = inst_17418;
var inst_17397 = inst_17404;
var state_17439__$1 = (function (){var statearr_17459 = state_17439;
(statearr_17459[(7)] = inst_17397);

(statearr_17459[(14)] = inst_17417);

(statearr_17459[(15)] = inst_17419);

(statearr_17459[(8)] = inst_17396);

return statearr_17459;
})();
var statearr_17460_18108 = state_17439__$1;
(statearr_17460_18108[(2)] = null);

(statearr_17460_18108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (16))){
var state_17439__$1 = state_17439;
var statearr_17461_18109 = state_17439__$1;
(statearr_17461_18109[(2)] = null);

(statearr_17461_18109[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (10))){
var inst_17410 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
if(cljs.core.truth_(inst_17410)){
var statearr_17462_18110 = state_17439__$1;
(statearr_17462_18110[(1)] = (11));

} else {
var statearr_17463_18111 = state_17439__$1;
(statearr_17463_18111[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (18))){
var inst_17429 = (state_17439[(2)]);
var state_17439__$1 = state_17439;
var statearr_17464_18112 = state_17439__$1;
(statearr_17464_18112[(2)] = inst_17429);

(statearr_17464_18112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17440 === (8))){
var inst_17405 = (state_17439[(13)]);
var state_17439__$1 = state_17439;
var statearr_17465_18113 = state_17439__$1;
(statearr_17465_18113[(2)] = inst_17405);

(statearr_17465_18113[(1)] = (10));


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
var cljs$core$async$state_machine__15553__auto__ = null;
var cljs$core$async$state_machine__15553__auto____0 = (function (){
var statearr_17466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17466[(0)] = cljs$core$async$state_machine__15553__auto__);

(statearr_17466[(1)] = (1));

return statearr_17466;
});
var cljs$core$async$state_machine__15553__auto____1 = (function (state_17439){
while(true){
var ret_value__15554__auto__ = (function (){try{while(true){
var result__15555__auto__ = switch__15552__auto__(state_17439);
if(cljs.core.keyword_identical_QMARK_(result__15555__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15555__auto__;
}
break;
}
}catch (e17467){var ex__15556__auto__ = e17467;
var statearr_17468_18114 = state_17439;
(statearr_17468_18114[(2)] = ex__15556__auto__);


if(cljs.core.seq((state_17439[(4)]))){
var statearr_17469_18115 = state_17439;
(statearr_17469_18115[(1)] = cljs.core.first((state_17439[(4)])));

} else {
throw ex__15556__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18116 = state_17439;
state_17439 = G__18116;
continue;
} else {
return ret_value__15554__auto__;
}
break;
}
});
cljs$core$async$state_machine__15553__auto__ = function(state_17439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15553__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15553__auto____1.call(this,state_17439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15553__auto____0;
cljs$core$async$state_machine__15553__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15553__auto____1;
return cljs$core$async$state_machine__15553__auto__;
})()
})();
var state__15715__auto__ = (function (){var statearr_17470 = f__15714__auto__();
(statearr_17470[(6)] = c__15713__auto___18091);

return statearr_17470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15715__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
