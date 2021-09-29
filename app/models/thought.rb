class Thought < ApplicationRecord
  belongs_to :user
  has_one :solution

end
