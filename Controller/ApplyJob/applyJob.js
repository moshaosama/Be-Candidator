import DB from "../../ConnectDB/DB.js";

export const ApplyJob = async (req, res) => {
  try {
    const { jobId, candidateId } = req.body;

    if ((!jobId, !candidateId)) {
      res.status(404).json({
        statusbar: "Error",
        message: "Data is required",
      });
    }

    const Query = "INSERT INTO applyjob (jobId,candidateId) VALUES (?,?)";
    const Values = [jobId, candidateId];

    await DB.promise().query(Query, Values);

    return res.status(200).json({
      statusbar: "success",
      message: "Created Successfully!",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};
