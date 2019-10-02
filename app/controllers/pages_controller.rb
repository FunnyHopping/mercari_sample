class PagesController < ApplicationController
  def index
    @parents = Category.all.order("id ASC").limit(13)
    parent_category = []
    child_category  = []
    baby_category   = []
    @parents.each do |parent|
      parent_category.push(parent.name)
    end
    gon.parent_category = parent_category
    gon.child_category

    @items = Item.order("created_at DESC").limit(10)
    @parents = Category.where(ancestry: nil)
  end

  def show
    @user = User.find(params[:id])
    @transaction_items = @user.buyed_items.where(transact: false)
    @transacted_items  = @user.buyed_items.where(transact: true)
  end

  def new
    @children = Category.find(params[:parent_id]).children
    respond_to do |format|
      format.html
      format.json
    end
  end
end
