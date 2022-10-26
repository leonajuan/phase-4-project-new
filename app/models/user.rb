class User < ApplicationRecord
  has_many :comments 
  has_many :songs, through: :comments

  has_secure_password

  validates :email, uniqueness: true
  validates :name, presence: true
  validates :password, presence: true
end
