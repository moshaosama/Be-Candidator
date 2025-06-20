import Joi from "joi";
import DB from "../../ConnectDB/DB.js";
import bcrypt from "bcryptjs";

const UserBody = Joi.object({
  old_password: Joi.string().required(),
  new_password: Joi.string().required(),
});

const UserParams = Joi.object({
  user_id: Joi.string().required(),
});

export const ChangePassword = async (req, res) => {
  const { value: valueUserBody, error: errorUserBody } = UserBody.validate(
    req.body
  );
  const { value: valueUserParams, error: errorUserParams } =
    UserParams.validate(req.params);

  if (errorUserBody) {
    return res.status(404).json({
      statusbar: "error",
      message: errorUserBody,
    });
  }

  if (errorUserParams) {
    return res.status(404).json({
      statusbar: "error",
      message: errorUserParams,
    });
  }

  try {
    const { user_id } = valueUserParams;
    const { old_password, new_password } = valueUserBody;
    const QueryGetUser = "SELECT * FROM user WHERE id = ?";
    const ValueGetUser = [user_id];
    const [result] = await DB.promise().query(QueryGetUser, ValueGetUser);

    // console.log(result[0].Password);

    if (!(await bcrypt.compare(old_password, result[0].Password))) {
      return res.status(404).json({
        statusbar: "error",
        message: "Password is invalid",
      });
    }

    const Query = "UPDATE user SET Password = ? WHERE id = ?";
    const hashNew_Password = await bcrypt.hash(new_password, 12);

    const Value = [hashNew_Password, user_id];

    await DB.promise().query(Query, Value);

    return res.status(200).json({
      statusbar: "success",
      message: "Updated password Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
    });
  }
};
