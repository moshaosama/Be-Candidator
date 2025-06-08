import DB from "../../ConnectDB/DB.js";

export const CreateSkill = async (req, res) => {
  try {
    const { candidator_id, Skill } = req.body;
    if ((!candidator_id, !Skill)) {
      res.status(404).json({
        statusbar: "Error",
        message: "Data is required",
      });
    }
    const Query = "INSERT INTO skills (candidator_id, Skill) VALUES (?, ?)";
    const Values = [candidator_id, Skill];

    await DB.promise().query(Query, Values);

    res.status(200).json({
      statusbar: "success",
      message: "Created Skill Successfully!",
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
