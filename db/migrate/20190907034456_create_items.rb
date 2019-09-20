class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string  :name,               null: false
      t.integer :price,              null: false
      t.text    :introduct,          null: false
      t.integer :size
      t.integer :brand_id
      t.integer :condition,          null: false
      t.integer :postage_id,         null: false
      t.integer :prefecture_id,      null: false
      t.integer :shipping_date,      null: false
      t.integer :saler_id
      t.integer :buyer_id
      t.integer :category_id,        null: false
      t.boolean :transact,        default: false
      t.timestamps
    end
  end
end
