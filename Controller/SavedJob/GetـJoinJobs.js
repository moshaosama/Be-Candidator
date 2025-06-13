import DB from "../../ConnectDB/DB.js";

export const GetJoinJobs = async (req, res, next) => {
  try {
    const Query =
      "SELECT * FROM job INNER JOIN saved_jobs AS SJ ON job.id = SJ.job_id";

    const [result] = await DB.promise().query(Query);
    if (result.length === 0) {
      return res.status(404).json({ message: "No SavedJobs found" });
    }

    return res.status(200).json({
      statusbar: "success",
      result,
    });
  } catch (error) {
    next(error);
  }
};
