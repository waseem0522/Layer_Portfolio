const nodemailer = require('nodemailer');
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'engmuhammadwaseem0522@gmail.com',
        pass: 'waseem0522'
    }
})

let details = {
    from: 'engmuhammadwaseem0522@gmail.com',
    to: 'engmuhammadwaseem0522@gmail.com',
    subject: 'testing our nodemailer',
    text: 'testing our first sender'
}
mailTransporter.sendMail(details, (err) => {
    if (err) {
        console.log('it is an error', err)
    } else {
        console.log('send succsesfully')
    }
})