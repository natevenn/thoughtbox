class AddReadStatusToLinks < ActiveRecord::Migration
  def change
    add_column :links, :read_status, :string
  end
end
