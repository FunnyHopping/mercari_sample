class ItemsController < ApplicationController

  def new
    @item = Item.new
    @parents = Category.all.order("id ASC").limit(13)
    @postages = Postage.all.order("id ASC").limit(2)
  end

  def create
    @item = Item.new(item_params)
    @item.update(image_params)
    @item.save!
    @order = Order.new(item_id: @item.id)
    @order.save!
    redirect_to controller: 'pages', action: 'index'
  end

  def index
    @search_items = Item.order("created_at DESC").ransack(params[:q])
    @items = @search_items.result(distinct: true).page(params[:page]).per(1)
  end

  def show
    @item = Item.find(params[:id])
    @user = User.find(@item.saler_id)
    @comments = @item.comments.order('created_at ASC')
  end

  def edit
    @item = Item.find(params[:id])
    @parents = Category.all.order("id ASC").limit(13)
    @postages = Postage.all.order("id ASC").limit(2)
    gon.item = @item
    img_array = []
    @item.images.each do |image|
      img_array.push(image)
    end
    gon.img_array = img_array
  end

  def update
    @item = Item.find(params[:id])
      if num_params[:num] != nil
        num_params[:num].each do |n|
          n = n.to_i
          @item.images[n].purge
        end
      end
      if image_params[:images] != nil
        @item.update(image_params)
      end
      @item.update(item_params)
      redirect_to item_path
  end

  def destroy
    item = Item.find(params[:id])
    item.destroy if item.saler_id == current_user.id
    redirect_to root_path
  end

  private
  def item_params
    params.require(:item).permit(:name,
    :price, :category_id, :introduct, :size,
    :condition, :postage_id, :shipping_date,
    :sale_status, :prefecture_id, :brand_id).merge(saler_id: current_user.id)
  end

  def image_params
    params.require(:new_images).permit(images: [])
  end
  
  def num_params
    params.require(:new_images).permit(num: [])
  end
end
