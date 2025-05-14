import DB from "../../ConnectDB/DB.js";

export const GetCompanies = async (req, res) => {
  try {
    const query = `SELECT * FROM company`;
    const [result] = await DB.promise().query(query);

    return res.status(200).json({
      success: true,
      message: "Companies fetched successfully!",
      result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
