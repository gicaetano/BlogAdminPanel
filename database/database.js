const Sequelize = require("sequelize");

const connection = new Sequelize('mysql://b9021139c3c4e5:e060654d@us-cdbr-east-05.cleardb.net/heroku_922d1255a8f9e11');

module.exports = connection;


// CLEARDB_DATABASE_URL
// mysql://b9021139c3c4e5:e060654d@us-cdbr-east-05.cleardb.net/heroku_922d1255a8f9e11?reconnect=true      === retirado do link de conexão ?reconnect=true

