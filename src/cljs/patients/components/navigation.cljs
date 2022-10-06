(ns patients.components.navigation
  (:require [patients.components.main-container :refer [main-container-state]]
            [patients.components.patient-list :refer [patient-list]]
            [patients.components.add-new-patient-form :refer [add-new-patient]]))

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
          :on-click #(reset! main-container-state patient-list)}
    "Show all patients"]
   [:div {:class "text-xl
                 m-2
                 font-cinzel
                 hover:bg-black
                 hover:text-white
                 hover:cursor-pointer"
          :on-click #(reset! main-container-state add-new-patient)}
    "Add new patient"]])
