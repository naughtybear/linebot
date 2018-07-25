const line = require('@line/bot-sdk');
const express = require('express');
var net=require('net');

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
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  //var outdata;
  var net_client = net.connect(992, '140.123.97.126', function () {
    console.log('client端：向 server端 請求連線')
    })

  // connect event : 與 server端 連線成功時的事件
  net_client.on('connect', function (data) {
    console.log('client端：與 server端 連線成功，可以開始傳輸資料')
    })

  // write event: 傳輸資料的事件
  net_client.write(event.message.text, function () {
    console.log('client端：開始傳輸資料，傳輸的資料為 '+event.message.text)
    })
  
  // data event： 到收到資料傳輸時觸發事件 ， argument 為對象傳輸的物件
  net_client.on('data', function (data) {
    console.log('client端：收到 server端 傳輸資料為 ' + data.toString())
    echo = { type: 'text', text: data.toString() };
    //結束 client 端 連線
    net_client.end()
    return client.replyMessage(event.replyToken, echo);
    })
  //console.log(outdata);
  // create a echoing text message
  //const echo = { type: 'text', text: outdata };
  //console.log(echo);
  // use reply API  
  //return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
