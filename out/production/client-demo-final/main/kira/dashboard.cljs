(ns kira.dashboard
  (:require
    ["react" :as react]
    [reagent.core :as r]
    [kira.env :as env]
    [cljs-http.client :as http]
    [kira.util :refer (lazy-component)]
    [ajax.core :refer [GET POST PUT]]
    [cljs.core.async :refer (chan put! <! go go-loop timeout)]
    [cljs.nodejs :as node]
    [clojure.string :as str]
    ))
;---------------------------------------
(def message (r/atom ""))
(def welcome_message (r/atom ""))
(def file_data (r/atom ""))
(def error_message (r/atom ""))
;---------------------------------------
(defonce root-el (js/document.getElementById "root"))
(def secapp (lazy-component kira.secapp/root))
(def help (lazy-component kira.help/root))
;---------------------------------------
;---------------Timer-------------------
(defonce timer (r/atom (js/Date.)))
(defonce time-updater (js/setInterval
      #(reset! timer (js/Date.)) 1000))
(defn clock []
      (let [time-str (-> @timer .toTimeString (str/split " ") first)]
           [:div.example-clock
            {:style {:color "#fff"}}
            time-str]))
;---------------------------------------
(defn error-handler [{:keys [status status-text]}]
      (.log js/console (str "something bad happened: " status " " status-text)))
;---------------------------------------
(defn handle_data [response]
      (reset! file_data response)
)
;---------------------------------------
(defn get-files
      []
      (GET "http://127.0.0.1:3000/get-all-file-details"
           {
            :response-format :json
            :keywords? true
            :handler handle_data
            :error-handler error-handler})
      )
;---------------------------------------
(defn verifyHandler [response]
      (swap! env/app-state assoc :page :secapp)
      (get-files)
)
;---------------------------------------
(defn verify-credentials
      [payload]
      (let [[username password] payload]
           (if (or (== username "") (== password ""))
             (reset! message "Please provide the User-Id and Password.")
             (do
               (reset! message "Authenticating...")
               (reset! welcome_message username)
                        (go (let [response (<! (http/post "http://127.0.0.1:3000/authenticate-user"
                        {:query-params {:user_id username :user_pass password}}))]
                        (println (:status response))
                        (println (:body response))
                        (def x (:body response))
                         ;(println "X :" x)
                        (reset! message "")
                        (if (== x 1)
                          (verifyHandler x)
                          ;(error-handler x)
                          (reset! message "Incorrect credentials")
                          )
                        ))
                      )
                   )
                )
              )
;---------------------------------------
(def event-queue (chan))
(go-loop [[event payload] (<! event-queue)]
         (case event
               :login (verify-credentials payload)
               )
         (recur (<! event-queue))
         )
;---------------------------------------
(defn input-box [type label var]
      [:div.input-box
       [:label label]
       [:input {:on-change #(reset! var (-> % .-target .-value))
                :type type}]])
;---------------------------------------
(defn loginForm []
      (let [username (r/atom "")
            password (r/atom "")
            ]
           [:div
            [input-box "text" "Username: " username]
            [input-box "password" "Password: " password]
            [:button.btn-blue.hover:bg-teal-400
             {:on-click #(put! event-queue [:login [@username @password]])}
             "Submit"]
             ]
           ))
;---------------------------------------
(defn welcome []
      [:div
       [:center
        [:h1.text-2xl.font-bold "Welcome to Clojure"]
        [loginForm]
        [:p
         [:label {:style {:color "red"}} @message]
         ]
        ]
  ])
;---------------------------------------
(defn root []
      (let [{:keys [page] :as state} @env/app-state]
           [:div
            [:> react/Suspense {:fallback (r/as-element [:div "Loading ..."])}
             (case page
                   :secapp
                   [:> secapp {}]
                   :help
                   [:> help {}]
                   :welcome
                   [welcome {}]
                   [:div ["Unknown page?"]]
                   )]]))
;---------------------------------------
(defn ^:dev/after-load start []
(r/render [root] root-el))
;---------------------------------------
(defn init []
(start))
;---------------------------------------
