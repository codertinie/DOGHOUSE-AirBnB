class DogHousesController < ApplicationController

  def index
    render json: DogHouse.all
  end
end
