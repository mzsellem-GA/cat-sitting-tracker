const express = require('express');
const router = express.Router();
const clientCtrl = require('../controllers/clients')

router.get('/', clientCtrl.index)
router.get('/:id', clientCtrl.show)
router.get('/new', clientCtrl.newClient)
router.post('/', clientCtrl.create)



module.exports = router;