import DB from "../../ConnectDB/DB.js";

export const GetCandidateByStage = async (req, res) => {
  try {
    const { jobId, stageTitle } = req.params;

    if (!stageTitle) {
      return res.status(400).json({ message: "Stage title is required" });
    }

    const query = "SELECT Candidates FROM job WHERE id = ?";
    const values = [jobId];

    const [result] = await DB.promise().query(query, values);

    const candidates = JSON.parse(result[0].Candidates);
    let candidatesByStage;

    if (candidates) {
      candidatesByStage = candidates.filter(
        (candidate) => candidate.Stages === stageTitle
      );
    }

    return res
      .status(200)
      .json({ message: "Candidates by stage", result: candidatesByStage });
  } catch (error) {
    console.error("Error in GetCandidateByStage:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};
