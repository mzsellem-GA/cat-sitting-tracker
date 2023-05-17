const express = require('express');
const router = express.Router();
const customerCtrl = require('../controllers/customers');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, customerCtrl.index)
router.get('/new', customerCtrl.newCustomer)
router.get('/:id', ensureLoggedIn, customerCtrl.show)
router.get('/:id/edit', customerCtrl.updateCustomerForm)
router.post('/', customerCtrl.create)
router.put('/:id', customerCtrl.updateCustomer)
router.delete('/:id', customerCtrl.deleteCustomer)


module.exports = router;