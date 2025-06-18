import DB from "../../ConnectDB/DB.js";

export const GetCandidateByStage = async (req, res) => {
  try {
    const { stageTitle, jobId } = req.params;

    if (!stageTitle) {
      return res.status(400).json({ message: "data is required" });
    }

    const Query = `
          SELECT *  
          FROM applyjob 
          INNER JOIN candidates ON applyjob.candidateId = candidates.id 
          INNER JOIN job ON applyjob.jobId = job.id 
          WHERE applyjob.stage = ?
          AND applyjob.jobId =?
        `;

    const values = [stageTitle, jobId];

    const [candidatesByStage] = await DB.promise().query(Query, values);

    return res.status(200).json({
      statusbar: "success",
      result: candidatesByStage,
    });
  } catch (error) {
    console.error("Error in GetCandidateByStage:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
};
