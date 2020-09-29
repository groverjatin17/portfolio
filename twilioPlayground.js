// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = "ACc7d9d07af89812941f3160f2aca2c5f2";
const authToken = "02eafcf1865ea2d72868fd623b8c1620";
const client = require("twilio")(accountSid, authToken);

let sid = 0;
// client.messages
//   .create({
//     body: "Thank you for joining Jatin's team",
//     from: "+12184963628",
//     to: "+917814566719",
//   })
//   .then((message) => {
//     console.log(message.sid);
//     console.log('message', message);
//   })
//   .catch((error) => {
//       console.log('error', error);
//   });

//To send the OTP code
// client.verify.services
//   .create({ friendlyName: "My First Verify Service" })
//   .then((service) => {
//     console.log("service.sid", service.sid);
//     sid = service.sid;
//     console.log("sid", sid);
//     client.verify
//       .services(sid)
//       .verifications.create({ to: "+917814566719", channel: "sms" })
//       .then((verification) => {
//         console.log(verification.status);
//         console.log("verification ", verification);
//       });
//   });

// To verify a user via OTP code
// client.verify.services('VA7d1ed608d415b4f54f25179fdcd6731c')
//       .verificationChecks
//       .create({to: '+917814566719', code: '920444'})
//       .then(verification_check => {
//           console.log(verification_check.status);
//           console.log(verification_check);
//         })
//       .catch(err => {
//           console.log('error', err);
//       })



// client.verify.services('VA7d1ed608d415b4f54f25179fdcd6731c')
//       .verificationChecks
//       .create({
//          verificationSid: 'VE058989b39f5d09f4ab95d42e3dd5b5c6',
//          code: '920444'
//        })
//       .then(verification_check => {
//           console.log(verification_check.status);
//           console.log(verification_check);
//         })
//       .catch(err => {
//           console.log('error', err);
//       })