const sendEmailRoute = require('./send-email')

module.exports = (app) => {
    app.use('/', sendEmailRoute.sendEmail)
}