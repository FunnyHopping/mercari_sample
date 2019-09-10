class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    callback_for(:facebook)
  end

  def google_oauth2
    callback_for(:google)
  end

  def callback_for(provider)
    @auth = request.env["omniauth.auth"]
    if User.find_by(uid: @auth.uid) != nil
      sign_in User.find_by(uid: @auth.uid)
      redirect_to root_path
      return
    end
    session[:name] = @auth.info.name
    session[:email] = @auth.info.email
    session[:password] = Devise.friendly_token[0, 20]
    session[:password_confirmation] = session[:password]
    session[:uid] = @auth.uid
    session[:provider] = @auth.provider

    redirect_to step1_sns_signups_path
  end

  def failure
    redirect_to root_path and return
  end
end