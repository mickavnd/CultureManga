const { query } = require("express")

//affichage page  modification
exports.getModificationArticles = async (req,res)=>{
  const id = req.params.id
  const modifArticle = await querysql("SELECT articlesId,titre,image,description FROM article where articlesId = ?",id) 
  res.render('admin/modifier-articles',{modifArticles:modifArticle[0]})

}

//modifier articles

exports.putModificationArticles =async(req,res)=>{
  const id = req.params.id
  const {
    titre,
    image,
    description,
} = req.body

try {
    await querysql("UPDATE article SET titre = ? ,image = ? ,description = ? where articlesId = ?",[titre,image,description,id],
         (err, result) => {
              if (err) {
                   res.send(err)

              } else {
                   return res.redirect('/')
              }

         }
    )
} catch (err) {

}






  }