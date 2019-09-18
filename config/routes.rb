Rails.application.routes.draw do
  root 'pages#index'

  devise_scope :user do
    get 'logout_page' => 'devise/sessions#edit'
    get 'login' => 'devise/sessions#new'
    post 'login' => 'devise/sessions#create'
    delete 'logout' => 'devise/sessions#destroy'
  end

  resource :signups do
    collection do
      get 'step0'
      get 'step1_sns'
      get 'step1'
      get 'step1'
      get 'step2'
      get 'step3'
      get 'step4'
      get 'step5'
      get 'step6'
    end
  end

  resources :users do
  end

  resources :book_shops, only: [:index, :create ,:destroy]
  
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  resources :payments
  resources :items
  resources :cards
  resources :profiles, only: [:edit,:update]
  resources :pages, only: [:show,:index]
  resources :transacts, only: [:create]
  resources :orders, only: [:show]
  resources :ordercomments, only: [:create]

  resources :categories, only: :index do
    collection do
      get 'get_child_category'
      get 'get_grandchild_category'
    end
  end
  resources :postages, only: :index do
    collection do
      get 'get_postage_plan'
    end
  end
  resources :categories, only: [:new,:index,:show]
end

