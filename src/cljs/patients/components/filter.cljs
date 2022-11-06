(ns patients.components.filter
  (:require [reagent.core :as r]
            [patients.components.search-results-list
             :refer [results-main-container
                     results-state]]
            [patients.components.main-container :refer [main-container]]))

(def gender-filter-checks (r/atom (set [])))
(def unfiltered-list-state (r/atom nil))

(defn- checkbox-fn [value]
  (if (some (fn [gender] (= value gender))
            @gender-filter-checks)
    (swap! gender-filter-checks disj value)
    (swap! gender-filter-checks conj value)))

(defn filter-box []
  [:form {:class "font-cinzel border border-black flex-col p-2 m-2"}
   [:p {:class "text-xl p-2"} "Filter"]
   [:hr
    {:class "border-0 h-px bg-gradient-to-r from-transparent via-black mb-4"}]

   [:label {:for "male-chbx"} "Male"]
   [:input {:type "checkbox"
            :id "male-chbx"
            :on-click #(checkbox-fn "male")
            :class "m-2"}]

   [:br]
   
   [:label {:for "female-chbx"} "Female"]
   [:input {:type "checkbox"
            :id "female-chbx"
            :on-click #(checkbox-fn "female")
            :class "m-2"}]

   [:br]
   
   [:label {:for "other-gender-chbx"} "Other"]
   [:input {:type "checkbox"
            :id "other-gender-chbx"
            :on-click #(checkbox-fn "other")
            :class "m-2"}]])
