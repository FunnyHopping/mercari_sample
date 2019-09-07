Rails.application.routes.draw do

  devise_scope :user do
    get 'login' => 'devise/sessions#new', as: :new_user_session
    post 'login' => 'devise/sessions#create', as: :user_session
    delete 'logout' => 'devise/sessions#destroy', as: :destroy_user_session
  end
  root 'users#index'
  resources :users do
    collection do
      get 'step1'
      get 'step2'
      get 'step3'
      get 'step4'
      get 'step5'
    end
  end
  
end
