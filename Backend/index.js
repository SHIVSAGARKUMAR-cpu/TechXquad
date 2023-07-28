const router = require("./src/router");
const bodyParser = require("body-parser");
const Express = require("express");

const port = 9090;

const app = Express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

app.use("/api/", router);

app.get("/", (req,res)=>{
    res.write("Welcome");
    res.end();
});

app.listen(port, (err)=>{
    if(err)
    {
        console.log("Error at running Server : ", err);
    }
    else{
        console.log("Server started at port : ", port);
    }
});
