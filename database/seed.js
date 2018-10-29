const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'restaurants'
});

const getAll = function(callback) {
	connection.query('SELECT * FROM banners', function(error, results) {
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

const loadBannerDataToDb = function() {
	for (let i = 0; i < 100; i++) {
		var rand_id = 0;
		var rand_name = faker.company.companyName();
		var rand_logo_image = faker.image.imageUrl();
		var rand_bg_image = faker.image.imageUrl();
		var rand_address = faker.address.streetAddress();
		var rand_number = faker.phone.phoneNumber();
		var rand_rating = faker.random.number({min: 1.0, max: 5.0});
		var rand_no_ratings = faker.random.number({min: 0.0, max: 20000.00});
		var rand_bookmark = faker.random.number({min: 0.0, max: 1.0});
		var rand_rest_id = faker.random.number({min: 1.0, max: 50.00});

		insertInfo(rand_id, rand_name, rand_logo_image, rand_bg_image, rand_address, rand_number, rand_rating, rand_no_ratings, rand_bookmark, rand_rest_id, (err, results) => {
			if (err) {
			  console.log(err);
			}
		});
	}
};


loadBannerDataToDb();

