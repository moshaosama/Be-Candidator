import DB from "../../ConnectDB/DB.js";
import bcrypt from "bcryptjs";

export const SignUp = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password } = req.body;
    if (!FirstName || !LastName || !Email || !Password) {
      return res.status(404).json({
        statusbar: "error",
        message: "Data is required",
      });
    }

    const Query =
      "INSERT INTO user (FirstName, LastName, Email, Password,Role) VALUES (?,?,?,?,?)";

    const HashPassword = await bcrypt.hash(Password, 12);

    const Values = [FirstName, LastName, Email, HashPassword, "Candidate"];

    await DB.promise().query(Query, Values);

    return res.status(200).json({
      statusbar: "success",
      message: "Created User Successfully!",
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err });
  }
};
