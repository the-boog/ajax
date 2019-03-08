namespace :populate do
  desc "Populates Games"
  task games: :environment do
    10.times do
      game = Game.create(name: Faker::Book.title, description: Faker::Book.genre)
      5.times do
        character = Character.create(name: Faker::Games::Heroes.name, power: Faker::Games::Pokemon.move, game_id: game.id)
      end
    end
  end

end
