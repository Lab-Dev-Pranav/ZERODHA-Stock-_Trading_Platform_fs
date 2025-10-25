const UserModel = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserModel.create({
      email,
      password,
      username,
      createdAt,
    });
    const token = createSecretToken(user._id);
    const isProd = process.env.NODE_ENV === "production";

    // Set cookie; in development we avoid secure/httpOnly restrictions so localhost works.
    res.cookie("token", token, {
      path: "/",
      httpOnly: isProd, // allow JS access in dev so dashboard can read if needed; lock down in prod
      secure: isProd, // require HTTPS in production
      sameSite: isProd ? "none" : "lax",
    });

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
      token, // return token so other clients (dashboard) can store/use it if cookies are problematic in dev
    });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    const isProd = process.env.NODE_ENV === "production";

    res.cookie("token", token, {
      path: "/",
      httpOnly: isProd,
      secure: isProd,
      sameSite: isProd ? "none" : "lax",
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token, // returning token so dashboard/other clients can use Authorization header if needed
    });
    next();
  } catch (error) {
    console.error(error);
  }
};
