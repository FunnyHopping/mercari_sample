class BrandsController < ApplicationController

  def search_brand
    @brands = Brand.all.where('name LIKE ?', "%#{params[:keyword]}%")
    respond_to do |format|
      format.json
    end
  end
end
