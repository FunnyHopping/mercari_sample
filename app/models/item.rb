class Item < ApplicationRecord
  belongs_to :saler, class_name: "User"
  # belongs_to :buyer, class_name: "User"
  belongs_to :category
  # mount_uploaders :images, ImageUploader
  has_many_attached :images
  belongs_to :postage

  enum size: {
    "---": nil,
    "XXS以下": 0,
    "XS(SS)": 1,
    "S": 2,
    "M": 3,
    "L": 4,
    "XL(LL)": 5,
    "2XL(3L)": 6,
    "3XL(4L)": 7,
    "4XL(5L)以上": 8,
    "FREE_SIZE": 9,
  },  _prefix: true

  enum condition: {
    "---": nil,
    "新品、未使用": 0,
    "未使用に近い": 1,
    "目立った傷や汚れなし": 2,
    "やや傷や汚れあり": 3,
    "傷や汚れあり": 4,
    "全体的に状態が悪い": 5,
  }, _prefix: true
  
  enum postage: {
    "---": nil,
    "送料込み(出品者負担)": 0,
    "着払い(購入者負担)": 1,
  }, _prefix: true

  enum shipping_date: {
    "---": nil,
    "1~2日で発送": 0,
    "2~3日で発送": 1,
    "4~7日で発送": 2,
  }, _prefix: true
end
