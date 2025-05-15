import DB from "../../ConnectDB/DB.js";

export const CreateJob = async (req, res) => {
  try {
    const {
      JobTitle,
      Description,
      Location,
      Gender,
      NumNeeded,
      Commitment,
      Department,
      Contact,
    } = req.body;
    if (
      !JobTitle ||
      !Description ||
      !Location ||
      !Gender ||
      !NumNeeded ||
      !Commitment ||
      !Department ||
      !Contact
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const query = `INSERT INTO job (JobTitle, Description, Location, Gender, NumNeeded, Commitment , Department , Contact ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
    const Values = [
      JobTitle,
      Description,
      Location,
      Gender,
      NumNeeded,
      Commitment,
      Department,
      Contact,
    ];
    await DB.promise().query(query, Values);

    return res.status(200).json({
      success: true,
      message: "Job Created Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};
