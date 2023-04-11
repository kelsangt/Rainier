class AlterCartItems < ActiveRecord::Migration[7.0]
  def change
    change_column_null :cart_items, :product_quantity, false
  end
end
