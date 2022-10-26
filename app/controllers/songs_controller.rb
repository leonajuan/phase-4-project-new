class SongsController < ApplicationController

  def index
    songs = Song.all 
    render json: songs, status: :ok
  end

  def show
    song = Song.find_by(id: params[:id])
    if song 
      render json: song
    else
      render json: { error: "Song not found" }, status: :not_found
    end
  end

  def create
    song = Song.create(title: params[:title], artist: params[:artist], album: params[:album], album_cover: params[:album_cover])
    if song.valid?
      render json: song, status: :created
    else
      render json: { errors: song.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
end
