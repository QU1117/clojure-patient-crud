(ns patients.components.navigation
  (:require [patients.components.main-container :refer [main-container-state]]
            [patients.components.patients-main-container :refer [patients-main-container]]
            [patients.components.add-new-patient-form :refer [add-new-patient]]
            [patients.components.patient-detail :refer [modal-state]]))

(defn nav []
  [:nav {:class "flex
                flex-initial
                flex-row"}
   [:div {:class "text-xl
                 m-2
                 font-cinzel
                 hover:bg-black
                 hover:text-white
                 hover:cursor-pointer"
          :on-click #(reset! main-container-state patients-main-container)}
    "Show all patients"]
   [:div {:class "text-xl
                 m-2
                 font-cinzel
                 hover:bg-black
                 hover:text-white
                 hover:cursor-pointer"
          :on-click #((reset! main-container-state add-new-patient)
                      (reset! modal-state "hidden"))}
    "Add new patient"]])
