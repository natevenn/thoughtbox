class Api::V1::LinksController < Api::V1::BaseController

  def create
    respond_with current_user.links.create(link_params), location: nil
  end

  private
    def link_params
      params.require(:link).permit(:title, :url, :read_status)
    end
end
