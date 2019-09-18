class NicesController < ApplicationController
  def create
    item = Item.find(params[:id])

    if item.nices.where(user_id: current_user.id).exists?
      nice = current_user.nices.find_by(item_id: item.id)
      nice.destroy
      render json: nice.id, status: 200
    else
      nice = current_user.nices.new(item_id: item.id)
      nice.save
      render json: nice.id, status: 200
    end
  end
end
