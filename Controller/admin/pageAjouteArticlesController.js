const {
     query
} = require("express")

//afficher  page un  ajout-articles 
exports.getAjoutArticles = async (req, res) => {
   const ajout = await querysql('select categorie.categorieId,categorie.categorie from categorie')
     res.render('admin/ajout-articles',{categorie:ajout})

}



//post un nouvelle article dans la base de donnée

// importer une image d'un dossier  telechargement vers le dossier public
exports.postAjoutArtilces = async (req, res) => {
     const uploadImage = req.files.image
     const imageName = uploadImage.name

uploadImage.mv(`public/image/${imageName}`)

//ajout corps articles 
console.log(uploadImage);

     const {
          titre,
          description,
          categorieId
     } = req.body

     try {
          await querysql("INSERT INTO article(titre,image,description,categorieId) value('" + titre + "','" + imageName + "','" + description + "','" + categorieId + "');",
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

// supprimer articles
 exports.getDeleteArticles= async(req,res)=>{
      const Id = req.params.Id
       await querysql("DELETE FROM article where articlesId = ?",[Id])
      res.redirect('/admin/News')

 }
