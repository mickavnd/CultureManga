-- creation database
CREATE DATABASE CultureManga;
use CultureManga;

-- creation table News
CREATE TABLE News(
NewsId int AUTO_INCREMENT,
titre  VARCHAR(50),
image VARCHAR(255),
description VARCHAR(255),
PRIMARY KEY (NewsId) 
);

-- ajout une News
INSERT INTO News(titre,image,description)
VALUES("la mort de naruto","url", " cest la mort du hokage de Konoha");

-- affiche une News
SELECT * FROM News;

-- creation table Manga
CREATE TABLE Manga(
mangaId INT AUTO_INCREMENT,
titre VARCHAR(50),
image VARCHAR(255),
chapitre VARCHAR(50),
PRIMARY KEY (mangaId),
description VARCHAR(255)
);

-- ajout dun chapitre
INSERT INTO Manga (titre, image, chapitre, description)
VALUES ("One piece"," url","n°100","dans se dernier  ce chapitre  le combat de luffy");

-- affiche une Manga
SELECT * FROM Manga;

-- creation table Anime
CREATE TABLE Anime(
AnimeId INT AUTO_INCREMENT,
titre VARCHAR(50),
image VARCHAR(255),
episode VARCHAR(50),
PRIMARY KEY (AnimeId),
description VARCHAR(255)
);
-- ajout d'un episode
INSERT INTO Anime (titre, image, episode, description)
VALUES ("One piece"," url","n°1"," luffy et partie a la recherche du one piece");

-- affiche une episode
SELECT * FROM Anime;

-- creation table jeux video
CREATE TABLE Jeuxvideo(
JeuxvideoId INT AUTO_INCREMENT,
titre VARCHAR(50),
image VARCHAR(255),
date VARCHAR(50),
PRIMARY KEY (JeuxvideoId),
description VARCHAR(255)
);

INSERT INTO Jeuxvideo (titre, image, date, description)
VALUES ("One piece"," url","16/08/2020"," luffy et partie a la recherche du one piece");

-- affiche une jeux video
SELECT * FROM Jeuxvideo;



-- supprime une table
DROP TABLE auteur;
