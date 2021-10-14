const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const dummyData = [
    {email : "test1@test.com", id : 101},
    {email : "test2@test.com", id : 102},
    {email : "test3@test.com", id : 103}
]

const MY_SECRET = "My super secret key";

// GET - /api

app.get("/api", (req, res) => {
    return res.send(dummyData)
})

app.post('/api/login', (req, res) => {
    if(req.body){
        // Write code to authenticate the user here
        console.log(req.body);
        const token = jwt.sign(req.body, MY_SECRET, { expiresIn : '1h'})

        return res.send({message : "API SUCCESS", token})
    }
    return res.send({message : "BODY NOT FOUND"})
})

const ensureToken = function(req, res, next){
    console.log("AUTH HEADER : ", req.headers.authorization);
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1]
        jwt.verify(token, MY_SECRET, (err, decode)=>{
            if(err) {
                console.log(err)
                return res.send({error : "Something bad with token"})
            }
            console.log("DECODE : ",  decode);
            next();
        })
    }else{
        return res.send({message : "USER NOT AUTHENTICATED"})
    }
    
}

app.get('/api/protected', ensureToken, (req,res) => {
    return res.send({message : "PROTECTED API SUCCESS"})
})


app.listen(9090, () => {
    console.log("Server started at port : 9090")
})

// nodemon - restart the server, when there is any file change
// npm install nodemon -g
// nodemon app.js