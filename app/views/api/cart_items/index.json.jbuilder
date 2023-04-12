products = []

json.cartItems do 
    if @cart_items 
        @cart_items.each do |cart_item|
            products.push(cart_item.product)
            json.set! cart_item.id do 
                json.extract! cart_item, :id, :product_quantity, :user_id, :product_id
            end 
        end
    end
end

json.products do 
    products.each do |product|
        json.set! product.id do 
            json.extract! product, :id, :name, :category, :price, :description
            json.photoUrl url_for(product.image) if product.image.attached?    
        end
    end
end