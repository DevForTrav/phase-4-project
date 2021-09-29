class ThoughtsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def index
        if params[:user_id]
            user = User.find(params[:user_id])
            render json: user.thoughts
        else
            thoughts = Thought.all 
            render json: thoughts
        end       
    end

    def show
        thought = Thought.find(params[:id])
        render json: thought
    end

    def create
        thought = Thought.create!(thought_params)
        render json: thought, status: :created
    end

    def update
        thought = Thought.find(params[:id])
        thought.update(thought_params)
        render json: thought
    end

    def destroy
        thought = Thought.find(params[:id])
        thought.destroy
        head :no_content
        
    end

    private

    def thought_params
        params.permit(:title, :description, :user_id, :occurences)
    end
end
