class CommentsController < ApplicationController

  def index
    comments = Comment.all 
    render json: comments, except: [:created_at, :udpated_at], status: :ok
  end

  def show
    comment = Comment.find_by(id: params[:id])
    if comment
      render json: comment, status: :ok
    else
      render json: { error: "Comment not found" }, status: :not_found
    end
  end

  # def create
  #   token = request.headers["token"]
  #   user_id = decode_token(token)
  #   comment = Comment.create(user_id: params[:user_id], song_id: params[:song_id], comment: params[:comment])
  #   if comment.valid?
  #     render json: comment, status: :created
  #   else
  #     render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  def create
    token = request.headers["token"]
    user_id = decode_token(token)
    if user_id
      comment = Comment.create(song_id: params[:song_id], comment: params[:comment], user_id:user_id)
      if comment.valid?
        render json: comment, status: :created
      else
        render json: { errors: comment.errors }, status: :unprocessable_entity
      end
    else
      render json: { error: "401 Incorrect Token" }, status: :unauthorized
    end
  end

end
