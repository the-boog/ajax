class CharactersController < ApplicationController
  before_action :set_game
  before_action :set_character, only: [:show, :update, :destroy]
  def index
   render json: @game.characters
  end

  def show
  end

  def create
    @character = Character.new(character_params)
    if @character.save
      render json: @character
    else
      render_error(@character)
    end
  end

  def update
    if @character.update(character_params)
      render json: @character
    else
      render_error(@character)
    end
  end

  def destroy
    @character.destroy
    render json: { message: 'removed' }, status: :ok
  end

  private
    def set_game
      @game = Game.find(params[:game_id])
    end
    
    def set_character
      @character = Character.find(params[:id])
    end

    def character_params
      params.require(:character).permit(:name, :power, :game_id)
    end

end
