class ItemsController < ApplicationController
  def index
    @parents = Category.all.order("id ASC").limit(13)
    
  end

  def new
    @item = Item.new
    @parents = Category.all.order("id ASC").limit(13)
    @postages = Postage.all.order("id ASC").limit(2)
  end

  def create
    @item = Item.new(item_params)
    @item.save
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
    :price, :category_id, :introduct, :size,
    :condition, :postage_id, :shipping_date,
    :sale_status, :prefecture_id, images: []).merge(saler_id: current_user.id)
  end
end
