import bcrypt from "bcryptjs";
import DB from "../../ConnectDB/DB.js";

export const createCandidate = async (req, res) => {
  try {
  } catch (error) {
    const { FirstName, Lastname, Email, Password, LinkedInProfile, Resume } =
      req.body;

    if (!FirstName || !Lastname || !Email || !Password || !LinkedInProfile) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    const Query = `INSERT INTO candidates (FirstName, Lastname, Email, Password, LinkedInProfile, Resume) VALUES (?, ?, ?, ?, ?, ?);`;
    const Values = [
      FirstName,
      Lastname,
      Email,
      hashedPassword,
      LinkedInProfile,
      Resume,
    ];

    await DB.promise().query(Query, Values);

    res.status(200).json({
      success: true,
      message: "Candidate created successfully",
    });

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
