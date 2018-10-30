const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const getAll = require('../database/seed.js');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'restaurants' 
});

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/banners', function(req, res) {
	connection.connect();
	connection.query('SELECT * FROM banners', function (error, results, fields) {
		if (error) throw error;
		res.send(results);
	});
	connection.end();
});


// app.post('/banners', function (req, res) {
//   db.insertInfo(req.body.id, req.body.title, req.body.logo_img, req.body.bg_img, req.body.address, req.body.ph_number, req.body.rating, req.body.no_of_ratings, req.body.bookmark, req.body.rest_id, (err, results) => {
//     console.log('this is req.body: ', req.body);
//     if (err) {
//       res.status(500).send(err, null);
//     } else {
//       res.status(201).send(null, results);
//     }
//   });
// });


let port = 3005;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});