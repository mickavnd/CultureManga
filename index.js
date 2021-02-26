const express = require('express')
const path = require ('path')
const mysql = require('mysql')
const app = express()
 
//mysql
const db = mysql.createConnection(
        
    {




        
    }




)



//ejs
app.set('view engine','ejs')

//dossier static (public)
app.use(express.static(path.join(__dirname,'public')));

//Routes
const pageHomeRoute=require('./Routes/pageHomeRoute')


//home page
app.use("/",pageHomeRoute)










//serveur
app.listen(1997,()=>{
    console.log("serveur ok");
})
