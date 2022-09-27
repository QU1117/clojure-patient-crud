(ns patients.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [ajax.core :as ajax]))

(def patient-state (atom nil))

(defn header []
  [:header
   [:h1 "Patients"]
   [:hr]])

(defn app []
  [header])

(defn ^:export run []
  (rdom/render [app] (js/document.getElementById "root")))
