(ns patients.components.patient-detail
  (:require [reagent.core :as r]
            [ajax.core :as ajax]))

(def modal-state (r/atom "hidden"))
(def detailed-info-state (r/atom nil))

(defn patient-detail-modal []
  [:div {:class (str
                 @modal-state " "
                 "col-start-2
                 col-end-3
                 font-cinzel")}
   [:div "First name: " (:first_name @detailed-info-state)]
   [:div "Middle name: " (:middle_name @detailed-info-state)]
   [:div "Last name: " (:last_name @detailed-info-state)]
   [:div "Gender: " (:gender @detailed-info-state)]
   [:div "Date of birth: " (.format (js/Intl.DateTimeFormat "en-GB")
                                    (:date_of_birth @detailed-info-state))]
   [:div "Address: " (:address @detailed-info-state)]
   [:div "CHI number: " (:chi_number @detailed-info-state)]
   [:br]
   [:div {:class "border-0 h-px bg-gradient-to-r from-transparent via-black"}]
   [:br]
   
   [:div {:class "hover:bg-black hover:text-white hover:cursor-pointer w-fit"
          :on-click #(reset! modal-state "hidden")}
    "[Close]"]

   [:div {:class "hover:bg-black hover:text-white hover:cursor-pointer w-fit"
         :on-click
          #(when
               (js/confirm
                (str
                 "Are you sure you want to delete this patient's info?\n"
                 "Patient's ID: " (:id @detailed-info-state) "\n"
                 "First name: " (:first_name @detailed-info-state) "\n"
                 "Middle name: " (:middle_name @detailed-info-state) "\n"
                 "Last name: " (:last_name @detailed-info-state)))
             (ajax/DELETE (str "http://localhost:4000/api/patients/"
                                   (:id @detailed-info-state))
                              {:handler
                               (js/alert "Patient info has been deleted")}))}
   "[Delete patient's info"]])
