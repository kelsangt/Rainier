class Product < ApplicationRecord
    validates :name, :category, :description, :price, presence: true 


    has_one_attached :image 
end
