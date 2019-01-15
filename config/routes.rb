Rails.application.routes.draw do
  resources :poppers
 

   get '/poppers/new', to: 'poppers#index' 
  
  
  
  # get 'poppers/delete'
  

    # get 'poppers/new'
  # get 'poppers/show'
  # get 'poppers/create'



end
