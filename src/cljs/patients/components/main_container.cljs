(ns patients.components.main-container
  (:require [patients.components.patient-detail :refer [patient-detail-modal]]
            [reagent.core :as r]))

(def main-container-state (r/atom nil))

(defn main-container []
  [:div {:class "grid grid-cols-2 justify-items-center"}
   (when-not (nil? @main-container-state)
     [@main-container-state])
   [patient-detail-modal]])
