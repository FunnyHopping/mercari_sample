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
  end

  def show
    @transaction_items = current_user.sold_items.where(transact: false)
  end
end
