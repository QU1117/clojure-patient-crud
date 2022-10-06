(ns patients.components.add-new-patient-form)

(defn add-new-patient []
  [:form {:class "font-cinzel"}
   [:label {:for "fname"} "First name: "]
   [:br]
   [:input {:class "mt-3 mb-6"
            :type "text"
            :id "fname"}]
   [:br]

   [:label {:for "mname"} "Middle name:"]
   [:br]
   [:input {:class "mt-3 mb-6"
            :type "text"
            :id "mname"}]
   [:br]

   [:label {:for "lname"} "Last name: "]
   [:br]

   [:input {:class "mt-3 mb-6"
            :type "text"
            :id "lname"}]
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
            :class "mt-3 mb-6"}]
   [:br]
   
   [:label {:for "address"} "Address: "]
   [:br]
   [:input {:class "mt-3 mb-6"
            :type "text"
            :id "address"}]
   [:br]

   [:label {:for "chi-number"} "CHI number:"]
   [:br]
   [:input {:type "text"
            :id "chi-number"
            :maxlength 16}]])
