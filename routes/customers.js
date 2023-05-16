const express = require('express');
const router = express.Router();
const customerCtrl = require('../controllers/customers')

router.get('/', customerCtrl.index)
router.get('/new', customerCtrl.newCustomer)
router.get('/:id', customerCtrl.show)
router.get('/:id/edit', customerCtrl.updateCustomerForm)
router.post('/', customerCtrl.create)
router.put('/:id', customerCtrl.updateCustomer)

// router.post('/:id', customerCtrl.deleteCustomer)




module.exports = router;