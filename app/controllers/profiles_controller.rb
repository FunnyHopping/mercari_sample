class ProfilesController < ApplicationController
  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update(profile_params)
      flash[:notice] = "変更したら変更したと表示する場所"
      redirect_to edit_profile_path(current_user)
    else
      render :edit
    end
  end


  private
  def profile_params
    params.require(:user).permit(:name,:profile)
  end
end
