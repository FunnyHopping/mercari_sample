class OrdersController < ApplicationController
  def show
    @item = Order.find(params[:id]).item
    @transact = Transact.new()
    @comment = Ordercomment.new() 
    @address = current_user.address
    @comments = Ordercomment.where(order_id: @item.order.id)
  end
end
