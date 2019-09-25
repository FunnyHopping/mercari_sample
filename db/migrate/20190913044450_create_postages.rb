class CreatePostages < ActiveRecord::Migration[5.2]
  def change
    create_table :postages do |t|
      t.string  :name, index:true
      t.string  :ancestry, index: true
      t.timestamps
    end
  end
end
