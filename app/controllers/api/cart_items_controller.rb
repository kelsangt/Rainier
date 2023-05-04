class Api::CartItemsController < ApplicationController

    wrap_parameters include: CartItem.attribute_names + ['productQuantity', 'userId', 'productId']

    def index 
        @cart_items = current_user.cart_items 
        render :index
    end 


    def create 
        @cart_item = CartItem.new(cart_item_params)
        if @cart_item.save 
            render :show
        else 
            render json: @cart_item.errors.full_messages, status: :unprocessable_entity
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
        @cart_item = CartItem.find(params[:id])
        if @cart_item 
            if @cart_item.update(cart_item_params)
                render :show
            else 
                render json: @cart_item.errors.full_messages, status: unprocessable_entity
            end 
        end
    end

    def cart_item_params 
        params.require(:cart_item).permit(:id, :product_quantity, :user_id, :product_id)
    end

end
