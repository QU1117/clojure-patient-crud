(ns patients.components.header)

(defn header []
  [:header
   [:h1 {:class "m-3 font-cinzel text-2xl"}
    "Patients"]
   [:hr
    {:class
     "border-0 h-px bg-gradient-to-r from-transparent via-black mb-12"}]])
