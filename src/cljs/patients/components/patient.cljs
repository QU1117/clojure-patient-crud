(ns patients.components.patient
  (:require [patients.components.patient-detail :refer [modal-state
                                                        detailed-info-state]]))

(defn patient-row [patient]
  [:div {:class "grid
                 grid-cols-4
                 font-cinzel
                 gap-x-4
                 hover:border
                 border-black"
         :on-click (fn [patient]
                     ((reset! modal-state "block")
                      (reset! detailed-info-state patient)))}
   [:div {:class "flex flex-row-reverse"}
    (:id patient)]
   [:div (:first_name patient)]
   [:div (:middle_name patient)]
   [:div (:last_name patient)]])
