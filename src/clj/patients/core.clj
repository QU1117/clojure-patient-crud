(ns patients.core
  (:require [org.httpkit.server :as server]
            [reitit.ring :as ring]
            [reitit.ring.coercion :refer [coerce-request-middleware
                                          coerce-response-middleware
                                          coerce-exceptions-middleware]]
            [reitit.coercion]
            [reitit.coercion.schema :as r.coercion]
            [patients.routes :refer [patients-route]]
            [muuntaja.core :as m]
            [reitit.ring.middleware.muuntaja :refer [format-middleware]]
            [jumblerg.middleware.cors :refer [wrap-cors]]))

(def server-state (atom nil))

(def app
  (ring/ring-handler
   (ring/router
    [["/api" patients-route]]
    {:data
     {:coercion r.coercion/coercion
      :compile reitit.coercion/compile-request-coercers
      :muuntaja m/instance
      :middleware [[wrap-cors #"localhost:8081"]
                   format-middleware
                   coerce-request-middleware
                   coerce-response-middleware
                   coerce-exceptions-middleware]}})
   
   (ring/routes
    (ring/redirect-trailing-slash-handler)
    (ring/create-default-handler
     {:not-found (constantly {:status 404
                              :body "Route not found"})}))))

(defn -main []
  (reset! server-state (server/run-server app {:port 4000}))
  (println "Server running at http://localhost:4000"))

(defn stop-server [server]
  (when-not (nil? server)
    (@server :timeout 100)
    (reset! server nil)))

(defn restart-server []
  (stop-server server-state)
  (-main))
