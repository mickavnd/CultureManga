const express = require('express')
const app = express()
 
//Routes
const pageHomeRoute=require('./Routes/pageHomeRoute')


//home page
app.use("/",pageHomeRoute)










//serveur
app.listen(1997,()=>{
    console.log("serveur ok");
})
