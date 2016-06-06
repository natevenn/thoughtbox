class Api::V1::LinksController < Api::V1::BaseController
  respond_to :json

  def index
    render json: Link.where(user_id: current_user.id)
  end

  def create
    render json: current_user.links.create(link_params), location: nil
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
