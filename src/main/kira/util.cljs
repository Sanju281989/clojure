(ns kira.util
  (:require-macros [kira.util])
  (:require
    ["react" :as react]
    [reagent.core :as r]
    [shadow.lazy :as lazy]))

(defn lazy-component* [loadable]
  (react/lazy
    (fn []
      (-> (lazy/load loadable)
          (.then (fn [root-el]
                   #js {:default (r/reactify-component (fn [props] [@loadable props]))}
                   ))))))
;---------------------------------------

