class CategoriesController < ApplicationController

  def get_child_category
    respond_to do |format|
      format.html
      format.json do
        @childs = Category.find(params[:parent_id]).children
      end
    end
  end

  def get_grandchild_category
    respond_to do |format|
      format.html
      format.json do
        @grandchilds = Category.find(params[:child_id]).children
      end
    end
  end
end
