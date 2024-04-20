const userModel = require("../models/userModel");

const {
  hashPassword,
  comparePassword,
} = require("../helpers/authPasswordHelper");
const jwt = require("jsonwebtoken");

module.exports = {
  registerController: async (req, res) => {
    try {
      console.log("in register");
      const { name, email, password, phone, address } = req.body;

      if (!name || !email || !password || !phone || !address) {
        res
          .status(200)
          .send({ message: "Please fill all required feilds", success: false });

        return;
      }

      const existingUser = await userModel.findOne({ email: email });

      if (existingUser) {
        res.status(200).send({
          message: "User Already Registered please login",
        });
        return;
      }
      const hashedPassword = await hashPassword(password);
      console.log(hashedPassword);

      const user = await new userModel({
        name,
        email,
        phone,
        address,
        password: hashedPassword,
      }).save();

      res.status(200).send({
        success: true,
        message: "User Registered Successfully",
        user: user,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in registeration",
      });
    }
  },
  loginController: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Please enter all details",
          error,
        });
      }

      //check user
      const user = await userModel.findOne({ email });

      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email doesn't exists.",
        });
      }
      const match = await comparePassword(password, user.password);

      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }

      const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      return res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  },
};
