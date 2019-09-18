class TransactsController < ApplicationController
  def create
    @item = Item.find(params.require(:transact).require(:item_id))
    @item.transact = true
    @transact = Transact.new(transact_params)
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
    params.require(:transact).permit(:evaluat,:confirmat,:body,:item_id)
  end
end
