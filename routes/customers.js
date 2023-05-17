const express = require('express');
const router = express.Router();
const customerCtrl = require('../controllers/customers');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, customerCtrl.index)
router.get('/new', isLoggedIn, customerCtrl.newCustomer)
router.get('/:id', isLoggedIn, customerCtrl.show)
router.get('/:id/edit', isLoggedIn, customerCtrl.updateCustomerForm)
router.post('/', isLoggedIn, customerCtrl.create)
router.put('/:id', isLoggedIn, customerCtrl.updateCustomer)
router.delete('/:id', isLoggedIn, customerCtrl.deleteCustomer)


module.exports = router;