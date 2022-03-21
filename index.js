const express=require("express")
const app=express()

app.get("/home",(req,res)=>{

res.send("hello")

})

app.get("/books",(req,res)=>{

    res.send({book1:"physics",
    book2:"math",
    book3:"chemistry",
    book4:"english"})

    
    })

    app.listen(3200, ()=>{
console.log("listening at 3200")

    });