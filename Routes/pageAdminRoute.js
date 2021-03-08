const router = require('express').Router()

//controller 
const pageAjoutArticlesController = require('../Controller/admin/pageAjouteArticlesController')
const adminNewsController = require ('../Controller/admin/pageadminNewsController')
const pageModificationController = require('../Controller/admin/pageModificationController')
//affichage de la page admin


//affichage la  page admin News
 router.get("/News",adminNewsController.getAdminNews)

//affichage et poster de la page admin-ajoute des articles
router.get("/Ajout-articles",pageAjoutArticlesController.getAjoutArticles)
router.post("/Ajout-articles",pageAjoutArticlesController.postAjoutArtilces)

//affichage  la page modification-articles
router.get("/modification-articles/:id",pageModificationController.getModificationArticles)
//modifier article
router.put("/modification-articles/:id",pageModificationController.putModificationArticles)

//supprimer articles
router.get("/News/:Id",pageAjoutArticlesController.getDeleteArticles)





module.exports=router