goog.provide('patients.core');
patients.core.app = (function patients$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients.components.header.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients.components.main_container.main_container], null)], null);
});
patients.core.run = (function patients$core$run(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [patients.core.app], null),document.getElementById("root"));
});
goog.exportSymbol('patients.core.run', patients.core.run);

//# sourceMappingURL=patients.core.js.map
