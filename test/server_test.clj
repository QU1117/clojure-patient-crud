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

(deftest update-patient-test
  (is (= 200 (:status (-> (mock/request :patch "/api/patients/1")
                          (mock/json-body {:first_name "Lynn"
                                           :middle_name "Ann"
                                           :last_name "Conway"
                                           :gender "female"
                                           :date_of_birth "1938-01-02"
                                           :address "(517) 524-6494
                                           14180 Howard Rd
                                           Concord, Michigan(MI), 49237"
                                           :chi_number 6428269083928614})
                          app)))))

(deftest delete-contact-test
  (is (= 200 (:status (-> (mock/request :delete "/api/contacts/2")
                          app)))))

