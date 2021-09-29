# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding mock data..."
users = User.create([
    {
       username: "ALotLikeTravis",
       first_name: "Travis",
       last_name: "Courtney",
       age: 25,
       avatar_image: "https://www.w3schools.com/howto/img_avatar.png",
       password_digest: "Password123"
    },
    {
       username: "Josh129",
       first_name: "Josh",
       last_name: "Branson",
       age: 54,
       avatar_image: "https://www.w3schools.com/howto/img_avatar.png",
       password_digest: "Password123"
    },
    {
       username: "Test_user222",
       first_name: "Test",
       last_name: "user",
       age: 21,
       avatar_image: "https://www.w3schools.com/howto/img_avatar.png",
       password_digest: "Password123"
    },
    {
       username: "JimmieEats",
       first_name: "Jimmie",
       last_name: "Bell",
       age: 29,
       avatar_image: "https://www.w3schools.com/howto/img_avatar.png",
       password_digest: "Password123"
    },
    {
       username: "AwesomeAustin",
       first_name: "Austin",
       last_name: "McPherson",
       age: 62,
       avatar_image: "https://www.w3schools.com/howto/img_avatar.png",
       password_digest: "Password123"
    }
])

solutions = Solution.create([
    {
        # thought_id: 1,
        description: "Take girlfriend to dinner and have conversation about what I'm experiencing",
        immediate_action: true,
        first_step: "Call girlfriend",
        when: "20-JUN-1990 08:03:00"
    },
    {
        # thought_id: 2,
        description: "Come up with goals",
        immediate_action: true,
        first_step: "Write goal list",
        when: "20-JUN-1990 08:03:00"
    },
    {
        # thought_id: 3,
        description: "Call her doctor and schedule doctor appointment",
        immediate_action: true,
        first_step: "Call doctor",
        when: "20-JUN-1990 08:03:00"
    },
    {
        # thought_id: 4,
        description: "Practice focusing more. Do research on other tools to help with focus",
        immediate_action: true,
        first_step: "practice being mindful",
        when: "20-JUN-1990 08:03:00"
    },
    {
        # thought_id: 5,
        description: "need to drink water",
        immediate_action: true,
        first_step: "Drink water",
        when: "20-JUN-1990 08:03:00"
    },
    
])


thoughts = Thought.create([
    {
        title: "girlfriend troubles",
        description: "Feeling stressed about relationship",
        user_id: 3,
        occurences: 7,
        solution_id: 1
    },
    {
        title: "General anxiety future",
        description: "Birthday is causing anxiety about future",
        user_id: 1,
        occurences: 3,
        solution_id: 2
    },
    {
        title: "Health issues",
        description: "Had a mild cough for the las month",
        user_id: 2,
        occurences: 2,
        solution_id: 3
    },
    {
        title: "distracted by clouds",
        description: "Wasted a lot of time today staring at the sky",
        user_id: 3,
        occurences: 1,
        solution_id: 4
    },
    {
        title: "Dehydrated",
        description: "Thought about needing to drink more water",
        user_id: 1,
        occurences: 5,
        solution_id: 5
    }
])





puts "Seeding complete."