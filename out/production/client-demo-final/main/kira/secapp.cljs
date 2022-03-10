(ns kira.secapp
  (:require [kira.env :as env]
            ["react" :as react]
            [reagent.core :as r]
            [kira.util :refer (lazy-component)]
            [kira.dashboard :refer [welcome_message]]
            [kira.dashboard :refer [file_data]]
            [kira.dashboard :refer (get-files)]
            [kira.dashboard :refer (clock)]
            [kira.dashboard :refer (handle_data)]
            [ajax.core :refer [GET POST PUT]]
            [cljs.core.async :refer (chan put! <! go go-loop timeout)]
            [cljs.nodejs :as node]
            ["crypto-js" :as CryptoJS]
            )
  )
;---------------------------------------
(def editid_content (r/atom ""))
(def file_upload_data (r/atom ""))
(def addFormOpen (r/atom "none"))
(def inst_message (r/atom ""))
;---------------------------------------
;-----------------insertdata------------
(defn addFormClose []
      (reset! addFormOpen "none")
      )

(defn insert_handle [response]
      ;(.log js/console (.. response -msg ))
      (reset! inst_message (str response.msg  ))
      )

(defn addFormData []
      (reset! addFormOpen "block")
  )
;----------------insertDataStart---------------
(defn insertFormData []
      (println @file_upload_data)
      (println @welcome_message)
      (def requestInsertData [{"upload_file" @file_upload_data "created_by" @welcome_message}])
      (POST "http://127.0.0.1:3000/create-file"
            { :body requestInsertData
             :format :json
             :response-format :json
             :insert_handle insert_handle
             :error-handler error-handler})
      ;(get-files)
      ;(reset! addFormOpen "none")
      )
;-----------------insertDataClose------------
(defn pageRefreshData []
      (get-files)
   )
;---------------------------------------
(defn navbar []
      [:div.flex.bg-black.w-full.text-white.p-2.mb-2
       [:div {:class "w-1/2 mt-4 mb-4"}
        [:a.m-2.px-3.py-2.border-2 {:href "#home" :on-click #(pageRefreshData)} "HOME"]
        ]
       [:div {:class "w-1/2"}
        [:div {:class "w-full"}
         [:div {:class "w-3/5 mt-4 float-left"}
          [:h1.text-lg.font-bold.text-right "Welcome" + " " + @welcome_message]
          ]
         [:div {:class "w-1/5 mt-4 float-left"}
          [:h1.text-lg.font-bold.text-center
           [clock]
           ]
          ]
         [:div {:class "w-1/5 mt-4 float-left"}
          [:a.m-2.px-3.py-2.border-2 {:href "#" :on-click #(swap! env/app-state assoc :page :welcome)} "LOGOUT"]
          ]
         ]
        ]
       ]
      )
;------------------------------------------------------------
(defn root []
      [:div
       [navbar]
       [:center
        [:h1.text-4xl.font-bold "Dashboard"]
        [:br]
        [:table
         [:thead
          [:tr.m-2.px-3.py-2.border-2
           [:th.m-2.px-3.py-2.border-2 "File Name"]
           [:th.m-2.px-3.py-2.border-2 "Created By"]
           [:th.m-2.px-3.py-2.border-2 "Last Modified On"]
           ]
          ]
         [:tbody
          (let [[a b c] @file_data]
               (for [i (range (count @file_data))]
                    (let [{file_id :file_id file_name :file_name created_by :created_by last_modified_on :last_modified_on} (get-in @file_data [i])]
                         ;decrypt
                         (def name_fval (.. CryptoJS -enc -Base64 (parse file_name)))
                         (def name_fval_final (.. CryptoJS -enc -Utf8 (stringify name_fval)))

                         (def createdBy_fval (.. CryptoJS -enc -Base64 (parse created_by)))
                         (def createdBy_fval_final (.. CryptoJS -enc -Utf8 (stringify createdBy_fval)))

                         (def lastModifiedOn_fval (.. CryptoJS -enc -Base64 (parse last_modified_on)))
                         (def lastModifiedOn_fval_final (.. CryptoJS -enc -Utf8 (stringify lastModifiedOn_fval)))
                        ;-------------------------------------------------------------------
                         ^{:key i} [:tr.m-2.px-3.py-2.border-2
                                    [:td.m-2.px-3.py-2.border-2 [:a {:on-click (fn [_]
                                       ;decrypt
                                       (def name_fvals (.. CryptoJS -enc -Base64 (parse file_name)))
                                       (def name_fval_finals (.. CryptoJS -enc -Utf8 (stringify name_fvals)))
                        ;-------------------------------------------------------------------
                                       (swap! env/app-state assoc :page :help)
                                       (reset! editid_content file_id)
                                       ) :href "#help"} name_fval_final]]
                                    [:td.m-2.px-3.py-2.border-2 createdBy_fval_final]
                                    [:td.m-2.px-3.py-2.border-2 lastModifiedOn_fval_final]
                                    ]
                                )
                             )
                          )
                        ]
                       ]
                      ]
;-------------------addDataForm--------------------------
        [:center
         [:br]
         [:br]
         [:button { :on-click #(addFormData) :type "button"
                   :class "inline-block px-6 py-2.5 h-10 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                   } "Add File"]
          [:div {:style {:display @addFormOpen}   :class "w-full max-w-md mt-12 mb-12"}
            [:form {:action "" :method "post" :encType "multipart/form-data" :class "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}
             [:div {:class "mb-4"}
               [:label {:class "block text-black-700 text-center text-lg font-bold mb-2"} "Insert File Data"]
              ]
             [:div {:class "mb-4"}
              [:label {:class "block text-black-700 text-left text-sm font-bold mb-2"} "File Upload:"]
              [:input {:type "file" :class "w-full \"form-control\n block\n w-full\n px-2\n py-1\n text-sm\n font-normal\n text-gray-700\n bg-white bg-clip-padding\n border border-solid border-gray-300\n rounded\n transition\n ease-in-out\n m-0\n focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" :name "file_name" :id "file_name" :required "required" :on-change #(reset! file_upload_data (-> % .-target .-value)) } ]
              ]
             [:div {:class "flex items-center justify-between"}
              [:button { :on-click #(insertFormData) :type "button"
                        :class "inline-block px-6 py-2.5 h-10 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        } "Submit File"]
              [:button { :on-click #(addFormClose) :type "button"
                        :class "inline-block px-6 py-2.5 h-10 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                        } "Cancel" ]
              ]
             ]
          ]
         ]
        ;--------------------closeaddDataForm---------------------------------
       ])
;---------------------------------------


