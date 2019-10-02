class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :post_num,              null: false
      t.integer :prefecture_id,         null: false
      t.string  :city,                  null: false
      t.string  :street_num,            null: false
      t.string  :building
      t.references :user,            foreign_key: true
      t.timestamps
    end
  end
end
