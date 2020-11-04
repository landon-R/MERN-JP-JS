const {Router} = require('express');


const { createUser} = require('../controllers/userController')
const router = Router()

router.post('/user', createUser )
router.get('/user', createUser )
router.get('/user/:idUser', createUser )
router.put('/user/:idUser', createUser )
router.delete('/user/:idUser', createUser )


module.exports = router