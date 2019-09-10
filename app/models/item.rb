class Item < ApplicationRecord
  belongs_to :saler, class_name: "User"
  belongs_to :buyer, class_name: "User"

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
    FREE_SIZE: 10
  },  _prefix: true
end
