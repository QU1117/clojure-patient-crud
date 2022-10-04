(ns patients.components.patient)

(defn patient-row [patient]
  [:div {:class "grid grid-cols-4 font-cinzel gap-x-4 hover:border border-black"}
   [:div {:class "flex flex-row-reverse"}
    (:id patient)]
   [:div (:first_name patient)]
   [:div (:middle_name patient)]
   [:div (:last_name patient)]])
