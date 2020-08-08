const {Router} = require('express')

const router = Router()

const {getPacientes, createPaciente, updatePaciente, getPaciente, deletePaciente} = require('../controllers/pacienteController')

router.post('/pacientes', createPaciente)
router.get('/pacientes', getPacientes)
router.get('/pacientes/:IdPaciente', getPaciente)
router.put('/pacientes/:IdPaciente', updatePaciente)
router.delete('/pacientes/:IdPaciente', deletePaciente )


module.exports = router