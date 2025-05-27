import DB from "../../ConnectDB/DB.js";

export const CreateCandidateinStage = async (req, res) => {
  try {
    const { JobID, CandidateID } = req.body;
    if (!JobID) {
      return res.status(400).json({ message: "Job ID is required" });
    }
    if (!CandidateID) {
      return res.status(400).json({ message: "Candidate ID is required" });
    }

    // Update  Stages in Candidate Table
    const UpdateCandidate = "UPDATE candidates SET Stages = ? WHERE id = ?";
    const ValueUpdateCandidate = ["Pending", CandidateID];
    await DB.promise().query(UpdateCandidate, ValueUpdateCandidate);
    const GetCandidate = "SELECT * FROM candidates WHERE id = ?";
    const ValueCandidate = [CandidateID];
    const [Candidate] = await DB.promise().query(GetCandidate, ValueCandidate);
    // console.log(Candidate[0]?.job_application);

    //Update JobApplication
    let job_application = Candidate[0]?.job_application || 0;
    job_application += 1;
    const UpdateJobApplicationinCandidator =
      "UPDATE candidates SET job_application=? WHERE id =?";
    const VALUE = [job_application, CandidateID];
    await DB.promise().query(UpdateJobApplicationinCandidator, VALUE);

    //getCandiddate from Job
    const GetCandidateinJob = "SELECT Candidates FROM job WHERE id = ?";
    const ValueGetCandidateinJob = [JobID];
    const [CandidateinJob] = await DB.promise().query(
      GetCandidateinJob,
      ValueGetCandidateinJob
    );
    let CurrentCandidateinJob = [];
    if (CandidateinJob.length > 0 && CandidateinJob[0].Candidates) {
      try {
        CurrentCandidateinJob = JSON.parse(CandidateinJob[0].Candidates) || [];
      } catch (e) {
        console.error("Error parsing Candidates JSON:", e);
        CurrentCandidateinJob = [];
      }
    }
    CurrentCandidateinJob.push(Candidate[0]);

    // Update JobID in  Candidate Table
    const UodateJobinCandidateQuery =
      "UPDATE candidates SET jobId=? WHERE id=?";
    const ValueUpdateJobinCandidate = [JobID, CandidateID];
    await DB.promise().query(
      UodateJobinCandidateQuery,
      ValueUpdateJobinCandidate
    );

    //Update Candidates in Job Table
    const UpdateJob = "UPDATE job SET Candidates = ? WHERE id = ?";
    const ValueUpdateJob = [JSON.stringify(CurrentCandidateinJob), JobID];
    const [result] = await DB.promise().query(UpdateJob, ValueUpdateJob);
    return res.status(200).json({ message: "Candidate added to job", result });
  } catch (err) {
    console.error("Error in CreateCandidateinStage:", err);
    return res.status(500).json({ message: "Internal server error", err });
  }
};
