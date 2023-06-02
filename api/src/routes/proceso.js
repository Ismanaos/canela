const { editTaller, deleteProceso, getProceso, sendProceso } = require('../controllers/procesoController.js');

const router = require('express').Router();

router.post('/nuevo', editTaller);
router.delete('/eliminar', deleteProceso);
router.get('/conseguir', getProceso);
router.post('/reenviar', sendProceso);

module.exports = router;