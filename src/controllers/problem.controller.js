const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());

const pingProblemController = (req, res) => {
  return res.json({ message: "Problem controller is alive" });
};

const addProblem = async (req, res, next) => {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem created successfully",
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
};
const getProblemByID = (req, res) => {};
const getProblems = (req, res) => {};
const deleteProblem = (req, res) => {};
const updateProblem = (req, res) => {};

module.exports = {
  pingProblemController,
  addProblem,
  getProblemByID,
  getProblems,
  deleteProblem,
  updateProblem,
};
