class Transact < ApplicationRecord
  belongs_to :give, class_name: 'User'
  belongs_to :take, class_name: 'User'
end
