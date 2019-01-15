class User < ActiveRecord::Base
  has_one :highscore
  has_secure_password
  validates :username, :presence => true, :uniqueness => true
end
