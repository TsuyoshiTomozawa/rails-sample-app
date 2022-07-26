require "test_helper"

class UsersSignUpTest < ActionDispatch::IntegrationTest
    test "invalid signup information" do
        get signup_path
        assert_no_difference 'User.count' do
            post users_path params: { user: { name: "",
                                              email: "user@invalid",
                                              password: "foo",
                                              password_confirmation: "bar" } }
        end
        assert_template 'users/new'
        assert_select 'div#error_explanation'
    end

    test "valid signup information" do
        get signup_path
        assert_difference 'User.count' do
            post users_path params: {
                user: {
                    name: "test",
                    email: "user@example.com",
                    password: "password",
                    password_confirmation: "password"
                }
            }
        end

        follow_redirect!
        assert_template "users/show"
        flash.each do |type, message|
            p "#{type} #{message}"
        end
        assert_not flash.empty?
        assert is_logged_in?
    end
end