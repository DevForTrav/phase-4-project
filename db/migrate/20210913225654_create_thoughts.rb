class CreateThoughts < ActiveRecord::Migration[6.1]
  def change
    create_table :thoughts do |t|
      t.string :title
      t.string :description
      t.references :user, null: false, foreign_key: true
      t.integer :occurences

      t.timestamps
    end
  end
end
