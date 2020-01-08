const sendEmailController = require('../controller/send-email')

const sendEmail = async (req, res) => {
    try {
        await sendEmailController.sendEmail()
        return res.send({
            "error": false,
            "message": "Email sent successfully!" 
        })
    } catch (error) {
        return res.send({
            "error": true,
            "error_description": "Error while sendig email with excel attachement"
        })
    }
}

module.exports = {
    sendEmail
}