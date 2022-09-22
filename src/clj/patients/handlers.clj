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

(defn update-patient-by-id
  [{:keys [parameters]}]
  (let [id (get-in parameters [:path :id])
        body (:body parameters)
        data (assoc body :id id)
        update-count (:next.jdbc/update-count
                      (db/update-record-by-id data))]
    (if (= update-count 0)
      {:status 404
       :body "Contact not found"}
      
      {:status 200
       :body data})))
