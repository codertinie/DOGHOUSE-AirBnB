# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding data!"
10.times do 
  User.create(
    username:Faker::Internet.username(specifier: 5..10),
    email:Faker::Internet.email,
    password: Faker::Internet.password 
  )
end
# doghouse
doghouse1 = DogHouse.create(name: "Barking Mad", location: "Ruai", price: "1500", image_url: "https://media.istockphoto.com/id/1419116693/photo/jack-russel-vs-soap-bubble-playtime.jpg?s=612x612&w=0&k=20&c=T-MsM9ruDy7IgmLaUdDNv0uPcP1plDi5iK_oDZkl3nw=")
doghouse2 = DogHouse.create(name: "Cosmopawlitan", location: "Ruaka", price: "1100", image_url: "https://media.istockphoto.com/id/1432561287/photo/dogs-looking-up-at-woman-with-biscuit-jar.jpg?s=612x612&w=0&k=20&c=i14BJE2YpYT5n9aV29gM2tI4TXAZ5bLarGM3alq8Vq0=")
doghouse3 = DogHouse.create(name: "Vanity Fur", location: "Mtwapa", price: "1200", image_url: "https://media.istockphoto.com/id/1432560544/photo/dog-daycare-owner-throwing-tennis-balls-to-dogs.jpg?s=612x612&w=0&k=20&c=yltR3pOPRcoLfFgOiwRt5EJUofN2bPdVJJCmbaWd-X4=")
doghouse4 = DogHouse.create(name: "Barkingham Palace", location: "Nakuru", price: "1400", image_url: "https://media.istockphoto.com/id/1019262446/photo/time-for-walking-at-doggie-daycare.jpg?s=612x612&w=0&k=20&c=kQDPsJuW35gotYz1bPXLEXh211M0X0a5SwiJRdhNGlc=")
doghouse5 = DogHouse.create(name: "The Dogfather", location: "Naivasha", price: "1300", image_url: "https://media.istockphoto.com/id/1170918577/photo/pet-daycare.jpg?s=612x612&w=0&k=20&c=QPHSJyol4gV5kQQ03T7IfJmAZNCHsHllB-p3sMr-5Yg=")
doghouse6 = DogHouse.create(name: "Wizard of Paws", location: "Rongai", price: "1800", image_url: "https://media.istockphoto.com/id/1019256590/photo/veterinarian-works-at-doggie-daycare.jpg?s=612x612&w=0&k=20&c=RgGptwIED0S8Nb6lISW2N6QtdnE8Uxw0i7qYPgqkyFU=")
doghouse7 = DogHouse.create(name: "The Barking Lot", location: "Karen", price: "1900", image_url: "https://thedoghouselafayette.com/_assets/img/Doghouse_daycare_grooming_boarding_lafayette_rendering.webp?mode=crop&width=550&height=320")
doghouse8 = DogHouse.create(name: " Fine Whines and Lickers", location: "Lavington", price: "1300", image_url: "https://doghousecamarillo.com/wp-content/uploads/2019/11/daycarePage.jpg")
doghouse9 = DogHouse.create(name: "The Pawlice", location: "Embakasi", price: "1700", image_url: "https://stayatdoghouse.com/wp-content/uploads/2020/06/story-image.jpg")
doghouse10 = DogHouse.create(name: "Dogtopia", location: "Ruaka", price: "1600", image_url: "https://www.dailyherald.com/storyimage/DA/20210621/SUBMITTED/210629881/AR/0/AR-210629881.jpg&updated=202106220836&imageversion=Facebook&exactH=630&exactW=1200&exactfit=crop&noborder")

# reviews
20.times do
  Review.create(
    comment: Faker::Restaurant.review,
    star_rating: Faker::Number.within(range: 1..5),
    user_id: Faker::Number.within(range: 1..10),
    dog_house_id: Faker::Number.within(range: 1..10),
  )
end

puts "done seeding data!"