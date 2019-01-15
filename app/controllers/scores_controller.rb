class ScoresController < ApplicationController
  def new
    @score = Score.new
  end


  def create
    digest = Digest::MD5.new
    digest.update params['score']['score'].to_s
    if params['score']["scoreMD5"] === digest.hexdigest
      # @highscore = Highscore.new(highscore_params)
      @score = Score.find_by :user_id => params[:score][:user_id]
      if @score.nil?
        @score = Score.new(score_params)
      else
        @score.update( score_params ) if @score.score < params[:score][:score].to_i
      end

      respond_to do |format|
        if @score.save
          format.html { redirect_to @score, notice: 'Score was successfully created.' }
          format.json { render json: { status: "OK", score: @score.score } }
        else
          format.html { render :new }
          format.json { render json: @score.errors, status: :unprocessable_entity }
        end
      end
    else
      render :json => { :status => "No way" }
    end
  end

  def show
  end

  def index


  end

  private
  def score_params
    params.require(:score).permit(:score, :user_id)
  end

end
