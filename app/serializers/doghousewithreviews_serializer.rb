class DoghousewithreviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price

  has_many :reviews
end
