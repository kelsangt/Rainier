@products.each do |product|
    json.set! product.id do 
        json.extract! product, :name, :category, :price, :description
        json.photoUrl url_for(product.image) if product.image.attached?         
    end
end 