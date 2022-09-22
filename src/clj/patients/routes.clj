(ns patients.routes
  (:require [patients.handlers :refer [get-patients
                                       create-patient
                                       update-patient-by-id]]
            [schema.core :as schema]))

(def patients-route
  ["/patients"
   ["/" {:get get-patients
         :post {:handler create-patient
                :parameters {:body {:first_name schema/Str
                                    :middle_name schema/Str
                                    :last_name schema/Str
                                    :gender schema/Str
                                    :date_of_birth schema/Str
                                    :address schema/Str
                                    :chi_number schema/Int}}}}]
   
   ["/:id" {:parameters {:path {:id schema/Int}}
            :patch {:handler update-patient-by-id
                    :parameters {:body {:first_name schema/Str
                                        :middle_name schema/Str
                                        :last_name schema/Str
                                        :gender schema/Str
                                        :date_of_birth schema/Str
                                        :address schema/Str
                                        :chi_number schema/Int}}}}]])
