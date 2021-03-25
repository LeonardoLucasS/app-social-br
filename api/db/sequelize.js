const Sequelize = require('sequelize');

module.exports = new Sequelize('be9gfatbds31tupux8ks', 'ueaagopsicwgespf', 'yesUNiqrSi95RC8aMQIM', {
    host: 'localhost',
    dialect: 'mysql',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    define: {
        timestamps: false
    }
});