import DB from "../../ConnectDB/DB.js";

export const getResumes = async (req, res, next) => {
  try {
    const { candidate_id } = req.params;

    if (!candidate_id) {
      return res.status(404).json({
        statusbar: "error",
        message: "candidate_id is required",
      });
    }

    const Query = "SELECT * FROM resumes WHERE candidate_id =?";
    const Value = [candidate_id];

    const [result] = await DB.promise().query(Query, Value);

    return res.status(200).json({
      statusbar: "success",
      result,
    });
  } catch (err) {
    next(err);
  }
};
