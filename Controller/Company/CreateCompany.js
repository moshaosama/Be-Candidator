import DB from "../../ConnectDB/DB.js";

export const CreateCompany = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password, Language, Jobs, Tags } =
      req.body;

    if (!FirstName || !LastName || !Email || !Password || !Language) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const Name = `${FirstName} ${LastName}`;

    const query = `INSERT INTO Company (Name, Email, Password, Language, Jobs, Tags) VALUES (?, ?, ?, ?, ?, ?);`;
    const Values = [Name, Email, Password, Language, Jobs, Tags];

    await DB.promise().query(query, Values);

    return res.status(200).json({
      success: true,
      message: "Company created successfully!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
