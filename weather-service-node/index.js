var express = require('express');
var morgan = require('morgan');
var request = require('request');

var app = express();

app.use(function enableCORS(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(morgan('combined'));

var WEATHER_KEY = process.env.OPENWEATHER_API_KEY;

app.get('/weather', function (req, res) {
	if (!req.query.city || !req.query.country) {
		res.status(400).json({message: '"city" and "country" are required.'});
		return;
	}
	if (Math.random() < 0.10) {
		res.status(500).send('Expect the unexpected!');
		return;
	}
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
		req.query.city + ',' + req.query.country + '&appid=' + WEATHER_KEY;
	request.get({url: url, json: true}, function(err, wres, body) {
		if (err) {
			console.log('Error!');
			console.log(err);
			res.status(500).send('Upstream error, check logs.');
		} else {
			res.json({
				city: body.name,
				country: body.sys.country,
				temp: body.main.temp - 273.15,
				tempMin: body.main.temp_min - 273.15,
				tempMax: body.main.temp_max - 273.15,
				weather: body.weather[0].main,
				windSpeed: body.wind.speed,
				windDirection: body.wind.deg
			});
		}
	});
});

app.listen(3000, function () {
  console.log('Serving on http://localhost:3000');
});
