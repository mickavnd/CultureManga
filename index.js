const express = require('express')
const path = require ('path')
const mysql = require('mysql')
const util =require ('util')
const methodOverride = require('method-override')
const  fileUpload = require('express-fileupload')
const session= require('express-session')
const MySQLStore =require('express-mysql-session')
const connectFlash= require('connect-flash')
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

//express-session
app.use(session({
    name:"salutmicka",
  secret: 'keyboard cat',
  resave: false,
  store:sessionStore,
  saveUninitialized: true,
  cookie: { 
    
    maxAge:1000*60*60*24//24heure

   }
}))

// express mysql
var sessionStore=new MySQLStore({},db)

//variable global
 global.querysql=util.promisify(db.query).bind(db)


 // methode OVERRIDE

app.use(methodOverride('_method'));

//fileupload
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));
  
//flash
//activer les message flash
app.use(connectFlash())

//ejs
app.set('view engine','ejs')

//middleware -body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))



//dossier static (public)
app.use(express.static(path.join(__dirname,'public')));

//Routes
const pageHomeRoute = require('./Routes/pageHomeRoute')
const pageAdminRoute = require('./Routes/pageAdminRoute')
const pageauthentification = require('./Routes/pageAuthRoute')

//home page
app.use("/",pageHomeRoute)

//page administration 
app.use("/admin",pageAdminRoute)

//page authentification reserver pour l'admin 
app.use("/auth",pageauthentification)


//serveur
app.listen(3000,()=>{
    console.log("serveur ok");
})





