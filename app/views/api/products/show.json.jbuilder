json.set! @product.id do 
    json.extract! @product, :name, :category, :price, :description
end