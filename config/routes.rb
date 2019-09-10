Rails.application.routes.draw do
  root 'freemarket#index'

  devise_scope :user do
    get 'login' => 'devise/sessions#new'
    post 'login' => 'devise/sessions#create'
    delete 'logout' => 'devise/sessions#destroy'
  end

  resources :users do
    collection do
      get 'step1_sns'
      get 'step1'
      get 'step1'
      get 'step2'
      get 'step3'
      get 'step4'
      get 'step5'
    end
  end

  resources :book_shops, only: [:index, :create ,:destroy]
  
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

end

