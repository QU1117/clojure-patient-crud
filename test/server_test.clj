(ns server-test
  (:require [clojure.test :refer :all]
            [patients.core :refer [app]]
            [ring.mock.request :as mock]))

(deftest get-patients-test
  (is (= 200 (:status (app (mock/request :get "/patients/"))))))

(deftest patients-root-redirect-test
  (is (= 301 (:status (app (mock/request :get "/patients"))))))

(deftest create-patient-test
  (is (= 201 (:status (-> (mock/request :post "/patients/")
                          (mock/json-body {:first_name "Jack"
                                           :last_name "Reacher"
                                           :email "reacher@mail.com"})
                          app)))))
