import DB from "../../ConnectDB/DB.js";

export const GetCandidateByStage = async (req, res) => {
  try {
    const { stageTitle } = req.params;
    if (!stageTitle) {
      return res.status(400).json({ message: "Stage title is required" });
    }
    const GetCandidateByStage = "SELECT * FROM candidates WHERE Stages = ?";
    const ValueGetCandidateByStage = [stageTitle];
    const [result] = await DB.promise().query(
      GetCandidateByStage,
      ValueGetCandidateByStage
    );
    return res.status(200).json({ message: "Candidate by stage", result });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
