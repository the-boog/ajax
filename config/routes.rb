Rails.application.routes.draw do
 root 'games#index'

 get 'games/new', to: 'games#form'

 resources :games do
  resources :characters
 end
end
