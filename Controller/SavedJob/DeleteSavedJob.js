import DB from "../../ConnectDB/DB.js";

export const DeleteSavedJob = async (req, res, next) => {
  try {
    const { job_id } = req.params;

    if (!job_id) {
      return res.status(400).json({
        statusbar: "error",
        message: "Please enter job_id",
      });
    }

    const Query = "DELETE FROM saved_jobs WHERE job_id=?";
    const Value = [job_id];

    const [result] = await DB.promise().query(Query, Value);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        statusbar: "error",
        message: "Job not found or already deleted",
      });
    }

    return res.status(200).json({
      statusbar: "success",
      message: "Deleted Job Successfully",
    });
  } catch (error) {
    next(error);
  }
};
