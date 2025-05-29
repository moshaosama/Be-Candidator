import DB from "../../ConnectDB/DB.js";

export const EditDetailsCandidates = async (req, res) => {
  try {
    const { candidateId } = req.params;
    const columns = [
      "FirstName",
      "LastName",
      "Email",
      "Password",
      "LinkedInProfile",
      "Resume",
      "Stages",
      "jobId",
      "job_application",
      "phoneNumber",
      "Location",
      "About",
      "Skills",
    ];
    const data = req.body;
    const QueryGetCandidateByid = "SELECT * FROM candidates WHERE id =?";
    const Value = [candidateId];

    const [result] = await DB.promise().query(QueryGetCandidateByid, Value);

    const setClause = columns
      .map((col) => {
        const value =
          data[col] !== undefined ? `'${data[col]}'` : `'${result[0]?.[col]}'`;
        return `${col} = ${value}`;
      })
      .join(", ");

    const QueryEditCandidate = `UPDATE candidates SET ${setClause} WHERE id = ?;`;
    const Values = [candidateId];

    await DB.promise().query(QueryEditCandidate, Values);

    return res.status(200).json({
      statusbar: "success",
      message: "Updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
};
