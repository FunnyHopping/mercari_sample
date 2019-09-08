class AddColumnToUser < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :provider, :string 
    add_column :users, :uid,      :string
  end

  def end
    remove_column :users, :provider, :string 
    remove_column :users, :uid,      :string
  end
end
