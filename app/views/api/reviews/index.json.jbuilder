# json.reviews do 
#     if @reviews 
#         @reviews.each do |review|
#             json.set! review.id do 
#                 json.extract! review, :id, :title, :body, :rating, :user_id, :product_id 
#                 json.extract! review.user, :id, :email, :name, :created_at, :updated_at
#             end 
#         end 
#     end 
# end 