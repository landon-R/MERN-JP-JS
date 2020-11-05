const jwt = require("jsonwebtoken");


//_* VERIFICA SI TIENE TOKEN
exports.verificaToken = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      res.json({ ok: false, message: "Error: por falta de token" });
    }

    jwt.verify(token, process.env.SECRET, (err, tokenDecode) => {
      if (err) {
        res.json({ ok: false, message: "Error: token no valido" });
      } else {
        req.user = tokenDecode
        console.log(req.user);
        next();
      }
    });
  } catch (error) {
    res.json({ ok: false, message: "Error: token", error });
    next();
  }
};



//_* VERIFICA TOKEN  TIENE ROLE DE ADMIN

exports.token_ADMIN_ROLE = (req, res, next) => {
  if (req.user.role !== "ADMIN_ROLE") {
    res.json({
      ok: false,
      message: "Error: no tienes permiso de administrador",
    });
  } else {
    next();
  }
};