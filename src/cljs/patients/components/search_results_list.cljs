(ns patients.components.search-results-list
  (:require [patients.components.patient-row :refer [patient-row]]
            [reagent.core :as r]
            [patients.components.patient-detail :refer [patient-detail-modal]]))

(def results-state (r/atom nil))

(defn results-list []
  [:div {:class "col-start-1 col-end-2"}
   [:ul
    (for [patient @results-state]
      [:li {:key (:id patient)
            :class "hover:cursor-pointer"}
       [patient-row patient]])]])

(defn results-main-container []
  [:div {:class "grid grid-cols-2 justify-items-center"}
   [results-list]
   [patient-detail-modal]])
