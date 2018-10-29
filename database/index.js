const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'restaurants'
});




