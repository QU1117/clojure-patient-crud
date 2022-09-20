(ns patients.handlers
  (:require [patients.db :as db]))

(defn get-patients [_]
  {:status 200
   :body (db/read-all-records db/ds)})

(defn create-patient
  [{:keys [parameters]}]
  (let [data (:body parameters)
        created-resource (db/create-record data)]
    {:status 201
     :body created-resource}))
