const bcrypt = require('bcrypt')
//affichage page connexion
 
exports.getLogin = async (req,res) => {

    res.render("pageLogin", {
        message: req.flash("message")
   })
}


//connecter au compte utilisateur
exports.postLogin = async (req, res) => {

     const {
          email,
          password
     } = req.body;

     //si email existe pas 
     const findEmail = await querysql('SELECT COUNT(email) as cnt from admin where email=?', email)

     if (!findEmail[0].cnt > 0) {
          req.flash("message", "aucun utilistateur ")
          return res.redirect('/auth/login')
     }


     // si l'email existe
     //verifier le mot de passe

     const admin = await querysql('SELECT adminId , nom , email, password FROM admin WHERE email=?', email)
     //console.log(user);
     const passwordCheck = await bcrypt.compare(password, admin[0].password)
     if (!passwordCheck) {
          req.flash("message", "mot de passe incorrect")
          return res.redirect('/auth/login')
     } else {
          req.session.adminId = admin[0].adminId;
          req.session.admin = {
               id: admin[0].adminId,
               nom: admin[0].nom,
               email: admin[0].email
          };
          
          //console.log("session", res.session.user);
          return res.redirect('/admin/News')
     }
}


exports.getLogout=async(req,res)=>{
     req.session.destroy( function(err){
          res.redirect("/auth/login")

     })
}
