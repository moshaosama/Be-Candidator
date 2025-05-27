import DB from "../../ConnectDB/DB.js";

export const getCandidateById = async (req, res) => {
  try {
    const { candidateId } = req.params;
    if (!candidateId) {
      res.status(404).json({
        statusbar: "error",
        message: "Data is required",
      });
    }

    const Query = "SELECT * FROM candidates WHERE id = ?";
    const Value = [candidateId];

    const [result] = await DB.promise().query(Query, Value);

    res.status(200).json({
      statusbar: "successsadasd",
      result,
    });
  } catch (err) {
    return res.status(500).json({
      statusbar: "error",
      message: err.message,
    });
  }
};
