import nodemailer from "nodemailer";

var mailOptions = {
  from: "nazmulhasan02901@gmail.como",
  to: "nazmulhasan0290@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};
nodemailer
  .createTransport({
    service: "gmail",
    auth: {
      user: "nazmulhasan02901@gmail.com",
      pass: "aevgdsegqfuifbsi",
    },
  })
  .sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
