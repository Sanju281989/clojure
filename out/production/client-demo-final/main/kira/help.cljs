(ns kira.help
  (:require [kira.env :as env]
            ["react" :as react]
            [reagent.core :as r]
            [kira.util :refer (lazy-component)]
            [kira.secapp :refer [editid_content]]
            [kira.dashboard :refer [message welcome_message]]
            [kira.dashboard :refer (get-files)]
            [kira.dashboard :refer (clock)]
            [kira.dashboard :refer (error-handler)]
            [ajax.core :refer [GET POST PUT]]
            [cljs.core.async :refer (chan put! <! go go-loop timeout)]
            [cljs.nodejs :as node]
            ["crypto-js" :as CryptoJS]
			      [clojure.string :as str]
           )
  )
;---------------------------------------
(def show_edit_text (r/atom "false"))
(def fileName (r/atom ""))
(def pEditContent (r/atom ""))
(def pUpdateContent (r/atom ""))
;---------------------------------------
(defn handleGetData [response]
      (let [ {name :file_name contentts :file_content}   ;; <-- destructure map
            response ]
           ;decrypt
           (def name_fvals (.. CryptoJS -enc -Base64 (parse name)))
           (def name_fval_finals (.. CryptoJS -enc -Utf8 (stringify name_fvals)))
           (def content_fvals (.. CryptoJS -enc -Base64 (parse contentts)))
           (def content_fval_finals (.. CryptoJS -enc -Utf8 (stringify content_fvals)))

           (reset! fileName name_fval_finals)
           (reset! pEditContent content_fval_finals)
           (reset! pUpdateContent content_fval_finals)
           )
 )
;------------------------------------------------
(defn GetAPIData
            []
            (def postid [{"file_id" @editid_content}])
            (POST "http://127.0.0.1:3000/get-file-content-by-id"
                  {:body            postid
                   :format          :json
                   :response-format :json
                   :keywords? true
                   :handler         handleGetData
                   :error-handler   error-handler})
      )
;---------------------------------------------------
(defn handler2 [response]
      ;(.log js/console (.. response -msg))
      ; (js/alert "File content updated successfully.")
      (reset! message (str response.msg ))
   )
;---------------------------------------------------
(defn updateData
      [payload]
      (reset! pEditContent @pUpdateContent)
      [[@editid_content @fileName @pUpdateContent] payload]
      ;encrypt
      (def name_content_fval (.. CryptoJS -enc -Utf8(parse @fileName)))
      (def name_content_fval_final (.. CryptoJS -enc -Base64(stringify name_content_fval)))

      (def content_to_edit_fval (.. CryptoJS -enc -Utf8(parse @pUpdateContent)))
      (def content_to_edit_fval_final (.. CryptoJS -enc -Base64(stringify content_to_edit_fval)))
      ;------------------------------------------------------------
      (def requestPostData [{"file_id" @editid_content "file_name" name_content_fval_final "file_content" content_to_edit_fval_final}])
      (POST "http://127.0.0.1:3000/update-file-content-by-name"
            {:body requestPostData
             :format :json
             :response-format :json
             :handler2 handler2
             :error-handler error-handler})
            (reset! show_edit_text "false")
      )
;---------------------------------------
(defn cancelUpdate []
      (reset! show_edit_text "false")
      (reset! pUpdateContent @pEditContent)
      )
;---------------------------------------
(def event-queue (chan))
(go-loop [ [event payload] (<! event-queue)]
         (case event
               :updateData (updateData)
               :cancelUpdate (cancelUpdate)
               )
         (recur (<! event-queue))
         )
;---------------------------------------
(defn pageRefreshData []
      (reset! show_edit_text "false")
      (swap! env/app-state assoc :page :secapp)
      )
;---------------------------------------
(defn navbar []
      (GetAPIData)
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
;---------------------------------------
 (defn buttonComponent []
                  (fn []
                     (if (= "false" @show_edit_text)
                       (do
                         [:button.btn-blue.hover:bg-teal-400
                          {:on-click (fn [] (reset! show_edit_text "true"))} "Edit Text"]
                         )
                       (do
                         [:div
                          [:button.btn-blue.hover:bg-teal-400
                           {:on-click #(updateData)} "Update Text"]

                          [:button.btn-blue.hover:bg-teal-400
                           {:on-click #(cancelUpdate)} "Cancel Update"]
                          ]
                         )
                       )
                    ))
;-------------------------------------------------------------
      (defn root []
            [:div
             [navbar]
             [:br] [:br]
             [:center
              (if (= "false" @show_edit_text)
                [:div
                 [:h5.font-bold.text-left.cust-heading "File Name:"]
                 [:h5.text-left.cust-heading
                  @fileName
                  ]
                 [:h5.font-bold.text-left.cust-heading "Edit Content:"]
                 [:div.border-2.san-textareass {:readOnly "readOnly"}
                  @pEditContent
                  ]
                 ]
                )
              (if (= "true" @show_edit_text)
                [:div
                 [:h5.font-bold.text-left.cust-heading "Update Content:"]
                 [:textarea.border-2.san-textarea {
                                                   :on-change #(reset! pUpdateContent (-> % .-target .-value))
                                                   :value @pUpdateContent
                                                   }]
                 ]
                )
              [buttonComponent]
              ]
             ])
;-------------------------------------------------------------