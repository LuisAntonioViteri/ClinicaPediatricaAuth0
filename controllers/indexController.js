const connection = require('../config/conexion')
const title = 'Index'


const index = (req, res) => {
            res.render('./fichas/index',)        
}
module.exports = {
    index
}