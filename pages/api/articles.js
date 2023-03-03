import toast from 'react-hot-toast'

export default function (req, res) {
    require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.email,
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: process.env.email,
      to: process.env.email,
      subject: `Articulo`,
      html: `<div>title: "${req.body.title}",</div>
      <div>link: "${req.body.id}",</div>
      <div>img: "${req.body.img}"</div>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
      toast.success("Tu solicitud fue enviada correctamente.")
    })
    toast.success("Tu solicitud fue enviada!")
    res.status(200)
  }