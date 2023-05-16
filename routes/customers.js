const express = require('express');
const router = express.Router();
const customerCtrl = require('../controllers/customers')

router.get('/', customerCtrl.index)
router.get('/new', customerCtrl.newCustomer)



module.exports = router;