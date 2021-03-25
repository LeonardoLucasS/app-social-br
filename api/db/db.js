var mysql = require("mysql2");

var connection = mysql.createPool({
    host: 'be9gfatbds31tupux8ks-mysql.services.clever-cloud.com',
    user: 'ueaagopsicwgespf',
    password: 'yesUNiqrSi95RC8aMQIM',
    database: 'be9gfatbds31tupux8ks'
});

module.exports = connection;


