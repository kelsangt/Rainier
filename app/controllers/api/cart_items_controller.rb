class Api::CartItemsController < ApplicationController
    def index 
        @cart_items = current_user.cart_items 
        render 'api/cart_items/index'
    end 


    def create 
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save 
            # 'api/cart_items/index'
        else 
            render json: @cart_item.errors.full_messages, status: unprocessable_entity
        end
    end 
    
    def destroy 
        @cart_item = CartItem.find(params[:id])
        if @cart_item 
            @cart_item.delete 
            head :no_content 
        end
    end 

    def update 
        if @cart_item.update(cart_item_params)
            render :index
        else 
            render json: @cart_item.errors.full_messages, status: unprocessable_entity
        end 
    end

    def cart_item_params 
        params.require(:cart_item).permit(:id, :product_quantity, :user_id, :product_id)
    end

end
