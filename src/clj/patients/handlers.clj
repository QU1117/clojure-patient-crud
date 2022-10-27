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

(defn delete-patient-record-by-id
  [{:keys [parameters]}]
  (let [id (get-in parameters [:path :id])
        deleted-patient (db/read-record-by-id id)]
    (if (empty? deleted-patient)
      {:status 404
       :body "Contact doesn't exist"}

      (do
        (db/delete-record-by-id id)
        {:status 200
         :body {:deleted true
                :contact deleted-patient}}))))

(defn get-patient-record-by-id
  [{:keys [parameters]}]
  (let [id (get-in parameters [:path :id])
        contact (db/read-record-by-id id)]
    (if (nil? contact)
        {:status 404
         :body "Contact not found"}

        {:status 200
         :body contact})))

(defn search-patients
  [{:keys [parameters]}]
  (let [body (:body parameters)
        search-keys (cond->
                        body
                      (empty? (:first_name body))
                      (dissoc body :first_name)
                      
                      (empty? (:middle_name body))
                      (dissoc body :middle_name)
                      
                      (empty? (:last_name body))
                      (dissoc body :last_name)
                      
                      (empty? (:gender body))
                      (dissoc body :gender)

                      (empty? (:date_of_birth body))
                      (dissoc body :date_of_birth)
                      
                      (empty? (:address body))
                      (dissoc body :address)
                      
                      (<= (:chi_number body) 0)
                      (dissoc body :chi_number))
        
        result (db/search-records search-keys)]
    
    (if (empty? result)
      {:status 404
       :body "No patients found"}

      {:status 200
       :body result})))
