const express = require('express');
const router = express.Router();
const customerCtrl = require('../controllers/customers')

router.get('/', customerCtrl.index)
router.get('/:id', customerCtrl.show)
router.get('/new', customerCtrl.newCustomer)
router.post('/', customerCtrl.create)
router.post('/:id', customerCtrl.deleteCustomer)


module.exports = router;