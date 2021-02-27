

//affichage des News
exports.getPageNews = async(req,res) => {
const articlesNews= await querysql('SELECT NewsId,titre,image,description FROM News;')
      res.render('PageNews',{News:articlesNews})
}
