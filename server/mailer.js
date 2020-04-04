const nodemailer = require('nodemailer');

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maonelove18@gmail.com',
    pass: 'ftmqcojwknngxyzm'
  }
})

export const mailOptions = {
  from: 'maonelove18@gmail.com',
  to: 'cynthia.ma.emily@gmail.com', 
  subject: 'GarageChecker: Status',
  html: '<p>Test test</p>'
}

