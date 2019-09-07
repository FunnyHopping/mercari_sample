Rails.application.routes.draw do
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
