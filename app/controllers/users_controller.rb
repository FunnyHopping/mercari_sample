class UsersController < ApplicationController
  def index
  end

  def new
  end

  def show
  end

  def edit
  end

  def destroy
  end

  def update
  end

  def step1
    @user = User.new()
  end

  def step2
    session[:name] = user_params[:name]
    session[:email] = user_params[:email]
    session[:password] = user_params[:password]
    session[:password_confirmation] = user_params[:password_confirmation]
    
    session[:family_name] = user_params[:family_name]
    session[:first_name] = user_params[:first_name]
    session[:first_name_kana] = user_params[:first_name_kana]
    session[:family_name_kana] = user_params[:family_name_kana]
    session[:birth_day] = params[:user]["birth_day(1i)"]  + params[:user]["birth_day(2i)"] + params[:user]["birth_day(3i)"]
    @user = User.new
  end

  def step3
    session[:phone_num] = user_params[:phone_num]
    @address = Address.new()
  end

  def step4
    session[:post_num] = address_params[:post_num]
    session[:prefecture_id] = address_params[:prefecture_id]
    session[:city] = address_params[:city]
    session[:street_num] = address_params[:street_num]
    session[:building] = address_params[:building]
    @card = Card.new
  end

  def step5
    binding.pry
    @user = User.new()
  end

  def create
    @user = User.new(
      name:  session[:name],
      email: session[:email],
      password: session[:password],
      password_confirmation: session[:password_confirmation],
      family_name: session[:family_name],
      first_name: session[:first_name],
      first_name_kana: session[:first_name_kana],
      family_name_kana: session[:family_name_kana],
      phone_num: session[:phone_num]
    )
    @user.birth_day = session[:birth_day]
    if @user.save
      session[:user_id] = @user.id
      @address = Address.new(
        post_num: session[:post_num],
        prefecture_id: session[:prefecture_id],
        city: session[:city],
        street_num: session[:street_num],
        building: session[:building],
        user_id: session[:user_id]
      )
      if @address.save
        redirect_to root_path
      else
        render step3_users_path
      end
    else
      render step1_users_path
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation,:family_name,:first_name,:first_name_kana,:family_name_kana,:phone_num)
  end

  def address_params
    params.require(:address).permit(:post_num,:prefecture_id,:city,:street_num,:building)
  end
end
