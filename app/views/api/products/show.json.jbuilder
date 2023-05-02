json.extract! @product, :id, :name, :category, :price, :description
json.photoUrl url_for(@product.image) if @product.image.attached?    


# json.product do 
#     json.extract! @product, :id, :name, :category, :price, :description
# end

json.reviews do 
    if @reviews
        @reviews.each do |review|
            json.set! review.id do 
                json.extract! review, :id, :title, :body, :rating, :created_at 
            end
        end
    end
end 