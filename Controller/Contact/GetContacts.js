import DB from "../../ConnectDB/DB.js";

export const GetContacts = async (req, res) => {
  try {
    const query = `SELECT * FROM contact`;
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
