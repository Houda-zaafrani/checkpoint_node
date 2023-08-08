let nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
// host : 'mail.gmail.com',
// port : 465,
// secure : true,
service : "gmail",
auth: {
    user: "houda.zaafrani@gmail.com",
    pass: "houda141189",
  },
});

let mailOptions= {
  from: "houda.zaafrani@gmail.com",
  to: "zaafranih@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
}

transporter.sendMail(mailOptions,(error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
}

