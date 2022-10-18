(ns patients.components.add-patient-form-container
  (:require [fork.reagent :as fork]
            [ajax.core :as ajax]))

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

      (not (= 16 (count chi-number)))
      (assoc "chi-number" "CHI number must be 16 digits"))))

(defn add-patient-form []
  [fork/form
   {:prevent-default? true
    :on-submit #(ajax/POST "http://localhost:4000/api/patients/"
                           {:params
                            {:first_name    ((:values %) "first-name")
                             :middle_name   ((:values %) "middle-name")
                             :last_name     ((:values %) "last-name")
                             :gender        ((:values %) "gender")
                             :date_of_birth ((:values %) "date-of-birth")
                             :address       ((:values %) "address")
                             :chi_number    (js/parseInt
                                             ((:values %) "chi-number"))}
                            :handler (fn [_]
                                       (js/alert "Patient has been created"))})
    :validation validation}
   (fn [{:keys [form-id
                values
                handle-change
                handle-blur
                handle-submit
                touched
                errors]}]
     (let [render-error #(when (and (touched %) (get errors %))
                           [:div
                            {:class "text-red-500"}
                            (get errors %)])]
       [:form
        {:id form-id
         :on-submit handle-submit
         :class "grid
                 grid-cols-2
                 font-cinzel"}
        [:div
         {:class "col-start-1
                  col-end-2
                  justify-self-center"}
         [:div
          {:class "flex
                   flex-col"}
          [:label {:for "first-name"
                   :class "w-fit"}
           "First name:"]
          [:input
           {:type "text"
            :name "first-name"
            :id "first-name"
            :value (values "first-name")
            :on-change handle-change
            :on-blur handle-blur
            :class "mt-3
                    mb-3
                    mr-3
                    border
                    border-black
                    p-1
                    w-fit"}]
          [render-error "first-name"]

          [:label {:for "middle-name"
                   :class "w-fit"}
           "Middle name:"]
          [:input
           {:type "text"
            :name "middle-name"
            :id "middle-name"
            :value (values "middle-name")
            :on-change handle-change
            :on-blur handle-blur
            :class "mt-3
                    mb-3
                    mr-3
                    border
                    border-black
                    p-1
                    w-fit"}]
          [render-error "middle-name"]

          [:label {:for "last-name"
                   :class "w-fit"}
           "Last name:"]
          [:input
           {:type "text"
            :name "last-name"
            :id "last-name"
            :value (values "last-name")
            :on-change handle-change
            :on-blur handle-blur
            :class "mt-3
                    mb-3
                    mr-3
                    border
                    border-black
                    p-1
                    w-fit"}]
          [render-error "last-name"]

          [:label {:for "gender"}
           "Gender:"]
          [:select
           {:id "gender"
            :name "gender"
            :value (values "gender")
            :on-change handle-change
            :class "mt-3
                    mb-3
                    mr-3
                    border
                    border-black
                    w-fit
                    bg-white
                    p-1"}
           [:option
            {:selected true
             :disabled true
             :value "specify-gender"}
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
          [render-error "gender"]]]

        [:div
         {:class "col-start-2
                  col-end-3"}
         [:div
          {:class "flex
                   flex-col"}
          [:label {:for "date-of-birth"
                   :class "w-fit"}
           "Date of birth:"]
          [:input
           {:type "date"
            :id "date-of-birth"
            :name "date-of-birth"
            :value (values "date-of-birth")
            :on-change handle-change
            :on-blur handle-blur
            :class "mt-3
                    mb-3
                    mr-3
                    border
                    border-black
                    pt-1
                    pb-1
                    pl-1
                    pr-0
                    w-fit"}]
          [render-error "date-of-birth"]

          [:label {:for "address"
                   :class "w-fit"}
           "Address:"]
          [:input
           {:type "text"
            :name "address"
            :id "address"
            :value (values "address")
            :on-change handle-change
            :on-blur handle-blur
            :class "mt-3
                    mb-3
                    mr-3
                    border
                    border-black
                    p-1
                    w-fit"}]
          [render-error "address"]
         
          [:label {:for "chi-number"
                   :class "w-fit"}
           "CHI number:"]
          [:input
           {:type "number"
            :name "chi-number"
            :id "chi-number"
            :value (values "chi-number")
            :on-change handle-change
            :on-blur handle-blur
            :class "mt-3
                    mb-3
                    mr-3
                    border
                    border-black
                    p-1
                    w-fit"
            :min 1}]
          [render-error "chi-number"]

          [:button
           {:type "submit"
            :class "text-xl
                    w-fit
                    hover:bg-black
                    hover:text-white
                    hover:cursor-pointer
                    mt-6
                    ml-20
                    p-2
                    "}
           "Submit"]]]]))])
