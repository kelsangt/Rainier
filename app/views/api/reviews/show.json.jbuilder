# json.review do 
#     json.extract! @review, :id, :title, :body, :rating, :user_id, :product_id 
#     json.extract! @review.user, :id, :email, :name, :created_at, :updated_at
# end 