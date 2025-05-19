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
    const createJob = `INSERT INTO job (JobTitle, Description, Location, Gender, NumNeeded, Commitment , Department , Contact ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
    const createJobValues = [
      JobTitle,
      Description,
      Location,
      Gender,
      NumNeeded,
      Commitment,
      Department,
      Contact,
    ];
    const [result] = await DB.promise().query(createJob, createJobValues);

    //Get Job by ID
    const GetJob = `SELECT * FROM job WHERE id = ?`;
    const GetJobValues = [result.insertId];
    const [Job] = await DB.promise().query(GetJob, GetJobValues);

    // //Update Company
    const { companyID } = req.body;
    if (!companyID) {
      return res.status(400).json({
        success: false,
        message: "Company ID is required",
      });
    }
    const UpdateCompany = "UPDATE company SET Jobs = ? WHERE id = ?";
    const UpdateCompanyValues = [JSON.stringify(Job[0]), companyID];
    await DB.promise().query(UpdateCompany, UpdateCompanyValues);

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
