class CardsController < ApplicationController
  def new
  end

  def edit
    card = Card.where(user_id: params[:id]).first
    Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
    customer = Payjp::Customer.retrieve(card.customer_id)
    @default_card_information = customer.cards.retrieve(card.card_id)
  end
  
  def destroy
  end

  def create
    customer = Payjp::Customer.create(
      card: session[:payjp_token],
      metadata: {user_id: current_user.id})
      @card = Card.new(user_id: current_user.id, customer_id: customer.id, card_id: customer.default_card)
      if @card.save
        redirect_to root_path
      else
        render :new
      end
  end
end
