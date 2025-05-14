import DB from "../../ConnectDB/DB.js";

export const GetComanyByID = async (req, res) => {
  try {
    const { companyId } = req.params;

    const query = `SELECT * FROM company WHERE id = ?`;
    const [result] = await DB.promise().query(query, [companyId]);

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
