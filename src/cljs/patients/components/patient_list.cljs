(ns patients.components.patient-list
  (:require [patients.components.patient :refer [patient-row]]))

(defn patient-list [patients]
  [:div {:class "w-1/4 block ml-2"}
   [:ul
    (for [patient @patients]
      [:li {:key (:id patient)}
       [patient-row patient]])]])
