(ns patients.components.main-container
  (:require [patients.components.patient-detail :refer [patient-detail-modal]]
            [reagent.core :as r]))

(def main-container-state (r/atom nil))

(defn main-container []
  (when-not (nil? @main-container-state)
    [@main-container-state]))
