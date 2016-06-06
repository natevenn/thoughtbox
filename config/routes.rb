Rails.application.routes.draw do

  root 'welcome#index'
  get '/signup', to: 'users#new'
  resources :links, only: [:create, :update]
  post '/users', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'session#delete'
  get '/dashboard', to: 'links#index'
end
