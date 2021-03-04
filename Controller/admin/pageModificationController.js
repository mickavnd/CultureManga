const { query } = require("express")

//affichage page  modification
exports.getModificationArticles = async (req,res)=>{
  const modifArticle = await querysql("SELECT articlesId,titre,image,description FROM article where articlesId='"+req.params.id+"';")
   
  res.render('admin/modifier-articles',{articles:modifArticle})

}

//modifier articles

exports.putModificationArticles =async(req,res)=>{


}