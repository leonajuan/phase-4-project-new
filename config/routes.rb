Rails.application.routes.draw do
  resources :comments, only: [:index, :show, :create]
  resources :users
  resources :songs, only: [:index, :show, :create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  # get '*path',
  # to: 'fallback#index',
  # constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'users#login'
  get '/profile', to: 'users#profile'
  delete '/profile', to: 'users#destroy'
  patch '/user-name', to: 'users#update_name'
  
end
