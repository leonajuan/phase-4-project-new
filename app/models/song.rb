class Song < ApplicationRecord
  has_many :comments 
  has_many :users, through: :comments

  validates :title, presence: true 
  validates :artist, presence: true 
  validates :album, presence: true
end
