

//affichage des News
exports.getPageNews = async(req,res) => {
const articlesNews= await querysql('SELECT articlesId,titre,image,description FROM article where categorieId=1')
console.log(articlesNews);
      res.render('PageNews',{News:articlesNews})
}


