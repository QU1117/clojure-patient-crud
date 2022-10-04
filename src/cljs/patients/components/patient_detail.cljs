(ns patients.components.patient-detail
  (:require [reagent.core :as r]))

(def modal-state (r/atom "hidden"))
(def detailed-info-state (r/atom nil))

(defn patient-detail-modal []
  [:div {:class (str @modal-state " " "col-start-2 col-end-3 font-cinzel")}
   [:p "Hello world!"]
   [:div {:on-click #(reset! modal-state "hidden")}
    "[Close]"]])
