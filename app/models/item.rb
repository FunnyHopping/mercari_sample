class Item < ApplicationRecord
  belongs_to :saler, class_name: "User"
  # belongs_to :buyer, class_name: "User"
  belongs_to :category
  mount_uploaders :images, ImageUploader

  enum size: {
    "---": nil,
    XXS: 0,
    XS_SS: 1,
    S: 2,
    M: 3,
    L: 4,
    XL_LL: 5,
    XXL_3L: 6,
    XXXL_4L: 7,
    XXXXL_5L: 8,
    FREE_SIZE: 9,
  },  _prefix: true

  enum condition:{
    default: 0,
    new_no_use: 1,
    almost_no_use: 2,
    almost_no_dirt: 3,
    a_little_dirt: 4,
    dirt: 5,
    bad_condition: 6,
  }, _prefix: true

  enum shipping_date: {
    default: 0,
    one_two_days: 1,
    two_three_days: 2,
    four_seven_days: 3,
  }, _prefix: true
end
