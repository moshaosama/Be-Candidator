import DB from "../../ConnectDB/DB.js";

export const GetStages = async (req, res) => {
  try {
    const Query = `SELECT * FROM stages`;
    const [result] = await DB.promise().query(Query);

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
