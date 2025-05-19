import DB from "../../ConnectDB/DB.js";

export const createStage = async (req, res) => {
  try {
    const { stageTitle } = req.body;
    if (!stageTitle) {
      return res.status(400).json({
        success: false,
        message: "Stage title is required",
      });
    }

    const { jopID } = req.params;
    if (!jopID) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }

    // Get current job data
    const GetStagesJob = "SELECT * FROM job WHERE id = ?";
    const GetStagesJobValue = [jopID];
    const [result] = await DB.promise().query(GetStagesJob, GetStagesJobValue);

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Parse current stages
    const currentStages = JSON.parse(result[0].Stages || "[]");

    // Add new stage
    const newStage = {
      id: currentStages.length + 1,
      stageTitle,
    };

    currentStages.push(newStage);

    // Update database
    const UpdateStages = "UPDATE job SET Stages = ? WHERE id = ?";
    const UpdateStagesValues = [JSON.stringify(currentStages), jopID];

    await DB.promise().query(UpdateStages, UpdateStagesValues);

    return res.status(200).json({
      success: true,
      message: "Stage created successfully",
      stages: currentStages,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};