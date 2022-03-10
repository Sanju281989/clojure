(ns kira.help
  (:require [kira.login :as login]
            ["react" :as react]
            [reagent.core :as r]
    ;[kira.util :refer (lazy-component)]
            [kira.secapp :refer [editid_content]]
            [kira.dashboard :refer (welcome-dsd)]
            [kira.dashboard :refer (clock)]
            [kira.dashboard :refer (error-handler)]
            [ajax.core :refer [GET POST PUT]]
            [cljs.core.async :refer (chan put! <! go go-loop timeout)]
            [cljs.nodejs :as node]
            ["crypto-js" :as CryptoJS]
			      [clojure.string :as str]
           )
  )

(def show-edit-text (r/atom "false"))
(def file-name (r/atom ""))
(def edit-content (r/atom ""))
(def update-content (r/atom ""))

(defn handleGetData [response]
      (let [ {name :file_name contentts :file_content}
            response ]

           (def name_fvals (.. CryptoJS -enc -Base64 (parse name)))
           (def name_fval_finals (.. CryptoJS -enc -Utf8 (stringify name_fvals)))
           (def content_fvals (.. CryptoJS -enc -Base64 (parse contentts)))
           (def content_fval_finals (.. CryptoJS -enc -Utf8 (stringify content_fvals)))

           (reset! file-name name_fval_finals)
           (reset! edit-content content_fval_finals)
           (reset! update-content content_fval_finals)
           )
 )

(defn GetAPIData
            []
            (def postid [{"file_id" @editid_content}])
            (POST "http://127.0.0.1:3000/get-file-content"
                  {:body            postid
                   :format          :json
                   :response-format :json
                   :keywords? true
                   :handler         handleGetData
                   :error-handler   error-handler})
      )

(defn handler2 [response]
      (reset! message (str response.msg )))

(defn updateData
      [payload]
      (reset! edit-content @update-content)
      [[@editid_content @file-name @update-content] payload]

      (def name_content_fval (.. CryptoJS -enc -Utf8(parse @file-name)))
      (def name_content_fval_final (.. CryptoJS -enc -Base64(stringify name_content_fval)))

      (def content_to_edit_fval (.. CryptoJS -enc -Utf8(parse @update-content)))
      (def content_to_edit_fval_final (.. CryptoJS -enc -Base64(stringify content_to_edit_fval)))

      (def requestPostData [{"file_id" @editid_content "file_name" name_content_fval_final "file_content" content_to_edit_fval_final}])
      (POST "http://127.0.0.1:3000/update-file"
            {:body requestPostData
             :format :json
             :response-format :json
             :handler2 handler2
             :error-handler error-handler})
            (reset! show-edit-text "false"))

(defn cancelUpdate []
      (reset! show-edit-text "false")
      (reset! update-content @edit-content))

(def event-queue (chan))
(go-loop [ [event payload] (<! event-queue)]
         (case event
               :updateData (updateData)
               :cancelUpdate (cancelUpdate)
               )
         (recur (<! event-queue)))

(defn pageRefreshData []
      (reset! show-edit-text "false")
      (swap! login/app-state assoc :page :secapp))

(defn navbar []
      (GetAPIData)
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

 (defn buttonComponent []
                  (fn []
                     (if (= "false" @show-edit-text)
                       (do
                         [:button.btn-blue.hover:bg-teal-400
                          {:on-click (fn [] (reset! show-edit-text "true"))} "Edit Text"]
                         )
                       (do
                         [:div
                          [:button.btn-blue.hover:bg-teal-400
                           {:on-click #(updateData)} "Update"]

                          [:button.btn-blue.hover:bg-teal-400
                           {:on-click #(cancelUpdate)} "Cancel"]
                          ]
                         )
                       )
                    ))

      (defn rootdd []
            [:div
             [navbar]
             [:br] [:br]
             [:center
              (if (= "false" @show-edit-text)
                [:div
                 [:h5.font-bold.text-left.cust-heading "File Name:"]
                 [:h5.text-left.cust-heading
                  @file-name
                  ]
                 [:h5.font-bold.text-left.cust-heading "Edit Content:"]
                 [:div.border-2.san-textareass {:readOnly "readOnly"}
                  @edit-content
                  ]
                 ]
                )
              (if (= "true" @show-edit-text)
                [:div
                 [:h5.font-bold.text-left.cust-heading "Update Content:"]
                 [:textarea.border-2.san-textarea {
                                                   :on-change #(reset! update-content (-> % .-target .-value))
                                                   :value @update-content
                                                   }]
                 ]
                )
              [buttonComponent]
              ]
             ])