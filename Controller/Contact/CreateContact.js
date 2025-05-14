import DB from "../../ConnectDB/DB.js";

export const CreateContact = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Password, TelePhone, LinkedinUrl } =
      req.body;

    const query = `INSERT INTO contact (FirstName, LastName, Email, Password, TelePhone, LinkedinUrl) VALUES (?, ?, ?, ?, ?, ?);`;
    const Values = [
      FirstName,
      LastName,
      Email,
      Password,
      TelePhone,
      LinkedinUrl,
    ];

    await DB.promise().query(query, Values);
    return res.status(200).json({
      success: true,
      message: "Contact Created Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};
