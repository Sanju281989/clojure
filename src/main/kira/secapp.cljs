(ns kira.secapp
  (:require [kira.login :as login]
            ["react" :as react]
            [reagent.core :as r]
            ;[kira.util :refer (lazy-component)]
            [kira.dashboard :refer (welcome-dsd)]
            [kira.dashboard :refer (clock)]
            [ajax.core :refer [GET POST PUT DELETE]]
            [kira.dashboard :refer (error-handler)]
            [cljs.core.async :refer (chan put! <! go go-loop timeout)]
            [cljs.nodejs :as node]
            ["crypto-js" :as CryptoJS]
            ))

(def editid_content (r/atom ""))
(def del-open (r/atom "none"))
(def del_message (r/atom ""))
(def del_display (r/atom "none"))
(def editid_delete (r/atom ""))



(defn del-triger []
      (reset! del-open "block"))

(defn del-close []
      (reset! del-open "none"))

(defn handler_dels [response]
      ;(get-files)
      (.log js/console (.. response -msg))
      (reset! del_message "File Delete Successfully!")
      (reset! del_display "block"))

(defn del-submit
      []
      (def postid [{"file_id" @editid_delete}])
      (POST "http://127.0.0.1:3000/delete-file"
            {:body            postid
             :format          :json
             :response-format :json
             :handler         handler_dels
             :error-handler   error-handler})
      (reset! del-open "none"))

(defn pageRefreshData []
      (reset! del_display "none")
      ;(get-files)
      )

(def san-ten (r/atom ""))
(defn handle-datadd
     [response]
      (reset! san-ten response)
   )

(defn get-files
      []
      (GET "http://127.0.0.1:3000/get-files"
           {
            :response-format :json
            :keywords? true
            :handler handle-datadd
            :error-handler error-handler}))

(get-files)

(defn navbar []
      [:div.flex.bg-black.w-full.text-white.p-2.mb-2
       [:div {:class "w-1/2 mt-4 mb-4"}
        [:a.m-2.px-3.py-2.border-2 {:href "#home" :on-click #(pageRefreshData)} "HOME"]
        ]
       [:div {:class "w-1/2"}
        [:div {:class "w-full"}
         [:div {:class "w-3/5 mt-4 float-left"}
          ;[:h1.text-lg.font-bold.text-right "Welcome" + " " + @welcome_message]
          [welcome-dsd]
          ]
         [:div {:class "w-1/5 mt-4 float-left"}
          [:h1.text-lg.font-bold.text-center
           [clock]
           ]
          ]
         [:div {:class "w-1/5 mt-4 float-left"}
          [:a.m-2.px-3.py-2.border-2 {:href "#" :on-click #(swap! login/app-state assoc :page :welcome)} "LOGOUT"]
          ]
         ]
        ]
       ]
      )

(defn rootts []
      [:div
       [navbar]
       [:center
        [:h1.text-4xl.font-bold "Dashboard"]
        [:p
         [:span {:style {:color "red" :display @del_display}} @del_message]
         ]
        [:br]
        [:table
         [:thead
          [:tr.m-2.px-3.py-2.border-2
           [:th.m-2.px-3.py-2.border-2 "File Name"]
           [:th.m-2.px-3.py-2.border-2 "Created By"]
           [:th.m-2.px-3.py-2.border-2 "Last Modified On"]
           [:th.m-2.px-3.py-2.border-2 "Action"]
           ]
          ]
         [:tbody
                (let [[a b c] @san-ten]
                   (for [i (range (count @san-ten))]
                        (let [{file_id :file_id file_name :file_name created_by :created_by last_modified_on :last_modified_on} (get-in @san-ten [i])]
                             ;decode
                             (def name_fval (.. CryptoJS -enc -Base64 (parse file_name)))
                             (def name_fval_final (.. CryptoJS -enc -Utf8 (stringify name_fval)))

                             (def createdBy_fval (.. CryptoJS -enc -Base64 (parse created_by)))
                             (def createdBy_fval_final (.. CryptoJS -enc -Utf8 (stringify createdBy_fval)))

                             (def lastModifiedOn_fval (.. CryptoJS -enc -Base64 (parse last_modified_on)))
                             (def lastModifiedOn_fval_final (.. CryptoJS -enc -Utf8 (stringify lastModifiedOn_fval)))

                             ^{:key i} [:tr.m-2.px-3.py-2.border-2
                                        [:td.m-2.px-3.py-2.border-2 [:a {:on-click (fn [_]
                                                                                       (def name_fvals (.. CryptoJS -enc -Base64 (parse file_name)))
                                                                                       (def name_fval_finals (.. CryptoJS -enc -Utf8 (stringify name_fvals)))

                                                                                       (swap! login/app-state assoc :page :help)
                                                                                       (reset! editid_content file_id)
                                                                                       ) :href "#help"} name_fval_final]]
                                        [:td.m-2.px-3.py-2.border-2 createdBy_fval_final]
                                        [:td.m-2.px-3.py-2.border-2 lastModifiedOn_fval_final]
                                        [:td.m-2.px-3.py-2.border-2
                                         [:a { :on-click (fn [_]
                                                             (del-triger)(reset! editid_delete file_id)
                                                             ) :href "#" :data-bs-toggle "modal" :data-bs-target "#staticBackdrop"}
                                          [:center
                                           [:svg {:xmlns "http://www.w3.org/2000/svg" :class "h-4 w-4 sandel" :viewBox "0 0 20 20" :fill "currentColor"}
                                            [:path {:fillRule "evenodd" :d "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" :clipRule "evenodd" }
                                             ]
                                            ]
                                           ]
                                          ]
                                         ]
                                        ]
                                         )
                                    )
                               )
                      ]
                       ]
                      ]

       [:div {:style {:display @del-open} :class "modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" :id "staticBackdrop" :data-bs-backdrop "static" :data-bs-keyboard "false" :tabIndex "-1" :aria-hidden "true"}
        [:div {:class "modal-dialog relative w-auto pointer-events-none"}
         [:div {:class "modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"}

          [:div {:class "modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"}
           [:h5 {:class "text-xl font-medium leading-normal text-gray-800" :id "exampleModalLabel"}
            "Delete"
            ]
           [:button {:type "button"
                     :class "btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                     :data-bs-dismiss "modal" :on-click #(del-close) }]
           "X"
           ]
          [:div {:class "modal-body relative p-4"}
           "Are you sure you want to delete your file?"
           ]
          [:div
           {:class "modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"}
           [:button { :on-click #(del-close) :type "button"
                     :class "inline-block px-6 py-2.5 h-10 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                     } "Cancel" ]
           [:button {:on-click #(del-submit) :type "button"
                     :class "inline-block px-6 py-2.5 h-10 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"} "Delete"]
           ]
          ]]]
       ])


