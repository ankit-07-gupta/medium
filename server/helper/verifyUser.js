const { User } = require("../models/User");
const createHttpError = require("http-errors");

module.exports.verifyUser = async (req, res, next) => {
  try {
    const user_id = req.cookies.userId;
    const user = await User.findById(user_id);
    if (!user) {
      throw createHttpError.BadRequest("Not Allowed On This Route");
    }
    next();
  } catch (err) {
    console.log(err.message);
  }
};
