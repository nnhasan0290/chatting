export const signupController = (req, res, nex) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
  res.send("signup is working");
};
