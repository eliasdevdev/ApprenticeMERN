require('dotenv').config()

const Sib = require('sib-api-v3-sdk')
const client = Sib.ApiClient.instance
const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY


const express = require('express')
const multer = require('multer');
const app = express()
const port = process.env.port || 3000



const SendmailTransport = require('nodemailer/lib/sendmail-transport');

app.listen(port, () => {})

app.use(express.static(__dirname + '/public'));





app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/public/PreRegisterMaster.html");
});


app.post('/PreRegisterMaster',multer().none(), function requestHandler(req, res) {

  console.log("datatest",req.body)
  console.log("datatest",req.body.email)

  const tranEmailApi = new Sib.TransactionalEmailsApi()

  const sender = {
      email: 'elias.devo3@gmail.com',
      name: 'Elias',
  }
  
  const receivers = [
      {
          email: 'apprentice.edu.contact@gmail.com',
      },
  ]

  tranEmailApi
    .sendTransacEmail({
        sender: sender,
        to: receivers,
        subject: 'testgitpipeline',
        textContent: `
        {{ params.email }} {{ params.craft }} {{ params.work }} {{ params.comment }}
        `,
        params: {
            email: req.body.email,
            craft: req.body.craft,
            work: req.body.work,
            comment: req.body.comment,
        },
    })
    .then(console.log)
    .catch(console.log)



    res.send([req.body])

})