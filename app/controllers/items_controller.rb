class ItemsController < ApplicationController
  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    @item.save!
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def item_params
    params.require(:item).permit(:name,
    :price, :introduct, :size,
    :condition, :postage, :shipping_date,
    :sale_status, :prefecture_id,images: []).merge(saler_id: current_user.id)
  end
end
