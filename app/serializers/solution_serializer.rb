class SolutionSerializer < ActiveModel::Serializer
  attributes :id, :description, :immediate_action, :first_step, :when
  belongs_to :thought
  # belongs_to :user, through: :thought
end
