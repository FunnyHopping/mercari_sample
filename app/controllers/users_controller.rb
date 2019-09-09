class UsersController < ApplicationController
  def index
    if user_signed_in?
      card = Card.where(user_id: current_user.id).first
      Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
      customer = Payjp::Customer.retrieve(card.customer_id)
      @default_card_information = customer.cards.retrieve(card.card_id)
    end
  end

  def new
  end

  def show
  end

  def edit
  end

  def destroy
    sign_out @user
  end

  def update
  end

end
