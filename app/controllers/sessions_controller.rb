class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by(email: params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      flash[:notice] = "You have logged in as #{@user.email}"
      redirect_to '/dashboard'
    else
      flash.now[:error] = "Invalid Login. Try Again."
      redirect_to '/'
    end
  end

  def destroy
    session.clear
    redirect_to '/'
  end
end
