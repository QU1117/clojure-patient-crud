goog.provide('patients.components.patient_list');
if((typeof patients !== 'undefined') && (typeof patients.components !== 'undefined') && (typeof patients.components.patient_list !== 'undefined') && (typeof patients.components.patient_list.patient_list_state !== 'undefined')){
} else {
patients.components.patient_list.patient_list_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
patients.components.patient_list.get_patients = (function patients$components$patient_list$get_patients(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:4000/api/patients/",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (resp){
return cljs.core.reset_BANG_(patients.components.patient_list.patient_list_state,resp);
})], null)], 0));
});
patients.components.patient_list.get_patients();
patients.components.patient_list.patient_list = (function patients$components$patient_list$patient_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-start-1 col-end-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5523__auto__ = (function patients$components$patient_list$patient_list_$_iter__17020(s__17021){
return (new cljs.core.LazySeq(null,(function (){
var s__17021__$1 = s__17021;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17021__$1);
if(temp__5804__auto__){
var s__17021__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17021__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17021__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17023 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17022 = (0);
while(true){
if((i__17022 < size__5522__auto__)){
var patient = cljs.core._nth(c__5521__auto__,i__17022);
cljs.core.chunk_append(b__17023,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.Keyword(null,"class","class",-2030961996),"hover:cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients.components.patient.patient_row,patient], null)], null));

var G__17024 = (i__17022 + (1));
i__17022 = G__17024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17023),patients$components$patient_list$patient_list_$_iter__17020(cljs.core.chunk_rest(s__17021__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17023),null);
}
} else {
var patient = cljs.core.first(s__17021__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(patient),new cljs.core.Keyword(null,"class","class",-2030961996),"hover:cursor-pointer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients.components.patient.patient_row,patient], null)], null),patients$components$patient_list$patient_list_$_iter__17020(cljs.core.rest(s__17021__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(patients.components.patient_list.patient_list_state));
})()], null)], null);
});

//# sourceMappingURL=patients.components.patient_list.js.map
