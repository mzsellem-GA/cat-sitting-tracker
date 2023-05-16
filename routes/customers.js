const express = require('express');
const router = express.Router();
const customerCtrl = require('../controllers/customers')

router.get('/', customerCtrl.index)
router.get('/new', customerCtrl.newCustomer)
router.get('/:id', customerCtrl.show)
router.post('/', customerCtrl.create)




module.exports = router;