(ns patients.components.navigation)

(defn nav []
  [:nav {:class "flex flex-initial"}
    [:div {:class
           "text-xl
           m-2
           font-cinzel
           hover:bg-black
           hover:text-white
           hover:cursor-pointer"}
     "Add new patient"]])
