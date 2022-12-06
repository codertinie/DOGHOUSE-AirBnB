class DogHousesController < ApplicationController

  def index
    render json: DogHouse.all, include: ['reviews']
  end
end
