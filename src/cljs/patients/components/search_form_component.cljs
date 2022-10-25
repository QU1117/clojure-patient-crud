(ns patients.components.search-form-component
  (:require [fork.reagent :as fork]
            [ajax.core :as ajax]))

(defn search-form []
  [fork/form
   {:prevent-default? true
    :on-submit #(ajax/POST
                 "http://localhost:4000/api/patients/"
                 {:params
                  (fn []
                    (let [first-name    ((:values %) "first-name" "")
                          middle-name   ((:values %) "middle-name" "")
                          last-name     ((:values %) "last-name" "")
                          gender        ((:values %) "gender" "")
                          date-of-birth ((:values %) "date-of-birth" "")
                          address       ((:values %) "address" "")
                          chi-number    ((:values %) "chi-number" "")]
                      (cond->
                          {}
                          (seq first-name)
                          (assoc :first_name first-name)
                        
                          (seq middle-name)
                          (assoc :middle_name middle-name)
                        
                          (seq last-name)
                          (assoc :last_name last-name)
                        
                          (seq gender)
                          (assoc :gender gender)
                        
                          (seq date-of-birth)
                          (assoc :date_of_birth date-of-birth)
                        
                          (seq address)
                          (assoc :address address)
                        
                          (seq chi-number)
                          (assoc :chi_number (js/parseInt chi-number)))))})}
   (fn [{:keys [values
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
                    "
            :id "submit-add-form"}
           "Submit"]]]]))])
