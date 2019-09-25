class User < ApplicationRecord
  #Include default devise modules. Others available are:
  #:confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :omniauthable,omniauth_providers: [:facebook, :google_oauth2]
  has_one :address
  has_many :cards

  has_many :buyed_items, foreign_key: "buyer_id", class_name: "Item"
  has_many :saling_items, -> {where("buyer_id is NULL")}, foreign_key: "saler_id", class_name: "Item"
  has_many :sold_items, -> { where("buyer_id is not NULL")}, foreign_key: "saler_id", class_name: "Item"

  has_many :ordercomments

  has_many :nices
  has_many :nice_items, through: :nices, source: :item

  has_many :give_tranascts, class_name: "Transact", foreign_key: :give_id
  has_many :givers, through: :give_tranascts, source: :give

  has_many :take_tranascts, class_name: "Transact", foreign_key: :take_id
  has_many :takers, through: :take_tranascts, source: :take

  has_many :comments
end
