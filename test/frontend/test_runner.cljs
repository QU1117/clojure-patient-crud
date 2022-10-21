(ns frontend.test-runner
  (:require [jx.reporter.karma :refer-macros [run-all-tests]]))

(enable-console-print!)

; runs all tests in all namespaces - only namespaces with names matching
; the regular expression will be tested
(defn ^:export run-all-regex [karma]
  (run-all-tests karma #".*-frontend-test$"))
