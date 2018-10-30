const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'restaurants'
});

const getAll = function(rest_id, callback) {
	const query = `SELECT * FROM banners WHERE rest_id=${rest_id}`;
	connection.query(query, (error, results, fields) => {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results);
		}
	});
};

const getFiveRestaurants = function(callback) {
	connection.query('SELECT * FROM banners LIMIT 5', (error, results, fields) => {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results);
		}
	});
};

const insertInfo = function(id, name, logo_img, bg_img, address, ph_number, rating, no_of_ratings, bookmark, rest_id, callback) {
	const query = `INSERT INTO banners (id, name, logo_img, bg_img, address, ph_number, rating, no_of_ratings, bookmark, rest_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
	connection.query(query, [id, name, logo_img, bg_img, address, ph_number, rating, no_of_ratings, bookmark, rest_id], function (error, results) {
		if (error) {
			callback(error, null);
		} else {
			callback(null, results);
		}
	});
};

module.exports = {
	getAll: getAll,
	getFiveRestaurants: getFiveRestaurants,
	insertInfo: insertInfo
};
