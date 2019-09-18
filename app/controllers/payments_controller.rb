class PaymentsController < ApplicationController
  require 'payjp'
  def new
    @item = Item.find(params[:item_id])
    @address = current_user.address
    card = Card.where(user_id: current_user.id).first
    Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
    customer = Payjp::Customer.retrieve(card.customer_id)
    @default_card_information = customer.cards.retrieve(card.card_id)
  end
  
  def create
    @item = Item.find(params[:item_id])
    @item.buyer_id = current_user.id
    puts @item
    if @item.save
      begin
        card = Card.where(user_id: current_user.id).first
        Payjp.api_key = ENV['PAYJP_PRIVATE_KEY']
        Payjp::Charge.create(
        :amount => @item.price,
        :customer => card.customer_id, 
        :currency => 'jpy', 
        )
      rescue => e
        raise ActiveRecord::Rollback
        render :new
      end
      redirect_to payment_path(@item.id)
    else
      render :new
    end
  end

  def show
    @item =  Item.find(params[:id])
    @address = current_user.address
    card = Card.where(user_id: current_user.id).first
    Payjp.api_key = ENV["PAYJP_PRIVATE_KEY"]
    customer = Payjp::Customer.retrieve(card.customer_id)
    @default_card_information = customer.cards.retrieve(card.card_id)
  end
end
