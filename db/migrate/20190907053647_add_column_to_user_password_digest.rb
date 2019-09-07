class AddColumnToUserPasswordDigest < ActiveRecord::Migration[5.2]
  def up
    add_column :users, :password_digest, :string, null: false
  end

  def down
    remove_column :users, :password_digest, :string, null: false
  end
end
