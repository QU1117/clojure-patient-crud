(ns patients.db
  (:require [next.jdbc :as jdbc]
            [next.jdbc.sql :as sql]
            [next.jdbc.result-set :as rs]
            [next.jdbc.types :as types]
            [aero.core :refer [read-config]]))

(def migration-config
  {:migration-dir "./resources/migrations/"
   :store :database
   :db {:datasource
        (jdbc/get-datasource
         (read-config "./resources/env/db/datasource.edn"))}})

(def ds (jdbc/get-datasource
         (read-config "./resources/env/db/datasource.edn")))

(defn create-record
  [{:keys [first_name
           middle_name
           last_name
           gender
           date_of_birth
           address
           chi_number]}]
  (sql/insert! ds
               :patients {:first_name first_name
                          :middle_name middle_name
                          :last_name last_name
                          :gender gender
                          :date_of_birth (types/as-date date_of_birth)
                          :address address
                          :chi_number chi_number}
               {:builder-fn rs/as-unqualified-maps}))

(defn read-all-records [_]
  (jdbc/execute! ds ["SELECT * FROM patients"]
                 {:builder-fn rs/as-unqualified-maps}))

(defn update-record-by-id
  [{:keys [id
           first_name
           middle_name
           last_name
           gender
           date_of_birth
           address
           chi_number]}]
  (sql/update! ds
               :patients {:first_name first_name
                          :middle_name middle_name
                          :last_name last_name
                          :gender gender
                          :date_of_birth (types/as-date date_of_birth)
                          :address address
                          :chi_number chi_number}
               {:id id}))

(defn read-record-by-id [id]
  (sql/get-by-id ds
                 :patients
                 id
                 {:builder-fn rs/as-unqualified-maps}))

(defn delete-record-by-id [id]
  (sql/delete! ds :patients {:id id}))