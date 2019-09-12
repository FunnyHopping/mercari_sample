class Item < ApplicationRecord
  belongs_to :saler, class_name: "User"
  # belongs_to :buyer, class_name: "User"
  # mount_uploaders :images, ImageUploader
  has_many_attached :images

  enum size: {
    default: 0,
    XXS: 1,
    XS_SS: 2,
    S: 3,
    M: 4,
    L: 5,
    XL_LL: 6,
    XXL_3L: 7,
    XXXL_4L: 8,
    XXXXL_5L: 9,
    FREE_SIZE: 10,
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
    one_two_days: 0,
    two_three_days: 1,
    four_seven_days: 2,
  }, _prefix: true
end
