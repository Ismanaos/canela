const { Router } = require('express');

const talleres = require('./talleres.js');
const proceso = require('./proceso.js')

const router = Router();

router.use('/', talleres);
router.use('/proceso', proceso);

module.exports = router;