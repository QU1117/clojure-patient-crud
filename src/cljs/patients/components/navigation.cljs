(ns patients.components.navigation
  (:require [patients.components.main-container :refer [main-container-state]]
            [patients.components.patients-main-container :refer [patients-main-container]]
            [patients.components.patient-detail :refer [modal-state]]
            [patients.components.add-patient-form-container :refer [add-patient-form]]
            [patients.components.search-form-component :refer [search-form]]))

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
          :on-click #((reset! main-container-state add-patient-form)
                      (reset! modal-state "hidden"))}
    "Add new patient"]
   [:div {:class "text-xl
                  m-2
                  font-cinzel
                  hover:bg-black
                  hover:text-white
                  hover:cursor-pointer"
          :on-click #(reset! main-container-state search-form)}
    "Search"]])
