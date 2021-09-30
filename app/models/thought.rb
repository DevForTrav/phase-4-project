class Thought < ApplicationRecord
  belongs_to :user
  has_one :solution


  validates :title, presence: true


end
