class User < ActiveRecord::Base
	has_secure_password
	validates :name, presence: true
	validates :password, length: { minimum: 8 }
	has_many :reviews
	has_many :products, through: :reviews
end
