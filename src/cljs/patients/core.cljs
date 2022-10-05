(ns patients.core
  (:require [reagent.dom :as rdom]
            [patients.components.header :refer [header]]
            [patients.components.main-container :refer [main-container]]))

(defn app []
  [:<>
   [header]
   [main-container]])

(defn ^:export ^:dev/after-load run []
  (rdom/render [app] (js/document.getElementById "root")))
