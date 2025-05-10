import DB from "../../ConnectDB/DB.js";

export const deleteAllRecruiter = async (req, res) => {
  try {
    const Query = "DELETE FROM recruiter";
    await DB.promise().query(Query);

    res.status(200).json({
      message: "All recruiter deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting all recruiter",
      error: error.message,
    });
  }
};

export const deleteRecruiterById = async (req, res) => {
  try {
    const { id } = req.params;

    const Query = "DELETE FROM recruiter WHERE id = ?";
    await DB.promise().query(Query, [id]);

    res.status(200).json({
      message: "Recruiter deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting recruiter",
      error: error.message,
    });
  }
};
