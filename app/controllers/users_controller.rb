class UsersController < ApplicationController

  def login
    user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
    if user
      token = generate_token(user.id)
      render json: { user: user, token: token }
    else
      render json: { error: "Invalid Password" }, status: :unauthorized
    end
  end

  def index
    users = User.all 
    render json: users, status: :ok
  end

  def profile
    token = request.headers["token"]
    user_id = decode_token(token)
    user = User.find_by(id: user_id)
    if user
      render json: user, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  # def show
  #   user = User.find_by(id: params[:id])
  #   if user
  #     render json: user, status: :ok
  #   else
  #     render json: { error: "User not found" }, status: :not_found
  #   end
  # end

  def create
    user = User.create(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors }, status: :unprocessable_entity
    end
  end
  def update_name
    token = request.headers["token"]
    user_id = decode_token(token)
    user = User.find(user_id)
    if user
      user.update(name: params[:name])
      if user.valid?
        render json: user, status: :ok
      else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  def destroy
    user = User.find_by(id: params[:id])
    if user
      user.destroy
      render json: {}, status: :no_content
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password, :image)
  end

end
