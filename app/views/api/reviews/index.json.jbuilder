json.reviews do 
    if @reviews 
        @reviews.each do |review|
            json.set! review.id do 
                json.extract! review, :id, :title, :body, :rating, :user_id, :product_id 
            end 
        end 
    end 
end 