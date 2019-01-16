class PoppersController < ApplicationController
  def new
    render :layout => false

  end

  def show
  @popper = Popper.new
  end

  def create
  @popper = Popper.new(params)
  end

  def index

  end

  def delete

  end
end
