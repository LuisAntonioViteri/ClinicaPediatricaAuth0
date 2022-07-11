const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'lcpbq9az4jklobvq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'z1zy52pzxzyu490w',
    password: 'tuva040j12r772z4',
    database: 'nitue9p7h9ylzbb2'

})

connection.connect((error) => {
    if(error){
        console.error('CONNECTION FAILED: ', error)
        return
    }
    console.log('Database Connection Succesful!')
})

module.exports = connection