# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    User.destroy_all
    Product.destroy_all
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
  
    puts "Generating users..."
    User.create!(
      name: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
  
    10.times do 
      User.create!({
        name: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    puts "Creating Products"
    capybaraPlush = Product.create!(name: "Capybara Plush", category: "Toys & Games", price: 19.99, description: "The best plush in the world!")
    legoSet = Product.create!(name: "Lego set", category: "Toys & Games", price: 49.99, description: "Building blocks that are fun")
    underArmourSneakers = Product.create!(name: "Underarmour Sneakers", category: "Clothing", price: 149.99, description: "Very comfortable white sneakers")
  
    puts "Done!"
  end