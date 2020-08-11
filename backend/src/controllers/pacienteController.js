const PacienteModels = require("../models/PacienteModels");

// obtiene todo lso pacintes
exports.getPacientes = async (req, res, next) => {
  try {
    const paciente = await PacienteModels
    .find({})
    // .limit(3)   // limitar cuanto valores puedes mostrar un get
    res.json(paciente);
  } catch (error) {
    res.json(error);
    next();
  }
};

// create pacientes
exports.createPaciente = async (req, res, next) => {
  try {
    const paciente = new PacienteModels(req.body);
    res.json({ message: "paciente create successfully " });
    await paciente.save();
  } catch (error) {
    res.send(error);
    next();
  }
};

// obtener un paciente
exports.getPaciente = async (req, res, next) => {
  try {
    const paciente = await PacienteModels.findById({_id: req.params.IdPaciente});
    res.json(paciente);
  } catch (error) {
    res.send(error);
    next();
  }
};

// update one paciente
exports.updatePaciente = async (req, res, next) => {
  try {
    const paciente = await PacienteModels.findOneAndUpdate(
      { _id: req.params.IdPaciente },
      req.body,
      { new: true }
    );
    res.json(paciente)
  } catch (error) {
    res.send(error);
    next();
  }
};

// delete
exports.deletePaciente = async (req, res, next) => {
  try {
    const paciente = await PacienteModels.findOneAndDelete({
      _id: req.params.IdPaciente,
    });
    res.json({
      message: `paciente ${paciente.propietario} deleted successfully`,
    });
  } catch (error) {
    res.send(error);
    next();
  }
};

