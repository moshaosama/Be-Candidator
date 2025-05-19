import DB from "../../ConnectDB/DB.js";

export const CreateCandidateinStage = async (req, res) => {
  const { JobID } = req.body;
  if (!JobID) {
    return res.status(400).json({ message: "Job ID is required" });
  }
  const GetJobs = "SELECT * FROM job WHERE id = ?";
  const Value = [JobID];

  const [Job] = await DB.promise().query(GetJobs, Value);
  //   console.log(Job[0]);

  const { CandidateID } = req.body;
  if (!CandidateID) {
    return res.status(400).json({ message: "Candidate ID is required" });
  }

  const GetCandidate = "SELECT * FROM candidates WHERE id = ?";
  const ValueCandidate = [CandidateID];

  const [Candidate] = await DB.promise().query(GetCandidate, ValueCandidate);

  //   console.log(Candidate[0]);

  const UpdateJob = "UPDATE job SET Candidates = ? WHERE id = ?";
  const ValueUpdateJob = [JSON.stringify(Candidate[0]), JobID];

  const [result] = await DB.promise().query(UpdateJob, ValueUpdateJob);

  return res.status(200).json({ message: "Candidate added to job", result });
};
