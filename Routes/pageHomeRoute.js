const router = require('express').Router()


//controller
const pageHomeController = require('../Controller/pageHomeController')
const pageNewsController = require('../Controller/pageNewController')
const pageMangaController = require('../Controller/pageMangaController')
const pageAnimeController = require('../Controller/pageAnimeController')
const pageJeuxVideoController = require('../Controller/pageJeuxVideoController')

//affichage de la page d'accueil
 router.get("/",pageHomeController.getPageHomecontroller)
 router.get("/News",pageNewsController.getPageNews)
 router.get("/Manga",pageMangaController.getPageManga)
 router.get("/Anime",pageAnimeController.getPageAnime)
 router.get("/Jeux-video",pageJeuxVideoController.getPageJeuxVideo)
 


















module.exports=router