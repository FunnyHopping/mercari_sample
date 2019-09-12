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
    sign_out @user
  end

  def update
  end

end
