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
                       (.container.querySelector "#add-patient-form"))))))

  (testing "Is first name input field exists?"
    (is (not (nil? (-> rtl/screen
                       (.getByRole "textbox"
                                   #js {"name" "First name:"}))))))

  (testing "Is middle name input field exists?"
    (is (not (nil? (-> rtl/screen
                       (.getByRole "textbox"
                                   #js {"name" "Middle name:"}))))))

  (testing "Is last name input field exists?"
    (is (not (nil? (-> rtl/screen
                       (.getByRole "textbox"
                                   #js {"name" "Last name:"}))))))

  (testing "Is gender select field exists?"
    (is (not (nil? (-> rtl/screen
                       (.getByRole "combobox"
                                   #js {"name" "Gender:"}))))))

  (testing "Is date of birth input exists?"
    (is (not (nil? (-> rtl/screen
                       (.getByLabelText "Date of birth:"))))))

  (testing "Is address input field exists?"
    (is (not (nil? (-> rtl/screen
                       (.getByRole "textbox" #js {"name" "Address:"}))))))

  (testing "Is CHI number input field exists?"
    (is (not (nil? (-> rtl/screen
                       (.getByRole "spinbutton"
                                   #js {"name" "CHI number:"}))))))

  (testing "Is submit form button exists?"
    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#submit-add-form")))))))
