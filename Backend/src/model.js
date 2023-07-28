const Conn = require("../dbConnection/dbConn")

exports.saveEnquiry = (data , result)=>{

    
    Conn.query("insert into enquiry (UserName , UserEmail, ServiceName, Message) values (?,?,?,?)", [data.UserName, data.UserEmail, data.ServiceName, data.Message], (err, res)=>{
        if(err)
        result(err, null);
        else{
           result(null, res)
        }
    });
}

