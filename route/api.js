const app = require("express").Router()
let db = require("../db/db.json")
let fs = require("fs")


app.get("/notes",function(req,res){
    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(db)
})
app.post("/notes",function(req,res){
   var newNote = {
    title: req.body.title,
    text: req.body.text,
    id:Math.floor(Math.random()*120112)
   }

   db.push(newNote)

   fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err){
    if(err) throw err
   })
   res.json(db)

})


module.exports = app