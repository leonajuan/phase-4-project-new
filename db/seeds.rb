User.destroy_all
Song.destroy_all
Comment.destroy_all

puts "🌱 Seeding users..."
u1 = User.create(name: "Leona Juan", email: "leonaj@gmail.com", password: "password123", image: "https://i.pinimg.com/564x/25/73/66/257366f07d0b18ba31dc3274b45c3b7b.jpg")
u2 = User.create(name: "Kaylin Virone", email: "kaylinv@gmail.com", password: "PassWrd", image: "https://i.pinimg.com/564x/e8/6d/b8/e86db89235d3f29f6d596b9aad1ba3ef.jpg")
u3 = User.create(name: "Emily Mendieta", email: "emilym@gmail.com", password: "passw0rd!", image: "https://i.pinimg.com/564x/5b/2e/b7/5b2eb714561200e77bff7e9f91e976a7.jpg")
u4 = User.create(name: "Evelyn Gervacio", email: "evenlyng@gmail.com", password: "p@ssword", image: "https://i.pinimg.com/564x/c9/0c/04/c90c04e4ab9a1414b5720ef2ba8423fb.jpg")
u5 = User.create(name: "Kate Ramos", email: "kater@gmail.com", password: "pa$$word", image: "https://i.pinimg.com/564x/57/60/a4/5760a416f58339f6258d67893e429d3d.jpg")

puts "🌱 Seeding songs..."
l1 = Song.create(title: "Self Control", artist: "Frank Ocean", album: "Blonde", album_cover: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg")
l2 = Song.create(title: "Out of Time", artist: "The Weeknd", album: "Dawn FM", album_cover: "https://i.scdn.co/image/ab67616d0000b2734ab2520c2c77a1d66b9ee21d")
l3 = Song.create(title: "Cinema", artist: "Harry Styles", album: "Harry's House", album_cover: "https://media.pitchfork.com/photos/623b686c6597466fa9d6e32d/1:1/w_600/Harry-Styles-Harrys-House.jpeg")
l4 = Song.create(title: "Venice Bitch", artist: "Lana Del Rey", album: "Norman F***ng Rockwell", album_cover: "https://www.interviewmagazine.com/wp-content/uploads/2019/07/nfr.png")
l5 = Song.create(title: "Otro Atardecer", artist: "Bad Bunny", album: "Un Verano Sin Ti", album_cover: "https://upload.wikimedia.org/wikipedia/en/6/60/Bad_Bunny_-_Un_Verano_Sin_Ti.png")

puts "🌱 Seeding comments..."
c1 = Comment.create(user_id: u1.id, song_id: l1.id, comment: "the best song to ever exist 💗")
c2 = Comment.create(user_id: u2.id, song_id: l2.id, comment: "Such a good song! One of the best ones on the album.")
c3 = Comment.create(user_id: u3.id, song_id: l3.id, comment: "Would die to see this live! 😭")
c4 = Comment.create(user_id: u4.id, song_id: l5.id, comment: "i'll be playing this song at my wedding.")
c5 = Comment.create(user_id: u5.id, song_id: l4.id, comment: "this song is so relaxing - i love it")

puts "✅ Done seeding!"