// Twilio Credentials
var accountSid = 'AC7b85ac4abc195dc2fa433cfd5b880b55';
var authToken = 'f4f75e9d6e2298d720276f489aff387e';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);
var number = "+1"+document.getElementById('phonenumber');
var body = "i love you";

function sendMessage() {
    client.messages.create({
        to: number,
        from: "+12403033689",
        body: body,
    }, function (err, message) {
        console.log(message.sid);
    });


}