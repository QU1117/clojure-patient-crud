(ns patients.components.patient)

(defn patient-row [patient]
  [:div {:class "grid grid-cols-3"}
   [:div (:first_name patient)]
   [:div (:middle_name patient)]
   [:div (:last_name patient)]])
