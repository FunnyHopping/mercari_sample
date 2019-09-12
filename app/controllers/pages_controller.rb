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
  end
end
