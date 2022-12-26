require('dotenv').config()
const express = require('express')
const app = express()

const MessagingResponse = require('twilio').twiml.MessagingResponse
 //const client = require('twilio')(acountSid,authToken)

app.post('/sms', (res, req)=>{
    const twiml = new MessagingResponse()
    twiml.message("Thanks for signing up!");
    res.writeHead(200,{'Content-type': 'text/xml'})
    res.end(twiml.toString());
})
app.listen(process.env.PORT, ()=>{
    console.log('server run');
})


// const accountSid = "AC6f413c1c923030c8840deb74d8722134";
// const authToken = process.env.AUTH_TOKEN;
// const client = require("twilio")(accountSid, authToken);

// client.messages
//   .create({ body: "Mi puta te amo", from: "+13854693089", to: "+5353609039" })
//   .then(message => console.log(message.status));