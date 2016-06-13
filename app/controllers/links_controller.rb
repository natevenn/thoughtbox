class LinksController < ApplicationController
  def index
  end

  def edit
   @link = Link.find(params[:id])
  end

  def update
    @link = Link.find(params[:id])
    if @link.update(link_params)
      flash[:success] = "Updated link"
      redirect_to
    else
      flash.now[:notice] = "Invalid url or field was left blank"
      render :edit
    end
  end

  private
    def link_params
      params.require(:link).permit(:title, :url)
    end

end
