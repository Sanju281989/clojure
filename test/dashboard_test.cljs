(ns dashboard-test
  (:require [clojure.test :refer [deftest is testing]]
            [main.kira.core :refer :all]
            )
  (:gen-class))

(deftest my-testing
         (testing "Testing purpose"
                  (println "expr teasing")
                  ;(is (= 4 (kira.dashboard/add2)))
                  )
         )





