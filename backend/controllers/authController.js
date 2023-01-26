import User from "../models/userModel.js";

export const signupController = async (req, res, nex) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const loginController = async (req, res, nex) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw { message: "user Not found" };
    }
    if (user.password !== req.body.password) {
      throw { message: "Password is not right" };
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
