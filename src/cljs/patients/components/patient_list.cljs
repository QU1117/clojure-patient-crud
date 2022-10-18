(ns patients.components.patient-list
  (:require [ajax.core :as ajax]
            [reagent.core :as r]
            [patients.components.patient-row :refer [patient-row]]))

(defn patient-list []
  (let [patient-list-state (r/atom nil)]
    (fn []
      (ajax/GET "http://localhost:4000/api/patients/"
                {:handler (fn [resp]
                            (reset! patient-list-state resp))})
      [:div {:class "col-start-1 col-end-2"}
       [:ul
        (for [patient @patient-list-state]
          [:li {:key (:id patient)
                :class "hover:cursor-pointer"}
           [patient-row patient]])]])))
