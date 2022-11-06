(ns patients.components.patient-list
  (:require [ajax.core :as ajax]
            [reagent.core :as r]
            [patients.components.patient-row :refer [patient-row]]
            [patients.components.filter :refer [filter-box
                                                gender-filter-checks]]
            [clojure.string :as cljstr]))

(defn patient-list []
  (let [patient-list-state (r/atom nil)]
    (fn []
      (ajax/GET "http://localhost:4000/api/patients/"
                {:handler (fn [resp]
                            (reset! patient-list-state resp))})
      [:div {:class "col-start-1 col-end-2"}
       [:div {:class "flex"}
        
        [filter-box]

        (if (empty? @gender-filter-checks)
          [:ul
           (for [patient @patient-list-state]
             [:li {:key (:id patient)
                   :class "hover:cursor-pointer"}
              [patient-row patient]])]
          
          [:ul
           (doall (for [patient @patient-list-state
                        :when (boolean
                               (some #{(cljstr/lower-case (:gender patient))}
                                     @gender-filter-checks))]
                    [:li {:key (:id patient)
                          :class "hover:cursor-pointer"}
                     [patient-row patient]]))])]])))
