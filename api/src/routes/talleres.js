const { getTaller, postTaller, deleteTaller } = require('../controllers/talleresController');

const router = require('express').Router();

router.get('/conseguir', getTaller)
router.post('/nuevo', postTaller);
router.delete('/eliminar', deleteTaller);

module.exports = router;