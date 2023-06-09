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
    CartItem.destroy_all
  
    puts "Resetting primary keys..."
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
  
    puts "Generating users..."

    User.create!(
      name: 'Demo User', 
      email: 'demo@user.io', 
      password: 'password'
    )

    User.create!(
      name: 'Thomas Matthews', 
      email: 'thomasm120@gmail.com', 
      password: 'thomas1'
    )

    User.create!(
      name: 'Kevin Liu', 
      email: 'kliu2650@gmail.com', 
      password: 'kliu1'
    )

    User.create!(
      name: 'Kathy Mendez', 
      email: 'kmendez121@gmail.com', 
      password: 'kmendez'
    )

    User.create!(
      name: 'Steven Choi', 
      email: 'schoi50@gmail.com', 
      password: 'schoi1'
    )

    User.create!(
      name: 'Sarah Weiss', 
      email: 'sweiss09@gmail.com', 
      password: 'sweiss1'
    )

    User.create!(
      name: 'Jose Castillo', 
      email: 'jcastillo95@gmail.com', 
      password: 'jcastillo1'
    )

    User.create!(
      name: 'Daniel Westfield', 
      email: 'dwestfield@gmail.com', 
      password: 'dwestfield1'
    )
  
    # 10.times do 
    #   User.create!({
    #     name: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   }) 
    # end

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

    capybaraPlush.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/capybara_plush.jpeg"),
      filename: "capybara_plush.jpeg"
    )

    ps5.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/ps5.jpeg"), 
      filename: "ps5.jpeg"
    )

    legoCrane.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/legoCrane.jpg"), 
      filename: "legoCrane.jpg"
    )

    lotr.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/lotr.jpeg"), 
      filename: "lotr.jpeg"
    )

    lgMonitor.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/lgMonitor.png"), 
      filename: "lgMonitor.png"
    )

    lgTv.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/lgTv.png"), 
      filename: "lgTv.png"
    )

    percyJacksonSet.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/percyJacksonSet.png"), 
      filename: "percyJacksonSet.png"
    )

    pillows = Product.create!(
      name: "Amazon Basics Down-Alternative Pillows, Soft Density for Stomach and Back Sleepers - Standard (Pack of 2), White", 
      category: "homegoods", 
      price: 39.99, 
      description: "Polyester Microfiber.
      Imported.
      2-pack of standard-size bed pillow offers exceptional comfort; soft density is ideal for stomach and back sleepers.
      Down alternative fill for a plush feel; a great option for allergy sufferers.
      100% polyester microfiber shell provides a smooth, soft surface; piping along the edge creates a neatly tailored look.
      Machine wash warm and tumble dry low; ships in a vacuum-sealed pack; allow 24 hours to decompress, then fluff.
      Made in OEKO-TEX Standard 100% certified factory, an independent certification system that ensures textiles meet high safety and environmental standards.
      Dimensions: 20 x 26 inches each"
    )

    pillows.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/pillows.png"), 
      filename: "pillows.png"
    )

    # Toys and Games

    barbieDoll = Product.create!(
      name: "Barbie Dogwalking Doll & Accessories, Stroll & Play Pups Playset with Transforming Stroller, 2 Pets & Handbag, Blonde Doll", 
      category: "toysgames", 
      price: 22.99, 
      description: "​Play out the ideal puppy play day with the Barbie Stroll 'n Play Pups playset that includes a Barbie doll, two pet puppies, a transforming stroller and storytelling accessories.
      ​There are two ways to travel: seat one puppy in the stroller and one in Barbie doll's handbag; or pull the front of the stroller out, doubling its space to make room for both puppies.
      ​The stroller features a modern, colourful design and realistic details, like treaded rolling wheels, silvery accents, a hook for Barbie doll's purse and handles she can really hold.
      ​Includes a handbag that can store accessories or transport a puppy, plus everything the pals need to play out feeding and playtime -- 2 bowls, 2 bones, a frisbee and a water bottle.
      ​Barbie doll is ready for a day of play in a striped t-shirt dress and pink sneakers"
    )

    barbieDoll.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/barbieDoll.png"), 
      filename: "barbieDoll.png"
    )

    rcCar = Product.create!(
      name: "HYPER GO H16DR 1:16 Scale Ready to Run 4X4 Fast Remote Control Car, High Speed Jump RC Monster Truck, Off Road RC Cars, 4WD All Terrain RTR RC Truck with 2 LiPo Batteries for Boys and Adults", 
      category: "toysgames", 
      price: 99.99, 
      description: "Aluminum Capped Oil Filled Shock: The Oil-filled shock absorbers greatly reduce the shaking of the truck when driving at high speed. More stability and much safer.
      Excellent Performance: Ideal for big jump, popping wheelie and back flipping stunts, 2S 7.4V 1050 mAh 25C LiPo battery and 390 motor bursts out at 19+ mph for adults (speed measured by GPS), 70% throttle limited switch great for beginners or kids.
      Perfectly Compatible: Smart 2S/3S ESC support the 3S-capable power system, furious 24+ mph (40 kph) speeds achievable in optimum conditions using a 3S LiPo battery (3S 11.1V LiPo battery and more upgrade accessories available on Amazon).
      Exciting Gifts for Adults and Kids: The H16DR has more durable frame, whether Kids, beginners or hobby grade will like it. Out of the box for incredible speed and hit the all-terrain"
    )

    rcCar.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/rcCar.png"), 
      filename: "rcCar.png"
    )

    animalCrossing = Product.create!(
      name: "Animal Crossing: New Horizons - Nintendo Switch", 
      category: "toysgames", 
      price: 59.99, 
      description: "Build your community from scratch on a deserted island brimming with possibility; Create your personal getaway and customize your character, home, decorations, and even the landscape itself.
      Collect materials to construct everything from furniture to tools. Then, use what you create to give your island a personal touch.
      Watch as the time of day and seasons match real life—even your hemisphere. Each day holds potential for surprises and discoveries.
      Get to know the island residents, garden, fish, decorate, hunt for fossils, and more.
      Show off your paradise – Play on the same system with a total of 4 people, or play together online or over local wireless for fun with up to 8 players"
    )

    animalCrossing.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/animalCrossing.png"), 
      filename: "animalCrossing.png"
    )

    chessSet = Product.create!(
      name: "AMEROUS 15 Inches Magnetic Wooden Chess Set - 2 Extra Queens - Folding Board, Handmade Portable Travel Chess Board Game Sets with Game Pieces Storage Slots - Beginner Chess Set for Kids and Adults", 
      category: "toysgames", 
      price: 49.99, 
      description: "INTELLIGENT ENLIGHTENMENT - Not only suitable for adults playing with fun, this magnetic chess set could be a useful tool to enlighten your kids and stimulate their intelligence, Chess learning is no longer boring, but with joy and interest, Perfect for beginners and those indulged in electronic gadgets.
      MAGNETIC CHESSMEN - The hand carved wood chess pieces are magnetically attached to the board and won’t fall off during the game, which allows you to play the board game on the road, in car, airplane or any mobile vehicles.
      EASY TO CARRY - Lightweight and folding board design makes it portable to carry around and easy to travel with, Compact board size fits your luggage or bag when travelling while chess pieces are large enough to handle, playing with comfort.
      PREMIUM QUALITY - Handmade with high quality wooden material, the smooth surface of the entire chess board ensures optimal touch comfort while playing chess and checkers game, 2 extra queens are added to the board as free accessories at your disposal.
      PERFECT GIFT - Promote the relationship between children and friends or parents, sharing board game, suitable for indoor and outdoor, widely used in schools, families, camping and travel, is the most popular board game, can be used as a gift at Christmas, Children’s Day, birthday, New Year gift for children or adults"
    )

    chessSet.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/chessSet.png"), 
      filename: "chessSet.png"
    )

    pikachuPlush = Product.create!(
      name: "Pokemon 12 in Large Pikachu Plush - Officially Licensed Stuffed Animal Toy - Ages 2+", 
      category: "toysgames", 
      price: 39.99, 
      description: "Cute and cuddly 12 in Pokémon Pikachu plush stuffed animal is a must have for all Pokémon fans.
      Gotta Catch 'Em All! This super soft plush figure is great to take wherever you go.
      The Pikachu plush toy is inspired by Pokémon anime, trading cards, Let's Go!, Sword and Shield, Scarlet and Violet and Nintendo video games series.
      Makes a great gift for kids who love Pokemon - Your favorite Pokémon character is waiting for you.
      Officially licensed Pokémon merchandise. Polyester. Measures approximately 12 in to top of ear. Ages: 2+"
    )

    pikachuPlush.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/pikachuPlush.png"), 
      filename: "pikachuPlush.png"
    )

    bratzDoll = Product.create!(
      name: "Bratz 20 Yearz Special Anniversary Edition Original Cloe Fashion Doll with 2 -Outfits, Accessories Including Holographic Poster- Gift for Collector -Adults & Kids, Toys for Girls Ages 7+ Years Old", 
      category: "toysgames", 
      price: 24.99, 
      description: "20 YEARZ SPECIAL EDITION: In celebration of Bratz turning 20 yearz old, collect these special edition fashion dolls in gorgeous foil packaging, featuring a 20 yearz motif and collectible holographic poster.
      FAN FAVE RERELEASE: A near exact replica of the dolls that started it all in 2001, Collect the iconic debut looks of the Bratz Pack.
      SUPER STYLIN' FASHIONS: Cloe includes 2 doll outfits for tons of mix ‘n' match possibilities, Her fashion passion is exotic animal prints and sparkly fabrics.
      INCLUDES: 1 Bratz 20 Yearz Special Edition Original Fashion Doll, fashions, shoes, accessories, bag, hair brush, and poster"
    )

    bratzDoll.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/bratzDoll.png"), 
      filename: "bratzDoll.png"
    )

    marioOdyssey = Product.create!(
      name: "Super Mario Odyssey - Nintendo Switch", 
      category: "toysgames", 
      price: 59.99, 
      description: "Explore 3D kingdoms filled with secrets and surprises, including costumes for Mario and several ways to interact with environments.
      Mario's new friend, Cappy, lets you master new moves like cap throw, cap jump and capture.
      Visit astonishing new locales, such as the skyscraper-packed New Donk City, and run into familiar friends and foes as you try to save Princess Peach from Bowser's clutches and foil his dastardly wedding plans.
      Hand a Joy-Con controller to a friend to enjoy simultaneous multiplayer: Player 1 controls Mario while Player 2 controls Mario’s new ally Cappy.
      Unlock even more features with the exclusive new amiibo figures - Mario, Princess Peach and Bowser dressed in their wedding outfits"
    )

    marioOdyssey.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/marioOdyssey.png"), 
      filename: "marioOdyssey.png"
    )

    # Fashion 

    uaShirt = Product.create!(
      name: "Under Armour Men's Armour Heatgear Fitted Short-sleeve T-shirt", 
      category: "fashion", 
      price: 29.99, 
      description: "100% Polyester.
      Imported.
      Pull On closure.
      Machine Wash.
      Super-light HeatGear fabric delivers superior coverage without weighing you down.
      Mesh underarm & back panels for strategic ventilation.
      Ergonomic design keeps seams off high abrasion areas & increases durability.
      Hybrid raglan sleeve construction for added range of motion & comfort.
      Write-in locker tag on back of neck for your initials or number"
    )

    uaShirt.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/uaShirt.png"), 
      filename: "uaShirt.png"
    )

    uaShoes = Product.create!(
      name: "Under Armour SlipSpeed Training Shoes", 
      category: "fashion", 
      price: 149.99, 
      description: "UA FLOW CUSHIONING: Unmatched comfort, ground contact & traction—no squeaks.
      BREATHABLE UPPER: Reinforced supportive material with engineered venting.
      BOA FIT SYSTEM: A personalized fit, one click at a time, with a 12-point lockdown system.
      ISO-CHILL PADDED INTERIOR: Heel to toe interior foam padding with cool-to-the-touch Iso-Chill technology.
      MACHINE WASHABLE: We made it easy—put them in the wash to keep them fresh & clean*.
      CONVERTIBLE HEEL: Go from train mode to recover mode.
      *Laundry bag not included"
    )

    uaShoes.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/uaShoes.png"), 
      filename: "uaShoes.png"
    )

    elmoHat = Product.create!(
      name: "Sesame Street Elmo Face Adjustable Baseball Hat", 
      category: "fashion", 
      price: 21.99, 
      description: "100% Cotton.
      Imported.
      Most colors: adjustable strap with buckle closure; green camo: adjustable strap with hook and loop closure.
      Spot clean with a damp cloth, air dry.
      Sesame Street Elmo Face is 100% authentic, officially licensed Sesame Street merchandise! (SST30001).
      Sesame Street is a longtime favorite of children and adults, and a staple of PBS, Big Bird leads a cast of characters such as Bert and Ernie, Oscar the Grouch, Elmo, Grover and many others to teach children numbers, colors and the alphabet.
      Classic 6-panel, unstructured, embroidered hat.
      One size fits most. 
      Adjustable for a secure, comfortable fit"
    )

    elmoHat.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/elmoHat.png"), 
      filename: "elmoHat.png"
    )

    cardigan = Product.create!(
      name: "Goodthreads Men's Lambswool Long-Sleeve Shawl Collar Cardigan Sweater", 
      category: "fashion", 
      price: 39.99, 
      description: "100% Lambs Wool.
      Imported.
      Button closure.
      Machine Wash.
      Comfortable and versatile, this cardigan in 100% Lambswool is perfect on its own or as a layer under a blazer or jacket.
      Features a shawl collar, a button front closure, and welt pockets at the hip.
      At Goodthreads, we are on a mission to create incredible clothes crafted with care"
    )

    cardigan.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/cardigan.png"), 
      filename: "cardigan.png"
    )


    montanaShirt = Product.create!(
      name: "Big Sky Montana Graphic Map Long Sleeve T-Shirt", 
      category: "fashion", 
      price: 26.99, 
      description: "Solid colors: 100% Cotton; Heather Grey: 90% Cotton, 10% Polyester; All Other Heathers: 50% Cotton, 50% Polyester.
      Imported.
      Pull On closure.
      Machine Wash.
      state map and coordinates.
      great tshirt for men and women and kids.
      Lightweight, Classic fit, Double-needle sleeve and bottom hem"
    )

    montanaShirt.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/montanaShirt.png"), 
      filename: "montanaShirt.png"
    )

    hanesShirts = Product.create!(
      name: "Hanes Essentials Men's T-Shirt Pack, Men's Short Sleeve Tees, Crewneck Cotton T-Shirts for Men, Value Pack", 
      category: "fashion", 
      price: 25.99, 
      description: "100% Cotton.
      Imported.
      No Closure closure.
      Machine Wash.
      ESSENTIAL QUALITY, ESSENTIAL STYLE - Outstanding quality and value you have come to expect from Hanes.
      MIDWEIGHT COTTON - 100% cotton midweight fabric makes this a shirt you can wear all year long, Light steel colors are a cotton/polyester blend.
      STURDY STUFF - This cotton T-shirt features shoulder-to-shoulder taping and double-needle stitching for extra sturdiness at stress points.
      FITS JUST RIGHT - A full cut offers a roomier fit in men's tee shirts that are built for all-day comfort.
      VALUE YOU LOVE - These men's tees come in a convenient 4 or 6-pack of a single color - so you are never without a clean Hanes t-shirt.
      CLASSIC CREW - This men's t-shirt features a lay-flat crewneck collar and a ribbed knit neckline.
      COLD WATER WASH - Hanes recommends machine washing this men's shirt in cold water to help reduce energy consumption."
    )

    hanesShirts.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/hanesShirts.png"), 
      filename: "hanesShirts.png"
    )

    sunHat = Product.create!(
      name: "Lanzom Wide Brim Straw Panama Roll up Hat Fedora Beach Sun Hat UPF50+", 
      category: "fashion", 
      price: 29.99, 
      description: "90% Paper straw, 10% Polyester.
      Imported.
      Pull-On closure.
      Hand Wash Only.
      Made of 90% paper straw and 10 % polyester, Straw material, Soft comfortable and breathable to wear.
      One Size fits most people, US Size: 7 - 7.25, UK Size: 7 - 7.125, EU Size: 56 - 58, Head Measurements: 22 - 22.6inches, brim measurements: 2.9 inches, You can adjust the size of the hat through the adjust band inside in the hat.
      Foldable and packable: it can be easily carried inside your handbag or beach tote, packable and convenient to carry and absolutely save lots of space.
      Cute and lightweight, breathable and comfortable for the hot summer weather, a wonderful hat for wearing while gardening, at the beach, pool, park, camping, hiking, race day events, even out in your own back yard or any outdoor activities.
      An essential accessory for your outdoor travel, holiday, beach playing. 
      Folding packable design for easy storage in a handbag or backpack when it is not in use, Convenient carry along"
    )

    sunHat.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/sunHat.png"), 
      filename: "sunHat.png"
    )

    blouse = Product.create!(
      name: "Amazon Essentials Women's Short-Sleeve Woven Blouse", 
      category: "fashion", 
      price: 23.99, 
      description: "100% Viscose.
      Imported.
      Machine Wash.
      This elevated blouse features clean lines and a lightweight fabric ideal for layering.
      With a rounded shirt-tail hem, back button closure.
      Everyday made better: we listen to customer feedback and fine-tune every detail to ensure quality, fit, and comfort"
    )

    blouse.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/blouse.png"), 
      filename: "blouse.png"
    )

    slides = Product.create!(
      name: "Nike Men's Benassi Just Do It Athletic Sandal", 
      category: "fashion", 
      price: 29.99, 
      description: "100% Synthetic.
      Rubber sole.
      SPORTY STYLE: Lightweight sports slide sandal for men with a bold Nike logo embellished on the strap for plush comfort and an athletic look.
      CASUAL COMFORT: Sandal has injected Phylon midsole that doubles as an outsole for lightweight cushioning. Its soft midsole foam and jersey lining provide comfort so you can enjoy a relaxed, premium experience.
      NATURAL MOTION: Men's Nike slides have flex grooves help the slide move with your foot, while foam outsole provides impact protection.
      SPORT SANDAL: Men's slides with one-piece, synthetic leather strap for durability that has jersey lining for a soft feel.
      NIKE SLIDES: Imported with synthetic sole"
    )

    slides.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/slides.png"), 
      filename: "slides.png"
    )

    rayban = Product.create!(
      name: "Ray-Ban RB2140 Original Wayfarer Sunglasses", 
      category: "fashion", 
      price: 159.99, 
      description: "Unisex sunglasses: The Original Ray-Ban Wayfarer features legendary G-15 lenses, in both polarized and non-polarized options, perfect for everyone, Made from high-quality glass, Ray-Ban lenses are prescription ready.
      100% UV protection: To protect your eyes from harmful UV rays, these sunglasses include lenses that are coated with 100% UV protection.
      Reduce eye strain: Ray-Ban Wayfarer sunglasses feature precision-cut, scratch-resistant glass lenses that improve visual clarity, and help Reduce eye strain while outdoors.
      Durable acetate frames: Our Original Wayfarer sunglasses are exceptionally strong, The frame is made from lightweight yet strong acetate construction.
      Multiple frame and lens colors: Choose from multiple colors of frames—including black and tortoise—and lenses—including non-polarized and polarized crystal green G-15 and gradient options.
      Multiple size options: Choose from a variety of size options including 50 millimeter & 54 millimeter.
      Case & lens cloth included: Each pair of Ray-Ban sunglasses come with a case and lens cloth to clean and protect them from scratches and damage"
    )

    rayban.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/rayban.png"), 
      filename: "rayban.png"
    )

    theHobbit = Product.create!(
      name: "The Hobbit (The Lord of the Rings)", 
      category: "books", 
      price: 9.99, 
      description: "'In a hole in the ground, there lived a hobbit' So begins one of the most beloved and delightful tales in the English language.
      Set in the imaginary world of Middle-earth, at once a classic myth and a modern fairy tale, Tolkien's The Hobbit is one of literature's most enduring and well-loved novels, The text in this 372-page paperback edition is based on that first published in Great Britain by Collins Modern Classics and includes a note on the text by Douglas A Anderson.
      Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar, But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure, They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon.
      Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.
      Written for Tolkien's own children, The Hobbit has sold many millions of copies worldwide and established itself as a modern classic"
    )

    # Books

    theHobbit.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/theHobbit.png"), 
      filename: "theHobbit.png"
    )

    catcherInTheRye = Product.create!(
      name: "The Catcher in the Rye", 
      category: "books", 
      price: 12.99, 
      description: "Anyone who has read JD Salinger's New Yorker stories--particularly A Perfect Day for Bananafish, Uncle Wiggily in Connecticut, The Laughing Man, and For Esme With Love and Squalor--will not be surprised by the fact that his first novel is full of children, The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caulfield.
      Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days, The boy himself is at once too simple and too complex for us to make any final comment about him or his story, Perhaps the safest thing we can say about Holden is that he was born in the world not just strongly attracted to beauty but, almost, hopelessly impaled on it.
      There are many voices in this novel: children's voices, adult voices, underground voices-but Holden's voice is the most eloquent of all, Transcending his own vernacular, yet remaining marvelously faithful to it, he issues a perfectly articulated cry of mixed pain and pleasure, However, like most lovers and clowns and poets of the higher orders, he keeps most of the pain to, and for, himself, The pleasure he gives away, or sets aside, with all his heart, It is there for the reader who can handle it to keep"
    )

    catcherInTheRye.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/catcherInTheRye.png"), 
      filename: "catcherInTheRye.png"
    )

    charlottesWeb = Product.create!(
      name: "Charlotte's Web: A Newbery Honor Award Winner", 
      category: "books", 
      price: 9.99, 
      description: "Don’t miss one of America’s top 100 most-loved novels, selected by PBS’s The Great American Read.
      This beloved book by EB White, author of Stuart Little and The Trumpet of the Swan, is a classic of children's literature that is 'just about perfect,' This paper-over-board edition includes a foreword by two-time Newbery winning author Kate DiCamillo.
      Some Pig, Humble, Radiant, These are the words in Charlotte's Web, high up in Zuckerman's barn, Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend, They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter.
      EB White's Newbery Honor Book is a tender novel of friendship, love, life, and death that will continue to be enjoyed by generations to come, It contains illustrations by Garth Williams, the acclaimed illustrator of EB White's Stuart Little and Laura Ingalls Wilder's Little House series, among many other books.
      Whether enjoyed in the classroom or for homeschooling or independent reading, Charlotte's Web is a proven favorite"
    )

    charlottesWeb.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/charlottesWeb.png"), 
      filename: "charlottesWeb.png"
    )

    faultInOurStars = Product.create!(
      name: "The Fault in Our Stars", 
      category: "books", 
      price: 7.99, 
      description: "The beloved, #1 global bestseller by John Green, author of The Anthropocene Reviewed and Turtles All the Way Down.
      'John Green is one of the best writers alive' –E Lockhart, #1 bestselling author of We Were Liars.
      'The greatest romance story of this decade' –Entertainment Weekly.
      #1 New York Times Bestseller • #1 Wall Street Journal Bestseller • #1 USA Today Bestseller • #1 International Bestseller.
      Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis, But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten.
      From John Green, #1 bestselling author of The Anthropocene Reviewed and Turtles All the Way Down, The Fault in Our Stars is insightful, bold, irreverent, and raw, It brilliantly explores the funny, thrilling, and tragic business of being alive and in love"
    )

    faultInOurStars.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/faultInOurStars.png"), 
      filename: "faultInOurStars.png"
    )

    nineteen84 = Product.create!(
      name: "1984", 
      category: "books", 
      price: 11.99, 
      description: "George Orwell, born in 1903 in India was an English novelist, essayist and critic, He was a man of strong opinions who addressed some of the major political movements of his times, including imperialism, fascism and communism.
      Orwell was the author of six novels as well as numerous essays and non-fiction works. His famous works include 'Animal Farm' and 'Burmese days'"
    )

    nineteen84.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/nineteen84.png"), 
      filename: "nineteen84.png"
    )

    shoeDog = Product.create!(
      name: "Shoe Dog: A Memoir by the Creator of NIKE", 
      category: "books", 
      price: 16.99, 
      description: "In 1962, fresh out of business school, Phil Knight borrowed $50 from his father and created a company with a simple mission: import high-quality, low-cost athletic shoes from Japan. Selling the shoes from the boot of his Plymouth, Knight grossed $8000 in his first year, 
      Today, Nike's annual sales top $30 billion. In an age of start-ups, Nike is the ne plus ultra of all start-ups, and the swoosh has become a revolutionary, globe-spanning icon, one of the most ubiquitous and recognisable symbols in the world today"
    )

    shoeDog.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/shoeDog.png"), 
      filename: "shoeDog.png"
    )

    fahrenheit451 = Product.create!(
      name: "Fahrenheit 451", 
      category: "books", 
      price: 8.99, 
      description: "Nearly seventy years after its original publication, Ray Bradbury’s internationally acclaimed novel Fahrenheit 451 stands as a classic of world literature set in a bleak, dystopian future, Today its message has grown more relevant than ever before.
      Guy Montag is a fireman, His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden, Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all 
      day with her television 'family,' But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known"
    )

    fahrenheit451.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/fahrenheit451.png"), 
      filename: "fahrenheit451.png"
    )

    hamlet = Product.create!(
      name: "Hamlet", 
      category: "books", 
      price: 9.99, 
      description: "A new pocket edition of William Shakespeare's classic tragic play The Tragedy of Hamlet, Prince of Denmark, Hamletis a story of family and political intrigue, revenge, and madness and remains one of Shakespeare's most enduringly popular and influential works, featuring many of his most memorable characters and verses.
      This pocket edition is based on the original Cambridge editions, first published for the general public in the 1860s, and is designed for reading ease -- the size of a standard mass market paperback, it is convenient enough to fit in your pocket, briefcase, or purse, but it features font size sufficient for easy reading and paper durable enough for reading again and again"
    )

    hamlet.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/hamlet.png"), 
      filename: "hamlet.png"
    )

    grapesOfWrath = Product.create!(
      name: "The Grapes of Wrath", 
      category: "books", 
      price: 17.99, 
      description: "First published in 1939, Steinbeck’s Pulitzer Prize-winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads—driven from their homestead and forced to travel west to the promised land of California. Out of their trials and their repeated collisions against the hard realities 
      of an America divided into Haves and Have-Nots evolves a drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity. A portrait of the conflict between the powerful and the powerless, of one man’s fierce reaction to injustice, and of one woman’s stoical strength, the novel captures 
      the horrors of the Great Depression and probes into the very nature of equality and justice in America. At once a naturalistic epic, captivity narrative, road novel, and transcendental gospel, Steinbeck’s powerful landmark novel is perhaps the most American of American Classics"
    )

    grapesOfWrath.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/grapesOfWrath.png"), 
      filename: "grapesOfWrath.png"
    )

    dune = Product.create!(
      name: "Dune", 
      category: "books", 
      price: 29.99, 
      description: "Frank Herbert’s epic masterpiece—a triumph of the imagination and the bestselling science fiction novel of all time.
      Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness.
      When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.
      A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction"
    )

    dune.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/dune.png"), 
      filename: "dune.png"
    )

    # Electronics

    alienware = Product.create!(
      name: "Alienware AW3423DW 34.18-inch Quantom Dot-OLED Curved Gaming Monitor, 3440x1440 pixels at 175Hz, 1800R Curvature, True 0.1ms gray-to-gray, 1Million:1 Contrast Ratio, 1.07 Billions Colors - Lunar Light", 
      category: "electronics", 
      price: 1299.99, 
      description: "Alienware AW3423DW 34,18-inch Quantom Dot-OLED Curved Gaming Monitor, 3440x1440 pixels at 175Hz, 1800R Curvature, True 0,1ms gray-to-gray, 1Million:1 Contrast Ratio, 1,07 Billions Colors - Lunar Light"
    )

    alienware.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/alienware.png"), 
      filename: "alienware.png"
    )

    g502 = Product.create!(
      name: "Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac, Black", 
      category: "electronics", 
      price: 44.99, 
      description: "Hero 25K sensor through a software update from G HUB, this upgrade is free to all players: Our most advanced, with 1:1 tracking, 400-plus ips, and 100 - 25,600 max dpi sensitivity plus zero smoothing, filtering, or acceleration.
      11 customizable buttons and onboard memory: Assign custom commands to the buttons and save up to five ready to play profiles directly to the mouse.
      Adjustable weight system: Arrange up to five removable 3,6 grams weights inside the mouse for personalized weight and balance tuning.
      Programmable RGB Lighting and Lightsync technology: Customize lighting from nearly 16,8 million colors to match your team's colors, sport your own or sync colors with other Logitech G gear.
      Mechanical switch button tensioning: Metal spring tensioning system and pivot hinges are built into left and right gaming mouse buttons for a crisp, clean click feel with rapid click feedback.
      1 year hardware limited warranty"
    )

    g502.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/g502.png"), 
      filename: "g502.png"
    )

    k95 = Product.create!(
      name: "Corsair K95 RGB Platinum XT Mechanical Gaming Keyboard, Backlit RGB LED, Cherry MX Speed RGB Silver, Black (CH-9127414-NA)", 
      category: "electronics", 
      price: 139.99, 
      description: "Per-key RGB backlighting and a 19-zone LightEdge across the top of the keyboard delivers dynamic and vibrant lighting effects with near-limitless customization.
      Tuned for low noise operation even at full load; MTBF hours.
      Gain an in-game advantage with six dedicated macro keys fully programmable for complex macros and key remaps or swap to the included S-key keycaps and program special streaming commands through Elgato Stream Deck software.
      Cherry MX Speed RGB Silver mechanical key switches provide ultra-fast 1,2 millimeter actuation and proven reliability with 100 million keystrokes.
      A detachable soft textured cushioned leatherette palm rest offers the plush comfort to breeze through marathon gaming sessions"
    )

    k95.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/k95.png"), 
      filename: "k95.png"
    )

    hyperX = Product.create!(
      name: "HyperX CloudX, Official Xbox Licensed Gaming Headset, Compatible with Xbox One and Series X|S, Memory Foam Ear Cushions, Detachable Noise-Cancelling Mic, in-line Audio Controls, Silver", 
      category: "electronics", 
      price: 49.99, 
      description: "Headphones fit type: Over-Ear.
      Official Xbox licensed headset: CloudX was tested by Microsoft and works with Xbox controllers that have a 3,5 millimeter headset jack.
      Signature HyperX comfort: Cloud's legendary comfort will keep you gaming strong during those marathon gaming sessions.
      Durable aluminum frame: The sturdy aluminum frame provides reliable durability and stability.
      Immersive in-game audio: Enhanced bass reproduction and crystal clear lows, mids, and highs help fully immerse you in your gaming.
      [Convenient in-line audio control]: Intuitive in-line audio controls allow you to adjust volume and mute mic without having to dig into console settings.
      Detachable noise-cancellation microphone: The flexible, detachable mic can be easily positioned as you like it, and removed if you're enjoying music.
      Flexible braided cable: The tough braided cable is engineered to withstand the perils of daily gaming and is flexible to allow you to move freely"
    )

    hyperX.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/hyperX.png"), 
      filename: "hyperX.png"
    )

    airpodPro = Product.create!(
      name: "Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone", 
      category: "electronics", 
      price: 199.99, 
      description: "RICHER AUDIO EXPERIENCE – The Apple-designed H2 chip pushes advanced audio performance even further, resulting in smarter noise cancellation and more immersive sound, The low-distortion, custom-built driver delivers crisp, clear high notes and deep, rich bass in stunning definition, So every sound is more vivid than ever, Note : If the size of the earbud tips does not match the size of your ear canals or the headset is not worn properly in your ears, you may not obtain the correct sound qualities or call performance, Change the earbud tips to ones that fit more snugly in your ear.
      NEXT-LEVEL ACTIVE NOISE CANCELLATION – Up to 2x more Active Noise Cancellation than the previous AirPods Pro for dramatically less noise on your commute, or when you want to focus, Adaptive Transparency lets you comfortably hear the world around you, adjusting for intense noise—like sirens or construction—in real time.
      CUSTOMIZABLE FIT – Now with four pairs of silicone tips (XS, S, M, L) to fit a wider range of ears and provide all-day comfort, The tips create an acoustic seal to help keep out noise and secure AirPods Pro in place"
    )

    airpodPro.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/airpodPro.png"), 
      filename: "airpodPro.png"
    )

    airpodMax = Product.create!(
      name: "Apple AirPods Max Wireless Over-Ear Headphones. Active Noise Cancelling, Transparency Mode, Spatial Audio, Digital Crown for Volume Control. Bluetooth Headphones for iPhone - Silver", 
      category: "electronics", 
      price: 479.99, 
      description: "Apple-designed dynamic driver provides high-fidelity audio.
      Active Noise Cancellation blocks outside noise, so you can immerse yourself in music.
      Transparency mode for hearing and interacting with the world around you.
      Spatial audio with dynamic head tracking provides theater-like sound that surrounds you.
      Computational audio combines custom acoustic design with the Apple H1 chip and software for breakthrough listening experiences.
      Designed with a knit-mesh canopy and memory foam ear cushions for an exceptional fit.
      Magical experience with effortless setup, on-head detection, and seamless switching between devices.
      Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV.
      20 hours of listening, movie watching, or talk time with Active Noise Cancellation and spatial audio enabled.
      Store in ultra low-power mode with the slim Smart Case"
    )

    airpodMax.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/airpodMax.png"), 
      filename: "airpodMax.png"
    )

    ipadAir = Product.create!(
      name: "Apple 2022 iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)", 
      category: "electronics", 
      price: 559.99, 
      description: "10,9-inch Liquid Retina display with True Tone, P3 wide color, and an antireflective coating.
      Apple M1 chip with Neural Engine.
      12MP Wide camera.
      12MP Ultra Wide front camera with Center Stage.
      Up to 256GB of storage.
      Available in blue, purple, pink, starlight, and space gray.
      Stereo landscape speakers.
      Touch ID for secure authentication and Apple Pay.
      All-day battery life.
      5G capable"
    )

    ipadAir.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/ipadAir.png"), 
      filename: "ipadAir.png"
    )

    # Home Goods

    lamp = Product.create!(
      name: "Amazon Brand – Stone & Beam Ceramic Geometric Cut-Out Table Desk Lamp With LED Light Bulb, 22 in H, White", 
      category: "homegoods", 
      price: 79.99, 
      description: "This lamp will bring a touch of glamorous style to your living room or bedroom, The Off White ceramic pillar has geometric cut-outs for an artistic flair, A wide linen shade tops off this modern but graceful style.
      Ceramic base, polished nickel hardware, and Off White linen shade.
      LED bulb included.
      Simple assembly.
      Actual Size: 13 in (L) x 13 in (W) x 22 in (H); Measure: 35,5cm (L) x 35,5cm (W) X 64cm (H).
      For indoor use only"
    )

    lamp.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/lamp.png"), 
      filename: "lamp.png"
    )

    chair = Product.create!(
      name: "Amazon Basics Mesh, Mid-Back, Adjustable, Swivel Office Desk Chair with Armrests, Black", 
      category: "homegoods", 
      price: 64.99, 
      description: "NOTE: To ensure proper assembly, please follow all steps provided in the User manual.
      Comfortable office chair with contoured mesh back for breathability.
      Pneumatic seat-height adjustment; padded seat for comfort.
      Stable 5-point base with dual-wheel casters; 275-pound maximum weight capacity.
      User manual with assembly instructions included.
      BIFMA Certified.
      Chair Dimensions: 25,2 x 24 x 35,6 - 40,3 inches (DxWxH)"
    )

    chair.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/chair.png"), 
      filename: "chair.png"
    )

    espressoMachine = Product.create!(
      name: "Mr. Coffee Espresso and Cappuccino Machine, Programmable Coffee Maker with Automatic Milk Frother and 15-Bar Pump, Stainless Steel", 
      category: "homegoods", 
      price: 199.99, 
      description: "Craft delectable, robust coffeehouse-quality espressos, cappuccinos, and lattes with the Mr. Coffee Café Barista. 
      Featuring an electric 15-bar pump that creates powerful pressure to extract bold, rich flavors during the brew. 
      Anyone can become a cafe expert with the simple-to-use espresso maker. 
      One-touch controls let you choose between single or double shots and automatically froths milk with an adjustable control knob. 
      The milk reservoir is removable to store leftover milk not used during the brew in the refrigerator, so you just fill it and let the Café Barista determine the amount needed.
      A recipe book is included to easily create impressive coffee drinks or inspire you to invent original recipes all from the comfort of your home"
    )

    espressoMachine.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/espressoMachine.png"), 
      filename: "espressoMachine.png"
    )

    keurig = Product.create!(
      name: "Keurig K-Classic Coffee Maker K-Cup Pod, Single Serve, Programmable, 6 to 10 oz. Brew Sizes, Black", 
      category: "homegoods", 
      price: 109.99, 
      description: "Brews multiple k-cup pod sizes: (6, 8, 10 ounce) – the most popular k-cup pod brew sizes, Use the 6 ounce brew size to achieve the strongest brew.
      Large 48 ounce water reservoir: Allows you to brew 6 plus cups before having to refill, saving you time and simplifying your morning routine, The water reservoir is removable, making it easy to refill whenever you need to.
      Descaling: An important part of cleaning your keurig brewer, This process helps to remove calcium deposits, or scale, that can build up inside a coffee maker over time.
      Auto-off: An auto-off feature is easily programmed to turn off your coffee maker after it has been idle for 2 hours, helping to save energy.
      Simple button controls: Just insert a pod, select your desired cup brew size, and brew a great-tasting cup in under a minute.
      Fabric type: Plastic"
    )

    keurig.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/keurig.png"), 
      filename: "keurig.png"
    )

    airPurifier = Product.create!(
      name: "LEVOIT Air Purifier for Home Allergies Pets Hair in Bedroom, H13 True HEPA Filter, Covers Up to 1095 Sq.Foot, 24db Filtration System, Remove 99.97% Dust Smoke Mold Pollen, Core 300, White", 
      category: "homegoods", 
      price: 99.99, 
      description: "WHISPER QUIET AIR CLEANER: Choose Sleep Mode at night and then forget all about your air purifier while you sleep, QuietKEAP Technology reduces noise levels to a near-silent 24dB, ensuring the Core 300 won’t get in the way of a good night’s rest.
      SLEEK DESIGN: The Core 300 practically serves your home while blending in with your decor, Its award-winning design (Red Dot, 2020) and modern white finish help your air purifier fit anywhere in your home/bedroom/room.
      FIND RELIEF: Ease sneezing, congestion, and other allergy symptoms caused by airborne contaminants, The H13 True HEPA Filter works alongside the Pre-Filter and High-Efficiency Activated Carbon Filter to capture 99,97% of airborne particles 0,3 microns in size, such as dust, smoke, pollen, odor"
    )

    airPurifier.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/airPurifier.png"), 
      filename: "airPurifier.png"
    )

    vacuum = Product.create!(
      name: "Eureka Airspeed Ultra-Lightweight Compact Bagless Upright Vacuum Cleaner, Replacement Filter, Green", 
      category: "homegoods", 
      price: 59.99, 
      description: "Quick release handle for effortless above floor cleaning, Attach the crevice tool or dusting brush to the end of the handle for cleaning upholstery, windows and other hard to reach places.
      Powerful all floor suction extracts dirt and hair from hard floors and carpets ease, It’s 10,5 in wide cleaning path gets the job done quickly.
      Lightweight at only 7,7 pounds with its compact and featherweight design this vacuum can store in any space in your home and be carried anywhere.
      Contains one washable filter which can be rinsed and left to dry for no maintenance costs.
      Includes a crevice tool and dusting brush which snaps on the vacuum and are within reach at any time during cleaning"
    )

    vacuum.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/vacuum.png"), 
      filename: "vacuum.png"
    )

    airFryer = Product.create!(
      name: "Ninja AF101 Air Fryer that Crisps, Roasts, Reheats, & Dehydrates, for Quick, Easy Meals, 4 Quart Capacity, & High Gloss Finish, Black/Grey", 
      category: "homegoods", 
      price: 99.99, 
      description: "Wide temperature range: 105 degree Fahrenheit to 400 degrees Fahrenheit allows you to gently remove moisture from foods or quickly cook and crisp foods with convection heat.
      4 quart ceramic coated nonstick basket and crisper plate fit 2 pounds of french fries, Cord length (feet) - 2,6.
      The unit will need time to preheat before coming up to temperature, We recommend that you preheat the unit for 3 minutes before adding your ingredients to achieve the best results.
      Dehydrate: Create flat, chip like dehydrated foods for fun, homemade snacks pounds; The combination of low fan speed and low temperature enables thorough dehydration.
      Dishwasher safe parts: Easy to clean basket, crisper plate, and multi-layer rack"
    )

    airFryer.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/airFryer.png"), 
      filename: "airFryer.png"
    )

    dyson = Product.create!(
      name: "Dyson Pure Cool™ TP01 Air Purifier and Fan - White/Silver", 
      category: "homegoods", 
      price: 299.99, 
      description: "Air Multiplier technology generates the circulation power to draw distant pollutants into the machine, projecting purified air throughout the whole room.
      The filter is quick and easy to change, With automatic filter-life notifications on the machine.
      Program your machine to turn off after pre-set intervals.
      Curved and magnetized remote stores neatly on the machine.
      Sleep time mode for a comfortable night's sleep, The LED display will turn off after 10 seconds of inactivity"
    )

    dyson.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/dyson.png"), 
      filename: "dyson.png"
    )

    waterBottle = Product.create!(
      name: "Hydro Flask", 
      category: "homegoods", 
      price: 54.99, 
      description: "TempShield️ double-wall vacuum insulation keeps contents cold up to 24 hours.
      Insulated Flex Straw Cap is leakproof when closed.
      Made with 18/8 pro-grade stainless steel for durability, pure taste and no flavor transfer.
      Wide Mouth opening is ice-cube friendly.
      Color Last powder coat stays clean and colorful.
      Bottle fits most backcountry water filters.
      BPA-Free"
    )

    waterBottle.image.attach(
      io: URI.open("https://rainier-seeds-dev.s3.amazonaws.com/waterBottle.png"), 
      filename: "waterBottle.png"
    )

    # Reviews

    review1 = Review.create!(
      title: "Great",
      body: "The best purchase I have made so far. Item arrived very quickly!",
      rating: "5",
      user_id: "1",
      product_id: "1"
    )

    review2 = Review.create!(
      title: "Awesome",
      body: "Would have given it 5/5 stars, but due to shipping delays I had to remove a star. Still a great purchase!",
      rating: "4",
      user_id: "2",
      product_id: "1"
    )

    puts "Creating Reviews"

    # review1 = Review.create!(
    #   title: " ",
    #   body: " ",
    #   rating: " ",
    #   user_id: " ",
    #   product_id: " "
    # )

    # example = Product.create!(
    #   name: " ", 
    #   category: " ", 
    #   price: 15.99, 
    #   description: ""
    # )

    # example.image.attach(
    #   io: URI.open(" "), 
    #   filename: " "
    # )


    puts "Done!"
  # end