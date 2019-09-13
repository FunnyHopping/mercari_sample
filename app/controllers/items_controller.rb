class ItemsController < ApplicationController
  
  def index
    @parents = Category.all.order("id ASC").limit(13)
    
  end

  def new
    @item = Item.new
    @parents = Category.all.order("id ASC").limit(13)
    
  end

  def create
    @item = Item.new(item_params)
    @item.save!
  end

  def index
    @search_items = Item.order("created_at DESC").ransack(params[:q])
    @items = @search_items.result(distinct: true)
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
    :condition, :postage, :shipping_date,
    :sale_status, :prefecture_id,images: []).merge(saler_id: current_user.id)
  end
end
