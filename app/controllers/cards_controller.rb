class CardsController < ApplicationController
  def new
  end

  def index
  end
  
  def edit
    card = Card.where(user_id: params[:id]).first
    Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
    customer = Payjp::Customer.retrieve(card.customer_id)
    @default_card_information = customer.cards.retrieve(card.card_id)
  end
  
  def destroy
    card = Card.where(user_id: current_user.id).first
    if card.blank?
    else
      Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
      customer = Payjp::Customer.retrieve(card.customer_id)
      customer.delete
      card.delete
    end
      redirect_to cards_path
  end

  def create
    session[:payjp_token] = params["payjp-token"]
    customer = Payjp::Customer.create(
      card: session[:payjp_token],
      metadata: {user_id: current_user.id})
      @card = Card.new(user_id: current_user.id, customer_id: customer.id, card_id: customer.default_card)
      if @card.save
        redirect_to edit_card_path(current_user.id)
      else
        render :new
      end
  end
end
