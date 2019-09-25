class TransactsController < ApplicationController
  def create
    @item = Item.find(transact_params[:item_id])
    @item.transact = true
    @transact = Transact.new(transact_params)
    @transact.give_id = Item.find(transact_params[:item_id]).saler_id
    if @transact.save!
      if @item.save
        redirect_to root_path
      else
        render :new
      end
    else
      render :new
    end
  end

  private
  def transact_params
    params.require(:transact).permit(:evaluat,:confirmat,:body,:item_id).merge(take_id: current_user.id)
  end
end
