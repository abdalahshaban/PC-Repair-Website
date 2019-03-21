var express = require('express');
var contactRouter = express.Router();
var nodemailer = require('nodemailer');


contactRouter.get('/', function (req, res, next) {
    res.render('contact', {
        title: 'contact',
        name: 'abdalah'
    });
});

//send email
contactRouter.post('/send', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Emailna',
        auth: {
            user: 'abdalahshsban@emailna.co',
            pass: '1234567'
        }
    });

    var mailOptions = {
        from: '"UWK ?" <abdalahshsban@emailna.co>',
        to: 'abdullahshaban@moakt.co',
        subject: "hello from pcRepair",
        text: 'you have a submission from ...Name:' + req.body.name + ' Email:' + req.body.email + 'Message: ' + req.body.message + '',
        html: '<p>you have a submission from ...</p><ul><li>Name:' + req.body.name + '</li><li> Email:' + req.body.email + '</li><li> Message: ' + req.body.message + '</li></ul>'
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        } else {
            console.log('message sent' + info.response, info);
            res.redirect('/')

        }
    })

})

module.exports = contactRouter;