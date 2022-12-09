class DoghousewithreviewsSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :image_url

  has_many :reviews
end
