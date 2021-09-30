class SolutionSerializer < ActiveModel::Serializer
  attributes :id, :description, :immediate_action, :first_step, :when, :thought_id
  belongs_to :thought
  # belongs_to :user, through: :thought
end
