class Api::V1::LinksController < Api::V1::BaseController
  respond_to :json

  def index
    render json: Link.where(user_id: current_user.id)
  end

  def create
    new_link = current_user.links.new(link_params)
    if new_link.save
      render json: new_link
    else
      render :json => { :errors => new_link.errors.full_messages }, :status => 422
      flash.now[:error] = "Invalid Url"
    end
  end

  def update
    link = Link.find(params[:id])
    respond_with link.update(link_params)
  end

  private
    def link_params
      params.require(:link).permit(:title, :url, :read_status)
    end
end
