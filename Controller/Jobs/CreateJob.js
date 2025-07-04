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
    const { companyID } = req.body;
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
    const createJob = `INSERT INTO job (JobTitle, Description, Location, Gender, NumNeeded, Commitment , Department , Contact,company_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?);`;
    const createJobValues = [
      JobTitle,
      Description,
      Location,
      Gender,
      NumNeeded,
      Commitment,
      Department,
      Contact,
      companyID,
    ];
    const [result] = await DB.promise().query(createJob, createJobValues);

    //Create DefaultStage
    const defaultStages = JSON.stringify([
      { id: 1, stageTitle: "Pending" },
      { id: 2, stageTitle: "Interview" },
      { id: 3, stageTitle: "Hired" },
      { id: 4, stageTitle: "Rejected" },
    ]);
    const UpdateStages = `UPDATE job SET Stages = ? WHERE id = ?`;
    const UpdateStagesValues = [defaultStages, result.insertId];
    await DB.promise().query(UpdateStages, UpdateStagesValues);

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
