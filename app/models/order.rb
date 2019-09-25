class Order < ApplicationRecord
  has_many :ordercomments
  belongs_to :item
end
