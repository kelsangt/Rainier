class Review < ApplicationRecord
    validates :title, :body, :rating, :product_id, :user_id, presence: true

    belongs_to :product, 
        primary_key: :id,
        foreign_key: :product_id,
        class_name: :Product 
    
    belongs_to :user, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :User 
end
