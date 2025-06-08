import DB from "../../ConnectDB/DB.js";

export const GetSkillById = async (req, res) => {
  try {
    const { candidator_id } = req.params;
    if (!candidator_id) {
      res.status(404).json({
        statusbar: "error",
        message: "Data is required",
      });
    }

    const Query = "SELECT * FROM skills WHERE candidator_id=?";
    const Value = [candidator_id];

    const [result] = await DB.promise().query(Query, Value);

    if (result.length == 0) {
      res.status(404).json({
        statusbar: "error",
        message: "You don't have any Skill",
      });
    }

    res.status(200).json({
      statusbar: "Success",
      result,
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
