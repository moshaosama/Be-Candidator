import Joi from "joi";
import DB from "../../ConnectDB/DB.js";

const UserParams = Joi.object({
  user_id: Joi.number().required(),
});

const UserBody = Joi.object({
  FirstName: Joi.string().optional(),
  LastName: Joi.string().optional(),
  Email: Joi.string().email().optional(),
}).min(1);

export const ChanegUserProfile = async (req, res) => {
  const { value: paramsValue, error: paramsError } = UserParams.validate(
    req.params
  );
  const { value: bodyValue, error: bodyError } = UserBody.validate(req.body);

  const { user_id } = paramsValue;

  if (paramsError) {
    return res.status(400).json({
      success: false,
      message: paramsError.details[0].message,
    });
  }

  if (bodyError) {
    return res.status(400).json({
      success: false,
      message: bodyError.details[0].message,
    });
  }

  const Fields = Object.keys(bodyValue);
  const Values = Object.values(bodyValue);
  const setClause = Fields.map((el) => `${el} = ?`).join(", ");

  try {
    const Query = `UPDATE user SET ${setClause} WHERE id = ?`;
    const Value = [...Values, user_id];

    await DB.promise().query(Query, Value);

    const [result] = await DB.promise().query(
      "SELECT * FROM user WHERE id = ?",
      [user_id]
    );

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      result,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
    });
  }
};
