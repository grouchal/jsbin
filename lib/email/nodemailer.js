var nodemailer = require('nodemailer');

function createTransport(authObj) {
  var transporter = nodemailer.createTransport({
    service: 'Mailgun',
    auth: authObj,
  });

  return transporter;
}


function createNodeMailerTransport(smtpObj) {
  var transporter = nodemailer.createTransport(smtpObj);
  return transporter;
}

module.exports = createTransport;
