const { query } = require("express")

//affichage page News admin
exports.getAdminNews = async(req,res)=>{
const articlesNews = await querysql('SELECT articlesId,titre,image,description FROM article where categorieId=1')
//const articlesNewsTotal =await querysql("SELECT articlesId,titre,image,description FROM article where articlesId='"+req.params.id+"';")
//console.log(articlesNewsTotal);
    res.render('admin/admin-News',{articleNew:articlesNews})
   
}

