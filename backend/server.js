const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log('Transporter not verified ⚒', error);
    } else {
        console.log('Transporter verified successfully ✅ ', success);
    }
});

app.use(express.json());
app.use(cors());

app.post('/api/sendMail', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: name,
        to: 'groverjatin17@gmail.com',
        subject: `Visitor's mail in portfolio`,
        text: `${name} with email address ${email} says: ${message}`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log(`Failed to send mail from ${name}❌`);
        } else {
            console.log('Mail sent Successfully 🚀');
        }
    });

    res.send('Mail sent successfully');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
