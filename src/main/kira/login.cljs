(ns kira.login
  (:require [reagent.core :as r]))

(defonce app-state
  (r/atom { :page :welcome
           }))


