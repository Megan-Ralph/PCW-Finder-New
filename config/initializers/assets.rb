# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

# Global scripts.
Rails.application.config.assets.precompile += %w( homepage.js )
Rails.application.config.assets.precompile += %w( viewer.js )

# Game specific scripts.
Rails.application.config.assets.precompile += %w( games/cs_go.js )
Rails.application.config.assets.precompile += %w( games/cs_source.js )
Rails.application.config.assets.precompile += %w( games/cs_1.6.js )
Rails.application.config.assets.precompile += %w( games/enemy_territory.js )
Rails.application.config.assets.precompile += %w( games/call_of_duty.js )
Rails.application.config.assets.precompile += %w( games/bf3.js )
Rails.application.config.assets.precompile += %w( games/dota2.js )

