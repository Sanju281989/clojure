(ns core_test
  (:require [clojure.test :refer [deftest is testing]]
            [test.dashboard :refer :all]
            ))


(deftest my-testing
         (testing ""
                  (is (= 4 (kira.dashboard/add2)))
                  ) )