const expresss = require("express");
const router = expresss.Router()

const {Test,Terms,Policies, ReturnPolicy, shippingPolicy ,transaction} = require('../authController/authController')

router.get('/api/v1/test', Test)
router.get('/', Test)
router.get('/terms-and-conditions', Terms)
router.get('/refound-policy', Policies)
router.get('/return-policy', ReturnPolicy)
router.get('/shipping-policy', shippingPolicy)

router.post('/transaction', transaction)

module.exports = router;