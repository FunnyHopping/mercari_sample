class PostagesController < ApplicationController
  def get_postage_plan
    respond_to do |format|
      format.html
      format.json do
        @plans = Postage.find(params[:parent_id]).children
      end
    end
  end
end
