const UserModel = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    // Accept token either from Authorization header (Bearer) or cookie
    const authHeader = req.headers.authorization || req.headers.Authorization;
    const headerToken = authHeader && authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
    const cookieToken = req.cookies && req.cookies.token ? req.cookies.token : null;

    const token = headerToken || cookieToken;
    if (!token) return res.json({ status: false });

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) return res.json({ status: false });
      const user = await UserModel.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      return res.json({ status: false });
    });
  } catch (error) {
    console.error(error);
    return res.json({ status: false });
  }
};
