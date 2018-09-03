const line = require('@line/bot-sdk');
const express = require('express');
var net=require('net');
var res=require('./res_type.js')

// create LINE SDK config from env variabless
const config = {
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET,
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/callback', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  switch (event.message.type) {
  case 'text':
    var source = event.source;
    switch (source.type) {
      case 'user':
        return client.replyMessage(event.replyToken, {
          type: 'text',
          text: '你是user'
        }).then(function() {
          return client.pushMessage(source.userId, {
            type: 'text',
            text: '使用userId推送訊息'
          });
        });
      case 'room':
        return client.replyMessage(event.replyToken, {
          type: 'text',
          text: '你是room'
        }).then(function() {
          return client.pushMessage(source.roomId, {
            type: 'text',
            text: '使用roomId推送訊息'
          });
        });
      case 'group':
        return client.replyMessage(event.replyToken, {
          type: 'text',
          text: '你是group'
        }).then(function() {
          return client.pushMessage(source.groupId, {
            type: 'text',
            text: '使用groupId推送訊息'
          });
        });
    }
}
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
