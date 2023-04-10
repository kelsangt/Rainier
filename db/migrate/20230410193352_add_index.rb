class AddIndex < ActiveRecord::Migration[7.0]
  def change
    add_index :cart_items, [:user_id, :product_id], unique: true
  end
end
