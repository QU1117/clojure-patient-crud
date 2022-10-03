(ns patients.core
  (:require [reagent.dom :as rdom]
            [patients.components.header :refer [header]]))

(defn app []
  [:<>
   [header]])

(defn ^:export ^:dev/after-load run []
  (rdom/render [app] (js/document.getElementById "root")))
