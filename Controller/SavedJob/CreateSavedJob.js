import DB from "../../ConnectDB/DB.js";

export const CreateSavedJob = async (req, res, next) => {
  try {
    const { job_id } = req.params;
    if (!job_id) {
      return res.status(404).json({
        statusbar: "errro",
        message: "jobId is required",
      });
    }

    const Query = "INSERT INTO saved_jobs (job_id) VALUES (?)";
    const Value = [job_id];

    await DB.promise().query(Query, Value);

    return res.status(200).json({
      statusbar: "success",
      message: "Created SavedJob successfully!",
    });
  } catch (error) {
    next(error);
  }
};
