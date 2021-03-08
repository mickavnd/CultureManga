 const bcrypt = require('bcrypt') 
//affichage  page enregistrement

exports.getRegister = async (req,res) => {
     
    res.render ("register")

}

//  enregistrer admin

exports.postRegister = async (req,res)=>{
    const{
        nom,
        email,
        password,
    } = req.body
   // console.log(req);
   try{ 
       //hacher le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)

       await querysql(" insert INTO admin(nom,email,password) values(?,?,?)",[nom,email,hash],
       (err, result) => {
        if (err) {
             res.send(err)

        } else {
             return res.redirect('/')
        }
    }
        )

   
    
    
   }catch(err){

   }
}