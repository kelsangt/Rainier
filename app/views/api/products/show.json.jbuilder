json.extract! @product, :id, :name, :category, :price, :description
json.photoUrl url_for(@product.image) if @product.image.attached?    
