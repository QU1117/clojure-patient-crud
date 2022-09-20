CREATE TABLE IF NOT EXISTS patients (
       id             SERIAL PRIMARY KEY,
       first_name     TEXT NOT NULL,
       middle_name    TEXT,
       last_name      TEXT NOT NULL,
       gender         TEXT NOT NULL,
       date_of_birth  DATE NOT NULL,
       address        TEXT NOT NULL,
       chi_number     BIGINT NOT NULL,
       created_at     TIMESTAMP NOT NULL DEFAULT current_timestamp
);

--;;

INSERT INTO patients (
       first_name,
       middle_name,
       last_name,
       gender,
       date_of_birth,
       address,
       chi_number)
VALUES ('Alonzo',
       'Webster',
       'Church',
       'male',
       '1903-06-14',
       '(541) 485-0648
       4143 330th Pl SE
       Fall City, Washington(WA), 98024',
       8921943807056248);
       

--;;

INSERT INTO patients (
       first_name,
       middle_name,
       last_name,
       gender,
       date_of_birth,
       address,
       chi_number)
VALUES ('Donald',
       'Ervin',
       'Knuth',
       'male',
       '1938-01-10',
       '(262) 886-2333
       1011 S Stuart Rd
       Racine, Wisconsin(WI), 53406',
       3496689955574288);
