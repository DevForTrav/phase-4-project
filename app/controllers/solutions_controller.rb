class SolutionsController < ApplicationController

    def index
        solutions = Solution.all
        render json: solutions, include: ["thoughts", "thoughts.user"]
    end

    def show
        solution = Solution.find(params[:id])
        render json: solution, include: ["thoughts", "thoughts.user"]
    end
    
    def create
        solution = Solution.create!(solution_params)
        render json: solution, status: :created
    end


    private

    def solution_params
        params.permit(:description, :immediate_action, :first_step, :when, :thought_id)
    end
end
