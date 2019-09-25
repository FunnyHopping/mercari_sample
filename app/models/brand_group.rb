class BrandGroup < ApplicationRecord
  has_many :items
  has_ancestry
  has_many :brands, through: :relations
  has_many :relations
end
