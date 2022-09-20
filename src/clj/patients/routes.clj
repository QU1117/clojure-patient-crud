(ns patients.routes
  (:require [patients.handlers :refer [get-patients]]))

(def patients-route
  ["/patients"
   ["/" {:get get-patients}]])
