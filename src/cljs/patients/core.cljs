(ns patients.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [ajax.core :as ajax]))

(defonce patient-state (r/atom nil))

(defn header []
  [:header.main-header
   [:h1 "Patients"]
   [:hr]])

(defn patient-list []
  (ajax/GET "http://localhost:4000/api/patients/"
            {:handler (fn [resp]
                        (reset! patient-state resp))})
  [:ul
   (for [patient @patient-state]
     [:li {:key (:id patient)}
      [:p (:first_name patient)]])])

(defn app []
  [:<>
   [header]
   [:div.main-container
    [patient-list]]])

(defn ^:export ^:dev/after-load run []
  (rdom/render [app] (js/document.getElementById "root")))
