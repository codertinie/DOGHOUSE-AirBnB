class ReviewsController < ApplicationController
  skip_before_action :authorize, only: [:create]
  def index
    render json: Review.all
  end

  def show
    review = Review.find_by(id: params[:id])
    if review
      render json: review
    else
      render json: {error: "Review not found"}, status: :not_found
    end
  end

  def create
    if params[:dog_house_id]
      dog_house=DogHouse.find(params[:dog_house_id])
      reviews=dog_house.reviews
      reviews.create!(comment:params[:comment], user_id:params[:user_id])
    else
      reviews=Review.all
    end
    render json: reviews, status: :created
  end

  def destroy
    review = Review.find_by(id: params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:comment, :star_rating, :user_id, :dog_house_id)
  end
end
