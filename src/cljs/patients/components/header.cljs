(ns patients.components.header)

(defn header []
  [:header
   [:h1 {:class "m-3 font-cinzel text-2xl"}
    "Patients"]
   [:nav {:class "flex flex-initial"}
    [:div {:class
           "text-xl
           m-2
           font-cinzel
           hover:bg-black
           hover:text-white
           hover:cursor-pointer"}
     "Add new patient"]]
   [:hr
    {:class
     "border-0 h-px bg-gradient-to-r from-transparent via-black mb-12"}]])
