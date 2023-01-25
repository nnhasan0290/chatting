import nodemailer from "nodemailer";

export let savedOTPS = {};

const sendOtpEmail = (email) => {
  let digits = "0123456789";
  let limit = 4;
  let otp = "";
  for (i = 0; i < limit; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }

  const mailOptions = {
    from: "nazmulhasan02901@gmail.com",
    to: `${email}`,
    subject: "Email Verification Code",
    html: `<p>Enter the otp: ${otp} to verify your email address</p>`,
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
        res.status(500).send("couldn't send");
      } else {
        savedOTPS[email] = otp;
        setTimeout(() => {
          delete savedOTPS.email;
        }, 60000);
        res.send("sent otp");
      }
    });
};

export default sendOtpEmail;
