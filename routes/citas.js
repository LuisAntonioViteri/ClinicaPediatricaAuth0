const express = require('express')
const router = express.Router()
const citasController = require('../controllers/citasController')
const { requiresAuth } = require('express-openid-connect')

router.get('/', requiresAuth(),citasController.index)
router.get('/crear', requiresAuth(),citasController.crear)
router.get('/editar/:id', requiresAuth(),citasController.editar)
router.post('/eliminar/:id',requiresAuth(), citasController.eliminar)
router.post('/guardar', requiresAuth(),citasController.guardar)
router.post('/actualizar',requiresAuth(), citasController.actualizar)
router.get('/comparacionfecha', requiresAuth(),citasController.comparacionfecha)
router.post('/resultados2', requiresAuth(),citasController.resultados2)
module.exports = router