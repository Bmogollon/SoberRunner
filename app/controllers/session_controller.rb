class SessionController < ApplicationController
  def new

  end

  def create
   user = User.find_by :username => params[:username]
     if user.present? && user.authenticate(params[:password])
       session[:user_id] = user.id
       #log em in

       redirect_to root_path
     else

       redirect_to login_path
     end
  end

  def destroy
   session[:user_id] = nil
   redirect_to root_path
  end

end
