Rails.application.routes.draw do

  resources :users, only: [:index, :show] do
    resources :thoughts, only: [:index, :show, :create, :destroy]
  end
  resources :solutions
  resources :thoughts
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
