class CommentsController < ApplicationController

  def index
    comments = Comment.all 
    render json: comments, status: :ok
  end

  def show
    comment = Comment.find_by(id: params[:id])
    if comment
      render json: comment, status: :ok
    else
      render json: { error: "Comment not found" }, status: :not_found
    end
  end

  def create
    comment = Comment.create(user_id: params[:user_id], song_id: params[:song_id], comment: params[:comment])
    if comment.valid?
      render json: comment, status: :created
    else
      render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
end
