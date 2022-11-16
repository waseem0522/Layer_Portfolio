const router = require('express').Router();
const Stripe = require('stripe');
const nodemailer = require('nodemailer');
require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", null);

router.post('/donate', async(req, res) => {
    const { token = {}, amount = 0 } = req.body;

    if (!Object.keys(token).length || !amount) {
        res.status(400).json({ success: false });
    }

    const { id: customerId } = await stripe.customers.create({
        email: token.email,
        source: token.id,
    }).catch(e => {
        console.log(e);
        return null;
    })

    if (!customerId) {
        res.status(500).json({ success: false });
        return;
    }

    const invoiceId = `${token.email}-${Math.random().toString()}-${Date.now().toString()}`;

    const charge = await stripe.charges.create({
        amount: amount * 100,
        currency: "PKR",
        customer: customerId,
        receipt_email: token.email,
        receipt_name: token.name,
        description: "Donation",
    }, { idempotencyKey: invoiceId }).catch(e => {
        console.log(e);
        return null;
    });
    const email = charge.receipt_email
    let name = charge.receipt_name
    console.log(name)
    if (!charge) {
        res.status(500).json({ success: false });
        return;
    };

    res.status(201).json({ success: true });
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
        to: email,
        subject: 'testing our nodemailer',
        text: `Hi ${name},
        Thank you for contacting me. I am {Lawyer_Name} and I will be your contact person. I am just following up on your email.
        Please let me know if you require anything else, otherwise, I will be in touch shortly to organise a call with you to 
        discuss the next steps in more detail.I look forward to hearing from you again soon!You Have Selected The Time which is 
         Now i will response you with the selected Timei heve readeout your message; 
        Conetect me On this Number :03445445445
        Thanks;
        Regards, {Lawyer}`
    }
    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log('it is an error', err)
        } else {
            console.log('send succsesfully')
        }
    })
});

module.exports = router;