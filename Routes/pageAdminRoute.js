const router = require('express').Router()

//controller 
const ajoutArticlesController = require('../Controller/admin/AjouteArticlesController')

//affichage de la page admin

//affichage et poster de la page admin-ajoute des articles
router.get("/Ajout-articles",ajoutArticlesController.getAjoutArticles)
router.post("/Ajout-articles",ajoutArticlesController.postAjoutArtilces)







module.exports=router