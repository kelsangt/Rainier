json.cartItem do
    json.extract! @cart_item, :id, :product_quantity, :user_id, :product_id
end

json.product do
    json.extract! @cart_item.product, :id, :name, :category, :price, :description
    json.photoUrl url_for(@cart_item.product.image) if @cart_item.product.image.attached?
end