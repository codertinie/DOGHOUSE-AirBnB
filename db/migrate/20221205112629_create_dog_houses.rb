class CreateDogHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :dog_houses do |t|
      t.string :name
      t.string :location
      t.integer :price
      t.string :image_url

      t.timestamps
    end
  end
end
