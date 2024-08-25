const jwt = require("jsonwebtoken");

module.exports = {
  requireSignIn: async (req, res, next) => {
    try {
      console.log(req.headers);
      const decode = await jwt.verify(
        req.headers.authorization,
        process.env.JWT_SECRET
      );

      req.user = decode;

      next();
    } catch (error) {
      console.log(error);
      return res.status(401).send({
        success: false,
        message: "Error in signIn midleware",
      });
    }
  },
  isAdmin: async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
      if (user.role != 1) {
        return res.status(401).send({
          success: false,
          message: "Unauthorized access",
        });
      }

      next();
    } catch (error) {
      console.log(error);
      return res.status(401).send({
        success: false,
        message: "Error in admin midleware",
      });
    }
  },
};
