const nodemailer = require('nodemailer')
const config = require('../config/default.json');

const sendEmail = async () => {
    let transporter = nodemailer.createTransport(config.smtp_config)
    transporter.verify((err, res) => {
        if (err) console.log(`Server is not ready to take message`)
        else console.log(`Server is ready to take message`)
    })
    await transporter.sendMail({
        from: "id_from_which_you_are_sending_email",
        to: "id_to_whom_you_want_to_send_email",
        subject: "Report",
        text: "Hello there! \n Here I am attaching excel report for Sales Progress! PFA.",
        attachments: [{
            filename: "Report.xls",
            path: './sample_excel.xlsx'
        }]
    })
    return true
}



module.exports = {
    sendEmail
}