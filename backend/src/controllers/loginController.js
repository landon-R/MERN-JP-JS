const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

exports.loginUser = async (req, res) => {
  try {
    const userEmail = await userModel.findOne({ email: req.body.email });
    if (!userEmail) {
      res.json({ ok: false, message: "Error: el email es incorrecto " });
    }

    const pass = await bcrypt.compare(req.body.password, userEmail.password);
    if (!pass) {
      res.json({ ok: false, message: "Error: el password es incorrecto " });
    }

    if (userEmail.estado ===  false) {
      res.json({ ok: false, message: "Warning: el user esta desabilitado " });
    }

    const token = jwt.sign(
      {
        id: userEmail._id,
        userName: userEmail.userName,
        email: userEmail.email,
        role: userEmail.role,
        estado: userEmail.estado,
      },
      process.env.SECRET,
      { expiresIn: 60 * 60 * 5 }
    );
    res.json({ ok: true, message: "Success: login correcto ", token });
  } catch (error) {
    res.json({ ok: false, error });
  }
};
