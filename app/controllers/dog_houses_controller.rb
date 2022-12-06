class DogHousesController < ApplicationController
  skip_before_action :authorize, only: [:index]
  # skip_before_action :verify_authenticity_token

  def index
    render json: DogHouse.all, include: ['reviews']
  end

  def show
    doghouse = DogHouse.find_by(id: params[:id])
    if doghouse
      render json: doghouse
    else
      render json: {error: "DogHouse not found"}, status: :not_found
    end
  end
end
