const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

//_* CREATED UN USER
exports.createUser = async (req, res) => {
  try {
    const user = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        estado: req.body.estado,
        role: req.body.role,
    })
    const existeEmail = await userModel.findOne({email: req.body.email})
    if (existeEmail) {
        res.json({ ok: false, message: 'Error: el email ya existe' });
    } else {
        await user.save()
        console.log(user);
        res.json({ ok: true, message: 'Success: user created successfully' });
    }
  } catch (error) {
    res.json({ ok: false, error });
  }
};

//_* OBTIENE ALL TODOS LOS USUARIOS
exports.getUsers = async (req, res) => {
  try {
    let limit = parseInt(req.query.limit) || 10  
    let page = parseInt(req.query.page) || 1  
    const user = await userModel.paginate({ estado: true }, { limit, page });
    res.json(user);
  } catch (error) {
    res.json({ ok: false, error });
  }
};

//_* OBTIENE A USER
exports.getUser = async (req, res) => {
  try {
    const user = await userModel.findById({_id: req.params.idUser})  
    res.json({ ok: true, user });
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
