const expresss = require("express");
const router = expresss.Router()

const {Test,transaction} = require('../authController/authController')

router.get('/api/v1/test', Test)
router.get('/', Test)
router.post('/transaction', transaction)

module.exports = router;