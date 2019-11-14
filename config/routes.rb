Rails.application.routes.draw do
  resources :users, only: [:edit, :update, :destroy]
  devise_for :users
  root to: "messages#index"
end
