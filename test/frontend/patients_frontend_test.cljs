(ns patients-frontend-test
  (:require [cljs.test :refer [deftest
                               testing
                               is
                               use-fixtures]]
            ["@testing-library/react" :as rtl]
            [reagent.core :as r]
            [patients.core :refer [app]]))

(use-fixtures :each
  {:after rtl/cleanup})

(deftest test-add-new-patient-form
  (testing "Form for adding new patient should be visible after click"
    (-> (r/as-element [app])
        (rtl/render)
        (.getByText "add new patient" #js { "exact" false })
        (rtl/fireEvent.click))

    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#add-patient-form")))))))
