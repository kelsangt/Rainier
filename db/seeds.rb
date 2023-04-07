require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
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
    legoCrane = Product.create!(name: "Lego Mobile Crane", category: "Toys & Games", price: 39.99, description: "Mobile Crane Toy")
    lotr = Product.create!(name: "Lord of the Rings", category: "Books", price: 24.99, description: "Enter a fantasy world with every page of this book!")
    ps5 = Product.create!(name: "Playstation 5", category: "Toys & Games", price: 499.99, description: "A fun gaming console")


    capybaraPlush.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/capybara_plush.jpeg"), filename: "capybara_plush.jpeg")
    ps5.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/ps5.jpeg"), filename: "ps5.jpeg")
    legoCrane.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/legoCrane.jpg"), filename: "legoCrane.jpg")
    lotr.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/lotr.jpeg"), filename: "lotr.jpeg")
  
    puts "Done!"
  # end