(ns server-test
  (:require [clojure.test :refer :all]
            [patients.core :refer [app]]
            [ring.mock.request :as mock]))

(deftest get-patients-test
  (is (= 200 (:status (app (mock/request :get "/patients/"))))))

(deftest patients-root-redirect-test
  (is (= 301 (:status (app (mock/request :get "/patients"))))))
