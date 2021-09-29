class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :age, :avatar_image
  # has_many :solutions, through: :thoughts
  has_many :thoughts, optional: true

end
