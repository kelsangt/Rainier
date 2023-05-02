json.review do 
    json.extract! @review, :id, :title, :body, :rating, :user_id, :product_id 
end 