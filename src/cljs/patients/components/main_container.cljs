(ns patients.components.main-container
  (:require [patients.components.patient :refer [patient-row]]))

(defn patient-list [patients]
  [:ul
   (for [patient @patients]
     [:li {:key (:id patient)}
      [patient-row patient]])])

(defn main-container [patients]
  [:div
   [patient-list patients]])
