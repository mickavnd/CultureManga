const router = require('express').Router()


//controller
const pageHomeController = require('../Controller/pageHomeController')


//affichage de la page d'accueil
 router.get("/",pageHomeController.getPageHomecontroller)


















module.exports=router