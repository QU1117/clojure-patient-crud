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