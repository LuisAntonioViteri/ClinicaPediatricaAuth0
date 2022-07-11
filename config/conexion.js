const mysql = require('mysql')



connection.connect((error) => {
    if(error){
        console.error('CONNECTION FAILED: ', error)
        return
    }
    console.log('Database Connection Succesful!')
})

module.exports = connection