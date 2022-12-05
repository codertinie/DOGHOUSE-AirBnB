class DogHouse < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :price, inclusion: {in: 1..2000}
end
