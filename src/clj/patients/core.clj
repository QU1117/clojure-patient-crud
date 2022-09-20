(ns patients.core
  (:require [org.httpkit.server :as server]
            [reitit.ring :as ring]
            [patients.routes :refer [patients-route]]))

(def server-state (atom nil))

(def app
  (ring/ring-handler
   (ring/router
    [["/api" patients-route]])
   (ring/routes
    (ring/redirect-trailing-slash-handler))))

(defn -main []
  (reset! server-state (server/run-server app {:port 4000})))

(defn stop-server [server]
  (when-not (nil? server)
    (@server :timeout 100)
    (reset! server nil)))

(defn restart-server []
  (stop-server server-state)
  (-main))
