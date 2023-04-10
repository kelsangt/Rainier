class CartItem < ApplicationRecord
    validates :product_quantity, :user_id, :product_id, presence: true 
    
end