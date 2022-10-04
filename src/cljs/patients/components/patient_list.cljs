(ns patients.components.patient-list
  (:require [patients.components.patient :refer [patient-row]]))

(defn patient-list [patients]
  [:div
   [:ul
    (for [patient @patients]
      [:li {:key (:id patient)}
       [patient-row patient]])]])
