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

;; this is where the edge of sanity ends
;; I've decided to dissect the logic of sewing together SQL query from initial
;; input map into separate functions. It also makes them easier to test in REPL.

(defn- sql-search-values
  "Returns vector with values from initial argument map based on their presence"

  [map]
  (cond->
      []
    (seq (:first_name map))
    (conj (:first_name map))
    
    (seq (:middle_name map))
    (conj (:middle_name map))
    
    (seq (:last_name map))
    (conj (:last_name map))
    
    (seq (:gender map))
    (conj (:gender map))
    
    (seq (:date_of_birth map))
    (conj (:date_of_birth map))
    
    (seq (:address map))
    (conj (:address map)) 
    
    (= 16 (count (:chi_number map)))
    (conj (:chi_number map))))

(defn- sql-search-parts
  "Returns vector with SQL query parts based on their presence in argument map"

  [map]
  (cond->
      []
    (true? true)
    (conj "SELECT * FROM patients WHERE")
    
    (seq (:first_name map))
    (conj " first_name ILIKE ? ")

    (seq (:middle_name map))
    (conj "middle_name ILIKE ? ")

    (seq (:last_name map))
    (conj "last_name ILIKE ? ")

    (seq (:gender map))
    (conj "gender ILIKE ? ")

    (seq (:date_of_birth map))
    (conj "date_of_birth::text LIKE ? ")

    (seq (:address map))
    (conj "address ILIKE ? ")

    (= 16 (count (:chi_number map)))
    (conj "chi_number::text ILIKE ? ")

    (true? true)
    (conj ";")))

(defn- sql-add-end
  "For some reason map fn doesn't work with subvec fn value if map fn doesn't
  stated somewhere outside"
  
  [sql-args]
  (map #(str " AND " %) sql-args))

(defn- sql-prepared-query
  "Initial search query is always comprised of 3 parts: it's a
  'select * from where' part, then the 'search' (example: 'first_name ILIKE ? ')
  part, then the semicolon. Anything longer than that needs AND operator in
  between 'search' parts. This fn subvecs those columns from initial vector and
  adds AND to them if there's more than 3 parts, then returns the whole
  statement. Returns query as is otherwise."
  
  [query-parts]
  (if (> (count query-parts) 3)
    (apply str
           (conj
            (into [(first query-parts) (second query-parts)]
                  (vec (sql-add-end (subvec query-parts 2 (-> (count query-parts)
                                                              (- 1))))))
            (last query-parts)))
    (reduce str query-parts)))

(defn search-records
  "Dissect argument map with search values into separate parts and smash them
  together into query with statement and values."

  [map]
  (let [query-parts (sql-search-parts map)
        query (sql-prepared-query query-parts)
        values (sql-search-values map)]
    (into [] cat [[query] values])))
