class Comment < ApplicationRecord
  belongs_to :user 
  belongs_to :song

  validates :comment, length: { in: 10..250 }
end
