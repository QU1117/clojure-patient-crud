(ns patients.components.patient-list
  (:require [ajax.core :as ajax]
            [reagent.core :as r]
            [patients.components.patient-row :refer [patient-row]]
            [patients.components.filter :refer [filter-box
                                                gender-filter-checks]]
            [clojure.string :as cljstr]))

(def patient-list-state (r/atom nil))
(def search-state (r/atom nil))

(defn patient-list []
  (when (nil? @search-state)
    (ajax/GET "http://localhost:4000/api/patients/"
              {:handler (fn [resp]
                          (reset! patient-list-state resp))}))

  [:div {:class "col-start-1 col-end-2"}
   [:div {:class "flex"}
    [:div {:class "flex-col"}
     
     [filter-box]

     (when-not (nil? @search-state)
       [:div {:class "font-cinzel border border-black m-2 hover:bg-black
                      hover:text-white p-2 text-xl hover:cursor-pointer"
              :on-click #(reset! search-state nil)}
        "Reset search"])]
    
    [:div
     [:div
      [:p {:class "text-center font-cinzel text-xl mb-2"}
       (if (nil? @search-state)
         "Patients list"
         "Search results")]
      [:hr
       {:class
        "border-0 h-px bg-gradient-to-r from-transparent via-black mb-4"}]]
     
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
                  [patient-row patient]]))])]]])
