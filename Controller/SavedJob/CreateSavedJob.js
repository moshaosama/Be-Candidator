import DB from "../../ConnectDB/DB.js";

export const CreateSavedJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    if (!jobId) {
      return res.status(404).json({
        statusbar: "errro",
        message: "jobId is required",
      });
    }

    const Query = "INSERT INTO saved_jobs (job_id) VALUES (?)";
    const Value = [jobId];

    await DB.promise().query(Query, Value);

    return res.status(200).json({
      statusbar: "success",
      message: "Created SavedJob successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting recruiter",
      error: error.message,
    });
  }
};
