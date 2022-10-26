class SongWithCommentSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :album, :album_cover

  has_many :comments
end