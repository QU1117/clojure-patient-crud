(ns patients.components.main-container
  (:require [reagent.core :as r]
            [ajax.core :as ajax]))

(defonce patient-state (r/atom nil))

(defn patient-list []
  (ajax/GET "http://localhost:4000/api/patients/"
            {:handler (fn [resp]
                        (reset! patient-state resp))})
  [:ul
   (for [patient @patient-state]
     [:li {:key (:id patient)}
      [:p (:first_name patient)]])])
