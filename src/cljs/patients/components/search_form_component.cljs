(ns patients.components.search-form-component
  (:require [fork.reagent :as fork]
            [ajax.core :as ajax]
            [patients.components.main-container :refer [main-container-state]]
            [patients.components.patient-list :refer [patient-list-state
                                                      search-state]]
            [patients.components.patients-main-container
             :refer [patients-main-container]]))

(defn validate-search [values]
  (let [first-name    (get values "first-name" "")
        middle-name   (get values "middle-name" "")
        last-name     (get values "last-name" "")
        gender        (get values "gender" "")
        date-of-birth (get values "date-of-birth" "")
        address       (get values "address" "")
        chi-number    (get values "chi-number" "")]

    (cond->
        {}
      (and (empty? first-name)
           (empty? middle-name)
           (empty? last-name)
           (empty? gender)
           (empty? date-of-birth)
           (empty? address)
           (empty? chi-number))
      (assoc "empty-search-error"
             "Please provide at least one input for search"))))

(defn search-form []
  [fork/form
   {:prevent-default? true
    :validation validate-search
    :on-submit #(ajax/POST
                 "http://localhost:4000/api/patients/search/"
                 {:params
                  {:first_name    (if (seq ((:values %) "first-name"))
                                    (-> ((:values %) "first-name")
                                        (.trim))
                                    "")

                   :middle_name   (if (seq ((:values %) "middle-name"))
                                    (-> ((:values %) "middle-name")
                                        (.trim))
                                    "")

                   :last_name     (if (seq ((:values %) "last-name"))
                                    (-> ((:values %) "last-name")
                                        (.trim))
                                    "")

                   :gender        (if (seq ((:values %) "gender"))
                                    (-> ((:values %) "gender")
                                        (.trim))
                                    "")

                   :date_of_birth (if (seq ((:values %) "date-of-birth"))
                                    ((:values %) "date-of-birth")
                                    "")
                   
                   :address       (if (seq ((:values %) "address"))
                                    ((:values %) "address")
                                    "")
                   :chi_number    (if (seq ((:values %) "chi-number"))
                                    (js/parseInt
                                     ((:values %) "chi-number"))
                                    0)}
                  
                  :handler (fn [response]
                             ((reset! search-state true)
                              (reset! patient-list-state response)
                              (reset! main-container-state
                                      patients-main-container)))
                  :error-handler (fn [_]
                                   (js/alert "No patients found"))})}
   (fn [{:keys [values
                handle-change
                handle-blur
                handle-submit
                errors
                touched]}]
     (let [render-error #(when (and (touched %) (get errors %))
                           [:div
                            {:class "text-red-500"}
                            (get errors %)])]
       [:form
        {:id "search-form"
         :on-submit handle-submit
         :class "grid
                 grid-cols-2
                 font-cinzel"}
        [:div {:class "justify-self-center text-2xl mb-4"}
         "Search"
         [:hr
          {:class
           "border-0 h-px bg-gradient-to-r from-transparent via-black mb-12"}]]
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
                    w-fit"}]]

         [:label {:for "gender"}
          "Gender:"]
         [:br]
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
           "Other"]]]

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
                    "
            :id "submit-add-form"}
           "Submit"]
          [render-error "empty-search-error"]]]]))])
