import User from "../models/userModel.js";

const isAuthenticated = async (req, res, nex) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw { message: "Token not found" };
    }
    req.user = await User.findById(token).select("-password");
    nex();
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};


export default isAuthenticated;
