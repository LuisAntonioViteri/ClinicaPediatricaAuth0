const express = require('express')
const router = express.Router()
const horariosController = require('../controllers/horariosController')
const { requiresAuth } = require('express-openid-connect')

router.get('/', requiresAuth(),horariosController.index)
router.get('/crear', requiresAuth(), horariosController.crear)
router.get('/editar/:id', requiresAuth(),horariosController.editar)
router.post('/eliminar/:id', requiresAuth(),horariosController.eliminar)
router.post('/guardar', requiresAuth(),horariosController.guardar)
router.post('/actualizar', requiresAuth(),horariosController.actualizar)
router.get('/comparacion', requiresAuth(),horariosController.comparacion)
router.post('/resultados', requiresAuth(),horariosController.resultados)
//router.get('/comparacionfecha', horariosController.comparacionfecha)
//router.post('/resultados2', horariosController.resultados2)


module.exports = router