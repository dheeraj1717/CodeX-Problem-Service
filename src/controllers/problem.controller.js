const pingProblemController = (req,res) =>{
  return res.json({message:"Problem controller is alive"})
}

const addProblem = (req, res) => {};
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
