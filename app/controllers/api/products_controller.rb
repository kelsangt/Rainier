class Api::ProductsController < ApplicationController 
    def index 
        @products = Product.all 
        render 'api/products/index'
    end

    def show 
        @product = Product.find_by(id: params[:id])
        if @product 
            render '/api/products/show'
        else 
            render json: { product: nil }
        end 
    end 

    def search 
        @products = Product.where("lower(name) LIKE?", "%#{params[:q]}%")
        render :search
    end
end 