const Model = require("./model");
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aryaraghav.tryagain@gmail.com',
        pass: 'tjclblhemncikkuv'
    }
});



const SaveEnquiry = (req, res) => {
    let mailSubject = `Your Enquiry related to ${req.body.ServiceName} is submitted successfully`;

    let mailOptions = {
        from: "aryaraghav.tryagain@gmail.com",
        to: req.body.UserEmail,
        subject: mailSubject,
        text: req.body.Message
    };

    Model.saveEnquiry(req.body, (err, data) => {
        if (err)
            res.json({ Message: "Failed" });
        else {
            res.json({ Message: "Success" });

            transport.sendMail(mailOptions, (err, info) => {
                if (err)
                    console.log(err);
                else {
                    console.log("Email Sent");
                }
            });

        }
    });



}

module.exports = SaveEnquiry;