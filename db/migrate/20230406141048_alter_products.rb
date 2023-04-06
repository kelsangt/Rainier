class AlterProducts < ActiveRecord::Migration[7.0]
  def change
    change_column_null :products, :name, false
    change_column_null :products, :category, false
    change_column_null :products, :description, false
    change_column_null :products, :price, false
  end
end
