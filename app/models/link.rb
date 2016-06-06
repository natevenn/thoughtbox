class Link < ActiveRecord::Base
  belongs_to :user
  validate :url, :url => true
end
