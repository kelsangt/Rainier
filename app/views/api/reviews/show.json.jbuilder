json.review do 
    json.extract! @review, :id, :title, :body, :rating, :user_id, :product_id 
    json.extract! @review.user, :email, :name, :created_at, :updated_at
    json.product do 
        json.extract! @review.product, :name, :category, :price, :description
        json.photoUrl url_for(@review.product.image) if @review.product.image.attached?  
    end 
end 