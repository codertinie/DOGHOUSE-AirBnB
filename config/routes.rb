Rails.application.routes.draw do
  resources :reviews
  resources :dog_houses, only: [:index, :show]
  resources :dog_houses, only: [:show] do
    resources :reviews, only: [:show, :index, :create]
  end
  get "/me", to: "users#show"

  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
