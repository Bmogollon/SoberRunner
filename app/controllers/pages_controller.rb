class PagesController < ApplicationController
  # before_action :authorize, only: [:welcome]

  def home

  end

  private

  def authorize
    redirect_to login_path unless (@current_user.present?)
  end
end
