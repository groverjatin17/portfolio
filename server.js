const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const path = require('path')
const { OAuth2 } = google.auth;

const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//So what is happening is that OAuthclient uses clientId, clientSecret and refreshToken to generate access Token
const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REFRESH_TOKEN
);

oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
});

//the access token that is valid for 3600 seconds.
const accessToken = oauth2Client.getAccessToken();

//creating a transporter that will be used to send mail later.
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

//checking and logging whether the transporter is healthy
transporter.verify(function (error, success) {
    if (error) {
        console.log('Transporter not verified ⚒', error);
    } else {
        console.log('Transporter verified successfully ✅ ', success);
    }
});
//generating express instance
const app = express();

//middlewares that are called upon each api execution
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

//serving react's front-end
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  //api that receives name, email and message from the form and then sends mail
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
            res.send(`We are facing this Error: ${err} ❌`);
        } else {
            console.log('LOG: Mail sent Successfully 🚀');
            res.send('Mail sent successfully. Check Inbox!!');
        }
    });
});

//payment api for stripe
app.post('/payment', (req, res) => {
    const body ={
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'inr',
    }

    //calling stripe API.
    //stripe response is broken down onto stripe error and stripe response.
    stripe.charges.create(body, (stripeError, stripeResponse) => {
        if(stripeError) {
            res.status(500).send({error: stripeError});
        } else {
            res.status(200).send({success: stripeResponse});
        }
    })
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.info(`server has started on ${PORT}`);
});
