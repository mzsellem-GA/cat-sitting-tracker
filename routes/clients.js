const express = require('express');
const router = express.Router();
const clientCtrl = require('../controllers/clients')

router.get('/', clientCtrl.index)



module.exports = router;