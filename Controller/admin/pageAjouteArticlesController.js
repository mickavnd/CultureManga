const {
     query
} = require("express")

//afficher  page un  ajout-articles 
exports.getAjoutArticles = async (req, res) => {
   const ajout = await querysql('select categorie.categorieId,categorie.categorie from categorie')
     res.render('admin/ajout-articles',{categorie:ajout})
}


//post un nouvelle article dans la base de donnée

exports.postAjoutArtilces = async (req, res) => {
     const {
          titre,
          image,
          description,
          categorieId
     } = req.body

     try {
          await querysql("INSERT INTO article(titre,image,description,categorieId) value('" + titre + "','" + image + "','" + description + "','" + categorieId + "');",
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