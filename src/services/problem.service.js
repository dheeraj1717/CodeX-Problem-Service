const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
  // as we might use the service for different repositories like one might be using mongodb and other might be using mysql, so we are making the constructor to accept the repository
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1. Sanitize the markdown content
      problemData.description = sanitizeMarkdown(problemData.description);
      problemData.editorial = sanitizeMarkdown(problemData.editorial);
      // 2. Create the problem
      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemService;
