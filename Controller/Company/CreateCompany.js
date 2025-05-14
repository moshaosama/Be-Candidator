import DB from "../../ConnectDB/DB.js";
import bcrypt from "bcryptjs";

export const CreateCompany = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password, Language } = req.body;

    if (!FirstName || !LastName || !Email || !Password || !Language) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const Name = `${FirstName} ${LastName}`;
    const HashPassword = await bcrypt.hash(Password, 12);

    // const query = `INSERT INTO Company (Name, Email, Password, Language, Jobs, Tags) VALUES (?, ?, ?, ?, ?, ?);`;
    const query = `INSERT INTO company (Name, Email, Password, Language) VALUES (?, ?, ?, ?);`;
    const Values = [Name, Email, HashPassword, Language];

    await DB.promise().query(query, Values);

    return res.status(200).json({
      success: true,
      message: "Company created successfully!",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
