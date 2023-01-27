import User from "../models/userModel.js";

export const signupController = async (req, res, nex) => {
  try {
    const user = await User.create(req.body);

    res.status(200).cookie("token", user._id).json({ user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const loginController = async (req, res, nex) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (!user) {
      throw { message: "user Not found" };
    }
    if (user.password !== req.body.password) {
      throw { message: "Password is not right" };
    }
    res.status(200).cookie("token", user._id).json({ user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const loadUser = async (req, res, nex) => {
  try {
    const { token } = req.cookies;
    console.log(req.cookie, req.cookies);
    if (!token) {
      throw { message: "token not found" };
    }
    const user = await User.findOne({ _id: token });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const logoutUser = async (req, res, nex) => {
  try {
    const { token } = req.cookies;
    console.log(req.cookie, req.cookies);
    if (!token) {
      throw { message: "token not found" };
    }
    res.status(200).clearCookie("token").json({ success: true });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
