import bcrypt from "bcryptjs";
import DB from "../../ConnectDB/DB.js";

export const createCandidate = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password, LinkedInProfile, Resume } =
      req.body;

    if (!FirstName || !LastName || !Email || !Password || !LinkedInProfile) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const Query = `INSERT INTO candidates (FirstName, LastName, Email, Password, LinkedInProfile, Resume,job_application) VALUES (?, ?, ?, ?, ?, ?,?);`;
    const Values = [
      FirstName,
      LastName,
      Email,
      hashedPassword,
      LinkedInProfile,
      Resume,
      0,
    ];

    await DB.promise().query(Query, Values);

    return res.status(200).json({
      success: true,
      message: "Candidate created successfully",
    });
  } catch (error) {
    console.error("CREATE CANDIDATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
