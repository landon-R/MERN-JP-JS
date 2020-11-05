const {Router} = require('express');


const {verificaToken, token_ADMIN_ROLE} = require('../middlewares/authToken')

const { createUser, getUsers, getUser, updateUser, deleteUser} = require('../controllers/userController')
const router = Router()

router.post('/user', createUser )
router.get('/user', [verificaToken, token_ADMIN_ROLE], getUsers )
router.get('/user/:idUser', getUser )
router.put('/user/:idUser', updateUser )
router.delete('/user/:idUser', deleteUser )


module.exports = router