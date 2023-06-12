const express = require('express')
const nodemailer = require("nodemailer")
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'eg18021980@gmail.com', // generated ethereal user
    pass: 'jdhsqkvkercdckcr', // generated ethereal password
  },
})



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/sendmail', async function (req, res)  {
  // create reusable transporter object using the default SMTP transport

  let {messages, contacts, name} = req.body

  let info = await transporter.sendMail({
    from: '"Test account" <eg18021980@gmail.com>', // sender address
    to: "galetsky@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line

    html: `<b>Сообщение с вашего</b>
    <div>name:${name}</div>
    <div>mail:${contacts}</div>
    <div>message:${messages}</div>`
    ,



  });


})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})