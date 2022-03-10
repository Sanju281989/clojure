(ns kira.util)

(defmacro lazy-component [the-sym]
  `(kira.util/lazy-component* (shadow.lazy/loadable ~the-sym)))

