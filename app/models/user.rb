class User < ApplicationRecord
    has_many :thoughts
    # has_many :solutions, through: :thoughts

    has_secure_password
end
