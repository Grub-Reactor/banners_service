const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));



// app.get('/', function(req, res) {
// 	db.getAll((err, results) => {
// 		if (err) {
// 		  res.status(500).send(err)
// 		} else {
// 			res.status(201).send(results);
// 		}
// 	});
// });


app.post('/banners', function (req, res) {
  db.insertInfo(req.body.id, req.body.title, req.body.logo_img, req.body.bg_img, req.body.address, req.body.ph_number, req.body.rating, req.body.no_of_ratings, req.body.bookmark, req.body.rest_id, (err, results) => {
    if (err) {
      res.status(500).send(err, null);
    } else {
      res.status(201).send(null, results);
    }
  });
});


let port = 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});