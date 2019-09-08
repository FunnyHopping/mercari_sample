# DB設計

[![Image from Gyazo](https://i.gyazo.com/dc9fa6bfe26c282e45ffe8f597e75c3a.png)](https://gyazo.com/dc9fa6bfe26c282e45ffe8f597e75c3a)

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
|family_name|string|null: false|
|first_name|string|null: false|
|family_name_kana|string|null: false|
|first_name_kana|string|null: false|
|birth_day|string|null: false|
|phone_num|string|unique: true|
|profile|text||
|image|string||

### Association
- has_many :items, dependent: :destroy
- has_many :addresses, dependent: :destroy
- has_many :cards, dependent: :destroy
- has_many :comments, dependent: :destroy
- has_many :comment_items, through: :comments, source: :item
- has_many :nices, dependent: destroy
- has_many :nice_items, through: :nices, source: :item
- has_many :active_ratings, class_name: "Rating", foreign_key: "buyer_id", dependent: :destroy
- has_many :ratings, through: :active_ratings, source: :buyer
- has_many :passive_ratings, class_name: "Rating", foreign_key: "seller_id", dependent: :destroy
- has_many :raters, through: :passive_ratings, source: :seller

---

## itemsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|price|integer|null: false, index: true|
|image|string|null :false|
|introduct|text|null: false, index: true|
|size|integer|enum, index: true|
|condition|integer|enum, null: false, default: 0, index: true|
|postage|boolean|default: false, index: true|
|shipping_date|integer|enum, null: false, default: 0|
|sale_status|integer|enum, null: false, default: 0|
|user_id|references|null: false, foreign_key: true|
|brand_id|references|null: false, foreign_key: true|
|prefecture_id|references|null: false, foreign_key: true|

### Association
- has_many :comments, dependent: :destroy
- has_many :comment_users, through: :comments, source: :user
- has_many :nices, dependent: :destroy
- has_many :nice_users, through: :nices, source: :user
- belongs_to :user
- belongs_to :prefecture
- belongs_to :category
- belongs_to :brand

---

## addressesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|city|string|null: false|
|street_num|string|null: false|
|building|string||
|user_id|references|null: false, foreign_key: true|
|prefecture_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :prefecture

---

## prefecturesテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :addresses
- has_many :items

---

## cardsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|customer_id|references|null: false, foreign_key: true|
|card_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user

---

## categorysテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|ancestry|integer|index: true|

### Association
- has_many :items
- has_ancestry
---

## brandsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Association
- has_many :items

---

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|user_id|references|null: false, foreign_key: true|
item_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :item

---

## nicesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
item_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :item

---

## ratingsテーブル
|Column|Type|Options|
|------|----|-------|
|good|boolean|default: false|
|normal|boolean|default: false|
|bad|boolean|dafault: false|
|seller_id|references|null: false, foreign_key: true|
|buyer_id|references|null: false, foreign_key: true|

### Association
- belongs_to :seller, class_name: "User"
- belongs_to :buyer, class_name: "User"