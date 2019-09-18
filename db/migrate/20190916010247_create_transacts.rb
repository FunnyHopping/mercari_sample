class CreateTransacts < ActiveRecord::Migration[5.2]
  def change
    create_table :transacts do |t|
      t.string      :evaluat,   null: false
      t.boolean     :confirmat, default: false
      t.text        :body
      t.references  :item,            foreign_key: true
      t.timestamps
    end
  end
end
