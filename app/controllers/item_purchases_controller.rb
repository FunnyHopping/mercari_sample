class ItemPurchasesController < ApplicationController
  require 'payjp'
  
  def new
    @item = Item.find(1)
    @address = current_user.address
    card = Card.where(user_id: current_user.id).first
    Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
    customer = Payjp::Customer.retrieve(card.customer_id)
    @default_card_information = customer.cards.retrieve(card.card_id)
  end

  def create
    @item = Item.find(1)
    @item.buyer_id = current_user.id
    if @item.update(buyer_id: current_user.id)
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def pay
    card = Card.where(user_id: current_user.id).first
    Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
    Payjp::Charge.create(
    :amount => @item.price,
    :customer => card.customer_id, 
    :currency => 'jpy', 
    )
    rescue => e
      self.errors.add(:token, 'charge error')
      raise ActiveRecord::Rollback
  end

end
