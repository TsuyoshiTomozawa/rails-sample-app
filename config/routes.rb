Rails.application.routes.draw do
    get '/signup', to: 'users#new'
    get '/home', to: 'static_pages#home'
    get '/about', to: 'static_pages#about'
    get '/help', to: 'static_pages#help'
    get '/contact', to: 'static_pages#contact'

    # get 'static_pages/home'
    # get 'static_pages/help'
    # get 'static_pages/about'
    # get 'static_pages/contact'
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    root 'static_pages#home'

end
