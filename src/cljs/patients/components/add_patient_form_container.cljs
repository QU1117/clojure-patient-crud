(ns patients.components.add-patient-form-container)

(defn- validation [values]
  (let [first-name    (get values "first-name" "")
        middle-name   (get values "middle-name" "")
        last-name     (get values "last-name" "")
        gender        (get values "gender" "")
        date-of-birth (get values "date-of-birth" "")
        address       (get values "address" "")
        chi-number    (get values "chi-number" "")]
    (cond->
        {}
      (empty? first-name)
      (assoc "first-name" "First name field can't be empty")

      (empty? middle-name)
      (assoc "middle-name" "Middle name field can't be empty")

      (empty? last-name)
      (assoc "last-name" "Last name field can't be empty")

      (empty? gender)
      (assoc "gender" "Please specify patient's gender")

      (empty? date-of-birth)
      (assoc "date-of-birth" "Please specify patient's date of birth")

      (empty? address)
      (assoc "address" "Please specify patient's address")
      
      (empty? chi-number)
      (assoc "chi-number" "Please specify patient's CHI number")
      
      (not (int? (int chi-number)))
      (assoc "chi-number" "Please specify correct CHI number")

      (not (= 16 (count chi-number)))
      (assoc "chi-number" "CHI number must be 16 digits"))))
