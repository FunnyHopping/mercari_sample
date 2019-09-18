class OrdercommentsController < ApplicationController
  def create
    @comment = Ordercomment.new(comment_params)
    @comments = Ordercomment.where(order_id: comment_params[:order_id])
    respond_to do |format|
      if @comment.save
        format.html
        format.js
      else
        format.html
        format.js
      end
    end
  end

  private
  def comment_params
    params.require(:ordercomment).permit(:comment,:order_id).merge(user_id: current_user.id)
  end
end
