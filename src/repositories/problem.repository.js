const NotFoundError = require("../errors/notFound.error");
const Problem = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create(problemData);
      return problem;
    } catch (error) {
      throw error;
    }
  }
  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async getProblemByID(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const problem = await Problem.findByIdAndDelete(problemId);
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async updateProblem(problemId, problemData) {
    try {
      const problem = await Problem.findByIdAndUpdate(problemId, problemData, {
        new: true,
      });
      return problem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemRepository;
