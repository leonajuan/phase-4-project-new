class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password, :image
end
