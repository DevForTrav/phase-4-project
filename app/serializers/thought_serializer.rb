class ThoughtSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_id, :occurences
  belongs_to :user
  has_one :solution
end
