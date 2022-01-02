const express = require("express");
const app =express();
const Register =require("./backend");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public"+"/index.html"); 
})

app.post("/", async (req,res)=>{
    try{
       const pass1 =req.body.password;
       const pass2 =req.body.cpassword;
       if(pass1===pass2){
        const newregister = new Register({
            email:req.body.email,
            password:req.body.password
            ,message:req.body.message
        }) 
         await newregister.save();
         res.sendFile(__dirname+"/public"+"/thankspage.html"); 
       }else{
           res.send("password didn't match")
       }

        // res.send(req.body.email);  
    }
    catch(error){
        res.send(error.message);
    }
     
})

app.listen(port,()=>{console.log("success")});