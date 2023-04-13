json.search do 
    @products.each do |product|
        json.set! product.id do 
            json.extract! product, :id, :name, :category, :price, :description
            json.photoUrl url_for(product.image) if product.image.attached?         
        end
    end 
end