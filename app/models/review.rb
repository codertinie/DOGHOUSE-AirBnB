class Review < ApplicationRecord
  belongs_to :user
  belongs_to :dog_house
end
