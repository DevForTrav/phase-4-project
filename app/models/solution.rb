class Solution < ApplicationRecord
    belongs_to :thought
    # belongs_to :user, through: :thought
end
