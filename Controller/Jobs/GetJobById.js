import DB from "../../ConnectDB/DB.js";

export const GetJobById = async (req, res) => {
  try {
    const { jobId } = req.params;
    if (!jobId) {
      return res.status(400).json({
        success: false,
        message: "Job ID is required",
      });
    }
    const GetJob = `SELECT * FROM job WHERE id = ?`;
    const GetJobValues = [jobId];
    const [result] = await DB.promise().query(GetJob, GetJobValues);
    return res.status(200).json({
      success: true,
      message: "Job Fetched Successfully",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
