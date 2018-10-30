const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = require('../database/index.js');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'restaurants' 
});

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/restaurants/id/banners', (req, res) => {
	db.getFiveRestaurants( (error, results, fields) => {
		if (error) {
			res.send(error);
		} else {
			res.writeHead(201, {'Content-Type': 'application/json'});
			res.end(JSON.stringify(results));
		}
	});
});


// app.post('/restaurants/id/banners', (req, res) => {
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