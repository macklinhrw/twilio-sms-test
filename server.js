// const express = require("express");
const { MessagingResponse } = require("twilio").twiml;

// const app = express();

// app.post("/sms", (req, res) => {
//   const twiml = new MessagingResponse();

//   twiml.message("The Robots are coming! Head for the hills!");

//   res.type("text/xml").send(twiml.toString());
// });

// app.listen(3000, () => {
//   console.log("Express server listening on port 3000");
// });

const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/MessageStatus", (req, res) => {
  const messageSid = req.body.MessageSid;
  const messageStatus = req.body.MessageStatus;

  console.log(`SID: ${messageSid}, Status: ${messageStatus}`);

  res.sendStatus(200);
});

app.post("/sms", (req, res) => {
  console.log("Recieved message:");
  console.log(req.body.Body);

  // const twiml = new MessagingResponse();
  // twiml.message("The Robots are coming! Head for the hills!");
  // res.type("text/xml").send(twiml.toString());
  res.status(200);
});

http.createServer(app).listen(1337, () => {
  console.log("Express server listening on port 1337");
});
