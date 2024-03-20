const express = require("express");

const router = express.Router();

const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jeganpetchimuthu1996@gmail.com",
    pass: "vugmahbnxlzxptgr",
  },
});
router.post("/mail", (req, res) => {
  const { FirstName, LastName, email, phoneNumber, message } = req.body;
  const composemail = {
    from: "jeganpetchimuthu1996@gmail.com",
    to: "arunjegan1996@gmail.com",
    subject: "PortFolio Information",
    html: `FirstName:${FirstName}
           LastNumber:${LastName}
                email:${email}
          PhoneNumber:${phoneNumber}
              message:${message}
     `,
  };

  sender.sendMail(composemail, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});
module.exports = router;
