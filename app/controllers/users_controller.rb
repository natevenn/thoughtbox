class UsersController < ApplicationController
  def new
  end

 def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      flash[:notice] = "Logged in as #{@user.email}"
      redirect_to dashboard_path
    else
      flash[:notice] = "Invalid Login"
      redirect_to root_path
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
