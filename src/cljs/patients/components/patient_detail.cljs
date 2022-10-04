(ns patients.components.patient-detail
  (:require [reagent.core :as r]))

(def modal-state (r/atom "hidden"))
(def detailed-info-state (r/atom nil))

(defn patient-detail-modal []
  [:div {:class @modal-state}])
