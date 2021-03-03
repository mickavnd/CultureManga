const router = require('express').Router()


//controller
const pageHomeController = require('../Controller/pageHomeController')
const pageNewsController = require('../Controller/pageNewController')
const pageMangaController = require('../Controller/pageMangaController')
const pageAnimeController = require('../Controller/pageAnimeController')
const pageJeuxVideoController = require('../Controller/pageJeuxVideoController')

//affichage de la page d'accueil
 router.get("/",pageHomeController.getPageHomecontroller)
 //affichage de la page NEWS
 router.get("/News",pageNewsController.getPageNews)
 //affichage  de la page Manga
 router.get("/Manga",pageMangaController.getPageManga)
 //affichage de la page Animer
 router.get("/Anime",pageAnimeController.getPageAnime)
 //affichage de la page JeuxVideo
 router.get("/Jeux-video",pageJeuxVideoController.getPageJeuxVideo)
 

module.exports=router
