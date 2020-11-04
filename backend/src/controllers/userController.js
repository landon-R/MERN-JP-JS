const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

//_* CREATED UN USER
exports.createUser = async (req, res) => {
  try {
    res.json({ ok: true, error });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

//_* OBTIENE ALL TODOS LOS USUARIOS
exports.getUsers = async (req, res) => {
  try {
    res.json({ ok: true, error });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

//_* OBTIENE A USER
exports.getUser = async (req, res) => {
  try {
    res.json({ ok: true, error });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

//_* UPDATE A USER
exports.updateUser = async (req, res) => {
  try {
    res.json({ ok: true, error });
  } catch (error) {
    res.json({ ok: false, error });
  }
};

//_* DELETE A USER
exports.deleteUser = async (req, res) => {
  try {
    res.json({ ok: true, error });
  } catch (error) {
    res.json({ ok: false, error });
  }
};
