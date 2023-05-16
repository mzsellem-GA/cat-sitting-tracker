const express = require('express');
const router = express.Router();

const catCtrl = require('../controllers/cats')

router.post('/customers/:customerId', catCtrl.addCatToCustomer)


module.exports = router;