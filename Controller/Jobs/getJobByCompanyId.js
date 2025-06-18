import DB from "../../ConnectDB/DB.js";

export const getJobByCompanyId = async (req, res) => {
  try {
    const { company_id } = req.params;
    if (!company_id) {
      return res.status(400).json({
        success: false,
        message: "data is required",
      });
    }
    const GetJob = `SELECT * FROM job WHERE company_id = ?`;
    const GetJobValues = [company_id];
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
