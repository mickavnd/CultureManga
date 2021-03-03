-- creation database
CREATE DATABASE cultureManga;
use cultureManga;

-- creation table News
CREATE TABLE article(
articlesId  INT PRIMARY KEY AUTO_INCREMENT,
titre VARCHAR (50),
image VARCHAR(255),
categorieId int,
description VARCHAR(255),
FOREIGN KEY (categorieId) REFERENCES categorie(categorieId)
);

 -- Ajout article 
 INSERT INTO article(titre,image,categorieId , description) 
 VALUES('one piece','url',1,'le retoure de gold D roger');
 
-- affichage articles 
 
 SELECT
 articlesId,
 titre,
 image,
 article.categorieId,
 description
 FROM article
 INNER JOIN categorie ON Categorie.categorieId=article.categorieId;
 
-- creation  table categorie
CREATE TABLE categorie (
categorieId int PRIMARY KEY AUTO_INCREMENT,
Categorie VARCHAR(50)
);
 
-- ajoute categorie
 INSERT INTO categorie(categorie)
 value('news'),('manga'),('animé'),('jeux');

-- affichage  categorie 
SELECT*FROM categorie; 

