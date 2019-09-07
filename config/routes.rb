Rails.application.routes.draw do
  get 'items/new'
  get 'items/create'
  get 'items/edit'
  get 'items/update'
  get 'items/destroy'
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
