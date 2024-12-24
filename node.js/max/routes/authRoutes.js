const {Router} = require('express')
const authController = require('../controllers/authController.js')

console.log(authController);

const router = Router()

router.get('/signup', authController.signup__get)
router.post('/signup', authController.signup__post)

router.get('/login', authController.login__get)
router.post('/login', authController.login__post)

module.exports = router