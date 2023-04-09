class Api::ProductsController < ApplicationController 
    def index 
        @products = Product.all 
        render 'api/products/index'
    end

    def show 
        @product = Product.find_by(id: params[:id])
        if @product 
            render 'api/products/show'
        else 
            render json: { errors: @product.errors.full_messages }, status: :unprocessable_entity
        end 
    end 

end 