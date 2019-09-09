Rails.application.routes.draw do
  root 'users#index'

  devise_scope :user do
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

  resources :item_purchases
  resources :payments
end

