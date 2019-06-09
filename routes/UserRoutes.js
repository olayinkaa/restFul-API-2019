const express = require('express')
const router = express.Router()

let UserController = require('../controllers/UserController')



router.route('/')
    .get(UserController.read)

router.route('/create')
    .post(UserController.create)

router.route('/update/:id')
    .put(UserController.update)

router.route('/delete/:id')
    .delete(UserController.delete)




module.exports = router