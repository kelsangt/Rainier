@cart_items.each do |cart_item|
    json.set! cart_item.id do 
        json.extract! cart_item, :id, :product_quantity, :user_id, :product_id
    end 
end