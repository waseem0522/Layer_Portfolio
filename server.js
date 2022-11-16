const express = require('express');
const payment = require('./routes/payment');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./confige');
const rp = require('request-promise');
const cors = require("cors");
require('./confige');
const School = require('./school');
const app = express();
app.use(express.json());
const nodemailer = require('nodemailer');
app.use(cors());
const PORT = process.env.PORT || 5000;
const path = require('path');
const { response } = require('express');

app.use(express.static(__dirname + "/public"));
app.use('controllers', express.static(__dirname + "/index"));

app.use('/payment', payment);


app.post("/create", async(req, resp) => {
    let data = new School(req.body)
    let result = await data.save();
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'engmuhammadwaseem0522@gmail.com',
            pass: 'xaabmgbuxmnofynd',
            Tls: { rejectUnauthorized: false }
        }
    })

    let details = {
        from: 'engmuhammadwaseem0522@gmail.com',
        to: data.email,
        subject: 'This email proof that data is saved successfully',
        text: `Hi ${data.name},
        Thank you for contacting me. I am {Lawyer_Name} and I will be your contact person. I am just following up on your email.
        Please let me know if you require anything else, otherwise, I will be in touch shortly to organise a call with you to 
        discuss the next steps in more detail.I look forward to hearing from you again soon!You Have Selected The Time which is 
        ${data.time} Now i will response you with the selected Timei heve readeout your message ${data.message}
        Conetect me On this Number :03445445445
        Muhammad Waseem is inviting you to a scheduled Zoom meeting.
        Topic: My Meeting
        Time: Nov 15, 2022 06:00 PM Pacific Time (US and Canada)
        Join Zoom Meeting
        https://us05web.zoom.us/j/88039226808?pwd=MUQ1ZnFJRzhEdzNMZEdmNmpIY3RTQT09
        Meeting ID: 880 3922 6808
        Passcode: i1U0bS

        Thanks;
        Regards, {Lawyer}`

    }
    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log('it is an error', err)
        }
    })
    resp.send(result)
})



// let mailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'engmuhammadwaseem0522@gmail.com',
//         pass: 'xaabmgbuxmnofynd',
//         Tls: { rejectUnauthorized: false }
//     }
// })

// let details = {
//     from: 'engmuhammadwaseem0522@gmail.com',
//     to: 'engmuhammadwaseem0522@gmail.com',
//     subject: 'testing our nodemailer',
//     text: 'testing our first sender'
// }
// mailTransporter.sendMail(details, (err) => {
//     if (err) {
//         console.log('it is an error', err)
//     } else {
//         console.log('send succsesfully')
//     }
// })


app.listen(5000);





// app.use(cors());
// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//         limit: "50mb",
//         extended: true,
//     })
// );
// app.get("/zoom", (request, response) => {
//     response.json({ info: "Node js, express api" });
// });

// //zoom

// var email, userid, resp;
// const port = 3444;

// //use the api key and api secret key from config.js
// const payload = {
//     iss: config.APIKey,
//     exp: new Date().getTime() + 5000,
// };
// const token = jwt.sign(payload, config.APISecret);
// app.post("/meeting", (req, res) => {
//     email = req.body.email;
//     var options = {
//         method: "POST",
//         uri: "https://api.zoom.us/v2/users/" + email + "/meeting",
//         body: {
//             topic: "meeting",
//             type: 1,
//             settings: {
//                 host_video: "true",
//                 participant_video: "true",
//             },
//         },
//         auth: {
//             bearer: token,
//         },
//         headers: {
//             "User-Agent": "Zoom-api-Jwt-Request",
//             "content-type": "application/json",
//         },
//         json: true,
//     };

//     rp(options)
//         .then(function(response) {
//             console.log("response is : ", response.join_url);
//             let dataRes = {
//                 join_url: response.join_url,
//             };
//             res.status(200).json(dataRes);
//         })
//         .catch(function(err) {
//             console.log("Api Call Failed", err)
//         });
// });

// app.listen(port, () => {
//     console.log(`App runing on port ${port}`);
// });