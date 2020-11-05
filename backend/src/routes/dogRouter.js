const {Router} = require('express');

//MIDDLEWARE
const {uploadImage} = require('../middlewares/imageMulter')


//ROUTERS
const router = Router()
const {createDog, getDogs_all, getDog, updateDog, deleteDog} = require('../controllers/dogController')

router.post('/dog', uploadImage.single('image'),  createDog)
router.get('/dog', getDogs_all)
router.get('/dog/:idDog', getDog)
router.put('/dog/:idDog', updateDog)
router.delete('/dog/:idDog', deleteDog)

module.exports = router