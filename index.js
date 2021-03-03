const express = require('express')
const path = require ('path')
const mysql = require('mysql')
const util =require ('util')
const app = express()
require('dotenv').config()

//mysql
const db = mysql.createConnection(
        
    {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_NAME
        
    }


) 



db.connect(
    (err)=>{
        if(err){throw err}
        console.log('connexter au server sql');
    }
)
//variable global
 global.querysql=util.promisify(db.query).bind(db)


 


//ejs
app.set('view engine','ejs')

//middleware -body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))



//dossier static (public)
app.use(express.static(path.join(__dirname,'public')));

//Routes
const pageHomeRoute=require('./Routes/pageHomeRoute')
const PageAdminRoute=require('./Routes/pageAdminRoute')

//home page
app.use("/",pageHomeRoute)

//page administration 
app.use("/admin",PageAdminRoute)


//serveur
app.listen(3000,()=>{
    console.log("serveur ok");
})



