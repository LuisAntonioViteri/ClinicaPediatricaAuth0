const express = require('express')
const router = express.Router()
const fichasController = require('../controllers/fichasController')
const { requiresAuth } = require('express-openid-connect')

router.get('/', requiresAuth(),fichasController.index)
router.get('/crear',requiresAuth(),fichasController.crear)
router.get('/editar/:id',requiresAuth(), fichasController.editar)
router.post('/eliminar/:id', requiresAuth(),fichasController.eliminar)
router.post('/guardar', requiresAuth(),fichasController.guardar)
router.post('/actualizar', requiresAuth(),fichasController.actualizar)
router.post('/ver/:id', requiresAuth(),fichasController.ver)
router.post('/buscar', requiresAuth(),fichasController.buscar)
module.exports = router