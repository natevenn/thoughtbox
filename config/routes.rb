Rails.application.routes.draw do

  root 'welcome#index'

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :links
    end
  end

  get '/signup', to: 'users#new'
  resources :links, only: [:create, :update]
  post '/users', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/dashboard', to: 'links#index'
end
