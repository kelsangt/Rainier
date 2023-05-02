class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.references :product, foreign_key: true, null: false 
      t.references :user, foreign_key: true, null: false
      t.timestamps
    end
    add_index :reviews, [:user_id, :product_id], unique: true
  end
end
