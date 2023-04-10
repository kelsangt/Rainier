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

    capybaraPlush = Product.create!(
      name: "Capybara Stuffed Animal,Realistic Capybara Plush Lovely 7'' Stuffed Capybara, Capybara Gifts for Kids Adults", 
      category: "toysgames", 
      price: 15.99, 
      description: "Soft Material ---This lovely capybara stuffed animal is made of plush and PP cotton, which makes the doll soft and smooth to the touch, fluffy and elastic, strong resilience and not easy to deform.
      Capybara Gifts ---This stuffed capybara has really cute design and excellent workmanship, it's can be a great gift for your friends, family or colleagues,and your lovely girls boys will definitely love this 7'' small stuffed animals.
      Lovely Design --- This capybara plush has really adorable realistic design, with cute facial expression, 3d design and comfortable fabric, this capybara plushie is suitable for all ages.
      Exquisite Workmanship --- This plush capybara has meticulous stitching and perfect detail processing, textured and popular, great dragons toys as as decoration and gift.
      Home Decoration --- Except as a great gift, this capybara plush is also suitable for home decoration, you can put it on the sofa,car,patio and car; or as party decorations for Christmas parties, New Year parties, shopping mall activities, family dinners etc"
    )

    legoCrane = Product.create!(
      name: "LEGO City Great Vehicles Mobile Crane Truck Toy, 60324 Construction Vehicle Model Building Kit with Tool Toys", 
      category: "toysgames", 
      price: 39.99, 
      description: "This LEGO construction vehicle building set features a mobile toy crane with workable legs, boom and winch, on top of a 6-wheeled toy truck.
      After driving the truck toy into position, kids can lower the crane's support legs, rotate and extend the boom and raise and lower the winch.
      Includes driver and crane-operator LEGO minifigures, and toy accessories - a wrench, walkie-talkie and 2 safety helmets for realistic play.
      The included LEGO City Road Plate can be winched into position by the crane toy, and can be easily connected to other LEGO City building toys.
      Building a LEGO city has never been so much fun; when play is done, kids can secure the toy winch hook and head out to the next job.
      The free LEGO Building Instructions app for smartphones & tablets lets kids zoom, rotate and view the model from all angles as they build.
      LEGO City Great Vehicles building sets make great birthday presents or any-time treats for 7 plus year old boys and girls"
    )

    lotr = Product.create!(
      name: "The Lord of the Rings: 50th Anniversary, One Vol. Edition", 
      category: "books", 
      price: 24.99, 
      description: "One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.
      In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.
      From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion.
      When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom.
      The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.
      This edition includes the fiftieth-anniversary fully corrected text setting and an extensive index"
    )

    ps5 = Product.create!(
      name: "Playstation 5", 
      category: "toysgames", 
      price: 499.99, 
      description: "Model Number CFI-1215A01X.
      Stunning Games - Marvel at incredible graphics and experience new PS5 features.
      Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.
      Lightning Speed - Harness the power of a custom CPU, GPU, and SSD with Integrated I/O that rewrite the rules of what a PlayStation console can do"
    )

    lgMonitor = Product.create!(
      name: "LG FHD 27-Inch Computer Monitor 27MK600M-B, IPS with AMD FreeSync, Black",
      category: "electronics",
      price: 199.99,
      description: "Versatile, color-calibrated monitor delivers shorter response times, improved color reproduction, and wider viewing angles with IPS (In-Plane Switching) technology.
      A sleek addition to any desktop, this monitor's ultra-thin bezel creates a virtually borderless visual experience to reduce distractions from the on-screen image.
      With supported video cards such as the AMD Radeon series, AMD FreeSync manages refresh rate, reducing screen tearing, flicker, and stuttering for an effortlessly smooth gaming experience.
      Reader Mode provides optimal conditions for reading by reducing blue light to lessen eye fatigue. Make adjustments via On-Screen control with a few clicks of your mouse.
      Dynamic Action Sync helps reduce input lag to help you respond to on-screen action quickly. Black Stabilizer dynamically brightens dark scenes to help you find enemies in the dark. Enhance your accuracy in firefights with the Crosshair feature.
      60 hertz"
    )

    lgTv = Product.create!(
      name: "LG C2 Series 42-Inch Class OLED evo Smart TV OLED42C2PUA, 2022 - AI-Powered 4K TV, Alexa Built-in",
      category: "electronics",
      price: 999.99,
      description: "Experience amazing, beautiful picture quality with infinite contrast, deep black, and over a billion colors, now even brighter*, thanks to LG's 8 million self-lit OLED pixels.
      Engineered exclusively for LG, the α9 Gen 5 AI Processor 4K adapts to the content you're watching, automatically adjusting the TV's settings for improved picture and sound quality.
      Eliminate unnecessary processing with movies and preserve the action the way film directors intend with Filmmaker Mode, and enhance every moment of your viewing experience with Dolby Vision IQ and Dolby Atmos**.
      LG Game Optimizer mode with NVIDIA G-SYNC, FreeSync Premium, and Variable Refresh Rate (VRR) improve your gaming experience with fluid on-screen motion. Game Optimizer manages your game settings all in one place.
      Mount it on the wall with a 300 x 200 VESA mount (sold separately). Magic Remote with Magic Tap, remote control batteries (AA), power cable, wall mount, and quick start guide are included. TV stand sold separately.
      Welcome to the Gallery - Transform your home into a more artful space with the all-new, contemporary LG OLED design that leaves virtually no gap when you hang it on the wall***"
    )

    percyJacksonSet = Product.create!(
      name: "Percy Jackson and the Olympians Hardcover Boxed Set (Percy Jackson & the Olympians) ",
      category: "books",
      price: 89.99,
      description: "The complete Percy Jackson & the Olympians series in hardcover. A perfect gift for Percy fans, as well as readers just discovering this epic and blockbuster adventure.
      At last the wait is over! All five books in the blockbuster Percy Jackson and the Olympus series, in hardcover, have been collected in a box fit for demigods. This beautiful set includes 
      the best-selling The Lightning Thief, The Sea of Monsters, The Titan's Curse, The Battle of the Labyrinth, and The Last Olympians. Whether it is for readers who are experiencing Percy's thrilling 
      adventures with Greek gods and monsters for the first time or for fans who want to devour the saga again, this gift will be prized by young and old"
    )

    capybaraPlush.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/capybara_plush.jpeg"), filename: "capybara_plush.jpeg")
    ps5.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/ps5.jpeg"), filename: "ps5.jpeg")
    legoCrane.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/legoCrane.jpg"), filename: "legoCrane.jpg")
    lotr.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/lotr.jpeg"), filename: "lotr.jpeg")
    lgMonitor.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/lgMonitor.png"), filename: "lgMonitor.png")
    lgTv.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/lgTv.png"), filename: "lgTv.png")
    percyJacksonSet.image.attach(io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/percyJacksonSet.png"), filename: "percyJacksonSet.png")

    puts "Done!"
  # end