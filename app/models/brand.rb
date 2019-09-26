class Brand < ApplicationRecord
  has_many :items
  has_many :brand_groups, through: :relations
  has_many :relations
end
