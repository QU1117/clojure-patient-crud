(ns patients.core
  (:require [org.httpkit.server :as server]))

(def server-state (atom nil))

(def app
  (println "Hello world"))

(defn -main []
  (reset! server-state (server/run-server app {:port 4000})))
