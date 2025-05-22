import jwt from "jsonwebtoken";
import DB from "../../ConnectDB/DB.js";
import bcrypt from "bcryptjs";

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
      return res.status(404).json({
        statusbar: "error",
        message: "Data is Required",
      });
    }
    const User = "SELECT * FROM user WHERE Email = ?";
    const Value = [Email];

    const [result] = await DB.promise().query(User, Value);

    if (result.length === 0) {
      return res.status(404).json({
        statusbar: "error",
        message: "You Don't have any Account with this email",
      });
    }
    if (!(await bcrypt.compare(Password, result[0]?.Password))) {
      return res.status(404).json({
        statusbar: "error",
        message: "Please Enter Your valid password",
      });
    }
    const Token = jwt.sign({ id: result[0]?.id }, "OSAMAFEKRYHESSIN");

    return res.status(200).json({
      statusbar: "success",
      message: "Login Successful",
      result: result[0],
      Token,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error", err });
  }
};
