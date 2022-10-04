(ns patients.components.main-container
  (:require [patients.components.patient-list :refer [patient-list]]))

(defn main-container [patients]
  [:div {:class "grid grid-cols-2 justify-items-center"}
   [patient-list patients]])
