DROP DATABASE IF EXISTS restaurants;

CREATE DATABASE restaurants;

USE restaurants;

CREATE TABLE banners (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(100),
	logo_img VARCHAR(100),
	bg_img VARCHAR(100),
	address VARCHAR(100),
	ph_number VARCHAR (100),
	rating INT,
	no_of_ratings INT,
	bookmark BOOLEAN,
	rest_id INT 
)

