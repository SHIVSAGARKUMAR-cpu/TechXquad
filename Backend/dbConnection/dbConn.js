const mysql = require("mysql");

const Connection = mysql.createConnection({
    host : "localhost",
    port: 3306,
    user : "root",
    password : "mysqlserver",
    database : "codesquad"
});

Connection.connect((err)=>{
if(err)
{
    console.log(err);
}
else{
    console.log("Connected Successfully");
}
});

module.exports = Connection;