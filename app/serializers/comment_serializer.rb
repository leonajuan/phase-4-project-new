class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :song_id, :comment

  belongs_to :user
end
