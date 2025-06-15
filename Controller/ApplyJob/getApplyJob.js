import DB from "../../ConnectDB/DB.js";

export const getApplyJob = async (req, res) => {
  try {
    const { candidator_id } = req.params;
    if (!candidator_id) {
      res.status(404).json({
        statusbar: "error",
        message: "Data is required",
      });
    }
    const Query =
      "SELECT * FROM  applyjob WHERE candidateId =? AND isApply= true";
    const Value = [candidator_id];

    const [result] = await DB.promise().query(Query, Value);

    const QueryApply =
      "SELECT * FROM applyjob AS A INNER JOIN job AS J ON  A.jobId = J.id WHERE isApply='true' And candidateId=?";

    const ValueApply = [candidator_id];

    const [resultApply] = await DB.promise().query(QueryApply, ValueApply);

    if (resultApply.length == 0) {
      res.status(404).json({
        statusbar: "error",
        message: "You don't have any Job",
      });
    }

    res.status(200).json({
      statusbar: "Success",
      result: resultApply,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};

export const getAllApplyJob = async (req, res, next) => {
  try {
    const Query = "SELECT * FROM applyjob";
    const [result] = await DB.promise().query(Query);
    return res.status(200).json({
      statusbar: "success",
      result,
    });
  } catch (err) {
    next(err);
  }
};
