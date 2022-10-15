(ns patients.components.add-patient-form-container
  (:require [fork.reagent :as fork]))

(defn- validation [values]
  (let [first-name    (get values "first-name" "")
        middle-name   (get values "middle-name" "")
        last-name     (get values "last-name" "")
        gender        (get values "gender" "")
        date-of-birth (get values "date-of-birth" "")
        address       (get values "address" "")
        chi-number    (get values "chi-number" "")]
    (cond->
        {}
      (empty? first-name)
      (assoc "first-name" "First name field can't be empty")

      (empty? middle-name)
      (assoc "middle-name" "Middle name field can't be empty")

      (empty? last-name)
      (assoc "last-name" "Last name field can't be empty")

      (empty? gender)
      (assoc "gender" "Please specify patient's gender")

      (empty? date-of-birth)
      (assoc "date-of-birth" "Please specify patient's date of birth")

      (empty? address)
      (assoc "address" "Please specify patient's address")
      
      (empty? chi-number)
      (assoc "chi-number" "Please specify patient's CHI number")

      (not (= 16 (count chi-number)))
      (assoc "chi-number" "CHI number must be 16 digits"))))

(defn add-patient-form []
  [fork/form
   {:prevent-default? true
    :on-submit #(js/alert (:values %))
    :validation validation}
   (fn [{:keys [form-id
                values
                handle-change
                handle-blur
                handle-submit
                touched
                errors]}]
     (let [render-error #(when (and (touched %) (get errors %))
                           [:div (get errors %)])]
       [:form
        {:id form-id
         :on-submit handle-submit}
        [:label {:for "first-name"}
         "First name:"]
        [:input
         {:type "text"
          :name "first-name"
          :id "first-name"
          :value (values "first-name")
          :on-change handle-change
          :on-blur handle-blur}]
        [render-error "first-name"]

        [:label {:for "middle-name"}
         "Middle name:"]
        [:input
         {:type "text"
          :name "middle-name"
          :id "middle-name"
          :value (values "middle-name")
          :on-change handle-change
          :on-blur handle-blur}]
        [render-error "middle-name"]

        [:label {:for "last-name"}
         "Last name:"]
        [:input
         {:type "text"
          :name "last-name"
          :id "last-name"
          :value (values "last-name")
          :on-change handle-change
          :on-blur handle-blur}]
        [render-error "last-name"]

        [:label {:for "gender"}
         "Gender:"]
        [:select
         {:id "gender"
          :name "gender"
          :value (values "gender")
          :on-change handle-change}
         [:option
          {:selected true
           :disabled true}
          "Please specify patient's gender"]
         [:option
          {:value "Male"}
          "Male"]
         [:option
          {:value "Female"}
          "Female"]
         [:option
          {:value "Other"}
          "Other"]]
        [render-error "gender"]

        [:label {:for "date-of-birth"}
         "Date of birth:"]
        [:input
         {:type "date"
          :id "date-of-birth"
          :name "date-of-birth"
          :value (values "date-of-birth")
          :on-change handle-change
          :on-blur handle-blur}]
        [render-error "date-of-birth"]

        [:label {:for "address"}
         "Address:"]
        [:input
         {:type "text"
          :name "address"
          :id "address"
          :value (values "address")
          :on-change handle-change
          :on-blur handle-blur}]
        [render-error "address"]
        
        [:label {:for "chi-number"}
         "CHI number:"]
        [:input
         {:type "number"
          :name "chi-number"
          :id "chi-number"
          :value (values "chi-number")
          :on-change handle-change
          :on-blur handle-blur}]
        [render-error "chi-number"]

        [:button
         {:type "submit"}
         "Submit"]]))])
