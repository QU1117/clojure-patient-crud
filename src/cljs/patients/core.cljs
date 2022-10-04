(ns patients.core
  (:require [reagent.dom :as rdom]
            [patients.components.header :refer [header]]
            [patients.components.main-container :refer [main-container]]
            [ajax.core :as ajax]
            [reagent.core :as r]))

(defonce patients-state (r/atom nil))

(defn get-patients []
  (ajax/GET "http://localhost:4000/api/patients/"
            {:handler (fn [resp]
                        (reset! patients-state resp))}))

(get-patients)

(defn app []
  [:<>
   [header]
   [main-container patients-state]])

(defn ^:export ^:dev/after-load run []
  (rdom/render [app] (js/document.getElementById "root")))
