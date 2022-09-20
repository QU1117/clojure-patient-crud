(ns server-test
  (:require [clojure.test :refer :all]
            [patients.core :refer [app]]
            [patients.db :refer [migration-config]]
            [ring.mock.request :as mock]
            [migratus.core :as migratus]))

(defn database-fixture
  [f]
  (try
    (migratus/up migration-config 20220917203508)
    (f)
    (finally (migratus/down migration-config 20220917203508))))

(use-fixtures :once database-fixture)

(deftest get-patients-test
  (is (= 200 (:status (app (mock/request :get "/api/patients/"))))))

(deftest patients-root-redirect-test
  (is (= 301 (:status (app (mock/request :get "/api/patients"))))))

(deftest create-patient-test
  (is (= 201 (:status (-> (mock/request :post "/api/patients/")
                          (mock/json-body {:first_name "Skeletor"
                                           :middle_name "Magus"
                                           :last_name "Omnibus"
                                           :gender "male"
                                           :date_of_birth "1992-02-21"
                                           :address "Eternia, Snake Mountain"
                                           :chi_number 9876543210987654})
                          app)))))
