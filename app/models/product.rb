class Product < ApplicationRecord
    validates :name, :category, :description, :price, presence: true 


    has_one_attached :image 

    has_many :cart_items, 
        primary_key: :id, 
        foreign_key: :product_id, 
        class_name: :CartItem, 
        dependent: :destroy
end
