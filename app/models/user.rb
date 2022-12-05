class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :dog_houses, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :email, presence:true, uniqueness: true
end
