class CreateRelations < ActiveRecord::Migration[5.2]
  def change
    create_table :relations do |t|
      t.integer :brand_id
      t.integer :brand_group_id
      t.timestamps
    end
  end
end
