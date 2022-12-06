class DogHousesController < ApplicationController

  def index
    render json: DogHouse.all
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
