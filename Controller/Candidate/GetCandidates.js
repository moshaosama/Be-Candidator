import DB from "../../ConnectDB/DB.js";

export const getCandidates = async (req, res) => {
  try {
    const Query = `SELECT * FROM candidates`;
    const [result] = await DB.promise().query(Query);

    res.status(200).json({
      success: true,
      message: "Candidates fetched successfully",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
