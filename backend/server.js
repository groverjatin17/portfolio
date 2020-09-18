const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

const { OAuth2 } = google.auth;

require('dotenv').config();

const app = express();

const oauth2Client = new OAuth2(
    '151424667116-l12fk4fmr93aefuan1d2kqbs5olagf7b.apps.googleusercontent.com',
    'FCFCSVYON8TLUDYnnuwc0hkG',
    'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
    refresh_token:
        '1//04l26ngtvhXGPCgYIARAAGAQSNwF-L9Irb1PjVan8hKOCUUDU7W9SoTNzI5d9ttO6SZqEQBldCvRzX0pMXaysD2VtGTRWulWedmE',
});
const accessToken = oauth2Client.getAccessToken();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken,
    },
});

// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD,
//     },
// });

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
            console.log(`Facing this error ${name}❌`);
            res.send(`We are facing this Error: ${err}`);
        } else {
            console.log('LOG: Mail sent Successfully 🚀');
            res.send('Mail sent successfully. Check Inbox');
        }
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.info(`server has started on ${PORT}`));
