@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :name, :category, :price, :description
        json.photoUrl url_for(product.image) if product.image.attached?
        json.reviews do 
            if product.reviews 
                product.reviews.each do |review|
                    json.set! review.id do 
                        json.extract! review, :id, :title, :body, :rating, :user_id, :product_id 
                        json.extract! review.user, :id, :email, :name, :created_at, :updated_at
                    end 
                end 
            end 
        end         
    end
end 

