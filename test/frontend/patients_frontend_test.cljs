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

  (testing "Is input of type date (of birth) exists?"
    (is (=
         "date"
         (-> rtl/screen
             (.getByLabelText "Date of birth:")
             (.-type)))))

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

(deftest test-search-form
  (testing "Form for searching patients should be visible after click"
    (-> (r/as-element [app])
        (rtl/render)
        (.getByText "Search")
        (rtl/fireEvent.click))

    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#search-form"))))))

  (testing "Is first name input field present inside search form?"
    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#first-name"))))))

  (testing "Is first name input of type text?"
    (is (=
         "text"
         (-> rtl/screen
             (.getByLabelText "First name:")
             (.-type)))))

  (testing "Is middle name input field present inside search form?"
    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#middle-name"))))))

  (testing "Is middle name input of type text?"
    (is (=
         "text"
         (-> rtl/screen
             (.getByLabelText "Middle name:")
             (.-type)))))

  (testing "Is last name input field present inside search form?"
    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#last-name"))))))

  (testing "Is last name input of type text?"
    (is (=
         "text"
         (-> rtl/screen
             (.getByLabelText "Last name:")
             (.-type)))))

  (testing "Is gender select field present inside search form?"
    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#gender"))))))

  (testing "Is gender select field of type select?"
    (is (=
         "select-one"
         (-> rtl/screen
             (.getByLabelText "Gender:")
             (.-type)))))

  (testing "Is input of type date (of birth) present inside search form?"
    (is (=
         "date"
         (-> rtl/screen
             (.getByLabelText "Date of birth:")
             (.-type)))))

  (testing "Is address input field present inside search form?"
    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#address"))))))

  (testing "Is address input of type text?"
    (is (=
         "text"
         (-> rtl/screen
             (.getByLabelText "Address:")
             (.-type)))))

  (testing "Is CHI number input field present inside search form?"
    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#chi-number"))))))

  (testing "Is CHI number input of type number?"
    (is (=
         "number"
         (-> rtl/screen
             (.getByLabelText "CHI number:")
             (.-type)))))

  (testing "Is submit form button exists?"
    (is (not (nil? (-> (r/as-element [app])
                       (rtl/render)
                       (.container.querySelector "#submit-search-form")))))))
