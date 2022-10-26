class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :artist, :album, :album_cover
end
