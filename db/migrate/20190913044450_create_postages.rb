class CreatePostages < ActiveRecord::Migration[5.2]
  def change
    create_table :postages do |t|
      t.string  :name
      t.string  :ancestry, :index
      t.timestamps
    end
  end
end
