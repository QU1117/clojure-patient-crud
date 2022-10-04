(ns patients.components.patient-list
  (:require [patients.components.patient :refer [patient-row]]))

(defn patient-list [patients]
  [:div {:class "col-start-1 col-end-2"}
   [:ul
    (for [patient @patients]
      [:li {:key (:id patient)}
       [patient-row patient]])]])
