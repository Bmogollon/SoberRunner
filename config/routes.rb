Rails.application.routes.draw do

  root :to => 'pages#welcome'
   resources :users, :only => [:new, :create, :index, :update]
   get '/users/edit' => 'users#edit', :as => 'edit_user'

   post "/scores" => "scores#create"
   get "/scores" => "scores#index"
   get '/signup' => 'users#new'

   get '/login' => 'session#new'
   post '/login' => 'session#create'
   delete '/login' => 'session#destroy'




   get '/user' => 'user#new'
    get "games/index"

   


  resources :poppers
end
