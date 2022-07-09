const connection = require('../config/conexion')
const title = 'Index'
const index = (req, res) => {
            res.render('./index',)        
}
module.exports = {
    index
}