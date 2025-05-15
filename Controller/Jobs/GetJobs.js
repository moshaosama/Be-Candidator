import DB from "../../ConnectDB/DB.js";

export const GetJobs = async (req, res) => {
  try {
    const query = `SELECT * FROM job`;
    const [result] = await DB.promise().query(query);

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};
