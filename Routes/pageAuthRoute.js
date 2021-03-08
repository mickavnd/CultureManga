const router= require("express").Router()

//controller
const pageRegisterController =require("../Controller/admin/pageRegisterController") 
const pageLoginController =require("../Controller/admin/pageLoginController")

//affichage page enregistré
 router.get("/register",pageRegisterController.getRegister)
 router.post("/register",pageRegisterController.postRegister)
 
 //affichage page connexion
 router.get("/login",pageLoginController.getLogin)
 router.post("/login",pageLoginController.postLogin)













module.exports=router