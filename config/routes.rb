Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  namespace :api, defaults: { format: :json } do
    get 'products/search', to: "products#search"
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show]
    resources :cart_items, only: [:index, :create, :destroy, :update]
    resources :reviews, only: [:index, :show, :create, :destroy, :update]
  end

  get '*path', to: "static_pages#frontend_index"
end
