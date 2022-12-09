require('dotenv').config()

const nodemailer = require('nodemailer');


let transporter = 

module.exports = {
  sendMail: function(message){

    console.log(process.env.MAIL_HOST)
    console.log(process.env.MAIL_USERNAME)
    console.log(process.env.MAIL_PASSWORD)
    
    (nodemailer.createTransport({

    

    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_HOST,
        pass: process.env.MAIL_PASSWORD
    }
  })).sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }

  })}
  
};











