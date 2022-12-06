class ReviewsController < ApplicationController


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
    review = Review.create(review_params)
    render json: review, status: :created
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
