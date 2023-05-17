const express = require('express');
const router = express.Router();
const catCtrl = require('../controllers/cats')
const isLoggedIn = require('../config/auth');

router.post('/:customerId', isLoggedIn, catCtrl.addCatToCustomer)
router.delete('/:customerId/:catId', isLoggedIn, catCtrl.deleteCatFromCustomer)

module.exports = router;