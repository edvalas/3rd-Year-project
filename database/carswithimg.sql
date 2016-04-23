Drop database if exists carImgData;
Show databases;
create database carImgData;
Use carImgData;

Show tables;
Drop table if exists carsimg;


create table carsImg(
  Id tinyint unsigned NOT NULL auto_increment,  -- id of the car which auto increments
  Name varchar(20) NOT NULL, -- name of the car max length 20 chars
  Model varchar(20) NOT NULL, -- model of the car
  CarYear Int(4) unsigned NOT NULL, -- car year
  EngineSize DECIMAL(2,1) unsigned NOT NULL, -- engine size
  EngineType varchar(20) NOT NULL, -- engine type
  FuelType varchar(20) NOT NULL, -- fuel type
  Doors tinyint unsigned NOT NULL, -- number of doors
  Price DECIMAL(12,2) unsigned NOT NULL, -- price
  Preference tinyint NOT NULL, -- preference
  Picture LongBlob,
  picture_path varchar(20),
  PRIMARY KEY (Id)
  ) COLLATE latin1_general_ci, Engine=InnoDB;
  
Insert into carsImg values (1, 'Audi', 'S4', 1992, 2.2, 'I5', 'Petrol', 4, 10000, 1, load_file("c:/audi.jpg"), "/audi.jpg"),
 (2, 'BMW', 'M5', 2005, 5.0, 'V10', 'Petrol', 4, 25000, 2, load_file("c:/bmw.jpg"), "/bmw.jpg"),
 (3, 'Volkswagen', 'Passat CC', 2009, 3.6, 'VR6', 'Petrol', 4, 20000, 3, load_file("c:/cc.jpg"), "/cc.jpg"),
 (4, 'Nissan', 'GTR', 2010, 3.8, 'V6', 'Petrol', 2, 70000, 4, load_file("c:/gtr.jpg"), "/gtr.jpg"),
 (5, 'Mercedes', 'c63', 2008, 6.2, 'V8', 'Petrol', 4, 45000, 5, load_file("c:/c63.jpg"), "/c63.jpg"),
 (6, 'Maybach', 'Exelero', 2004, 5.9, 'V12', 'Petrol', 2, 8000000, 6, load_file("c:/exelero.jpg"), "/exelero.jpg"),
 (7, 'Koenigsegg', 'CCXR Trevita', 2010, 4.8, 'V8', 'Petrol', 2, 4800000, 7, load_file("c:/ccxr.jpg"), "/ccxr.jpg"),
 (8, 'Lamborghini', 'Veneno', 2013, 6.5, 'V12', 'Petrol', 2, 4500000, 8, load_file("c:/lambo.jpg"), "/lambo.jpg"),
 (9, 'Lykan', 'Hypersport', 2014, 3.7, 'B6', 'Petrol', 2, 3400000, 9, load_file("c:/lykan.jpg"), "/lykan.jpg"),
 (10, 'Bugatti', 'Chiron', 2016, 8.0, 'W16', 'Petrol', 2, 2400000, 10, load_file("c:/chiron.jpg"), "/chiron.jpg");