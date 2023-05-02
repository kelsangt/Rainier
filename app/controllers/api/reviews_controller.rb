class Api::ReviewsController < ApplicationController
    def index 
        @reviews = product.reviews 
        render :index
    end 
    
    def create 
        @review = Review.new(review_params)
        if @review.save 
            render :show
        else 
            render json: @review.errors.full_messages, status: unprocessable_entity
        end
    end 

    def destroy 
        @review = Review.find(params[:id])
        if @review 
            @review.delete 
            head :no_content 
        end
    end 

    def update 
        @review = Review.find(params[:id])
        if @review 
            if @review.update(cart_item_params)
                render :show
            else 
                render json: @review.errors.full_messages, status: unprocessable_entity
            end 
        end
    end

    def review_params 
        params.require(:review).permit(:id, :title, :body, :rating, :user_id, :product_id)
    end
end
