class CreateSolutions < ActiveRecord::Migration[6.1]
  def change
    create_table :solutions do |t|
      t.references :thought, null: false, foreign_key: true
      t.string :description
      t.boolean :immediate_action
      t.string :first_step
      t.datetime :when

      t.timestamps
    end
  end
end
