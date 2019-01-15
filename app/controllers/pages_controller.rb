class PagesController < ApplicationController

  before_action :authorise, only: [:welcome]

  def welcome
  end



  private
    def authorise
      redirect_to login_path unless (@current_user.present?)
    end

  def home
  render :layout => false
  end 
end
