class RemoveReadStatusFromLinks < ActiveRecord::Migration
  def change
    remove_column :links, :read_status, :string
  end
end
