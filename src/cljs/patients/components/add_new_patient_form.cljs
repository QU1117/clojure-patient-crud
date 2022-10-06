(ns patients.components.add-new-patient-form)

(defn add-new-patient []
  [:form {:class "font-cinzel"}
   [:label {:for "fname"} "First name: "]
   [:br]
   [:input {:class "mt-3 mb-6"
            :type "text"
            :id "fname"
            :required "required"}]
   [:br]

   [:label {:for "mname"} "Middle name:"]
   [:br]
   [:input {:class "mt-3 mb-6"
            :type "text"
            :id "mname"
            :required "required"}]
   [:br]

   [:label {:for "lname"} "Last name: "]
   [:br]

   [:input {:class "mt-3 mb-6"
            :type "text"
            :id "lname"
            :required "required"}]
   [:br]

   [:label {:for "gender"} "Gender: "]
   [:br]

   [:select {:id "gender"
             :class "mt-3 mb-6"}
    [:option {:value "Male"} "Male"]
    [:option {:value "Female"} "Female"]
    [:option {:value "Other"} "Other"]]
   [:br]

   [:label {:for "date-of-birth"} "Date of birth:"]
   [:br]
   [:input {:type "date"
            :id "date-of-birth"
            :class "mt-3 mb-6"
            :required "required"}]
   [:br]
   
   [:label {:for "address"} "Address: "]
   [:br]
   [:input {:class "mt-3 mb-6"
            :type "text"
            :id "address"
            :required "required"}]
   [:br]

   [:label {:for "chi-number"} "CHI number:"]
   [:br]
   [:input {:type "text"
            :id "chi-number"
            :maxlength 16
            :required "required"}]
   [:br]

   [:input {:type "submit"
            :value "Submit"}]])
