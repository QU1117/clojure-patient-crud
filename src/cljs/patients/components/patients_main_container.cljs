(ns patients.components.patients-main-container
  (:require [patients.components.patient-list :refer [patient-list]]
            [patients.components.patient-detail :refer [patient-detail-modal]]))

(defn patients-main-container []
  [:div {:class "grid grid-cols-2 justify-items-center"}
   [patient-list]
   [patient-detail-modal]])
