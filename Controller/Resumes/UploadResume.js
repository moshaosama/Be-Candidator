import DB from "../../ConnectDB/DB.js";

export const UploadResume = async (req, res, next) => {
  try {
    const { Resume, candidate_id } = req.body;
    const options = { year: "numeric", month: "short", day: "2-digit" };
    const currentDate = new Date().toLocaleDateString("en-US", options);

    if ((!Resume, !candidate_id)) {
      return res.status(404).json({
        statusbar: "error",
        message: "Data is required",
      });
    }

    const Query =
      "INSERT INTO resumes (Resume, candidate_id, Date) VALUES (?,?,?)";

    const Value = [Resume, candidate_id, currentDate];

    await DB.promise().query(Query, Value);

    return res.status(200).json({
      statusbar: "success",
      message: "Added Resume successfully",
    });
  } catch (err) {
    next(err);
  }
};
