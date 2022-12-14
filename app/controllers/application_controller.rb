class ApplicationController < ActionController::Base
    include SessionHelper

    def hello
        render html: "hello"
    end

    private
    # ユーザーのログインを確認する
    def logged_in_user
        unless logged_in?
            store_location
            flash[:danger] = "Please log in."
            redirect_to login_url
        end
    end
end
